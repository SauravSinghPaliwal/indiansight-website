# IndianSight — CLAUDE.md

## Project Overview
**IndianSight** is an AI consulting website built with Next.js 15 (App Router) and pure CSS.
No Tailwind, no UI component libraries — all styling is done via CSS custom properties in `app/globals.css`.

## Tech Stack
- **Framework**: Next.js 15, React 19, App Router
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) — utility classes + inline styles for brand colors
- **Language**: JSX (`.jsx` files) — no TypeScript
- **Package manager**: npm

## Commands
```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build (run to verify no errors)
npm run lint     # Lint check
```

## Project Structure
```
app/
  layout.jsx              # Root layout — wraps all pages with Navbar + Footer
  globals.css             # All styles — CSS variables, utilities, components, page styles
  page.jsx                # Home page
  components/
    Navbar.jsx            # Fixed navbar with scroll effect and mobile menu
    Footer.jsx            # 4-column footer
  about/page.jsx
  blog/
    page.jsx              # Blog listing
    [slug]/page.jsx       # Blog post — content stored inline (move to CMS later)
  gallery/page.jsx        # Case studies
  contact/page.jsx        # Contact form with client-side success state
```

## Design System
Brand colors used as inline `style` props (Tailwind arbitrary values also work):

| Token | Value | Use |
|---|---|---|
| `bg` | `#7477FF` | Outer purple background |
| `frame` | `#0B0B0E` | Black outer frame border |
| `inner` | `#15161A` | Inner canvas background |
| `hero` | `#2B2C30` | Dark card backgrounds (page hero sections) |
| `services` | `#F35F4E` | Coral — Services small card |
| `why` | `#F2D34A` | Yellow — Approach small card, KPI badges |

Glass effect pattern: `bg-white/5 ring-1 ring-white/10` (dark cards)
Section header pattern: 10px uppercase kicker → 2xl uppercase title → sm text-white/70 desc

## Key Conventions
- Use `.container` for max-width centering (1200px with 1.5rem side padding)
- Use `.section` for standard vertical padding (5rem top/bottom)
- Use `.badge` for the small pill labels above section titles
- Use `.btn .btn-primary` / `.btn .btn-outline` / `.btn .btn-outline-dark` for buttons
- New page sections follow the pattern: `badge → section-title → section-sub → content`
- Page hero sections use `padding: 10rem 0 5rem` with the navy gradient background

## Adding New Pages
1. Create `app/<page-name>/page.jsx`
2. Export a `metadata` object for SEO
3. Start with a `.page-hero` section (see `about/page.jsx` for the pattern)
4. Add the route to the `links` array in `app/components/Navbar.jsx`

## Adding Blog Posts
Blog post content is currently stored inline in `app/blog/[slug]/page.jsx` in the `posts` object.
To add a new post:
1. Add a card entry to the `posts` array in `app/blog/page.jsx`
2. Add the full content entry (keyed by `slug`) to the `posts` object in `app/blog/[slug]/page.jsx`

## Styling Rules
- Add new component/page styles to `app/globals.css` — keep the file organised by section (comments mark each section)
- Media query breakpoints: `1024px` (tablet), `768px` (mobile), `480px` (small mobile)
- Responsive rules live at the bottom of `globals.css` under `/* ── Responsive ── */`
- Avoid creating separate CSS files — keep everything in `globals.css` for simplicity

## Do Not
- Do not install Tailwind or any CSS framework
- Do not add TypeScript — keep `.jsx`
- Do not use the Pages Router — this project uses App Router only
- Do not commit `node_modules/`
