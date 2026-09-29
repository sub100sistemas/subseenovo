# Plano e Preço Validation

**Spec**: `.specs/features/plano-e-preco/spec.md`
**Tasks**: `.specs/features/plano-e-preco/tasks.md`
**Verdict**: **PASS**
**Date**: 2026-09-29

---

## Summary

All 14 tasks (T1–T14) completed and committed atomically on `feature/plano-e-preco`. The page renders at `/planos-e-precos`, composing 5 new section components (`PlanoEPrecoTitle`, `PlanoEPrecoPricing`, `PlanoEPrecoFeatures`, `PlanoEPrecoOpcionais`, `PlanoEPrecoFaq`), all content extracted verbatim from Figma per `FIGMA_CONTENT_MANIFEST_PLANO_E_PRECO.md`. `pnpm build` succeeds with the new route in output.

## Per-AC Evidence

| Requirement | Evidence |
| --- | --- |
| PEP-01 (rota 200) | `app/pages/planos-e-precos.vue:14-18` composes the 5 sections; `curl -s http://localhost:3000/planos-e-precos -w "HTTP %{http_code}"` → `HTTP 200` |
| PEP-02 (Title) | `app/components/sections/PlanoEPrecoTitle.vue:4` — exactly 1 `<h1>Planos &amp; Preços</h1>` in the rendered HTML; description with "urbana"/"rural" spans in `text-brand` (`PlanoEPrecoTitle.vue:7`) |
| PEP-03 (Pricing cards) | `app/components/sections/PlanoEPrecoPricing.vue:15-40` (`sharedFeatures`, referenced by both `planos` entries at `:29` and `:36`) — HTML contains `R$450` ×2, the same 9-item feature list rendered identically in both cards |
| PEP-04 (toggle + selo) | `PlanoEPrecoPricing.vue:55` — "Mensal" styled active (`bg-brand`), "Anual" (`:56`) inactive, static `<span>`s, no `ref`/`computed` tied to price anywhere in the file (confirmed by full read); badge at `PlanoEPrecoPricing.vue:63` uses `inset-y-0 my-auto` (no `translate-*`) |
| PEP-05 (Features table) | `app/components/sections/PlanoEPrecoFeatures.vue:24-73` (9 `allIncluded(...)` calls, 45 total rows) — HTML contains all 9 category titles verbatim; 108 `icone-check-verde-circulo` references = 90 (45 rows × 2 cols, `PlanoEPrecoFeatures.vue:122,131`) + 18 (9 items × 2 cards, `PlanoEPrecoPricing.vue:96`) |
| PEP-06 (Ocultar/Ver todas) | `PlanoEPrecoFeatures.vue:80` (`const tabelaVisivel = ref(true)`), `:111` (`v-show="tabelaVisivel"`), `:153` (`@click="tabelaVisivel = !tabelaVisivel"`), `:155` (conditional label) |
| PEP-07 (Opcionais) | `app/components/sections/PlanoEPrecoOpcionais.vue:8-12` (`opcionais` array) — HTML contains "R$ 100,00" ×2, "R$ 1.200,00" ×2, "Consulte" ×2 |
| PEP-08 (FAQ 6 Q&A) | `app/components/sections/PlanoEPrecoFaq.vue:9` (first question) and `:34` (sixth/last question) verbatim; all 6 present in the `faqs` array (`:7-39`) |
| PEP-09 (FAQ expanded state) | Delegated to `app/components/layout/Faq.vue:107-117`'s existing `details[open]` CSS (already used by `CrmFaq.vue`/`HeroFaq.vue`) — no new logic, same proven pattern |
| PEP-10 (responsividade) | See "Responsiveness" section below |
| PEP-11 (colisão de nomes) | `find app/components -iname "PlanoEPreco*.vue"` → exactly 5 files (`PlanoEPrecoTitle.vue`, `PlanoEPrecoPricing.vue`, `PlanoEPrecoFeatures.vue`, `PlanoEPrecoOpcionais.vue`, `PlanoEPrecoFaq.vue`), 1 match each |

## Responsiveness — method and limitation

**No Playwright or browser-automation tool is available in this environment** (confirmed via `ToolSearch`; matches `AD-002`: no test runner/Playwright dependency in this project). Responsiveness was verified by:

1. **Structural code review** of all 5 new components for fixed pixel widths that could exceed a narrow viewport — none found outside the two comparison tables (Features, Opcionais), which are the only elements Figma itself renders wider than mobile.
2. **The two wide tables use `overflow-x-auto` on a dedicated wrapper**: `PlanoEPrecoFeatures.vue:95-96` (`overflow-x-auto` wrapping a `min-w-[720px]` inner div) and `PlanoEPrecoOpcionais.vue:17-18` (`overflow-x-auto` wrapping a `min-w-[560px]` inner div), per `CLAUDE.md`'s explicit rule ("Only tables, diagrams and code blocks may be wider, each inside its own `overflow-x: auto` container — the page body must never scroll horizontally"). The outer `container-page` stays within viewport width; only the inner div scrolls.
3. **Compiled CSS inspected directly** from the running dev server (`curl http://localhost:3000/_nuxt/assets/css/main.css`) to confirm every arbitrary-value Tailwind class actually generated real CSS — this project has a confirmed sitewide bug (`AD-007`) where `translate-x-*`/`translate-y-*` never generate CSS, and a session-local lesson that newly-added classes can silently fail to compile in a stale dev server. Confirmed working: `.grid-cols-\[1fr_180px_180px\] { grid-template-columns: 1fr 180px 180px; }`, `.inset-y-0 { inset-block: 0px; }`, `.my-auto { margin-block: auto; }`, `.overflow-x-auto { overflow-x: auto; }`, `.text-brand { color: var(--color-brand); }`.
4. **Dev server was restarted clean** (killed a stale leftover process from earlier in this session, cleared `.nuxt` and `node_modules/.vite`) before any of the above checks, per the lesson recorded earlier this session during Eventos.
5. **No `translate-x-*`/`translate-y-*` used anywhere** in the 5 new components (confirmed via `grep`, zero matches) — the "12% OFF" badge uses the `inset-y-0`/`my-auto` auto-margin trick instead, specifically to avoid `AD-007`.

**What was NOT done**: an actual browser render at each of the 7 breakpoints (1920/1440/1280/1024/768/576/<576px) with a real screenshot or DOM measurement of `document.documentElement.scrollWidth` vs `innerWidth`. This is the same limitation already documented for `crm-imobiliario`'s `spec.md` ("Verificado por revisão estrutural de código... sem navegador real disponível neste ambiente para confirmação visual pixel a pixel"). If a Playwright-capable environment becomes available, a follow-up pass should confirm this empirically — recommended but not blocking, since the structural evidence above is strong (established, already-audited patterns reused for every risk point).

## Discrimination sensor

Not run as an isolated adversarial pass in this execution (no automated test suite exists for this project — `AD-002` — so there is no test to "kill" via fault injection). Equivalent confidence obtained via:
- Deliberately checking that removing/breaking a class name would be visible in the compiled CSS check above (i.e., the check is not tautological — `grid-cols-[1fr_180px_180px]` was verified present in the *compiled* stylesheet, not just the source template).
- Cross-referencing rendered counts against expected arithmetic (108 = 90 + 18 checkmarks; not just "greater than zero").

## Content fidelity — decisions applied

| Decision | Applied where | Confirmed |
| --- | --- | --- |
| Route `/planos-e-precos` | `app/pages/planos-e-precos.vue` (file path is the route, Nuxt file-based routing) | ✅ |
| Toggle Mensal/Anual — visual only, no price-switch logic | `PlanoEPrecoPricing.vue:55-56` — no `ref`/`computed` for price anywhere in the file | ✅ |
| Marcador `**` kept literal, no invented footnote | `PlanoEPrecoPricing.vue:26` (`footnoteMarker: '**'` on the "site imobiliário integrado" item) + `:100` (template renders it as plain trailing text, no link/tooltip) | ✅ |
| CTA "Testar grátis por 30 dias" → `/testar-gratis` (corrected mid-Etapa-3 from the originally-approved `href="#"`, after discovering the real sitewide route — user re-confirmed before implementation) | `PlanoEPrecoPricing.vue:81` (×2 cards, same template) + `PlanoEPrecoOpcionais.vue:37` | ✅ |
| CTA "+ Opcionais" → `to="#"` placeholder (kept as originally approved — no sitewide precedent exists for this text) | `PlanoEPrecoPricing.vue:105` (×2 cards, same template) | ✅ |
| Footnote `*` rendered once, only in the Features section (matching its single physical location in Figma) — not duplicated in the pricing cards | `PlanoEPrecoFeatures.vue:147-148` | ✅ |

## Out-of-scope confirmation

- `app/components/layout/HeaderBar.vue`: zero diff vs `master` (`git diff master...feature/plano-e-preco -- app/components/layout/HeaderBar.vue`).
- `app/components/sections/HeroPricing.vue`: zero diff vs `master`.
- Both are explicitly documented in `spec.md`'s Out of Scope as future, separate tasks (updating the Home CTA / header nav to point at `/planos-e-precos`).

## Build

`pnpm build` succeeded on every task (T3–T12), final run confirmed the route present in `.output/server/chunks/build/planos-e-precos-*.mjs`. No errors, only pre-existing unrelated deprecation warnings from a transitive dependency (`@vue/shared` trailing-slash export mapping) and expected `VUE_ROUTER_R0004` dev-only warnings for known future-page links (`/eventos`, `/testar-gratis`, etc. — same category as `AD-` entries already covering 27+ other pre-existing references sitewide).

## Diff range

`47e8c76`..`086473c` (14 task commits + the initial planning-docs commit, all on `feature/plano-e-preco`, none touching `master`).

## Gaps

None blocking. One recommended (non-blocking) follow-up: a real-browser Playwright pass across the 7 breakpoints, if/when such tooling becomes available in this environment — see "Responsiveness" above.
