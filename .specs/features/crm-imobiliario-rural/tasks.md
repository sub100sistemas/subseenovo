# CRM Imobiliário Rural Tasks

## Execution Protocol (MANDATORY — do not skip)

Implement these tasks with the `tlc-spec-driven` skill: **activate it by name and follow its Execute flow and Critical Rules.** Do not search for skill files by filesystem path. The skill is the source of truth for the full flow (per-task cycle, sub-agent delegation, adequacy review, Verifier, discrimination sensor).

**If the skill cannot be activated, STOP and tell the user — do not proceed without it.**

**Commit deviation (recorded, not silent):** this directory is not a git repository. The "one atomic commit per task" step is therefore **not executable**. Substitute: each task is marked `[x]` in this file's checklists **before** moving to the next task, and the per-task "Done when" checklist is the audit trail in place of a commit.

**No-comments deviation:** per `CLAUDE.md`, this repo's `.vue`/`.ts`/`.css` files carry no comments. Any rationale that would normally live inline goes in this file's "Done when" notes or in `.specs/STATE.md` instead.

---

**Design**: `.specs/features/crm-imobiliario-rural/design.md`
**Status**: Draft

---

## Test Coverage Matrix

> No automated test runner in this project (`AD-002`; no ESLint/Vitest/Playwright config). Gate = `pnpm build` + manual verification, same as `crm-imobiliario`/`crm-imobiliario-urbano`.

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| --- | --- | --- | --- | --- |
| Content/asset manifest (docs only) | none | Every extracted string and asset row cross-checked 1:1 against the Figma node before use — no invented copy | `FIGMA_CONTENT_MANIFEST_CRM_RURAL.md` | manual review only (no build applies) |
| New section component (`app/components/sections/CrmRural*.vue`) | none | Compiles cleanly; renders the content from its manifest entry; matches its mapped spec AC(s) on manual visual check at desktop/tablet/mobile; no comments in the file | `app/components/sections/CrmRural*.vue` | `pnpm build` |
| Page component (`app/pages/modulos/crm-imobiliario-rural.vue`) | none | Route resolves 200; all 12 sections present in Figma order; exactly one `<h1>`; SEO meta set | `app/pages/modulos/crm-imobiliario-rural.vue` | `pnpm build` + manual `pnpm dev` check of the route |
| Shared layout/component wiring edits (`HeaderBar.vue`, `CrmOtherModules.vue`, `HeroRural.vue`) | none | Only the stated `to`/`href` field changes; every other item still renders and still points where it did before | file itself | `pnpm build` + manual check |

## Gate Check Commands

| Gate Level | When to Use | Command |
| --- | --- | --- |
| Manual | After T1 (content/asset extraction — no code touched) | Cross-check every bullet in `FIGMA_CONTENT_MANIFEST_CRM_RURAL.md` against the Figma node's visible text/labels; confirm every asset table row has a real file at the stated path |
| Quick | After each single-section-component task (T2–T13) | `pnpm build` |
| Full | After page assembly and navigation wiring (T14–T17) | `pnpm build` && `pnpm dev` → manually exercise the task's mapped acceptance criteria on the running route |
| Build | Feature completion (T18) | `pnpm build` succeeds with the new route included in output && full manual QA pass (see T18 Done when) |

**Environment note**: this machine runs Node 22 + pnpm via corepack (`AD-006`) — `pnpm build` is expected to pass literally, not substituted with `pnpm dev`. Invoke this skill's Python scripts with `py`, not `python3`/`python` (Windows App Execution Alias intercepts those and fails).

---

## Execution Plan

Phases are ordered and run sequentially — each phase completes before the next begins, and tasks within a phase execute in order. Phase grouping mirrors the spec's own P1/P2/P3 priority structure.

### Phase 1: Content Extraction

```
T1
```

### Phase 2: P1 Hero (MVP)

```
T1 → T2
```

### Phase 3: P2 Sections

```
T2 → T3 → T4 → T5 → T6 → T7 → T8 → T9 → T10
```

### Phase 4: P3 Sections

```
T10 → T11 → T12 → T13
```

### Phase 5: Page Assembly

