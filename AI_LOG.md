# AI Log

## Tool Used

### Antigravity IDE (AI Coding Assistant)

I used Antigravity throughout the project to speed up development, generate boilerplate code, and help debug issues. While AI handled much of the initial setup, I manually tested features, fixed bugs, and refined the final implementation.

---

## Best Prompts

### 1. Project Setup

> Build a Movie Discovery App in Next.js using the TMDB API with movie browsing, search, favorites using localStorage, loading/error states, and exactly 12 results per page using Next/Previous buttons.

**Why it was useful**

This prompt generated the basic project structure, API integration, and pagination workflow. It provided a solid starting point and reduced the amount of setup work required.

### 2. Favorites State Management

> Create a React Context for managing favorite movies that persists to localStorage and can be accessed across multiple pages without prop drilling.

**Why it was useful**

This helped organize the favorites feature and made it easier to share state between components without passing props through several layers.

### 3. UI Design

> Create a dark movie-themed UI using CSS with glassmorphism cards, skeleton loaders, and modern hover effects.

**Why it was useful**

The generated design gave me a strong visual foundation that I later customized by adjusting colors, spacing, and responsiveness.

---

## Manual Fixes

### Pagination Logic

The initial implementation required adjustments to correctly support displaying exactly 12 movies per page.

After testing multiple searches and navigation scenarios, I refined the pagination logic and verified that page transitions behaved consistently.

### Favorites Optimization

While testing the favorites feature, I noticed unnecessary re-renders caused by unstable identifiers.

I replaced the generated values with stable movie IDs, which improved performance and ensured predictable behavior.

### UI Refinements

Several design improvements were made manually after the initial AI-generated implementation:

* Improved spacing and alignment
* Adjusted card sizing and layouts
* Enhanced responsiveness
* Refined typography and hover effects
* Improved overall user experience

---

## Reflection

Antigravity significantly reduced development time by handling repetitive setup tasks and generating initial implementations.

However, manual testing, debugging, optimization, and UI refinements were still necessary to ensure the final application met the project requirements and delivered a polished user experience.
