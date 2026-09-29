# Plano e Preço Tasks

## Execution Protocol (MANDATORY — do not skip)

Implement these tasks with the `tlc-spec-driven` skill: **activate it by name and follow its Execute flow and Critical Rules.** Do not search for skill files by filesystem path.

**If the skill cannot be activated, STOP and tell the user — do not proceed without it.**

**Sub-agent delegation note**: 14 tasks total, crossing the ~8-task offer threshold. Per the skill's rule, the sub-agent offer must be presented to the user **before Execute starts** — this is not decided here in Tasks.

---

**Spec**: `.specs/features/plano-e-preco/spec.md` — Approved 2026-09-29
**Design**: `.specs/features/plano-e-preco/design.md` — Approved 2026-09-29
**Status**: Draft — Etapa 2 (Tasks), aguardando aprovação do usuário. **Execute (Etapa 3) não iniciada.**

---

## Test Coverage Matrix

> Gerado a partir do `design.md` e de `.specs/STATE.md` (`AD-002`) — não existe test runner automatizado neste projeto; gate = `pnpm build` + verificação manual/visual (mesma substituição já aplicada a toda feature `/modulos/*` anterior).

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| --- | --- | --- | --- | --- |
| Manifesto de conteúdo/assets (docs) | none | Todo texto e asset extraído já cruzado 1:1 contra o node do Figma antes do uso — sem copy inventada (já concluído na Etapa 1) | `FIGMA_CONTENT_MANIFEST_PLANO_E_PRECO.md` | revisão manual apenas |
| Novo componente de seção (`app/components/sections/PlanoEPreco*.vue`) | none | Compila sem erros; renderiza o conteúdo do manifesto; bate com o(s) AC(s) mapeado(s) do spec em verificação visual manual contra o Figma | `app/components/sections/PlanoEPreco*.vue` | `pnpm build` + comparação de screenshot Figma |
| Página (`app/pages/planos-e-precos.vue`) | none | Rota resolve 200; as 5 seções presentes na ordem do Figma; SEO meta definido; exatamente 1 `<h1>` | `app/pages/planos-e-precos.vue` | `pnpm build` + verificação manual via `pnpm dev` |

## Gate Check Commands

| Gate Level | When to Use | Command |
| --- | --- | --- |
| Quick | Após cada task de componente único (T3–T11) | `pnpm build` |
| Full | Após montagem da página (T12) | `pnpm build` && `pnpm dev` → exercitar os ACs mapeados da task na rota real |
| Build | Conclusão da feature (T14) | `pnpm build` sucesso com `/planos-e-precos` no output && verificação de responsividade real nos 7 breakpoints (sem overflow horizontal, sem erros de console) && comparação visual contra `get_screenshot` por seção |

---

## Execution Plan

### Phase 1: Assets
```
T1 → T2
```

### Phase 2: Section Components
```
T3 → T4 → T5 → T6 → T7 → T8 → T9 → T10 → T11
```

### Phase 3: Page Assembly
```
T12
```

### Phase 4: Cross-Cutting QA
```
T13 → T14
```

---

## Task Breakdown

### T1: Comparar visualmente e confirmar/rejeitar os assets candidatos de reuso

**What**: Para cada ícone/asset candidato listado na tabela "Assets a exportar/confirmar" de `FIGMA_CONTENT_MANIFEST_PLANO_E_PRECO.md`, comparar visualmente (`get_screenshot`/`get_design_context` do node Figma vs. o arquivo já existente em `public/icons/`) e registrar o veredito (reusar como está / reusar com ajuste de cor-tamanho / rejeitar e exportar novo). Não são feitos exports nesta task — apenas a decisão.

**Where**: Atualização de `FIGMA_CONTENT_MANIFEST_PLANO_E_PRECO.md` (seção "Assets a exportar/confirmar", adicionando uma coluna "Veredito")

**Depends on**: None (Figma content já extraído na Etapa 1)

**Reuses**: mesmo processo já usado em Eventos para `crm-hero-divider-onda.svg` e a comparação `imgPlay`/`imgPlay1`

**Requirement**: suporta PEP-02, PEP-03, PEP-05, PEP-06, PEP-08, PEP-09

**Tools**: Skill: `figma:figma-design-to-code`; MCP: Figma (`get_design_context`, `get_screenshot`)