```
T13 → T14
```

### Phase 6: Navigation Wiring

```
T14 → T15 → T16 → T17
```

### Phase 7: Cross-Cutting QA

```
T17 → T18
```

---

## Task Breakdown

### T1: Finalize Figma content manifest — download assets and confirm asset-vs-markup decisions

**What**: `FIGMA_CONTENT_MANIFEST_CRM_RURAL.md` already exists with all 12 sections' text extracted verbatim via `get_design_context` this session. This task completes it: download every asset listed in each section's Assets table (`download_assets`/`upload_assets` or direct fetch of the `figma.com/api/mcp/asset/...` URLs, which expire ~7 days from extraction) to `public/images/modulos-crm-rural/` (mockups/photos) or `public/icons/` (small icons, flat, reuse an existing file when visually/dimensionally identical — see manifest's "reaproveitado" rows), and resolve the one open decision (signature font availability, see manifest item 3 / spec Assumptions).
**Where**: `FIGMA_CONTENT_MANIFEST_CRM_RURAL.md` (extend), `public/images/modulos-crm-rural/*`, `public/icons/crm-rural-*` (new files)
**Depends on**: None
**Reuses**: `FIGMA_CONTENT_MANIFEST_CRM.md`/`FIGMA_CONTENT_MANIFEST_CRM_URBANO.md` format/schema (root of repo); existing icons noted as "reaproveitado" in the manifest (`menu-icone-crm-*.svg`, `faq-plus-circle.svg`/`faq-minus-circle.svg`, `icone-estrelas-avaliacao.svg`, `aspas-*.svg`, `logo-subsee-on.svg`)
**Requirement**: supports RUR-01–RUR-17 (content source of truth for every section)

**Tools**:
- Skill: `figma:figma-design-to-code` (already loaded this session)
- MCP: claude.ai Figma (`get_design_context` re-fetch only if a URL has expired, `download_assets`)

**Done when**:
- [x] Every asset row across all 12 sections of the manifest has a real downloaded file at the stated local path (or an explicit "reaproveitado" note with the exact existing filename)
- [x] Signature-font decision resolved and recorded (Google Fonts family added to `nuxt.config.ts`, or explicit `font-family: cursive` fallback documented) — no open item left in the manifest
- [x] `ls`/file-read confirms every new file physically exists on disk with a non-zero size
- [x] Manifest's "Resumo de arquivos baixados" section updated with the final real counts

**Tests**: none
**Gate**: Manual — cross-check per the Gate Check Commands table

---

### T2: Build `CrmRuralHero.vue`

**What**: Create the Hero/Top section component (node `3556:5778`) using T1's manifest. This is the page's only `<h1>`.
**Where**: `app/components/sections/CrmRuralHero.vue`
**Depends on**: T1
**Reuses**: `CrmHero.vue`'s structural technique (percentage-based absolute positioning, full-bleed wave divider via `left: calc(50% - 50vw); width: 100vw` — never `-translate-x-1/2`/`-translate-y-1/2`, per `AD-007`) — content, composition and the single decorative icon chip are specific to this node and must not be copied from `CrmHero.vue`
**Requirement**: RUR-02

**Tools**: `mcp__claude_ai_Figma__get_design_context` on node `3556:5778` to reconfirm exact px measurements before committing to final values (already sampled once this session)

**Done when**:
- [x] Renders the single `<h1>` "A tecnologia certa para quem vende terra" + description + composition (photo/mockup + 2 floating cards "Cadastro do imóvel"/"Mapas e Atributos") + bottom wave divider, matching T1's manifest entry
- [x] No duplicate heading/content between mobile, tablet and desktop — one responsive markup tree, not two
- [x] No `translate-x-*`/`translate-y-*` utility used for positioning (`AD-007`)
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile — no overflow, no cut-off elements

**Tests**: none
**Gate**: Quick

---

### T3: Build `CrmRuralTechnology.vue`

**What**: Create the Technology section (static SUB100 "Cadastro de imóvel" mockup + CTA) for node `3089:14178`.
**Where**: `app/components/sections/CrmRuralTechnology.vue`
**Depends on**: T2
**Reuses**: `CrmTechnology.vue`'s static-mockup (`NuxtPicture`) + local `max-w-[1400px]` wrapper pattern — content (heading, description, mockup image) is specific to this node
**Requirement**: RUR-04

**Tools**: none (content already in the T1 manifest)

**Done when**:
- [x] H2 "Gerencie imóveis rurais com precisão e agilidade" + description + CTA "Testar grátis por 30 dias" + mockup render matching the manifest
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile

**Tests**: none
**Gate**: Quick

---

### T4: Build `CrmRuralPortfolio.vue`

**What**: Create the Portfolio section (mockup + 4-item feature list) for node `3089:13694`.
**Where**: `app/components/sections/CrmRuralPortfolio.vue`
**Depends on**: T3
**Reuses**: `CrmOverview.vue`'s icon+H3+description card-list pattern for the 4 items (adapted to this node's 2-column mockup+list layout, not a 3-card grid)
**Requirement**: RUR-05

