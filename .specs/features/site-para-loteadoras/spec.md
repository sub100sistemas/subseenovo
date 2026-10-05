# Site para Loteadoras (`/modulos/site-para-loteadoras`) Specification

## Problem Statement

A rota `/modulos/site-para-loteadoras` já é referenciada em três pontos do site em produção — o mega-menu de "SITES & HOTSITES" (`app/components/layout/HeaderBar.vue`), o card de `app/components/sections/SiteUrbanoOtherModules.vue` e o card de `app/components/sections/SiteRuralOtherModules.vue` — mas a página não existe.

O design está finalizado no Figma (`vX7qKnnXSOW8zv4kAuS2eN`, page node `3164:32801`, seção top-level `1411:21045`, 6 seções de conteúdo, 1920×5204). Diferente das duas páginas irmãs já publicadas (`site-para-imobiliarias-urbanas`, `site-para-imobiliarias-rurais`), esta é uma página de **pré-lançamento**: o produto "Site para Loteadoras" em si ainda está "em breve" (badge vermelho no próprio H1 do Figma), e a única funcionalidade já disponível hoje é o sistema SGL (ERP de loteamentos), promovido em seção própria com CTA ativo.

## Out of Scope

| Feature | Reason |
|---|---|
| Seção de Testimonials | Não existe no Figma desta página — não inventar conteúdo |
| Plataforma "Site para Loteadoras" em si (produto completo) | O próprio Figma marca o produto como "em breve"; esta feature entrega a página institucional/teaser, não o produto |
| Remoção do badge "breve" do H1, do menu ou dos cards das páginas irmãs | O produto continua não lançado; o badge é conteúdo do Figma, não um placeholder de desenvolvimento |
| CMS ou fonte de conteúdo externa | AD-001 — todo o conteúdo é hardcoded nos componentes de seção |
| Testes automatizados | AD-002 — não há test runner no projeto; o gate é `pnpm build` + verificação visual |
| Header/Footer próprios da página | O Figma mostra uma variante antiga de header, incompatível com o header real do site; a página usa o layout padrão (`TheHeader`/`TheFooter`), como as duas páginas irmãs |
| Promoção de `ComingSoon`/`SglOffer` para `layout/` | AD-013 só promove padrão repetido em 2+ páginas; ambos são únicos desta página até prova em contrário |

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
|---|---|---|---|
| Prefixo dos componentes | `SiteLoteadoras*` | AD-004; espelha `SiteUrbano*`/`SiteRural*`; confirmado sem colisão no namespace plano (`pathPrefix: false`) | y |
| CTA da Technology ("Agendar Demonstração") | Sobrescrever o slot `#cta` de `SiteLoteadorasTechnology.vue` com `CtaButton` `to="/agendar-demonstracao/"` e o texto "Agendar Demonstração" | Figma atualizado em 2026-10-04 (antes: usar o default de `CrmTechnology.vue`, "Testar grátis por 30 dias" → `/testar-gratis`). O default de `CrmTechnology.vue` não foi alterado e continua nas demais páginas | y — decisão do usuário |
| Ativar os links "Site para Loteadoras" nas páginas irmãs | Trocar `href: '#'`/`disabled: true` pela rota real em `SiteUrbanoOtherModules.vue`/`SiteRuralOtherModules.vue`, **mantendo o badge "breve"** | Mesmo padrão já usado em `HeaderBar.vue`, que aponta para a rota real sem `disabled` e mesmo assim exibe o badge — a página passa a existir, o produto continua "em breve" | y |
| `SiteLoteadorasOtherModules.vue` | Bespoke com 2 cards (Urbanas, Rurais), nenhum desabilitado | Mesmo padrão estrutural de `SiteUrbanoOtherModules.vue`/`SiteRuralOtherModules.vue`; conteúdo do Figma confirma ambos os cards ativos | y |
| Composição do celular do SGL (Section 6) | Exportar via técnica AD-014 (SVG vetorial + bitmap original, composição offline com `sharp`) | Export PNG direto do Figma vem com fundo branco opaco; mesma situação já resolvida no celular de `SiteRuralPropertyDetails.vue` | y |
| Profundidade do SPEC nesta etapa | `spec.md` apenas (sem `design.md`, sem `tasks.md`) | Escopo Medium (6 seções, 3 delas wrap direto de shells existentes); arquitetura já estabelecida. `tasks.md` fica para antes do Execute, se necessário | y — decisão desta etapa (Specify only) |