**Done when**:
- [x] Todos os 8 itens da tabela (divisor de onda, forma decorativa `imgShape`, selo "12% OFF", checkmark da tabela comparativa, ícone de bullet da lista de preços, seta dos CTAs, logo "SUBSEE on", ícones plus/minus do FAQ) têm veredito registrado
- [x] Cada veredito de reuso cita o arquivo exato de `public/icons/` a ser usado
- [x] Cada veredito de rejeição lista o motivo (diferença de cor/forma/proporção) e o node do Figma a exportar na T2 — **resultado real**: apenas 1 item (selo "12% OFF") precisou de export novo; a forma decorativa de fundo virou CSS puro (gradiente), não um asset

**Tests**: none
**Gate**: Manual (comparação visual documentada) — ✅ concluído, veredito completo em `FIGMA_CONTENT_MANIFEST_PLANO_E_PRECO.md`

---

### T2: Exportar os assets novos confirmados na T1

**What**: Baixar (nunca desenhar à mão) todo asset marcado como "rejeitar/exportar novo" na T1: possivelmente o selo "12% OFF" (composição a achatar em uma única imagem), a forma decorativa de fundo (`imgShape`), e qualquer ícone que não passe na comparação visual (checkmark, bullet, seta, logo, plus/minus).

**Where**: `public/icons/*.svg` ou `public/images/*.png` (arquivos novos apenas, nomeados com prefixo `plano-e-preco-`)

**Depends on**: T1

**Reuses**: nenhum — apenas os itens que a T1 confirmou como reusáveis são de fato reaproveitados, sem duplicação de arquivo

**Requirement**: suporta PEP-02, PEP-03, PEP-05, PEP-06, PEP-08, PEP-09

**Tools**: MCP: Figma (`get_design_context` por node, download do asset via `curl`)

**Done when**:
- [x] Todo asset marcado como "exportar novo" na T1 existe como arquivo real baixado sob `public/icons/` ou `public/images/` — `public/icons/plano-e-preco-selo-12-off.png` (209×135, PNG RGBA real, baixado via `curl` da URL de asset do Figma MCP, não recriado à mão)
- [x] Nenhum ícone é recriado à mão/aproximado — cada um é o conteúdo exato buscado da URL de asset do Figma MCP
- [x] O selo "12% OFF", se exportado, é uma única imagem achatada (não múltiplos elementos posicionados) — confirmado, 1 único arquivo PNG

**Tests**: none
**Gate**: Quick (diff visual contra o screenshot do `get_design_context` de cada asset) — ✅ concluído

---

### T3: Construir `PlanoEPrecoTitle.vue`

**What**: H1 "Planos & Preços" + descrição de abertura (com "urbana"/"rural" destacados em roxo), node `3220:6091`.

**Where**: `app/components/sections/PlanoEPrecoTitle.vue`

**Depends on**: T2

**Reuses**: nenhum componente `layout/` existente cobre um H1 isolado sem hero visual — markup simples, seguindo o padrão de heading de outras seções (`text-[40px]` etc. convertidos para classes reais do design system)

**Requirement**: PEP-02

**Tools**: none (conteúdo já no manifesto)

**Done when**:
- [ ] H1 renderiza exatamente "Planos & Preços" com `<h1>` semântico (único da página — ver T12)
- [ ] Descrição renderiza verbatim, com "urbana" e "rural" destacados na cor de destaque do projeto (`#5d5fef`)
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T4: Construir o sub-componente de toggle Mensal/Anual + selo "12% OFF"

**What**: Toggle segmentado visual (estado "Mensal" ativo, "Anual" inativo) + selo decorativo "12% OFF", node `3220:6002`–`3220:6017`. Conforme decisão aprovada: **sem lógica de troca de preço** — apenas markup/CSS fiel ao único estado desenhado no Figma.

**Where**: `app/components/sections/PlanoEPrecoPricing.vue` (sub-markup local, não um componente `ui/` separado — não há um segundo consumidor hoje, seguindo a regra do projeto de não criar abstração para um caso único)

**Depends on**: T3

**Reuses**: nenhum componente de toggle/segmented-control existe no projeto (confirmado pelo agente de exploração); `LanguageSwitcher.vue` não serve de base (é um diagrama estático, sem estados)

**Requirement**: PEP-04

