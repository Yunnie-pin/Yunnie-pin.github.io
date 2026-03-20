# Design System — GulaLi-porto

**Aesthetic: Terminal GUI**
A terminal/CLI aesthetic modernized into a proper GUI. Monospace fonts, phosphor green accent, dark surfaces, and command-line inspired elements — but with clean card layouts, smooth animations, and intentional whitespace. Feels like a developer who is proud of their tooling.

---

## Color Palette

> **Palette: Phosphor** — Green on Dark + Cyan + Red

### CSS Variables

| Token | Light | Dark |
|---|---|---|
| `--background` | `#F0F4F0` (phosphor paper) | `#0C0C0F` (terminal black) |
| `--foreground` | `#1A1F1A` | `#E2E8E2` (dim phosphor white) |
| `--card` | `#FFFFFF` | `#111116` (panel dark) |
| `--card-foreground` | `#1A1F1A` | `#E2E8E2` |
| `--primary` | `#00874A` (terminal green dark) | `#00FF87` (phosphor green) |
| `--primary-hover` | `#006B3C` | `#00CC6A` |
| `--primary-foreground` | `#FFFFFF` | `#000000` |
| `--secondary` | `#0080A0` (cyan dark) | `#00C8F0` (cyan bright) |
| `--secondary-foreground` | `#FFFFFF` | `#000000` |
| `--accent` | `#CC3333` (red dark) | `#FF5555` (error red) |
| `--accent-foreground` | `#FFFFFF` | `#000000` |
| `--muted` | `#E4EAE4` | `#1A1A22` (dark panel) |
| `--muted-foreground` | `#4A6050` | `#6B8F6B` (dim green) |
| `--border` | `#BDD0BD` | `#1E2A1E` (subtle green border) |
| `--input` | `#FFFFFF` | `#141419` |
| `--ring` | `#00874A` | `#00FF87` |
| `--destructive` | `#CC3333` | `#FF5555` |

### Terminal Color Roles

| ANSI Name | Dark Value | Usage |
|---|---|---|
| `black` | `#0C0C0F` | Background |
| `bright-black` | `#1A1A22` | Muted surface |
| `green` | `#00FF87` | Primary / success |
| `bright-green` | `#69FF9C` | Highlight / hover |
| `cyan` | `#00C8F0` | Secondary / info |
| `bright-cyan` | `#67E8FF` | Link / active |
| `red` | `#FF5555` | Error / destructive |
| `yellow` | `#FFD700` | Warning / accent alt |
| `white` | `#E2E8E2` | Foreground text |
| `bright-white` | `#F8FFF8` | Heading / emphasis |

### Extended Palette

| Name | Value | Usage |
|---|---|---|
| Cursor Green | `#00FF87` | Blinking cursor, active state |
| Dim Text | `#6B8F6B` | Comments, metadata |
| Selection | `rgba(0,255,135,0.15)` | Text selection background |
| Line Highlight | `rgba(0,255,135,0.05)` | Hovered row |
| Prompt Symbol | `#00C8F0` | `$` or `>` prefix |
| String Color | `#FFD700` | Badge/tag highlight |
| Number Color | `#FF79C6` | Stats, counts |
| Comment Color | `#6B8F6B` | Muted text |

### Brand / Social Colors

| Purpose | Value |
|---|---|
| LinkedIn | `#00C8F0` (cyan — matches secondary) |
| Discord | `#7289DA` |
| Telegram | `#29B6F6` |
| Email | `#FF5555` (matches accent) |
| GitHub | `#E2E8E2` / `#1A1A22` |

### Tech Stack Tag Colors (Syntax highlighting inspired)

| Language | Color | Note |
|---|---|---|
| Go | `#00C8F0` (cyan) | |
| Kotlin | `#FF79C6` (pink — number color) | |
| PHP | `#6B8F6B` (dim green) | |
| TypeScript | `#4FC1FF` (blue bright) | |
| React | `#FF9580` (orange soft) | |
| Rust | `#FF6E6E` (rust red) | |
| Python | `#FFD700` (yellow) | |

---

## Typography

**Primary Font**: `JetBrains Mono` — monospace for all headings & labels
**Body Font**: `Inter` — for long-form body text to maintain readability
**Mono Fallback**: `Fira Code`, `Cascadia Code`, `monospace`

