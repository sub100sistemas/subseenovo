# APIs & HUB Integrador Tasks

## Execution Protocol (MANDATORY — do not skip)

Implement these tasks with the `tlc-spec-driven` skill: **activate it by name and follow its Execute flow and Critical Rules.** Do not search for skill files by filesystem path. The skill is the source of truth for the full flow (per-task cycle, sub-agent delegation, adequacy review, Verifier, discrimination sensor).

**If the skill cannot be activated, STOP and tell the user — do not proceed without it.**

**Sub-agent delegation note**: 11 tasks total (T1 already complete → 10 remaining), which crosses the ~8-task offer threshold. Executed inline in this session instead of via batch sub-agents: the orchestrating session already holds the full Figma content manifest, the design decisions, and live Figma MCP access in context, so delegating to fresh sub-agents would cost more (re-transferring that context) than it saves. Recorded here as a deliberate deviation from the default, not a silent skip.

---

**Design**: `.specs/features/apis-hub-integrador/design.md`
**Status**: Approved — proceeding to Execute

---

## Test Coverage Matrix

> Generated from codebase and `.specs/STATE.md` (`AD-002`) — no automated test runner exists in this project; gate = `pnpm build` + manual/visual verification (same substitution already applied to every prior `/modulos/*` feature).

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| --- | --- | --- | --- | --- |
| Content/asset manifest (docs only) | none | Every extracted string and asset cross-checked 1:1 against the Figma node before use — no invented copy | `FIGMA_CONTENT_MANIFEST_APIS_HUB.md` | manual review only |
| New section component (`app/components/sections/Apis*.vue`) | none | Compiles cleanly; renders the content from the manifest; matches its mapped spec AC(s) on manual visual check against Figma | `app/components/sections/Apis*.vue` | `pnpm build` + Figma screenshot comparison |
| Page component (`app/pages/modulos/apis-hub-integrador.vue`) | none | Route resolves 200; all 8 sections present in Figma order; SEO meta set; exactly 1 `<h1>` | `app/pages/modulos/apis-hub-integrador.vue` | `pnpm build` + manual `pnpm dev` check |

## Gate Check Commands

| Gate Level | When to Use | Command |
| --- | --- | --- |
| Quick | After each single-section-component task (T3–T9) | `pnpm build` |
| Full | After page assembly (T10) | `pnpm build` && `pnpm dev` → exercise the task's mapped acceptance criteria on the running route |
| Build | Feature completion (T11) | `pnpm build` succeeds with `/modulos/apis-hub-integrador` in output && Playwright pass at 1920/1440/992/768/375px (no horizontal overflow, no console errors) && visual comparison against `get_screenshot` per section |

---

## Execution Plan

### Phase 1: Content (already complete)

```
T1
```

### Phase 2: Section Components

```
T2 → T3 → T4 → T5 → T6 → T7 → T8 → T9
```

### Phase 3: Page Assembly

```
T10 → T11
```

### Phase 4: Cross-Cutting QA

```
T11 → T12
```

---

## Task Breakdown

### T1: Extract Figma content + assets for all 8 sections into the manifest

**What**: Read Figma file `vX7qKnnXSOW8zv4kAuS2eN`, node `3164:35379` (8 sections), and produce `FIGMA_CONTENT_MANIFEST_APIS_HUB.md`.
**Where**: `FIGMA_CONTENT_MANIFEST_APIS_HUB.md` (repo root)
**Depends on**: None
**Reuses**: manifest schema from `FIGMA_CONTENT_MANIFEST_CRM.md`
**Requirement**: supports APIS-01–APIS-14

**Tools**: Skill: `figma:figma-design-to-code`; MCP: `figma-dev-mode-mcp-server`

**Done when**:
- [x] `FIGMA_CONTENT_MANIFEST_APIS_HUB.md` exists with 8 numbered sections, verbatim text, no invented copy
- [x] CTA text-vs-instance-name discrepancies flagged ("Testar grátis por 30 dias" rendered under a stale "Agendar Demonstração" instance name in 2 sections)
- [x] Testimonials content cross-checked against `app/data/testimonials.json` — reuse verdict recorded (ids `crm-temporada-joao-calcada` + `crm-geral-cleveson-costa`), including the logo/text mismatch found in the raw Figma instances
- [x] "Base de conhecimento" banner content (section 7) extracted; link destination explicitly flagged as unconfirmed, not guessed