**Tools**: MCP: Figma (`get_design_context` no node `3220:6001`, já capturado na Etapa 1 — reconsultar apenas se alguma medida ficar ambígua na implementação)

**Done when**:
- [ ] "Mensal" renderiza como estado ativo (fundo preenchido roxo, texto branco); "Anual" renderiza como estado inativo (fundo branco, borda)
- [ ] Nenhum `v-model`/estado reativo controla troca de preço — confirmado por revisão de código, não apenas visual
- [ ] Selo "12% OFF" renderiza na posição/rotação aproximada do Figma (via asset achatado da T2, se aplicável)
- [ ] Nenhuma classe `translate-x-*`/`translate-y-*` usada para centralizar texto/ícone dentro do selo ou do toggle — usar flexbox (`items-center justify-center`), conforme `AD-007`
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T5: Construir os cards de preço "Urbano" e "Rural" em `PlanoEPrecoPricing.vue`

**What**: Os 2 cards de preço (nome, descrição, "R$450/mês + opcionais", lista de 9 recursos idêntica nos dois cards, os 2 CTAs), nodes `3220:6019` e `3220:6055`.

**Where**: `app/components/sections/PlanoEPrecoPricing.vue` (mesmo arquivo da T4 — um único componente de seção cobre todo o node `Section / Hero / Pricing`, incluindo toggle + os 2 cards, por serem uma única unidade visual/estrutural no Figma)

**Depends on**: T4

**Reuses**: `ui/FeatureList.vue` para a lista de 9 itens, se o formato bullet+ícone bater (avaliar durante a implementação; se não bater, usar `v-for` local sobre um array tipado, conforme `PricingFeatureItem[]` do `design.md`); `CtaButton.vue` para os 2 CTAs de cada card; `HeroPricing.vue` como referência estrutural parcial (2 cards lado a lado), não como base de código herdada

**Requirement**: PEP-03

**Tools**: none (conteúdo já no manifesto)

**Done when**:
- [ ] Os 2 cards renderizam nome, descrição (diferente entre Urbano/Rural) e preço "R$450/mês + opcionais" (idêntico nos dois)
- [ ] Os 9 itens de recurso renderizam idênticos, na mesma ordem, nos dois cards, incluindo os marcadores `*` e `**` como texto literal (sem link/tooltip para `**`, conforme decisão aprovada)
- [ ] O marcador `*` tem uma nota de rodapé associada disponível em algum ponto da página (a nota real está fisicamente na seção Features do Figma — decidir na implementação se é replicada aqui ou apenas na seção Features, documentando a escolha no `validation.md` da Etapa 3)
- [ ] CTA "Testar grátis por 30 dias" usa `href="#"` (ou `to="#"`) em ambos os cards, conforme decisão aprovada
- [ ] CTA "+ Opcionais" usa `href="#"` (ou uma âncora interna `#opcionais`, à escolha da implementação, desde que documentada) em ambos os cards
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T6: Construir o array de dados da tabela comparativa (`FeatureCategory[]`)

**What**: Modelar as 9 categorias × features extraídas no manifesto como o array tipado `FeatureCategory[]` definido em `design.md`, incluindo os 2 booleanos independentes `incluidoUrbano`/`incluidoRural` (hoje sempre `true` nas 45 linhas, mas modelados como campos separados, não um único `incluido` compartilhado).

**Where**: `app/components/sections/PlanoEPrecoFeatures.vue` (`<script setup>`, `const` local — sem arquivo JSON separado, por não ser compartilhado entre páginas)

**Depends on**: T5

**Reuses**: nenhum — array novo, seguindo a regra do projeto de separar dados de estrutura visual

**Requirement**: PEP-05

**Tools**: none (conteúdo já no manifesto)

**Done when**:
- [ ] As 9 categorias existem no array, cada uma com o título exato do manifesto (usando o texto real do node de título, não o nome do frame — ex.: "Treinamentos e Evolução", não "Plugin para WhatsApp")
- [ ] Todas as 45 linhas de feature existem, com `incluidoUrbano: true` e `incluidoRural: true` em cada uma (fiel ao achado da Etapa 1 — nenhuma linha diverge)
- [ ] Nenhum node de "Vector"/ícone genérico do Figma foi usado como nome de feature — todos os textos vêm do node de título real

**Tests**: none
**Gate**: Quick (revisão de código, sem UI ainda)

---

