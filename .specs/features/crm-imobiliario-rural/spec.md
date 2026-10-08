# CRM Imobiliário Rural (página `/modulos/crm-imobiliario-rural`) Specification

## Problem Statement

O mega-menu "Módulos" (`HeaderBar.vue`), o card "CRM Imobiliário Rural" de `CrmOtherModules.vue` (na página `/modulos/crm`) e a CTA da seção `HeroRural.vue` (teaser da Home) já citam o módulo Rural, mas apontam para rotas placeholder inconsistentes entre si (`/modulos`, `/modulos/rural`, `/modulos/rurais`) sem página real por trás. O design completo já existe no Figma (arquivo `vX7qKnnXSOW8zv4kAuS2eN`, frame "Page", nodeId `3089:13233`, 1920×10241.5px, 12 seções de conteúdo) e precisa ser portado para o site em Nuxt na rota real `/modulos/crm-imobiliario-rural`, seguindo o Figma como fonte de verdade — mesmo quando uma seção lembrar visualmente algo já existente em `/modulos/crm`. Esta página tem 5 padrões visuais sem precedente no restante do site (radar de cliente/imóvel, linha do tempo de negociação, card de assinatura de contrato, mapa de performance regional, vitrine de compradores estrangeiros).

## Out of Scope

Explicitamente excluído. Documentado para prevenir scope creep.

| Feature | Reason |
| --- | --- |
| Construir `/modulos/crm-imobiliario-urbano` ou `/modulos/temporada` | Fora do escopo — cada uma é sua própria feature futura; aqui apenas os links reais para elas (padrão já existente no código) são preservados como hrefs. |
| Alterar `/modulos/crm` (a página CRM Imobiliário genérica já existente) | Já existe e não faz parte desta feature; apenas seu componente `CrmOtherModules.vue` recebe uma correção de href de uma linha (ver Assumptions). |
| Adicionar test runner (Vitest/Playwright) ao projeto | Decisão de infraestrutura cross-cutting já registrada como fora de escopo em `AD-002`/`CLAUDE.md`. |
| Tornar o conteúdo dinâmico/editável via CMS | Todo o conteúdo do site é hardcoded nos componentes Vue (`AD-001`); esta feature segue o mesmo padrão. |
| Recriar mockups/composições complexas (tela de cadastro do SUB100, mapa de performance regional, vitrine de compradores estrangeiros) como HTML/CSS pixel-a-pixel | Mesma abordagem já usada em `CrmTechnology.vue`/`CrmPublishing.vue`: imagem estática exportada do Figma via MCP; ver `FIGMA_CONTENT_MANIFEST_CRM_RURAL.md`. Cards com poucos elementos e texto real (ficha da propriedade, radar de cliente, timeline, card de contrato, stat cards) são markup real. |

---

## Assumptions & Open Questions

