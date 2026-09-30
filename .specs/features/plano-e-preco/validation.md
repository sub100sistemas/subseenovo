# Plano e Preço Validation (Independent Verifier Pass)

**Spec**: `.specs/features/plano-e-preco/spec.md`
**Tasks**: `.specs/features/plano-e-preco/tasks.md`
**Verifier**: independent session, did not author this feature (author ≠ verifier per `tlc-spec-driven`)
**Verdict**: **PASS**
**Result**: PASS
**Date**: 2026-09-29

This report replaces the author's self-written `validation.md`. All evidence below was independently re-derived (own `grep`/`curl`/`git diff`/`pnpm build` runs), not copied from the author's citations. Where the author's claims proved imprecise, it is called out explicitly rather than silently corrected.

---

## Pre-flight

- `git status --porcelain` on branch `feature/plano-e-preco`: only `M .claude/scheduled_tasks.lock` (harness-internal, ignored per instructions). Tree otherwise clean — no unexpected uncommitted changes.
- Dev server confirmed already running and responsive: `curl -s -o /dev/null -w "HTTP %{http_code}" http://localhost:3000/planos-e-precos` → `HTTP 200`.

---

## Per-AC Evidence (re-derived independently)

| Req | AC (spec.md) | Independent evidence |
| --- | --- | --- |
| PEP-01 | Route resolves 200 | Own `curl` → `HTTP 200`. Own `pnpm build` (fresh run, this session) succeeded and produced `.output/server/chunks/build/planos-e-precos-lbMKgt5y.mjs` — route is genuinely built, not just present in dev. |
| PEP-02 | Title section, H1 + description | `app/components/sections/PlanoEPrecoTitle.vue:4` — `<h1 class="max-w-[740px]">Planos &amp; Preços</h1>`; `:5-8` description with `urbana`/`rural` in `<span class="text-brand">`. Rendered HTML (own curl fetch, saved to scratch dir): exactly 1 `<h1` (`grep -c "<h1"` → `1`). |
| PEP-03 | Pricing: 2 cards, price, 9 features, 2 CTAs | `PlanoEPrecoPricing.vue:32-47` (`planos` array, both entries reference the single `sharedFeatures` array at `:38` and `:45` — no duplicated/diverged content). Own curl: `R$450` appears exactly 2× in rendered HTML. |
| PEP-04 | Toggle Mensal/Anual + 12% OFF badge, visual only | `PlanoEPrecoPricing.vue:54-56` — two static `<span>`s, no `v-model`/`ref`/`computed` anywhere in the `<script setup>` block (confirmed by full read of lines 1-48 — zero reactive declarations touch price or toggle state). Badge at `:58-64` uses `inset-y-0 ... my-auto` — no `translate-*`. |
| PEP-05 | Features: 9 categories, all marked included both plans | `PlanoEPrecoFeatures.vue:20-78` — counted the `allIncluded(...)` calls myself: 9 calls, argument-array lengths 3,8,9,6,7,2,2,4,4 → sums to 45, matching manifest's 45-row claim. Own curl: 9 category `<h3>` titles present verbatim (spot-checked "Gestão Imobiliária e Cadastros", "Plugin para WhatsApp", "Treinamentos e Evolução" — the two commonly-confused ones per the manifest's naming-collision note). |
| PEP-06 | Ocultar/Ver todas toggle is functional | `PlanoEPrecoFeatures.vue:80` (`const tabelaVisivel = ref(true)`), `:111` (`v-show="tabelaVisivel"`), `:153` (`@click="tabelaVisivel = !tabelaVisivel"`), `:155` (`{{ tabelaVisivel ? 'Ocultar as funcionalidades' : 'Ver todas as funcionalidades' }}`). This is a real bound ref driving both the label and the visibility — not a static/decorative button. **Caveat shared with the author**: actually clicking it requires client-side JS execution, which is unavailable in this environment (no Playwright/browser). Verified by code reading only, same limitation as the author's own pass. |
| PEP-07 | Opcionais: 3 rows, matching prices both columns | `PlanoEPrecoOpcionais.vue:8-12`. Own curl: "R$ 100,00" ×2, "R$ 1.200,00" ×2, ">Consulte<" ×2 — exact match, both columns identical as manifest requires. |
| PEP-08 | FAQ: 6 Q&A verbatim | `PlanoEPrecoFaq.vue:7-38` — read the full array; question 1 and question 6 spot-checked character-for-character against `FIGMA_CONTENT_MANIFEST_PLANO_E_PRECO.md` §5, verbatim match including punctuation. All 6 present, no truncation. |
| PEP-09 | FAQ expanded-state indicator | `PlanoEPrecoFaq.vue:42` delegates to `layout/Faq.vue`'s existing `<details>/<summary>` + CSS (already relied on by `CrmFaq.vue` elsewhere in the codebase) — no new/duplicated logic. |
| PEP-10 | Responsive, no horizontal overflow | See "Responsiveness" below. |
| PEP-11 | No naming collision | `find . -iname "PlanoEPreco*.vue"` → exactly 5 files, one per name, own count confirmed with a per-name loop (`PlanoEPrecoTitle: 1`, `PlanoEPrecoPricing: 1`, `PlanoEPrecoFeatures: 1`, `PlanoEPrecoOpcionais: 1`, `PlanoEPrecoFaq: 1`). |

