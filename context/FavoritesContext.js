'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem('movieFavorites');
      if (stored) setFavorites(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to load favorites:', e);
    }
  }, []);

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const exists = prev.find((f) => f.id === movie.id);
      const updated = exists
        ? prev.filter((f) => f.id !== movie.id)
        : [...prev, movie];
      localStorage.setItem('movieFavorites', JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (id) => favorites.some((f) => f.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, mounted }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
}
