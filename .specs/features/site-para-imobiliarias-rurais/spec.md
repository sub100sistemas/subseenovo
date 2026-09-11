# Site para Imobiliárias Rurais (`/modulos/site-para-imobiliarias-rurais`) Specification

## Problem Statement

A rota `/modulos/site-para-imobiliarias-rurais` já é referenciada em dois pontos do site em produção — o mega-menu de "SITES & HOTSITES" (`app/components/layout/HeaderBar.vue:60`) e o primeiro card de `app/components/sections/SiteUrbanoOtherModules.vue` — mas a página não existe, então ambos os links resultam em 404.

O design está finalizado no Figma (`vX7qKnnXSOW8zv4kAuS2eN`, page node `3164:26825`, 11 seções, 1920×9997). É preciso implementá-lo 1:1 em Nuxt 4 + Tailwind v4, reaproveitando a arquitetura de três camadas já estabelecida, para que o segmento rural de Sites & Hotsites tenha a mesma cobertura que o urbano.

## Out of Scope

| Feature | Reason |
|---|---|
| Página "Site para Loteadoras" | Marcada como "breve" no próprio Figma; o card existe mas sem destino ativo |
| CMS ou fonte de conteúdo externa | AD-001 — todo o conteúdo é hardcoded nos componentes de seção |
| Testes automatizados | AD-002 — não há test runner no projeto; o gate é `pnpm build` + verificação visual |
| Ajuste de copy da seção International | Decisão do cliente: implementar literal do Figma; revisão de conteúdo fica para o time responsável |
| Reconstrução em HTML das composições de mockup | AD-011 — composições com dezenas de subcamadas entram como PNG achatado |

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
|---|---|---|---|
| Prefixo dos componentes | `SiteRural*` | AD-004; espelha `SiteUrbano*` e não colide com `CrmRural*` nem `HeroRural` | y |
| Tools e International são idênticas à página urbana | Promover ambas para `layout/` e converter as seções urbanas em wrappers | Regra do CLAUDE.md: padrão em mais de uma página vai para `layout/` | y — confirmado com o usuário |
| Copy da International menciona "imóveis residenciais e comerciais" | Implementar literal do Figma | Figma é a fonte de verdade; observação registrada no manifest | y — confirmado com o usuário |
| Profundidade do SPEC | `spec.md` + `tasks.md` | 11 seções = escopo Large, mas a arquitetura já está definida, dispensando `design.md` | y — confirmado com o usuário |
| Depoimentos | Reutilizar `crm-urbano-marcio-carmona` e `crm-rural-henrique-benedini` | Nome, cargo, empresa e texto conferidos contra o Figma — batem exatamente | y |
| Assets compartilhados com a página urbana | Referenciar o caminho existente, sem copiar | CLAUDE.md proíbe cópias do mesmo arquivo por página | y |

**Open questions:** none

## User Stories

### P1 — Visitante do segmento rural encontra a página

**User Story:** Como corretor ou imobiliária do mercado rural, quero acessar a página do Site para Imobiliárias Rurais a partir do menu do site, para avaliar se o produto atende ao meu segmento.

**Why P1:** Sem a rota, dois links já publicados retornam 404 — é uma regressão visível em produção.

**Acceptance Criteria:**
- WHEN o visitante acessa `/modulos/site-para-imobiliarias-rurais`, THEN o sistema SHALL renderizar a página com HTTP 200 e as 11 seções na ordem do Figma.
- WHEN o visitante clica em "Site para Imobiliárias Rurais" no mega-menu, THEN o sistema SHALL navegar para a rota sem erro.
- WHEN o visitante clica no primeiro card de outros módulos da página urbana, THEN o sistema SHALL navegar para a rota sem erro.

**Independent Test:** `pnpm dev`, navegar pelos dois pontos de entrada e confirmar que a página carrega.

### P2 — A página é fiel ao Figma nos três breakpoints

**User Story:** Como responsável pelo produto, quero que a página reproduza o design aprovado em desktop, tablet e mobile, para manter a consistência visual do site.

**Why P2:** É o objetivo central do trabalho; fidelidade parcial gera retrabalho.

**Acceptance Criteria:**
- WHEN a página é renderizada em 1440px, THEN cada seção SHALL corresponder ao node Figma equivalente em layout, tipografia, cores e espaçamento.
- WHILE a viewport estiver abaixo de `tablet-lg` (992px), THE sistema SHALL empilhar as colunas de cada seção sem overflow horizontal.
- WHEN a página é renderizada em 375px, THEN nenhum elemento SHALL provocar scroll horizontal no `body`.
- WHEN uma seção reutiliza um shell de `layout/`, THEN o sistema SHALL passar o conteúdo por props e slots, sem duplicar markup.

