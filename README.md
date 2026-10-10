# home-web

Frontend for Home, built with React, TypeScript, Vite, MUI, Redux Toolkit (RTK Query) and React Router.

## Getting Started

### Clone the repo

```
git clone https://github.com/dinitlukos/home-web.git
cd home-web
```

### Install dependencies

```
npm install
```

### Configure environment

Copy the example env file and adjust the values:

```
cp .env.development.example .env.development
```

| Variable       | Description                | Default                 |
| -------------- | -------------------------- | ----------------------- |
| `VITE_API_URL` | Base URL of the API server | `http://localhost:3000` |

### Run

```
npm run dev
```

## Scripts

| Script             | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start the dev server and open a browser  |
| `npm run host`     | Start the dev server exposed on your LAN |
| `npm run build`    | Type-check and build for production      |
| `npm run preview`  | Serve the production build locally       |
| `npm run lint`     | Show ESLint errors                       |
| `npm run lint:fix` | Fix ESLint errors                        |
| `npm run format`   | Format `src` with Prettier               |

## Project Structure

```
src/
  app/         Redux store and RTK Query API slice
  components/  Shared UI components
  features/    Redux slices grouped by feature
  hooks/       Reusable React hooks
  pages/       Route-level pages (Home, Auth)
  routes/      Router configuration
  themes/      MUI theme provider
```

## Credits

Bootstrapped from the [vite-mui-ts](https://github.com/emre-cil/vite-mui-ts) boilerplate by emre-cil.
