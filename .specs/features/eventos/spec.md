# Eventos (página `/eventos`) Specification

## Problem Statement

O nav principal do site (`HeaderBar.vue:8`) já tem o item de topo "Eventos" apontando para `/eventos` — mas a página não existe hoje (404). O design completo foi produzido no Figma (arquivo `vX7qKnnXSOW8zv4kAuS2eN`, seção de página "Eventos", node raiz `3171:41842`, 1920px, 6 blocos de conteúdo) e precisa ser portado 1:1 para o site em Nuxt, seguindo o mesmo processo já validado nas features anteriores (`/modulos/base-de-conhecimento`, `/modulos/apis-hub-integrador`): manifesto de conteúdo (`FIGMA_CONTENT_MANIFEST_EVENTOS.md`, já escrito) → assets → componentes Vue. Nenhuma URL de node do Figma foi fornecida pelo usuário para esta feature; o node foi localizado buscando, dentro do mesmo arquivo já usado nas features anteriores, a seção de página cujo nome é literalmente "Eventos" — confirmado como o node correto por conter exatamente o conteúdo esperado (lives, replays, treinamentos do CRM SUBSEE).

## Goals

- [ ] A rota `/eventos` existe, renderiza os 6 blocos de conteúdo do Figma na ordem correta e é alcançável pelo item de nav já existente (`HeaderBar.vue`).
- [ ] Todo o conteúdo (copy, imagens, ícones) é extraído fielmente do Figma e documentado em `FIGMA_CONTENT_MANIFEST_EVENTOS.md`, sem invenção de texto.
- [ ] A página é responsiva nos 7 breakpoints já definidos no design system do projeto (`app/assets/css/main.css`), sem overflow horizontal.
- [ ] Exatamente um `<h1>` na página, com hierarquia de heading correta.

## Out of Scope

