# Site para Loteadoras Validation

**Date**: 2026-09-11
**Spec**: `.specs/features/site-para-loteadoras/spec.md`
**Diff range**: `3546871` (feat(site-loteadoras): implement Site para Loteadoras page) — reviewed as an isolated `git worktree` snapshot of this single commit, not the live working tree (see Note on working-tree isolation below)
**Verifier**: independent sub-agent (author ≠ verifier)

**Note on working-tree isolation**: at verification time the real working tree had *uncommitted* local changes to `app/components/sections/SiteLoteadorasHero.vue` and `app/components/sections/SiteLoteadorasSglOffer.vue` on top of commit `3546871`, from what appears to be unrelated, still-in-progress work (not part of this commit, not authored by this review). To get a faithful read of what commit `3546871` actually ships, this review was performed against `git worktree add d:/tmp/verify-site-loteadoras 3546871` (a clean detached checkout of the commit), with `pnpm install` + `pnpm build` run there. The worktree was removed after use; `git status --porcelain` on the real tree was captured before and after and is unchanged except for the two files above, which this review never touched (confirmed via `git diff --stat` limited to those paths, run before any sensor work began).

---

## Task Completion

No `tasks.md` exists for this feature — spec.md itself documents this as a deliberate scope choice for the Specify stage ("Profundidade do SPEC nesta etapa: `spec.md` apenas... `tasks.md` fica para antes do Execute, se necessário"). Completion is tracked instead via spec.md's own Requirement Traceability table (T01–T08, all marked `done`). Status below re-derives each against the commit diff.

| Task (spec.md ID) | Status | Notes |
| --- | --- | --- |
| T01 Hero | ⚠️ Partial | Component exists, wraps `layout/Hero.vue` correctly, badge/heading/description/module-icons all correct — but the shipped `hero-visual.png` contains only the hero photo; the 2 floating cards, decorative curves and corner icon described in the Figma manifest are absent from both the DOM and the raster image. See Gap 1 below. |
| T02 Technology | ✅ Done | `app/components/sections/SiteLoteadorasTechnology.vue` |
| T03 ComingSoon | ✅ Done | `app/components/sections/SiteLoteadorasComingSoon.vue` |
| T04 OtherModules | ✅ Done | `app/components/sections/SiteLoteadorasOtherModules.vue` |
| T05 Faq | ✅ Done | `app/components/sections/SiteLoteadorasFaq.vue`, content matches manifest verbatim |
| T06 SglOffer | ✅ Done | `app/components/sections/SiteLoteadorasSglOffer.vue`, real alpha transparency confirmed on the phone mockup |
| T07 Página+SEO | ✅ Done | `app/pages/modulos/site-para-loteadoras.vue` |
| T08 Ativação dos links nas páginas irmãs | ✅ Done | `SiteUrbanoOtherModules.vue` / `SiteRuralOtherModules.vue`, dead `disabled` branch cleanly removed |

---

## Spec-Anchored Acceptance Criteria

### P1: Visitante encontra a página e as páginas irmãs passam a linkar para ela

