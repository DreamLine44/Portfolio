# Alhassan Trawally — Portfolio

Production-ready portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

```
src/
├── api/             axios client (services/contactService.js swaps to a real endpoint later)
├── components/       Navbar, Footer, ProjectCard, ErrorBoundary, ui/ (Button, Card, SectionHeading)
├── context/          ThemeContext (dark/light mode)
├── data/              static content: projects, skills, services, experience — shaped like future API responses
├── hooks/             useActiveSection, useCountUp
├── sections/          Hero, Stats, About, Skills, Services, Projects, Experience, GithubShowcase, Contact, HiringCta
├── App.jsx
└── main.jsx
```

## Before you ship it

1. Drop your real headshot into `src/assets/` and swap it into `src/sections/Hero.jsx` (currently a placeholder monogram).
2. Add your CV at `public/resume/Baba-L-Tarawally-CV.pdf` — the Download CV buttons already point there.
3. Replace the HomeFinder GM screenshot placeholder at `public/projects/homefinder.svg` with real product screenshots.
4. Update links in `src/data/experience.js` (`socials`) and `src/data/projects.js` (live demo / GitHub URLs).
5. Wire the contact form to a real backend: set `VITE_CONTACT_API_URL` in a `.env` file and implement a `POST /contact` endpoint — `src/services/contactService.js` already calls it once the env var is set.

## Color system

Exact tokens from the brief are defined as CSS variables / Tailwind v4 theme tokens in `src/index.css` (`@theme` block) — primary `#2563EB`, accent purple `#7C3AED`, accent cyan `#06B6D4`, etc. Dark mode overrides the same variables.