| Feature | Reason |
| --- | --- |
| Implementar um formulário/fluxo real de inscrição em eventos | O Figma não define o destino do CTA "Inscreva-se!!!" (2 ocorrências) — construir um fluxo de inscrição é uma feature própria, não parte de portar o layout desta página |
| Implementar um player de vídeo real para os replays ou para o vídeo decorativo da seção Overview | Nenhum link/embed de vídeo real foi capturado na extração do Figma para os ícones de play — são apenas visuais/placeholders no design |
| Corrigir a duplicação de conteúdo da pergunta 6 do FAQ (resposta idêntica à da pergunta 5) | É um problema do próprio arquivo Figma, não desta feature de portar a página — precisa de decisão do usuário (ver Assumptions) antes de qualquer alteração de texto |
| Alterar `HeaderBar.vue` | O item de nav "Eventos" já aponta corretamente para `/eventos` — nenhuma mudança de navegação necessária |
| Adicionar test runner (Vitest/Playwright) | Decisão de infraestrutura cross-cutting fora do escopo de uma página de conteúdo ([[AD-002]]) |
| Tornar o conteúdo dinâmico/editável via CMS | Todo o conteúdo do site é hardcoded nos componentes Vue ([[AD-001]]); esta feature segue o mesmo padrão |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Nomenclatura dos componentes de seção novos | Prefixo `Eventos` em todos (`EventosGallery.vue`, `EventosHero.vue`, …), junto aos demais em `app/components/sections/` | Sem colisão hoje (`grep -r "Eventos" app/components` vazio); segue [[AD-004]] | y |
| Estratégia do manifesto de conteúdo Figma | `FIGMA_CONTENT_MANIFEST_EVENTOS.md` na raiz do repo — já escrito nesta sessão, texto extraído node a node | Segue [[AD-003]] | y |
| Cor do "on" de marca no H1 | `#e33b48` (não o `#e72f4d` já usado em outras páginas) | Confirmado via `get_design_context` no node do H1 (`3171:41851`) — é uma cor diferente, não uma aproximação ou erro; a página Eventos usa um tom de vermelho próprio | y |
| Bloco "Próximo evento" dentro do Hero: heading do texto "PRÓXIMO EVENTO" | Tratado como kicker/eyebrow (`<span>`/`<p>` uppercase), não como `<h2>`, apesar da camada no Figma se chamar "Heading / H2" | A camada nomeada "Heading / H2" (node `3171:41857`) renderiza o texto pequeno "PRÓXIMO EVENTO" — nome de camada divergente do conteúdo real (mesma lição de [[AD-015]]). Introduzir um `<h2>` real ali criaria uma hierarquia de heading estranha dentro do próprio Hero (H1 seguido de um H2 para um kicker de 15px) | y — decisão de hierarquia, não de conteúdo |
| Imagem "Imagem → Live Gratuita" do Hero (composição foto+7 camadas de texto) | Usar `public/images/eventos/banner-eventos.png`, já existente, como imagem única | Confirmado por inspeção visual e medida de dimensão exata (1550×976 = 2× de 775×487.76 do node Figma) — bate literalmente com todo o texto sobreposto. Mesmo padrão já usado para composições complexas em `technology-mockup.png`/`card_arrow.png` | y |
| Imagem de fundo do card "Signup" (videochamada) | Usar `public/images/eventos/eventos_vivo.png`, já existente | Confirmado por inspeção visual, medida de dimensão exata (2056×700 = 2× de 1028×350) e canal alpha real (região esquerda transparente, confirmada pixel a pixel) | y |
| Destino do CTA "Inscreva-se!!!" (2 ocorrências: dentro do Hero e no card Signup) | Placeholder `href="#"` documentado no código até confirmação | Nenhuma URL real foi capturada na extração do Figma para nenhuma das 2 ocorrências; nenhuma página/rota de inscrição existe hoje no site (`grep` por "inscreva"/"signup" em `app/` vazio) | n — precisa de confirmação do usuário antes do CTA apontar para uma URL real |
| Conteúdo da pergunta 6 do FAQ ("Posso sugerir temas para os próximos eventos?") | Manter o texto exatamente como está no Figma (resposta idêntica à da pergunta 5), documentado como problema conhecido do arquivo de origem | Não inventar uma resposta nova; a duplicação é do próprio Figma, não da extração — decisão de conteúdo cabe ao usuário/time de conteúdo, não a esta feature de portar a página | n — flagado para revisão do usuário; default é reproduzir o Figma tal como está |
| Ícone de play decorativo da seção Overview (sem link real) | Renderizar como puramente visual, sem `<a>`/embed de vídeo | Nenhum link/prototype target foi capturado na extração do Figma para este elemento | y |
| Seção "Image / Gallery" e "Hero": componentes separados ou um único componente | Um componente por bloco Figma com identidade visual própria: `EventosGallery.vue` (fileira de fotos) separado de `EventosHero.vue` (H1 + bloco "Próximo evento", que share o mesmo fundo/divisor contínuo no Figma) | Segue CLAUDE.md: "split sections/ components by responsibility — one section, one concern"; a fileira de fotos é um bloco visualmente e semanticamente distinto do Hero, mesmo estando imediatamente acima dele | y |

**Open questions**: 2 itens acima seguem sem confirmação (`n`) — destino real do CTA "Inscreva-se!!!" (2 ocorrências) e decisão sobre o conteúdo duplicado da pergunta 6 do FAQ. Nenhum bloqueia a estrutura da página; ambos bloqueiam apenas o valor final de um `href`/texto já documentado como pendente.

---

## User Stories

### P1: Visitante acessa a página e entende a proposta de valor + próximo evento ⭐ MVP

**User Story**: Como visitante do site, eu quero acessar `/eventos` a partir do menu e ver a fileira de fotos, o H1/descrição de valor e o destaque do próximo evento (lançamento da versão 1.0.19), para entender rapidamente o que a página oferece e quando é o próximo evento ao vivo.

**Why P1**: Sem isso, o link já publicado no nav principal leva a um 404.

**Acceptance Criteria**:

1. WHEN um visitante navega para `/eventos` THEN o sistema SHALL renderizar a página com status HTTP 200.
2. WHEN a página é renderizada THEN o sistema SHALL exibir, no topo, a fileira decorativa de 5 fotos (node `3171:42079`), antes de qualquer outro conteúdo de `<main>`.
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Hero (node `3171:41850`) com o H1 "Eventos Online e Replays do SUBSEE on" (o "on" em `#e33b48`), a descrição, e o bloco "Próximo evento" (imagem `banner-eventos.png`, kicker "PRÓXIMO EVENTO", parágrafo de destaque, CTA "Inscreva-se!!!").
4. WHEN um visitante clica no item "Eventos" do nav principal (`HeaderBar.vue`) THEN o sistema SHALL navegar para `/eventos` (já wired hoje — apenas confirmar que continua funcionando).

