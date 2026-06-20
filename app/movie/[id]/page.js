'use client';
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { fetchMovieDetails, getImageUrl } from '@/lib/tmdb';
import { useFavorites } from '@/context/FavoritesContext';
import ErrorState from '@/components/ErrorState';

export default function MovieDetailPage({ params }) {
  const { id } = use(params);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err.message || 'Failed to load movie details.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-full">
        <div className="spinner" />
      </div>
    );
  }

  if (error || !movie) {
    return <ErrorState message={error || 'Movie not found.'} />;
  }

  const isFav = isFavorite(movie.id);
  const posterUrl = getImageUrl(movie.poster_path, true);
  const year = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
  const runtime = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
    : null;
  const cast = movie.credits?.cast?.slice(0, 12) || [];

  const movieForFav = {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
  };

  return (
    <div className="detail-page">
      <Link href="/" className="detail-back">
        ← Back to Browse
      </Link>

      <div className="detail-hero">
        {/* Poster */}
        <div className="detail-poster">
          {posterUrl ? (
            <img src={posterUrl} alt={`${movie.title} poster`} />
          ) : (
            <div className="detail-poster-placeholder">🎬</div>
          )}
        </div>

        {/* Info */}
        <div className="detail-info">
          {movie.genres && movie.genres.length > 0 && (
            <div className="detail-genres">
              {movie.genres.map((g) => (
                <span key={g.id} className="genre-tag">{g.name}</span>
              ))}
            </div>
          )}

          <h1 className="detail-title">{movie.title}</h1>

          <div className="detail-meta">
            <span className="detail-rating">⭐ {rating}</span>
            {year !== 'N/A' && (
              <>
                <span className="detail-sep">·</span>
                <span className="detail-year">{year}</span>
              </>
            )}
            {runtime && (
              <>
                <span className="detail-sep">·</span>
                <span className="detail-runtime">{runtime}</span>
              </>
            )}
          </div>

          {movie.overview && (
            <p className="detail-overview">{movie.overview}</p>
          )}

          <button
            id={`detail-fav-btn-${movie.id}`}
            className={`detail-fav-btn ${isFav ? 'detail-fav-btn-active' : ''}`}
            onClick={() => toggleFavorite(movieForFav)}
          >
            {isFav ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </button>
        </div>
      </div>

      {/* Cast */}
      {cast.length > 0 && (
        <div className="detail-cast">
          <h2 className="detail-cast-title">Cast</h2>
          <div className="cast-grid">
            {cast.map((member) => (
              <div key={member.id} className="cast-card">
                {member.profile_path ? (
                  <img
                    className="cast-photo"
                    src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                    alt={member.name}
                    loading="lazy"
                  />
                ) : (
                  <div className="cast-photo-placeholder">🎭</div>
                )}
                <div className="cast-name">{member.name}</div>
                <div className="cast-char">{member.character}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