```css
--font-mono: "JetBrains Mono", "Fira Code", monospace;  /* headings, labels, UI */
--font-sans: "Inter", system-ui, sans-serif;             /* body paragraphs */
```

> Headings use mono for the terminal feel, body uses sans to avoid reading fatigue.

### Scale

| Level | Classes |
|---|---|
| H1 | `font-mono text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight` |
| H2 | `font-mono text-2xl lg:text-3xl font-semibold` |
| H3 | `font-mono text-xl font-medium` |
| H4 | `font-mono text-base font-medium text-primary` |
| Body | `font-sans text-base leading-relaxed` |
| Caption | `font-mono text-xs text-muted-foreground` |
| Label | `font-mono text-xs uppercase tracking-widest text-muted-foreground` |
| Code | `font-mono text-sm text-primary` |

### Terminal Prefix Pattern

Headings can be prefixed with terminal characters:

```
// Section Title        ← comment style
> Active Item           ← prompt style
$ command --flag        ← CLI style
## Heading              ← markdown style
[STATUS] Online         ← bracket label
```

### Text Decoration
- Links: `font-mono text-secondary underline-offset-4 hover:text-primary`
- Hover: color shifts from cyan → green
- Avoid `decoration-*` custom colors — use text color change instead

### Text Selection
```css
selection:bg-primary/15 selection:text-primary
```

---

## Surfaces

All surfaces are dark and layered, like terminal windows stacked on top of each other.

### Surface Tiers (Dark Mode)

| Tier | Value | Usage |
|---|---|---|
| Void | `#080808` | Darkest layer, behind everything |
| Base | `#0C0C0F` | Page background |
| Panel | `#111116` | Card / main content area |
| Elevated | `#161620` | Hover state, active card |
| Overlay | `#1A1A28` | Modal, dropdown, tooltip |
| Input | `#141419` | Form inputs |

### Surface Tiers (Light Mode)

| Tier | Value | Usage |
|---|---|---|
| Base | `#F0F4F0` | Page background (phosphor paper) |
| Panel | `#FFFFFF` | Card |
| Muted | `#E4EAE4` | Subtle background |
| Input | `#FFFFFF` | Form inputs |

### Terminal Window Pattern

```css
/* Card with terminal window chrome */
.terminal-card {
  background: #111116;
  border: 1px solid #1E2A1E;
  border-radius: 8px;
}

/* Title bar */
.terminal-titlebar {
  background: #1A1A22;
  border-bottom: 1px solid #1E2A1E;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Window dots */
.dot-red    { width: 12px; height: 12px; border-radius: 50%; background: #FF5555; }
.dot-yellow { width: 12px; height: 12px; border-radius: 50%; background: #FFD700; }
.dot-green  { width: 12px; height: 12px; border-radius: 50%; background: #00FF87; }
```

---

## Borders

- **Default**: `border border-border` (`1px solid #1E2A1E`)
- **Primary accent**: `border border-primary/30` (green glow border)
- **Secondary**: `border border-secondary/30`
- **Separator**: `border-t border-border/50`
- **Active/focused**: `border-primary/60` + ring

> Thin border, slightly green-tinted. Not pure black.

---

## Border Radius

Terminal GUI uses medium radius — not square, not overly rounded.

- **Terminal window / Card**: `rounded-lg` (8px)
- **Button**: `rounded-md` (6px)
- **Badge/Tag**: `rounded` (4px)
- **Input**: `rounded-md`
- **Dropdown**: `rounded-lg`
- **Dialog**: `rounded-xl` (12px)
- **Avatar**: `rounded-full`
- **Inline code**: `rounded-sm` (2px)

---

## Shadows & Glow

Terminal is not brutalism — shadows here are subtle glows, not hard offsets.

### Shadow Scale

```css
--shadow-sm:  0 1px 4px rgba(0, 0, 0, 0.6);
--shadow-md:  0 4px 16px rgba(0, 0, 0, 0.7);
--shadow-lg:  0 8px 32px rgba(0, 0, 0, 0.8);
```

### Green Glow (Primary Accent)

```css
/* Subtle phosphor glow */
--glow-primary:    0 0 12px rgba(0, 255, 135, 0.20);
--glow-primary-md: 0 0 24px rgba(0, 255, 135, 0.25);

/* Focused / active element */
--glow-focus: 0 0 0 2px rgba(0, 255, 135, 0.40);
```

### Tailwind Glow Classes