**Open questions:** none

_Duas decisões técnicas menores ficam para o Design (se aberto), sem bloquear o Specify: posição exata do ícone de canto da Hero (glifo a identificar via export) e o glifo do ícone "Sistema SGL" no card flutuante da Hero._

## User Stories

### P1 — Visitante encontra a página e as páginas irmãs passam a linkar para ela

**User Story:** Como visitante interessado em loteamentos, quero acessar a página do Site para Loteadoras a partir do menu do site ou dos cards de módulos das páginas urbana/rural, para conhecer a proposta antes do lançamento completo.

**Why P1:** Sem a rota, o link do mega-menu resulta em 404 e os cards das páginas irmãs ficam presos em "em breve" mesmo depois de a página existir.

**Acceptance Criteria:**
- WHEN o visitante acessa `/modulos/site-para-loteadoras`, THEN o sistema SHALL renderizar a página com HTTP 200 e as 6 seções na ordem do Figma.
- WHEN o visitante clica em "Site para Loteadoras" no mega-menu, THEN o sistema SHALL navegar para a rota sem erro.
- WHEN o visitante clica no card "Site para Loteadoras" nas páginas urbana ou rural, THEN o sistema SHALL navegar para a rota real (não mais `href="#"`), mantendo o badge "breve" no card.
- WHEN a seção Other Modules desta página é renderizada, THEN o sistema SHALL exibir 2 cards ativos (Urbanas, Rurais) apontando para as rotas já publicadas.

**Independent Test:** `pnpm dev`, navegar pelos três pontos de entrada e confirmar que a página carrega; confirmar visualmente que os cards das páginas irmãs deixaram de estar desabilitados mas ainda mostram "breve".

### P2 — A página é fiel ao Figma nos breakpoints do projeto

**User Story:** Como responsável pelo produto, quero que a página reproduza o design aprovado em desktop, tablet e mobile, para manter a consistência visual do site.

**Why P2:** É o objetivo central do trabalho; fidelidade parcial gera retrabalho.

**Acceptance Criteria:**
- WHEN a página é renderizada em 1440px, THEN cada uma das 6 seções SHALL corresponder ao node Figma equivalente em layout, tipografia, cores e espaçamento.
- WHILE a viewport estiver abaixo de `tablet-lg` (992px), THE sistema SHALL empilhar as colunas de cada seção sem overflow horizontal.
- WHEN a página é renderizada em 375px, THEN nenhum elemento SHALL provocar scroll horizontal no `body`.
- WHEN uma seção reutiliza um shell de `layout/` (Hero, Technology, Faq), THEN o sistema SHALL passar o conteúdo por props e slots, sem duplicar markup.
- WHEN as seções bespoke (`ComingSoon`, `OtherModules`, `SglOffer`) forem construídas, THEN o sistema SHALL seguir os tokens de `app/assets/css/main.css` (`.container-page`, `.section-py`, breakpoints custom) em vez de valores ad hoc.

**Independent Test:** capturar cada seção com Playwright em 1440/992/768/375 e comparar com `get_screenshot` do node correspondente.

### P3 — SEO e semântica corretos

**User Story:** Como responsável por SEO, quero que a página tenha metadados e hierarquia de headings corretos, para que seja indexada adequadamente.

**Why P3:** Importante, mas não bloqueia o uso da página.

**Acceptance Criteria:**
- WHEN a página é renderizada, THEN o sistema SHALL expor exatamente um `<h1>` ("Site para Loteadoras").
- WHEN a página é renderizada, THEN `useSeoMeta` SHALL definir `title`, `description`, `ogTitle` e `ogDescription` no padrão `SUBSEE | Site para Loteadoras — <subtítulo>`.
- WHEN uma seção tem título próprio, THEN o sistema SHALL usar `<h2>` (Technology, ComingSoon, OtherModules, FAQ, SglOffer — 5 no total), e `<h3>` para os títulos dos cards flutuantes da Hero e para as perguntas do FAQ.