**Independent Test**: Rodar `pnpm dev`, abrir a Home, clicar em "Eventos" no menu e confirmar que a página carrega com a fileira de fotos e o Hero visíveis e funcionais.

---

### P2: Visitante explora replays passados e a proposta de valor do produto

**User Story**: Como visitante interessado em conteúdo já publicado, eu quero ver os replays de eventos anteriores e uma visão geral do produto, para avaliar o valor antes de me inscrever em um evento futuro.

**Why P2**: Aprofunda o engajamento, mas a página já é demonstrável sem essas seções.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Replay (node `3171:41881`) com o H2 "Reveja nossos eventos e novidades", a descrição, exatamente 3 cards (LIVE / VERSÃO ATUAL / NOVOS TREINAMENTOS, com os títulos do manifesto) e o CTA "Ver mais vídeos no App SUBSEE" apontando para `https://app.subsee.com.br/treinamentos/eventos-online?page=1&order=default` em nova aba.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Overview (node `3171:41921`) com o H2 "Tudo que sua imobiliária precisa, em um só sistema com o SUBSEE on", a descrição e a composição visual (foto + blocos decorativos + ícone de play decorativo, sem link real).

**Independent Test**: Rolar até essas 2 seções e confirmar que cada uma renderiza seu conteúdo e imagens corretamente, em isolamento visual das demais; confirmar que o CTA de Replay abre a URL externa em nova aba.

---

### P3: Visitante se inscreve em um evento e tira dúvidas

**User Story**: Como visitante convencido pelo conteúdo anterior, eu quero me inscrever em um próximo evento ao vivo e tirar dúvidas comuns via FAQ.

**Why P3**: Reforça conversão, mas não é necessário para a página cumprir seu propósito central.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Signup (node `3171:42068`) como um card inteiro clicável, com badge "EVENTO ONLINE", H2 "Participe dos Nossos Eventos ao Vivo", descrição, CTA "Inscreva-se!!!", nota "Vagas limitadas por evento" e a imagem `eventos_vivo.png`.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção FAQ (node `3171:41947`) como um accordion com as 6 perguntas/respostas extraídas do Figma, reutilizando `layout/Faq.vue` com os ícones "+"/"−" já existentes.
3. WHILE um item do accordion de FAQ está aberto THE sistema SHALL indicar visualmente o estado expandido, consistente com `CrmFaq.vue`/`BaseConhecimentoFaq.vue`.
4. IF o destino real do CTA "Inscreva-se!!!" não for confirmado antes da implementação THEN o sistema SHALL usar `href="#"` documentado em vez de uma URL adivinhada, nas 2 ocorrências (Hero e Signup).

**Independent Test**: Clicar no card inteiro da seção Signup e confirmar que o clique é capturado (mesmo que aponte para `#` até confirmação); abrir/fechar um item do FAQ e confirmar a troca de estado visual.

---

## Edge Cases

- WHILE a largura da viewport é menor que 576px (`mobile-lg`) THE sistema SHALL renderizar todos os 6 blocos sem overflow horizontal, incluindo a fileira de 5 fotos (que deve rolar horizontalmente ou empilhar/reduzir, nunca vazar a viewport) e a grade de 3 cards do Replay (empilhada em coluna única).
- IF um asset ainda não exportado do Figma (fotos da galeria, thumbnails dos replays, ícones de play, foto do Overview) não estiver disponível no momento da implementação THEN o sistema SHALL documentar o bloqueio explicitamente em vez de usar um placeholder genérico ou inventar uma imagem.
- IF o nome de um novo componente de seção colidir com um componente já existente em `app/components/sections/` THEN o sistema SHALL usar o prefixo `Eventos` para evitar sobrescrita silenciosa via auto-import.

---

## Implicit-Requirement Dimensions (sweep — escopo Large)