### T7: Construir a tabela comparativa visual (`PlanoEPrecoFeatures.vue`)

**What**: Renderizar o array da T6 como a tabela de 2 colunas (Urbano/Rural) × 9 categorias, com cabeçalhos "Urbano"/"Rural" + CTA "Site & hotsite padrão" por coluna, ícone de checkmark por linha, e a nota de rodapé `*`.

**Where**: `app/components/sections/PlanoEPrecoFeatures.vue`

**Depends on**: T6

**Reuses**: nenhum componente de tabela comparativa existe no projeto — construído novo, dirigido pelo array da T6; ícone de checkmark confirmado/exportado na T1/T2

**Requirement**: PEP-05, PEP-08 (nota do marcador `*`)

**Tools**: none

**Done when**:
- [ ] As 9 categorias renderizam com seus títulos e todas as features, cada uma com checkmark visível em ambas as colunas
- [ ] Cabeçalhos "Urbano" e "Rural" renderizam com o CTA "Site & hotsite padrão" (usar `href="#"` se nenhum destino real existir, mesma convenção)
- [ ] Logo "SUBSEE on" decorativo renderiza acima da coluna Urbano (asset confirmado/exportado na T1/T2)
- [ ] Nota de rodapé "* No período gratuito de 30 dias as integrações não estão liberadas." renderiza próxima ao botão de ocultar/exibir
- [ ] Responsivo: a tabela larga (2 colunas + labels) não causa overflow horizontal — usar scroll interno (`overflow-x-auto` em um container dedicado) se necessário abaixo de `tablet` (768px), documentando a escolha
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T8: Implementar o botão funcional "Ocultar as funcionalidades" / "Ver todas as funcionalidades"

**What**: Estado local (`ref<boolean>`) que alterna a visibilidade da tabela de 9 categorias e o texto/ícone do botão entre os 2 estados desenhados no Figma (`3220:6324`/`3220:6329`).

**Where**: `app/components/sections/PlanoEPrecoFeatures.vue` (mesmo componente da T7)

**Depends on**: T7

**Reuses**: nenhum componente de expand/collapse existe fora do padrão de accordion do FAQ (que é uma estrutura diferente — múltiplos itens independentes, aqui é um único toggle binário para a tabela inteira)

**Requirement**: PEP-06

**Tools**: none

**Done when**:
- [ ] Clicar no botão no estado "Ocultar as funcionalidades" recolhe a tabela e troca o texto/ícone para "Ver todas as funcionalidades"
- [ ] Clicar novamente reverte ambos
- [ ] O estado inicial (padrão ao carregar a página) é "visível"/"Ocultar as funcionalidades", conforme o Figma (o outro estado está marcado `hidden="true"` no arquivo original)
- [ ] Nenhum salto de layout abrupto sem transição perceptível (transição simples de altura/opacidade é suficiente; não é exigido animação complexa)
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T9: Construir `PlanoEPrecoOpcionais.vue`

**What**: Tabela de 3 linhas de complementos pagos (5 usuários adicionais / Site & Hotsite Padrão / Site & Hotsite personalizado) com preços idênticos Urbano/Rural + CTA, node `3220:6334`.

**Where**: `app/components/sections/PlanoEPrecoOpcionais.vue`

**Depends on**: T8

**Reuses**: `CtaButton.vue` para o CTA; nenhum componente de tabela pequena existe — construído novo, dirigido pelo array `OpcionalRow[]` do `design.md`

**Requirement**: PEP-07

**Tools**: none (conteúdo já no manifesto)

**Done when**:
- [ ] As 3 linhas renderizam com os preços exatos: R$ 100,00 / R$ 1.200,00 / Consulte, idênticos nas colunas Urbano e Rural
- [ ] Cabeçalhos "Urbano"/"Rural" renderizam acima das respectivas colunas de preço
- [ ] CTA "Testar grátis por 30 dias" usa `href="#"`, conforme decisão aprovada
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T10: Construir `PlanoEPrecoFaq.vue`

**What**: Accordion com as 6 perguntas/respostas extraídas verbatim, node `3220:6358`.

**Where**: `app/components/sections/PlanoEPrecoFaq.vue`

**Depends on**: T9

**Reuses**: `CrmFaq.vue` como template de clonagem (estrutura `<details>/<summary>` + estilo escopado); ícones `faq-plus-circle.svg`/`faq-minus-circle.svg` se confirmados na T1, senão os exportados na T2