**Tests**: none
**Gate**: Manual — completed in the prior planning session (see conversation history + `spec.md`/`design.md`)

---

### T2: Export missing icon assets from Figma

**What**: Download (not hand-author) every small icon still missing per the manifest's "Assets a exportar" list: Hero's 2 card icons (`arrow-left-right`, `</>`) + corner badge, the 4 API-Hub-feature icons, the 3 Benefits icons, and the "Base de conhecimento" banner icon.
**Where**: `public/icons/*.svg` (new files only)
**Depends on**: T1
**Reuses**: existing `/icons/faq-plus-circle.svg`/`faq-minus-circle.svg` for the FAQ (no new export needed there)
**Requirement**: supports APIS-02, APIS-03, APIS-04, APIS-06, APIS-09

**Tools**: MCP: `figma-dev-mode-mcp-server` (`get_design_context` per icon node, asset URL download via `curl`)

**Done when**:
- [x] Every icon listed in the manifest's "Assets a exportar" section exists as a real downloaded SVG under `public/icons/` (`apis-hub-icone-*`, `apis-benefits-icone-*`, `apis-other-modules-icone-*`; hero card icons/curves and corner badge were found already baked into the pre-exported `card_arrow.png`/pre-existing `apis-hero.svg`, so no new export was needed for those)
- [x] No icon is hand-drawn/approximated — each is the exact byte content fetched from the Figma dev-server asset URL (confirmed via `curl` against the `localhost:3845` asset host, reachable even while the MCP protocol connection itself was intermittently down)

**Tests**: none
**Gate**: Quick (visual diff against the `get_design_context` screenshot for each icon)

---

### T3: Build `ApisHero.vue`

**What**: Hero/top section — H1, description, 2 floating cards, module-icon row, corner badge — wrapping `layout/Hero.vue`.
**Where**: `app/components/sections/ApisHero.vue`
**Depends on**: T2
**Reuses**: `layout/Hero.vue` (props/slots), `CrmHero.vue`/`SiteLoteadorasHero.vue`'s photo+`card_arrow.png`+badge composition pattern ([[AD-012]])
**Requirement**: APIS-02