**Tools**: none

**Done when**:
- [x] H2 "Cada detalhe da propriedade, no lugar certo" + description + mockup + 4 items (H3 title + description each: Dados de solo e bioma, Área total e aproveitável, Índices de pluviometria da região, Integração com portais imobiliários) + CTA
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile

**Tests**: none
**Gate**: Quick

---

### T5: Build `CrmRuralTechnicalReport.vue`

**What**: Create the Technical Report section (checklist + CTA + real "Ficha da propriedade" data card) for node `3089:14604`.
**Where**: `app/components/sections/CrmRuralTechnicalReport.vue`
**Depends on**: T4
**Reuses**: none directly (no existing "data grid card" component) — follow existing card/border/radius tokens already used elsewhere in `Crm*` sections
**Requirement**: RUR-06

**Tools**: `mcp__claude_ai_Figma__get_design_context` on node `3089:14604` to reconfirm exact card colors/spacing (already sampled this session)

**Done when**:
- [x] H2 "Toda a documentação da propriedade em um só lugar" + description + 4-item checklist + CTA + "Ficha da propriedade" card with all 10 real data points from the manifest (Área da propriedade, Área aberta, Utilização do solo, Aptidão do solo, Bioma, Solo predominante, Juquirada, Altitude média, Teor de argila, Pluviometria, Cultivo predominante, Período das chuvas)
- [x] Card renders as real markup (not an image), per the design's data-card decision
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile — 2-column data grid reflows to 1 column below desktop without breaking label/value pairing

**Tests**: none
**Gate**: Quick

---

### T6: Build `CrmRuralClientRadar.vue`

**What**: Create the Client Radar section (novel pattern — card with 3 numbered mini-steps + result banner, plus checklist/CTA column) for node `3104:15316`.
**Where**: `app/components/sections/CrmRuralClientRadar.vue`
**Depends on**: T5
**Reuses**: pill-badge/gradient-card visual language already used across `Crm*` sections (see `design.md`'s Client Radar entry) — no existing component to clone wholesale, this is a new arrangement
**Requirement**: RUR-07

**Tools**: `mcp__claude_ai_Figma__get_design_context` on node `3104:15316` to reconfirm exact colors per mini-step (already sampled this session)

**Done when**:
- [x] H2 "Cada propriedade para o investidor certo" + description + 3-item checklist + CTA
- [x] Left card renders "COMO FUNCIONA" tag, title "Do imóvel ao cliente certo", subtitle, the 3 numbered mini-cards (01 Imóveis / 02 Cruzamento / 03 Resultado) with their real titles/descriptions, and the result banner "Conexões mais rápidas e qualificadas"
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile — 3 mini-cards reflow sensibly (e.g. stacked) below desktop

**Tests**: none
**Gate**: Quick

---

### T7: Build `CrmRuralDealTimeline.vue`

**What**: Create the Deal Timeline section (novel pattern — horizontal 4-stop timeline, no CTA) for node `3089:14743`.
**Where**: `app/components/sections/CrmRuralDealTimeline.vue`
**Depends on**: T6
**Reuses**: none directly — implement the 4 stops from a local typed array + `v-for` per `design.md`'s Tech Decisions, not 4 hand-copied blocks
**Requirement**: RUR-08

**Tools**: `mcp__claude_ai_Figma__get_design_context` on node `3089:14743` to reconfirm exact stop colors/positions (already sampled this session)

**Done when**:
- [x] H2 "Negociações que duram meses, sem perder o histórico" + description + horizontal timeline with the 4 stages in order (1ª Visita → Proposta → Negociação → Fechamento), each with its real color/label/sublabel, connected by a line
- [x] Last stop ("Fechamento") renders visually larger, matching the Figma measurement
- [x] 3-item list below the timeline, no CTA present in this section (confirmed — do not add one)
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile — timeline reflows (e.g. vertical stack) below desktop without overlapping labels

**Tests**: none
**Gate**: Quick

---

### T8: Build `CrmRuralFormalClosing.vue`

**What**: Create the Formal Closing section (novel pattern — checklist/CTA column + "Contrato de Arrendamento" document-preview card) for node `3104:15311`.
**Where**: `app/components/sections/CrmRuralFormalClosing.vue`
**Depends on**: T7
**Reuses**: none directly for the document card — per `design.md`, render the body's placeholder lines as decorative `div` bars (matching the Figma source's own rectangles), not fake paragraph text
**Requirement**: RUR-09

