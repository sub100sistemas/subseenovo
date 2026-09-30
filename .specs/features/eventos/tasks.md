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

### T3: Build `EventosGallery.vue` ✅

**What**: Decorative top-of-page strip of 5 real photos, no text, blue border top/bottom.
**Where**: `app/components/sections/EventosGallery.vue`
**Depends on**: T2
**Reuses**: nothing existing (confirmed via Explore agent — no equivalent pattern anywhere in the codebase); CLAUDE.md's typed-array pattern for repeating content
**Requirement**: EV-02

**Tools**: NONE (content already in the manifest)

**Done when**:
- [x] Exactly 5 photos render, in Figma order, via a single `v-for` over one typed array (`{ src, alt }[]`)
- [x] Renders as the very first element inside `<main>` (before the Hero), matching the Figma order
- [x] No text/CTA present (confirmed absent in Figma)
- [x] `pnpm build` passes (shared build run with T4–T8, see T8 note)

**Tests**: none
**Gate**: Quick — passed

---

### T4: Build `EventosHero.vue` ✅

**What**: H1 + description (centered) + decorative horizontal divider + 2 decorative "icone-shape" blobs + the "Próximo evento" promo row (image `banner-eventos.png` + kicker "PRÓXIMO EVENTO" + highlighted paragraph + CTA "Inscreva-se!!!").
**Where**: `app/components/sections/EventosHero.vue`
**Depends on**: T3
**Reuses**: `banner-eventos.png` (already exported), decorative divider icon (confirm during implementation whether `/icons/crm-hero-divider-onda.svg` is visually identical to this page's divider before reusing it, or export a dedicated one if not)
**Requirement**: EV-03, EV-10 (CTA placeholder rule, Hero occurrence)

**Tools**:
- MCP: `figma` (re-confirm the divider glyph before finalizing, per `AD-015`'s lesson that instance names can be stale)
- Skill: NONE

**Done when**:
- [x] H1 "Eventos Online e Replays do SUBSEE on" renders with "on" in `#e33b48` (**locked-in decision honored — `text-[#e33b48]`, not `#e72f4d`/`text-brand`**)
- [x] Description renders verbatim below the H1
- [x] "Próximo evento" row renders `banner-eventos.png` as a single flattened image (no HTML text reconstruction over it), plus the live kicker "PRÓXIMO EVENTO" and the highlighted paragraph as real text (not baked into an image)
- [x] Neither the kicker nor the highlighted paragraph is marked up as an `<h2>` (locked-in heading-hierarchy decision from spec.md — both are `<p>`)
- [x] CTA "Inscreva-se!!!" renders with `href="#"` (**locked-in decision honored — no URL invented**), documented inline as pending
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick — passed

---

### T5: Build `EventosReplay.vue` ✅

**What**: Centered H2 + description, a gradient rounded panel containing a row of exactly 3 video/replay cards (thumbnail + colored tag + title + play-button overlay, with card-specific variations), and a CTA linking to a real external URL.
**Where**: `app/components/sections/EventosReplay.vue`
**Depends on**: T4
**Reuses**: `ui/CtaButton.vue` for the external CTA (via fallthrough `target="_blank"` `rel="noopener"`); gradient-inlined-per-section pattern already established in `CrmPortfolio.vue`/`CrmUrbanoLeadsChart.vue`/`SiteLoteadorasSglOffer.vue` (no generic gradient-panel shell exists — confirmed via Explore agent)
**Requirement**: EV-05

**Tools**:
- MCP: `figma` (confirm the 3 thumbnail/play-icon glyphs individually before finalizing, per `AD-015`)
- Skill: NONE

**Done when**:
- [x] H2 "Reveja nossos eventos e novidades" + description ("Assista aos **replays de lives**, treinamentos e lançamentos...") render verbatim, "eventos"/"novidades" in `#5d5fef`
- [x] Panel background uses the gradient documented in the manifest (`linear-gradient(117.49deg, rgb(235,244,254) 2.78%, rgb(239,240,251) 65.12%, rgba(178,200,241,0.45) 104.45%)`)
- [x] Exactly 3 cards render via a single `v-for` over one typed `ReplayCard[]` array (per design.md's shape: `thumbnail`, `tag`, `title`, optional `overlayCaption`, optional `versionBadge`) — card 1 has its overlay caption ("SVN Investimentos SUB100 Sistemas"), card 2 has its version badge ("1.0.18"), card 3 has neither extra
- [x] CTA "Ver mais vídeos no App SUBSEE" links to `https://app.subsee.com.br/treinamentos/eventos-online?page=1&order=default` with `target="_blank"` `rel="noopener"` (**real, confirmed external URL — not a placeholder**)
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick — passed

---

### T6: Build `EventosOverview.vue` ✅

**What**: Two-column section — H2 + description on the left; a rounded photo with 2 solid decorative color blocks behind it and a decorative (non-functional) play-button icon on top, on the right.
**Where**: `app/components/sections/EventosOverview.vue`
**Depends on**: T5
**Reuses**: nothing existing (confirmed via Explore agent — closest idiom, `HeroCrm.vue`'s blurred-shape-behind-image, is a different visual treatment and lives inside a Hero, not a standalone Overview section); no play-button asset exists anywhere else in the codebase either
**Requirement**: EV-06

**Tools**: NONE (content already in the manifest)

**Done when**:
- [x] H2 "Tudo que sua imobiliária precisa, em um só sistema com o **SUBSEE on**" (bold on "SUBSEE on") + description render verbatim
- [x] Photo renders with the 2 solid decorative blocks (`#1cd9a4` and `#5d5fef`, both `rounded-[20px]`) positioned behind it, matching the Figma layering
- [x] Play-button icon renders as purely decorative — no `<a>`, no video embed, no invented link (confirmed absent in Figma)
- [x] No CTA present (confirmed absent in Figma)
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick — passed

---

### T7: Build `EventosSignup.vue` ✅

**What**: A single fully-clickable card — badge "EVENTO ONLINE", H2, description, a button-styled CTA, a small note, and a bleed-in image on the right.
**Where**: `app/components/sections/EventosSignup.vue`
**Depends on**: T6
**Reuses**: `eventos_vivo.png` (already exported); nothing existing for the whole-card-as-a-link pattern (confirmed via Explore agent — `HeroBlog.vue`'s cards are `<article>` with only an inner text link, not the same pattern)
**Requirement**: EV-07, EV-10 (CTA placeholder rule, Signup occurrence)

**Tools**: NONE (content already in the manifest)

**Done when**:
- [x] The entire card (badge + H2 + description + CTA + note + image) is wrapped in a single `<a>`/`<NuxtLink>`, matching the Figma structure (not just the CTA text being a link)
- [x] Badge "EVENTO ONLINE", H2 "Participe dos Nossos Eventos ao Vivo", description, CTA-styled "Inscreva-se!!! →", and note "Vagas limitadas por evento" all render verbatim
- [x] `href="#"` used for the whole card (**locked-in decision honored — no URL invented**), documented inline as pending
- [x] Image uses `eventos_vivo.png` (already exported, transparent-left confirmed) bleeding in from the right
- [x] `pnpm build` passes

**Tests**: none
**Gate**: Quick — passed

---

### T8: Build `EventosFaq.vue` ✅

**What**: FAQ accordion wrapping `layout/Faq.vue` (via the same thin-wrapper shape as `CrmFaq.vue`/`BaseConhecimentoFaq.vue`) with the 6 extracted Q&A.
**Where**: `app/components/sections/EventosFaq.vue`
**Depends on**: T7
**Reuses**: `layout/Faq.vue`, `CrmFaq.vue`'s thin-wrapper pattern (already-existing "+"/"−" icons via its defaults)
**Requirement**: EV-08, EV-09

**Tools**: NONE

**Done when**:
- [x] All 6 Q&A render verbatim via `layout/Faq.vue` (wrapped directly, not via `CrmFaq.vue` — its default array is CRM-specific content, not reused here)
- [x] Question 6's answer is reproduced exactly as extracted (**locked-in decision honored — identical to question 5's answer, not corrected or replaced**), matching the manifest's flagged inconsistency
- [x] "+"/"−" icons reused from `/icons/faq-plus-circle.svg`/`faq-minus-circle.svg` (no new icon export)
- [x] Opening/closing an accordion item visibly toggles the expanded state (native `<details>`/`<summary>` behavior from `layout/Faq.vue`)
- [x] `pnpm build` passes

**Process note**: T4–T8's `pnpm build` gate was run once after all 5 remaining components were written (46s, clean) rather than once per task, since none of these components is referenced by any page until T9 — a build after each one would only re-prove the same project-wide compile health repeatedly. Each task still got its own atomic commit. Flagging this explicitly as a deliberate deviation from literal one-gate-per-task, not a silent skip (same deviation already used and documented in `base-de-conhecimento`'s tasks.md).

**Tests**: none
**Gate**: Quick — passed

---

### T9: Assemble `app/pages/eventos.vue` ✅

**What**: Compose all 6 sections in Figma order; set `useSeoMeta`.
**Where**: `app/pages/eventos.vue`
**Depends on**: T8
**Reuses**: `app/pages/modulos/apis-hub-integrador.vue`'s `<main>` + `useSeoMeta` pattern (route is `/eventos`, not nested under `modulos/`)
**Requirement**: EV-01, EV-04, EV-12

**Tools**: NONE

**Done when**:
- [x] `/eventos` resolves HTTP 200
- [x] All 6 sections render in Figma order (Gallery → Hero → Replay → Overview → Signup → Faq)
- [x] `useSeoMeta` set with the title/description documented in `spec.md`'s SEO section (no placeholder, no invented copy)
- [x] Exactly one `<h1>` on the page
- [x] Nav link (`HeaderBar.vue`'s top-level "Eventos" item) still resolves here — no change needed, confirmed pre-existing
- [x] No `Eventos*` component name collides with an existing `app/components/sections/*` filename
- [x] Page does **not** include its own Header/Footer markup (already globally mounted in `app/app.vue`)
- [x] `pnpm build` passes

**Visual QA findings (fixed before marking done)**: comparing each section's Playwright screenshot against a live `get_screenshot` of its Figma node found 5 real deviations, all fixed:
1. **`EventosReplay.vue` overflowed at 1024px/1440px viewports** — 3 fixed-width (`max-w-[399px]`) cards no longer fit the row once `container-page`'s stepped max-width narrows below ~1257px. Changed cards to `flex-1 basis-0 min-w-[280px] max-w-[399px]` so they shrink together and only wrap to a new line when truly needed — verified 0 overflow at all 7 breakpoints afterward.
2. **`EventosOverview.vue`'s decorative teal block overflowed its column at 1440px** — the original percentage approximation (`left-[75%] size-[35%]`, summing past 100%) was recomputed precisely from the Figma node's own coordinates (`left-[69%] size-[31%]`, summing to exactly 100%).
3. **`EventosOverview.vue`'s decorative purple block was fully hidden behind the photo** — both were positioned at the same `top-0 left-0`, but Figma's own node places the photo offset by 2.7%/3.7% from the block's corner so a sliver peeks out. Repositioned the photo to those exact offsets so the purple block's peek-out (matching the teal block's) is visible, as in Figma.
4. **`EventosReplay.vue`'s version badge ("1.0.18") used the sitewide-broken `left-1/2 -translate-x-1/2` centering pattern** (confirmed via `AD-007`: no `translate-x/y` utility generates any CSS on this site) — switched to a flexbox-centered wrapper, matching CLAUDE.md's documented fix for this exact pattern.
5. **`EventosSignup.vue`'s bleed-in image was cropped to near-invisibility** — `object-cover` with default center positioning cropped into the video-call composition instead of anchoring it to the image's content-rich right side (the image's left half is intentionally transparent). Added `object-right`.

Also converted the 3 Replay card titles from `<p>` to `<h3>` (was accidentally left as paragraphs — spec.md requires 6 total `<h3>` on the page: 3 here + 3 in `TheFooter.vue`; confirmed via Playwright at all 7 breakpoints after the fix).

**Investigated, not a real bug**: a decorative shadow-divider image in the pre-existing, unrelated `TheHeader.vue` (`header-sombra-divisoria.svg`, also using the broken `-translate-x-1/2` pattern) geometrically extends past the viewport at some widths, but is safely clipped by its own ancestor's `overflow-x-hidden` — confirmed this does not contribute to `document.documentElement.scrollWidth` and does not visually leak. Pre-existing, sitewide, out of scope for this feature (same class of issue as `AD-007`, not introduced here).

**Tests**: none
**Gate**: Full — passed

---

### T10: Cross-cutting QA — responsiveness, visual fidelity, SEO, final build, Git closeout ✅

**What**: Full audit across breakpoints + visual comparison against Figma + heading-hierarchy/SEO confirmation + final build + spec traceability update + Git status review.
**Where**: n/a (verification only)
**Depends on**: T9
**Reuses**: n/a
**Requirement**: EV-11 (+ final confirmation of all ACs)

**Tools**:
- MCP: `figma` (`get_screenshot` per section for comparison)
- Skill: NONE (Playwright, if used, is a local script, not an MCP/skill in this project)

**Done when**:
- [x] No horizontal overflow at 1920/1440/1280/1024/768/576/375px on a real running dev server — author verified all 7; independent Verifier re-sampled 1920/1024/390px, including the two highest-risk layouts (Gallery strip, Replay row at 1024px)
- [x] Zero console/page errors at every breakpoint, plus zero 404s (images/icons/CSS/JS all resolved), including a full-page scroll to force any lazy-loaded images — confirmed by both author and independent Verifier
- [x] Heading hierarchy confirmed exactly as specified: 1 `<h1>`, 4 `<h2>` (Replay/Overview/Signup/Faq), 6 `<h3>` (3 Replay card titles + 3 in `TheFooter.vue`, sitewide pattern) — the Hero's kicker and highlighted paragraph confirmed as non-headings
- [x] SEO meta confirmed rendered: `<title>`, `<meta name="description">`, `og:title`/`og:description` matching `spec.md`'s SEO section exactly (`curl` against the live page)
- [x] Each section visually compared against its Figma node (`get_screenshot` or equivalent) — drift found and fixed in T9; independent Verifier re-compared 4 of 6 sections and found 1 additional real gap not caught by the author (see below)
- [x] `pnpm build` succeeds with the new route in output — confirmed independently by author and Verifier (`eventos-*.mjs` chunk present)
- [x] `spec.md`'s Requirement Traceability table updated from `Pending` to `Verified` for EV-01–EV-12; Success Criteria checkboxes checked
- [x] `git status`/`git log` reviewed — 13 atomic commits, one per task/logical step, working tree clean apart from `.claude/scheduled_tasks.lock` (harness-internal noise, explicitly left untouched — not part of this feature, not committed, not discarded, per explicit user instruction)
- [x] Any deviation from `spec.md`/`design.md` found during Execute is recorded here and flagged to the user

**Independent Verifier round (author ≠ verifier, per the skill's Execute step 9)**: a fresh sub-agent independently re-derived every EV-01–EV-12 acceptance criterion from its own Playwright setup (after a clean dev-server restart with cache clear), its own Figma `get_screenshot` calls, and its own `pnpm build` run — see `.specs/features/eventos/validation.md`. **Verdict: PASS, with 1 real gap not previously found**:

1. **[Gap — NOT fixed, per explicit user instruction to make no further code changes this session]** `EventosReplay.vue` card 2's thumbnail (`public/images/eventos/eventos-replay-thumb-2.png`) has a placeholder version number ("1.0.15") baked directly into the image pixels. The code's "1.0.18" overlay badge is sized to its own text content and doesn't fully occlude the baked-in text at this card's actual rendered crop — a stray leading "1" bleeds out to the left of the badge, rendering as "1 1.0.18". Confirmed absent in Figma's own render of the same node (a clean "1.0.18" only). Root cause: the raw exported thumbnail is a pre-crop source image, and the badge's size/position was approximated from Figma's internal composited coordinates rather than measured against this project's actual `object-cover` crop of the raw source — the two don't line up pixel-for-pixel. **Left as an open, documented pending item** — see `spec.md`/final report; a follow-up task should either re-export a version of the thumbnail without the baked-in placeholder, or resize/reposition the overlay badge to fully mask it, confirmed against a live screenshot before considering it closed.

The Verifier also independently re-confirmed all 5 of the author's own T9 fixes hold (including running a real discrimination-sensor exercise on 2 of them), and confirmed the 3 user-approved content decisions (CTA `href="#"` ×2, FAQ Q6 duplicate answer, `#e33b48` "on" color) are correctly implemented, not accidental.

**Process transparency note**: during its discrimination-sensor exercise, the Verifier briefly and mistakenly edited `EventosReplay.vue` directly (a violation of the read-only mandate) instead of using an isolated scratch copy. It caught this itself, reverted immediately, and the orchestrating session independently re-confirmed via `git diff` that the file is byte-identical to the last commit (zero diff) before proceeding. No lasting modification occurred. Disclosed in full in `validation.md`.

**Tests**: none
**Gate**: Build — passed

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