| Criterion (WHEN X THEN Y) | Spec-defined outcome | `file:line` + assertion | Result |
| --- | --- | --- | --- |
| WHEN visitante acessa `/modulos/site-para-loteadoras` THEN HTTP 200 e 6 seções na ordem do Figma | 200 status; order `hero → tecnologia → em-breve → outros-modulos → faq → sgl` | `app/pages/modulos/site-para-loteadoras.vue:16-21` (component order) — runtime: `curl -o /dev/null -w "%{http_code}" http://localhost:3211/modulos/site-para-loteadoras` → `200`; `grep -o 'id="site-loteadoras-[a-z-]*"' loteadoras.html` returned `hero, tecnologia, em-breve, outros-modulos, faq, sgl` in that exact order | ✅ PASS |
| WHEN clica em "Site para Loteadoras" no mega-menu THEN navega sem erro | Link resolves, no 404 | `app/components/layout/HeaderBar.vue:63-68` — `to: '/modulos/site-para-loteadoras'` (pre-existing, not part of this diff, but only functional now that the route exists) + runtime 200 above | ✅ PASS |
| WHEN clica no card "Site para Loteadoras" nas páginas urbana/rural THEN navega para a rota real mantendo o badge "breve" | `href`/`:to` resolves to `/modulos/site-para-loteadoras`; badge "breve" still rendered | `app/components/sections/SiteUrbanoOtherModules.vue:18-23` and `app/components/sections/SiteRuralOtherModules.vue:18-23` — `href: '/modulos/site-para-loteadoras'`, `badge: 'breve'`; template renders badge via `v-if="mod.badge"` at `SiteUrbanoOtherModules.vue:50-55` / `SiteRuralOtherModules.vue:50-55`. Discrimination-sensor Mutation 3 (below) independently confirms the badge render is load-bearing, not decorative. | ✅ PASS |
| WHEN a seção Other Modules desta página é renderizada THEN exibe 2 cards ativos (Urbanas, Rurais) | 2 cards, no `disabled`, routes to already-published pages | `app/components/sections/SiteLoteadorasOtherModules.vue:9-22` — 2-entry `modules` array, no `badge`/`disabled` field, `href` to `/modulos/site-para-imobiliarias-urbanas` and `/modulos/site-para-imobiliarias-rurais`. Discrimination-sensor Mutation 2 confirms the `:to` binding is load-bearing. | ✅ PASS |

**Status**: ✅ All P1 ACs covered.

### P2: A página é fiel ao Figma nos breakpoints do projeto

| Criterion (WHEN X THEN Y) | Spec-defined outcome | `file:line` + assertion | Result |
| --- | --- | --- | --- |
| WHEN renderizada em 1440px THEN cada uma das 6 seções corresponde ao node Figma (layout, tipografia, cores, espaçamento) | Visual match to `FIGMA_CONTENT_MANIFEST_SITE_LOTEADORAS.md` per section | Screenshot `d:/tmp/loteadoras-1440.png` (Playwright, built app) cross-checked against the manifest. Sections 2–6 match copy, gradients (`SiteLoteadorasComingSoon.vue:8`, `SiteLoteadorasSglOffer.vue:8`), and structure closely. **Section 1 (Hero) does not**: `public/images/modulos-site-loteadoras/hero-visual.png` (visually inspected directly) contains only the hero photo — the manifest's "Cards flutuantes (2)" (Meu Site / Sistema SGL), decorative curves, and the 50×50 corner icon are present in neither the DOM (`app/components/sections/SiteLoteadorasHero.vue:27-37` renders only one `<NuxtImg>`) nor the raster asset itself. | ❌ GAP (Hero only; Technology/ComingSoon/OtherModules/Faq/SglOffer PASS) |
| WHILE viewport < `tablet-lg` (992px) THEN colunas empilham sem overflow horizontal | No horizontal scroll at 992/768/375px | Playwright runtime check against built app: `document.documentElement.scrollWidth === clientWidth` at 992px, 768px, 375px — all `false` for `overflowing` (i.e., no overflow) | ✅ PASS |
| WHEN renderizada em 375px THEN nenhum elemento provoca scroll horizontal no `body` | `body.scrollWidth === clientWidth` at 375px | Playwright: `{"scrollWidth":375,"clientWidth":375,"bodyScrollWidth":375,"overflowing":false}` | ✅ PASS |
| WHEN seção reutiliza shell de `layout/` (Hero, Technology, Faq) THEN conteúdo via props/slots sem duplicar markup | No forked template copies | `SiteLoteadorasHero.vue:11-73` wraps `<Hero>` via `#heading`/`#description`/`#visual` slots + `module-icons` prop; `SiteLoteadorasTechnology.vue:10-30` wraps `<CrmTechnology>` via props + `#title`/`#description` slots; `SiteLoteadorasFaq.vue:42-45` wraps `<CrmFaq>` via `:faqs` prop + `#title`/`#description` slots. No markup forked. | ✅ PASS |
| WHEN seções bespoke (ComingSoon, OtherModules, SglOffer) construídas THEN usam tokens de `main.css` em vez de valores ad hoc | `.container-page` / `.section-py` used | `SiteLoteadorasComingSoon.vue:4-5`, `SiteLoteadorasOtherModules.vue:26-27`, `SiteLoteadorasSglOffer.vue:4-5` — all three use `class="section-py"` on `<section>` and `class="container-page"` on the wrapping `<div>` | ✅ PASS |

