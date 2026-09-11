# CRM Imobiliário Urbano Tasks

## Execution Protocol (MANDATORY — do not skip)

Implement these tasks with the `tlc-spec-driven` skill: **activate it by name and follow its Execute flow and Critical Rules.** Do not search for skill files by filesystem path. The skill is the source of truth for the full flow (per-task cycle, sub-agent delegation, adequacy review, Verifier, discrimination sensor).

**If the skill cannot be activated, STOP and tell the user — do not proceed without it.**

**Commit deviation (recorded, not silent):** this directory is not a git repository. The "one atomic commit per task" step is therefore **not executable**. Substitute: each task is marked `[x]` in this file's checklists **before** moving to the next task, and the per-task "Done when" checklist is the audit trail in place of a commit.

**No-comments deviation:** per `CLAUDE.md`, this repo's `.vue`/`.ts`/`.css` files carry no comments. Any rationale that would normally live inline goes in this file's "Done when" notes or in `.specs/STATE.md` instead.

---

**Design**: skipped — no new architecture; reuses the `app/pages/<route>.vue` + `app/components/sections/<Prefix><Section>.vue` pattern already established by `/modulos/crm` (`crm-imobiliario` feature), with a new `CrmUrbano` component prefix per the spec's Assumptions.
**Status**: Complete (T1–T16 concluídas)

---

## Test Coverage Matrix

> No automated test runner in this project (no ESLint/Vitest/Playwright config; `CLAUDE.md` confirms). Gate = `pnpm build` + manual verification, same as `crm-imobiliario`.

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| --- | --- | --- | --- | --- |
| Content/asset manifest (docs only) | none | Every extracted string and asset row cross-checked 1:1 against the Figma node before use — no invented copy | `FIGMA_CONTENT_MANIFEST_CRM_URBANO.md` | manual review only (no build applies) |
| New section component (`app/components/sections/CrmUrbano*.vue`) | none | Compiles cleanly; renders the content from its manifest entry; matches its mapped spec AC(s) on manual visual check at desktop/tablet/mobile; no comments in the file | `app/components/sections/CrmUrbano*.vue` | `pnpm build` |
| Page component (`app/pages/modulos/crm-imobiliario-urbano.vue`) | none | Route resolves 200; all 11 sections present in Figma order; exactly one `<h1>`; SEO meta set | `app/pages/modulos/crm-imobiliario-urbano.vue` | `pnpm build` + manual `pnpm dev` check of the route |
| Shared layout/component wiring edits (`HeaderBar.vue`, `CrmOtherModules.vue`) | none | Only the stated `to`/`href` field changes; every other item still renders and still points where it did before | file itself | `pnpm build` + manual check |

## Gate Check Commands

| Gate Level | When to Use | Command |
| --- | --- | --- |
| Manual | After T1 (content/asset extraction — no code touched) | Cross-check every bullet in `FIGMA_CONTENT_MANIFEST_CRM_URBANO.md` against the Figma node's visible text/labels; confirm every asset table row has a real file at the stated path |
| Quick | After each single-section-component task (T2–T12) | `pnpm build` |
| Full | After page assembly and navigation wiring (T13–T15) | `pnpm build` && `pnpm dev` → manually exercise the task's mapped acceptance criteria on the running route |
| Build | Feature completion (T16) | `pnpm build` succeeds with the new route included in output && full manual QA pass (see T16 Done when) |

**Environment note**: this machine runs Node 22 + pnpm via corepack (`AD-006` in `.specs/STATE.md`) — `pnpm build` is expected to pass literally, not substituted with `pnpm dev`.

---

## Execution Plan

Phases are ordered and run sequentially — each phase completes before the next begins, and tasks within a phase execute in order. Phase grouping mirrors the spec's own P1/P2/P3 priority structure.

### Phase 1: Content Extraction

```
T1 [x]
```

### Phase 2: P1 Hero (MVP)

```
T1 [x] → T2 [x]
```

### Phase 3: P2 Sections

```
T2 [x] → T3 [x] → T4 [x] → T5 [x] → T6 [x] → T7 [x] → T8 [x] → T9 [x]
```

### Phase 4: P3 Sections

