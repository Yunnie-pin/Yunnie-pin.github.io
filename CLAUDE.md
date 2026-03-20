# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
```

No linter or test suite is configured.

## Architecture

Static portfolio site built with **Astro v5** + **Tailwind CSS v4** + **React v19**.

- Tailwind is loaded via `@tailwindcss/vite` Vite plugin (not `@astrojs/tailwind`). There is no `tailwind.config.*` file — all design tokens live as CSS custom properties in `src/styles/global.css`.
- React integration is registered in `astro.config.mjs` via `@astrojs/react`. React components are only needed for interactive islands; the current codebase uses `.astro` components exclusively.
- `src/styles/global.css` starts with `@import "tailwindcss"` and defines all CSS variables (`--color-*`, `--glow-*`, `--shadow-*`, `--font-*`, etc.), utility classes (`.badge`, `.btn`, `.terminal-card`, `.phosphor`, etc.), and keyframe animations. All styling decisions should reference or extend this file rather than adding inline Tailwind utility classes.

## Design System

The full design spec is in `design.md`. Key conventions:
- **Fonts**: `JetBrains Mono` for headings/labels/code, `Inter` for body. Use `font-family: var(--font-mono)` and `var(--font-sans)`.
- **Accent color**: `#00FF87` (phosphor green) via `var(--color-primary)`. Text glow via `.phosphor` or `.glow-sm/md` classes.
- **Cards**: Always use the `TerminalCard` component — it renders the title bar with colored window dots.
- **Buttons**: Use `CmdButton` for all CTAs — supports `variant="primary|outline"` and a `prefix` prop (`$`, `>`, etc.).
- **Tech badges**: Use `Badge` with `variant="primary|cyan|default"`. Convention: wrap text in brackets, e.g. `[PHP]`.
- **Section structure**: Each section uses `.section` + `.container` wrapper classes and starts with `<h2 class="section-heading">// title</h2>`.

## Content to Edit

All user-facing content is hardcoded in the component files — there is no CMS or data layer:

| What | Where |
|------|-------|
| Projects list | `src/components/Projects.astro` — `projects` array |
| Tech stack badges | `src/components/About.astro` — `techStack` array |
| Social links & email | `src/components/Contact.astro` — `socials` array + email string |
| Bio text | `src/components/About.astro` |
| Typewriter roles | `src/components/Hero.astro` — `roles` array in `<script>` block |
