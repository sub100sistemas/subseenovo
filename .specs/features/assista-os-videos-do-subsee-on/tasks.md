# Assista os vídeos do SUBSEE on Tasks

## Execution Protocol (MANDATORY — do not skip)

Implement these tasks with the `tlc-spec-driven` skill: **activate it by name and follow its Execute flow and Critical Rules.** Do not search for skill files by filesystem path. The skill is the source of truth for the full flow (per-task cycle, sub-agent delegation, adequacy review, Verifier, discrimination sensor).

**If the skill cannot be activated, STOP and tell the user — do not proceed without it.**

**Where to work**: only the worktree `D:\Trabalho\Git\site-subsee-novo`, branch `feature/assista-videos-subsee-on` (created from `feature/formularios` at `29fe303`). Never alter the commits of `feature/formularios` (`d8adab9`, `29fe303`).

**Sub-agent delegation note**: 15 executable tasks (T1–T15), packed into 2 batches (see Execution Plan). That is above the ~8-task threshold, so the orchestrating agent MUST offer batch sub-agents before Execute and wait for the user's answer. Phase 5 (T16–T18) is blocked by open questions and is not part of any batch.

**Prerequisite P0 (resolved)**: the dependencies are already installed in `D:\Trabalho\Git\site-subsee-novo` (`node_modules` present, Node 22.22.0, pnpm 10.27.0, [[AD-006]]), so `pnpm build` and `pnpm dev` run there. Nothing is installed or linked for this feature.

**Tool confirmation note**: per the skill's Tasks step 6, tools are pre-filled per task below (Figma MCP plus the `figma:figma-design-to-code` skill for asset and section tasks; `filesystem`-level editing for the rest). Confirm or change them when approving.

**User decisions locked in (Etapa 1 and 2 approvals; do not revisit without asking)**:
1. Branch `feature/assista-videos-subsee-on` in the main worktree, created from `feature/formularios`; the commits of `feature/formularios` stay untouched.
2. `layout/Hero.vue` gets the props `headingClass` and `descriptionClass`, defaults equal to today's classes; the 9 existing callers stay unchanged.
3. Figma MCP is the visual source of truth. Use only assets identified as reusable (5 module icons, `faq-plus-circle.svg`, `faq-minus-circle.svg`); export the rest from this page's Figma nodes. No asset is reused for looking similar.
4. **Open questions Q1, Q2, Q3, Q4, Q6 stay pending and blocking.** No URL, video title, duration, destination or FAQ answer is invented. Q5 is decided in the SEO/content step.
5. The YouTube channel URL is a **provisional fallback** for link `href`s, not a decision (one constant, `videosFallbackUrl`, removed by T18).

---

**Design**: `.specs/features/assista-os-videos-do-subsee-on/design.md`
**Status**: In Progress — T1 to T15 done; T16 to T18 blocked by Q1 to Q5

---

## Test Coverage Matrix

> Generated from the codebase and `.specs/STATE.md` ([[AD-002]]): the project has no automated test runner (no Vitest/Playwright, no ESLint/Prettier), per `CLAUDE.md` and prior features (`eventos`, `base-de-conhecimento`, `formularios`). Guidelines found: `CLAUDE.md` (verification gate = `pnpm build` plus manual/visual check), `.specs/STATE.md` `AD-002`, `AD-016`. The strong default (test every AC) cannot apply without a runner; the substitution below is the same one every prior page feature used.

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| --- | --- | --- | --- | --- |
| Shared layout shell change (`layout/Hero.vue`) | none | Compiles; rendered `<h1>`/`<p>` class attributes of an existing caller are byte-identical before and after; the 9 callers are not edited | `app/components/layout/Hero.vue` | `pnpm build` + built-HTML diff of one caller |
| New layout/ui component (`layout/SectionHeading.vue`, `ui/PlayButton.vue`) | none | Compiles; renders the props and slots it declares; no copy inside | `app/components/layout/*.vue`, `app/components/ui/*.vue` | `pnpm build` |
| New section component (`sections/Videos*.vue`) | none | Compiles; renders exactly the manifest content; matches its mapped AC on a visual check against the Figma node screenshot | `app/components/sections/Videos*.vue` | `pnpm build` + `pnpm dev` visual check |
| Data/constants (`app/data/videos.ts`) | none | Type-checks in `pnpm build`; contains no invented URL, title or duration | `app/data/videos.ts` | `pnpm build` |
| Exported assets (`public/icons/videos-*`, `public/images/assista-videos/*`) | none | Byte content is the file the Figma MCP served for that node; non-empty; dimensions match the manifest | `public/icons/videos-*`, `public/images/assista-videos/*` | file size/dimension check + visual diff |
| Page (`app/pages/assista-os-videos-do-subsee-on.vue`) | none | Route answers 200; sections in Figma order; exactly one `<h1>` | `app/pages/assista-os-videos-do-subsee-on.vue` | `pnpm build` + `pnpm dev` |

