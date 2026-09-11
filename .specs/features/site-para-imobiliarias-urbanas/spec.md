# Site para Imobiliárias Urbanas (`/modulos/site-para-imobiliarias-urbanas`) Specification

## Problem Statement

O site não possui uma página dedicada ao produto "Site para Imobiliárias Urbanas" da SUB100. O design completo existe no Figma (arquivo `vX7qKnnXSOW8zv4kAuS2eN`, frame `3135:7086`, 1920×9926px, 11 seções) e precisa ser portado para o Nuxt na rota `/modulos/site-para-imobiliarias-urbanas`, com o Figma como fonte de verdade. Os links existentes no site (`HeaderBar.vue`, `HeroWebsite.vue` na Home) apontam para `/modulos/sites` — uma rota genérica ainda não construída que não é esta página; esta página é o primeiro produto específico da linha "Sites & Hotsites".

## Out of Scope

| Feature | Reason |
| --- | --- |
| Construir "Site para Imobiliárias Rurais" e "Site para Loteadoras" | Features futuras independentes; os cards em "Outros módulos" apontarão para rotas placeholder até lá |
| Alterar a rota genérica `/modulos/sites` ou construir a página-hub de Sites | Feature separada; esta página é um produto específico dentro dessa linha |
| Alterar páginas CRM existentes | Fora do escopo; nenhuma alteração de conteúdo nessas páginas |
| Adicionar test runner (Vitest/Playwright) ao projeto | Decisão de infraestrutura registrada como fora de escopo em AD-002 |
| Tornar o conteúdo editável via CMS | Todo conteúdo é hardcoded nos componentes Vue (AD-001) |
| Recriar mockups de produto como HTML/CSS | Mesma abordagem já usada no projeto: imagens estáticas exportadas do Figma para composições complexas (tablet mockup, phone mockup, laptop mockup, sites showcase) |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Rota e nome do arquivo | `/modulos/site-para-imobiliarias-urbanas` (lowercase kebab-case) — arquivo `app/pages/modulos/site-para-imobiliarias-urbanas.vue` | O usuário especificou inicialmente `/modulos/Site-para-imobiliarias-urbanas` com "S" maiúsculo; confirmou lowercase após verificar que todas as rotas existentes no projeto usam lowercase kebab-case (`/modulos/crm`, `/modulos/crm-imobiliario-urbano`, etc.) e que em produção (Linux) URLs são case-sensitive. | y |
| Nomenclatura dos componentes de seção | Prefixo `SiteUrbano` em todos (`SiteUrbanoHero.vue`, `SiteUrbanoSitesShowcase.vue`, `SiteUrbanoPropertyTech.vue`, etc.) | Evita colisão com `Crm*`, `CrmUrbano*`, `Hero*`, `HeroWebsite*` via auto-import flat namespace (AD-004). Prefixo único por página e produto. | y |
| Frame "Claude, não mexe..." (nota do Figma) | Ignorar; usar `<TheHeader />` e `<TheFooter />` globais já existentes | Padrão já estabelecido em todas as outras páginas do projeto | y |
| Seção 3 (Technology Property) e Seção 6 (Control) — reaproveitar `Technology.vue` | Analisar durante implementação com `get_design_context` individual dos nodes; usar `Technology.vue` como base quando o layout for 2 colunas (conteúdo + mockup/imagem com feature list) | `Technology.vue` já é shell reutilizável com prop-forwarding. Seções 3 e 6 têm estrutura 2 colunas similar; Seção 4 (mobile icons grid) tem layout diferente. | n (verificar na implementação) |
| Seção 4 (Technology Mobile) — layout específico | Nova seção sem reuso direto de layout shell; o grid de 15 ícones de detalhe é único nesta página | Estrutura não mapeada em nenhum layout existente | y |
| Seção 10 (Testimonials) — reaproveitar `Testimonials.vue` | Sim, via `SiteUrbanoTestimonials.vue` wrapping `Testimonials.vue` com os 2 depoimentos reais desta página (Márcio Carmona/Carmona Imóveis e Mauro Alencar/Ideal Imóveis) | Mesma abordagem de todos os `Crm*Testimonials.vue` existentes | y |
| Seção 11 (FAQ) — reaproveitar `Faq.vue` | Sim, via `SiteUrbanoFaq.vue` wrapping `Faq.vue` com as 6 perguntas/respostas reais desta página | Mesma abordagem de todos os `Crm*Faq.vue` existentes | y |
| Seção 9 (Other Modules) — reaproveitar `CrmOtherModules.vue` | Não — criar `SiteUrbanoOtherModules.vue` novo; os cards listam módulos de Sites (Rural, Loteadoras), não CRM | Conteúdo fundamentalmente diferente; apenas o padrão visual de card é referência | y |
| Depoimentos — texto dos cards | Extrair do Figma durante implementação; podem coincidir com os de `CrmUrbanoTestimonials.vue` (mesmos depoentes) mas devem ser extraídos independentemente | Textos de depoimento podem ter variações entre páginas — nunca assumir igualdade sem comparação direta | n (extrair na implementação) |
| Links de "Other Modules" | "Site para Imobiliárias Rurais" → placeholder `/modulos/site-para-imobiliarias-rurais`; "Site para Loteadoras" → placeholder `/modulos/site-para-loteadoras` | Páginas ainda não existem; comportamento intencional (mesmo padrão de links de módulos não construídos em toda a plataforma) | y |
| Assets visuais (mockup tablet, mockup phone, mockup laptop, sites showcase, fotos de categorias de imóvel) | Imagens estáticas exportadas do Figma via MCP, salvas em `public/images/modulos-site-urbano/`, mesma abordagem de `CrmTechnology.vue` (AD-011 pattern) | Composições com dezenas de sub-elementos; recriar como HTML não adiciona valor e contraria precedente estabelecido no projeto | y |
| Manifest de conteúdo | Criar `FIGMA_CONTENT_MANIFEST_SITE_URBANO.md` na raiz do repositório durante implementação | AD-003: cada página Figma tem seu próprio arquivo de manifest com conteúdo extraído 1:1 antes da implementação | y |

