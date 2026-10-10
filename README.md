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
pnpm install
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
pnpm dev
```

## Scripts

| Script          | Description                              |
| --------------- | ---------------------------------------- |
| `pnpm dev`      | Start the dev server and open a browser  |
| `pnpm host`     | Start the dev server exposed on your LAN |
| `pnpm build`    | Type-check and build for production      |
| `pnpm preview`  | Serve the production build locally       |
| `pnpm lint`     | Show ESLint errors                       |
| `pnpm lint:fix` | Fix ESLint errors                        |
| `pnpm format`   | Format `src` with Prettier               |

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