**Requirement**: PEP-08, PEP-09

**Tools**: none (conteúdo já no manifesto)

**Done when**:
- [ ] As 6 perguntas/respostas renderizam verbatim, na ordem 01→06, idênticas ao manifesto
- [ ] Abrir um item indica visualmente o estado expandido (rotação do ícone plus/minus), consistente com `CrmFaq.vue`
- [ ] Heading "Perguntas Frequentes" + descrição renderizam acima do accordion
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T11: Revisão de consistência entre as 5 seções (nomenclatura, espaçamento, cores)

**What**: Revisão cruzada rápida das 5 seções já construídas (T3–T10) para confirmar que todas usam o prefixo `PlanoEPreco`, as mesmas classes de espaçamento (`.section-py`) e cor de destaque (`#5d5fef`) do restante do site, antes da montagem final da página.

**Where**: `app/components/sections/PlanoEPreco*.vue` (revisão, sem nova criação de arquivo)

**Depends on**: T10

**Reuses**: n/a — task de revisão

**Requirement**: PEP-11 (colisão de nomes)

**Tools**: none

**Done when**:
- [ ] Todos os 5 componentes de seção (`PlanoEPrecoTitle`, `PlanoEPrecoPricing`, `PlanoEPrecoFeatures`, `PlanoEPrecoOpcionais`, `PlanoEPrecoFaq`) existem com o prefixo correto, sem colisão com nenhum componente pré-existente (confirmado por busca em `app/components/sections/`)
- [ ] Todas usam `.section-py`/`.container-page` (ou justificativa documentada para não usar, se a seção tiver largura/fundo diferente do padrão)
- [ ] Nenhuma seção usa `translate-x-*`/`translate-y-*` para centralização (`AD-007`)

**Tests**: none
**Gate**: Quick (revisão de código)

---

### T12: Montar `app/pages/planos-e-precos.vue`

**What**: Compor as 5 seções na ordem do Figma (Title → Pricing → Features → Opcionais → FAQ); definir `useSeoMeta`.

**Where**: `app/pages/planos-e-precos.vue`

**Depends on**: T11

**Reuses**: padrão `useSeoMeta` + `<main>` de `app/pages/index.vue`/`app/pages/eventos.vue`

**Requirement**: PEP-01, PEP-10

**Tools**: none

**Done when**:
- [ ] `/planos-e-precos` resolve HTTP 200
- [ ] As 5 seções renderizam na ordem do Figma
- [ ] `useSeoMeta` definido com título/descrição reais (sem placeholder genérico)
- [ ] Exatamente um `<h1>` na página (o de `PlanoEPrecoTitle.vue`)
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Full

---

### T13: Revisão de navegação de entrada (sem alterar arquivos de produção fora do escopo)

**What**: Confirmar que os pontos de entrada existentes (`HeroPricing.vue` na Home, `HeaderBar.vue:9`) **continuam inalterados** — esta feature não os atualiza (Out of Scope explícito no `spec.md`). Esta task é apenas uma checagem, não uma alteração.

**Where**: n/a — verificação apenas

**Depends on**: T12

**Reuses**: n/a

**Requirement**: confirma que Out of Scope foi respeitado

**Tools**: none

**Done when**:
- [ ] `app/components/layout/HeaderBar.vue` permanece sem modificações nesta feature (diff vazio para este arquivo)
- [ ] `app/components/sections/HeroPricing.vue` permanece sem modificações nesta feature (diff vazio para este arquivo)
- [ ] Registrado no `validation.md` da Etapa 3 que a atualização desses 2 pontos de entrada é uma tarefa futura isolada, não desta feature

**Tests**: none
**Gate**: Manual (revisão de `git diff`)

---

### T14: QA cross-cutting — responsividade, fidelidade visual, build final

**What**: Auditoria completa nos 7 breakpoints + comparação visual contra o Figma + build final.

**Where**: n/a (verificação apenas)

**Depends on**: T13

**Reuses**: n/a

**Requirement**: PEP-10 (+ confirmação final de todos os ACs)

**Tools**: MCP: Figma (`get_screenshot` por seção para comparação)