**Independent Test:** capturar cada seção com Playwright em 1440/992/768/375 e comparar com `get_screenshot` do node correspondente.

### P3 — SEO e semântica corretos

**User Story:** Como responsável por SEO, quero que a página tenha metadados e hierarquia de headings corretos, para que seja indexada adequadamente.

**Why P3:** Importante, mas não bloqueia o uso da página.

**Acceptance Criteria:**
- WHEN a página é renderizada, THEN o sistema SHALL expor exatamente um `<h1>`.
- WHEN a página é renderizada, THEN `useSeoMeta` SHALL definir `title`, `description`, `ogTitle` e `ogDescription` no padrão `SUBSEE | …`.
- WHEN uma seção tem título próprio, THEN o sistema SHALL usar `<h2>`, e `<h3>` para títulos de features e perguntas de FAQ.

**Independent Test:** inspecionar o HTML renderizado e contar as tags de heading.

## Edge Cases

- WHEN um asset compartilhado com a página urbana for necessário, THEN o sistema SHALL referenciar o caminho existente e NÃO SHALL criar cópia em `modulos-site-rural/`.
- WHEN um elemento precisar de centralização, THEN o sistema SHALL usar flexbox ou `inset-x-0 mx-auto` e NÃO SHALL usar `translate-x-*`/`translate-y-*` (AD-007).
- WHEN um array ou objeto for passado a um componente, THEN o sistema SHALL declará-lo como `const` tipado em `<script setup>` e NÃO SHALL escrevê-lo inline no binding do template.
- WHEN o card "Site para Loteadoras" for renderizado, THEN o sistema SHALL exibi-lo com badge "breve" e sem link ativo.
- WHEN a extração para `layout/` alterar `SiteUrbanoTools` ou `SiteUrbanoInternational`, THEN a página urbana SHALL permanecer visualmente inalterada.
- WHEN um arquivo `.vue` for criado ou editado, THEN o sistema NÃO SHALL conter comentários.

## Implicit-Requirement Dimensions

| Dimension | Applies? |
|---|---|
| Persistência / estado | N/A — página estática, sem estado além do accordion nativo `<details>` |
| Chamadas externas | N/A — sem requisições; todos os assets são locais |
| Autenticação | N/A — página pública de marketing |
| Pagamentos | N/A |
| Concorrência | N/A |
| Transições de estado | Apenas o accordion do FAQ, coberto por `layout/Faq.vue` |
| Acessibilidade | Imagens decorativas com `alt=""` + `aria-hidden`; imagens de conteúdo com `alt` descritivo em português |
| Performance | `loading="eager"` só no hero; demais imagens `lazy`; `:width`/`:height` intrínsecos para evitar CLS |

## Requirement Traceability

| Requirement ID | Story | Task | Status |
|---|---|---|---|
| SRU-01 | P1 | T10 | pending |
| SRU-02 | P1 | T10 | pending |
| SRU-03 | P2 | T00 | pending |
| SRU-04 | P2 | T01 | pending |
| SRU-05 | P2 | T02 | pending |
| SRU-06 | P2 | T03 | pending |
| SRU-07 | P2 | T04 | pending |
| SRU-08 | P2 | T05 | pending |
| SRU-09 | P2 | T06 | pending |
| SRU-10 | P2 | T07 | pending |
| SRU-11 | P2 | T08 | pending |
| SRU-12 | P2 | T09 | pending |
| SRU-13 | P3 | T10 | pending |
| SRU-14 | P2 | T11 | pending |

ID format: `SRU-NN` · Status values: `pending` | `done` · Coverage: 14 requisitos / 3 stories

## Success Criteria

- [ ] `pnpm build` conclui sem erros
- [ ] As 11 seções renderizam na ordem do Figma
- [ ] Cada seção confere com o node Figma em 1440px
- [ ] Sem scroll horizontal em 375px, 768px e 992px
- [ ] Exatamente um `<h1>` na página
- [ ] `useSeoMeta` completo no padrão `SUBSEE | …`
- [ ] Página urbana sem regressão visual após a extração para `layout/`
- [ ] Zero `translate-*` e zero comentários nos arquivos novos
- [ ] Nenhum asset duplicado entre `modulos-site-urbano/` e `modulos-site-rural/`