Toda ambiguidade foi resolvida ou registrada aqui — nada fica silenciosamente indefinido.

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Nomenclatura dos componentes de seção novos | Prefixo `CrmRural` em todos (`CrmRuralHero.vue`, `CrmRuralTechnology.vue`, …), sem subpasta, junto aos demais em `app/components/sections/` | Mesmo raciocínio de `AD-004`: auto-import via `pathPrefix: false` resolve por nome de arquivo; esta página é irmã de `/modulos/crm` e da futura `/modulos/crm-imobiliario-urbano`, cada uma com prefixo próprio para não colidir | y |
| Frame "Claude, não mexe site e não coloca no site" (node `3556:5777`, 1920x85, sobreposto à área do header) | Ignorar esse frame; usar `<HeaderBar />`/`<Footer />` globais já existentes (instâncias `3089:13235` e `3089:13234` no Figma), sem criar componente de header/footer novo para esta página | É uma nota do próprio arquivo Figma endereçada a quem for implementar, coincidindo em posição/tamanho com a instância "Header" real (também presente no frame) — mesmo padrão já confirmado nas páginas anteriores | y |
| Seção "Testimonials" (node `3127:3200`) — reaproveitar `CrmTestimonials.vue` ou clonar | Clonar como `CrmRuralTestimonials.vue`: mesma estrutura (bloco lavanda, 2 cards de depoimento com 2 logos cada), mas com o conteúdo real desta página (Henrique Benedini/Benedini Fazendas e Julio Silveira/Vettore Uruguay, diferentes dos de `/modulos/crm`) | Layout idêntico, conteúdo (pessoas, empresas, citações) totalmente diferente — copiar sem parametrizar duplicaria markup; clonar com o padrão já validado é mais seguro que reinventar | y |
| Seção "Other Modules" (node `3089:13356`) — reaproveitar `CrmOtherModules.vue` ou clonar | Clonar como `CrmRuralOtherModules.vue`: mesma estrutura de card, com os 3 módulos que o Figma desta página lista (CRM Imobiliário → `/modulos/crm`, CRM Imobiliário Urbano → `/modulos/crm-imobiliario-urbano`, CRM para Temporada → `/modulos/crm-imobiliario-temporada` — excluindo "Rural", a própria página atual). **Atualização**: verificado no código antes do Batch 2 que `/modulos/crm-imobiliario-urbano` e `/modulos/crm-imobiliario-temporada` já existem como páginas reais e completas (construídas por sessões paralelas nesta máquina) — não são mais placeholders; `HeaderBar.vue` já confirma essas rotas reais. | `CrmOtherModules.vue` lista Urbano/Rural/Temporada (exclui o CRM genérico); esta página precisa da lista complementar (inclui o genérico, exclui Rural) — conteúdo diferente, não um bug, mesmo padrão já usado no planejamento de `crm-imobiliario-urbano` | y |
| Seção "FAQ" (node `3112:16782`) — reaproveitar `CrmFaq.vue` ou clonar | Clonar como `CrmRuralFaq.vue`: mesmo padrão visual/accordion (ícones "+"/"−" reais do Figma, já resolvidos em `AD-008`), com as 6 perguntas/respostas reais desta página (conteúdo específico de CRM Rural) | Mesmo raciocínio de `AD-008` — fidelidade ao node real desta página; aqui o Figma já pede exatamente o padrão "+/−" que o projeto usa, sem divergência de decisão de design | y |
| Composições com muitos sub-elementos (mockup de cadastro em "Technology", telas/mapa em "Portfolio", mapa de satélite em "Regional Performance", vitrine de cards em "Foreign Buyers") | Imagem estática exportada via MCP (`NuxtImg`/`NuxtPicture`), mesma abordagem de `CrmTechnology.vue` | Dezenas de sub-camadas puramente ilustrativas por composição; recriar ao vivo não muda a fidelidade visual e contraria o precedente já estabelecido no projeto | y |
| Cards com poucos elementos e texto real (Ficha da propriedade em Technical Report; mini-cards 01/02/03 e banner de resultado em Client Radar; timeline de 4 etapas em Deal Timeline; card de contrato em Formal Closing; 3 stat cards em Regional Performance) | Markup HTML/CSS real (não imagem), com o texto extraído do Figma | São camadas de texto/retângulo simples no Figma (não uma composição de produto complexa) — recriável fielmente como componente, consistente com o padrão de cards já usado em outras seções `Crm*` | y |
| Fonte de assinatura "Amostely Signature" (card de contrato, Formal Closing) | Usar a fonte se disponível via Google Fonts; caso contrário, usar uma fonte cursiva de fallback do sistema (`cursive`) preservando o texto "João da Silva" e o estilo visual manuscrito | Fonte de nicho, não confirmada como disponível em Google Fonts no momento da escrita deste spec; decisão a validar objetivamente na task de implementação da seção, sem bloquear o restante da spec | n — resolvido objetivamente na task da seção Formal Closing |
| Entry points para a nova rota | Corrigir `HeaderBar.vue` (`CRM Imobiliário Rural` → `/modulos/crm-imobiliario-rural`, hoje `/modulos`), `CrmOtherModules.vue` (card "CRM Imobiliário Rural" → `/modulos/crm-imobiliario-rural`, hoje `/modulos/rural`) e `HeroRural.vue` na Home (CTA → `/modulos/crm-imobiliario-rural`, hoje `/modulos/rurais`) como tarefas finais desta feature | A página só é alcançável de verdade se todos os pontos de entrada já publicados no site apontarem para ela — mesmo padrão do fechamento de `crm-imobiliario` | y |

**Open questions:** none — todas resolvidas ou registradas acima.

---

## User Stories

### P1: Visitante acessa a página do módulo Rural e vê a proposta de valor principal ⭐ MVP

**User Story**: Como visitante do site (corretor ou imobiliária que atua com imóveis rurais), eu quero acessar `/modulos/crm-imobiliario-rural` a partir do mega-menu do header e ver a proposta de valor principal (hero com composição de mapa da propriedade e cards de destaque), para entender rapidamente o que o módulo oferece.

**Why P1**: Sem isso, os pontos de entrada já publicados no site (mega-menu, card "Outros módulos" de `/modulos/crm`, teaser da Home) levam a um placeholder — é o valor mínimo demonstrável.

