'use client';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <span className="search-icon">🔍</span>
      <input
        id="search-input"
        type="text"
        className="search-input"
        placeholder="Search movies by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        aria-label="Search movies"
      />
      {value && (
        <button
          className="search-clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
