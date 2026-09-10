# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # dev server at http://localhost:3000
pnpm build      # production build (SSR)
pnpm generate   # static site generation
pnpm preview    # preview a production build locally
```

There is no lint command and no test runner configured in this repo (no ESLint/Prettier config, no Vitest/Playwright as a dependency). The verification gate for a change is `pnpm build` succeeding plus manual/visual checking of the affected page — there is no single-test invocation to run.

**Toolchain requirement**: this project requires Node 22 and pnpm (activated via corepack), not whatever `corepack enable` auto-selects. If `pnpm`/`node` misbehave (e.g. `MODULE_NOT_FOUND: pnpm.cjs`, or a build failing on an ES2024-only method), run:

```bash
nvm use 22.22.0
corepack prepare pnpm@10.27.0 --activate
```

## Architecture

This is a static marketing site (Nuxt 4 + Vue 3 `<script setup>` + Tailwind v4), one page per site section under `app/pages/`. There is no CMS: all copy and structure is hardcoded directly in Vue section components (`app/components/sections/`), matching the Home page's original pattern.

**Component auto-import has a flat namespace.** `nuxt.config.ts` registers `~/components` with `pathPrefix: false`, so components are auto-imported by filename only, regardless of subfolder — a duplicate filename in a new feature silently shadows or is shadowed by an existing one. The established convention: every new page/module gets its own prefix for **all** of its section components (e.g. every `/modulos/crm` section is `Crm*` — `CrmHero.vue`, `CrmOverview.vue`, etc. — while the Home page's sections are `Hero*`). Decide the prefix per page, not per component name, since a name that doesn't collide today may collide with a not-yet-built sibling page.

**Three-layer component architecture** — always follow this structure when building or refactoring components:

- **`layout/`** — reusable visual shells with no product-specific content. Every CSS class is exposed as a prop with `withDefaults()` so callers can restyle without forking the template. Rich HTML (headings, spans, inline styles) flows through named slots (`#heading`, `#lead`, `#image`, `#cta`, etc.). Repeating data (FAQs, features, testimonials) comes through typed array props (e.g., `features: PortfolioFeature[]`). Never author product copy or import data files here.
- **`sections/`** — product-specific wrappers prefixed by segment: `CrmPortfolio`, `CrmRuralFaq`, `CrmTemporadaTestimonials`, etc. Each wraps a `layout/` base (or another `sections/` component) and uses `withDefaults()` to supply product defaults (section IDs, gradient classes, feature arrays, FAQ items, CTA text/routes). Must forward all props and named slots to the base so any page can still override. This is where product copy, icon paths, and feature/FAQ content live.
- **`ui/`** — atomic primitives with a single responsibility and no data props: `CtaButton`, `FeatureList`, `SectionTag`, `SectionDivider`, `LinkArrow`. Consumed directly in `layout/` shells and `sections/` wrappers.

**Rule**: whenever a visual pattern appears on more than one page or segment, promote it to `layout/`. Prefer `withDefaults()` prop forwarding over duplicating templates.

**JSON data for repeating content** — store arrays of repeating structured content in `app/data/*.json` (e.g., `testimonials.json`). Import them in the `sections/` layer, filter/transform as needed, then pass the computed slice to the layout component as a typed array prop. Never import data files directly in `layout/` components — they must stay content-agnostic.

**Pages are built from Figma, 1:1.** Each Figma-sourced page has a `FIGMA_CONTENT_MANIFEST_<PAGE>.md` file at the repo root (e.g. `FIGMA_CONTENT_MANIFEST_CRM.md`) recording the real content extracted from Figma before implementation. When building or fixing a section against Figma, use the Figma MCP tools to pull exact node measurements/assets rather than approximating from a screenshot — this has repeatedly been the difference between a fix that actually matches Figma and one that only looks close.

**Responsive system**: breakpoints are custom Tailwind v4 variants defined via `@theme` in `app/assets/css/main.css` — `mobile-lg`(576px) `tablet`(768px) `tablet-lg`(992px) `desktop-compact`(1200px) `desktop`(1300px) `desktop-full`(1400px) `desktop-lg`(1600px) — used as e.g. `tablet-lg:flex-row`. The same file defines `.container-page` (a Bootstrap-5-style responsive container that steps through discrete `max-width`s at each breakpoint, not a smooth scale — watch for text-wrap pinches just below a breakpoint) and `.section-py`/`.section-pt` (standard section vertical padding). Reuse these for any new section rather than inventing ad hoc widths/padding.

**Known sitewide bug**: no `translate-x-*`/`translate-y-*` Tailwind utility (positive or negative) generates any CSS anywhere on this site — confirmed by inspecting compiled stylesheets in a real browser. Any element still using it for centering (e.g. the common `top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` pattern) is not actually centered. Do not use this pattern in new or fixed code; use flexbox centering (`items-center justify-center`) instead, even if a reference snippet or the Figma-generated JSX uses `translate`.

`.specs/STATE.md` is a running decision log (architecture decisions + a handoff narrative) kept by prior sessions using the `tlc-spec-driven` skill. Check it for the reasoning behind non-obvious existing choices before changing something that looks arbitrary.

## Git workflow

Every task uses its own branch and merges to `main` when done:

```bash
git checkout -b feature/<task-slug>   # new pages/sections
git checkout -b fix/<task-slug>       # bug fixes
git checkout -b chore/<task-slug>     # infra / docs / tooling

# implement, then:
git add <files>
git commit -m "<type>: <description>"
git checkout main
git merge feature/<task-slug>
git branch -d feature/<task-slug>
```

Never commit directly to `main`. One branch per task; merge when the task is complete and `pnpm build` succeeds.

## Code comments

Do not add comments to code in this repository (Vue, TS, CSS, or otherwise). Write self-documenting code — clear names and small, obvious structure — instead of explaining it with comments. This applies to new code and to edits of existing code.
