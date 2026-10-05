# Portfolio
This will be a static page to show the work or skills i have been into 

## Stack
- **Next.js (App Router)** with static export (`output: "export"`)
- **Framer Motion** for scroll-driven, layout and circle-reveal animations
- **Vanilla CSS** design system in `src/styles/globals.css` (no Tailwind)

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content
All text, journey chapters, projects, skills and gallery items live in
`src/data/portfolio.ts`. Images go in `public/images/...` and are referenced as `/images/...`.

## Deploy to GitHub Pages
1. Push to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. `.github/workflows/deploy.yml` builds the static site into `out/` and publishes it.

The base path is resolved automatically: a repo named `Portfolio` is served at
`https://<user>.github.io/Portfolio/`, while a `<user>.github.io` repo is served at the root.

```bash
npm run build      # local production build → ./out (basePath defaults to /Portfolio)
```