**Open questions:** none — todas resolvidas ou registradas acima.

---

## User Stories

### P1: Visitante acessa a página e vê a proposta de valor principal ⭐ MVP

**User Story**: Como visitante do site (gestor ou sócio de imobiliária urbana), eu quero acessar `/modulos/site-para-imobiliarias-urbanas` e ver imediatamente a proposta de valor do produto (hero + showcase de sites reais + tecnologia de ficha de imóvel), para entender o que a SUB100 oferece neste produto.

**Why P1**: Sem o hero e as primeiras seções de proposta de valor, a página não tem motivo de existir; é o mínimo para ser útil.

**Acceptance Criteria**:

1. WHEN um visitante navega para `/modulos/site-para-imobiliarias-urbanas` THEN o sistema SHALL renderizar a página com status HTTP 200.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Hero (Figma node `3135:7086` filho 1) com exatamente um `<h1>` contendo "Site para Imobiliárias Urbanas", a descrição do produto ("Indicado para imobiliárias com imóveis residenciais e comerciais, terrenos e lançamentos, com apresentação completa de cada oferta."), os 2 badges informativos ("Publicação Integrado" e "Meu Site"), os ícones de redes sociais, o CTA principal e a composição visual com foto e setas decorativas, fiéis ao node Figma.
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Sites Showcase (filho 2) com o H2 "Sites desenvolvidos para impulsionar a captação e o fechamento de negócios da sua imobiliária urbana", a descrição, o CTA "Testar grátis por 30 dias" e o mockup com o site IDEAL e os 3 cards de portfólio (ALBOR Residence, AXIS, MAIORI), fiéis ao node.
4. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Technology Property (filho 3) com o H2, a descrição, o mockup de tablet/device com os indicadores ("Imóveis atualizados no site", "Sincronizados em portais") e as 4 features com ícone, título e descrição (Descritivo técnico completo, Diferenciais do imóvel, Documentos de apoio, Mapas interativos), além do CTA "Agendar Demonstração", fiéis ao node.

**Independent Test**: Rodar `pnpm dev`, abrir `/modulos/site-para-imobiliarias-urbanas` e confirmar que as 3 primeiras seções carregam com conteúdo, texto e imagens corretos, sem depender das demais.

---

### P2: Visitante explora as funcionalidades detalhadas do produto

**User Story**: Como visitante já interessado, eu quero ver como o produto funciona em detalhe (versão mobile, idiomas internacionais, controle do site, integração de ferramentas e tipos de imóvel), para avaliar se atende à operação da minha imobiliária.