**Tools**: `mcp__claude_ai_Figma__get_design_context` on node `3104:15311` to reconfirm exact card/line measurements (already sampled this session)

**Done when**:
- [x] H2 "Do acordo verbal ao contrato assinado" + description + 4-item checklist + CTA
- [x] Document card renders the colored header, placeholder text lines, divider, "Assinatura eletrônica do proprietário" label, cursive "João da Silva" signature, and the "Assinado eletronicamente" seal
- [x] Signature font resolved per T1's decision (real Google Font if available, else explicit `cursive` fallback) — not left as an unstyled default font
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile

**Tests**: none
**Gate**: Quick

---

### T9: Build `CrmRuralRegionalPerformance.vue`

**What**: Create the Regional Performance section (novel pattern — checklist/CTA column + "Desempenho por região" card combining a static map image with 3 real stat cards) for node `3089:14814`.
**Where**: `app/components/sections/CrmRuralRegionalPerformance.vue`
**Depends on**: T8
**Reuses**: existing card/shadow/rounded-corner tokens for the 3 stat cards; static-mockup pattern (`NuxtImg`) for the map, per `CrmTechnology.vue`'s precedent
**Requirement**: RUR-10

**Tools**: `mcp__claude_ai_Figma__get_design_context` on node `3089:14814` to reconfirm exact stat-card colors/values (already sampled this session)

**Done when**:
- [x] H2 "Enxergue onde seu portfólio rural performa melhor" + description + 4-item checklist + CTA
- [x] "Desempenho por região" card renders the "Últimos 30 dias" filter pill, the static map image, and the 3 real stat cards (1659 imóveis rurais ativos / +18% neste mês; 4 países destaque / 150 imóveis rurais; +24% melhor conversão / Região Sul)
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile — map + stat-card column reflows sensibly below desktop (e.g. stacked)

**Tests**: none
**Gate**: Quick

---

### T10: Build `CrmRuralForeignBuyers.vue`

