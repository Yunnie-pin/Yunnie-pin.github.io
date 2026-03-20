# yunnie-pin.github.io

**Live:** https://yunnie-pin.github.io

---

## Tech Stack

- [Astro v5](https://astro.build) — static site framework
- [Tailwind CSS v4](https://tailwindcss.com) — styling via `@tailwindcss/vite`
- [React v19](https://react.dev) — interactive islands
- [Three.js](https://threejs.org) — particle background on hero

## Project Structure

```
src/
├── components/       # Astro UI components
├── data/             # All content (edit these to update the site)
│   ├── about.ts      # Bio, stats, tech stack
│   ├── contact.ts    # Social links & email
│   ├── experience.ts # Work experience
│   ├── profile.ts    # Typewriter roles
│   └── projects.ts   # Projects list
├── layouts/          # Base HTML layout
├── pages/            # Routes (index.astro)
└── styles/           # global.css — design tokens & utility classes
```

## Getting Started

```bash
npm install
npm run dev       # localhost:4321
npm run build     # production build → dist/
npm run preview   # preview production build
```