---

## Content fidelity spot-checks (13 items checked against `FIGMA_CONTENT_MANIFEST_PLANO_E_PRECO.md`)

| # | Content | File:line | Manifest match |
| - | --- | --- | --- |
| 1 | H1 "Planos & Preços" | `PlanoEPrecoTitle.vue:4` | ✅ verbatim |
| 2 | Description incl. "urbana"/"rural" highlight | `PlanoEPrecoTitle.vue:6-7` | ✅ verbatim |
| 3 | Urbano card description | `PlanoEPrecoPricing.vue:35` | ✅ verbatim |
| 4 | Rural card description | `PlanoEPrecoPricing.vue:42` | ✅ verbatim |
| 5 | Price "R$450" + "/mês + opcionais" | `PlanoEPrecoPricing.vue:36-37,43-44` | ✅ verbatim, identical both plans |
| 6 | Feature item 5 with `*` marker | `PlanoEPrecoPricing.vue:25` | ✅ verbatim, marker preserved |
| 7 | Feature item 6 with `**` marker, no invented footnote | `PlanoEPrecoPricing.vue:26`, template `:100` | ✅ literal `**`, no link/tooltip |
| 8 | Features H2/description incl. preserved typo "princípios" | `PlanoEPrecoFeatures.vue:89,91` | ✅ typo intentionally kept, not "corrected" |
| 9 | 9 category titles (all) | `PlanoEPrecoFeatures.vue:21-77` | ✅ all 9 match manifest §3.1 exactly, including the two frames the manifest flags as mis-named in Figma layers ("Plugin para WhatsApp" appearing twice in layer names but rendering as "Treinamentos e Evolução" for the second) |
| 10 | Footnote `*` text | `PlanoEPrecoFeatures.vue:147-148` | ✅ verbatim ("No período gratuito de 30 dias as integrações não estão liberadas.") |
| 11 | Opcionais 3 rows + prices | `PlanoEPrecoOpcionais.vue:9-11` | ✅ verbatim |
| 12 | FAQ Q1 + A1 | `PlanoEPrecoFaq.vue:9-11` | ✅ verbatim |
| 13 | FAQ Q6 + A6 | `PlanoEPrecoFaq.vue:34-36` | ✅ verbatim |

No invented or paraphrased text found anywhere in the 5 components.

---

## The 4 approved decisions + the CTA correction (independently confirmed)