**Acceptance Criteria**:

1. WHEN um visitante navega para `/modulos/crm-imobiliario-rural` THEN o sistema SHALL renderizar a página com status HTTP 200.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Hero/Top (node `3556:5778`) com o H1 "A tecnologia certa para quem vende terra" (único H1 da página), a descrição, a composição de foto/mapa/cards flutuantes ("Cadastro do imóvel", "Mapas e Atributos") e o divisor ondulado inferior, fiéis ao node.
3. WHEN um visitante clica no item "CRM Imobiliário Rural" do mega-menu "Módulos" (`HeaderBar.vue`) THEN o sistema SHALL navegar para `/modulos/crm-imobiliario-rural` (em vez do placeholder `/modulos` atual).

**Independent Test**: Rodar `pnpm dev`, abrir o mega-menu do header, clicar em "CRM Imobiliário Rural" e confirmar que a página carrega com a seção Hero completa e funcional, sem depender das demais seções (P2/P3).

---

### P2: Visitante explora os recursos técnicos do CRM Rural em profundidade

**User Story**: Como visitante já convencido pelo hero, eu quero ver como o produto organiza cadastro técnico, documentação, radar de clientes, histórico de negociação, contratos e desempenho regional/internacional, para avaliar se atende à operação da minha imobiliária rural.

**Why P2**: Aprofunda a decisão de compra, mas a página já é demonstrável e navegável sem essas seções (não bloqueia o MVP).

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Technology (node `3089:14178`) com o H2 "Gerencie imóveis rurais com precisão e agilidade", a descrição, o CTA "Testar grátis por 30 dias" e o mockup estático da tela de Cadastro de Imóvel do SUB100.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Portfolio (node `3089:13694`) com o H2 "Cada detalhe da propriedade, no lugar certo", a descrição, o mockup de telas/mapa, as 4 funcionalidades com título (H3) e descrição ("Dados de solo e bioma", "Área total e aproveitável", "Índices de pluviometria da região", "Integração com portais imobiliários") e o CTA.
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Technical Report (node `3089:14604`) com o H2 "Toda a documentação da propriedade em um só lugar", a descrição, os 4 itens de checklist, o CTA e o card "Ficha da propriedade" com os 10 dados reais extraídos do Figma (Área da propriedade, Área aberta, Utilização do solo, Aptidão do solo, Bioma, Solo predominante, Juquirada, Altitude média, Teor de argila, Pluviometria, Cultivo predominante, Período das chuvas).
4. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Client Radar (node `3104:15316`) com o H2 "Cada propriedade para o investidor certo", a descrição, o card "Do imóvel ao cliente certo" com os 3 mini-cards numerados (Imóveis, Cruzamento, Resultado) e o banner "Conexões mais rápidas e qualificadas", os 3 itens de checklist e o CTA.
5. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Deal Timeline (node `3089:14743`) com o H2 "Negociações que duram meses, sem perder o histórico", a descrição, a timeline horizontal com as 4 etapas na ordem correta (1ª Visita → Proposta → Negociação → Fechamento) e os 3 itens de lista abaixo (sem CTA nesta seção, conforme o node real).
6. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Formal Closing (node `3104:15311`) com o H2 "Do acordo verbal ao contrato assinado", a descrição, os 4 itens de checklist, o CTA e o card "Contrato de Arrendamento" com a assinatura "João da Silva" e o selo "Assinado eletronicamente".
7. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Regional Performance (node `3089:14814`) com o H2 "Enxergue onde seu portfólio rural performa melhor", a descrição, os 4 itens de checklist, o CTA e o card "Desempenho por região" com o mapa e os 3 stat cards reais (1659 imóveis rurais ativos, 4 países destaque, +24% melhor conversão).
8. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Foreign Buyers (node `3089:13381`) com o H2 "Anuncie propriedades rurais além do Brasil", a descrição, o CTA, a vitrine de cards de propriedades (Uruguai, Paraguai, Bolívia, Argentina, Brasil) e os 5 chips de país abaixo (Brasil, Paraguai, Uruguai, Argentina, Bolívia).

**Independent Test**: Rolar a página até cada uma dessas 8 seções e confirmar que cada uma renderiza seu conteúdo, textos e imagens/composições corretamente, em isolamento visual das demais.

---

### P3: Visitante confia no produto, descobre módulos irmãos e tira dúvidas; navegação global é atualizada

