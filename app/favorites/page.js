'use client';
import { useFavorites } from '@/context/FavoritesContext';
import MovieGrid from '@/components/MovieGrid';
import ErrorState from '@/components/ErrorState';
import Link from 'next/link';

export default function FavoritesPage() {
  const { favorites, mounted } = useFavorites();

  if (!mounted) {
    return (
      <div className="loading-full">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <main>
      <div className="page-wrapper">
        <div className="favorites-header">
          <h1 className="fav-page-title">
            ❤️ My <span className="gold">Favorites</span>
          </h1>
          <p className="fav-page-sub">
            {favorites.length > 0
              ? `${favorites.length} movie${favorites.length !== 1 ? 's' : ''} saved`
              : 'Your saved movies will appear here.'}
          </p>
        </div>

        {favorites.length === 0 ? (
          <ErrorState
            isEmpty={true}
            message="You haven't saved any favorites yet. Browse movies and click the heart icon to save them."
          />
        ) : (
          <MovieGrid movies={favorites} loading={false} />
        )}

        {favorites.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/" className="detail-back" style={{ display: 'inline-flex' }}>
              ← Browse More Movies
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