| Decision | Independent check | Result |
| --- | --- | --- |
| Route `/planos-e-precos` | File-based routing: `app/pages/planos-e-precos.vue` exists and is the only file at that path | ✅ |
| Toggle Mensal/Anual — visual only | Full read of `PlanoEPrecoPricing.vue` script block: zero `ref`/`computed`/`v-model` tied to price or toggle | ✅ |
| `**` marker kept literal, no invented footnote | `PlanoEPrecoPricing.vue:26,100` — plain text render, confirmed no second footnote line exists anywhere in the 5 files (`grep` for a second `*` footnote string found none) | ✅ |
| CTA hrefs ("Testar grátis por 30 dias" → `/testar-gratis`, "+ Opcionais" → `#`) | See below | ✅ |
| "Testar grátis por 30 dias" corrected to `/testar-gratis`, claimed as an established sitewide route | Own `grep -rl "Testar grátis por 30 dias" app \| wc -l` → **30 files** sitewide (author/manifest said "29 arquivos" in the manifest, "27+" in the task prompt — ballpark-consistent, not an exact match; see Gaps). `find app/pages -iname "*testar-gratis*"` → **no page file exists yet** for that route. This is consistent with the sitewide pattern of CTAs pointing to not-yet-built pages (matches the recent repo history: `fix: stop pnpm generate from failing the deploy on known future-page links`) — not a defect introduced by this feature, but worth flagging: the CTA does not yet resolve to a real page anywhere on the site, including here. |

`CtaButton.vue` (`app/components/ui/CtaButton.vue:4-14`) confirmed to expose only a `to` prop (no `href`) — corroborates the author's stated reason for using `to="#"` rather than `href="#"` for the "+ Opcionais" placeholder.

---

## Discrimination sensor

Rather than re-reading the author's own narrative, three claims were independently re-derived from scratch:

1. **Checkmark arithmetic (108 = 90 + 18)** — computed independently: `PlanoEPrecoFeatures.vue` template has 2 checkmark `<img>` slots per feature row (Urbano/Rural columns) × 45 rows = 90; `PlanoEPrecoPricing.vue` has 1 checkmark `<img>` per feature × 9 features × 2 plan cards = 18. Then fetched the **actual rendered HTML** via `curl` and ran `grep -o "icone-check-verde-circulo" | wc -l` → **108**, an exact match to the structural prediction. This is not a tautological check — it validates the rendered output, not just the source.
2. **Ocultar/Ver todas toggle is a real state machine, not decorative** — read the exact code path (`tabelaVisivel` ref → `v-show` binding → click handler → conditional label), confirmed all three pieces reference the same variable and are wired correctly. Could not execute a click (no browser tool in this environment), so this remains a code-level guarantee, not a runtime-observed one — flagged as a shared limitation, not silently accepted as "tested."
3. **No `translate-x-*`/`translate-y-*` anywhere in the 5 new files** — `grep -rn "translate-x\|translate-y" app/components/sections/PlanoEPreco*.vue app/pages/planos-e-precos.vue` → **zero matches** (exit code 1). Independently confirmed, not trusted from the author's report.

**Side finding (not a defect in this feature, noted for completeness)**: while cross-checking `AD-007`, the sitewide compiled CSS (`_nuxt/assets/css/main.css`) actually **does** contain generated rules for `.-translate-x-1\/2` etc. (`--tw-translate-x: ...; translate: var(--tw-translate-x) var(--tw-translate-y);`), which is a more precise statement than "no CSS is generated at all" — the practical breakage described in `AD-007` more likely comes from the `translate` shorthand failing when its paired axis custom property isn't set by a class on the same element, not from zero CSS output. This doesn't change the verdict here since none of the 5 new components use `translate-*` at all, but it's left here in case a future session root-causing `AD-007` finds it useful.

---

## Responsiveness (PEP-10) — independently checked