## Gate Check Commands

| Gate Level | When to Use | Command |
| --- | --- | --- |
| Quick | After each single-file task (T1–T12) | `pnpm build` |
| Full | After page assembly (T13) | `pnpm build` and `pnpm dev`, then exercise the mapped ACs on `/assista-os-videos-do-subsee-on` |
| Build | Feature completion (T14, T15) | `pnpm build` and `pnpm generate` (skim the log for `[404]` lines, [[AD-016]]) and headless-browser sweep at 1920/1440/1280/1024/768/576/375px (375px via a 375px-wide iframe, since headless windows have a minimum width) with no horizontal overflow, no console errors, no 404s, and section-by-section comparison against `get_screenshot` |

Toolchain: Node 22.22.0 and pnpm 10.27.0 via corepack ([[AD-006]]).

---

## Execution Plan

Phases are ordered and run sequentially — each phase completes before the next begins, and tasks within a phase execute in order. Batches (packed at ~7 tasks, whole phases): **Batch 1 = Phases 1 + 2 (8 tasks)**, **Batch 2 = Phases 3 + 4 (7 tasks)**. Phase 5 is blocked and outside the batches.

### Phase 1: Shared foundation (assets and shells)

```
T1
T2
T3 → T4
T5
```

### Phase 2: Data, Hero and Featured Video

Arrows also show dependencies on tasks from earlier phases (left side).

```
T6
T1 → T7
T2 → T7
T4 → T8
T5 → T8
T6 → T8
```

### Phase 3: Remaining sections

```
T4 → T9
T5 → T9
T6 → T9
T4 → T10
T5 → T10
T6 → T10
T3 → T11
T6 → T11
T12
```

### Phase 4: Assembly and QA

```
T7 → T13
T8 → T13
T9 → T13
T10 → T13
T11 → T13
T12 → T13
T13 → T14 → T15
```

### Phase 5: Blocked by pending decisions (not executable; excluded from batches)

```
T13 → T16
T12 → T17
T8 → T18
T9 → T18
T10 → T18
T11 → T18
```

---

## Task Breakdown

### T1: Add `headingClass` and `descriptionClass` props to `layout/Hero.vue`