**Independent Test:** inspecionar o HTML renderizado e contar as tags de heading.

## Edge Cases

- WHEN um ícone de módulo do Hero já existir como asset compartilhado (`venda.svg`, glifo de lançamentos), THEN o sistema SHALL referenciar o caminho existente e NÃO SHALL duplicá-lo em `modulos-site-loteadoras/`.
- WHEN um elemento precisar de centralização, THEN o sistema SHALL usar flexbox ou `inset-x-0 mx-auto` e NÃO SHALL usar `translate-x-*`/`translate-y-*` (AD-007).
- WHEN um array ou objeto for passado a um componente, THEN o sistema SHALL declará-lo como `const` tipado em `<script setup>` e NÃO SHALL escrevê-lo inline no binding do template.
- WHEN a composição do celular do SGL (Section 6) for exportada do Figma, THEN o sistema NÃO SHALL usar o PNG achatado direto (fundo branco opaco, AD-014) e SHALL compor a transparência offline.
- WHEN os links "Site para Loteadoras" forem ativados em `SiteUrbanoOtherModules.vue`/`SiteRuralOtherModules.vue`, THEN o sistema SHALL manter o badge "breve" e NÃO SHALL remover a indicação de pré-lançamento.
- WHEN um arquivo `.vue` for criado ou editado, THEN o sistema NÃO SHALL conter comentários.

## Implicit-Requirement Dimensions

| Dimension | Applies? |
|---|---|
| Persistência / estado | N/A — página estática, sem estado além do accordion nativo `<details>` do FAQ |
| Chamadas externas | N/A — sem requisições; todos os assets são locais |
| Autenticação | N/A — página pública de marketing |
| Pagamentos | N/A |
| Concorrência | N/A |
| Transições de estado | Apenas o accordion do FAQ, coberto por `layout/Faq.vue` |
| Acessibilidade | Imagens decorativas com `alt=""` + `aria-hidden`; imagens de conteúdo com `alt` descritivo em português |
| Performance | `loading="eager"` só na foto do hero; demais imagens `lazy`; `:width`/`:height` intrínsecos para evitar CLS |

## Requirement Traceability

| Requirement ID | Story | Task | Status |
|---|---|---|---|
| SLO-01 | P1 | T07 | done |
| SLO-02 | P1 | T07 | done |
| SLO-03 | P1 | T08 | done |
| SLO-04 | P1 | T04 | done |
| SLO-05 | P2 | T01-T06 | done |
| SLO-06 | P2 | T01-T06 | done |
| SLO-07 | P2 | T01-T06 | done |
| SLO-08 | P2 | T01,T02,T05 | done |
| SLO-09 | P2 | T03,T04,T06 | done |
| SLO-10 | P3 | T01 | done |
| SLO-11 | P3 | T07 | done |
| SLO-12 | P3 | T01-T06 | done |

ID format: `SLO-NN` · Status values: `pending` | `done` · Coverage: 12 requisitos / 3 stories
T01 Hero · T02 Technology · T03 ComingSoon · T04 OtherModules · T05 Faq · T06 SglOffer · T07 Página+SEO · T08 Ativação dos links nas páginas irmãs

## Success Criteria

- [x] `pnpm build` conclui sem erros
- [x] As 6 seções renderizam na ordem do Figma
- [x] Cada seção confere com o node Figma em 1440px
- [x] Sem scroll horizontal em 375px, 768px e 992px
- [x] Exatamente um `<h1>` na página
- [x] `useSeoMeta` completo no padrão `SUBSEE | …`
- [x] Links "Site para Loteadoras" ativos em `HeaderBar.vue` (já apontava para a rota), `SiteUrbanoOtherModules.vue` e `SiteRuralOtherModules.vue`, mantendo o badge "breve"
- [x] Zero `translate-*` e zero comentários nos arquivos novos
- [x] Nenhum asset duplicado com `modulos-site-urbano/`/`modulos-site-rural/` para ícones já compartilhados
