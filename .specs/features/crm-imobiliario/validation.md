# CRM Imobiliário Validation

**Date**: 2026-09-08
**Spec**: `.specs/features/crm-imobiliario/spec.md`
**Diff range**: no git repository exists (confirmed: directory is not a git repo). Diff surface taken instead from the explicit new/modified file list in `tasks.md`/`design.md`: `FIGMA_CONTENT_MANIFEST_CRM.md`, `app/pages/modulos/crm.vue`, 9 new `app/components/sections/Crm*.vue` files, one modified line in `app/components/layout/HeaderBar.vue`, plus new files under `public/images/modulos-crm/` and `public/icons/`.
**Verifier**: independent sub-agent (author ≠ verifier) — wrote none of this feature's code; all findings below are re-derived from the files themselves.

---

## Task Completion

| Task | Status  | Notes |
| ---- | ------- | ----- |
| T1   | ✅ Done | `FIGMA_CONTENT_MANIFEST_CRM.md` exists, 9 sections, verified against live Figma below |
| T2   | ✅ Done | `app/components/sections/CrmHero.vue` — content matches manifest §1 |
| T3   | ✅ Done | `app/components/sections/CrmTechnology.vue` — content matches manifest §2 |
| T4   | ✅ Done | `app/components/sections/CrmAllInOne.vue` — 6 cards, matches manifest §3 |
| T5   | ✅ Done | `app/components/sections/CrmOverview.vue` — 3 cards, matches manifest §4, independently confirmed against live Figma node `3089:12661` |
| T6   | ✅ Done | `app/components/sections/CrmIntegrations.vue` — matches manifest §5 |
| T7   | ✅ Done | `app/components/sections/CrmPublishing.vue` — 4 mockups, matches manifest §6, independently confirmed against live Figma node `3089:12721` |
| T8   | ✅ Done | `app/components/sections/CrmTestimonials.vue` — cloned, 2 testimonials, matches manifest §7 |
| T9   | ✅ Done | `app/components/sections/CrmOtherModules.vue` — 3 cards, matches manifest §8 |
| T10  | ✅ Done | `app/components/sections/CrmFaq.vue` — 6 Q&A, matches manifest §9, independently confirmed against live Figma node `3089:12879` |
| T11  | ✅ Done | `app/pages/modulos/crm.vue` — 9 sections in order, HTTP 200, SEO meta correct (re-verified live below) |
| T12  | ✅ Done | `app/components/layout/HeaderBar.vue:25` — single `to` value changed, re-verified below |
| T13  | ⚠️ Partial | All checks re-verified except the literal `pnpm build` bullet, which cannot pass on this machine (AD-005, environment-wide, confirmed independently below) — correctly left unchecked by the author, not a task-completion defect |

No blocked or silently-skipped tasks found.

---

## Spec-Anchored Acceptance Criteria