**User Story**: Como visitante em fase final de decisão, eu quero ver prova social, conhecer os outros módulos do CRM e tirar dúvidas comuns sobre o CRM Rural especificamente, e como usuário do site eu quero que todos os pontos de entrada já publicados (menu, card em `/modulos/crm`, teaser da Home) me levem direto a esta página, para fechar o ciclo de descoberta e confiança.

**Why P3**: Reforça conversão e completa a navegação, mas não é necessário para a página existir e cumprir seu propósito central.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Testimonials (node `3127:3200`) com o H2 "O que nossos clientes falam dos nossos produtos e serviços", a logomarca SUBSEE on e 2 cards de depoimento (Henrique Benedini/Benedini Fazendas, Julio Silveira/Vettore Uruguay) com altura igual entre si.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Other Modules (node `3089:13356`) com o H2 "Conheça os outros módulos do CRM Imobiliário" e 3 cards linkando para rotas reais: CRM Imobiliário → `/modulos/crm`, CRM Imobiliário Urbano → `/modulos/crm-imobiliario-urbano`, CRM para Temporada → `/modulos/crm-imobiliario-temporada`.
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção FAQ (node `3112:16782`) com o H2 "Perguntas Frequentes" como um accordion com as 6 perguntas/respostas reais extraídas do Figma (o que é o CRM Rural, teste antes de contratar, atendimento a urbano/temporada, informações registráveis da propriedade, publicação em portais, acompanhamento de metas).
4. WHILE um item do accordion de FAQ está aberto THE sistema SHALL indicar visualmente o estado expandido (ícone "−" em vez de "+"), consistente com `CrmFaq.vue` (`AD-008`).
5. WHEN um visitante clica no card "CRM Imobiliário Rural" de `CrmOtherModules.vue` (seção Other Modules de `/modulos/crm`) THEN o sistema SHALL navegar para `/modulos/crm-imobiliario-rural` (em vez do placeholder `/modulos/rural` atual).
6. WHEN um visitante clica na CTA da seção `HeroRural.vue` na Home THEN o sistema SHALL navegar para `/modulos/crm-imobiliario-rural` (em vez do placeholder `/modulos/rurais` atual).

**Independent Test**: Na página, abrir/fechar um item do FAQ e confirmar a troca de estado visual; clicar em cada card de "Outros módulos" e confirmar que o link aponta para a rota esperada; a partir de `/modulos/crm`, clicar no card "CRM Imobiliário Rural" e a partir da Home clicar na CTA de `HeroRural.vue`, confirmando que ambos levam à nova página.

---

## Edge Cases

- WHILE a largura da viewport é menor que 576px (breakpoint `mobile-lg`) THE sistema SHALL renderizar todas as 12 seções sem overflow horizontal, sem elementos cortados e sem sobreposição.
- IF o Figma não define uma composição própria para tablet/mobile em alguma seção (a maioria dos nodes só tem frame desktop) THEN o sistema SHALL adaptar a MESMA composição/conteúdo do desktop para caber de forma fluida (reduzindo tamanhos/empilhando colunas), em vez de inventar um layout alternativo ou reduzir a quantidade de elementos.
- IF uma rota de página irmã referenciada em "Outros módulos" ainda não existir de fato no código no momento da implementação THEN o link SHALL permanecer apontando para o href real esperado (a página retorna 404 até ser construída — comportamento intencional, já usado em `/modulos/crm`). **Nota**: confirmado antes do Batch 2 que `/modulos/crm-imobiliario-urbano` e `/modulos/crm-imobiliario-temporada` já existem como páginas reais e completas — este edge case não se aplica mais a nenhum dos 3 cards desta seção.
- IF o nome de um novo componente de seção colidir com um componente já existente em `app/components/sections/` THEN o sistema SHALL usar o prefixo `CrmRural` no nome do arquivo/componente para evitar sobrescrita silenciosa via auto-import.
- WHILE a página é renderizada em qualquer breakpoint THE sistema SHALL conter exatamente um `<h1>` (na seção Hero) — nenhuma seção SHALL duplicar esse H1 nem repetir o mesmo texto em elementos visualmente distintos para mobile/tablet vs. desktop.
- IF a fonte "Amostely Signature" (assinatura do card de contrato) não estiver disponível via Google Fonts THEN o sistema SHALL usar uma fonte cursiva de fallback (`cursive`) preservando o texto "João da Silva", sem bloquear a renderização da seção.

---

## Implicit-Requirement Dimensions (sweep — escopo Large)

