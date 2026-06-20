# AI_LOG.md

## Tools Used
- **Antigravity IDE (AI Coding Assistant)** — Used throughout the entire project for scaffolding, component generation, and debugging.

---

## Best Prompts

**Prompt 1:** *"Build a Movie Discovery App in Next.js using TMDB API with browse, search, favorites with localStorage, loading/error/empty states, and strict pagination of exactly 12 results per page using Next/Previous buttons only."*
> **Why it worked:** Provided the full spec upfront including all constraints (12 per page, no infinite scroll). The AI immediately produced a well-structured plan with the correct architecture.

**Prompt 2:** *"Create a React Context for favorites that persists to localStorage and can be shared across MovieCard, detail page, and favorites page without prop drilling."*
> **Why it worked:** Specifying the exact problem (prop drilling) and naming the components that need access forced a focused, reusable solution instead of a local hook.

**Prompt 3:** *"Use CSS only (no Tailwind) with a cinematic dark theme: near-black background, gold accent #f5c518, purple accent #8b5cf6, Bebas Neue for headings, glassmorphism cards, shimmer skeleton loaders."*
> **Why it worked:** Listing specific hex values and named design patterns (glassmorphism, shimmer) left no room for generic output and produced a visually polished result on the first attempt.

---

## What I Fixed Manually

**Issue — Pagination page count mismatch:**
The AI initially set `totalPages` directly from TMDB's `total_pages` (which returns up to 500), but it didn't cap it when combined with the 12-results-per-page slice. This caused the page counter to show 500 pages when the actual usable content ran out much earlier. I manually added `Math.min(data.total_pages, 500)` and verified the UX made sense across several searches with varying result counts.

**Issue — FavoriteButton re-render loop:**
The AI initially passed `Math.random()` as a button ID inside FavoriteButton, which caused a new ID on every render and triggered unnecessary re-renders. I changed it to use `movieId` as a prop so the ID is stable.
