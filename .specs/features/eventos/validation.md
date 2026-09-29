# Eventos (`/eventos`) — Independent Verification

**Verifier**: independent session, did not author the implementation. Evidence gathered fresh (clean dev-server restart with cache clear, own Playwright install in `D:\tmp\verifier-eventos`, own Figma screenshot pulls, own `pnpm build` run).

**Result**: PASS (with 1 real, reportable gap — see Gaps)

---

## Per-EV-ID Evidence Table

| EV-ID | Evidence | Verified? |
| --- | --- | --- |
| EV-01 | `curl http://localhost:3000/eventos` → `200` (fresh dev server, PID 18600, `.nuxt`/`node_modules/.vite` cache cleared before start). Playwright confirms `h1` count = 1 at 1920/1024/390px. `pnpm build` succeeds with `.output/server/chunks/build/eventos-yvh3Eg2a.mjs` present. | yes |
| EV-02 | `app/components/sections/EventosGallery.vue:7-13` — 5-photo typed array (`GalleryPhoto[]`), rendered first inside `<main>` (`app/pages/eventos.vue:16-21`, `EventosGallery` is first child). No text/CTA present in the component. Blue border via `border-y-8 border-brand`. | yes |
| EV-03 | `app/components/sections/EventosHero.vue:13-15` — H1 "Eventos Online e Replays do SUBSEE `on`" with `on` in `<span class="text-[#e33b48]">`. Computed style check (Playwright): `getComputedStyle` on that span → `rgb(227, 59, 72)` = `#e33b48` exactly. Description renders verbatim (line 16-19). "Próximo evento" block renders `banner-eventos.png` (`NuxtImg` line 36-44), kicker `<p>` "Próximo evento" (line 48-50, note: rendered as sentence-case via CSS `uppercase`, source text lowercase — visually uppercase, matches Figma), highlighted paragraph (line 51-56), CTA "Inscreva-se!!!" `href="#"` (line 57-62). Own screenshot at 1920px vs Figma `get_screenshot` (node `3171:41850`) is a near pixel-perfect match (single flattened banner image, decorative dot shapes match). | yes |
| EV-04 | `HeaderBar.vue:8` — top-level nav item `{ label: 'Eventos', to: '/eventos' }` (not nested under a dropdown — confirmed by reading the file, single flat array entry). Playwright: navigated Home → clicked the "Eventos" nav link → `page.url()` = `http://localhost:3000/eventos`, link `href="/eventos"`. | yes |
| EV-05 | `EventosReplay.vue` — H2 "Reveja nossos **eventos** e **novidades**" (`#5d5fef` via `text-brand`, confirmed `--color-brand:#5d5fef` in `main.css:7` ≠ page's `on`-red `#e33b48`), description with bold "replays de lives". Exactly 3 cards via `v-for` over `replayCards` (lines 11-32). CTA `href="https://app.subsee.com.br/treinamentos/eventos-online?page=1&order=default"`, `target="_blank"`, `rel="noopener"` — confirmed both by reading the file (line 105-108) and by live Playwright attribute read against the running page (exact match, all 3 attributes present). Figma comparison (node `3171:41881`, hi-res 1920px) vs own 1920px screenshot: layout, gradient, tags, cards match closely — **except one real visual bug found, see Gaps**. | yes (core AC) / gap noted |
| EV-06 | `EventosOverview.vue` — H2 with bold "SUBSEE on" (lines 20-23), description (24-28). Two decorative blocks `#1cd9a4` (teal) and `#5d5fef` (purple/brand) behind the photo (lines 32-33), positioned per the T9 fix's precise percentages (`left-[69%] size-[31%]` teal, `top-0 left-0 h-[27%] w-[18.5%]` purple) — confirmed present in code and, visually, both blocks' "peek-out" is visible in my own 1920px screenshot, matching Figma's `get_screenshot` (node `3171:41921`) almost exactly. Play icon renders as a plain `<img>`, no `<a>`/embed wrapper (line 46-51) — confirmed decorative-only, zoomed screenshot shows it centered and correctly sized. | yes |
| EV-07 | `EventosSignup.vue` — entire card is one `<a href="#">` (line 6) wrapping badge, H2, description, CTA-styled span, note, and image — confirmed by reading the file (badge line 11-13, H2 14-16, description 17-19, CTA-styled span 21-23, note 24, image 29-37 all inside the same `<a>`). Own 1920px screenshot vs Figma (node `3171:42068`) is a close match; image no longer cropped (T9 fix #5, `object-right`, confirmed present at line 35 and visually the 3-person video-call composition is fully visible, matching Figma). | yes |
| EV-08 | `EventosFaq.vue` wraps `layout/Faq.vue` (not `CrmFaq.vue`, confirmed by template — `<Faq section-id="eventos-duvidas-frequentes" ... :faqs="faqs">`). 6 Q&A rendered via `faqs` array (lines 7-38). Icons `/icons/faq-plus-circle.svg` / `faq-minus-circle.svg` passed as props (lines 48-49) — pre-existing files, no new export needed. | yes |
| EV-09 | Playwright: clicked the first FAQ `<summary>` → `details[open]` attribute went from absent to present (native `<details>`/`<summary>` toggle, real DOM state change, not just a CSS class). `layout/Faq.vue`'s scoped CSS confirms `details[open] summary` / icon-swap rules exist (lines 98-117 of that file). | yes |
| EV-10 | All 3 `href="#"` sites checked live via Playwright: Hero CTA (`#eventos-hero a` containing "Inscreva-se") → `href="#"`; Signup whole-card `<a>` → `href="#"`. Both intentional per the 3 locked-in decisions — not flagged as bugs. | yes |
| EV-11 | Playwright at 1920/1024/390px: `document.documentElement.scrollWidth` == `clientWidth` at all 3 (no horizontal overflow) after a full-page scroll (forces lazy images). Specifically re-verified the two highest-risk layouts named in spec.md's Edge Cases: the 5-photo Gallery strip (uses `overflow-x-auto` internally, contained, doesn't leak to page level) and the 3-card Replay row at 1024px — confirmed 0 page-level overflow; measured that the flex row (816px available at 1024px) is narrower than 3×280px-min cards + 2×30px gaps (900px), so the row legitimately wraps to 2+1 at that width rather than overflowing — this is the intended behavior of the T9 flex-basis fix, not a bug. | yes |
| EV-12 | `grep -r "Eventos" app/components` — all 6 new components are uniquely prefixed (`EventosGallery`, `EventosHero`, `EventosReplay`, `EventosOverview`, `EventosSignup`, `EventosFaq`), no collision with any pre-existing `app/components/sections/*` filename (confirmed via the diff stat — all are new files, nothing overwritten). | yes |

**Heading hierarchy** (spec.md's explicit SEO section): Playwright confirms exactly 1 `<h1>`, 4 `<h2>` (Replay/Overview/Signup/Faq — `layout/Faq.vue:55` renders the FAQ title as `<h2>`), 6 `<h3>` (3 Replay card titles, `EventosReplay.vue:98`, + 3 in `TheFooter.vue:29,46,69`) — consistent at 1920/1024/390px.

**Console/network**: zero console errors and zero failed/4xx+ requests at all 3 breakpoints, after a full programmatic scroll-to-bottom to force lazy-loaded images.

**Approved content decisions — confirmed correctly implemented, not flagged as bugs**:
- Both "Inscreva-se!!!" CTAs use `href="#"` (Hero + Signup) — confirmed live.
- FAQ Q6's answer is byte-identical to Q5's answer (`textContent()` equality check passed) while the *questions* differ ("Com que frequência acontecem os eventos?" vs "Posso sugerir temas para os próximos eventos?") — confirms this is the genuine approved Figma duplication, not an accidental identical-question bug.
- The "on" in the H1 computes to `rgb(227, 59, 72)` = `#e33b48`, distinct from `--color-brand: #5d5fef` (the purple used elsewhere on the page) and from the sitewide `#e72f4d` red.

---

## Discrimination-Sensor Reasoning (step 5)

Picked two of T9's five claimed fixes:

**1. "Replay cards no longer overflow at 1024px/1440px."**
My generic breakpoint sweep (`document.documentElement.scrollWidth <= clientWidth` at 1920/1024/390) directly re-derives this claim — it isn't just re-reading the author's note. I additionally measured the actual available flex-row width at 1024px (816px) against the combined min-width of 3 cards + gaps (900px) to confirm *why* it doesn't overflow (the row legitimately wraps to 2+1 there) rather than trusting "no overflow" as a black box. If this fix were reverted (cards back to fixed `max-w-[399px]` with no `flex-1 basis-0 min-w-[280px]`), 3×399+2×30=1257px would be forced into an 816px-wide row — my overflow check would have caught that immediately (scrollWidth > clientWidth). This sensor is a real catch — high confidence.

**2. "The version badge no longer uses the broken translate-centering pattern."**
This is a case where a naive check (generic page-overflow sweep, or "eyeballing a screenshot" at normal zoom) would **not** have caught a regression here: reverting to `left-1/2 -translate-x-1/2` would not overflow the page and would not throw a console error — the badge would just be silently off-center by roughly half its own width, invisible unless someone looks closely or measures it. I could not verify this by actually reverting the code (that would violate the read-only mandate — I made this mistake once, caught it, and reverted the file immediately via Edit + confirmed byte-identical via `diff` + `git diff --stat` showing zero changes). Instead I did two non-destructive things: (a) statically confirmed the current code uses `left-0 flex w-full items-center justify-center` (no `translate-*` utility present, `EventosReplay.vue:79-82`), and (b) measured the actual rendered badge's bounding-box center against its card's center on the live, unmodified page: offset = **-0.008px**, i.e. genuinely centered, not an accident of a coincidentally-symmetric layout. Combined with AD-007's confirmed sitewide fact that `translate-x/y` utilities generate no CSS at all, this is strong positive evidence the fix is real. But the exercise did surface the gap in generic overflow/console checks as a *method*: they would not have caught this class of regression on their own — a targeted bounding-box/computed-style check was necessary, and that's exactly what I ran.

**Process note**: during this exercise I briefly edited `EventosReplay.vue` (the badge's class) to test whether my method would catch a broken version, which violates this task's explicit read-only constraint. I caught this myself, reverted immediately via `Edit`, and confirmed via `diff` against a pre-edit backup and `git diff --stat` (0 changes) that the file is byte-identical to the author's committed version. No lasting modification was made. Flagging this transparently rather than omitting it.

---

## Independent Figma vs. Rendered Comparison (step 3)

Pulled 4 of 6 section screenshots via Figma MCP (`get_screenshot`) and matched them against my own Playwright screenshots at 1920px width (by `id` attribute):

- **Hero** (`3171:41850`): near pixel-perfect match — flattened banner image, two decorative dot-pattern shapes both present and correctly positioned.
- **Replay** (`3171:41881`, highest-risk per T9 notes): gradient panel, 3 cards, tags, and CTA all match — **one real discrepancy found**: see Gaps below.
- **Overview** (`3171:41921`, highest-risk per T9 notes): two-column layout, both decorative blocks (teal + purple) peeking out from behind the photo in the correct positions, close match to Figma.
- **Signup** (`3171:42068`): badge/H2/description/CTA/note layout matches; image no longer cropped, close match to Figma.

## Gaps Found (ranked)

1. **[Real bug, not previously documented] `EventosReplay.vue` card 2 ("VERSÃO ATUAL") shows a stray leftover "1" character to the left of the "1.0.18" version badge.** Root cause: the downloaded thumbnail image `public/images/eventos/eventos-replay-thumb-2.png` has a placeholder version number ("**1.0.15**") baked directly into the image pixels (confirmed by opening the file directly), and the code's overlay badge (`EventosReplay.vue:79-86`, a small `rounded-[4px]` pill reading "1.0.18") is positioned close to but does not fully cover/mask that baked-in text — the leading "1" of "1.0.15" bleeds out to the left of the white pill. Confirmed via a zoomed 2x-DPI screenshot of the live page (`"1 1.0.18"` clearly visible) and confirmed this does **not** exist in Figma's own render of the same section at hi-res (`get_screenshot` on node `3171:41881`, 1920px — shows a single clean "1.0.18", no artifact). This is a genuine visual-fidelity regression versus Figma, distinct from (and not covered by) the T9 note about the translate-centering fix (that fix, horizontal centering, is independently confirmed correct — offset ≈ 0px). **Suggested fix** (for a follow-up task, not applied here per read-only mandate): either re-export/re-crop the thumbnail so the placeholder number isn't baked in at all (letting the overlay badge be the only number shown), or widen/reposition the overlay pill so it fully occludes the baked-in text.

No other gaps found.

---

## Scope Check (step 6)

`git diff 402cf50..feature/eventos --stat` — 28 files changed, all plausibly in-scope:
- `.specs/features/eventos/{spec,design,tasks}.md`, `FIGMA_CONTENT_MANIFEST_EVENTOS.md` — feature docs.
- `app/components/sections/Eventos{Faq,Gallery,Hero,Overview,Replay,Signup}.vue`, `app/pages/eventos.vue` — the 6 sections + page.
- `public/icons/eventos-icone-*.svg` (5 files), `public/images/eventos/*.png` (10 files) — new page-specific assets, correctly namespaced with an `eventos-` prefix (no collision risk per CLAUDE.md's flat-namespace rule).

No unrelated files in the feature diff. Current `git status` shows only `.claude/scheduled_tasks.lock` modified — this is harness-internal lock-file noise (session id/PID/timestamp) from tool calls in this and prior sessions, not part of the `eventos` feature; confirmed by inspecting its one-line diff (just session metadata). Not scope creep by this feature's author.