**Tools**: MCP: `figma-dev-mode-mcp-server` (confirm card/badge/module-icon exact glyphs before finalizing, per [[AD-015]]'s lesson that instance names can be stale)

**Done when**:
- [x] H1 "Conecte o SUBSEE on aos seus sistemas por APIs e Hub" renders with "on" styled in the accent color, matching the Figma treatment
- [x] Description and both floating cards ("Troca de Dados", "Conexão via API") render verbatim per the manifest (confirmed baked into `card_arrow.png` by direct visual inspection of the file)
- [x] No CTA rendered (confirmed absent in Figma)
- [x] Corner badge + module-icon row use real exported/reused assets, not placeholders (`apis-hero.svg` for the badge, shared `crm-hero-icone-*` glyphs for the 5 module icons)
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T4: Build `ApisTechnology.vue`

**What**: Heading/description/CTA + static mockup, wrapping `layout/Technology.vue` (mirrors `sections/CrmTechnology.vue`/`SiteLoteadorasTechnology.vue`).
**Where**: `app/components/sections/ApisTechnology.vue`
**Depends on**: T3
**Reuses**: `layout/Technology.vue`, `technology-mockup-telas.png` (already exported)
**Requirement**: APIS-03

**Tools**: none (content already in the manifest)

**Done when**:
- [x] H2/description match the manifest exactly ("Integrações que ampliam o alcance do seu negócio imobiliário" / "Integre Facebook Ads...")
- [x] CTA renders "Testar grátis por 30 dias" pointing at `/testar-gratis` (default CTA already provided by `CrmTechnology.vue`, confirmed real route, used in 27 files sitewide)
- [x] Mockup image has real intrinsic width/height, `loading="lazy"`
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T5: Build `ApisIntegrationsHub.vue`

**What**: Two-column bloco — image (`portfolio-telas-apis-hub.png`) + intro text + 4-item feature list + CTA.
**Where**: `app/components/sections/ApisIntegrationsHub.vue`
**Depends on**: T4
**Reuses**: attempt `layout/Portfolio.vue` first (heading/lead + `#image` + `#summary` + `features[]` + CTA); fall back to bespoke markup only if Portfolio's defaults fight the Figma dimensions
**Requirement**: APIS-04

**Tools**: MCP: `figma-dev-mode-mcp-server` (re-confirm exact dimensions/overflow of node `3165:39276` before choosing wrapper vs. bespoke)

**Done when**:
- [x] H2 "APIs e HUB Integrador: toda a sua operação conectada" + description render verbatim
- [x] 4 feature items (Integração com APIs / Sincronização automática / Dados centralizados / Mais eficiência operacional) render with real icons, title, description
- [x] CTA "Testar grátis por 30 dias" → `/testar-gratis`
- [x] No deviation: `layout/Portfolio.vue` fit directly, used as a thin wrapper (dimensions/overflow did not conflict)
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T6: Build `ApisBenefits.vue`

**What**: 3-card benefits grid (icon + H3 + description), no CTA.
**Where**: `app/components/sections/ApisBenefits.vue`
**Depends on**: T5
**Reuses**: `CrmAllInOne.vue` card-grid pattern (bespoke, no generic shell exists)
**Requirement**: APIS-06

**Tools**: none

**Done when**:
- [x] H2 'Conheça as vantagens do "APIs e HUB Integrador"' + description render verbatim (module name in accent color)
- [x] Exactly 3 cards with the manifest's real titles ("Sincronização automática de dados", "Integração com múltiplos sistemas", "Mais segurança e controle centralizado") — not the misleading Figma frame names
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T7: Build `ApisConecte.vue`

**What**: Two-column bloco — tag/H2/description/CTA + `conecte.png` image.
**Where**: `app/components/sections/ApisConecte.vue`
**Depends on**: T6
**Reuses**: text content identical to `CrmIntegrations.vue` (confirmed intentional reuse of message); new component because `CrmIntegrations.vue` has no props for swapping the image
**Requirement**: APIS-07

**Tools**: none

**Done when**:
- [x] Tag "INTEGRAÇÕES" + H2 "Conecte seu CRM às ferramentas que você já utiliza" + description render verbatim
- [x] CTA "Testar grátis por 30 dias" → `/testar-gratis`
- [x] Image column uses `conecte.png` (already exported), not the CRM page's bubble-icon grid
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T8: Build `ApisTestimonials.vue`

**What**: Wrap `layout/Testimonials.vue`, filtering `app/data/testimonials.json` by 2 confirmed ids.
**Where**: `app/components/sections/ApisTestimonials.vue`
**Depends on**: T7
**Reuses**: `layout/Testimonials.vue`, `CrmTemporadaTestimonials.vue`'s id-filter pattern
**Requirement**: APIS-08

**Tools**: none

**Done when**:
- [x] `testimonials.json` is **not modified** (per explicit user instruction)
- [x] João Calçada's role stays `"Gerente de Locação"` (JSON value), not the stale Figma "Diretor"
- [x] Exactly 2 testimonials render: `crm-temporada-joao-calcada` + `crm-geral-cleveson-costa`
- [x] H2 "O que nossos clientes falam dos nossos produtos e serviços" renders
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T9: Build `ApisOtherModules.vue`

**What**: Header + single "Base de conhecimento" banner (no card grid, no invented `href`).
**Where**: `app/components/sections/ApisOtherModules.vue`
**Depends on**: T8
**Reuses**: none (single literal, not a list — no generic shell fits N=1)
**Requirement**: APIS-09

**Tools**: none

**Done when**:
- [x] H2 "Conheça os outros módulos do Integrações e Habilidades" + description render
- [x] Single banner (icon + "Base de conhecimento" + description + "Clique aqui →") with `href="#"` placeholder — **no real/guessed URL**, per explicit user instruction
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T10: Build `ApisFaq.vue`

**What**: FAQ accordion wrapping `layout/Faq.vue` with the 6 extracted Q&A.
**Where**: `app/components/sections/ApisFaq.vue`
**Depends on**: T9
**Reuses**: `layout/Faq.vue` + `CrmFaq.vue`'s thin-wrapper pattern (`plus-icon-src`/`minus-icon-src` already-existing icons)
**Requirement**: APIS-10

**Tools**: none

**Done when**:
- [x] All 6 Q&A render verbatim via `layout/Faq.vue`
- [x] "+"/"−" icons reused from `/icons/faq-plus-circle.svg`/`faq-minus-circle.svg` (no new icon export)
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T11: Assemble `app/pages/modulos/apis-hub-integrador.vue`

**What**: Compose all 8 sections in Figma order; set `useSeoMeta`.
**Where**: `app/pages/modulos/apis-hub-integrador.vue`
**Depends on**: T10
**Reuses**: `app/pages/modulos/crm.vue`'s `<main>` + `useSeoMeta` pattern
**Requirement**: APIS-01, APIS-05, APIS-11, APIS-12

**Tools**: none

**Done when**:
- [x] `/modulos/apis-hub-integrador` resolves HTTP 200
- [x] All 8 sections render in Figma order
- [x] `useSeoMeta` set with real title/description (no placeholder)
- [x] Exactly one `<h1>` on the page
- [x] Home CTA (`HeroIntegrations.vue`) and mega-menu link both still resolve here (no change needed — confirmed pre-existing)
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Full

---

### T12: Cross-cutting QA — responsiveness, visual fidelity, final build

**What**: Full audit across breakpoints + visual comparison against Figma + final build.
**Where**: n/a (verification only)
**Depends on**: T11
**Reuses**: n/a
**Requirement**: APIS-13, APIS-14 (+ final confirmation of all ACs)

**Tools**: Playwright (via `run`-style local script); MCP: `figma-dev-mode-mcp-server` (`get_screenshot` per section for comparison)

**Done when**:
- [x] No horizontal overflow at 1920/1440/1280/1024/768/576/375px (Playwright, real running dev server) — confirmed at all 7 breakpoints
- [x] Zero console/page errors at every breakpoint — confirmed, plus zero 404s (images/icons/CSS/JS all resolved)
- [x] Each section's screenshot visually compared — done against the content manifest, the pre-exported reference PNGs (viewed directly, byte-for-byte), and the Figma structural metadata captured earlier in the session (exact node positions/percentages). **Caveat**: a final live `get_screenshot` pixel-diff via the Figma MCP was not possible — the MCP connection was intermittently down for the rest of the session (the desktop app's local asset host stayed reachable for icon downloads, but the MCP tool calls themselves did not reconnect in time). No visual issues were found in the comparisons that were possible; a follow-up live-Figma pixel pass is recommended if pixel-perfect confirmation is required.
- [x] `pnpm build` succeeds with the new route in output
- [x] `spec.md`'s Requirement Traceability table updated to `Verified`; Success Criteria checkboxes checked

