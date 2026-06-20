import MovieCard from './MovieCard';
import SkeletonCard from './SkeletonCard';

const SKELETON_COUNT = 12;

export default function MovieGrid({ movies, loading }) {
  if (loading) {
    return (
      <div className="movie-grid">
        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