1. **Wide tables use `overflow-x-auto` on a dedicated inner wrapper, not the outer page container**: `PlanoEPrecoFeatures.vue:95-96` — `.container-page.overflow-x-auto` wraps a `.min-w-[720px]` inner div (own read, confirmed the outer `container-page` itself carries the scroll, the inner div is what forces the width — this matches CLAUDE.md's rule that only a dedicated inner container may exceed viewport width). `PlanoEPrecoOpcionais.vue:17-18` — same pattern, `min-w-[560px]`.
2. **Compiled CSS verified for a sample of arbitrary-value classes actually used** (own `curl` of `_nuxt/assets/css/main.css`, own `grep`, not copied from author's report):
   - `.grid-cols-\[1fr_180px_180px\]` → `grid-template-columns: 1fr 180px 180px` ✅ present
   - `grid-cols-[1fr_220px_220px]` (tablet-lg variant) → `grid-template-columns: 1fr 220px 220px` ✅ present
   - `.inset-y-0` → `inset-block: 0px` ✅ present
   - `.my-auto` → `margin-block: auto` ✅ present
   - `.overflow-x-auto` → `overflow-x: auto` ✅ present
   - `.text-brand` → `color: var(--color-brand)` ✅ present
   - `min-w-[720px]` / `min-w-[560px]` → `width: 720px` / `width: 560px` ✅ present
3. **No `translate-x-*`/`translate-y-*` used** in the 5 files (see Discrimination sensor above).
4. **What was not, and could not be, independently verified**: an actual browser render at each of the 7 breakpoints with a measured `scrollWidth` vs `innerWidth`. No Playwright/browser-automation tool exists in this environment (confirmed absent, same as author's finding) — this is a genuine tooling gap, not a corner cut by either the author or this verification pass.

---

## Out-of-scope confirmation

Own `git diff master...feature/plano-e-preco -- app/components/layout/HeaderBar.vue app/components/sections/HeroPricing.vue` → **0 lines of output** (empty diff). Confirms both files are genuinely untouched by this branch, independent of the author's claim.

---

## Build

Own fresh `pnpm build` run (this session, not reusing the author's transcript) completed successfully:
- `.output/server/chunks/build/planos-e-precos-lbMKgt5y.mjs` (24.8 kB) and `planos-e-precos-styles.BNQbMDef.mjs` present in output.
- Build finished with `✨ Build complete!`, no errors.

---

## Gaps / discrepancies vs. the author's self-report

None are blocking. In the interest of being adversarial rather than sympathetic:

1. **Sitewide "Testar grátis por 30 dias" file count**: the manifest states "29 arquivos" and the task prompt says "27+"; my own `grep -rl ... | wc -l` returned **30**. Close enough to support the underlying claim (this is a well-established sitewide CTA text, not a one-off invention), but the exact figure cited was imprecise across the author's own documents, and my own count doesn't match either of theirs exactly. Not investigated further since the substantive point (real, pre-existing, sitewide route) holds regardless of exact count.
2. **`/testar-gratis` has no actual page file** anywhere in `app/pages/` — the CTA is a real, established, sitewide *link target*, but not a real, built *page* yet. This is a pre-existing sitewide condition (per recent commit history addressing "known future-page links"), not something this feature should have fixed, but the author's validation.md did not explicitly flag that the route is still a placeholder destination in practice, only that the string is "already used sitewide."
3. **`validation.md` (author's version) line citations for the checkmark-count evidence were slightly imprecise**: it cited `PlanoEPrecoFeatures.vue:122,131` (which are the `v-if` attribute lines inside the two `<img>` tags, not the `<img>` tags' opening lines at 121/129 — a minor off-by-a-few-lines citation) and `PlanoEPrecoPricing.vue:96` for the shared-feature checkmark icon (the actual `<img src="/icons/icone-check-verde-circulo.svg">` is at line 88, not 96 — line 96 is unrelated markup). The underlying claim (108 = 90 + 18) is correct and was independently re-verified against the rendered HTML in this pass, but the file:line citations in the author's report should not be trusted at face value without a spot-check, which is exactly what this verification pass was for.
4. **Task T11's "done when" claim** ("Todas usam `.section-py`/`.container-page` diretamente, exceto `PlanoEPrecoFaq.vue`") is very slightly overstated: `PlanoEPrecoTitle.vue:2` actually uses `.section-pt.pb-0`, not `.section-py`. Both are legitimate, documented project utility classes (CLAUDE.md explicitly names both `.section-py`/`.section-pt`), and using `section-pt` for a section immediately followed by another section (avoiding doubled vertical padding at the seam) is a reasonable, arguably correct choice — but it is not the literal uniformity the task's checklist claims.

None of the above rise to a FAIL. Content fidelity, the 5 acceptance-criteria-bearing behaviors, the build, and the out-of-scope guarantees all independently check out.