| Dimension | Resolução |
| --- | --- |
| Input validation & bounds | N/A — página de conteúdo estático, sem formulários próprios (o CTA de inscrição aponta para fora do site ou fica `#` até confirmação). |
| Failure / partial-failure states | N/A — sem chamadas assíncronas; o único "erro" possível é link/imagem quebrado, coberto pela auditoria de QA final. |
| Idempotency / retry / duplicate handling | N/A — sem mutações. |
| Auth boundaries & rate limits | N/A — página pública de marketing. |
| Concurrency / ordering | N/A — renderização estática. |
| Data lifecycle / expiry | As URLs de asset retornadas por `get_design_context` expiram em ~7 dias — todos os assets pendentes devem ser baixados e commitados antes do fim da sessão de implementação. A data do "próximo evento" (29 OUT 2026) está bakeada dentro de `banner-eventos.png` — se o evento mudar, a imagem precisa ser re-exportada do Figma; isso é uma limitação aceita da decisão de usar imagem única (ver Assumptions). |
| Observability | N/A — fora do escopo desta feature de conteúdo. |
| External-dependency failure | O CTA de Replay aponta para um domínio externo (`app.subsee.com.br`) fora do controle desta feature — sem tratamento de erro especial, mesmo padrão de outros links externos do site (`HeaderBar.vue`). |
| State-transition integrity | Aplica-se ao accordion de FAQ — ver P3, critério 3. |

---

## Requirement Traceability

| Requirement ID | Story | Task | Status |
| --- | --- | --- | --- |
| EV-01 | P1: Proposta de valor + próximo evento | TBD (fase Tasks) | Pending |
| EV-02 | P1: Proposta de valor + próximo evento | TBD | Pending |
| EV-03 | P1: Proposta de valor + próximo evento | TBD | Pending |
| EV-04 | P1: Proposta de valor + próximo evento | TBD | Pending |
| EV-05 | P2: Replays e visão geral | TBD | Pending |
| EV-06 | P2: Replays e visão geral | TBD | Pending |
| EV-07 | P3: Inscrição e FAQ | TBD | Pending |
| EV-08 | P3: Inscrição e FAQ | TBD | Pending |
| EV-09 | P3: Inscrição e FAQ | TBD | Pending |
| EV-10 | P3: Inscrição e FAQ | TBD | Pending |
| EV-11 | Edge case: responsividade | TBD | Pending |
| EV-12 | Edge case: colisão de nomes | TBD | Pending |

**ID format**: `EV-[NUMBER]`
**Status values**: Pending → In Design → In Tasks → Implementing → Verified
**Coverage**: 12 total, 0 implementados — esta feature está na fase Specify; Design (`design.md`) produzido na mesma sessão; Tasks/Execute aguardam aprovação do usuário.

---

## SEO & Heading Hierarchy

- **Title**: `SUBSEE | Eventos Online e Replays do SUBSEE on`
- **Meta description**: "Participe de lives, webinars e treinamentos ao vivo sobre o sistema, e acesse os replays a qualquer momento para não perder nenhum conteúdo." (mesma frase da descrição do Hero, sem invenção de novo texto)
- **Canonical**: não aplicável — o site não define `canonical` manualmente em nenhuma outra página `/modulos/*` hoje; seguir o mesmo padrão (sem tag canonical explícita, o Nuxt/host cuida disso).
- **Hierarquia de headings**:
  - `<h1>` único: "Eventos Online e Replays do SUBSEE on" (Hero)
  - `<h2>`: um por seção com heading real — Replay, Overview, Signup, FAQ (4 no total)
  - `<h3>`: título de cada um dos 3 cards de Replay (3) + os já existentes no `TheFooter.vue` (3, padrão sitewide) = 6 no total
  - O kicker "PRÓXIMO EVENTO" e o parágrafo de destaque dentro do Hero **não** viram heading (ver Assumptions) — permanecem `<p>`/`<span>`.
  - As perguntas do FAQ **não** viram heading (mesmo padrão de `layout/Faq.vue` — são `<span>` dentro de `<summary>`).

---

## Success Criteria

- [ ] `/eventos` renderiza os 6 blocos do Figma, na ordem correta, com conteúdo extraído fielmente e registrado em `FIGMA_CONTENT_MANIFEST_EVENTOS.md`.
- [ ] Ponto de entrada já existente (nav principal) navega corretamente até a página — sem alteração necessária em `HeaderBar.vue`.
- [ ] `pnpm build` completa sem erros com a nova rota incluída.
- [ ] Página visualmente fiel ao Figma e responsiva em 1920/1440/1280/1024/768/576/375px, sem overflow horizontal.
- [ ] Exatamente 1 `<h1>` na página.