**Status**: ❌ Gap present (Hero visual fidelity — see Gap 1).

### P3: SEO e semântica corretos

| Criterion (WHEN X THEN Y) | Spec-defined outcome | `file:line` + assertion | Result |
| --- | --- | --- | --- |
| WHEN renderizada THEN exatamente um `<h1>` ("Site para Loteadoras") | 1 `<h1>`, correct text | Runtime: `grep -o "<h1[^>]*>" loteadoras.html \| wc -l` → `1`; content `Site para <br>Loteadoras<span>breve</span>` at `app/components/sections/SiteLoteadorasHero.vue:12-19` via `layout/Hero.vue:69` | ✅ PASS |
| WHEN renderizada THEN `useSeoMeta` define `title`/`description`/`ogTitle`/`ogDescription` no padrão `SUBSEE \| Site para Loteadoras — <subtítulo>` | All 4 fields set, title matches pattern | `app/pages/modulos/site-para-loteadoras.vue:2-11` — `title = 'SUBSEE \| Site para Loteadoras — Presença digital para lotes e lançamentos'`, all 4 keys passed to `useSeoMeta` | ✅ PASS |
| WHEN seção tem título próprio THEN usa `<h2>` (5: Technology, ComingSoon, OtherModules, FAQ, SglOffer) e `<h3>` para os cards flutuantes da Hero e para as perguntas do FAQ | 5 `<h2>`s; card titles and FAQ questions as `<h3>` | Runtime: `grep -o "<h2[^>]*>" \| wc -l` → `5` (✅, sources: `app/components/layout/Technology.vue:55`, `SiteLoteadorasComingSoon.vue:10`, `SiteLoteadorasOtherModules.vue:29`, `app/components/layout/Faq.vue:55`, `SiteLoteadorasSglOffer.vue:18`). `<h3>` requirement: **not met** — `grep -o "<h3[^>]*>" \| wc -l` → `3`, and all 3 are from `TheFooter` ("Localização", "Siga nas redes sociais", "Comercial"), none from the Hero cards or the FAQ. Root cause: Hero cards don't exist as DOM at all (see Gap 1), and FAQ questions render as `<span>` inside `<summary>` in the shared, unmodified `app/components/layout/Faq.vue:66-68` — same pattern already used by every other page's FAQ on this site. | ⚠️ Spec-precision gap / ❌ GAP for the `<h3>` half |

**Status**: ⚠️ `<h1>`/`<h2>`/SEO-meta all PASS; `<h3>` requirement for Hero cards and FAQ questions is unmet (Gap 1 and Gap 2).

---

## Discrimination Sensor

Run in an isolated `git worktree` (`d:/tmp/verify-site-loteadoras`, detached at `3546871`), never in the real tree. `git status --porcelain` on the real tree was captured immediately before sensor work and compared immediately after (once the two unrelated pre-existing dirty files are excluded) — **identical**, confirming isolation held.

