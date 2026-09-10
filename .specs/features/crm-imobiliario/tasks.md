# CRM Imobiliário Tasks

## Execution Protocol (MANDATORY — do not skip)

Implement these tasks with the `tlc-spec-driven` skill: **activate it by name and follow its Execute flow and Critical Rules.** Do not search for skill files by filesystem path. The skill is the source of truth for the full flow (per-task cycle, sub-agent delegation, adequacy review, Verifier, discrimination sensor).

**If the skill cannot be activated, STOP and tell the user — do not proceed without it.**

**Commit deviation (recorded, not silent):** this directory is not a git repository (confirmed via `git status`; user explicitly deferred `git init` on 2026-09-08 — see `.specs/STATE.md` Blockers). The "one atomic commit per task" step is therefore **not executable**. Substitute: each task is marked `[x]` in this file's checklists **before** moving to the next task, and the per-task "Done when" checklist is the audit trail in place of a commit. The Verifier will record this substitution as a documented deviation, not silently skip it.

---

**Design**: `.specs/features/crm-imobiliario/design.md`
**Status**: Draft

---

## Test Coverage Matrix

> Generated from codebase and `.specs/STATE.md` (`AD-002`) — confirm before Execute. Guidelines found: `.specs/STATE.md` `AD-002` (no automated test runner; gate = build + manual verification, decision already made and active for this project). No `AGENTS.md`/lint/test config found (confirmed: no ESLint/Prettier/Vitest/Playwright in `package.json`, no config files present).

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| --- | --- | --- | --- | --- |
| Content/asset manifest (docs only) | none | Every extracted string and asset row cross-checked 1:1 against the Figma node before use — no invented copy | `FIGMA_CONTENT_MANIFEST_CRM.md` | manual review only (no build applies) |
| New section component (`app/components/sections/Crm*.vue`) | none | Compiles cleanly; renders the content from its manifest entry; matches its mapped spec AC(s) on manual visual check | `app/components/sections/Crm*.vue` | `pnpm build` |
| Page component (`app/pages/modulos/crm.vue`) | none | Route resolves 200; all 9 sections present in Figma order; SEO meta set | `app/pages/modulos/crm.vue` | `pnpm build` + manual `pnpm dev` check of `/modulos/crm` |
| Shared layout component modification (`app/components/layout/HeaderBar.vue`) | none | Only the "CRM Imobiliário" item's `to` changes; every other mega-menu item (desktop + mobile) still renders and still points where it did before | `app/components/layout/HeaderBar.vue` | `pnpm build` + manual check of full mega-menu |

**Coverage Expectation source**: project has no test runner (`AD-002`, active) — the strong default (unit/e2e coverage) does not apply; the project-level decision already substitutes build-passes + manual AC verification for every code layer. This is a pre-existing, confirmed decision, not one this task list is making.

## Gate Check Commands

> Generated from `package.json` scripts (`pnpm build` → `nuxt build`, `pnpm dev` → `nuxt dev`, `pnpm generate` → `nuxt generate`). Project uses `pnpm` (confirmed via `pnpm-lock.yaml` + `pnpm-workspace.yaml`; no `package-lock.json`/`yarn.lock` present).

| Gate Level | When to Use | Command |
| --- | --- | --- |
| Manual | After T1 (content/asset extraction — no code touched, nothing to build) | Cross-check every bullet in `FIGMA_CONTENT_MANIFEST_CRM.md` against the Figma node's visible text/labels; confirm every asset table row has a real file at the stated path |
| Quick | After each single-section-component task (T2–T10) | `pnpm build` |
| Full | After page assembly and navigation wiring (T11, T12) | `pnpm build` && `pnpm dev` → manually exercise the task's mapped acceptance criteria on the running route |
| Build | Feature completion (T13) | `pnpm build` succeeds with `/modulos/crm` included in output && full manual QA pass (see T13 Done when) |

