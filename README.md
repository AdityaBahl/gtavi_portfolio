# GTA VI — Themed Developer Portfolio

A neon, GTA VI inspired single-page portfolio built with React 19, TypeScript,
Vite, and Tailwind CSS v4. All content is dummy data for now — there is no
backend. Swap the values in `src/data/portfolio.ts` to make it yours.

## Getting started

```bash
pnpm install   # or npm install / yarn
pnpm dev       # start the dev server at http://localhost:5173
```

## Scripts

- `dev` — start the Vite dev server
- `build` — type-check and produce a production build in `dist/`
- `preview` — preview the production build locally
- `typecheck` — run TypeScript without emitting

## Project structure

```
src/
  App.tsx                 # composes the page sections
  main.tsx                # React entry point
  index.css               # global styles + GTA VI neon theme (Tailwind v4)
  data/
    portfolio.ts          # all dummy content (profile, skills, projects, ...)
    types.ts              # shared TypeScript types
  hooks/
    useScrollReveal.ts    # IntersectionObserver-based scroll reveal
  components/
    Intro.tsx             # animated intro overlay
    Header.tsx            # sticky nav
    Hero.tsx              # landing hero with neon sunset
    About.tsx             # player profile / stats
    Skills.tsx            # "arsenal" skill bars
    Work.tsx              # featured projects + cursor-follow preview
    ProjectPreview.tsx    # floating hover preview card
    Footer.tsx            # contact / socials
    icons.tsx             # shared inline SVG icons
```

## Customizing

Everything shown on the page comes from `src/data/portfolio.ts`:

- `profile` — name, role, tagline, email, bio copy
- `navItems` — header navigation links
- `stats` — the three headline numbers in the About section
- `skills` — skill names and XP values (0–100)
- `projects` — featured work cards and their hover previews
- `socialLinks` — footer links
- `introImages` — the intro collage photos

When you are ready to add a backend, replace these exports with data fetched
from your API — the components consume the same shapes defined in `types.ts`.