| Mutation | File:line | Description | Killed? |
| --- | --- | --- | --- |
| 1 | `app/components/sections/SiteLoteadorasFaq.vue:42` | Removed `:faqs="faqs"` prop pass-through to `<CrmFaq>` | ✅ Killed — but only by a **content**-based check, not a naive count. `CrmFaq.vue` has its own `withDefaults()` fallback `faqs` array (generic CRM questions), so `<details>` count stayed at 6 even with the prop removed (a pure-count assertion would have been a false negative). Confirmed via `grep` for a Loteadoras-specific question string (`"Minha loteadora não usa o CRM SUBSEE"` → 0 matches with the mutation, present without it) and by inspecting the rendered question text, which reverted to CrmFaq's generic default set ("Como funciona o CRM Imobiliário SUBSEE?", etc.) |
| 2 | `app/components/sections/SiteLoteadorasOtherModules.vue:14` | Changed `href: '/modulos/site-para-imobiliarias-urbanas'` → `'/modulos/site-para-imobiliarias-urbanas-BROKEN'` | ✅ Killed — `pnpm build` still succeeds (Vue's `:to` binding isn't statically route-checked), but a runtime check catches it: `curl` the built route and `grep` for the broken href string found a match. This would **not** be caught by `pnpm build` alone, only by the runtime/curl check — noting this explicitly per the task's instruction to be honest about what each check actually catches. |
| 3 | `app/components/sections/SiteUrbanoOtherModules.vue:51` | Flipped `v-if="mod.badge"` → `v-if="!mod.badge"` | ✅ Killed — runtime `curl` of `/modulos/site-para-imobiliarias-urbanas` shows the "breve" badge span replaced by Vue's `<!---->` comment placeholder for the Loteadoras card, i.e. the badge silently disappears. Caught via `grep` for the rendered badge markup around the "Site para Loteadoras" card text, not by `pnpm build` (which still succeeds) and not by a human glancing at the page unless they specifically looked for the badge's absence. |

**Sensor depth**: lightweight (3 targeted mutations, per the default tier for this feature)
**Result**: 3/3 killed — ✅ PASS

Build-catchability note (for completeness, not a gap): none of the 3 mutations were caught by `pnpm build` itself — all three are runtime/content-level defects (wrong link target, wrong list content, missing badge) that Vue's compiler has no static visibility into. This project's only "gate" is `pnpm build` (AD-002); the runtime/curl checks used here go beyond that gate and are not automated as part of the actual project workflow — a human visually reviewing the page would also have caught mutations 2 and 3 (wrong destination, missing badge) but likely not mutation 1 without deliberately reading the FAQ text closely, since the mutated page still shows a plausible, fully-formed FAQ accordion.

---

## Code Quality

| Principle | Status |
| --- | --- |
| No features beyond what was asked | ✅ |
| No abstractions for single-use code | ✅ — `ComingSoon`/`SglOffer` correctly kept bespoke per spec's own Out-of-Scope table (AD-013 only promotes 2+ page patterns) |
| No unnecessary "flexibility" added | ✅ |
| Only touched files required for task | ✅ — diff is exactly the 6 new section components, the page, the 2 sibling `OtherModules` edits, and 3 new image assets |
| Didn't "improve" unrelated code | ✅ |
| Matches existing patterns/style | ✅ — mirrors `SiteRuralHero.vue`/`SiteUrbanoHero.vue`/`CrmFaq.vue`/`CrmTechnology.vue` wrapping conventions (AD-012, AD-013) |
| Would senior engineer approve? | ⚠️ — yes for 5 of 6 sections; the Hero section's visual is a materially incomplete Figma port (Gap 1) and the commit message's description of it doesn't match what's actually in the shipped asset |
| Zero `translate-x-*`/`translate-y-*` in new files (AD-007) | ✅ — `grep -rnE "translate-x-\|translate-y-"` across all 6 new section files + page file: 0 matches |
| Zero code comments in new/edited `.vue` files (project CLAUDE.md) | ✅ — `grep -rnE "<!--\|//[^/]\|/\*"` across the same files: 0 matches |
| Documented project quality/testing guidelines followed | `.specs/STATE.md` AD-002 (no test runner — build + manual/visual gate), AD-007 (no translate-*), AD-012 (Hero composed images for floating-card graphics), AD-013 (promotion threshold), AD-014 (offline compositing for transparency) — all followed except AD-012's intent is followed structurally (image-based cards) but the actual card content is missing from the image (Gap 1) |

---

## Edge Cases

