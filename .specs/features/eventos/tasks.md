# Eventos Tasks

## Execution Protocol (MANDATORY — do not skip)

Implement these tasks with the `tlc-spec-driven` skill: **activate it by name and follow its Execute flow and Critical Rules.** Do not search for skill files by filesystem path. The skill is the source of truth for the full flow (per-task cycle, sub-agent delegation, adequacy review, Verifier, discrimination sensor).

**If the skill cannot be activated, STOP and tell the user — do not proceed without it.**

**Sub-agent delegation note**: 10 tasks total (T1 already complete → 9 remaining), which fits within the ~8-task single-batch threshold once T1 is excluded, but is right at the boundary — the orchestrating agent MUST still count tasks and offer batch sub-agents at the start of Execute if the count crosses ~8, per the skill's Sub-Agent Delegation rules, rather than assuming inline execution.

**Tool confirmation note**: per the skill's Tasks step 6, "which tools should I use per task" is normally asked right before Execute starts. Recommended tools are already filled in below (Figma MCP + `figma:figma-design-to-code` skill for asset-facing tasks, none for content-only tasks), matching the same pattern already used in `base-de-conhecimento`'s tasks.md — reconfirm with the user at the start of Execute rather than treating this as a standing approval to invoke MCPs now.

**User decisions locked in (from Etapa 1 approval, do not revisit without asking)**:
1. CTA "Inscreva-se!!!" (2 occurrences: `EventosHero.vue`, `EventosSignup.vue`) — keep the destination exactly as documented in `spec.md` (`href="#"` placeholder, pending confirmation). Do not invent a URL.
2. FAQ question 6 — reproduce the Figma content exactly as extracted (duplicate answer, identical to question 5's). Do not invent or silently correct it. Keep the inconsistency documented in `spec.md`/`validation.md`.
3. The "on" brand color for this page is `#e33b48` (confirmed, page-specific — do not substitute `#e72f4d` from other pages).

---

**Design**: `.specs/features/eventos/design.md`
**Status**: Draft — awaiting user approval before Execute

---

## Test Coverage Matrix

> Generated from codebase and `.specs/STATE.md` (`AD-002`) — no automated test runner exists in this project; gate = `pnpm build` + manual/visual verification (same substitution already applied to every prior page feature, most recently `base-de-conhecimento`).

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| --- | --- | --- | --- | --- |
| Content/asset manifest (docs only) | none | Every extracted string and asset cross-checked 1:1 against the Figma node before use — no invented copy | `FIGMA_CONTENT_MANIFEST_EVENTOS.md` | manual review only |
| New/exported assets (`public/icons/*`, `public/images/eventos/*`) | none | Every asset is the exact byte content downloaded from the Figma asset URL, not hand-drawn/approximated | `public/icons/eventos-*.svg`, `public/images/eventos/*` | visual diff against `get_design_context`/`get_screenshot` |
| New section component (`app/components/sections/Eventos*.vue`) | none | Compiles cleanly; renders the content from the manifest; matches its mapped spec AC(s) on manual visual check against Figma | `app/components/sections/Eventos*.vue` | `pnpm build` + Figma screenshot comparison |
| Page component (`app/pages/eventos.vue`) | none | Route resolves 200; all 6 sections present in Figma order; SEO meta set; exactly 1 `<h1>` | `app/pages/eventos.vue` | `pnpm build` + manual `pnpm dev` check |

## Gate Check Commands

| Gate Level | When to Use | Command |
| --- | --- | --- |
| Quick | After each single-section-component task (T3–T8) | `pnpm build` |
| Full | After page assembly (T9) | `pnpm build` && `pnpm dev` → exercise the task's mapped acceptance criteria on the running route |
| Build | Feature completion (T10) | `pnpm build` succeeds with `/eventos` in output && Playwright pass at 1920/1440/1280/1024/768/576/375px (no horizontal overflow, no console errors, no 404s) && visual comparison against `get_screenshot` per section |

---

## Execution Plan

Phases are ordered and run sequentially — each phase completes before the next begins, and tasks within a phase execute in order.

### Phase 1: Content & Assets

```
T1 → T2
```

### Phase 2: Section Components

```
T3 → T4 → T5 → T6 → T7 → T8
```

### Phase 3: Page Assembly

```
T9
```

### Phase 4: Cross-Cutting QA

```
T10
```

---

## Task Breakdown

### T1: Extract Figma content into the manifest (already complete)

**What**: Locate the "Eventos" page section in Figma file `vX7qKnnXSOW8zv4kAuS2eN` (node `1033:1578`, root frame `3171:41842`, 6 content blocks) and produce `FIGMA_CONTENT_MANIFEST_EVENTOS.md`.
**Where**: `FIGMA_CONTENT_MANIFEST_EVENTOS.md` (repo root)
**Depends on**: None
**Reuses**: manifest schema from `FIGMA_CONTENT_MANIFEST_BASE_CONHECIMENTO.md`
**Requirement**: supports EV-01–EV-12

**Tools**:
- MCP: `figma` (`get_design_context`/`get_metadata`)
- Skill: `figma:figma-design-to-code`

**Done when**:
- [x] `FIGMA_CONTENT_MANIFEST_EVENTOS.md` exists with 6 numbered blocks, verbatim text, no invented copy
- [x] The 2 already-existing image assets (`banner-eventos.png`, `eventos_vivo.png`) are cross-checked by direct visual inspection + exact pixel-dimension match against their matching Figma node — confirmed, not assumed
- [x] Layer-name-vs-content mismatches flagged explicitly, not silently trusted (the Hero's "Heading / H2"-named layer that actually renders the "PRÓXIMO EVENTO" kicker; the FAQ's duplicated answer between questions 5 and 6)
- [x] Every still-missing asset (5 gallery photos, 3 replay thumbnails, play/triangle icons, Overview photo + decorations, Hero decorative shapes) explicitly listed as pending, not guessed

**Tests**: none
**Gate**: Manual — completed in the prior planning session (see `spec.md`/`design.md`)

---

### T2: Export missing icon/image assets from Figma ✅

**What**: Download (not hand-author) every asset still missing per the manifest's asset summary table: the 5 "Image / Gallery" photos, the 3 Replay thumbnails, the play-button icon (2 variants) + the shared rotated triangle overlay, the Overview section's main photo + its 2 small decorative circles + its own play-button icon, and the Hero's 2 decorative "icone-shape" PNGs.
**Where**: `public/icons/*.svg` (new files only), `public/images/eventos/*` (new images only)
**Depends on**: T1
**Reuses**: existing `/icons/faq-plus-circle.svg`/`faq-minus-circle.svg` (FAQ, no export needed), existing `banner-eventos.png`/`eventos_vivo.png` (no export needed)
**Requirement**: supports EV-02, EV-03, EV-05, EV-06

**Tools**:
- MCP: `figma` (`get_design_context`/`download_assets` per node, asset URL download)
- Skill: `figma:figma-design-to-code`

**Done when**:
- [x] All 5 gallery photos exist under `public/images/eventos/` (`eventos-galeria-foto-1.png` … `-5.png`)
- [x] All 3 Replay thumbnails exist under `public/images/eventos/` (`eventos-replay-thumb-1/2/3.png`)
- [x] Play-button icon(s) + the shared rotated-triangle overlay exist under `public/icons/` — **compared the 2 "imgPlay"/"imgPlay1" variants byte-for-byte (SVG source)**: same circle glyph (`cx`/`cy` centered, `#DDE6F6` border), the only difference is a drop-shadow `<filter>` baked into the "imgPlay1" variant and extra canvas padding for the blur — visually the same button. Consolidated to **one file**, `eventos-icone-play.svg`, reused for all 3 cards; the redundant near-duplicate was downloaded then deleted (not committed)
- [x] Overview section's main photo, its 2 small decorative circle SVGs, and its own play-button icon exist under `public/images/eventos/` and `public/icons/`
- [x] Hero's 2 decorative "icone-shape" PNGs exist under `public/images/eventos/`
- [x] **Divider decision (task rule 9)**: compared `/icons/crm-hero-divider-onda.svg` against the newly-exported `eventos-icone-divider-horizontal.svg` — **not visually identical**: same wave path geometry, but the CRM icon has a solid white background fill shape and opaque `#CEDAFC`/white strokes, while this page's Figma divider has no fill and translucent 15%-opacity `#5D5FEF`/`#1CD9A4` strokes. Used the newly-exported page-specific asset, not the CRM one.
- [x] No icon/image is hand-drawn/approximated — each is the exact byte content fetched from the Figma asset URL

**Tests**: none
**Gate**: Quick (visual diff against the `get_design_context`/`get_screenshot` output for each asset) — passed, see Done when above

---

### T3: Build `EventosGallery.vue`

**What**: Decorative top-of-page strip of 5 real photos, no text, blue border top/bottom.
**Where**: `app/components/sections/EventosGallery.vue`
**Depends on**: T2
**Reuses**: nothing existing (confirmed via Explore agent — no equivalent pattern anywhere in the codebase); CLAUDE.md's typed-array pattern for repeating content
**Requirement**: EV-02

**Tools**: NONE (content already in the manifest)

**Done when**:
- [ ] Exactly 5 photos render, in Figma order, via a single `v-for` over one typed array (`{ src, alt }[]`)
- [ ] Renders as the very first element inside `<main>` (before the Hero), matching the Figma order
- [ ] No text/CTA present (confirmed absent in Figma)
- [ ] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T4: Build `EventosHero.vue`

**What**: H1 + description (centered) + decorative horizontal divider + 2 decorative "icone-shape" blobs + the "Próximo evento" promo row (image `banner-eventos.png` + kicker "PRÓXIMO EVENTO" + highlighted paragraph + CTA "Inscreva-se!!!").
**Where**: `app/components/sections/EventosHero.vue`
**Depends on**: T3
**Reuses**: `banner-eventos.png` (already exported), decorative divider icon (confirm during implementation whether `/icons/crm-hero-divider-onda.svg` is visually identical to this page's divider before reusing it, or export a dedicated one if not)
**Requirement**: EV-03, EV-10 (CTA placeholder rule, Hero occurrence)

**Tools**:
- MCP: `figma` (re-confirm the divider glyph before finalizing, per `AD-015`'s lesson that instance names can be stale)
- Skill: NONE

**Done when**:
- [ ] H1 "Eventos Online e Replays do SUBSEE on" renders with "on" in `#e33b48` (**locked-in decision — do not use `#e72f4d` or `text-brand`**)
- [ ] Description renders verbatim below the H1
- [ ] "Próximo evento" row renders `banner-eventos.png` as a single flattened image (no HTML text reconstruction over it), plus the live kicker "PRÓXIMO EVENTO" and the highlighted paragraph as real text (not baked into an image)
- [ ] Neither the kicker nor the highlighted paragraph is marked up as an `<h2>` (locked-in heading-hierarchy decision from spec.md)
- [ ] CTA "Inscreva-se!!!" renders with `href="#"` (**locked-in decision — do not invent a URL**), documented inline as pending
- [ ] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T5: Build `EventosReplay.vue`

**What**: Centered H2 + description, a gradient rounded panel containing a row of exactly 3 video/replay cards (thumbnail + colored tag + title + play-button overlay, with card-specific variations), and a CTA linking to a real external URL.
**Where**: `app/components/sections/EventosReplay.vue`
**Depends on**: T4
**Reuses**: `ui/CtaButton.vue` for the external CTA (via fallthrough `target="_blank"` `rel="noopener"`); gradient-inlined-per-section pattern already established in `CrmPortfolio.vue`/`CrmUrbanoLeadsChart.vue`/`SiteLoteadorasSglOffer.vue` (no generic gradient-panel shell exists — confirmed via Explore agent)
**Requirement**: EV-05

**Tools**:
- MCP: `figma` (confirm the 3 thumbnail/play-icon glyphs individually before finalizing, per `AD-015`)
- Skill: NONE

**Done when**:
- [ ] H2 "Reveja nossos eventos e novidades" + description ("Assista aos **replays de lives**, treinamentos e lançamentos...") render verbatim, "eventos"/"novidades" in `#5d5fef`
- [ ] Panel background uses the gradient documented in the manifest (`linear-gradient(117.49deg, rgb(235,244,254) 2.78%, rgb(239,240,251) 65.12%, rgba(178,200,241,0.45) 104.45%)`)
- [ ] Exactly 3 cards render via a single `v-for` over one typed `ReplayCard[]` array (per design.md's shape: `thumbnail`, `tag`, `title`, optional `overlayCaption`, optional `versionBadge`) — card 1 has its overlay caption ("SVN Investimentos SUB100 Sistemas"), card 2 has its version badge ("1.0.18"), card 3 has neither extra
- [ ] CTA "Ver mais vídeos no App SUBSEE" links to `https://app.subsee.com.br/treinamentos/eventos-online?page=1&order=default` with `target="_blank"` `rel="noopener"` (**real, confirmed external URL — not a placeholder**)
- [ ] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T6: Build `EventosOverview.vue`

**What**: Two-column section — H2 + description on the left; a rounded photo with 2 solid decorative color blocks behind it and a decorative (non-functional) play-button icon on top, on the right.
**Where**: `app/components/sections/EventosOverview.vue`
**Depends on**: T5
**Reuses**: nothing existing (confirmed via Explore agent — closest idiom, `HeroCrm.vue`'s blurred-shape-behind-image, is a different visual treatment and lives inside a Hero, not a standalone Overview section); no play-button asset exists anywhere else in the codebase either
**Requirement**: EV-06

**Tools**: NONE (content already in the manifest)

**Done when**:
- [ ] H2 "Tudo que sua imobiliária precisa, em um só sistema com o **SUBSEE on**" (bold on "SUBSEE on") + description render verbatim
- [ ] Photo renders with the 2 solid decorative blocks (`#1cd9a4` and `#5d5fef`, both `rounded-[20px]`) positioned behind it, matching the Figma layering
- [ ] Play-button icon renders as purely decorative — no `<a>`, no video embed, no invented link (confirmed absent in Figma)
- [ ] No CTA present (confirmed absent in Figma)
- [ ] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T7: Build `EventosSignup.vue`

**What**: A single fully-clickable card — badge "EVENTO ONLINE", H2, description, a button-styled CTA, a small note, and a bleed-in image on the right.
**Where**: `app/components/sections/EventosSignup.vue`
**Depends on**: T6
**Reuses**: `eventos_vivo.png` (already exported); nothing existing for the whole-card-as-a-link pattern (confirmed via Explore agent — `HeroBlog.vue`'s cards are `<article>` with only an inner text link, not the same pattern)
**Requirement**: EV-07, EV-10 (CTA placeholder rule, Signup occurrence)

**Tools**: NONE (content already in the manifest)

**Done when**:
- [ ] The entire card (badge + H2 + description + CTA + note + image) is wrapped in a single `<a>`/`<NuxtLink>`, matching the Figma structure (not just the CTA text being a link)
- [ ] Badge "EVENTO ONLINE", H2 "Participe dos Nossos Eventos ao Vivo", description, CTA-styled "Inscreva-se!!! →", and note "Vagas limitadas por evento" all render verbatim
- [ ] `href="#"` used for the whole card (**locked-in decision — do not invent a URL**), documented inline as pending
- [ ] Image uses `eventos_vivo.png` (already exported, transparent-left confirmed) bleeding in from the right
- [ ] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T8: Build `EventosFaq.vue`

**What**: FAQ accordion wrapping `layout/Faq.vue` (via the same thin-wrapper shape as `CrmFaq.vue`/`BaseConhecimentoFaq.vue`) with the 6 extracted Q&A.
**Where**: `app/components/sections/EventosFaq.vue`
**Depends on**: T7
**Reuses**: `layout/Faq.vue`, `CrmFaq.vue`'s thin-wrapper pattern (already-existing "+"/"−" icons via its defaults)
**Requirement**: EV-08, EV-09

**Tools**: NONE

**Done when**:
- [ ] All 6 Q&A render verbatim via `layout/Faq.vue`
- [ ] Question 6's answer is reproduced exactly as extracted (**locked-in decision — identical to question 5's answer, do not invent or silently correct it**), matching the manifest's flagged inconsistency
- [ ] "+"/"−" icons reused from `/icons/faq-plus-circle.svg`/`faq-minus-circle.svg` (no new icon export)
- [ ] Opening/closing an accordion item visibly toggles the expanded state (native `<details>`/`<summary>` behavior from `layout/Faq.vue`)
- [ ] `pnpm build` passes

**Tests**: none
**Gate**: Quick

---

### T9: Assemble `app/pages/eventos.vue`

**What**: Compose all 6 sections in Figma order; set `useSeoMeta`.
**Where**: `app/pages/eventos.vue`
**Depends on**: T8
**Reuses**: `app/pages/modulos/apis-hub-integrador.vue`'s `<main>` + `useSeoMeta` pattern (route is `/eventos`, not nested under `modulos/`)
**Requirement**: EV-01, EV-04, EV-12

**Tools**: NONE

**Done when**:
- [ ] `/eventos` resolves HTTP 200
- [ ] All 6 sections render in Figma order (Gallery → Hero → Replay → Overview → Signup → Faq)
- [ ] `useSeoMeta` set with the title/description documented in `spec.md`'s SEO section (no placeholder, no invented copy)
- [ ] Exactly one `<h1>` on the page
- [ ] Nav link (`HeaderBar.vue`'s top-level "Eventos" item) still resolves here — no change needed, confirmed pre-existing
- [ ] No `Eventos*` component name collides with an existing `app/components/sections/*` filename (confirmed already at Specify time — re-confirm here as a final check)
- [ ] Page does **not** include its own Header/Footer markup (already globally mounted in `app/app.vue`)
- [ ] `pnpm build` passes

**Tests**: none
**Gate**: Full

---

### T10: Cross-cutting QA — responsiveness, visual fidelity, SEO, final build, Git closeout

**What**: Full audit across breakpoints + visual comparison against Figma + heading-hierarchy/SEO confirmation + final build + spec traceability update + Git status review.
**Where**: n/a (verification only)
**Depends on**: T9
**Reuses**: n/a
**Requirement**: EV-11 (+ final confirmation of all ACs)

**Tools**:
- MCP: `figma` (`get_screenshot` per section for comparison)
- Skill: NONE (Playwright, if used, is a local script, not an MCP/skill in this project)

**Done when**:
- [ ] No horizontal overflow at 1920/1440/1280/1024/768/576/375px on a real running dev server — specifically check the 5-photo gallery strip and the 3-card Replay row, the two layouts flagged in `spec.md`'s Edge Cases as the highest overflow risk
- [ ] Zero console/page errors at every breakpoint, plus zero 404s (images/icons/CSS/JS all resolved), including a full-page scroll to force any lazy-loaded images
- [ ] Heading hierarchy confirmed exactly as specified: 1 `<h1>`, 4 `<h2>` (Replay/Overview/Signup/Faq), 6 `<h3>` (3 Replay card titles + 3 in `TheFooter.vue`, sitewide pattern) — the Hero's kicker and highlighted paragraph confirmed as non-headings
- [ ] SEO meta confirmed rendered: `<title>`, `<meta name="description">`, `og:title`/`og:description` matching `spec.md`'s SEO section exactly
- [ ] Each section visually compared against its Figma node (`get_screenshot` or equivalent) — any drift documented and fixed before this task is marked done
- [ ] `pnpm build` succeeds with the new route in output
- [ ] `spec.md`'s Requirement Traceability table updated from `Pending` to `Verified` for EV-01–EV-12; Success Criteria checkboxes checked
- [ ] `git status`/`git log` reviewed — every commit atomic, one per task, no unrelated files swept in, working tree clean before considering the feature done
- [ ] Any deviation from `spec.md`/`design.md` found during Execute is recorded here and, if it changes an approved decision (the 3 locked-in decisions above included), flagged to the user rather than silently applied

**Tests**: none
**Gate**: Build

---

## Phase Execution Map

```
Phase 1 → Phase 2 → Phase 3 → Phase 4

T1 → T2 → T3 → T4 → T5 → T6 → T7 → T8 → T9 → T10
```

Execution is strictly sequential — there is no intra-phase parallelism. A single agent (or batch worker) works one task at a time, in order.

---

## Task Granularity Check

| Task | Scope | Status |
| --- | --- | --- |
| T1: Extract manifest | 1 file (already done) | ✅ Granular |
| T2: Export assets | 1 cohesive asset batch (all missing icons/images for this page) | ✅ Granular (same shape as `base-de-conhecimento`'s T2) |
| T3–T8: One section component each | 1 component each | ✅ Granular |
| T9: Assemble page | 1 file | ✅ Granular |
| T10: QA audit | 0 new files, verification only | ✅ Granular |

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

No task depends on a task in a later phase.

---

## Test Co-location Validation

| Task | Code Layer Created/Modified | Matrix Requires | Task Says | Status |
| --- | --- | --- | --- | --- |
| T1: Manifest | Content/asset manifest | none | none | ✅ OK |
| T2: Asset export | New/exported assets (no code layer) | none | none | ✅ OK |
| T3–T8: Section components | New section component | none | none | ✅ OK |
| T9: Page assembly | Page component | none | none | ✅ OK |
| T10: QA audit | n/a | n/a | none | ✅ OK |

All "none" values are matrix-backed (`AD-002`, active project decision).

---

## Pendências registradas para revisão (não decididas aqui)

Nenhuma inconsistência foi encontrada entre `spec.md`, `design.md` e `FIGMA_CONTENT_MANIFEST_EVENTOS.md` — as tasks acima refletem exatamente as decisões já aprovadas nesta rodada. Pendências de execução (não de conteúdo — o conteúdo já foi decidido por você):

1. **Volume de assets a exportar** (T2): 5 fotos + 3 thumbnails + ~7 ícones/decorações — mais assets pendentes do que qualquer feature anterior. Risco de timing: URLs de asset do Figma expiram em ~7 dias, então T2 deve rodar no início do Execute.
2. **Divider decorativo do Hero** (T4): preciso confirmar durante a implementação se `/icons/crm-hero-divider-onda.svg` bate visualmente com o divisor desta página antes de decidir se reaproveito ou exporto um novo.
3. **Variantes de ícone de play** (T2): "imgPlay" (cards 1/2) e "imgPlay1" (card 3) podem ser visualmente idênticos — preciso confirmar durante o export antes de decidir se uso 1 arquivo ou 2.

Nenhuma dessas 3 pendências de execução muda as 3 decisões de conteúdo que você já aprovou (CTA "#", FAQ pergunta 6 como está, cor `#e33b48`) — são apenas detalhes técnicos a resolver durante o Execute, registrados aqui para transparência.
