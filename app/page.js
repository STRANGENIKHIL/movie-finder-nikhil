'use client';
import { useState, useEffect, useCallback } from 'react';
import { fetchPopularMovies, searchMovies, fetchMoviesByGenre, fetchGenres } from '@/lib/tmdb';
import { useDebounce } from '@/hooks/useDebounce';
import MovieGrid from '@/components/MovieGrid';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import ErrorState from '@/components/ErrorState';
import GenreFilter from '@/components/GenreFilter';

const MOVIES_PER_PAGE = 12;

export default function HomePage() {
  const [movies, setMovies]           = useState([]);
  const [genres, setGenres]           = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);
  const [page, setPage]               = useState(1);
  const [totalPages, setTotalPages]   = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGenre, setActiveGenre] = useState(null); // genre id or null

  const debouncedSearch = useDebounce(searchQuery, 500);

  // Fetch genres once on mount
  useEffect(() => {
    fetchGenres()
      .then((data) => setGenres(data.genres || []))
      .catch(() => {}); // genres failing is non-critical
  }, []);

  const loadMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let data;
      if (debouncedSearch.trim()) {
        // Search takes priority over genre filter
        data = await searchMovies(debouncedSearch, page);
      } else if (activeGenre) {
        data = await fetchMoviesByGenre(activeGenre, page);
      } else {
        data = await fetchPopularMovies(page);
      }
      setMovies((data.results || []).slice(0, MOVIES_PER_PAGE));
      setTotalPages(Math.min(data.total_pages || 1, 500));
    } catch (err) {
      setError(err.message || 'Failed to load movies. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [page, debouncedSearch, activeGenre]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  // Reset to page 1 when search or genre changes
  useEffect(() => { setPage(1); }, [debouncedSearch]);
  useEffect(() => { setPage(1); }, [activeGenre]);

  const handleGenreSelect = (genreId) => {
    setActiveGenre(genreId);
    setSearchQuery(''); // clear search when picking a genre
  };

  const isSearching = debouncedSearch.trim().length > 0;
  const isEmpty     = !loading && !error && movies.length === 0;

  // Section title logic
  const activeGenreName = genres.find((g) => g.id === activeGenre)?.name;
  const sectionTitle = isSearching
    ? `Results for "${debouncedSearch}"`
    : activeGenreName
    ? activeGenreName
    : 'Popular Movies';

  return (
    <main>
      {/* Hero + Search */}
      <div className="hero">
        <h1 className="hero-title">
          Discover <span className="gold">Movies</span>
        </h1>
        <p className="hero-subtitle">
          Browse thousands of films, search by title, and save your favorites.
        </p>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Genre Filter Bar */}
      {!isSearching && genres.length > 0 && (
        <GenreFilter
          genres={genres}
          activeGenre={activeGenre}
          onSelect={handleGenreSelect}
        />
      )}

      {/* Content */}
      <div className="page-wrapper">
        <div className="section-header">
          <h2 className="section-title">{sectionTitle}</h2>
          {!loading && !error && movies.length > 0 && (
            <span className="section-count">
              Page {page} of {totalPages}
            </span>
          )}
        </div>

        {error ? (
          <ErrorState message={error} onRetry={loadMovies} />
        ) : isEmpty ? (
          <ErrorState
            message={
              isSearching
                ? `No movies found for "${debouncedSearch}". Try a different search.`
                : 'No movies found for this category.'
            }
            isEmpty={true}
          />
        ) : (
          <>
            <MovieGrid movies={movies} loading={loading} />
            {!loading && movies.length > 0 && (
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            )}
          </>
        )}
      </div>
    </main>
  );
}
