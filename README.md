# Film Collection

Film Collection is a small Angular application for browsing a curated list of films, searching by title, viewing details, and marking favorites.

## Features

- Film list with cards, posters, rating, genre, and release year
- Search by title
- Favorite toggle with in-memory state updates
- Film details page with description and formatted duration
- Breadcrumbs, header, and footer layout
- Custom `duration` pipe for converting minutes into a readable time format
- Autofocus directive for the search input on the home page

## Tech Stack

- Angular 21
- TypeScript
- RxJS
- Vitest for unit tests

## Project Structure

- `src/app/pages/home` - main catalog page with search and film cards
- `src/app/pages/film-details` - single-film details view
- `src/app/components` - reusable UI components such as header, footer, breadcrumbs, and film card
- `src/app/services/film.service.ts` - app state, search, and favorite toggle logic
- `src/app/models` - film model and seed data
- `src/app/pipes/duration-pipe.ts` - duration formatting pipe
- `src/app/directives/autofocus.ts` - autofocus directive used on the search field

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm start
```

Open `http://localhost:4200/` in your browser.

### Run tests

```bash
npm test
```

### Build for production

```bash
npm run build
```

## Available Scripts

- `npm start` - starts the Angular dev server
- `npm run build` - creates a production build
- `npm run watch` - rebuilds on file changes in development mode
- `npm test` - runs the test suite

## Routing

- `/` - home page with the film collection
- `/films/:id` - details page for a selected film

## Notes

- Film data is stored in memory and seeded from `src/app/models/films.data.ts`.
- Favorite status updates are local to the client and are reflected immediately in the UI.