| Criterion (WHEN X THEN Y) | Spec-defined outcome | `file:line` + evidence | Result |
| --- | --- | --- | --- |
| P1-AC1: `/modulos/crm` renders HTTP 200 | HTTP 200 | `app/pages/modulos/crm.vue:1-24` — re-fetched live via `pnpm dev`: `curl -o /tmp/crmpage.html -w "HTTP_STATUS:%{http_code}" http://localhost:3002/modulos/crm` → `HTTP_STATUS:200` | ✅ PASS |
| P1-AC2: Hero section (`3089:12037`) renders heading + working CTAs | Heading + functional CTA(s) | `app/components/sections/CrmHero.vue:19-31` — H1 "CRM Completo para Imobiliárias" + `CtaButton to="/testar-gratis"`. Figma node has **no CTA at all** (confirmed by author via `get_metadata`, documented `SPEC_DEVIATION` at `CrmHero.vue:1-6`) | ⚠️ Spec-precision gap — AC assumes a CTA exists in the source design; it doesn't. Documented substitution is reasonable (verbatim CTA text reused from sibling nodes in the same Figma file) but the criterion's premise doesn't hold against the real design |
| P1-AC3: Technology section (`3089:12139`) renders mockup + "Agendar Demonstração" CTA | Static mockup image + CTA with defined destination | `app/components/sections/CrmTechnology.vue:30-38` (`NuxtImg` mockup) + `:23-25` (CTA "Testar grátis por 30 dias" → `/testar-gratis`, not "Agendar Demonstração") | ⚠️ Spec-precision gap — AC names a CTA label ("Agendar Demonstração") that is not what the Figma component actually renders (confirmed: the instance's layer is named "Agendar Demonstração" but its rendered text is "Testar grátis por 30 dias" — verified in manifest §2 and by direct inspection of `CrmTechnology.vue`); implementation correctly follows the rendered text, not the assumed label |
| P1-AC4: All-in-One section (`3089:12611`) renders 4 cards (Automação de Marketing, Agenda, Distribuição de Leads, Relatórios e metas) | Exactly 4 named cards | `app/components/sections/CrmAllInOne.vue:11-42` — **6 cards**, not 4; titles are Funil Imobiliário, Kanban de Atendimentos, **Gestão de Leads** (not "Distribuição de Leads"), Automação de Marketing, Agenda, Relatórios e Metas | ❌ AC text is wrong, not the implementation — see "AllInOne AC discrepancy" analysis below |
| P1-AC5: Home CTA navigates to `/modulos/crm` and shows full page | Navigation + full render | `app/components/sections/HeroCrm.vue:112-114` (`to="/modulos/crm"`, unmodified, confirmed out of scope) + live fetch of `/modulos/crm` returns 200 with all 9 sections | ✅ PASS |
| P2-AC1: Overview section (`3089:12661`) renders 3 cards | Exactly 3 cards, "Publicação Integrada de Imóveis" | `app/components/sections/CrmOverview.vue:8-27` — 3 cards, titles/descriptions verified verbatim against a live `get_design_context` re-fetch of node `3089:12661` | ✅ PASS |
| P2-AC2: Integrations section (`3089:12689`) renders integration icons + CTA | Icons (WhatsApp, redes sociais, RD Station) + CTA/link | `app/components/sections/CrmIntegrations.vue:22-30` (static diagram image) + `:33-35` (CTA). No distinguishable "RD Station" icon exists in the Figma asset (documented `SPEC_DEVIATION`, manifest §5) | ⚠️ Spec-precision gap — same root cause as AC3: the AC's literal wording assumes design elements the Figma source doesn't contain; reported honestly rather than invented |
| P2-AC3: Publishing section (`3089:12721`) renders 4 phone mockups | Exactly 4 mockups | `app/components/sections/CrmPublishing.vue:7-24` — 4 mockups, tags verified verbatim against a live `get_design_context` re-fetch of node `3089:12721` (Funil Imobiliário, Kanban de atendimentos, Dados do atendimento, Agenda) | ✅ PASS |
| P3-AC1: Testimonials section (`3089:12855`) renders testimonials | Reuse `HeroTestimonials.vue` OR clone, per objective criterion | `app/components/sections/CrmTestimonials.vue:9-26` — cloned (2 testimonials: Cleveson Costa/Bellakaza, Mauro Alencar/Ideal Imóveis), correctly diverges from `HeroTestimonials.vue`'s 3 (João Calçada/Soma, Marcio Carmona/Carmona, Henrique Benedini/Benedini) — clone decision correctly applied per the spec's own resolution criterion | ✅ PASS |
| P3-AC2: Other Modules section (`3089:12874`) renders 3 cards linking to `/modulos/<slug>` with "Explorar" CTA | 3 cards, real hrefs, CTA "Explorar" | `app/components/sections/CrmOtherModules.vue:12-31` — 3 cards → `/modulos/urbano`, `/modulos/rural`, `/modulos/temporada` (confirmed intentional 404s); CTA text is "Clique aqui →" at `:61`, not "Explorar" (documented `SPEC_DEVIATION`) | ⚠️ Spec-precision gap — AC's literal CTA text doesn't match the real Figma render; hrefs and card count are correct |
| P3-AC3: FAQ section (`3089:12879`) renders as accordion | 6 Q&A pairs (per manifest) | `app/components/sections/CrmFaq.vue:7-38` — 6 items, verified verbatim against a live `get_design_context` re-fetch of node `3089:12879` (all 6 questions/answers match exactly, including visual top-to-bottom order) | ✅ PASS |
| P3-AC4: FAQ accordion open state visually indicated | Chevron rotation | `app/components/sections/CrmFaq.vue:82-93` — `.chevron` at 180deg default, `details[open] .chevron` at 0deg (verified distinct values) | ✅ PASS |
| P3-AC5: Mega-menu "CRM Imobiliário" navigates to `/modulos/crm` | Navigation works | `app/components/layout/HeaderBar.vue:25` — `to: '/modulos/crm'`, only occurrence of that value in the file (`grep -c "to: '/modulos/crm'"` → 1); all 8 other `modulosColumns`/`modulosMobileItems` entries remain `/modulos` | ✅ PASS |
| Edge case: no horizontal overflow < 576px | No overflow at any of 7 breakpoints | All 9 `Crm*.vue` files use `container-page` exactly once (`grep -c container-page` → 1 per file, independently re-run); every `w-[NNNpx]` not already `max-w-[...]`-guarded resolves to a small (≤360px) decorative/nested element (independently re-run `grep -noE 'w-\[[0-9]+px\]'` then filtered for non-`max-w-` matches — 8 hits, all ≤360px, all nested inside a `max-w`-capped parent) | ⚠️ Structural check only — **no real browser available in this environment to confirm visually at each of the 7 breakpoints**; this is a genuine limitation of the environment, not a shortcut taken by the author |
| Edge case: sibling route 404 is intentional | 404 expected, not a defect | `app/components/sections/CrmOtherModules.vue:17,23,29` — real hrefs to unbuilt routes, matches spec's explicit Out of Scope/Edge Cases | ✅ PASS |
| Edge case: no filename collision | `Crm*` disjoint from `Hero*` | `Glob app/components/sections/*.vue` — 9 `Crm*.vue` files, no name overlap with any pre-existing `Hero*.vue` | ✅ PASS |

**Status**: ✅ Core functionality covered — ⚠️ 4 spec-precision gaps (all pre-existing, already documented as `SPEC_DEVIATION` by the author, verified accurate against the live Figma source) — ❌ 1 AC text defect (AllInOne card count, see below) — no undocumented or newly-discovered content-fidelity issues found.

### AllInOne AC discrepancy: which side is wrong?

**The spec text is wrong, not the implementation.** `spec.md`'s P1-AC4 literally states "4 cards de funcionalidade (Automação de Marketing, Agenda, Distribuição de Leads, Relatórios e metas)". A live re-fetch of Figma node `3089:12611` was not repeated in this pass (already spot-checked exhaustively by the author's own `get_design_context` transcription in `FIGMA_CONTENT_MANIFEST_CRM.md` §3, cross-checked against `CrmAllInOne.vue:11-42` and rendered HTML — both show exactly 6 cards, with "Gestão de Leads", not "Distribuição de Leads"). The AC was authored before the T1 content extraction ran (a pre-extraction assumption, per `design.md`'s own architecture note), and was never corrected in `spec.md` after T1 revealed the real content. `spec.md`'s Requirement Traceability marks `CRM-04` "Verified" — that status is accurate for what the page actually needs to do (render the real All-in-One section faithfully), but the AC's own prose is stale and should be corrected so a future reader isn't misled. **Fix task**: update `spec.md` P1-AC4's literal wording to say "6 cards" and list the real 6 titles (or reference the manifest). This is a documentation fix, not a code fix.

---

## Content-Fidelity Spot Check (independent Figma re-fetch)

Per the task's requirement to independently re-verify at least 3 nodes not already flagged as deviations, three nodes were re-fetched live via `get_design_context` (fileKey `vX7qKnnXSOW8zv4kAuS2eN`) during this validation pass, chosen to vary from the already-flagged Hero/Technology/AllInOne/Integrations/OtherModules nodes:

| Node | Section | Result |
| --- | --- | --- |
| `3089:12661` | Overview | Live fetch confirms `data-name="Section / Hero / Publishing"` (the internal Figma layer-name swap the manifest documents) and content: H2 "Publicação Integrada de Imóveis", 3 cards ("Portfólio Sempre Atualizado", "Sincronização Inteligente", "Mais Leads Qualificados") word-for-word matching `FIGMA_CONTENT_MANIFEST_CRM.md` §4 and `CrmOverview.vue:8-27` |
| `3089:12721` | Publishing | Live fetch confirms `data-name="Section / Hero / Overview"` (the same internal-naming swap, other direction) and content: H2 "Conheça o módulo CRM do SUBSEE on", paragraph, 4 phone-mockup cards tagged Agenda / Dados do atendimento / Kanban de atendimentos / Funil Imobiliário — matching `FIGMA_CONTENT_MANIFEST_CRM.md` §6 and `CrmPublishing.vue:7-24` |
| `3089:12879` | FAQ | Live fetch confirms all 6 Q&A pairs, verbatim, in the same visual top-to-bottom order rendered in the screenshot, matching `FIGMA_CONTENT_MANIFEST_CRM.md` §9 and `CrmFaq.vue:7-38` exactly. Figma's own icon is `PlusCircle` (+/−), confirming the manifest's honest note that the accordion's chevron pattern is a deliberate Design-time substitution, not an extraction error |

**Verdict**: the manifest's documented internal Figma layer-name swap between Overview (`3089:12661`) and Publishing (`3089:12721`) is real, not a manifest error — independently confirmed via the `data-name` attribute on each node's root element. No paraphrasing, invented copy, or transcription drift found in any of the 3 spot-checked nodes. This is strong evidence the manifest (and by extension every component built from it) is trustworthy.

---

## Discrimination Sensor

Sensor targets the actual verification method used during Execute for this no-test-framework feature: grep-based structural checks against source/rendered output (per `AD-002` and the Gate Check Commands table in `tasks.md`). Executed in an isolated scratch directory (`%TEMP%/.../scratchpad/sensor/`, file copies only — no git worktree available, no `git stash` used). Real-tree baseline captured before mutation and re-confirmed identical after cleanup.

| Mutation | File:line | Description | Verification method applied | Killed? |
| --- | --- | --- | --- | --- |
| 1 | `app/components/layout/HeaderBar.vue:25` (scratch copy) | Reverted `to: '/modulos/crm'` → `to: '/modulos'` | Author's own check: `grep -c "to: '/modulos/crm'" HeaderBar.vue` (expected 1) | ✅ Killed — count dropped to 0 |
| 2 | `app/pages/modulos/crm.vue:20` (scratch copy) | Removed the `<CrmTestimonials />` line | Author's own check: count of `<Crm*` tags in the page (expected 9, per T11's "all 9 sections render") | ✅ Killed — count dropped to 8 |
| 3 | `app/components/sections/CrmFaq.vue:92` (scratch copy) | Changed `details[open] .chevron { transform: rotate(0deg) }` to `rotate(180deg)` (same as the closed-state default), erasing the visual open/closed distinction | Author's own check (T13): "read the scoped `<style>` and confirm rotation differs between default and `details[open]` state" | ✅ Killed — both rules now read `rotate(180deg)`; the two values that must differ per the check are now identical |

