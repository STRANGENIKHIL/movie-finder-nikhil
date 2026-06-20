# movie-finder-nikhil

A cinematic Movie Discovery App built with **Next.js 14** and the **TMDB API**.

## Features

- 🎬 **Browse** — Responsive grid of popular movies (12 per page)
- 🔍 **Search** — Live search with debounce as you type
- 📄 **Details** — Full movie detail page with cast, genres, rating, runtime
- ❤️ **Favorites** — Add/remove favorites, persists across page reloads (localStorage)
- ⏳ **States** — Shimmer skeleton loading, clear error messages, empty state UI

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Vanilla CSS (CSS Modules)
- **API**: [TMDB API](https://www.themoviedb.org/)
- **State**: React Context + localStorage
- **Deployment**: Vercel

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/[yourusername]/movie-finder-nikhil.git
cd movie-finder-nikhil
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
```

Get your free API key at [themoviedb.org](https://www.themoviedb.org/settings/api).

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Assignment Requirements

| Req | Status |
|-----|--------|
| R1 — Pagination (Next/Prev, 12/page) | ✅ |
| R2 — Repo named `movie-finder-nikhil` | ✅ |
| R3 — AI_LOG.md present | ✅ |
| R4 — Footer: `Built for Jeevan – Nikhil Pathak` | ✅ |

---

Built for **Jeevan** – Nikhil Pathak
