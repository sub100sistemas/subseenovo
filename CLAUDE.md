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

**Componentization standard (binding for all new work, not just the page it was first built for).** This was formalized after several `Site*`/`Crm*` pages were built independently and then converged by hand onto shared structure — that convergence is now the expected starting point, not an optional cleanup pass. For every new page or component:

- Prefer reusable components over copy-pasted markup.
- Split `sections/` components by responsibility — one section, one concern; do not fold unrelated content into a single component because it happens to sit next to it in Figma.
- Keep repeating data separate from visual structure: declare it as a typed array/object in `<script setup>` (JSON under `app/data/` when it's large or needs to be shared across pages — see below), and drive the markup with a single `v-for` over one card template. This applies to any repeating structure — cards, países, tipos, benefícios, funcionalidades, depoimentos, itens de FAQ, listas, imagens — not only the cases already using this pattern.
- Reuse a component across pages whenever the structure or behavior is genuinely shared, not just visually similar at a glance.
- Avoid duplicating markup or logic that already exists in a `layout/` shell, a `sections/` wrapper, or a `ui/` primitive.

This cuts the other way too: **do not create an abstraction for a one-off.** A component earns reuse when it has a clear, single responsibility and a real second (or third) caller — not because "it might be reused someday." Three similar lines of markup across two files is not automatically a shared component; forking a `layout/` shell's markup for a one-time visual tweak is not automatically wrong either. Judge each case on those two axes: real responsibility, real reuse.

**Check before creating**: before writing any new component, search `sections/` and `layout/` for a component that already covers the needed structure or behavior. Wrapping it in a new `sections/` component with `withDefaults()` is always preferable to forking its markup. The same principle applies across `sections/` layers — e.g. `CrmRuralTechnology.vue` wrapping `CrmTechnology.vue` (which wraps `Technology.vue`) is valid and expected when product-specific defaults cascade.

**Known reusable patterns worth checking first:**

- **Staggered photo grid with a typed-array data model** — `SiteUrbanoPropertyTypes.vue` is the canonical example: a `{ label, src, alt, width, height }` array grouped into columns for staggered heights, rendered by one `v-for` over one card template (rounded corners, `object-cover`, optional label overlay). `SiteRuralSouthAmerica.vue` reuses this exact structure (same prop shape, same card markup, same decorative curve icon) for a country-card grid — copy this pattern, including its variable shape, before inventing a new one for any similar "row of staggered cards" need.
- **Hero visual composition (photo + floating card callouts + corner badge)** — `SiteUrbanoHero.vue`, `SiteRuralHero.vue`, and `SiteLoteadorasHero.vue` all build the `#visual` slot the same way: an absolutely positioned photo (`object-cover` inside a percentage-based box), a `card_arrow.png` overlay image carrying the floating callout cards, and a small corner badge icon — instead of flattening the whole composition into one exported PNG. Follow this structure for any new Hero-based page rather than compositing a bespoke image per page.

**Shared assets**: a logo, icon, or image used on more than one page must live at a single path under `public/` and be referenced from each section that needs it. Never create per-page copies of the same file (e.g. `crm-rural-logo-client.svg` and `crm-urbano-logo-client.svg` when they are the same image). Before consolidating any asset, confirm the files are truly identical and update every reference.

**Tailwind v4 template binding limitation**: do not write JS array or object literals directly inside Vue template attribute bindings (e.g., `:prop="[{ src: '...' }]"`). The Tailwind v4 Vite plugin misparses an attribute value that begins with `"["` as the start of a CSS arbitrary-value string and throws `Unterminated string` in the dev server. Always declare arrays and objects as typed `const`s in `<script setup>` and pass the variable name in the template.

**JSON data for repeating content** — store arrays of repeating structured content in `app/data/*.json` (e.g., `testimonials.json`) when the data is large or shared across more than one page. Import them in the `sections/` layer, filter/transform as needed, then pass the computed slice to the layout component as a typed array prop. Never import data files directly in `layout/` components — they must stay content-agnostic. Smaller or single-page repeating content (a 4-item feature list, a 5-card grid) doesn't need its own JSON file — a typed `const` array in that section's `<script setup>` is enough; the point is separating data from markup, not maximizing file count.

**Pages are built from Figma, 1:1.** Each Figma-sourced page has a `FIGMA_CONTENT_MANIFEST_<PAGE>.md` file at the repo root (e.g. `FIGMA_CONTENT_MANIFEST_CRM.md`) recording the real content extracted from Figma before implementation. When building or fixing a section against Figma, use the Figma MCP tools to pull exact node measurements/assets rather than approximating from a screenshot — this has repeatedly been the difference between a fix that actually matches Figma and one that only looks close.

**Figma-to-code workflow.** Figma is the visual source of truth for a new page; the existing codebase is the technical source of truth for how to build it. Never invert that — do not adapt the Figma design to match an existing page just because the existing page is easier to copy. The order is:

```
Figma da nova página
        ↓
identificar estrutura visual
        ↓
procurar componentes/sections reutilizáveis existentes
        ↓
reutilizar a estrutura técnica quando fizer sentido
        ↓
adaptar dados/conteúdo (nunca inventar conteúdo)
        ↓
manter o visual fiel ao Figma
```

A component being reusable is a statement about *structure* (markup shape, prop contract, data shape), not about *content*. Reusing `SiteUrbanoPropertyTypes.vue`'s grid structure for a rural country-card grid is correct even though the content, images, and card count all differ — reusing its exact visual sizing when Figma specifies different dimensions would not be.

**Responsive system**: breakpoints are custom Tailwind v4 variants defined via `@theme` in `app/assets/css/main.css` — `mobile-lg`(576px) `tablet`(768px) `tablet-lg`(992px) `desktop-compact`(1200px) `desktop`(1300px) `desktop-full`(1400px) `desktop-lg`(1600px) — used as e.g. `tablet-lg:flex-row`. The same file defines `.container-page` (a Bootstrap-5-style responsive container that steps through discrete `max-width`s at each breakpoint, not a smooth scale — watch for text-wrap pinches just below a breakpoint) and `.section-py`/`.section-pt` (standard section vertical padding). Reuse these for any new section rather than inventing ad hoc widths/padding.

**Known sitewide bug**: no `translate-x-*`/`translate-y-*` Tailwind utility (positive or negative) generates any CSS anywhere on this site — confirmed by inspecting compiled stylesheets in a real browser. Any element still using it for centering (e.g. the common `top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` pattern) is not actually centered. Do not use this pattern in new or fixed code; use flexbox centering (`items-center justify-center`) instead, even if a reference snippet or the Figma-generated JSX uses `translate`.

`.specs/STATE.md` is a running decision log (architecture decisions + a handoff narrative) kept by prior sessions using the `tlc-spec-driven` skill. Check it for the reasoning behind non-obvious existing choices before changing something that looks arbitrary.

## SPECs

`.specs/features/<feature>/` holds `spec.md`, `tasks.md`, `validation.md`, and optionally `design.md` for page-building or architectural features. `.specs/STATE.md` is the running decision log for cross-cutting findings — read it before changing anything that looks arbitrary, since a prior `AD-NNN` entry may already explain the choice.

**When to create a SPEC**: new page features or significant architectural decisions only. A SPEC tracks an entire feature (goals, acceptance criteria, tasks, validation). Do not create a SPEC for a spacing tweak, color fix, responsive correction, or any single-component visual adjustment.

**When to update an existing SPEC**: if a decision changes how an already-documented feature works, update that feature's existing files — do not open a new SPEC for something already covered.

**When to add to STATE.md**: architectural findings or decisions that apply site-wide or across multiple features go in `STATE.md` as new `AD-NNN` entries. Single-component bug fixes and visual adjustments do not warrant a `STATE.md` entry.

## Git workflow

- **Branch obrigatória:** trabalhar sempre na `master`.
- **Não criar branches:** nunca criar ou utilizar branches `feature/*`, `fix/*`, `chore/*` ou `refactor/*` para novas tarefas.
- Antes de iniciar qualquer tarefa:
  1. executar `git branch --show-current`;
  2. executar `git status`;
  3. confirmar que a branch atual é `master`;
  4. se não estiver na `master`, parar e pedir autorização antes de trocar de branch.
- Fazer os commits necessários diretamente na `master`, em commits lógicos.
- Antes de qualquer publicação:
  - executar `pnpm build`;
  - realizar a validação necessária;
  - não executar `git push` sem autorização explícita do usuário.
- **Nunca alterar, restaurar, adicionar ou remover manualmente** `.claude/scheduled_tasks.lock`. Se ele aparecer como deletado, manter a exclusão e não incluí-lo em commits.

## Code comments

Do not add comments to code in this repository (Vue, TS, CSS, or otherwise). Write self-documenting code — clear names and small, obvious structure — instead of explaining it with comments. This applies to new code and to edits of existing code.