**Why P2**: Aprofunda a decisão de compra; a página já é navegável sem essas seções, mas elas constroem o caso de valor.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Technology Mobile (filho 4) com o H2, a descrição, o mockup do smartphone e a legenda "Legenda dos detalhes do imóvel" com os 15 ícones de detalhe de imóvel (Dormitórios, Banheiros, Garagem de vaga, Área privativa, Área Total, Face do imóvel, Posição na quadra, Vista, Torres, Andares, Unidades, Pavimentos, Ano da construção, Área do terreno, Ambientes), fiéis ao node.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção International (filho 5) com o H2 "Fale o idioma dos seus clientes internacionais", a descrição sobre tradução automática, a cadeia de logos (SUB100 on → SUB100 → Google → www.) e a lista de 6 idiomas com bandeiras (Português PT, Inglês EN, Espanhol ES, Alemão DE, Italiano IT, Chinês ZH), fiéis ao node.
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Control (filho 6) com o H2 "Tenha controle total sobre o site da sua imobiliária", a descrição, o mockup de laptop e as 4 features com ícone, título e descrição (SEO e Redes Sociais, Organização e Conteúdo, Banners Personalizados, Conteúdo Institucional), fiéis ao node.
4. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Tools (filho 7) com o H2 "Adicione as principais ferramentas ao seu site", a descrição, o label "SIMPLES DE CONFIGURAR", os 3 passos de configuração (Copie o código / Adicione no painel / Ative no site), o diagrama circular com SUB100 no centro rodeado de ícones de ferramentas compatíveis e o CTA "Integrações ativas", fiéis ao node.
5. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Property Types (filho 8) com o H2 "Imóveis para diferentes projetos e momentos da vida", a descrição e as 5 categorias de imóvel com foto e label (Terreno, Lazer, Lançamento, Residencial, Comercial), fiéis ao node.

**Independent Test**: Rolar a página até cada seção e confirmar que renderiza conteúdo, textos e composições visuais corretamente.

---

### P3: Visitante confia no produto, conhece módulos irmãos e tira dúvidas

**User Story**: Como visitante em fase final de decisão, eu quero ver depoimentos reais de clientes, conhecer outros módulos de sites disponíveis e tirar dúvidas específicas sobre o produto, para fechar o ciclo de descoberta.

**Why P3**: Prova social, cross-sell dos outros módulos e redução de fricção de compra.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Other Modules (filho 9) com o H2 "Conheça os outros módulos de Sites & Hotsites", a descrição e 2 cards com CTA "Clique aqui →": "Site para Imobiliárias Rurais" (com descrição e ícone) e "Site para Loteadoras" (com badge BETA e descrição), cada um com href apontando para a rota real esperada (mesmo que ainda retorne 404).
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Testimonials (filho 10) com o H2 "O que nossos clientes falam dos nossos produtos e serviços", a logomarca SUB100 on e 2 cards de depoimento com 5 estrelas, texto real extraído do Figma, nome/cargo/empresa e logomarca da empresa: Márcio Carmona / Sócio / Carmona Imóveis e Mauro Alencar / Sócio-Diretor / Ideal Imóveis. WHILE a viewport está em `tablet-lg` (992px) ou mais larga THE sistema SHALL exibir os 2 cards com altura igual entre si.
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção FAQ (filho 11) com o H2 "Perguntas Frequentes", o subtítulo sobre dúvidas do produto SUB100 e as 6 perguntas/respostas reais extraídas do Figma (O que compõe o Site / Como conhecer o site antes de contratar / Banners para lançamentos / Tradução para outros idiomas / Configuração de SEO e GEO / Manutenção após contratação) em um accordion.
4. WHILE um item do accordion de FAQ está aberto THE sistema SHALL indicar visualmente o estado expandido (ícone "−" em vez de "+"), consistente com `Faq.vue` / `CrmFaq.vue`.

**Independent Test**: Abrir/fechar itens do FAQ e confirmar troca de ícone; confirmar que cards de depoimento têm altura igual em desktop; confirmar que hrefs dos cards de Other Modules estão corretos.

---

## Edge Cases

- WHILE a largura da viewport é menor que 576px (`mobile-lg`) THE sistema SHALL renderizar todas as 11 seções sem overflow horizontal, sem elementos cortados e sem sobreposição de texto.
- IF o Figma não define composição própria para tablet/mobile em alguma seção THEN o sistema SHALL adaptar a composição do desktop de forma fluida (reduzindo tamanhos/empilhando), sem inventar layout alternativo nem reduzir quantidade de conteúdo.
- IF uma rota de módulo irmão referenciada em "Outros módulos" ainda não existir THEN o link SHALL permanecer apontando para o href real esperado (rota retorna 404 até a página ser construída — comportamento intencional).
- IF o nome de um novo componente de seção colidir com um existente em `app/components/sections/` THEN o sistema SHALL usar o prefixo `SiteUrbano` no nome do arquivo/componente para evitar sobrescrita silenciosa via auto-import (AD-004).
- WHILE a página é renderizada em qualquer breakpoint THE sistema SHALL conter exatamente um `<h1>` (na seção Hero) — nenhuma seção SHALL duplicar esse H1 nem repetir o mesmo texto em elementos visualmente distintos para mobile vs desktop.
- WHILE qualquer componente desta feature for implementado THEN o sistema SHALL não usar `translate-x-*` ou `translate-y-*` do Tailwind (AD-007 — essas utilities não geram CSS neste projeto); SHALL usar flexbox centering (`items-center justify-center`) em vez disso.

