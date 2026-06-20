'use client';

export default function FavoriteButton({ isFav, onClick, movieId }) {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      id={`fav-btn-${movieId}`}
      className={`fav-btn ${isFav ? 'fav-btn-active' : ''}`}
      onClick={handleClick}
      aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
    >
      <span className="fav-icon">{isFav ? '❤️' : '🤍'}</span>
    </button>
  );
}