**Done when**:
- [ ] Sem overflow horizontal em 1920/1440/1280/1024/768/576/abaixo de 576px
- [ ] Tabela comparativa (Features) responsiva — sem quebra de layout, com scroll interno se necessário conforme decisão da T7
- [ ] Toggle Ocultar/Ver todas funcional em todos os breakpoints
- [ ] Accordion de FAQ funcional em todos os breakpoints
- [ ] Cada seção comparada visualmente contra o `get_screenshot` do Figma correspondente
- [ ] `pnpm build` sucesso com `/planos-e-precos` no output
- [ ] `spec.md`'s Requirement Traceability table atualizada para `Verified`; Success Criteria marcados
- [ ] `validation.md` criado, registrando: as 4 decisões aprovadas (rota, toggle, marcador `**`, CTAs), o veredito de reuso de cada asset (T1), e a confirmação de que `HeaderBar.vue`/`HeroPricing.vue` permanecem intocados (T13)

**Tests**: none
**Gate**: Build

---

## Phase Execution Map

```
Phase 1 → Phase 2 → Phase 3 → Phase 4

T1 → T2 → T3 → T4 → T5 → T6 → T7 → T8 → T9 → T10 → T11 → T12 → T13 → T14
```

---

## Task Granularity Check

| Task | Scope | Status |
| --- | --- | --- |
| T1: Comparação visual de assets | 0 arquivos novos, decisão apenas | ✅ Granular |
| T2: Export de assets | 1 lote coeso de assets desta página | ✅ Granular |
| T3: Title | 1 componente | ✅ Granular |
| T4: Toggle + selo | sub-markup de 1 componente | ✅ Granular |
| T5: Cards de preço | mesmo componente da T4, feature adicional coesa | ✅ Granular |
| T6: Array de dados da tabela | dados apenas, sem UI | ✅ Granular |
| T7: Tabela visual | 1 componente (UI sobre os dados da T6) | ✅ Granular |
| T8: Toggle ocultar/exibir | 1 feature isolada do mesmo componente da T7 | ✅ Granular |
| T9: Opcionais | 1 componente | ✅ Granular |
| T10: FAQ | 1 componente | ✅ Granular |
| T11: Revisão de consistência | 0 arquivos novos, revisão apenas | ✅ Granular |
| T12: Montagem da página | 1 arquivo | ✅ Granular |
| T13: Checagem de não-alteração | 0 arquivos, verificação apenas | ✅ Granular |
| T14: QA final | 0 arquivos novos, verificação apenas | ✅ Granular |

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
| T13 | T12 | T12→T13 | ✅ Match |
| T14 | T13 | T13→T14 | ✅ Match |

Nenhuma task depende de uma task de uma fase posterior.

---

## Test Co-location Validation

| Task | Code Layer Created/Modified | Matrix Requires | Task Says | Status |
| --- | --- | --- | --- | --- |
| T1–T2: Assets | Asset files (sem code layer) | none | none | ✅ OK |
| T3, T9, T10: Componentes de seção simples | Novo componente de seção | none | none | ✅ OK |
| T4–T5, T6–T8: `PlanoEPrecoPricing.vue`/`PlanoEPrecoFeatures.vue` | Novo componente de seção + dados locais | none | none | ✅ OK |
| T11, T13: Revisões | n/a (sem novo arquivo) | n/a | none | ✅ OK |
| T12: Página | Página | none | none | ✅ OK |
| T14: QA final | n/a | n/a | none | ✅ OK |

Todos os valores "none" são respaldados por `AD-002` (decisão ativa do projeto: sem test runner automatizado).

---

## Riscos herdados do `design.md` (repetidos aqui para visibilidade na Execução)

| Risco | Task(s) afetada(s) | Mitigação já decidida |
| --- | --- | --- |
| Assets de ícone podem divergir visualmente do Figma | T1, T2 | Comparação visual obrigatória antes de qualquer export novo |
| Nenhum componente de toggle/tabela comparativa/expand-collapse existe hoje | T4, T6–T8 | Construídos novos, dirigidos por array tipado — sem atalho de reuso forçado |
| Marcador `**` sem nota — pendência aceita, não um bug | T5 | Renderizar o texto literal com `**`, sem link/tooltip, conforme decisão aprovada |
| Toggle Mensal/Anual sem lógica de preço — limitação aceita | T4 | Apenas visual; T4's "Done when" exige confirmar por revisão de código que nenhum estado reativo de preço foi criado |