- [x] Module icon reuse (`venda.svg`, "lançamentos" glyph): `SiteLoteadorasHero.vue:5-6` references `/icons/crm-hero-icone-venda.svg` and `/icons/crm-hero-icone-lancamentos-glyph.svg` — pre-existing shared assets, none duplicated under `modulos-site-loteadoras/`
- [x] `translate-x-*`/`translate-y-*` avoided (AD-007) — confirmed via grep, 0 matches
- [x] Arrays/objects declared as typed `const` in `<script setup>`, not inline in template bindings — confirmed in all 6 new files (`moduleIcons`, `mockupImgAttrs`, `modules`, `faqs` all declared as typed consts)
- [ ] SGL phone mockup (Section 6) composited with real alpha transparency, not a flattened opaque-white PNG (AD-014) — **partially confirmed**: direct visual inspection of `public/images/modulos-site-loteadoras/sgl-phone-mockup.png` and the rendered page shows the phone mockup sitting cleanly on the gradient panel with no white box, consistent with real transparency. Not independently re-verified pixel-by-pixel (e.g. checking corner alpha=0 the way AD-014's own discovery did) — treating this as a visual pass, not a byte-level confirmation.
- [x] "breve" badge retained on both sibling pages' cards after activating the links — confirmed via diff + discrimination-sensor Mutation 3
- [x] Zero comments in new/edited `.vue` files — confirmed via grep

---

## Gate Check

- **Gate command**: `pnpm build` (per AD-002, this project's only automated gate)
- **Result**: build succeeded with 0 errors against the isolated `3546871` worktree snapshot (fresh `pnpm install` + `pnpm build`, both completed cleanly; `✨ Build complete!`)
- **Test count before/after**: N/A — no test runner exists in this project (AD-002); not applicable
- **Skipped tests**: N/A
- **Failures**: none

---

## Fix Plans

### Fix 1: Hero section is missing its floating cards, decorative curves, and corner icon (Gap 1)

- **Root cause**: `public/images/modulos-site-loteadoras/hero-visual.png`, the single asset used for the entire Hero `#visual` slot, contains only the offline-composited photo (transparent background) — the Figma-sourced card/curve/icon vector layers described in the commit message and the manifest were never actually composited into it, despite the commit message explicitly claiming they were.
- **Fix task**: Re-composite `hero-visual.png` to include the 2 floating cards ("Meu Site" / "Sistema SGL", each with an `<h3>`-equivalent title per the Figma manifest), the decorative curves, and the 50×50 corner icon — following the same offline `sharp` compositing technique already used successfully for the SGL phone mockup (Section 6) and documented in AD-014. Alternatively, if the cards are to be real DOM (to satisfy the P3 `<h3>` requirement), build them as an HTML/CSS overlay similar to what appears to already be underway, uncommitted, in the working tree's current `SiteLoteadorasHero.vue` (not part of this commit, not evaluated here).
- **Priority**: Major (visual fidelity + P2/P3 AC failure; not a Blocker since the page still renders correctly structurally and the photo itself displays fine)

### Fix 2: `<h3>` not used for FAQ question titles (Gap 2)

- **Root cause**: The shared `layout/Faq.vue` component (unmodified by this commit, used by every FAQ section site-wide) renders each question as a `<span class="questionClass">` inside `<summary>`, not as a heading element.
- **Fix task**: This is a pre-existing, site-wide pattern, not something unique to `site-para-loteadoras` — changing it would affect every FAQ section on the site (CRM, Urbano, Rural, Temporada) and should be scoped as its own cross-cutting fix (or a documented, accepted `STATE.md` deviation) rather than a one-page patch. Recommend either (a) adding an `STATE.md` AD entry documenting this as an accepted `<h3>`-less pattern for accordion questions (screen readers still announce `<summary>` content as an interactive control), or (b) a separate, explicitly-scoped fix task touching `layout/Faq.vue` for all consuming pages.
- **Priority**: Minor (accessibility/SEO nicety, not a functional defect; consistent with every sibling page already shipped)

---

## Requirement Traceability Update

| Requirement | Previous Status | New Status |
| --- | --- | --- |
| SLO-01 | done | ✅ Verified |
| SLO-02 | done | ✅ Verified |
| SLO-03 | done | ✅ Verified |
| SLO-04 | done | ✅ Verified |
| SLO-05 | done | ❌ Needs Fix (Hero section fidelity — Gap 1) |
| SLO-06 | done | ✅ Verified (no-horizontal-overflow requirement; independent of Gap 1) |
| SLO-07 | done | ✅ Verified |
| SLO-08 | done | ⚠️ Partial (Hero, Technology all wrap shells correctly via props/slots — T01/T02 mechanically fine; T05's `layout/Faq.vue` wrap is also fine. The gap is in Hero's *content*, not its wrapping technique, so SLO-08 itself — "shell reuse via props/slots" — is satisfied; flagged here only for cross-reference to Gap 1) |
| SLO-09 | done | ✅ Verified |
| SLO-10 | done | ✅ Verified |
| SLO-11 | done | ⚠️ Partial (`useSeoMeta` fully correct; `<h1>` correct — but the SEO/semantics story also implicitly depends on Hero card text being real, indexable DOM, which Gap 1 breaks) |
| SLO-12 | done | ❌ Needs Fix (`<h2>` count correct; `<h3>` for Hero cards and FAQ questions not implemented — Gap 1 + Gap 2) |

---

## Summary

**Overall**: ❌ FAIL (explicit verdict; see rationale below)

**Verdict rationale**: P1 (routing, all 4 ACs) is fully verified and solid. However, evidence-or-zero discipline requires treating the 2 gaps below as real failures, not soft "issues": Gap 1 (Hero visual missing its cards/curves/icon — P2-AC1, SLO-05) is directly contradicted by pixel-level inspection of the shipped asset, and Gap 2 (`<h3>` semantics — P3-AC3, SLO-12) is directly contradicted by a `grep` count of the rendered HTML. Both are anchored to file:line/asset evidence, not stylistic preference. Per the skill's PASS/FAIL discipline, a feature with confirmed, evidenced AC failures is FAIL, not a qualified pass.

**Spec-anchored check**: 10/12 ACs (across the 3 stories' individual criteria) matched the spec-defined outcome; 2 gaps (Hero visual fidelity — P2; `<h3>` semantics for Hero cards + FAQ questions — P3), both traced to file:line evidence, one screenshot/image-inspection confirmed
**Sensor**: 3/3 mutations killed (lightweight tier)
**Gate**: `pnpm build` passed, 0 errors

**What works**: Routing (P1, all 4 ACs) is fully correct and independently confirmed at runtime — the route exists, returns 200, renders the 6 sections in Figma order, and both sibling pages' cards now link to it while keeping the "breve" badge (confirmed both structurally and via a fault-injection sensor). 5 of 6 sections (Technology, ComingSoon, OtherModules, FAQ, SglOffer) are faithful to the Figma manifest in content, structure, and styling; no horizontal overflow at 1440/992/768/375px (Playwright-verified against the real built app); exactly one `<h1>` and five `<h2>`s; `useSeoMeta` fully populated in the correct pattern; zero `translate-*` utilities and zero code comments in all new files; SGL phone mockup shows genuine alpha transparency; dead-code `disabled` branches were cleanly removed from both sibling `OtherModules` components.

**Issues found**:
1. **Hero visual is materially incomplete relative to Figma** (Major) — `hero-visual.png` contains only the photo; the 2 floating cards, decorative curves, and corner icon from the Figma manifest are absent from the shipped commit, contradicting both the manifest and the commit message's own description of the compositing work. Fix: re-composite the asset (or build the cards as a DOM overlay) per Fix 1 above.
2. **FAQ questions and Hero card titles don't use `<h3>`** (Minor) — inherited from the shared, unmodified `layout/Faq.vue` (site-wide pattern, not a regression) and from Gap 1 (cards don't exist as DOM at all). Fix: see Fix 2 above; recommend scoping as either an accepted `STATE.md` deviation or a separate cross-cutting fix.

**Next steps**: Route Fix 1 (Major) back to an implementer before considering this feature fully done; Fix 2 (Minor) can be deferred to a dedicated cross-cutting task or explicitly accepted via a new `STATE.md` AD entry, since it mirrors an already-shipped, sitewide pattern. Note for whoever picks this up: the real working tree currently has *uncommitted* changes to `SiteLoteadorasHero.vue` that appear to already be adding the missing card/curve/icon overlay — worth checking before starting Fix 1 from scratch, as that work may already be in progress.
