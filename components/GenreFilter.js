'use client';

// Genre emoji map for visual flair
const GENRE_ICONS = {
  28:    '⚔️',  // Action
  12:    '🧭',  // Adventure
  16:    '🎨',  // Animation
  35:    '😂',  // Comedy
  80:    '🔫',  // Crime
  99:    '🎥',  // Documentary
  18:    '🎭',  // Drama
  10751: '👨‍👩‍👧',  // Family
  14:    '🧙',  // Fantasy
  36:    '📜',  // History
  27:    '👻',  // Horror
  10402: '🎵',  // Music
  9648:  '🔍',  // Mystery
  10749: '💕',  // Romance
  878:   '🚀',  // Sci-Fi
  10770: '📺',  // TV Movie
  53:    '🔪',  // Thriller
  10752: '🪖',  // War
  37:    '🤠',  // Western
};

export default function GenreFilter({ genres, activeGenre, onSelect }) {
  return (
    <div className="genre-filter-wrapper">
      <div className="genre-filter-scroll">
        {/* "All" pill */}
        <button
          id="genre-all"
          className={`genre-pill ${activeGenre === null ? 'genre-pill-active' : ''}`}
          onClick={() => onSelect(null)}
        >
          🎬 All
        </button>

        {genres.map((genre) => (
          <button
            key={genre.id}
            id={`genre-${genre.id}`}
            className={`genre-pill ${activeGenre === genre.id ? 'genre-pill-active' : ''}`}
            onClick={() => onSelect(genre.id)}
          >
            {GENRE_ICONS[genre.id] || '🎞️'} {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
}