**What**: Expose the `<h1>` and description `<p>` classes as props whose defaults are exactly today's class strings.
**Where**: `app/components/layout/Hero.vue` (modify)
**Depends on**: None
**Reuses**: The existing `withDefaults()` prop pattern in the same file
**Requirement**: AVS-04

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [x] `headingClass` default is `text-[32px] leading-[1.2] font-bold text-ink tablet-lg:text-[30px] desktop-full:text-[42px]` and `descriptionClass` default is `mt-[13px] max-w-[520px] text-[16px] leading-[1.4] text-ink tablet-lg:max-w-[675px] desktop-full:text-[24px]` (the strings currently at lines 69 and 72)
- [x] The template binds the props with `:class`; no other line of the file changes; no comments added
- [x] None of the 9 callers (`ApisHero`, `BaseConhecimentoHero`, `CrmHero`, `CrmRuralHero`, `CrmTemporadaHero`, `CrmUrbanoHero`, `SiteLoteadorasHero`, `SiteRuralHero`, `SiteUrbanoHero`) is edited
- [x] Built HTML of `/modulos/base-de-conhecimento` before and after has identical `<h1>` and description `<p>` `class` attributes
- [x] Gate check passes: `pnpm build`
- [x] Test count: n/a (no test runner, [[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(hero): expose heading and description classes as props`

---

### T2: Export the Hero assets from Figma

**What**: Download, from the Figma MCP, the Hero background (`3188:3399`), blurred glow (`3188:3629`), photo (`3188:3630`), wave divider (`3188:3400`), curves A and B (`3188:3632`, `3188:3633`), globe icon (`3188:3640`) and people icon (`3188:3649`).
**Where**: `public/images/assista-videos/` (photo) and `public/icons/` (SVGs prefixed `videos-hero-`)
**Depends on**: None
**Reuses**: The 5 module icons already in `public/icons/crm-hero-icone-*.svg` (not exported again)
**Requirement**: AVS-02

**Tools**:

- MCP: `figma` (`get_design_context` on `3188:3398` for fresh asset URLs, then download; MCP asset URLs from Etapa 2 expire after 7 days)
- Skill: `figma:figma-design-to-code`

**Done when**:

- [x] 1 PNG (RGBA, 1536×1024) and 7 SVGs saved, each non-empty, each with the dimensions listed in `FIGMA_CONTENT_MANIFEST_ASSISTA_VIDEOS_SUBSEE_ON.md`
- [x] No file duplicates an existing one (byte or path comparison done against `public/icons/`)
- [x] Photo alpha channel confirmed (PNG color type 6)
- [x] No reference to a temporary Figma URL remains anywhere in the repo
- [x] Gate check passes: `pnpm build`
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(videos): add hero assets exported from figma`

---

### T3: Export the play, profile, banner and FAQ-line assets from Figma

**What**: Download the featured play circle, shadow circle and triangle (`3188:3435`, `3188:3434`, `3188:3436`), the demo play circles and triangle (`3188:3448`, `3188:3457`, `3188:3449`), the three profile circles and triangle (`3188:3479`, `3188:3486`, `3188:3493`, `3188:3480`), the banner ellipse (`3188:3502`) and the FAQ line (`3188:3513`).
**Where**: `public/icons/` (SVGs prefixed `videos-play-`, `videos-profile-`, `videos-cta-`, `videos-faq-`)
**Depends on**: None
**Reuses**: `faq-plus-circle.svg` and `faq-minus-circle.svg` for the FAQ icons (not exported again)
**Requirement**: AVS-05, AVS-06, AVS-08, AVS-09

**Tools**:

- MCP: `figma` (`get_design_context` on `3188:3420`, `3188:3438`, `3188:3474`)
- Skill: `figma:figma-design-to-code`

**Done when**:

- [x] 10 SVGs saved (3 featured, 2 demo, 4 profile, 1 banner), each non-empty with the dimensions in the manifest. Deviation from the 12 planned: the FAQ line is #404040 at 20%, the same border `Faq.vue` already draws, and the plain 64px demo circle is a 1px halo under the bordered circle, so neither was exported
- [x] The FAQ line is kept as a file only if a 1px CSS border cannot reproduce it identically; otherwise it is dropped and the manifest row updated
- [x] Gate check passes: `pnpm build`
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(videos): add play, profile and banner assets exported from figma`

---

### T4: Create `ui/PlayButton.vue`

**What**: A presentational play circle with `size` and `variant` props (`light`, `brand`) built from the SVGs exported in T3, always `aria-hidden`.
**Where**: `app/components/ui/PlayButton.vue`
**Depends on**: T3
**Reuses**: Atomic-primitive pattern of `ui/CtaButton.vue` and `ui/LinkArrow.vue`; assets from T3
**Requirement**: AVS-05, AVS-06, AVS-08, AVS-07

**Tools**:

- MCP: `figma` (`get_screenshot` of `3188:3431` for the play, for comparison)
- Skill: `figma:figma-design-to-code`

**Done when**:

- [x] `light` renders the white circle with `#DDE6F6` 2px border and `#2764F2` triangle at 92px and 64px; `brand` renders the solid profile circle (color via prop) with the white triangle at 54px
- [x] The featured variant includes the shadow circle exported as `3188:3434`
- [x] No circle or triangle is redrawn in CSS; centered with flexbox, no `translate-*` ([[AD-007]])
- [x] No data, copy or URL inside the component; no comments
- [x] Gate check passes: `pnpm build`
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(ui): add PlayButton primitive`

---

### T5: Create `layout/SectionHeading.vue`

**What**: A content-agnostic eyebrow + title + description block with a `center` or `left` alignment and class props via `withDefaults()`.
**Where**: `app/components/layout/SectionHeading.vue`
**Depends on**: None
**Reuses**: Layout-shell conventions of `layout/Faq.vue` (class props, named slots)
**Requirement**: AVS-05, AVS-06, AVS-08

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [x] Slots `eyebrow`, `title`, `description`; class props `wrapperClass`, `eyebrowClass`, `titleClass`, `descriptionClass`, all with defaults
- [x] The default eyebrow style is Poppins SemiBold 14px, tracking 0.84px, `text-brand`, uppercase; the description slot is optional
- [x] No product copy, no data imports inside
- [x] Gate check passes: `pnpm build`
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(layout): add SectionHeading shell`

---

### T6: Create `app/data/videos.ts` with the provisional link fallback

**What**: Export the single constant `videosFallbackUrl` (`https://www.youtube.com/@subsee`) used by every provisional link, in one place so T18 can remove it.
**Where**: `app/data/videos.ts`
**Depends on**: None
**Reuses**: The `app/data/forms.ts` module style
**Requirement**: AVS-07

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [x] Exports only `videosFallbackUrl`; the value is the URL already used in `HeroMain.vue:84`
- [x] The file states no title, duration or destination for any video
- [x] No comments; the constant name carries the "provisional" meaning
- [x] Gate check passes: `pnpm build`
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(videos): add provisional fallback link constant`

---

### T7: Create `sections/VideosHero.vue`

**What**: The Hero: heading, description, 5 module icons, photo, floating cards and wave, wrapping `layout/Hero.vue`.
**Where**: `app/components/sections/VideosHero.vue`
**Depends on**: T1, T2
**Reuses**: `BaseConhecimentoHero.vue` (structure and `moduleIcons` array); `layout/Hero.vue` props `sectionClass`, `dividerSrc`, `headingClass`, `descriptionClass`, `aspectClass`
**Requirement**: AVS-02, AVS-03, AVS-04

**Tools**:

- MCP: `figma` (`get_design_context` and `get_screenshot` on `3188:3398`)
- Skill: `figma:figma-design-to-code`

**Done when**:

- [x] Heading "Assista aos vídeos do SUBSEE on" with "on" in `#e72f4d`; description exactly as in the manifest; only one `<h1>` in the component
- [x] Heading 36px Bold and description 20px (630px wide) through the new props; page-specific gradient background and wave divider from T2, not the `Hero.vue` defaults
- [x] The 5 module icons reuse the existing `crm-hero-icone-*.svg` files
- [x] Photo framed as in Figma (window 344×451, width 196.66%, offset −51.38%) with the blurred glow behind and the bottom clipped by the hero curve; floating cards "Vídeos Práticos" and "Time Capacitado" with the manifest text, HTML/CSS or a composed image (decide by screenshot comparison and record the choice in `design.md`)
- [x] At 1920px the Hero matches the `3188:3398` screenshot (568px total height, text at x=259); below 992px it behaves like the sibling Hero pages
- [x] Gate check passes: `pnpm build` and visual check on `pnpm dev`
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(videos): add VideosHero section`

---

### T8: Create `sections/VideosFeatured.vue`

**What**: The "Vídeo institucional" block: text column with two tags and the gradient video card with badge, play and caption.
**Where**: `app/components/sections/VideosFeatured.vue`
**Depends on**: T4, T5, T6
**Reuses**: `layout/SectionHeading.vue` (left alignment), `ui/PlayButton.vue` (`light`, 92px), `videosFallbackUrl`
**Requirement**: AVS-05, AVS-07

**Tools**:

- MCP: `figma` (`get_design_context` and `get_screenshot` on `3188:3420`)
- Skill: `figma:figma-design-to-code`

**Done when**:

- [x] Eyebrow, H2, description, tags "Gestão integrada" and "Mais produtividade" (one typed array, one `v-for`), badge "SUBSEE ON • 03:24" and caption exactly as in the manifest
- [x] Card 760×460, `rounded-[28px]`, gradient 112.44° `#5d5fef`→`#2e386b`, shadow `0 24px 50px rgba(46,56,107,0.18)`; two columns 520px + 760px with a 96px gap from `tablet-lg` up, one column below
- [x] The card is one focusable link with an accessible name; its `href` is `videosFallbackUrl`, opens in a new tab with `rel="noopener"`; it is marked as provisional in the manifest until Q1 is answered
- [x] No video title, duration or destination beyond the Figma text and the fallback is added
- [x] At 1920px the block matches the `3188:3420` screenshot
- [x] Gate check passes: `pnpm build` and visual check on `pnpm dev`
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(videos): add VideosFeatured section`

---

### T9: Create `sections/VideosDemo.vue`

**What**: The "Vídeos demonstrativos" block: heading and a gallery of 3 cards driven by one typed array and one `v-for`.
**Where**: `app/components/sections/VideosDemo.vue`
**Depends on**: T4, T5, T6
**Reuses**: `layout/SectionHeading.vue` (center), `ui/PlayButton.vue` (`light`, 64px), `videosFallbackUrl`; card-array pattern of `SiteUrbanoPropertyTypes.vue`
**Requirement**: AVS-06, AVS-07

**Tools**:

- MCP: `figma` (`get_design_context` and `get_screenshot` on `3188:3438`)
- Skill: `figma:figma-design-to-code`

**Done when**:

- [x] `DemoVideo` typed array (`duration`, `type`, `title`, `description`, `linkLabel`, `thumbClass`, `href`) with the 3 items of the manifest table; one card template, one `v-for`
- [x] Section background `#f8f9ff`; cards 430×520, `rounded-[22px]`, border `#e6e8f2`, shadow `0 14px 32px rgba(48,56,77,0.08)`; gallery 3×430 with 55px gap at 1920px, single column below `tablet-lg`
- [x] Card titles are `<h3>`; the "Assistir ao vídeo →" link is the single tab stop, stretched over the card, with an accessible name containing the video title; `href` is `videosFallbackUrl`, new tab, `rel="noopener"`
- [x] Durations and titles are the Figma text; they stay flagged as unconfirmed (Q1) in the manifest
- [x] At 1920px the section matches the `3188:3438` screenshot
- [x] Gate check passes: `pnpm build` and visual check on `pnpm dev`
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(videos): add VideosDemo section`

---

### T10: Create `sections/VideosProfiles.vue`

**What**: The "Conteúdo por perfil" block: heading and 3 profile cards from one typed array and one `v-for`.
**Where**: `app/components/sections/VideosProfiles.vue`
**Depends on**: T4, T5, T6
**Reuses**: `layout/SectionHeading.vue` (center), `ui/PlayButton.vue` (`brand`, 54px), `videosFallbackUrl`
**Requirement**: AVS-08, AVS-07

**Tools**:

- MCP: `figma` (`get_design_context` and `get_screenshot` on `3188:3474`)
- Skill: `figma:figma-design-to-code`

**Done when**:

- [x] `VideoProfile` typed array (`number`, `title`, `description`, `linkLabel`, `bgClass`, `accentClass`, `href`) with the 3 items of the manifest table; one card template, one `v-for`
- [x] Card colors: `#eef0ff`/`#5d5fef`, `#eaf9f7`/`#159c96`, `#f4eefc`/`#7652b5`; cards 430×260, `rounded-[22px]`; 3×430 with 55px gap at 1920px, single column below `tablet-lg`
- [x] "Ver vídeos →" links use `videosFallbackUrl` (new tab, `rel="noopener"`), pending Q2
- [x] Heading typography per the manifest (H2 36px here, 38px elsewhere)
- [x] At 1920px the block matches the `3188:3474` screenshot for the list area
- [x] Gate check passes: `pnpm build` and visual check on `pnpm dev`
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(videos): add VideosProfiles section`

---

### T11: Create `sections/VideosAppCta.vue`

**What**: The "Continue aprendendo no App SUBSEE" banner with gradient, decorative ellipse and white button.
**Where**: `app/components/sections/VideosAppCta.vue`
**Depends on**: T3, T6
**Reuses**: `videosFallbackUrl`; banner asset from T3
**Requirement**: AVS-09

**Tools**:

- MCP: `figma` (`get_design_context` and `get_screenshot` on `3188:3501`)
- Skill: `figma:figma-design-to-code`

**Done when**:

- [x] Title, text (24px, 82% white) and button label "Veja mais no App SUBSEE →" exactly as in the manifest
- [x] Banner 1400×220, `rounded-[28px]`, gradient `#5d5fef`→`#2e386b`, ellipse 360×360 clipped by `overflow-hidden`; button 300×58, white, `rounded-[10px]`, text `#5d5fef` 15px SemiBold
- [x] The button uses `videosFallbackUrl` (new tab, `rel="noopener"`), pending Q3; text and button stack below `tablet-lg`
- [x] At 1920px the banner matches the `3188:3501` screenshot
- [x] Gate check passes: `pnpm build` and visual check on `pnpm dev`
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(videos): add VideosAppCta section`

---

### T12: Create `sections/VideosFaq.vue` with items 1 to 5

**What**: The FAQ wrapping `layout/Faq.vue` with a white background, 970px items and the 5 questions that have answers in Figma.
**Where**: `app/components/sections/VideosFaq.vue`
**Depends on**: None
**Reuses**: `layout/Faq.vue`; `EventosFaq.vue` (props and icon paths); `faq-plus-circle.svg`, `faq-minus-circle.svg`
**Requirement**: AVS-10

**Tools**:

- MCP: `figma` (`get_design_context` and `get_screenshot` on `3188:3507`)
- Skill: `figma:figma-design-to-code`

**Done when**:

- [x] Title "Perguntas Frequentes" (52px SemiBold), subtitle and the 5 question/answer pairs exactly as in the manifest, from one typed array
- [x] `panel-class` has no gray background (white), items 970px wide at 1920px, question 20px SemiBold, answer 16px with 26px line height
- [x] Accordion is closed by default and toggles "+" / "−" (native `<details>`)
- [x] Question 6 is **not** rendered here and no answer text is invented (see T17)
- [x] At 1920px the FAQ matches the `3188:3507` screenshot for items 1 to 5
- [x] Gate check passes: `pnpm build` and visual check on `pnpm dev`
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(videos): add VideosFaq section with confirmed items`

---

### T13: Create the page `assista-os-videos-do-subsee-on.vue`

**What**: The thin page composing the 6 sections in Figma order inside `<main>`.
**Where**: `app/pages/assista-os-videos-do-subsee-on.vue`
**Depends on**: T7, T8, T9, T10, T11, T12
**Reuses**: The structure of `app/pages/eventos.vue`
**Requirement**: AVS-01, AVS-03

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [x] `/assista-os-videos-do-subsee-on` answers 200 in `pnpm dev` and appears in the `pnpm build` output
- [x] Sections in order: `VideosHero`, `VideosFeatured`, `VideosDemo`, `VideosProfiles`, `VideosAppCta`, `VideosFaq`, inside `<main>`, with the global Header and Footer around them
- [x] Exactly one `<h1>` on the rendered page
- [x] No `useSeoMeta` values are invented here (see T16); the page works without them
- [x] Gate check passes: `pnpm build` and `pnpm dev` route check
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: full

**Commit**: `feat(videos): add assista-os-videos-do-subsee-on page`

---

### T14: Responsive and overflow sweep

**What**: Run the page through 1920/1440/1280/1024/768/576/375px and record overflow, console errors, 404s and text pinches below `container-page` breakpoints.
**Where**: `.specs/features/assista-os-videos-do-subsee-on/qa-report.md` (new; separate from the Verifier report)
**Depends on**: T13
**Reuses**: The sweep method used for `formularios` (headless Chrome, 375px through a 375px-wide iframe)
**Requirement**: AVS-11, AVS-12

**Tools**:

- MCP: NONE
- Skill: `run`

**Done when**:

- [x] At each of the 7 widths `scrollWidth <= innerWidth`, zero console errors, zero 404s
- [x] Below 992px: the Featured columns and the three 3-card grids are single-column; Hero follows the sibling pages' mobile behavior
- [x] Extra checks at 991, 1199 and 1299px for text-wrap pinches; each finding is listed, not silently fixed
- [x] Gate check passes: `pnpm build` and `pnpm generate` (no new `[404]` lines)
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: build

**Commit**: `docs(videos): record responsive sweep results`

---

### T15: Section-by-section Figma fidelity check at 1920px

**What**: Compare every section with its `get_screenshot` and list every difference (positions, sizes, colors, text, assets).
**Where**: `.specs/features/assista-os-videos-do-subsee-on/qa-report.md` (appended under a "Figma fidelity" heading)
**Depends on**: T14
**Reuses**: The side-by-side crop method used for `formularios`
**Requirement**: AVS-02, AVS-04, AVS-05, AVS-06, AVS-08, AVS-09, AVS-10

**Tools**:

- MCP: `figma` (`get_screenshot` on `3188:3398`, `3188:3420`, `3188:3438`, `3188:3474`, `3188:3507`)
- Skill: `figma:figma-design-to-code`

**Done when**:

- [x] All 5 sections compared; each difference above 2px or any wrong color/text/asset is listed with cause and proposed fix
- [x] Every visible static asset checked: non-empty file, correct slot, correct callsite, correct rendered size
- [x] No text on the page is absent from the manifest and no manifest text is missing on the page (items 6 of the FAQ excepted, see T17)
- [x] Gate check passes: `pnpm build`
- [x] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: build

**Commit**: `docs(videos): record figma fidelity check`

---

### T16: Add SEO meta (BLOCKED by Q5)

**What**: Add `useSeoMeta` (`title`, `description`, `ogTitle`, `ogDescription`) to the page with the values decided in the SEO/content step.
**Where**: `app/pages/assista-os-videos-do-subsee-on.vue` (modify)
**Depends on**: T13
**Reuses**: `useSeoMeta` block of `app/pages/eventos.vue`
**Requirement**: AVS-13

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [ ] **Not executable until the user provides or approves the title and description (Q5)**
- [ ] The four meta fields are set with those exact values and appear in the rendered `<head>`
- [ ] Gate check passes: `pnpm build`
- [ ] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(videos): add seo meta`

---

### T17: Add FAQ question 6 (BLOCKED by Q4)

**What**: Add "Posso sugerir temas para novos vídeos?" to the FAQ array with the answer text supplied by the user.
**Where**: `app/components/sections/VideosFaq.vue` (modify)
**Depends on**: T12
**Reuses**: The array already in `VideosFaq.vue`
**Requirement**: AVS-10

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [ ] **Not executable until the answer text exists (Q4)**; no answer is invented
- [ ] The question and the supplied answer are the 6th item, using the same accordion behavior
- [ ] The manifest row for item 6 is updated with the source of the answer
- [ ] Gate check passes: `pnpm build`
- [ ] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(videos): add faq question six`

---

### T18: Replace the provisional links with the real destinations (BLOCKED by Q1, Q2, Q3)

**What**: Replace every use of `videosFallbackUrl` with the confirmed destinations (and, if decided in Q1, add the chosen playback behavior), then remove the fallback constant.
**Where**: `app/data/videos.ts` (modify; the consuming sections are edited in the same commit)
**Depends on**: T8, T9, T10, T11
**Reuses**: The typed arrays in `VideosDemo.vue` and `VideosProfiles.vue`
**Requirement**: AVS-07

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [ ] **Not executable until Q1 (video URLs/IDs, titles, durations, playback behavior), Q2 (profile-link destinations) and Q3 (App SUBSEE destination) are answered**
- [ ] Each card and button points to its confirmed destination; the manifest no longer marks any link or duration as unconfirmed
- [ ] `videosFallbackUrl` no longer exists in the repo
- [ ] Gate check passes: `pnpm build`
- [ ] Test count: n/a ([[AD-002]])

**Tests**: none
**Gate**: quick

**Commit**: `feat(videos): use confirmed video and cta destinations`

---

## Pending decisions (explicitly registered; none is invented)

| ID | Question | Blocks | Provisional state |
| --- | --- | --- | --- |
| Q1 | Real videos (URL/ID, titles, durations) and playback behavior (inline embed/modal or link) | T18; content of the Featured and Demo cards | Figma text is used as-is; links use the provisional fallback; no player |
| Q2 | Destinations of the three "Ver vídeos →" links | T18 | Provisional fallback |
| Q3 | Destination of "Veja mais no App SUBSEE →" | T18 | Provisional fallback |
| Q4 | Answer text of FAQ question 6 | T17 | Item not rendered |
| Q5 | SEO title and description | T16 | Decided in the SEO/content step; page has no `useSeoMeta` values until then |
| Q6 | Behavior of the Home "Assista os vídeos do SUBSEE on" button once it points to the new route (same tab or new tab) | Updating `HeroMain.vue:83-88`, which is **outside this feature** | Button untouched |

---

## Phase Execution Map

```
Phase 1 → Phase 2 → Phase 3 → Phase 4   (Phase 5 blocked)
```

- Phase 1: T1, T2, T3, T4, T5
- Phase 2: T6, T7, T8
- Phase 3: T9, T10, T11, T12
- Phase 4: T13, T14, T15
- Phase 5 (blocked): T16, T17, T18

Execution is strictly sequential — there is no intra-phase parallelism. Batch 1 = Phases 1 and 2 (T1 to T8); Batch 2 = Phases 3 and 4 (T9 to T15).

---

## Task Granularity Check

| Task | Scope | Status |
| --- | --- | --- |
| T1 | 1 file, 2 props | ✅ Granular |
| T2 | 1 asset export group (Hero), one folder | ✅ Granular (assets only) |
| T3 | 1 asset export group (content), one folder | ✅ Granular (assets only) |
| T4 | 1 component | ✅ Granular |
| T5 | 1 component | ✅ Granular |
| T6 | 1 constant | ✅ Granular |
| T7–T12 | 1 section component each | ✅ Granular |
| T13 | 1 page | ✅ Granular |
| T14, T15 | 1 report each | ✅ Granular |
| T16–T18 | 1 change each, blocked | ✅ Granular |

## Diagram-Definition Cross-Check

| Task | Depends On (task body) | Diagram Shows | Status |
| ---- | ---------------------- | ------------- | ------ |
| T1, T2, T3, T5, T6, T12 | None | no incoming arrow | ✅ Match |
| T4 | T3 | T3 → T4 | ✅ Match |
| T7 | T1, T2 | T1 → T7, T2 → T7 | ✅ Match |
| T8 | T4, T5, T6 | T4 → T8, T5 → T8, T6 → T8 | ✅ Match |
| T9 | T4, T5, T6 | T4 → T9, T5 → T9, T6 → T9 | ✅ Match |
| T10 | T4, T5, T6 | T4 → T10, T5 → T10, T6 → T10 | ✅ Match |
| T11 | T3, T6 | T3 → T11, T6 → T11 | ✅ Match |
| T13 | T7, T8, T9, T10, T11, T12 | T7 → T13 … T12 → T13 | ✅ Match |
| T14 | T13 | T13 → T14 | ✅ Match |
| T15 | T14 | T14 → T15 | ✅ Match |
| T16 | T13 | T13 → T16 | ✅ Match |
| T17 | T12 | T12 → T17 | ✅ Match |
| T18 | T8, T9, T10, T11 | T8 → T18 … T11 → T18 | ✅ Match |

No task depends on a task in a later phase.

---

## Test Co-location Validation

| Task | Code Layer Created/Modified | Matrix Requires | Task Says | Status |
| --- | --- | --- | --- | --- |
| T1 | Shared layout shell | none (build + HTML diff) | none | ✅ OK |
| T2, T3 | Exported assets | none | none | ✅ OK |
| T4, T5 | New ui/layout component | none | none | ✅ OK |
| T6 | Data/constants | none | none | ✅ OK |
| T7–T12 | New section component | none | none | ✅ OK |
| T13 | Page | none | none | ✅ OK |
| T14, T15 | Documentation/QA report | none | none | ✅ OK |
| T16–T18 | Page/section/data change | none | none | ✅ OK |

Every `Tests: none` matches the matrix because the project has no test runner ([[AD-002]]); the gate is `pnpm build` plus visual verification, not a deferral.

---

## Requirement Coverage

| Requirement | Tasks |
| --- | --- |
| AVS-01 | T13 |
| AVS-02 | T2, T7, T15 |
| AVS-03 | T7, T13 |
| AVS-04 | T1, T7, T15 |
| AVS-05 | T3, T4, T5, T8, T15 |
| AVS-06 | T3, T4, T5, T9, T15 |
| AVS-07 | T4, T6, T8, T9, T10, T18 |
| AVS-08 | T3, T4, T5, T10, T15 |
| AVS-09 | T3, T11, T15 |
| AVS-10 | T12, T15, T17 |
| AVS-11 | T14 |
| AVS-12 | T14 |
| AVS-13 | T16 (blocked by Q5) |