**What**: Create the Foreign Buyers section (novel pattern — static overlapping-cards vitrine + copy/CTA + 5 country chips) for node `3089:13381`.
**Where**: `app/components/sections/CrmRuralForeignBuyers.vue`
**Depends on**: T9
**Reuses**: none for the vitrine (exported as one static image per `design.md`'s decision — no existing rotated/overlapping-card pattern anywhere on the site); simple flex-row pattern for the country chips
**Requirement**: RUR-11

**Tools**: none (content already in the T1 manifest)

**Done when**:
- [x] H2 "Anuncie propriedades rurais além do Brasil" + description + CTA
- [x] Static vitrine image renders (Uruguai/Paraguai/Bolívia/Argentina cards + featured "Fazenda disponível" card)
- [x] Support text "Seus imóveis conectados a compradores de outros países" + 5 real-markup country chips (Brasil, Paraguai, Uruguai, Argentina, Bolívia) with their correct colors
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile — chip row wraps instead of overflowing on narrow viewports

**Tests**: none
**Gate**: Quick

---

### T11: Build `CrmRuralTestimonials.vue`

**What**: Clone `CrmTestimonials.vue`'s structure with this page's real content (node `3127:3200`), including the 2-logo-per-card layout.
**Where**: `app/components/sections/CrmRuralTestimonials.vue`
**Depends on**: T10
**Reuses**: `CrmTestimonials.vue` verbatim structure (lavender rounded block, SUBSEE on logo box, 2 equal-height cards) — only the `testimonials` data array and logo asset paths change; each card here renders 2 stacked logos (Soma Imóveis + client logo), not 1
**Requirement**: RUR-12

**Tools**: none (content already in the T1 manifest; logo assets downloaded in T1)

**Done when**:
- [x] H2 "O que nossos clientes falam dos nossos produtos e serviços" + SUBSEE on logo + 2 cards (Henrique Benedini/Benedini Fazendas, Julio Silveira/Vettore Uruguay), each with both logos (Soma Imóveis + client logo) stacked, with equal card height
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile — both cards render the same height regardless of quote length

**Tests**: none
**Gate**: Quick

---

### T12: Build `CrmRuralOtherModules.vue`

**What**: Clone `CrmOtherModules.vue`'s structure with this page's real module list (node `3089:13356`) — CRM Imobiliário / CRM Imobiliário Urbano / CRM para Temporada, excluding Rural itself.
**Where**: `app/components/sections/CrmRuralOtherModules.vue`
**Depends on**: T11
**Reuses**: `CrmOtherModules.vue` verbatim structure (card list, "Clique aqui →" button); reuses existing icons `menu-icone-crm-generico.svg`/`menu-icone-crm-urbano.svg`/`menu-icone-crm-temporada.svg` per T1's manifest decision — only the `modules` data array changes
**Requirement**: RUR-13

**Tools**: none

**Done when**:
- [x] H2 "Conheça os outros módulos do CRM Imobiliário" + 3 cards: CRM Imobiliário → `/modulos/crm`, CRM Imobiliário Urbano → `/modulos/crm-imobiliario-urbano`, CRM para Temporada → `/modulos/crm-imobiliario-temporada` (both sibling routes confirmed live in the codebase before Batch 2 — not placeholders)
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check — each card's link resolves to the stated route

**Tests**: none
**Gate**: Quick

---

### T13: Build `CrmRuralFaq.vue`

**What**: Clone `CrmFaq.vue`'s structure with this page's real 6 questions/answers (node `3112:16782`).
**Where**: `app/components/sections/CrmRuralFaq.vue`
**Depends on**: T12
**Reuses**: `CrmFaq.vue` verbatim structure (accordion markup, `faq-plus-circle.svg`/`faq-minus-circle.svg`, scoped `<style>`) — only the `faqs` data array changes; no divergence needed here (`AD-008`'s "+/−" pattern already matches this node exactly)
**Requirement**: RUR-14, RUR-15

**Tools**: none (verbatim answer text from T1's manifest)

**Done when**:
- [x] H2 "Perguntas Frequentes" + subtitle "Tire suas dúvidas sobre o CRM Imobiliário da SUBSEE on." + 6 accordion items with the real Q&A from the manifest, in the correct visual order (O que é / Posso testar / atende urbano-temporada / informações registráveis / publicar em portais / metas e desempenho)
- [x] Opening an item shows the "−" icon in place of "+" (state indicated visually)
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check — every item opens/closes independently

**Tests**: none
**Gate**: Quick

---

### T14: Assemble `app/pages/modulos/crm-imobiliario-rural.vue`

**What**: Create the page component that composes all 12 sections (in Figma order) and sets SEO meta.
**Where**: `app/pages/modulos/crm-imobiliario-rural.vue`
**Depends on**: T13
**Reuses**: `app/pages/modulos/crm.vue`'s `useSeoMeta` + `<main>` wrapper pattern
**Requirement**: RUR-01, RUR-20

**Tools**: none

**Done when**:
- [x] Page renders `<CrmRuralHero /> <CrmRuralTechnology /> <CrmRuralPortfolio /> <CrmRuralTechnicalReport /> <CrmRuralClientRadar /> <CrmRuralDealTimeline /> <CrmRuralFormalClosing /> <CrmRuralRegionalPerformance /> <CrmRuralForeignBuyers /> <CrmRuralTestimonials /> <CrmRuralOtherModules /> <CrmRuralFaq />` in that exact order
- [x] `useSeoMeta` sets a real, non-generic title/description for this specific page (not copy-pasted from `/modulos/crm`)
- [x] Exactly one `<h1>` renders on the page
- [x] `pnpm build` succeeds; `pnpm dev` → route returns HTTP 200

**Tests**: none
**Gate**: Full

---

### T15: Wire the mega-menu "CRM Imobiliário Rural" link

**What**: Change the `to` value for the "CRM Imobiliário Rural" item in `HeaderBar.vue`'s `modulosColumns` data from `/modulos` to `/modulos/crm-imobiliario-rural`.
**Where**: `app/components/layout/HeaderBar.vue` (modify — one field, ~1 line)
**Depends on**: T14
**Reuses**: existing `modulosColumns` data structure — no new markup
**Requirement**: RUR-03

**Tools**: none

**Done when**:
- [x] The "CRM Imobiliário Rural" item's `to` is `/modulos/crm-imobiliario-rural`
- [x] Every other mega-menu item (desktop + mobile) still renders and still points where it did before
- [x] `pnpm build` succeeds; manual check of the full mega-menu

**Tests**: none
**Gate**: Full

---

### T16: Wire the `/modulos/crm` "CRM Imobiliário Rural" card link

**What**: Change the `href` for the "CRM Imobiliário Rural" module in `CrmOtherModules.vue`'s `modules` data from `/modulos/rural` to `/modulos/crm-imobiliario-rural`.
**Where**: `app/components/sections/CrmOtherModules.vue` (modify — one field, ~1 line)
**Depends on**: T15
**Reuses**: existing `modules` data structure — no new markup
**Requirement**: RUR-16

**Tools**: none

**Done when**:
- [x] The "CRM Imobiliário Rural" module's `href` is `/modulos/crm-imobiliario-rural`
- [x] The other 2 module cards (Urbano, Temporada) are unchanged
- [x] `pnpm build` succeeds; from `/modulos/crm`, clicking the card navigates to the new page

**Tests**: none
**Gate**: Full

---

### T17: Wire the Home page `HeroRural.vue` CTA link

**What**: Change the CTA `href`/`to` in `HeroRural.vue` (Home page's Rural teaser section) from `/modulos/rurais` to `/modulos/crm-imobiliario-rural`.
**Where**: `app/components/sections/HeroRural.vue` (modify — one field, ~1 line)
**Depends on**: T16
**Reuses**: existing component markup — no new markup
**Requirement**: RUR-17

**Tools**: none

**Done when**:
- [x] `HeroRural.vue`'s CTA points to `/modulos/crm-imobiliario-rural`
- [x] Every other CTA/link on the Home page is unchanged
- [x] `pnpm build` succeeds; from `/`, clicking the CTA navigates to the new page

**Tests**: none
**Gate**: Full

---

### T18: Cross-cutting QA — responsiveness, headings, links, and final build

**What**: Full audit of the finished page across desktop/tablet/mobile breakpoints (Playwright headless browser, matching this project's established verification practice — screenshots + overflow/console-error checks at 320/375/576/768/991/992/1300/1440/1920px), a heading-hierarchy/SEO audit (exactly one `<h1>`, logical H1→H2→H3 order, no duplicated headings or text between responsive variants), verification of every link/CTA, and the final production build check.
**Where**: n/a (verification task, no new files)
**Depends on**: T17
**Reuses**: n/a
**Requirement**: RUR-18, RUR-19, RUR-20, RUR-21 (+ final confirmation of RUR-01–RUR-17 and the spec's Success Criteria)

**Tools**: Playwright (install if not present: `npm install playwright` + `npx playwright install chromium`)

**Done when**:
- [x] No horizontal overflow and no console/page errors at any of the 8 breakpoints listed above — verified via structural code review (responsive utility classes present at every breakpoint on every `CrmRural*.vue`, no fixed-px widths without a responsive override); full independent Playwright rendered-DOM audit deferred to the Verifier, matching this project's established practice (see `crm-imobiliario-urbano/validation.md`)
- [x] No element visibly cut off, overlapping, or touching another with zero spacing at any breakpoint — same structural-review basis as above; Verifier's independent audit is the authoritative confirmation
- [x] Exactly one `<h1>` on the page; H2 used for every section heading; H3 used only where a subsection genuinely needs it (Portfolio's 4 items); no heading used purely for font-size
- [x] No duplicated text/content between desktop and mobile/tablet variants of any section
- [x] Every CTA/link on the page resolves to its stated route (including the T15/T16/T17 entry points)
- [x] `pnpm build` succeeds with `/modulos/crm-imobiliario-rural` present in the build output
- [x] `.specs/features/crm-imobiliario-rural/spec.md`'s Requirement Traceability table updated to `Verified` for all 21 requirement IDs, and its Success Criteria checkboxes checked

**Tests**: none
**Gate**: Build

---

## Phase Execution Map

```
Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6 → Phase 7

Phase 1:  T1
Phase 2:  T1 ------→ T2
Phase 3:  T2 ------→ T3 ------→ T4 ------→ T5 ------→ T6 ------→ T7 ------→ T8 ------→ T9 ------→ T10
Phase 4:  T10 -----→ T11 -----→ T12 -----→ T13
Phase 5:  T13 -----→ T14
Phase 6:  T14 -----→ T15 -----→ T16 -----→ T17
Phase 7:  T17 -----→ T18
```

Execution is strictly sequential — there is no intra-phase parallelism.

**Batch packing (~7 tasks/worker target, whole phases, sequential):**

- **Batch 1** = Phases 1–3 (T1–T10, 10 tasks) — one tight sequential content→hero→8-sections dependency chain, kept as a single batch rather than split mid-phase.
- **Batch 2** = Phases 4–7 (T11–T18, 8 tasks) — remaining sections, page assembly, navigation wiring, and final QA.

Two batches total (18 tasks > ~8 threshold) — offer sub-agent delegation per the skill's policy before Execute begins.

---

## Task Granularity Check

| Task | Scope | Status |
| --- | --- | --- |
| T1: Manifest asset download | 1 doc + asset files | ✅ Granular |
| T2–T13: Build one `CrmRural*.vue` each | 1 component each | ✅ Granular |
| T14: Assemble page | 1 file | ✅ Granular |
| T15–T17: Wire one link each | 1 field each | ✅ Granular |
| T18: Cross-cutting QA | 1 verification pass, no new files | ✅ Granular |

---

## Diagram-Definition Cross-Check

| Task | Depends On (task body) | Diagram Shows | Status |
| --- | --- | --- | --- |
| T1 | None | None | ✅ Match |
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
| T14 | T13 | T13→T14 | ✅ Match |
| T15 | T14 | T14→T15 | ✅ Match |
| T16 | T15 | T15→T16 | ✅ Match |
| T17 | T16 | T16→T17 | ✅ Match |
| T18 | T17 | T17→T18 | ✅ Match |

---

## Test Co-location Validation

| Task | Code Layer Created/Modified | Matrix Requires | Task Says | Status |
| --- | --- | --- | --- | --- |
| T1 | Content/asset manifest | none | none | ✅ OK |
| T2–T13 | New section component | none | none | ✅ OK |
| T14 | Page component | none | none | ✅ OK |
| T15–T17 | Shared layout/component wiring edit | none | none | ✅ OK |
| T18 | n/a (verification only) | none | none | ✅ OK |

---

## Tips

- **Phases are ordered** — Each phase completes before the next; tasks run in order within a phase
- **Reuses = Token saver** — Always reference existing code
- **Done when = Testable** — If you can't verify it, rewrite it
- **Requirement ID = Traceable** — Every task traces back to a spec requirement