---

## Implicit-Requirement Dimensions

| Dimension | Resolução |
| --- | --- |
| Input validation & bounds | N/A — página estática de marketing, sem formulários ou entrada de usuário nesta feature |
| Failure / partial-failure states | N/A — sem chamadas assíncronas, escrita de dados ou operações que possam falhar parcialmente |
| Idempotency / retry / duplicate handling | N/A — sem mutações, submissões ou operações repetíveis |
| Auth boundaries & rate limits | N/A — página pública de marketing, sem autenticação ou controle de acesso |
| Concurrency / ordering | N/A — renderização estática, sem estado compartilhado |
| Data lifecycle / expiry | N/A — conteúdo hardcoded nos componentes Vue (AD-001), sem dados persistidos |
| Observability | N/A — nenhuma métrica ou log novo necessário além do que a infraestrutura de hospedagem já coleta |
| External-dependency failure | N/A — todos os assets são baixados e versionados localmente em `public/` (sem dependência de serviço externo em runtime) |
| State-transition integrity | Aplica-se ao accordion de FAQ — estado expandido/recolhido deve ser indicado visualmente (P3, AC4) |

---

## Requirement Traceability

| Requirement ID | Story | Task | Status |
| --- | --- | --- | --- |
| SU-01 | P1: MVP — rota HTTP 200 | T1 | Pending |
| SU-02 | P1: MVP — seção Hero (H1 único) | T2 | Pending |
| SU-03 | P1: MVP — seção Sites Showcase | T3 | Pending |
| SU-04 | P1: MVP — seção Technology Property | T4 | Pending |
| SU-05 | P2: Funcionalidades — seção Technology Mobile | T5 | Pending |
| SU-06 | P2: Funcionalidades — seção International | T6 | Pending |
| SU-07 | P2: Funcionalidades — seção Control | T7 | Pending |
| SU-08 | P2: Funcionalidades — seção Tools | T8 | Pending |
| SU-09 | P2: Funcionalidades — seção Property Types | T9 | Pending |
| SU-10 | P3: Confiança — seção Other Modules | T10 | Pending |
| SU-11 | P3: Confiança — seção Testimonials | T11 | Pending |
| SU-12 | P3: Confiança — seção FAQ | T12 | Pending |
| SU-13 | P3: Confiança — FAQ state visual | T12 | Pending |
| SU-14 | Edge: responsividade sem overflow | T13 | Pending |
| SU-15 | Edge: sem colisão de nomes (prefixo SiteUrbano) | T2–T12 | Pending |
| SU-16 | Edge: H1 único em qualquer breakpoint | T2, T13 | Pending |
| SU-17 | Edge: sem translate-x/y (AD-007) | T2–T12 | Pending |

**ID format:** `SU-[NUMBER]`

**Status values:** Pending → In Design → In Tasks → Implementing → Verified

**Coverage:** 17 total, 17 mapeados para tasks, 0 não mapeados.

---

## Success Criteria

- [ ] `/modulos/site-para-imobiliarias-urbanas` renderiza as 11 seções do Figma, na ordem correta, com conteúdo extraído fielmente do node `3135:7086` (sem texto inventado) e registrado em `FIGMA_CONTENT_MANIFEST_SITE_URBANO.md`.
- [ ] `pnpm build` completa sem erros com a nova rota incluída.
- [ ] A página é visualmente fiel ao Figma e responsiva (desktop/tablet/mobile), sem overflow horizontal, elementos cortados ou sobrepostos em qualquer viewport.
- [ ] A página contém exatamente um `<h1>`, sem headings ou conteúdo duplicado entre variantes responsivas.
- [ ] Nenhum componente desta feature usa `translate-x-*` / `translate-y-*` do Tailwind (AD-007).
- [ ] `pnpm build` inclui o chunk da rota (`site-para-imobiliarias-urbanas-*.mjs`) no output de produção.
