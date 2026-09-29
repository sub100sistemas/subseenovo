# Base de Conhecimento Tasks

## Execution Protocol (MANDATORY — do not skip)

Implement these tasks with the `tlc-spec-driven` skill: **activate it by name and follow its Execute flow and Critical Rules.** Do not search for skill files by filesystem path. The skill is the source of truth for the full flow (per-task cycle, sub-agent delegation, adequacy review, Verifier, discrimination sensor).

**If the skill cannot be activated, STOP and tell the user — do not proceed without it.**

**Sub-agent delegation note**: 12 tasks total (T1 already complete → 11 remaining), which crosses the ~8-task offer threshold. When Execute is authorized, the orchestrating agent MUST present the batch sub-agent offer before dispatching (per the skill's Sub-Agent Delegation rules) rather than assuming inline execution — this differs from a silent default and is called out here so a future session doesn't skip the offer.

**Tool confirmation note**: per the skill's Tasks step 6, "which tools should I use per task" is normally asked right before Execute starts. Recommended tools are already filled in below (Figma MCP + `figma:figma-design-to-code` skill for asset-facing tasks, none for content-only tasks) based on the same pattern already used in `apis-hub-integrador`'s tasks.md — reconfirm with the user at the start of Execute rather than treating this as a standing approval to invoke MCPs now.

---

**Design**: `.specs/features/base-de-conhecimento/design.md`
**Status**: Draft — awaiting user approval before Execute

---

## Test Coverage Matrix

> Generated from codebase and `.specs/STATE.md` (`AD-002`) — no automated test runner exists in this project; gate = `pnpm build` + manual/visual verification (same substitution already applied to every prior `/modulos/*` feature, most recently `apis-hub-integrador`).

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| --- | --- | --- | --- | --- |
| Content/asset manifest (docs only) | none | Every extracted string and asset cross-checked 1:1 against the Figma node before use — no invented copy | `FIGMA_CONTENT_MANIFEST_BASE_CONHECIMENTO.md` | manual review only |
| New/exported assets (`public/icons/*.svg`, `public/images/modulos-base-de-conhecimento/*`) | none | Every asset is the exact byte content downloaded from the Figma asset URL, not hand-drawn/approximated | `public/icons/base-conhecimento-*.svg`, `public/images/modulos-base-de-conhecimento/*` | visual diff against `get_design_context`/`get_screenshot` |
| New section component (`app/components/sections/BaseConhecimento*.vue`) | none | Compiles cleanly; renders the content from the manifest; matches its mapped spec AC(s) on manual visual check against Figma | `app/components/sections/BaseConhecimento*.vue` | `pnpm build` + Figma screenshot comparison |
| Page component (`app/pages/modulos/base-de-conhecimento.vue`) | none | Route resolves 200; all 8 sections present in Figma order; SEO meta set; exactly 1 `<h1>` | `app/pages/modulos/base-de-conhecimento.vue` | `pnpm build` + manual `pnpm dev` check |

## Gate Check Commands

| Gate Level | When to Use | Command |
| --- | --- | --- |
| Quick | After each single-section-component task (T3–T10) | `pnpm build` |
| Full | After page assembly (T11) | `pnpm build` && `pnpm dev` → exercise the task's mapped acceptance criteria on the running route |
| Build | Feature completion (T12) | `pnpm build` succeeds with `/modulos/base-de-conhecimento` in output && Playwright pass at 1920/1440/1280/1024/768/576/375px (no horizontal overflow, no console errors, no 404s) && visual comparison against `get_screenshot` per section |

---

## Execution Plan

Phases are ordered and run sequentially — each phase completes before the next begins, and tasks within a phase execute in order.

### Phase 1: Content & Assets

```
T1 → T2
```

### Phase 2: Section Components

```
T3 → T4 → T5 → T6 → T7 → T8 → T9 → T10
```

### Phase 3: Page Assembly

```
T11
```

### Phase 4: Cross-Cutting QA

```
T12
```

---

## Task Breakdown

### T1: Extract Figma content into the manifest (already complete)

**What**: Read Figma file `vX7qKnnXSOW8zv4kAuS2eN`, node `3164:37761` (8 sections), and produce `FIGMA_CONTENT_MANIFEST_BASE_CONHECIMENTO.md`.
**Where**: `FIGMA_CONTENT_MANIFEST_BASE_CONHECIMENTO.md` (repo root)
**Depends on**: None
**Reuses**: manifest schema from `FIGMA_CONTENT_MANIFEST_APIS_HUB.md`
**Requirement**: supports BC-01–BC-14

**Tools**:
- MCP: `figma` (`get_design_context`/`get_metadata`)
- Skill: `figma:figma-design-to-code`

**Done when**:
- [x] `FIGMA_CONTENT_MANIFEST_BASE_CONHECIMENTO.md` exists with 8 numbered sections, verbatim text, no invented copy
- [x] The 4 already-existing image assets (`hero-visual.png`, `card_arrow.png`, `technology-mockup.png`, `portfolio-telas-base-conhecimento.png`) are cross-checked by direct visual inspection against their matching Figma node — confirmed, not assumed
- [x] Testimonials content cross-checked against `app/data/testimonials.json` on the actual Figma instances (not just layer names, per `AD-015`'s lesson) — no logo/text mismatch found this time
- [x] Every still-missing asset (badge icon, 4 Training icons, 3 Publishing icons, devices-composition image, Other Modules banner icon) explicitly listed as pending, not guessed

**Tests**: none
**Gate**: Manual — completed in the prior planning session (see `spec.md`/`design.md`)

---

### T2: Export missing icon/image assets from Figma

**What**: Download (not hand-author) every asset still missing per the manifest's asset summary table: Hero's corner badge icon, the 4 Training/Coluna-02 feature icons, the 3 Publishing/Vantagens card icons (team/training/satisfaction), the Content/Other section's tag icon ("award") and trust-indicator icon ("shield-check"), and the "devices-composition" image (laptop + mobile mockup). Also confirm whether `/icons/menu-icone-apis-hub.svg` visually matches the Other Modules banner icon (node `3164:38611`) before deciding to export a dedicated one.
**Where**: `public/icons/*.svg` (new files only), `public/images/modulos-base-de-conhecimento/*` (new image only)
**Depends on**: T1
**Reuses**: existing `/icons/faq-plus-circle.svg`/`faq-minus-circle.svg` (FAQ, no export needed), existing `/icons/crm-hero-icone-*.svg` (Hero module-icon row, no export needed), existing `hero-visual.png`/`card_arrow.png`/`technology-mockup.png`/`portfolio-telas-base-conhecimento.png` (no export needed)
**Requirement**: supports BC-02, BC-03, BC-04, BC-06, BC-07, BC-09

**Tools**:
- MCP: `figma` (`get_design_context` per icon/image node, asset URL download)
- Skill: `figma:figma-design-to-code`

**Done when**:
- [x] Every icon listed above exists as a real downloaded SVG under `public/icons/` (`base-conhecimento-icone-badge.svg`, `-suporte.svg`, `-treinamentos-video.svg`, `-manuais.svg`, `-eventos.svg`, `-team.svg`, `-training.svg`, `-satisfaction.svg`, `-award.svg`, `-shield-check.svg`)
- [x] The "devices-composition" image is exported and saved at `public/images/modulos-base-de-conhecimento/devices-composition.png` (1552×960 @2x, matches the manifest's laptop+mobile mockup description by direct visual inspection)
- [x] The Other Modules banner icon decision: **reuse `/icons/menu-icone-apis-hub.svg`** — confirmed via a live `get_screenshot` of node `3164:38611`, the rendered glyph is the identical 3-circle/2-line "share" icon already used by that file; no new export needed
- [x] No icon/image is hand-drawn/approximated — each is the exact byte content fetched from the Figma asset URL

**Tests**: none
**Gate**: Quick (visual diff against the `get_design_context`/`get_screenshot` output for each asset) — passed, see Done when above

---

### T3: Build `BaseConhecimentoHero.vue` ✅

**What**: Hero/top section — H1, description, 2 floating cards (baked into `card_arrow.png`), module-icon row, corner badge — wrapping `layout/Hero.vue`.
**Where**: `app/components/sections/BaseConhecimentoHero.vue`
**Depends on**: T2
**Reuses**: `layout/Hero.vue` (props/slots), `ApisHero.vue`/`CrmHero.vue`'s photo+`card_arrow.png`+badge composition pattern ([[AD-012]]), shared `/icons/crm-hero-icone-*.svg` module-icon row
**Requirement**: BC-02

**Tools**:
- MCP: `figma` (re-confirm the corner badge glyph before finalizing, per `AD-015`'s lesson that instance names can be stale)
- Skill: NONE

**Done when**:
- [x] H1 "Central de Ajuda, Tutoriais e Documentação do SUBSEE on" renders with "on" styled in the accent color
- [x] Description and both floating cards ("Acesso Online", "Equipe treinada") render via `card_arrow.png` (already exported)
- [x] No CTA rendered (confirmed absent in Figma)
- [x] Corner badge uses the real exported icon from T2 (`base-conhecimento-icone-badge.svg`), not a placeholder
- [x] Module-icon row reuses the existing shared `/icons/crm-hero-icone-*.svg` files (no new assets)
- [x] `pnpm build` passes (full build ran clean — 2m4s)

**Tests**: none
**Gate**: Quick — passed

---

### T4: Build `BaseConhecimentoTechnology.vue` ✅

**What**: Heading/description/CTA + static mockup, wrapping `layout/Technology.vue` via `sections/CrmTechnology.vue` (mirrors `ApisTechnology.vue`).
**Where**: `app/components/sections/BaseConhecimentoTechnology.vue`
**Depends on**: T3
**Reuses**: `sections/CrmTechnology.vue`, `layout/Technology.vue`, `technology-mockup.png` (already exported)
**Requirement**: BC-03

**Tools**: NONE (content already in the manifest)

**Done when**:
- [x] H2/description match the manifest exactly ("Aprenda a usar o sistema com tutoriais e treinamentos" / manual description, "Base de conhecimento" in bold)
- [x] CTA renders "Testar grátis por 30 dias" pointing at `/testar-gratis` (via `CrmTechnology.vue`'s default `#cta` slot)
- [x] Mockup image has real intrinsic width/height (2200×1292), `loading="lazy"`
- [x] `pnpm build` passes (shared build run with T5–T10, see T10 note)

**Tests**: none
**Gate**: Quick — passed

---

### T5: Build `BaseConhecimentoTraining.vue` ✅

**What**: Two-column bloco — heading/description (panel level) + image (`portfolio-telas-base-conhecimento.png`) + secondary description + 4-item feature list + CTA, wrapping `layout/Portfolio.vue` directly.
**Where**: `app/components/sections/BaseConhecimentoTraining.vue`
**Depends on**: T4
**Reuses**: `layout/Portfolio.vue` (heading/lead + `#image` + `#summary` + `features[]` + CTA), same direct-wrap pattern as `ApisIntegrationsHub.vue`
**Requirement**: BC-04

**Tools**:
- MCP: `figma` (confirm the 4 feature-item icon glyphs individually before finalizing, per `AD-015`)
- Skill: NONE

**Done when**:
- [x] H2 "Como treinar sua equipe para usar o SUBSEE on" + description render verbatim at the panel level
- [x] Image column uses `portfolio-telas-base-conhecimento.png` (already exported)
- [x] Secondary description + 4 feature items (Suporte e implantação humanizada / Treinamentos em vídeo / Manuais e materiais de apoio / Eventos online) render with real icons from T2, title, description
- [x] CTA "Testar grátis por 30 dias" → `/testar-gratis`
- [x] No deviation: `layout/Portfolio.vue` fit directly, used as a thin wrapper (no bespoke fallback needed)
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick — passed

---

### T6: Build `BaseConhecimentoPublishing.vue` ✅

**What**: 3-card "Vantagens" grid (icon + H3 + description), no CTA.
**Where**: `app/components/sections/BaseConhecimentoPublishing.vue`
**Depends on**: T5
**Reuses**: `ApisBenefits.vue`/`CrmAllInOne.vue` card-grid pattern (bespoke, no generic shell exists)
**Requirement**: BC-06

**Tools**: NONE

**Done when**:
- [x] H2 'Vantagens que a "Base de Conhecimento" oferece' + description render verbatim (module name in accent color)
- [x] Exactly 3 cards with the manifest's real titles ("Maior engajamento das equipes", "Melhorar o treinamento de novos colaboradores", "Aumenta a satisfação dos clientes") using the team/training/satisfaction icons from T2
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick — passed

---

### T7: Build `BaseConhecimentoOther.vue` ✅

**What**: Two-column bloco — tag (icon+text)/H2/description/trust-indicator/CTA + "devices-composition" image.
**Where**: `app/components/sections/BaseConhecimentoOther.vue`
**Depends on**: T6
**Reuses**: same structural pattern as `ApisConecte.vue`, extended with a trust-indicator line (icon + text) between the description and the CTA
**Requirement**: BC-07

**Tools**: NONE

**Done when**:
- [x] Tag "base de conhecimento" (icon + uppercase text) + H2 "Toda a informação que sua equipe precisa, em um só lugar." + 2-line description render verbatim
- [x] Trust-indicator line ("Sem compromisso. Teste gratuito por 30 dias para toda a equipe.") renders with its icon from T2
- [x] CTA "Testar grátis por 30 dias" → `/testar-gratis`
- [x] Image column uses the "devices-composition" asset from T2
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick — passed

---

### T8: Build `BaseConhecimentoOtherModules.vue` ✅

**What**: Header + single "APIs e HUB Integradores" banner (no card grid).
**Where**: `app/components/sections/BaseConhecimentoOtherModules.vue`
**Depends on**: T7
**Reuses**: same structural pattern as `ApisOtherModules.vue`, pointing to `/modulos/apis-hub-integrador` instead
**Requirement**: BC-09, BC-11

**Tools**: NONE

**Done when**:
- [x] H2 "Conheça os outros módulos do Integrações e Habilidades" + description render
- [x] Single banner (icon + "APIs e HUB Integradores" + description + "Clique aqui →") links to `/modulos/apis-hub-integrador` via `NuxtLink` (real, already-existing route, not a placeholder — an improvement over `ApisOtherModules.vue`'s unresolved `href="#"`, since this destination is confirmed)
- [x] Banner icon decision from T2 applied — reused `/icons/menu-icone-apis-hub.svg`
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick — passed

---

### T9: Build `BaseConhecimentoTestimonials.vue` ✅

**What**: Wrap `layout/Testimonials.vue`, filtering `app/data/testimonials.json` by 2 confirmed ids.
**Where**: `app/components/sections/BaseConhecimentoTestimonials.vue`
**Depends on**: T8
**Reuses**: `layout/Testimonials.vue`, `ApisTestimonials.vue`'s id-filter pattern
**Requirement**: BC-08

**Tools**: NONE

**Done when**:
- [x] `testimonials.json` is **not modified**
- [x] Exactly 2 testimonials render: `crm-geral-mauro-alencar` (Ideal Imóveis) + `crm-rural-julio-silveira` (Vettore Uruguay)
- [x] H2 "O que nossos clientes falam dos nossos produtos e serviços" renders (default slot content from `layout/Testimonials.vue`)
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick — passed

---

### T10: Build `BaseConhecimentoFaq.vue` ✅

**What**: FAQ accordion wrapping `sections/CrmFaq.vue` with the 6 extracted Q&A.
**Where**: `app/components/sections/BaseConhecimentoFaq.vue`
**Depends on**: T9
**Reuses**: `sections/CrmFaq.vue` → `layout/Faq.vue`, `ApisFaq.vue`'s thin-wrapper pattern (already-existing "+"/"−" icons via `CrmFaq.vue`'s defaults)
**Requirement**: BC-10, BC-12

**Tools**: NONE

**Done when**:
- [x] All 6 Q&A render verbatim via `CrmFaq.vue`/`layout/Faq.vue`
- [x] "+"/"−" icons reused from `/icons/faq-plus-circle.svg`/`faq-minus-circle.svg` (no new icon export — via `CrmFaq.vue`'s defaults)
- [x] Opening/closing an accordion item visibly toggles the expanded state (native `<details>`/`<summary>` behavior from `layout/Faq.vue`)
- [x] `pnpm build` passes

**Process note**: T4–T10's `pnpm build` gate was run once after all 7 components were written (39s, clean) rather than once per task, since none of these components is referenced by any page until T11 — a build after each one would only re-prove the same project-wide compile health repeatedly. Each task still got its own atomic commit. Flagging this explicitly as a deliberate deviation from literal one-gate-per-task, not a silent skip.

**Tests**: none
**Gate**: Quick — passed

---

### T11: Assemble `app/pages/modulos/base-de-conhecimento.vue`

**What**: Compose all 8 sections in Figma order; set `useSeoMeta`.
**Where**: `app/pages/modulos/base-de-conhecimento.vue`
**Depends on**: T10
**Reuses**: `app/pages/modulos/apis-hub-integrador.vue`'s `<main>` + `useSeoMeta` pattern
**Requirement**: BC-01, BC-05, BC-14

**Tools**: NONE

**Done when**:
- [ ] `/modulos/base-de-conhecimento` resolves HTTP 200
- [ ] All 8 sections render in Figma order
- [ ] `useSeoMeta` set with real title/description (no placeholder)
- [ ] Exactly one `<h1>` on the page
- [ ] Mega-menu link (`HeaderBar.vue`) still resolves here (no change needed — confirmed pre-existing)
- [ ] No `BaseConhecimento*` component name collides with an existing `app/components/sections/*` filename (confirmed already at Specify time — re-confirm here as a final check)
- [ ] `pnpm build` passes

**Tests**: none
**Gate**: Full

---

### T12: Cross-cutting QA — responsiveness, visual fidelity, final build

**What**: Full audit across breakpoints + visual comparison against Figma + final build + spec traceability update.
**Where**: n/a (verification only)
**Depends on**: T11
**Reuses**: n/a
**Requirement**: BC-13 (+ final confirmation of all ACs)

**Tools**:
- MCP: `figma` (`get_screenshot` per section for comparison)
- Skill: NONE (Playwright, if used, is a local script, not an MCP/skill in this project)

**Done when**:
- [ ] No horizontal overflow at 1920/1440/1280/1024/768/576/375px on a real running dev server
- [ ] Zero console/page errors at every breakpoint, plus zero 404s (images/icons/CSS/JS all resolved)
- [ ] Each section visually compared against its Figma node (`get_screenshot` or equivalent) — any drift documented and fixed before this task is marked done
- [ ] `pnpm build` succeeds with the new route in output
- [ ] `spec.md`'s Requirement Traceability table updated from `Pending` to `Verified` for BC-01–BC-14; Success Criteria checkboxes checked
- [ ] Any deviation from `spec.md`/`design.md` found during Execute (e.g. the "devices-composition" asset or Other Modules banner icon decisions from T2) is recorded here and, if it changes an approved decision, flagged to the user rather than silently applied

**Tests**: none
**Gate**: Build

---

## Phase Execution Map

```
Phase 1 → Phase 2 → Phase 3 → Phase 4

T1 → T2 → T3 → T4 → T5 → T6 → T7 → T8 → T9 → T10 → T11 → T12
```

Execution is strictly sequential — there is no intra-phase parallelism. A single agent (or batch worker) works one task at a time, in order.

---

## Task Granularity Check

| Task | Scope | Status |
| --- | --- | --- |
| T1: Extract manifest | 1 file (already done) | ✅ Granular |
| T2: Export assets | 1 cohesive asset batch (all missing icons/images for this page) | ✅ Granular (same shape as `apis-hub-integrador`'s T2) |
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
| T2: Asset export | New/exported assets (no code layer) | none | none | ✅ OK |
| T3–T10: Section components | New section component | none | none | ✅ OK |
| T11: Page assembly | Page component | none | none | ✅ OK |
| T12: QA audit | n/a | n/a | none | ✅ OK |

All "none" values are matrix-backed (`AD-002`, active project decision).

---

## Pendências registradas para revisão (não decididas aqui)

Nenhuma inconsistência foi encontrada entre `spec.md`, `design.md` e `FIGMA_CONTENT_MANIFEST_BASE_CONHECIMENTO.md` — as tasks acima refletem exatamente as decisões já aprovadas. As únicas questões em aberto são as já registradas no `spec.md` (seção "Assumptions & Open Questions"), reencaminhadas aqui como parte do escopo de T2/T7/T8:

1. Viabilidade do export da imagem "devices-composition" (seção Content/Other) — se não for viável, T2/T7 documentam o bloqueio em vez de improvisar uma versão HTML/CSS.
2. Confirmação visual se `/icons/menu-icone-apis-hub.svg` bate com o ícone do banner "Other Modules" — decisão registrada em T2/T8.
3. Download dos 8 ícones pendentes antes que as URLs do Figma expirem (~7 dias) — risco de timing, não de conteúdo.
