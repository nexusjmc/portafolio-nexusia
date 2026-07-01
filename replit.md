# NexusDigital Portfolio

Personal portfolio SPA for Miguel Angel Quintero Giraldo (NexusDigital) — full-stack developer specializing in automation and AI.

## Run & Operate

- `pnpm --filter @workspace/nexusdigital-portfolio run dev` — portfolio dev server (served at `/`)
- `pnpm --filter @workspace/nexusdigital-portfolio run typecheck` — typecheck the portfolio
- `pnpm --filter @workspace/api-server run dev` — API server (port varies)

## Stack

- React + Vite + TypeScript
- Tailwind CSS v4 with full NexusDigital brand palette
- Framer Motion for animations
- Wouter for routing (SPA, no backend)
- embla-carousel-react for testimonials slider
- react-icons for tech + social icons
- Custom module-level theme store (no zustand dependency)

## Where things live

- `artifacts/nexusdigital-portfolio/src/pages/HomePage.tsx` — main scroll page (all sections)
- `artifacts/nexusdigital-portfolio/src/pages/CaseStudyPage.tsx` — `/proyecto/:id` detail page
- `artifacts/nexusdigital-portfolio/src/data/projects.ts` — 4 hardcoded project objects
- `artifacts/nexusdigital-portfolio/src/components/` — all section components
- `artifacts/nexusdigital-portfolio/src/store/themeStore.ts` — light/dark toggle (module-level singleton)
- `artifacts/nexusdigital-portfolio/src/hooks/useInView.ts` — IntersectionObserver scroll animation hook

## Brand

- Primary: #011275 (deep blue)
- Accent: #3D5ED4 (vibrant blue)
- Accent light: #B3C3FC
- Font: Montserrat (600 SemiBold headings, 500 Medium body)

## Architecture decisions

- No backend — all data is static/hardcoded (projects, testimonials, blog, services)
- Theme toggle uses a module-level subscriber pattern (no zustand) to share state across components without a Context wrapper
- useInView uses `RefObject<HTMLElement | null>` to satisfy modern React types
- SiLinkedin replaced with FaLinkedin (react-icons/fa) — not available in react-icons/si v5
- SiOpenai replaced with custom inline SVG path

## Product

A complete personal portfolio with: loading screen animation, fixed navbar with dark mode toggle, hero with typing effect, 4-service grid, bento-grid projects with category filter, individual case study pages, tech stack with animated bars, about section, 5-step process timeline, testimonials carousel, client logos, blog grid, contact form with loading state, and footer.

## User preferences

_Populate as you build._

## Gotchas

- Do not import `SiLinkedin` from react-icons/si — use `FaLinkedin` from react-icons/fa
- Do not use zustand — the project uses a custom module-level theme store
- Google Fonts @import must be the VERY FIRST line in index.css

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