```
shadow-[0_0_12px_rgba(0,255,135,0.20)]    /* subtle green glow */
shadow-[0_0_24px_rgba(0,255,135,0.25)]    /* medium green glow */
shadow-[0_0_12px_rgba(0,200,240,0.20)]    /* cyan glow */
```

---

## Components

### Button

**Variants**

| Variant | Style (Dark) |
|---|---|
| `default` | `bg-primary text-black font-mono`, green glow on hover |
| `outline` | `border border-primary/50 text-primary hover:bg-primary/10` |
| `ghost` | `text-muted-foreground hover:text-primary hover:bg-primary/5` |
| `destructive` | `border border-accent/50 text-accent hover:bg-accent/10` |
| `cmd` | Prefix `$` or `>` before label, monospace, no background |

**Interactive States**
- Hover: `hover:shadow-[0_0_12px_rgba(0,255,135,0.25)]` + text brighter
- Active: `active:scale-[0.97]`
- Focus: `ring-2 ring-primary/40`

**Sizes**

| Size | Classes |
|---|---|
| `sm` | `px-3 py-1 text-xs font-mono rounded` |
| `md` | `px-4 py-1.5 text-sm font-mono rounded-md` |
| `lg` | `px-6 py-2 text-base font-mono rounded-md` |
| `icon` | `p-2 rounded-md` |

### Card (Terminal Window Style)

```
bg-card border border-border rounded-lg overflow-hidden
shadow-[0_4px_16px_rgba(0,0,0,0.7)]
hover:border-primary/30 hover:shadow-[0_4px_24px_rgba(0,255,135,0.10)]
transition-all duration-200
```

**Optional Terminal Chrome Header**
```
bg-muted border-b border-border px-4 py-2.5
flex items-center gap-2
```

Window dots: `w-3 h-3 rounded-full bg-accent` / `bg-[#FFD700]` / `bg-primary`

### Badge / Tag

**Variants**

| Variant | Style |
|---|---|
| `default` | `bg-muted text-muted-foreground border border-border` |
| `primary` | `bg-primary/15 text-primary border border-primary/25 font-mono` |
| `secondary` | `bg-secondary/15 text-secondary border border-secondary/25 font-mono` |
| `accent` | `bg-accent/15 text-accent border border-accent/25 font-mono` |
| `outline` | `border border-border text-foreground font-mono` |

All badges: `rounded text-xs font-mono px-2 py-0.5`

Examples: `[TypeScript]` `[v1.0.0]` `[ACTIVE]`

### Input

```
bg-input border border-border rounded-md
px-3 py-2 font-mono text-sm text-foreground
placeholder:text-muted-foreground
focus:border-primary/60 focus:ring-1 focus:ring-primary/30
caret-color: var(--primary)  /* green cursor */
```

### Prompt Input (Special)

```
flex items-center gap-2 bg-input border border-border rounded-md px-3 py-2

/* Prefix */
span.prompt { color: var(--secondary); font-family: mono; }  /* > or $ */

/* Input */
input { font-mono; background: transparent; border: none; outline: none; }
```

### Dialog / Modal

```
bg-[#111116] border border-border rounded-xl
shadow-[0_16px_48px_rgba(0,0,0,0.85)]
```

Title bar: `bg-muted border-b border-border px-6 py-3 font-mono text-sm`

Overlay: `bg-black/75 backdrop-blur-sm`

### Tooltip

```
bg-[#1A1A28] border border-border rounded-md
px-3 py-1.5 font-mono text-xs text-foreground
shadow-[0_4px_12px_rgba(0,0,0,0.6)]
```

### Progress Bar

```
bg-muted rounded-full h-1.5 overflow-hidden

/* Fill */
bg-gradient-to-r from-primary to-secondary
transition-all duration-500
```

### Status Indicator

```css
/* Online */
.status-online  { background: #00FF87; box-shadow: 0 0 6px rgba(0,255,135,0.6); }

/* Away */
.status-away    { background: #FFD700; box-shadow: 0 0 6px rgba(255,215,0,0.5); }

/* Offline */
.status-offline { background: #6B8F6B; }

/* Error */
.status-error   { background: #FF5555; box-shadow: 0 0 6px rgba(255,85,85,0.5); }
```

All dots: `w-2 h-2 rounded-full`

---

## Animations

### Keyframes

**Cursor blink (blinking caret)**
```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
/* animate-blink: 1s step-end infinite */
```

