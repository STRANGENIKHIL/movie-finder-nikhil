const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';
export const IMAGE_BASE_LARGE = 'https://image.tmdb.org/t/p/w780';

export const getImageUrl = (path, large = false) => {
  if (!path) return null;
  return `${large ? IMAGE_BASE_LARGE : IMAGE_BASE}${path}`;
};

export const fetchGenres = async () => {
  const res = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  if (!res.ok) throw new Error(`Failed to fetch genres (${res.status})`);
  return res.json();
};

export const fetchPopularMovies = async (page = 1) => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=en-US`
  );
  if (!res.ok) throw new Error(`Failed to fetch movies (${res.status})`);
  return res.json();
};

export const fetchMoviesByGenre = async (genreId, page = 1) => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc&page=${page}&language=en-US`
  );
  if (!res.ok) throw new Error(`Failed to fetch genre movies (${res.status})`);
  return res.json();
};

export const searchMovies = async (query, page = 1) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}&language=en-US`
  );
  if (!res.ok) throw new Error(`Search failed (${res.status})`);
  return res.json();
};

export const fetchMovieDetails = async (id) => {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits&language=en-US`
  );
  if (!res.ok) throw new Error(`Failed to fetch movie details (${res.status})`);
  return res.json();
};