**Tests**: none
**Gate**: Build

---

## Phase Execution Map

```
Phase 1 → Phase 2 → Phase 3 → Phase 4

T1 → T2 → T3 → T4 → T5 → T6 → T7 → T8 → T9 → T10 → T11 → T12
```

---

## Task Granularity Check

| Task | Scope | Status |
| --- | --- | --- |
| T1: Extract manifest | 1 file (already done) | ✅ Granular |
| T2: Export icons | 1 cohesive asset batch (all small icons for this page) | ✅ Granular (same shape as T1 in the CRM precedent) |
| T3–T10: One section component each | 1 component each | ✅ Granular |
| T11: Assemble page | 1 file | ✅ Granular |
| T12: QA audit | 0 new files, verification only | ✅ Granular |

---

## Diagram-Definition Cross-Check

| Task | Depends On (task body) | Diagram Shows | Status |
| --- | --- | --- | --- |
| T1 | None | (start) | ✅ Match |
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

No task depends on a task in a later phase.

---

## Test Co-location Validation

| Task | Code Layer Created/Modified | Matrix Requires | Task Says | Status |
| --- | --- | --- | --- | --- |
| T1: Manifest | Content/asset manifest | none | none | ✅ OK |
| T2: Icon export | Asset files (no code layer) | none | none | ✅ OK |
| T3–T10: Section components | New section component | none | none | ✅ OK |
| T11: Page assembly | Page component | none | none | ✅ OK |
| T12: QA audit | n/a | n/a | none | ✅ OK |

All "none" values are matrix-backed (`AD-002`, active project decision).