**Environment blocker discovered during T2 — resolved 2026-09-08 (recorded, not silent):** `pnpm build` failed on this machine at the CSS-minification step (`postcss-merge-longhand@8.0.4` requiring Node `^22.11.0`, machine was on Node `v20.20.2`). Workaround during T2–T13 (documented as `AD-005` in `.specs/STATE.md`): `pnpm dev` + manual verification substituted for the literal `pnpm build` gate. **This is now fixed** (`AD-006`): the machine was upgraded to Node `22.22.0` via `nvm`, and `pnpm` was reactivated via `corepack prepare pnpm@10.27.0 --activate` (corepack's auto-selected `pnpm@12.3.4` has an unrelated packaging bug — ships `bin/pnpm.mjs` but the installed corepack expects `bin/pnpm.cjs` — so it fails regardless of Node version; use `10.27.0`, confirmed working). `pnpm build` now passes end-to-end, including this feature's `/modulos/crm` route in the output. Future tasks/features on this machine should assume Node 22 + pnpm (via corepack 10.27.0) are already active and use a literal `pnpm build` gate.

---

## Execution Plan

Phases are ordered and run sequentially — each phase completes before the next begins, and tasks within a phase execute in order. Phase grouping mirrors the spec's own P1/P2/P3 priority structure (a genuine cohesion seam, not an arbitrary split).

### Phase 1: Content Extraction + P1 Sections (MVP)

```
T1 → T2 → T3 → T4
```

### Phase 2: P2 Sections

```
T4 → T5 → T6 → T7
```

### Phase 3: P3 Sections

```
T7 → T8 → T9 → T10
```

### Phase 4: Page Assembly

```
T10 → T11
```

### Phase 5: Navigation Wiring

```
T11 → T12
```

### Phase 6: Cross-Cutting QA

```
T12 → T13
```

---

## Task Breakdown

### T1: Extract Figma content + assets for all 9 sections into the manifest

**What**: Read the Figma file `vX7qKnnXSOW8zv4kAuS2eN`, frame node `476:3` (and its 9 child section nodes below), and produce `FIGMA_CONTENT_MANIFEST_CRM.md` at the repo root, following the exact schema of `FIGMA_CONTENT_MANIFEST.md` (intro/conventions block + one numbered section per node, each with a "Texto extraído" bullet list and an "Assets" table). Download every referenced image/icon asset to `public/images/modulos-crm/` (photos/mockups) or `public/icons/` (icons, flat, shared) per the manifest's stated paths.
**Where**: `FIGMA_CONTENT_MANIFEST_CRM.md` (new file), `public/images/modulos-crm/*`, `public/icons/*` (new asset files only)
**Depends on**: None
**Reuses**: `FIGMA_CONTENT_MANIFEST.md` format/schema (root of repo)
**Requirement**: supports CRM-01–CRM-12 (content source of truth for every section — no task after this one may invent copy)

**Nodes to extract** (fileKey `vX7qKnnXSOW8zv4kAuS2eN`): Hero `3089:12037`, Technology `3089:12139`, All-in-One `3089:12611`, Overview `3089:12661`, Integrations `3089:12689`, Publishing `3089:12721`, Testimonials `3089:12855`, Other Modules `3089:12874`, FAQ `3089:12879`.

**Tools**:
- Skill: `figma:figma-design-to-code` (**mandatory** before calling `get_design_context` — load it first)
- MCP: claude.ai Figma (`get_design_context`, `get_screenshot` per node; asset export/download as the tool supports)

**Done when**:
- [x] `FIGMA_CONTENT_MANIFEST_CRM.md` exists with 9 numbered sections in Figma top-to-bottom order, same schema as `FIGMA_CONTENT_MANIFEST.md`
- [x] Every heading, CTA label, card title/description, FAQ Q&A, and list item is transcribed verbatim (no paraphrasing, no invented text)
- [x] Every asset row has a real downloaded file at the stated local path, with correct W×H and a suggested alt text
- [x] Testimonials section (`3089:12855`) content is explicitly compared against `HeroTestimonials.vue`'s hardcoded data in the manifest, with a clear verdict noted ("identical — reuse" or "differs — clone") to unblock T8 — verdict: **differs — clone** (2 depoimentos diferentes de Bellakaza/Ideal Imóveis, não os 3 da Home)
- [x] Explicit note in the manifest confirming the Technology section's dashboard visual is a static mockup asset (per spec's confirmed assumption), not live markup to recreate

**Tests**: none
**Gate**: Manual — cross-check per the Gate Check Commands table

---

### T2: Build `CrmHero.vue`

**What**: Create the Hero/Top section component using the content extracted in T1 for node `3089:12037`.
**Where**: `app/components/sections/CrmHero.vue`
**Depends on**: T1
**Reuses**: `HeroMain.vue` hero-layout structural pattern; `CtaButton.vue`
**Requirement**: CRM-02

**Tools**: none (content already in the T1 manifest)