```
T9 [x] → T10 [x] → T11 [x] → T12 [x]
```

### Phase 5: Page Assembly

```
T12 [x] → T13 [x]
```

### Phase 6: Navigation Wiring

```
T13 [x] → T14 [x] → T15 [x]
```

### Phase 7: Cross-Cutting QA

```
T15 [x] → T16 [x]
```

---

## Task Breakdown

### T1: Extract Figma content + assets for all 11 sections into the manifest

**What**: Read the Figma file `vX7qKnnXSOW8zv4kAuS2eN`, section "CRM Imobiliário Urbanos" (frame `3089:5956`, 1920×10112, 11 child section nodes below), and produce `FIGMA_CONTENT_MANIFEST_CRM_URBANO.md` at the repo root, following the exact schema of `FIGMA_CONTENT_MANIFEST_CRM.md` (intro/conventions block + one numbered section per node, each with a "Texto extraído" bullet list and an "Assets" table). Download every referenced image/icon asset via `get_design_context`/`download_assets` to `public/images/modulos-crm-urbano/` (photos/mockups) or `public/icons/` (small reusable icons, flat, shared — reuse an existing file instead of re-downloading when the asset is visually identical to one already in `public/icons/`, e.g. the lançamentos/venda/locação icons and the `Testar grátis por 30 dias` arrow already used on `/modulos/crm`).
**Where**: `FIGMA_CONTENT_MANIFEST_CRM_URBANO.md` (new file)
**Depends on**: None
**Reuses**: `FIGMA_CONTENT_MANIFEST_CRM.md` format/schema (root of repo)
**Requirement**: supports URB-01–URB-15 (content source of truth for every section)

**Nodes to extract** (fileKey `vX7qKnnXSOW8zv4kAuS2eN`, already confirmed via `get_metadata`/`get_design_context`/`get_screenshot` this session):

