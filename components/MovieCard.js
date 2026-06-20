'use client';
import Link from 'next/link';
import { getImageUrl } from '@/lib/tmdb';
import FavoriteButton from './FavoriteButton';
import { useFavorites } from '@/context/FavoritesContext';

export default function MovieCard({ movie }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(movie.id);
  const year = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : '?';
  const posterUrl = getImageUrl(movie.poster_path);

  return (
    <Link href={`/movie/${movie.id}`} className="movie-card" id={`movie-card-${movie.id}`}>
      <div className="movie-card-poster">
        {posterUrl ? (
          <img
            className="movie-card-img"
            src={posterUrl}
            alt={`${movie.title} poster`}
            loading="lazy"
          />
        ) : (
          <div className="no-poster">
            🎬
            <span>No Poster</span>
          </div>
        )}
        <div className="movie-card-overlay">
          <span className="view-btn">View Details</span>
        </div>
        <div className="movie-card-rating">⭐ {rating}</div>
        <div className="movie-card-fav">
          <FavoriteButton
            isFav={isFav}
            onClick={() => toggleFavorite(movie)}
            movieId={movie.id}
          />
        </div>
      </div>
      <div className="movie-card-info">
        <div className="movie-card-title" title={movie.title}>
          {movie.title}
        </div>
        <div className="movie-card-year">{year}</div>
      </div>
    </Link>
  );
}