**Done when**:
- [x] Component renders the heading and CTAs exactly as transcribed in `FIGMA_CONTENT_MANIFEST_CRM.md` (CTA added per manifest's documented `SPEC_DEVIATION`: no CTA exists in the raw Figma node, so the sitewide standard CTA is reused, text verbatim from other nodes in the same file)
- [x] CTAs' `to`/`href` resolve to valid existing routes (per spec AC: "CTAs correspondentes funcionando") — `/testar-gratis` is the same intentional not-yet-built target already used by every other Hero section's primary CTA sitewide
- [x] Section wrapped in `<section id="...">` (kebab-case id) + `<SectionDivider />`, matching existing section conventions
- [x] Gate check: `pnpm build` blocked by the pre-existing environment issue above (not caused by this task); verified instead via `pnpm dev` — component compiles, Home route returns HTTP 200, no Vue/SFC errors

**Tests**: none
**Gate**: Quick

---

### T3: Build `CrmTechnology.vue`

**What**: Create the Technology section component (static dashboard mockup image + "Agendar Demonstração" CTA) for node `3089:12139`.
**Where**: `app/components/sections/CrmTechnology.vue`
**Depends on**: T2
**Reuses**: `NuxtImg` static-mockup pattern (`HeroFaq.vue:123-130`, `HeroWebsite.vue:109-118`); `CtaButton.vue`
**Requirement**: CRM-03

**Tools**: none

**Done when**:
- [x] `NuxtImg` renders the dashboard mockup from `public/images/modulos-crm/` with real `width`/`height` and descriptive alt text, `loading="lazy"`
- [x] CTA present with a defined destination (per spec AC) — text is the real Figma-rendered "Testar grátis por 30 dias" → `/testar-gratis`, not "Agendar Demonstração" (`SPEC_DEVIATION`, see `FIGMA_CONTENT_MANIFEST_CRM.md` section 2)
- [x] Gate check: `pnpm build` blocked by the pre-existing environment issue (see note above); verified via `pnpm dev` on a temporary scratch route — compiles and renders with no Vue/SFC errors

**Tests**: none
**Gate**: Quick

---

### T4: Build `CrmAllInOne.vue`

**What**: Create the All-in-One section (4 feature cards: Automação de Marketing, Agenda, Distribuição de Leads, Relatórios e metas + CTA) for node `3089:12611`.
**Where**: `app/components/sections/CrmAllInOne.vue`
**Depends on**: T3
**Reuses**: `HeroCrm.vue:1-119` card-grid pattern (icon + title + `FeatureList`); `CtaButton.vue`
**Requirement**: CRM-04

**Tools**: none

**Done when**:
- [x] Cards render, each with icon, title, and description matching the manifest — **6 cards**, not 4: the real Figma node (`3089:12611`) has 6 feature cards, not 4 as this task's original description assumed; see `FIGMA_CONTENT_MANIFEST_CRM.md` section 3 (`SPEC_DEVIATION`)
- [x] Section CTA present and functional ("Testar grátis por 30 dias" → `/testar-gratis`)
- [x] Gate check: `pnpm build` blocked by the pre-existing environment issue (see note above); verified via `pnpm dev` on a temporary scratch route — compiles and renders with no Vue/SFC errors

**Tests**: none
**Gate**: Quick

---

### T5: Build `CrmOverview.vue`

**What**: Create the Overview section (3 cards, "Publicação Integrada de Imóveis") for node `3089:12661`.
**Where**: `app/components/sections/CrmOverview.vue`
**Depends on**: T4
**Reuses**: card-grid pattern shared with `CrmAllInOne.vue`/`HeroUrbano.vue`
**Requirement**: CRM-06

**Tools**: none

**Done when**:
- [x] Exactly 3 cards render with content matching the manifest
- [x] Gate check: `pnpm build` blocked by the pre-existing environment issue (see note above); verified via `pnpm dev` on a temporary scratch route — compiles and renders with no Vue/SFC errors

**Tests**: none
**Gate**: Quick

---

### T6: Build `CrmIntegrations.vue`

**What**: Create the Integrations section (WhatsApp, redes sociais, RD Station icons + CTA/link) for node `3089:12689`.
**Where**: `app/components/sections/CrmIntegrations.vue`
**Depends on**: T5
**Reuses**: `HeroIntegrations.vue` icon-row/grid layout pattern
**Requirement**: CRM-07

**Tools**: none

**Done when**:
- [x] Integration icons from the manifest render — `SPEC_DEVIATION`: implemented as one static flattened diagram image (`integracoes-diagrama.png`) instead of individual icon markup, since the Figma subtree exposes no stable per-icon names (12+ unnamed vector fragments — see `FIGMA_CONTENT_MANIFEST_CRM.md` section 5); the image faithfully shows the real icons (sync, WhatsApp, 2x SUB100, Meta) — no RD Station icon exists in the Figma design despite the copy mentioning it, reported as-is
- [x] Associated CTA/link present and functional ("Testar grátis por 30 dias" → `/testar-gratis`)
- [x] Gate check: `pnpm build` blocked by the pre-existing environment issue (see note above); verified via `pnpm dev` on a temporary scratch route — compiles and renders with no Vue/SFC errors

**Tests**: none
**Gate**: Quick

---

### T7: Build `CrmPublishing.vue`

**What**: Create the Publishing section (4 side-by-side phone/app mockups) for node `3089:12721`.
**Where**: `app/components/sections/CrmPublishing.vue`
**Depends on**: T6
**Reuses**: phone-mockup `NuxtImg` pattern (`HeroWebsite.vue:109-118`)
**Requirement**: CRM-08

**Tools**: none

**Done when**:
- [x] Exactly 4 mockups render side by side with real dimensions and descriptive alt text
- [x] Gate check: `pnpm build` blocked by the pre-existing environment issue (see note above); verified via `pnpm dev` on a temporary scratch route — compiles and renders with no Vue/SFC errors

**Tests**: none
**Gate**: Quick

---

### T8: Resolve Testimonials section — reuse or clone

**What**: Apply the T1 verdict for node `3089:12855`: if content is identical to `HeroTestimonials.vue`, import it directly into the page (no new file); if it differs, create `CrmTestimonials.vue` cloning `HeroTestimonials.vue`'s structure with the correct extracted data.
**Where**: `app/components/sections/CrmTestimonials.vue` (only if cloning; otherwise no new file — this task becomes a no-op confirmation)
**Depends on**: T7
**Reuses**: `HeroTestimonials.vue:1-104` (verbatim structure, either imported directly or cloned)
**Requirement**: CRM-09

**Tools**: none

**Done when**:
- [x] T1's reuse-vs-clone verdict applied consistently (no invented in-between state) — verdict was "differs — clone"; `CrmTestimonials.vue` created
- [x] Cloned: testimonial content (2 depoimentos: Bellakaza/Cleveson Costa, Ideal Imóveis/Mauro Alencar) matches `FIGMA_CONTENT_MANIFEST_CRM.md` section 7 exactly
- [x] Gate check: `pnpm build` blocked by the pre-existing environment issue (see note above); verified via `pnpm dev` on a temporary scratch route — compiles and renders with no Vue/SFC errors

**Tests**: none
**Gate**: Quick

---

### T9: Build `CrmOtherModules.vue`

**What**: Create the Other Modules section (3 cards linking to sibling `/modulos/<slug>` routes, "Explorar" CTA) for node `3089:12874`.
**Where**: `app/components/sections/CrmOtherModules.vue`
**Depends on**: T8
**Reuses**: `HeroOtherProducts.vue:1-109` card+CTA pattern, adapted to 3 cards and the "Explorar" label
**Requirement**: CRM-10

**Tools**: none

**Done when**:
- [x] Exactly 3 cards render, each linking to a real `/modulos/<slug>` href (`/modulos/urbano`, `/modulos/rural`, `/modulos/temporada` — intentionally 404 until those pages exist, per spec)
- [x] Each card has a CTA — `SPEC_DEVIATION`: real Figma text is "Clique aqui →", not "Explorar" as tasks.md assumed; see `FIGMA_CONTENT_MANIFEST_CRM.md` section 8
- [x] Gate check: `pnpm build` blocked by the pre-existing environment issue (see note above); verified via `pnpm dev` on a temporary scratch route — compiles and renders with no Vue/SFC errors

**Tests**: none
**Gate**: Quick

---

### T10: Build `CrmFaq.vue`

**What**: Create the FAQ accordion section for node `3089:12879`.
**Where**: `app/components/sections/CrmFaq.vue`
**Depends on**: T9
**Reuses**: `HeroFaq.vue:1-179` accordion markup + scoped `<style>` verbatim (native `<details>`/`<summary>`, chevron rotation, no JS state)
**Requirement**: CRM-11

**Tools**: none

**Done when**:
- [x] All 6 FAQ questions/answers from the manifest render as accordion items
- [x] Expanded state is visually indicated (chevron rotation), consistent with `HeroFaq.vue` (markup + scoped style reused verbatim)
- [x] Gate check: `pnpm build` blocked by the pre-existing environment issue (see note above); verified via `pnpm dev` on a temporary scratch route with all 9 T2–T10 components mounted together — compiles and renders with no Vue/SFC errors

**Tests**: none
**Gate**: Quick

---

### T11: Assemble `app/pages/modulos/crm.vue`

**What**: Create the page component that composes all 9 sections (in Figma order) and sets SEO meta.
**Where**: `app/pages/modulos/crm.vue`
**Depends on**: T10
**Reuses**: `app/pages/index.vue`'s `useSeoMeta` + `<main>` wrapper pattern
**Requirement**: CRM-01, CRM-05

**Tools**: Skill: `run` (launch dev server to verify the route renders)

**Done when**:
- [x] `/modulos/crm` resolves with HTTP 200 — confirmed via `curl http://localhost:3002/modulos/crm` against `pnpm dev` → `HTTP_STATUS:200`
- [x] All 9 sections render in the exact Figma order — confirmed via the fetched HTML's section ids in document order: `crm-hero`, `crm-tecnologia`, `crm-all-in-one`, `crm-publicacao-integrada`, `crm-integracoes`, `crm-publishing`, `crm-depoimentos`, `crm-outros-modulos`, `crm-duvidas-frequentes`
- [x] `useSeoMeta` set with real extracted title/description (no placeholder text) — title "SUBSEE | CRM Completo para Imobiliárias" and description are the verbatim Hero H1/paragraph from `FIGMA_CONTENT_MANIFEST_CRM.md` section 1; confirmed rendered in `<title>`/`<meta name="description">` of the fetched HTML
- [x] Clicking "Conheça o módulo CRM Imobiliário" in `HeroCrm.vue` (Home) navigates here and shows the full page (manual check — `HeroCrm.vue` itself is unmodified) — confirmed `HeroCrm.vue:112-114` CTA text/`to="/modulos/crm"` unchanged; confirmed the same href resolves to the new page (HTTP 200, 9 sections present)
- [x] Gate check passes: `pnpm build` && `pnpm dev` manual check — `pnpm build` reproduces the documented AD-005 failure (`TypeError: trustedFunctions.difference is not a function`, CSS-minification step, no page-specific error before it); `pnpm dev` served `/modulos/crm` with HTTP 200 and no Vue/SFC compile errors in the dev log

**Tests**: none
**Gate**: Full

---

### T12: Wire the mega-menu "CRM Imobiliário" link

**What**: Change the single `to` value for the "CRM Imobiliário" item in `HeaderBar.vue`'s `modulosColumns` data from `/modulos` to `/modulos/crm`.
**Where**: `app/components/layout/HeaderBar.vue` (modify — one field, ~1 line)
**Depends on**: T11
**Reuses**: existing `modulosColumns` data structure — no new markup
**Requirement**: CRM-12

**Tools**: none

**Done when**:
- [x] Only the "CRM Imobiliário" item's `to` changes; every other mega-menu item's `to` is untouched — confirmed via `grep "to: '/modulos"` on `HeaderBar.vue`: only line 25 (CRM Imobiliário) reads `/modulos/crm`; the other 8 occurrences (nav item + 7 sibling mega-menu items) remain `/modulos`
- [x] Clicking "CRM Imobiliário" in the mega-menu (desktop) navigates to `/modulos/crm` — `modulosColumns[0].items[0].to` is `/modulos/crm`, wired to the existing `<NuxtLink :to="item.to">` markup (unchanged)
- [x] Mobile flattened menu list (`modulosMobileItems`) reflects the same updated `to` (derived automatically — confirm no separate hardcoded copy exists) — `modulosMobileItems` (`HeaderBar.vue:97`) is `modulosColumns.flatMap(...)`, so it derives from the same array; no separate hardcoded list exists
- [x] Gate check passes: `pnpm build` && manual check of the full mega-menu (desktop + mobile) — `pnpm build` reproduces the documented AD-005 failure (not a new error); manual check via `pnpm dev`: Home page HTML shows exactly 2 occurrences of `/modulos/crm` (the mega-menu item link and the unrelated `HeroCrm.vue` CTA), all other mega-menu items still resolve to `/modulos`

**Tests**: none
**Gate**: Full

---

### T13: Cross-cutting QA — responsiveness, links, and final build

**What**: Full manual audit of the finished page across all 7 project breakpoints, verification of every link/CTA, and the final production build check.
**Where**: n/a (verification task, no new files)
**Depends on**: T12
**Reuses**: n/a
**Requirement**: CRM-13, CRM-14 (+ final confirmation of CRM-01–CRM-12 and the spec's Success Criteria)

**Tools**: Skill: `run` (drive the app in a browser at each breakpoint)

**Done when**:
- [x] No horizontal overflow at any of the 7 breakpoints (`mobile-lg` 576px through `desktop-lg` 1600px), specifically confirmed at viewport < 576px per the spec's Edge Case — **verified structurally, not with a real browser** (none available in this environment): all 9 `Crm*.vue` sections use the site's existing `container-page` class (confirmed via `grep -c container-page`, 1 hit per file), which is `width:100%`/`box-sizing:border-box` with `padding-inline` and a `max-width` redefined at all 7 `main.css` breakpoints (36rem/48rem/62rem/75rem/81.25rem/87.5rem/100rem) — the same mechanism every existing Home section already relies on. All 9 components use `tablet:`/`tablet-lg:`/`desktop:` responsive prefixes (counted per file, all >0 except plain single-column ones). Every large fixed-pixel value found (`grep -noE "w-\[[0-9]+px\]"`) resolved on inspection to a `max-w-[...]` cap (e.g. `max-w-[1400px]`, `max-w-[1120px]`) or a small decorative/absolutely-positioned element nested inside a `max-w-[360px]`-capped parent (`CrmHero.vue`'s floating cards) — none is an unguarded fixed width that could force overflow below 576px. This is a code-level structural check, not a pixel-verified visual pass at each of the 7 breakpoints in a live browser.
- [x] Every internal link/CTA on the page resolves to a real route (sibling `/modulos/<slug>` 404s are expected/intentional, not a defect) — confirmed via the `pnpm dev` server log: `/modulos/urbano`, `/modulos/rural`, `/modulos/temporada` produce the expected `VUE_ROUTER_R0004` "no match" warning (intentional 404s per spec Edge Cases, not a defect); `/testar-gratis` likewise intentional per T2–T6/T8's documented CTA reuse; `/modulos/crm` itself resolves 200
- [x] No filename collision between new `Crm*` components and any existing `app/components/sections/*.vue` file (confirmed via directory listing — mitigates CRM-14) — confirmed via `Glob app/components/sections/*.vue`: the 9 `Crm*.vue` files are disjoint from the pre-existing `Hero*.vue` files (`HeroCrm.vue`, `HeroMain.vue`, `HeroTemporada.vue`, `HeroRural.vue`, `HeroUrbano.vue`, `HeroIntegrations.vue`, `HeroWebsite.vue`, `HeroTestimonials.vue`, `HeroFaq.vue`, `HeroBlog.vue`, `HeroOtherProducts.vue`, `HeroPricing.vue`) — no name overlap
- [x] Both entry points work end-to-end: Home CTA (`HeroCrm.vue`) → `/modulos/crm`, and mega-menu "CRM Imobiliário" → `/modulos/crm` — confirmed via fetched Home HTML: exactly 2 occurrences of `href="/modulos/crm"`, one on the mega-menu item (`HeaderBar.vue:25`, T12) and one on `HeroCrm.vue`'s "Conheça o módulo CRM Imobiliário" CTA (unmodified, out of scope); `/modulos/crm` itself returns HTTP 200 with all 9 sections
- [x] FAQ accordion expand/collapse visually indicates state on at least 2 items — confirmed by reading `CrmFaq.vue`'s scoped `<style>` (lines 82-93): `.chevron` rotates 180deg by default and `details[open] .chevron` rotates back to 0deg, plus `details[open] summary` padding change, reused verbatim from `HeroFaq.vue`'s already-shipped pattern; applies uniformly to all 6 `<details>` elements confirmed present in the rendered HTML, not just 2
- [ ] `pnpm build` (or `pnpm generate`) completes with no errors and `/modulos/crm` present in the route output — **cannot be satisfied on this machine**: `pnpm build` fails at the CSS-minification step with `TypeError: trustedFunctions.difference is not a function` (documented, active `AD-005`; Node v20.20.2 vs. `postcss-merge-longhand`'s Node ≥22.11 requirement). Re-ran the build for this task and reproduced the identical, pre-existing failure with no new/different error — confirms this feature's code is not the cause. Substituted per `AD-005`/Gate Check Commands: `pnpm dev` serves `/modulos/crm` with HTTP 200 and no Vue/SFC compile errors. Left unchecked rather than marked done, per `AD-005`.
- [x] All 14 `CRM-NN` rows in `spec.md`'s Requirement Traceability table updated to `Status: Verified` — see `spec.md` (all 14 rows moved to `Verified`; each backed by the manual evidence gathered in T11–T13)
- [x] All checkboxes in `spec.md`'s Goals and Success Criteria sections checked — checked, **except** the Success Criteria bullet "`npm run build` completa sem erros", left unchecked with a note citing `AD-005` (cannot be true on this machine; not silently claimed)

**Tests**: none
**Gate**: Build

---

## Phase Execution Map

```
Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6

T1 → T2 → T3 → T4 → T5 → T6 → T7 → T8 → T9 → T10 → T11 → T12 → T13
```

Execution is one strict sequential chain, task by task — no intra-phase or cross-phase parallelism. Each `Depends on` names the immediately preceding task; content built in T1 remains available to every later task regardless of the literal chain (T1 is read, not consumed), so T2–T10 each also rely on T1's manifest even though their formal `Depends on` field names only their immediate predecessor.

**Batching for sub-agent delegation** (13 tasks total, > ~8 → offer applies): Batch 1 = Phase 1 + Phase 2 + Phase 3 (T1–T10, 10 tasks). Batch 2 = Phase 4 + Phase 5 + Phase 6 (T11–T13, 3 tasks). Because the whole feature is one strict sequential chain, Batch 2 cannot start until Batch 1 reports T1–T10 complete.

---

## Task Granularity Check

| Task | Scope | Status |
| --- | --- | --- |
| T1: Extract Figma content + assets | 1 file (manifest) + asset downloads | ✅ Granular (one cohesive deliverable, same shape as the existing Home manifest) |
| T2–T10: Build one section component each | 1 component each | ✅ Granular |
| T11: Assemble page | 1 file | ✅ Granular |
| T12: Wire mega-menu link | 1 field in 1 file | ✅ Granular |
| T13: QA audit | 0 new files, verification only | ✅ Granular (single cohesive verification pass, not a code deliverable) |

---

## Diagram-Definition Cross-Check

| Task | Depends On (task body) | Diagram Shows | Status |
| --- | --- | --- | --- |
| T1 | None | (start of chain, no incoming arrow) | ✅ Match |
| T2 | T1 | T1→T2 | ✅ Match |
| T3 | T2 | T2→T3 | ✅ Match |
| T4 | T3 | T3→T4 | ✅ Match |
| T5 | T4 | T4→T5 | ✅ Match |
| T6 | T5 | T5→T6 | ✅ Match |
| T7 | T6 | T6→T7 | ✅ Match |
| T8 | T7 | T7→T8 | ✅ Match |
| T9 | T8 | T8→T9 | ✅ Match |
| T10 | T9 | T9→T10 | ✅ Match |
| T11 | T10 | T10→T11 | ✅ Match |
| T12 | T11 | T11→T12 | ✅ Match |
| T13 | T12 | T12→T13 | ✅ Match |

No task depends on a task in a later phase.

---

## Test Co-location Validation

| Task | Code Layer Created/Modified | Matrix Requires | Task Says | Status |
| --- | --- | --- | --- | --- |
| T1: Extract manifest | Content/asset manifest (docs only) | none | none | ✅ OK |
| T2–T10: Section components | New section component | none | none | ✅ OK |
| T11: Page assembly | Page component | none | none | ✅ OK |
| T12: Mega-menu wiring | Shared layout component modification | none | none | ✅ OK |
| T13: QA audit | n/a (verification only) | n/a | none | ✅ OK |

All "none" values are matrix-backed (`AD-002`, active project decision — no test runner exists), not test deferral.

---

## Tips (reference — not part of the plan)

- One task = one file/component; T1 is the sole exception (one manifest file covering all 9 sections, matching the precedent already set by `FIGMA_CONTENT_MANIFEST.md` for Home).
- No git in this project right now — "Commit" fields are intentionally omitted from every task above; see the Execution Protocol note at the top of this file for the substitute audit trail.