| Dimension | Resolução |
| --- | --- |
| Input validation & bounds | N/A — página de conteúdo estático, sem formulários ou entrada de usuário nesta feature. |
| Failure / partial-failure states | N/A — não há chamadas assíncronas, escrita de dados ou operações que possam falhar parcialmente; o único "erro" possível é um link/imagem quebrado, coberto pela auditoria de QA (task final). |
| Idempotency / retry / duplicate handling | N/A — não há mutações, submissões ou operações repetíveis nesta feature. |
| Auth boundaries & rate limits | N/A — página pública de marketing, sem autenticação ou controle de acesso. |
| Concurrency / ordering | N/A — renderização estática, sem estado compartilhado ou condições de corrida. |
| Data lifecycle / expiry | N/A — todo o conteúdo é hardcoded nos componentes Vue (`AD-001`), sem dados persistidos, cache ou expiração. |
| Observability | N/A — nenhuma métrica/log novo é necessário além do que a infraestrutura de hospedagem já coleta para qualquer página. |
| External-dependency failure | N/A — todos os assets (imagens/ícones) são baixados e versionados localmente no build (`public/images/`, `public/icons/`), sem dependência de serviço externo em tempo de execução. |
| State-transition integrity | Aplica-se ao accordion de FAQ — ver P3, critério 4 (estado expandido/recolhido deve ser indicado visualmente). |

---

## Requirement Traceability

| Requirement ID | Story | Task | Status |
| --- | --- | --- | --- |
| RUR-01 | P1: Proposta de valor principal | T2 | Verified |
| RUR-02 | P1: Proposta de valor principal | T2 | Verified |
| RUR-03 | P1: Proposta de valor principal | T2 | Verified |
| RUR-04 | P2: Recursos técnicos — Technology | T3 | Verified |
| RUR-05 | P2: Recursos técnicos — Portfolio | T4 | Verified |
| RUR-06 | P2: Recursos técnicos — Technical Report | T5 | Verified |
| RUR-07 | P2: Recursos técnicos — Client Radar | T6 | Verified |
| RUR-08 | P2: Recursos técnicos — Deal Timeline | T7 | Verified |
| RUR-09 | P2: Recursos técnicos — Formal Closing | T8 | Verified |
| RUR-10 | P2: Recursos técnicos — Regional Performance | T9 | Verified |
| RUR-11 | P2: Recursos técnicos — Foreign Buyers | T10 | Verified |
| RUR-12 | P3: Confiança, módulos irmãos e FAQ — Testimonials | T11 | Verified |
| RUR-13 | P3: Confiança, módulos irmãos e FAQ — Other Modules | T12 | Verified |
| RUR-14 | P3: Confiança, módulos irmãos e FAQ — FAQ | T13 | Verified |
| RUR-15 | P3: Confiança, módulos irmãos e FAQ — FAQ state | T13 | Verified |
| RUR-16 | P3: Confiança, módulos irmãos e FAQ — link de `/modulos/crm` | T16 | Verified |
| RUR-17 | P3: Confiança, módulos irmãos e FAQ — link da Home | T17 | Verified |
| RUR-18 | Edge case: responsividade | T18 | Verified |
| RUR-19 | Edge case: colisão de nomes | T2-T13 | Verified |
| RUR-20 | Edge case: H1 único | T14 | Verified |
| RUR-21 | Edge case: fallback de fonte de assinatura | T8 | Verified |

**ID format:** `RUR-[NUMBER]`

**Status values:** Pending → In Design → In Tasks → Implementing → Verified

**Coverage:** 21 total, 21 mapped to tasks, 0 unmapped.

---

## Success Criteria

- [x] `/modulos/crm-imobiliario-rural` renderiza as 12 seções do Figma, na ordem correta, com conteúdo extraído fielmente (sem texto inventado) e registrado em `FIGMA_CONTENT_MANIFEST_CRM_RURAL.md`.
- [x] O mega-menu do header, o card "CRM Imobiliário Rural" de `/modulos/crm` e a CTA de `HeroRural.vue` (Home) navegam corretamente até a nova página.
- [x] `pnpm build` completa sem erros com a nova rota incluída.
- [x] A página é visualmente fiel ao Figma e responsiva (desktop/tablet/mobile), sem overflow horizontal, elementos cortados ou sobrepostos — confirmado por revisão estrutural do código; auditoria independente renderizada (Playwright) fica a cargo do Verifier, seguindo a prática já estabelecida em `crm-imobiliario-urbano`.
- [x] A página contém exatamente um `<h1>`, sem headings ou conteúdo duplicado entre variantes responsivas.