**Typewriter text reveal**
```css
@keyframes typewriter {
  from { width: 0; }
  to   { width: 100%; }
}
/* overflow: hidden; white-space: nowrap; border-right: 2px solid var(--primary) */
```

**Scan line sweep (CRT effect, subtle)**
```css
@keyframes scanline {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}
/* height: 2px; background: rgba(0,255,135,0.04); pointer-events: none */
```

**Terminal boot / fade-in**
```css
@keyframes terminal-in {
  from { opacity: 0; transform: translateY(8px); filter: blur(2px); }
  to   { opacity: 1; transform: translateY(0);   filter: blur(0); }
}
/* duration: 300ms ease-out */
```

**Green pulse (loading)**
```css
@keyframes green-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
```

### Entry Animations
- Cards: `animate-in fade-in-0 slide-in-from-bottom-3 duration-300`
- Dialog: `animate-in fade-in-0 zoom-in-95 duration-200`
- Stagger: `delay-[0ms]` `delay-[75ms]` `delay-[150ms]`

### Transition Default
```
transition-all duration-200 ease-out
```

---

## Decorative Elements

**Blinking cursor block**
```css
.cursor {
  display: inline-block;
  width: 10px; height: 1.2em;
  background: var(--primary);
  animation: blink 1s step-end infinite;
  vertical-align: text-bottom;
  margin-left: 2px;
}
```

**ASCII art / box drawing (section dividers)**
```
┌─────────────────────────────────┐
│  Section Title                  │
└─────────────────────────────────┘
```

**Grid dot pattern (subtle terminal grid)**
```css
background-image:
  linear-gradient(var(--border) 1px, transparent 1px),
  linear-gradient(90deg, var(--border) 1px, transparent 1px);
background-size: 32px 32px;
opacity: 0.4;
```

**Phosphor glow on heading**
```css
.glow-text {
  color: var(--primary);
  text-shadow: 0 0 20px rgba(0, 255, 135, 0.5);
}
```

**Terminal prompt prefix**
```html
<span class="text-secondary font-mono">$</span> npm run dev
<span class="text-secondary font-mono">></span> Building...
<span class="text-muted-foreground font-mono">#</span> comment text
```

**Scrollbar (custom terminal style)**
```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--background); }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--primary)/40; }
```

---

## Focus States

```css
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--background), 0 0 0 4px rgba(0, 255, 135, 0.5);
  border-radius: inherit;
}
```

---

## Layout

**Container**: `container mx-auto px-4 max-w-5xl`
**Section padding**: `py-16 md:py-24`

**Bento-style grid**
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`
- Asymmetric: `col-span-2` for featured card
- Cards with window chrome can have a title bar + content area

**Common spacing**: `gap-4` default, `gap-3` for dense layouts

---

## Accessibility

- Contrast ratio: phosphor green `#00FF87` on `#0C0C0F` = **14.3:1** (AAA)
- Scan line & CRT effects: `pointer-events: none`, `aria-hidden="true"`
- `@media (prefers-reduced-motion: reduce)` → disable typewriter, scanline, blink
- Clear focus rings using double-ring pattern
- `@radix-ui/react-visually-hidden` for screen reader text

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Astro | v5.18.0 | Framework |
| React | v19.2.4 | UI components |
| Tailwind CSS | v4.2.1 | Styling |
| shadcn/ui | v4.0.0 | Component base |
| Radix UI | v1.4.3 | Accessible primitives |
| lucide-react | v0.577.0 | Icons |
| CVA | v0.7.1 | Variant system |
| tailwind-merge | v3.5.0 | Class merging |
| JetBrains Mono | — | Monospace font (primary) |
| Inter | — | Sans font (body) |
| `@fontsource/jetbrains-mono` | — | Font package |
| `@fontsource/inter` | — | Font package |

---

## Design Principles Summary

1. **Mono-first** — all UI chrome (labels, buttons, headings) use monospace font
2. **Phosphor green** — one strong dominant color, everything else is muted
3. **Layered dark** — background layers from `#080808` → `#111116` → `#161620`
4. **Terminal chrome** — cards can have a title bar with window dots
5. **Glow not shadow** — use subtle green glow instead of hard offset shadows
6. **Syntax colors** — follow ANSI color conventions for badges and tags
7. **Purposeful cursor** — blinking cursor element keeps the terminal feeling alive
8. **CLI patterns** — prompt prefix (`$`, `>`, `#`) as a visual language