| # | Node | Name | Confirmed content (do not re-derive from scratch — verify and extend, don't guess differently) |
| --- | --- | --- | --- |
| 1 | `3554:3036` | Section / Hero / Top | H1 "Acelere seus negócios no mercado imobiliário urbano" (span "imobiliário urbano" in brand color); description "Organize lançamentos, vendas e locações com gestão de leads, distribuição de atendimentos, funil de vendas e integração com portais em uma única plataforma"; 3 icon chips (lançamentos, venda, locação — reuse `crm-hero-icone-lancamentos-glyph.svg`/`crm-hero-icone-venda.svg`/`crm-hero-icone-locacao-glyph.svg` from `/modulos/crm` if visually identical); Coluna 02 = woman photo + 3 floating cards ("Apartamento" property card with 2 Suítes+1 Quarto/2 Vagas de garagem/185m², "Proposta em análise"/"Negociação via CRM", "Publicação integrado"/"No SUB100 e principais portais") + 2 decorative curve SVGs + top-right calculator-icon badge; bottom wave divider (`Horizantal Divider`, full-bleed, same technique as `crm-hero-divider-onda.svg`) |
| 2 | `3089:6048` | Section / Hero / Technology | H2 "Do cadastro à publicação, tudo em um só lugar"; description "Siga um fluxo guiado por etapas, da identificação ao proprietário, e tenha cada imóvel pronto para publicar, sem retrabalho."; CTA "Testar grátis por 30 dias" → `/testar-gratis`; static mockup of the SUB100 "Cadastro de imóvel" wizard screen (decorative star + squiggle already used as a pattern on `/modulos/crm`'s Technology section — reuse the same curve/star SVGs if visually identical) |
| 3 | `3089:6425` | Section / Hero / Portfolio | H2 "Todo o seu portfólio, sob controle e pronto para gerar negócio"; description "Acompanhe vendas, locações e lançamentos em um só painel, com leads, valores e integração com portais sempre atualizados"; static mockup of listing/map screens with a "Sincronizado com 15 portais" badge; side text "Com o portfólio centralizado, acompanhe indicadores de vendas, leads e VGV, e amplie o alcance dos seus imóveis com integração direta aos principais portais do mercado." + 4 items each with an icon, an H3 title and a description: "Organização do portfólio" / "Mídias e divulgação organizadas" / "Gestão de proprietário e angariação" / "Integração com portais imobiliários"; CTA "Testar grátis por 30 dias" |
| 4 | `3089:7064` | Section / Hero / Sales Funnel | H2 "Cada atendimento no lugar certo, do primeiro contato à venda"; description "Distribua leads automaticamente, acompanhe negociações em um Kanban visual e nunca perca uma oportunidade por falta de retorno."; 3 Kanban columns with real lead cards — "Sem Contato" (20): Paulo Henrique Silva/Lançamento/R$485.000,00, Fernanda Nenes/Venda/R$90.000,00; "Em Atendimento" (12): Maria Silva de Romão/Venda/R$470.000,00, Pedro Souza Bento/Venda/R$500.000,00; "Em Negociação" (8): Mario Carmem Meira/Venda/R$1.500.000,00, Pedro de Souza/Venda/R$3.000.000,00 (each card also shows a relative time and an assigned broker name); CTA "Testar grátis por 30 dias" |
| 5 | `3089:7130` | Section / Hero / Leads Chart | H2 "Leads de todos os canais, no corretor certo, na hora certa"; description "Centralize leads do site, portais, WhatsApp e indicações, e distribua automaticamente para quem pode atender primeiro."; diagram: 5 source nodes (Site, Portais, WhatsApp, Redes Sociais, Indicações) connecting into a center card ("CRM SUB100" / "Distribuição inteligente para o corretor disponível." + a small "Tempo médio 8s +32% rápido" stat chip) connecting out to 3 broker nodes (João Silva, Mariana Costa, Rafael Lima — each "Disponível agora"); CTA "Testar grátis por 30 dias" |
| 6 | `3089:7235` | Section / Hero / Reports | H2 "Metas e resultados, acompanhados em tempo real"; description "Defina metas por corretor ou equipe e acompanhe taxa de conversão, tempo de resposta e desempenho por origem."; 4 stat cards: "68% Taxa de conversão / ↑8pts este mês", "2h Tempo médio de resposta / ↓30min vs mês anterior", "312 Leads este mês / ↑18% vs mês anterior", "94% Metas atingidas / Meta: 90%"; CTA "Testar grátis por 30 dias" |
| 7 | `3089:7282` | Section / Hero / Portal Integrations | H2 "Publique seus imóveis nos principais portais"; description "Centralize o cadastro dos seus imóveis no SUBSEE e envie seus anúncios para diferentes portais imobiliários de forma integrada, facilitando a gestão e ampliando a visibilidade"; static mockup of the SUB100 app "Marketing"/portal-toggle screen, with 6 decorative portal-logo badges floating around it (SUB100, VivaReal, imovelweb, ZAP, OLX, Chaves na Mão); CTA "Testar grátis por 30 dias" |
| 8 | `3089:7477` | Section / Hero / Dashboard | H2 "O painel que dá clareza ao seu negócio"; description "Imóveis, propostas, leads e financeiro: tudo em tempo real no Dashboard SUBSEE."; 4 items each with an icon, an H3 title and a description: "Visão completa em tempo real" / "Alertas que evitam perda de negócio" / "Indicadores por tipo de negócio" / "Gestão de equipe integrada"; static mockup of the SUB100 Dashboard screen with 2 floating stat badges ("1.271 Imóveis ativos", "316 (Este mês) Vendidos/Alugados") |
| 9 | `3089:7987` | Section / Hero / Testimonials | H2 "O que nossos clientes falam dos nossos produtos e serviços"; SUBSEE on logo box; 2 testimonial cards — Marcio Carmona/Diretor/Carmona Imóveis (quote about a long-standing SUB100 relationship) and Edson Naka/Diretor/Legado Urbano (quote about Legado Urbano being founded by 3 broker friends) |
| 10 | `3089:8006` | Section / Hero / Other Modules | H2 "Conheça os outros módulos do CRM Imobiliário"; description "Soluções desenvolvidas para diferentes segmentos do mercado imobiliário."; 3 cards — "CRM Imobiliário" / "Conheça recursos de IA, automações e integrações da plataforma." → `/modulos/crm`; "CRM Imobiliário Rural" / "Gestão completa de propriedades rurais e negociações do campo." → `/modulos/rural`; "CRM para Temporada" / "Gestão completa de aluguéis por temporada e reservas de imóveis." → `/modulos/temporada` (each with a "Clique aqui →" button, same pattern as `CrmOtherModules.vue`) |
| 11 | `3089:8011` | Section / Hero / FAQ | H2 "Perguntas Frequentes"; description "Tire suas dúvidas sobre o CRM Imobiliário da SUBSEE on."; 6 accordion items: "O que é o CRM Imobiliário Urbano do SUBSEE?", "Como funciona a distribuição de leads para os corretores?", "O SUBSEE publica imóveis automaticamente nos portais imobiliários?", "É possível acompanhar metas, conversão e desempenho da equipe?", "O CRM SUBSEE atende venda, locação e outros tipos de negócio imobiliário?", "Posso testar o CRM Imobiliário Urbano antes de contratar?" (verbatim answers to be transcribed from the Figma node in this task — full text visible in the reference screenshot already captured this session) |

**Tools**:
- Skill: `figma:figma-design-to-code` (**mandatory** before calling `get_design_context` — load it first)
- MCP: claude.ai Figma (`get_design_context`, `get_screenshot`, `download_assets` per node)

**Done when**:
- [x] `FIGMA_CONTENT_MANIFEST_CRM_URBANO.md` exists with 11 numbered sections in Figma top-to-bottom order, same schema as `FIGMA_CONTENT_MANIFEST_CRM.md`
- [x] Every heading, CTA label, card title/description, stat, Kanban card, FAQ Q&A is transcribed verbatim (no paraphrasing, no invented text) — cross-checked against a fresh `get_design_context`/`get_screenshot` call per node, not only against the table above
- [x] Every asset row has a real downloaded file at the stated local path (or an explicit note that it reuses an existing `/modulos/crm` asset, with the exact existing filename), with correct W×H and a suggested alt text
- [x] Explicit note confirming which composition is a static mockup image (Technology, Portfolio, Portal Integrations, Dashboard) vs. real markup (Hero cards, Sales Funnel Kanban, Leads Chart diagram, Reports stat cards), matching the spec's Out of Scope table
- [x] Explicit note on the "Claude, não mexe site e não coloca no site" frame (`3554:3142`) confirming it is skipped (per spec Assumptions)

**Tests**: none
**Gate**: Manual — cross-check per the Gate Check Commands table

---

### T2: Build `CrmUrbanoHero.vue`

**What**: Create the Hero/Top section component using the content extracted in T1 for node `3554:3036`. This is the page's only `<h1>`.
**Where**: `app/components/sections/CrmUrbanoHero.vue`
**Depends on**: T1
**Reuses**: `CrmHero.vue`'s structural technique (percentage-based absolute positioning on an aspect-ratio block, full-bleed wave divider via `left: calc(50% - 50vw); width: 100vw` — never `-translate-x-1/2`, per `AD-007`) — content, card composition and icon count (3, not 5) are specific to this page's node and must not be copied from `CrmHero.vue`
**Requirement**: URB-02

**Tools**: `mcp__claude_ai_Figma__get_design_context` on node `3554:3036` to confirm exact px/percentage measurements before implementing (background gradient, Row position, card positions, divider position — all already sampled once this session, re-confirm before committing to exact values)

**Done when**:
- [x] Renders the single `<h1>` + description + 3 icon chips + Coluna 02 composition (photo + 3 cards + curves + badge) + bottom wave divider, matching T1's manifest entry
- [x] No duplicate heading/content between mobile, tablet and desktop — one responsive markup tree, not two
- [x] No `translate-x-*`/`translate-y-*` utility used for positioning (`AD-007`) — flexbox centering or `calc()` instead
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile — no overflow, no cut-off elements

**Tests**: none
**Gate**: Quick

---

### T3: Build `CrmUrbanoTechnology.vue`

**What**: Create the Technology section (static SUB100 "Cadastro de imóvel" mockup + CTA) for node `3089:6048`.
**Where**: `app/components/sections/CrmUrbanoTechnology.vue`
**Depends on**: T2
**Reuses**: `CrmTechnology.vue`'s static-mockup (`NuxtPicture`) + local `max-w-[1400px]` wrapper pattern — content (heading, description, mockup image) is specific to this node
**Requirement**: URB-04

**Tools**: none (content already in the T1 manifest)

**Done when**:
- [x] H2 "Do cadastro à publicação, tudo em um só lugar" + description + CTA "Testar grátis por 30 dias" (→ `/testar-gratis`) + mockup render matching the manifest
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile

**Tests**: none
**Gate**: Quick

---

### T4: Build `CrmUrbanoPortfolio.vue`

**What**: Create the Portfolio section (mockup + 4-item feature list) for node `3089:6425`.
**Where**: `app/components/sections/CrmUrbanoPortfolio.vue`
**Depends on**: T3
**Reuses**: `CrmOverview.vue`'s icon+H3+description card-list pattern for the 4 items (adapted to this node's 2-column mockup+list layout, not the 3-card grid layout — do not copy `CrmOverview.vue`'s composition wholesale)
**Requirement**: URB-05

**Tools**: none

**Done when**:
- [x] H2 "Todo o seu portfólio, sob controle e pronto para gerar negócio" + description + mockup + side paragraph + 4 items (H3 title + description each: Organização do portfólio, Mídias e divulgação organizadas, Gestão de proprietário e angariação, Integração com portais imobiliários) + CTA
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile

**Tests**: none
**Gate**: Quick

---

### T5: Build `CrmUrbanoSalesFunnel.vue`

**What**: Create the Sales Funnel section (3-column Kanban with real lead cards) for node `3089:7064`.
**Where**: `app/components/sections/CrmUrbanoSalesFunnel.vue`
**Depends on**: T4
**Reuses**: none directly (no existing Kanban-card component on the site) — follow the project's existing card/shadow/rounded-corner tokens (`rounded-[...]`, `shadow-[...]` values already used elsewhere) rather than inventing new ones
**Requirement**: URB-06

**Tools**: `mcp__claude_ai_Figma__get_design_context` on node `3089:7064` for exact column header colors (gray/orange/cyan), card spacing and border-radius

**Done when**:
- [x] H2 "Cada atendimento no lugar certo, do primeiro contato à venda" + description + 3 Kanban columns with real headers/counts and real lead cards (name, tag, value, time, broker) per T1's manifest + CTA
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile — columns stack sensibly on mobile, no horizontal scroll trap unless the Figma itself shows one

**Tests**: none
**Gate**: Quick

---

### T6: Build `CrmUrbanoLeadsChart.vue`

**What**: Create the Leads Chart section (5-source → center → 3-broker connector diagram) for node `3089:7130`.
**Where**: `app/components/sections/CrmUrbanoLeadsChart.vue`
**Depends on**: T5
**Reuses**: `HeroIntegrations.vue`'s tablet/mobile "stacked blocks with connector line" fallback pattern for the diagram's small-screen variant (the desktop connector-line composition itself is new to this section)
**Requirement**: URB-07

**Tools**: `mcp__claude_ai_Figma__get_design_context` on node `3089:7130` for exact connector-line paths/colors and node positions

**Done when**:
- [x] H2 "Leads de todos os canais, no corretor certo, na hora certa" + description + diagram (5 source nodes, center CRM card with the "8s" stat chip, 3 broker nodes with connector lines) + CTA, per T1's manifest
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile — no overlapping connector lines/nodes at any breakpoint

**Tests**: none
**Gate**: Quick

---

### T7: Build `CrmUrbanoReports.vue`

**What**: Create the Reports section (4 stat cards) for node `3089:7235`.
**Where**: `app/components/sections/CrmUrbanoReports.vue`
**Depends on**: T6
**Reuses**: existing card/shadow/rounded-corner tokens; grid pattern already used for multi-card rows elsewhere in `Crm*` sections
**Requirement**: URB-08

**Tools**: none

**Done when**:
- [x] H2 "Metas e resultados, acompanhados em tempo real" + description + 4 stat cards (icon, big number, label, secondary indicator) matching T1's manifest + CTA
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile — 4 cards reflow sensibly (e.g. 2×2 or 1-column) below desktop

**Tests**: none
**Gate**: Quick

---

### T8: Build `CrmUrbanoPortalIntegrations.vue`

**What**: Create the Portal Integrations section (app mockup + 6 floating portal badges + copy) for node `3089:7282`.
**Where**: `app/components/sections/CrmUrbanoPortalIntegrations.vue`
**Depends on**: T7
**Reuses**: `CrmIntegrations.vue`'s "floating badge around a central mockup" positioning technique (percentage-based, not `translate-*`) — content/badges/copy are specific to this node
**Requirement**: URB-09

**Tools**: `mcp__claude_ai_Figma__get_design_context` on node `3089:7282` for exact badge positions

**Done when**:
- [x] H2 "Publique seus imóveis nos principais portais" + description + app mockup + portal badges positioned per the Figma + CTA — **7** badges, not 6: o node real inclui também o badge **123i** (`3089:7427`), ver §7 do `FIGMA_CONTENT_MANIFEST_CRM_URBANO.md`
- [x] No `translate-x-*`/`translate-y-*` used for badge positioning (`AD-007`)
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile — no badge overlaps the mockup or gets clipped

**Tests**: none
**Gate**: Quick

---

### T9: Build `CrmUrbanoDashboard.vue`

**What**: Create the Dashboard section (4-item feature list + dashboard mockup with 2 floating stat badges) for node `3089:7477`.
**Where**: `app/components/sections/CrmUrbanoDashboard.vue`
**Depends on**: T8
**Reuses**: same icon+H3+description list pattern as T4 (`CrmUrbanoPortfolio.vue`) for the 4 items — implement independently, do not import/share a sub-component unless the project already has one for this exact pattern
**Requirement**: URB-10

**Tools**: none

**Done when**:
- [x] H2 "O painel que dá clareza ao seu negócio" + description + 4 items (Visão completa em tempo real, Alertas que evitam perda de negócio, Indicadores por tipo de negócio, Gestão de equipe integrada) + dashboard mockup + 2 floating stat badges
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile

**Tests**: none
**Gate**: Quick

---

### T10: Build `CrmUrbanoTestimonials.vue`

**What**: Clone `CrmTestimonials.vue`'s structure with this page's real content (node `3089:7987`).
**Where**: `app/components/sections/CrmUrbanoTestimonials.vue`
**Depends on**: T9
**Reuses**: `CrmTestimonials.vue` verbatim structure (lavender rounded block, SUBSEE on logo box, 2 equal-height cards via `items-stretch` + `flex-1` blockquote, percentage-based horizontal spacing per that file's own fix) — only the `testimonials` data array and any logo asset paths change
**Requirement**: URB-11

**Tools**: none (content already in the T1 manifest; download the Carmona Imóveis and Legado Urbano logo assets if not already present under `public/icons/`)

**Done when**:
- [x] H2 "O que nossos clientes falam dos nossos produtos e serviços" + SUBSEE on logo + 2 cards (Marcio Carmona/Carmona Imóveis, Edson Naka/Legado Urbano) with equal height
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check at desktop/tablet/mobile — both cards render the same height regardless of quote length

**Tests**: none
**Gate**: Quick

---

### T11: Build `CrmUrbanoOtherModules.vue`

**What**: Clone `CrmOtherModules.vue`'s structure with this page's real module list (node `3089:8006`) — CRM Imobiliário / CRM Imobiliário Rural / CRM para Temporada, excluding Urbano itself.
**Where**: `app/components/sections/CrmUrbanoOtherModules.vue`
**Depends on**: T10
**Reuses**: `CrmOtherModules.vue` verbatim structure (card list, "Clique aqui →" button) — only the `modules` data array changes
**Requirement**: URB-12

**Tools**: none

**Done when**:
- [x] H2 "Conheça os outros módulos do CRM Imobiliário" + 3 cards: CRM Imobiliário → `/modulos/crm`, CRM Imobiliário Rural → `/modulos/rural`, CRM para Temporada → `/modulos/crm-imobiliario-temporada` (**desvio registrado**: o manifesto/spec previam o placeholder `/modulos/temporada`, mas a página real de Temporada já existe no repo em `app/pages/modulos/crm-imobiliario-temporada.vue` e `CrmOtherModules.vue`/`HeaderBar.vue` já apontam para ela — apontar para o placeholder seria um link sabidamente quebrado. Rural permanece no placeholder `/modulos/rural` porque a página ainda não existe, igual ao que `CrmTemporadaOtherModules.vue` já faz)
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check — each card's link resolves to the stated route

**Tests**: none
**Gate**: Quick

---

### T12: Build `CrmUrbanoFaq.vue`

**What**: Clone `CrmFaq.vue`'s structure with this page's real 6 questions/answers (node `3089:8011`).
**Where**: `app/components/sections/CrmUrbanoFaq.vue`
**Depends on**: T11
**Reuses**: `CrmFaq.vue` verbatim structure (accordion markup, `faq-plus-circle.svg`/`faq-minus-circle.svg`, scoped `<style>`) — only the `faqs` data array changes
**Requirement**: URB-13, URB-14

**Tools**: none (verbatim answer text from T1's manifest)

**Done when**:
- [x] H2 "Perguntas Frequentes" + description + 6 accordion items with the real Q&A from the manifest
- [x] Opening an item shows the "−" icon in place of "+" (state indicated visually)
- [x] No comments in the file
- [x] `pnpm build` succeeds; manual check — every item opens/closes independently

**Tests**: none
**Gate**: Quick

---

### T13: Assemble `app/pages/modulos/crm-imobiliario-urbano.vue`

**What**: Create the page component that composes all 11 sections (in Figma order) and sets SEO meta.
**Where**: `app/pages/modulos/crm-imobiliario-urbano.vue`
**Depends on**: T12
**Reuses**: `app/pages/modulos/crm.vue`'s `useSeoMeta` + `<main>` wrapper pattern
**Requirement**: URB-01, URB-18

**Tools**: none

**Done when**:
- [x] Page renders `<CrmUrbanoHero /> <CrmUrbanoTechnology /> <CrmUrbanoPortfolio /> <CrmUrbanoSalesFunnel /> <CrmUrbanoLeadsChart /> <CrmUrbanoReports /> <CrmUrbanoPortalIntegrations /> <CrmUrbanoDashboard /> <CrmUrbanoTestimonials /> <CrmUrbanoOtherModules /> <CrmUrbanoFaq />` in that exact order
- [x] `useSeoMeta` sets a real, non-generic title/description for this specific page (not copy-pasted from `/modulos/crm`)
- [x] Exactly one `<h1>` renders on the page (verified via `grep -c "<h1" .output` or DOM inspection after `pnpm dev`)
- [x] `pnpm build` succeeds; `pnpm dev` → route returns HTTP 200

**Tests**: none
**Gate**: Full

---

### T14: Wire the mega-menu "CRM Imobiliário Urbano" link

**What**: Change the `to` value for the "CRM Imobiliário Urbano" item in `HeaderBar.vue`'s `modulosColumns` data from `/modulos` to `/modulos/crm-imobiliario-urbano`.
**Where**: `app/components/layout/HeaderBar.vue` (modify — one field, ~1 line)
**Depends on**: T13
**Reuses**: existing `modulosColumns` data structure — no new markup
**Requirement**: URB-03

**Tools**: none

**Done when**:
- [x] The "CRM Imobiliário Urbano" item's `to` is `/modulos/crm-imobiliario-urbano`
- [x] Every other mega-menu item (desktop + mobile) still renders and still points where it did before
- [x] `pnpm build` succeeds; manual check of the full mega-menu

**Tests**: none
**Gate**: Full

---

### T15: Wire the `/modulos/crm` "CRM Imobiliário Urbano" card link

**What**: Change the `href` for the "CRM Imobiliário Urbano" module in `CrmOtherModules.vue`'s `modules` data from `/modulos/urbano` to `/modulos/crm-imobiliario-urbano`.
**Where**: `app/components/sections/CrmOtherModules.vue` (modify — one field, ~1 line)
**Depends on**: T14
**Reuses**: existing `modules` data structure — no new markup
**Requirement**: URB-15

**Tools**: none

**Done when**:
- [x] The "CRM Imobiliário Urbano" module's `href` is `/modulos/crm-imobiliario-urbano`
- [x] The other 2 module cards (Rural, Temporada) are unchanged
- [x] `pnpm build` succeeds; from `/modulos/crm`, clicking the card navigates to the new page

**Tests**: none
**Gate**: Full

---

### T16: Cross-cutting QA — responsiveness, headings, links, and final build

**What**: Full audit of the finished page across desktop/tablet/mobile breakpoints (Playwright headless browser, matching this project's established verification practice — screenshots + overflow/console-error checks at 320/375/576/768/991/992/1300/1440/1920px), a heading-hierarchy/SEO audit (exactly one `<h1>`, logical H1→H2→H3 order, no duplicated headings or text between responsive variants), verification of every link/CTA, and the final production build check.
**Where**: n/a (verification task, no new files)
**Depends on**: T15
**Reuses**: n/a
**Requirement**: URB-16, URB-17, URB-18 (+ final confirmation of URB-01–URB-15 and the spec's Success Criteria)

**Tools**: Playwright (already available in this environment via the session's scratchpad `node_modules` — install if not present: `npm install playwright` + `npx playwright install chromium`)

**Done when**:
- [x] No horizontal overflow and no console/page errors at any of the 8 breakpoints listed above — verificado em 9 larguras (320/375/576/768/991/992/1300/1440/1920) contra a build de produção: `scrollWidth - clientWidth = 0` em todas, 0 erros de console, 0 `pageerror`, 0 `requestfailed`, 0 imagens quebradas
- [x] No element visibly cut off, overlapping, or touching another with zero spacing at any breakpoint — varredura programática de interseção de retângulos e de transbordo dos limites de seção nas 11 seções: 0 ocorrências reais. As ocorrências inicialmente sinalizadas na seção FAQ eram falsos positivos: os `<p>` de resposta dentro de `<details>` **fechados** ainda reportam `getBoundingClientRect()` no Chromium, mas `checkVisibility()` retorna `false` para todos os 6 (confirmado)
- [x] Exactly one `<h1>` on the page; H2 used for every section heading; H3 used only for the Portfolio/Dashboard 4-item lists' titles; no heading used purely for font-size — 1 `<h1>` (Hero), 10 `<h2>` (uma por seção não-Hero), 8 `<h3>` de conteúdo (4 Portfolio + 4 Dashboard); os 3 `<h3>` restantes são do footer global (`Localização`/`Siga nas redes sociais`/`Comercial`), fora do escopo desta feature
- [x] No duplicated text/content between desktop and mobile/tablet variants of any section — nenhum heading duplicado; as únicas repetições de texto são dados legítimos repetidos entre cards distintos ("Apartamento Padrão", nomes de corretor no Kanban, "Disponível agora" nos 3 nós de corretor, "Clique aqui →" nos 3 cards de módulo)
- [x] Every CTA/link on the page resolves to its stated route (including the T14/T15 entry points) — `/modulos/crm-imobiliario-urbano` (200), `/modulos/crm` (200), `/modulos/crm-imobiliario-temporada` (200); `HeaderBar.vue` e `CrmOtherModules.vue` apontam para a nova rota. Rotas ainda inexistentes no site (`/modulos/rural`, `/testar-gratis`, `/modulos`, `/eventos`, `/sobre`, `/entrar`, `/termos-de-uso`, `/politica-de-privacidade`) retornam 404 — condição **pré-existente e sitewide** (`/testar-gratis` é o alvo de CTA de todas as seções `Crm*`/`CrmRural*`/`CrmTemporada*` já publicadas), não introduzida por esta feature; ver Edge Cases do `spec.md`
- [x] `pnpm build` succeeds with `/modulos/crm-imobiliario-urbano` present in the build output (`.output/server/chunks/build/crm-imobiliario-urbano-sxae9B19.mjs` + `-styles`)
- [x] `.specs/features/crm-imobiliario-urbano/spec.md`'s Requirement Traceability table updated to `Verified` for all 18 requirement IDs, and its Success Criteria checkboxes checked

**Tests**: none
**Gate**: Build