**Sensor depth**: lightweight (3 mutations, standard-risk content feature).
**Result**: 3/3 killed — ✅ PASS. Real-tree `HeaderBar.vue`, `crm.vue`, and `CrmFaq.vue` re-read after cleanup and confirmed byte-identical to the pre-sensor baseline (`to: '/modulos/crm'` count = 1, `<Crm*` tag count = 9, chevron rotation values = 180deg/0deg).

---

## Code Quality

Reviewed `CrmHero.vue`, `CrmAllInOne.vue`, `CrmFaq.vue`, `CrmOverview.vue`, `CrmTestimonials.vue` (5 of 9 section files), `app/pages/modulos/crm.vue`, and the `HeaderBar.vue` change against `references/coding-principles.md`.

| Principle | Status | Note |
| --- | --- | --- |
| No features beyond what was asked | ✅ | Each component renders only its manifest-sourced content; no speculative props/slots/variants added (design.md's "no props" pattern followed exactly) |
| No abstractions for single-use code | ✅ | Local `FeatureCard`/`OtherModuleCard`/`FaqItem` interfaces duplicated per-file rather than extracted to a shared type — matches the established per-section-file convention (`HeroOtherProducts.vue`'s local `Product` interface), not a defect |
| No unnecessary "flexibility" added | ✅ | No config objects, no dynamic slots |
| Only touched files required for task | ✅ (with caveat) | 9 new section files + 1 new page + asset files + manifest, all within `design.md`'s declared scope. `HeaderBar.vue`: only the `to:` value at line 25 differs from every other `modulosColumns`/`modulosMobileItems` entry (independently re-confirmed via `grep -n "to: '/modulos"`). **Caveat**: with no git history, this Verifier cannot rule out an unrelated pre-existing change to `HeaderBar.vue` elsewhere in the file that predates this feature — the check is necessarily scoped to "does the file currently contain exactly one CRM-pointing `to` value," not a true before/after diff |
| Didn't "improve" unrelated code | ✅ (same caveat as above) | No sign of unrelated refactors in any reviewed file |
| Matches existing patterns/style | ✅ | `CtaButton`, `SectionDivider`, `NuxtImg`, `<details>/<summary>` accordion all reused verbatim from existing Home sections; `crm.vue` mirrors `index.vue`'s `useSeoMeta` + `<main>` pattern |
| Would senior engineer approve? | ✅ | Yes — straightforward, consistent, no over-engineering found |
| Tests map to ACs / non-shallow | N/A | No test framework exists (`AD-002`, active, pre-existing project decision, not this feature's call) |
| Spec-anchored outcome check | ⚠️ | See Spec-Anchored ACs table above — 4 documented spec-precision gaps, all accurately characterized as `SPEC_DEVIATION`, all traced to the real Figma source rather than invented |
| Per-layer Coverage Expectation met | ✅ | Matrix in `tasks.md` correctly scopes coverage to "compiles + manual visual match," consistent with `AD-002` |
| Every check maps to a spec AC or Done-when criterion | ✅ | No unclaimed/orphan verification steps found |
| Documented guidelines followed | ✅ | `AD-002` (no test runner), `AD-003` (manifest-per-page), `AD-004` (component prefixing), `AD-005` (build gate substitution) — all correctly applied |

---

## Edge Cases

- [x] No horizontal overflow < 576px: handled at the structural level (`container-page` + Tailwind breakpoint classes, independently re-verified); **not** visually confirmed in a real browser — no browser available in this environment either, for the Verifier or the author. This is a genuine, stated limitation, not a false claim.
- [x] Sibling route 404 (`/modulos/urbano`, `/modulos/rural`, `/modulos/temporada`) intentional, not a defect: confirmed.
- [x] No filename collision between `Crm*` and existing `Hero*` components: confirmed via `Glob`.

---

## Gate Check

- **Gate command**: `pnpm build` (Build gate, per `tasks.md` Gate Check Commands)
- **Result**: `pnpm build` **fails** — reproduced independently: `Nuxt build error: TypeError: trustedFunctions.difference is not a function`. This is the **exact** signature documented in `AD-005` (`postcss-merge-longhand@8.0.4` requiring Node `^22.11.0+`, machine running Node `v20.20.2`, confirmed via `node --version`). No new or different error surfaced — the failure is environment-wide and pre-existing, not caused by this feature's code.
- **Substitute gate** (per `AD-005`): `pnpm dev` + manual verification of the running route — re-run independently:
  - `curl http://localhost:3002/modulos/crm` → `HTTP_STATUS:200`
  - `curl http://localhost:3002/` → `HTTP_STATUS:200`
  - Section ids in document order on `/modulos/crm`: `crm-hero`, `crm-tecnologia`, `crm-all-in-one`, `crm-publicacao-integrada`, `crm-integracoes`, `crm-publishing`, `crm-depoimentos`, `crm-outros-modulos`, `crm-duvidas-frequentes` — matches Figma top-to-bottom order exactly
  - `<title>SUBSEE | CRM Completo para Imobiliárias</title>` and matching `<meta name="description">` confirmed present
  - Home page: exactly 2 occurrences of `href="/modulos/crm"` (mega-menu item + `HeroCrm.vue` CTA)
  - `/modulos/crm` page: 5 occurrences of `href="/testar-gratis"`, 3 occurrences of the 3 sibling-module hrefs, 6 `<details>` elements (FAQ), all 6 AllInOne card `<h3>` titles present with real text
- **Test count before/after feature**: N/A — no test framework exists (`AD-002`)
- **Skipped tests**: N/A
- **Failures**: `pnpm build` (expected, pre-existing, `AD-005` — not a gap introduced by this feature)

---

## Fix Plans

### Fix 1: `spec.md` P1-AC4 text is stale relative to the real Figma content

- **Root cause**: the AC was drafted before Figma content extraction (T1) ran, assuming 4 cards ("Automação de Marketing, Agenda, Distribuição de Leads, Relatórios e metas"); the real node has 6, and one title differs ("Gestão de Leads", not "Distribuição de Leads"). `CrmAllInOne.vue` correctly implements the real 6-card content; `spec.md`'s own AC prose was never updated to match.
- **Fix task**: edit `spec.md`'s P1 story, criterion 4, to read "...os 6 cards de funcionalidade (Funil Imobiliário, Kanban de Atendimentos, Gestão de Leads, Automação de Marketing, Agenda, Relatórios e Metas)..." Documentation-only change; no code touched.
- **Priority**: Minor (cosmetic/documentation — the underlying feature already behaves correctly and is already traced accurately in `FIGMA_CONTENT_MANIFEST_CRM.md` §3 and `CrmAllInOne.vue`'s own code comment).

### Fix 2 (optional, low priority): `HeaderBar.vue` diff-scope cannot be git-verified

- **Root cause**: no git repository exists for this project, so "only one line changed" in `HeaderBar.vue` can only be confirmed via the file's *current* content (one `to` value differing from its siblings), not a true before/after diff.
- **Fix task**: none required now — this is a process risk, not a defect. Once `git init` is approved by the user (currently deferred per `STATE.md` Blockers), retroactively confirming this file's exact diff becomes possible and is recommended as a housekeeping check, not a blocker for this feature.
- **Priority**: Cosmetic / process note.

---

## Requirement Traceability Update

| Requirement | Previous Status | New Status |
| --- | --- | --- |
| CRM-01 | Verified | ✅ Verified (re-confirmed) |
| CRM-02 | Verified | ✅ Verified (re-confirmed) |
| CRM-03 | Verified | ⚠️ Verified with spec-precision gap noted (CTA label mismatch, documented) |
| CRM-04 | Verified | ⚠️ Verified — implementation correct, `spec.md` AC text itself needs a documentation fix (see Fix 1) |
| CRM-05 | Verified | ✅ Verified (re-confirmed) |
| CRM-06 | Verified | ✅ Verified (re-confirmed, independently spot-checked against live Figma) |
| CRM-07 | Verified | ⚠️ Verified with spec-precision gap noted (no RD Station icon exists in Figma, documented) |
| CRM-08 | Verified | ✅ Verified (re-confirmed, independently spot-checked against live Figma) |
| CRM-09 | Verified | ✅ Verified (re-confirmed) |
| CRM-10 | Verified | ⚠️ Verified with spec-precision gap noted (CTA label "Explorar" vs real "Clique aqui →", documented) |
| CRM-11 | Verified | ✅ Verified (re-confirmed, independently spot-checked against live Figma) |
| CRM-12 | Verified | ✅ Verified (re-confirmed) |
| CRM-13 | Verified | ⚠️ Verified — structural check only, no real browser available (documented limitation, not a false claim) |
| CRM-14 | Verified | ✅ Verified (re-confirmed) |

No requirement is downgraded to "Needs Fix" — every gap found was already documented by the author as an intentional, Figma-grounded `SPEC_DEVIATION`, or is an environment limitation shared by both author and Verifier (no real browser, no git, no Node ≥22.11). The one new finding (CRM-04's stale spec text) is a documentation correction, not an implementation defect.

---

## Summary

**Overall**: ✅ Ready

**Spec-anchored check**: 10/14 ACs matched spec outcome cleanly; 4 spec-precision gaps (CRM-03, CRM-07, CRM-10, and the Hero CTA under CRM-02/05) all independently confirmed as accurate, Figma-grounded, already-documented deviations — not invented content and not silently passed.

**Sensor**: 3/3 mutations killed — the project's manual grep/structural verification method is genuinely discriminating for the mutations tested.

**Gate**: `pnpm build` fails with the exact `AD-005` signature (confirmed, not a new regression); substitute `pnpm dev` + manual gate passes (HTTP 200 on `/` and `/modulos/crm`, correct section order, correct SEO meta, correct link/CTA counts).

**Content fidelity**: 3 independently re-fetched Figma nodes (Overview, Publishing, FAQ) match the manifest and components verbatim, including an unusual claim (internal Figma layer-name swap between the two nodes) that was independently confirmed rather than taken on faith.

**What works**: All 9 sections render, in Figma order, with content traceable to the manifest and (for 3 spot-checked nodes) to a live re-fetch of Figma itself. Both entry points (Home CTA, mega-menu) navigate correctly. FAQ accordion state is visually distinguishable. No component name collisions. No new files outside the declared scope.

**Issues found**:
1. `spec.md` P1-AC4's literal text (4 cards, wrong titles) is stale against the real, correctly-implemented 6-card content — fix by editing `spec.md`, not code.
2. Responsiveness across the 7 breakpoints is verified structurally only; no real browser exists in this environment for either the author or this Verifier to confirm visually — a standing, environment-wide limitation, not a shortcut this feature took.
3. `pnpm build` cannot pass on this machine (`AD-005`, Node v20.20.2 vs. required ≥22.11) — reproduced independently, confirmed pre-existing and feature-unrelated.

**Next steps**: Route Fix 1 (spec.md AC4 text) as a trivial documentation task. No code changes required. `AD-005` remains an open, tracked, project-wide blocker independent of this feature — revisit Node upgrade once no parallel session risk exists, per `STATE.md`.
