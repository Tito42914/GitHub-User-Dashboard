# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Prokect notes - GitHub User Dashboard

A React + Vite dashboard for searching GitHub users and viewing profile and repository data.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Native Fetch API

## Current Features

- Project setup with React and Vite
- Tailwind CSS configured
- Static dashboard layout
- Component structure created
- Search input state added with `useState`
- Search form wired with controlled input props
- Form submission prevented from refreshing the page
- GitHub user profile fetch added
- Empty search and user-not-found errors handled
- Temporary profile render check added
- Profile data rendered in `ProfileCard`
- GitHub stats rendered in `StatsPanel`
- Loading state added during API requests
- GitHub repositories fetched and stored in state
- Repository cards rendered with repo links, descriptions, language, stars, and forks
- Repositories sorted by stars and limited to the top 10
- Repository card layout polished for wrapping and long names
- Search input accessibility improved with a screen-reader label and focus styles

## Build Log

### Day 1

Set up the initial React + Vite project, installed Tailwind CSS, connected Tailwind to Vite, confirmed live browser updates with the dev server, and created the first static component structure.

### Day 2

Cleaned up the starter imports in `App.jsx`, corrected component import casing, added `username` state, passed state and setter props into `SearchBar`, converted the search input into a controlled input, and added a basic submit handler that prevents the browser's default form refresh.

### Session 3

Connected the search form to the GitHub Users API with `fetch`, added profile and error state, handled empty searches, checked `response.ok` for invalid users, stored successful profile data in state, and added temporary UI checks to confirm the data flow works.

### Session 4

Passed fetched profile data into `ProfileCard` and `StatsPanel`, replaced placeholder profile UI with real GitHub user details, rendered avatar/name/login/bio/profile link, and displayed follower/following/repository counts from the API response.

### Session 5

Added loading and repository state, extended the search flow to fetch repositories from the GitHub API, handled repository fetch errors, passed repository data into `RepoList`, and rendered individual `RepoCard` components with links, descriptions, language, stars, and forks.

### Session 6

Polished the repository section by sorting repos by star count, limiting the visible list to the top 10, adding a repository count message, improving card wrapping for long content, and adding initial accessibility improvements to the search input with a hidden label and visible focus styles.

## Next Steps

- Continue accessibility checks and keyboard/focus polish
- Clean up README starter text and polish the portfolio presentation
- Add component tests for search, profile, stats, and repositories
- Add light performance improvements such as `useMemo` for sorted repositories
- Consider deployment after the MVP polish pass
