# CRM Imobiliário Urbano (página `/modulos/crm-imobiliario-urbano`) Specification

## Problem Statement

O mega-menu "Módulos" (`HeaderBar.vue`) já lista "CRM Imobiliário Urbano", e `CrmOtherModules.vue` (na página `/modulos/crm`) já lista um card "CRM Imobiliário Urbano" — mas ambos apontam para rotas placeholder (`/modulos` e `/modulos/urbano`) sem página real por trás. O design completo já existe no Figma (arquivo `vX7qKnnXSOW8zv4kAuS2eN`, section "CRM Imobiliário Urbanos", frame `3089:5956`, 1920×10112px, 11 seções de conteúdo) e precisa ser portado para o site em Nuxt na rota real `/modulos/crm-imobiliario-urbano`, seguindo o Figma como fonte de verdade — mesmo quando uma seção lembrar visualmente algo já existente em `/modulos/crm`.

## Out of Scope

Explicitamente excluído. Documentado para prevenir scope creep.

| Feature | Reason |
| --- | --- |
| Construir `/modulos/rural`, `/modulos/temporada` ou outras páginas `/modulos/*` | Fora do escopo — cada uma é sua própria feature futura; aqui apenas os links reais para elas (padrão já existente no código) são preservados como hrefs. |
| Alterar `/modulos/crm` (a página CRM Imobiliário genérica já existente) | Já existe e não faz parte desta feature; apenas seu componente `CrmOtherModules.vue` recebe uma correção de href de uma linha (ver Assumptions). |
| Adicionar test runner (Vitest/Playwright) ao projeto | Decisão de infraestrutura cross-cutting já registrada como fora de escopo em `AD-002`/`CLAUDE.md`. |
| Tornar o conteúdo dinâmico/editável via CMS | Todo o conteúdo do site é hardcoded nos componentes Vue (`AD-001`); esta feature segue o mesmo padrão. |
| Recriar os mockups de produto (telas do SUB100, dashboard, Kanban, gráfico de leads) como HTML/CSS pixel-a-pixel | Mesma abordagem já usada em `CrmTechnology.vue`/`CrmPublishing.vue`: imagens estáticas exportadas do Figma via MCP para composições de produto com dezenas de sub-elementos; recriar ao vivo seria desproporcional ao valor. Elementos de UI simples (cards de texto, ícones, conectores) dentro dessas composições são markup real quando o Figma já os expõe como camadas simples (ex.: os 3 cards do Kanban "Sales Funnel", os nós do diagrama "Leads Chart"). |

---

## Assumptions & Open Questions

Toda ambiguidade foi resolvida ou registrada aqui — nada fica silenciosamente indefinido.

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Nomenclatura dos componentes de seção novos | Prefixo `CrmUrbano` em todos (`CrmUrbanoHero.vue`, `CrmUrbanoTechnology.vue`, …), sem subpasta, junto aos demais em `app/components/sections/` | Mesmo raciocínio de `AD-004`: auto-import via `pathPrefix: false` resolve por nome de arquivo; `/modulos/crm` já usa o prefixo `Crm*` sozinho, então esta página (uma página irmã, não a mesma) precisa de um prefixo próprio para não colidir nem sugerir que reaproveita conteúdo daquela página | y |
| Frame "Claude, não mexe site e não coloca no site" (node `3554:3142`, 1920×85, sobreposto à área do header) | Ignorar esse frame; usar o `<TheHeader />`/`<HeaderBar />` globais já existentes (mesmos de todas as páginas), sem criar nenhum componente de header novo para esta página | É uma nota do próprio arquivo Figma endereçada a quem for implementar, coincidindo em posição/tamanho com a instância "Header" real (também presente no frame) — o header do site já é um componente global compartilhado por todas as páginas | y |
| Seção "Testimonials" (node `3089:7987`) — reaproveitar `CrmTestimonials.vue` ou clonar | Clonar como `CrmUrbanoTestimonials.vue`: mesma estrutura/layout (bloco lavanda, logo SUBSEE on, 2 cards) já validada em `CrmTestimonials.vue`, mas com o conteúdo real desta página (depoimentos de Marcio Carmona/Carmona Imóveis e Edson Naka/Legado Urbano, diferentes dos de `/modulos/crm`) | O layout dos dois nodes é visualmente idêntico (mesmo padrão de card), mas o conteúdo (texto, empresas, pessoas) diverge — copiar o componente existente sem parametrizar duplicaria markup; cloná-lo com o padrão já testado (larguras em %, cards de altura igual) é mais seguro que reinventar | y |
| Seção "Other Modules" (node `3089:8006`) — reaproveitar `CrmOtherModules.vue` ou clonar | Clonar como `CrmUrbanoOtherModules.vue`: mesma estrutura de card, mas com os 3 módulos que o Figma desta página realmente lista (CRM Imobiliário → `/modulos/crm`, CRM Imobiliário Rural → `/modulos/rural`, CRM para Temporada → `/modulos/temporada` — excluindo "Urbano", a própria página atual) | `CrmOtherModules.vue` lista Urbano/Rural/Temporada (exclui o CRM genérico, pois está *na* página genérica); esta página precisa da lista complementar (inclui o genérico, exclui Urbano) — conteúdo diferente, não um bug | y |
| Seção "FAQ" (node `3089:8011`) — reaproveitar `CrmFaq.vue` ou clonar | Clonar como `CrmUrbanoFaq.vue`: mesmo padrão visual/accordion (ícones "+"/"−" reais do Figma, já resolvidos em `AD-008`), com as 6 perguntas/respostas reais desta página (conteúdo específico de CRM Urbano, diferente das perguntas de `/modulos/crm`) | Mesmo raciocínio de `AD-008` — fidelidade ao node real desta página, não ao padrão de outra página só porque o tipo de seção é o mesmo | y |
| Entry points para a nova rota | Corrigir `HeaderBar.vue` (`CRM Imobiliário Urbano` → `/modulos/crm-imobiliario-urbano`, hoje `/modulos`) e `CrmOtherModules.vue` (card "CRM Imobiliário Urbano" → `/modulos/crm-imobiliario-urbano`, hoje `/modulos/urbano`) como tarefas finais desta feature | Mesmo padrão do fechamento de `crm-imobiliario`: a página só é alcançável de verdade se os pontos de entrada já publicados no site apontarem para ela | y |
| Composições de produto com muitos sub-elementos (mockup do CRM em "Technology", telas/mapa em "Portfolio", app SUB100 em "Portal Integrations", dashboard em "Dashboard") | Imagem estática exportada via MCP (`NuxtImg`/`NuxtPicture`), mesma abordagem de `CrmTechnology.vue` | Dezenas de sub-camadas puramente ilustrativas por composição; recriar ao vivo não muda a fidelidade visual e contraria o precedente já estabelecido no projeto | y |
| Cards com poucos elementos e texto real (Kanban "Sem Contato/Em Atendimento/Em Negociação" em Sales Funnel; nós "Site/Portais/WhatsApp/Redes Sociais/Indicações" + "João Silva/Mariana Costa/Rafael Lima" em Leads Chart; os 4 stat cards em Reports) | Markup HTML/CSS real (não imagem), com o texto extraído do Figma | São camadas de texto/retângulo simples no Figma (não uma composição de produto complexa) — recriável fielmente como componente, consistente com o padrão de cards já usado em outras seções `Crm*` | y |

**Open questions:** none — todas resolvidas ou registradas acima.

---

## User Stories

### P1: Visitante acessa a página do módulo Urbano e vê a proposta de valor principal ⭐ MVP

**User Story**: Como visitante do site (potencial cliente de imobiliária urbana), eu quero acessar `/modulos/crm-imobiliario-urbano` a partir do mega-menu do header e ver a proposta de valor principal (hero com composição de produto e categorias de imóvel), para entender rapidamente o que o módulo oferece.

**Why P1**: Sem isso, o item já publicado no mega-menu leva a um placeholder — é o valor mínimo demonstrável.

**Acceptance Criteria**:

1. WHEN um visitante navega para `/modulos/crm-imobiliario-urbano` THEN o sistema SHALL renderizar a página com status HTTP 200.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Hero/Top (node `3554:3036`) com o H1 "Acelere seus negócios no mercado imobiliário urbano" (único H1 da página), a descrição, os 3 ícones de categoria (lançamentos, venda, locação — não 5, diferente do Hero de `/modulos/crm`), a composição da Coluna 02 (foto + os 3 cards "Apartamento"/"Proposta em análise"/"Publicação integrado" + curvas decorativas + ícone de calculadora) e o divisor ondulado inferior, fiéis ao node.
3. WHEN um visitante clica no item "CRM Imobiliário Urbano" do mega-menu "Módulos" (`HeaderBar.vue`) THEN o sistema SHALL navegar para `/modulos/crm-imobiliario-urbano` (em vez do placeholder `/modulos` atual).

**Independent Test**: Rodar `pnpm dev`, abrir o mega-menu do header, clicar em "CRM Imobiliário Urbano" e confirmar que a página carrega com a seção Hero completa e funcional, sem depender das demais seções (P2/P3).

---

### P2: Visitante explora os recursos do CRM Urbano em profundidade

**User Story**: Como visitante já convencido pelo hero, eu quero ver como o produto organiza cadastro, portfólio, atendimento, leads, metas, publicação em portais e o dashboard, para avaliar se atende à operação da minha imobiliária urbana.

**Why P2**: Aprofunda a decisão de compra, mas a página já é demonstrável e navegável sem essas seções (não bloqueia o MVP).

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Technology (node `3089:6048`) com o H2 "Do cadastro à publicação, tudo em um só lugar", a descrição, o CTA "Testar grátis por 30 dias" e o mockup estático do fluxo de cadastro de imóvel do SUB100.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Portfolio (node `3089:6425`) com o H2 "Todo o seu portfólio, sob controle e pronto para gerar negócio", a descrição, o mockup de telas/mapa e as 4 subseções com título (H3) e descrição: "Organização do portfólio", "Mídias e divulgação organizadas", "Gestão de proprietário e angariação", "Integração com portais imobiliários".
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Sales Funnel (node `3089:7064`) com o H2 "Cada lead enviado para o lugar certo, e segue para o corretor da fila, conforme o perfil de cada oportunidade", a descrição, e as 3 colunas Kanban ("Sem Contato" 20, "Em Atendimento" 12, "Em Negociação" 8) cada uma com seus cards de lead reais extraídos do Figma.
4. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Leads Chart (node `3089:7130`) com o H2 "Leads de todos os canais, no corretor certo, na hora certa", a descrição, e o diagrama com os 5 canais de origem (Site, Portais, WhatsApp, Redes Sociais, Indicações), o nó central "CRM SUB100" e os 3 corretores de destino (João Silva, Mariana Costa, Rafael Lima).
5. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Reports (node `3089:7235`) com o H2 "Metas e resultados, acompanhados em tempo real", a descrição, e os 4 stat cards (68% Taxa de conversão, 2h Tempo médio de resposta, 312 Leads este mês, 94% Metas atingidas) com seus respectivos indicadores secundários.
6. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Portal Integrations (node `3089:7282`) com o H2 "Publique seus imóveis nos principais portais", a descrição e o mockup do app com os ícones de portal decorativos (SUB100, VivaReal, imovelweb, ZAP, OLX, Chaves na Mão, 123i — 7 badges, não 6; texto corrigido em 2026-09-09 após a validação identificar o node real `3089:7427` para o 123i, ausente da contagem original pré-extração).
7. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Dashboard (node `3089:7477`) com o H2 "O painel que dá clareza ao seu negócio", a descrição, as 4 subseções com título (H3) e descrição ("Visão completa em tempo real", "Alertas que evitam perda de negócio", "Indicadores por tipo de negócio", "Gestão de equipe integrada") e o mockup do dashboard com os 2 badges flutuantes ("1.271 Imóveis ativos", "316 Vendidos/Alugados").

**Independent Test**: Rolar a página até cada uma dessas 7 seções e confirmar que cada uma renderiza seu conteúdo, textos e imagens/composições corretamente, em isolamento visual das demais.

---

### P3: Visitante confia no produto, descobre módulos irmãos e tira dúvidas

**User Story**: Como visitante em fase final de decisão, eu quero ver prova social, conhecer os outros módulos do CRM e tirar dúvidas comuns sobre o CRM Urbano especificamente, para fechar o ciclo de descoberta e confiança.

**Why P3**: Reforça conversão e completa a navegação, mas não é necessário para a página existir e cumprir seu propósito central.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Testimonials (node `3089:7987`) com o H2 "O que nossos clientes falam dos nossos produtos e serviços", a logomarca SUBSEE on e 2 cards de depoimento (Marcio Carmona/Carmona Imóveis, Edson Naka/Legado Urbano). WHILE a viewport está em `tablet-lg` (992px) ou mais larga (layout lado a lado) THE sistema SHALL exibir os 2 cards com altura igual entre si; abaixo disso os cards são empilhados em coluna única e cada um dimensiona à própria altura de conteúdo — texto corrigido em 2026-09-09 após a validação confirmar que o critério original não escopava a faixa de largura.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Other Modules (node `3089:8006`) com o H2 "Conheça os outros módulos do CRM Imobiliário" e 3 cards linkando para rotas reais: CRM Imobiliário → `/modulos/crm`, CRM Imobiliário Rural → `/modulos/rural`, CRM para Temporada → `/modulos/temporada`.
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção FAQ (node `3089:8011`) com o H2 "Perguntas Frequentes" como um accordion com as 6 perguntas/respostas reais extraídas do Figma (o que é o CRM Urbano, distribuição de leads, publicação automática em portais, acompanhamento de metas, tipos de negócio atendidos, teste antes de contratar).
4. WHILE um item do accordion de FAQ está aberto THE sistema SHALL indicar visualmente o estado expandido (ícone "−" em vez de "+"), consistente com `CrmFaq.vue`.
5. WHEN um visitante clica no card "CRM Imobiliário Urbano" de `CrmOtherModules.vue` (seção Other Modules de `/modulos/crm`) THEN o sistema SHALL navegar para `/modulos/crm-imobiliario-urbano` (em vez do placeholder `/modulos/urbano` atual).

**Independent Test**: Na página, abrir/fechar um item do FAQ e confirmar a troca de estado visual; clicar em cada card de "Outros módulos" e confirmar que o link aponta para a rota esperada; a partir de `/modulos/crm`, clicar no card "CRM Imobiliário Urbano" e confirmar que leva à nova página.

---

## Edge Cases

- WHILE a largura da viewport é menor que 576px (breakpoint `mobile-lg`) THE sistema SHALL renderizar todas as 11 seções sem overflow horizontal, sem elementos cortados e sem sobreposição.
- IF o Figma não define uma composição própria para tablet/mobile em alguma seção (a maioria dos nodes só tem frame desktop) THEN o sistema SHALL adaptar a MESMA composição/conteúdo do desktop para caber de forma fluida (reduzindo tamanhos/empilhando), em vez de inventar um layout alternativo ou reduzir a quantidade de elementos.
- IF uma rota de página irmã referenciada em "Outros módulos" ainda não existir (`/modulos/rural`, `/modulos/temporada`) THEN o link SHALL permanecer apontando para o href real esperado (a página retorna 404 até ser construída em uma feature futura — comportamento intencional, já usado em `/modulos/crm`).
- IF o nome de um novo componente de seção colidir com um componente já existente em `app/components/sections/` THEN o sistema SHALL usar o prefixo `CrmUrbano` no nome do arquivo/componente para evitar sobrescrita silenciosa via auto-import.
- WHILE a página é renderizada em qualquer breakpoint THE sistema SHALL conter exatamente um `<h1>` (na seção Hero) — nenhuma seção SHALL duplicar esse H1 nem repetir o mesmo texto em elementos visualmente distintos para mobile/tablet vs. desktop.

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
| URB-01 | P1: Proposta de valor principal | T13 | Verified |
| URB-02 | P1: Proposta de valor principal | T2 | Verified |
| URB-03 | P1: Proposta de valor principal | T14 | Verified |
| URB-04 | P2: Recursos em profundidade — Technology | T3 | Verified |
| URB-05 | P2: Recursos em profundidade — Portfolio | T4 | Verified |
| URB-06 | P2: Recursos em profundidade — Sales Funnel | T5 | Verified |
| URB-07 | P2: Recursos em profundidade — Leads Chart | T6 | Verified |
| URB-08 | P2: Recursos em profundidade — Reports | T7 | Verified |
| URB-09 | P2: Recursos em profundidade — Portal Integrations | T8 | Verified |
| URB-10 | P2: Recursos em profundidade — Dashboard | T9 | Verified |
| URB-11 | P3: Confiança, módulos irmãos e FAQ — Testimonials | T10 | Verified |
| URB-12 | P3: Confiança, módulos irmãos e FAQ — Other Modules | T11 | Verified |
| URB-13 | P3: Confiança, módulos irmãos e FAQ — FAQ | T12 | Verified |
| URB-14 | P3: Confiança, módulos irmãos e FAQ — FAQ state | T12 | Verified |
| URB-15 | P3: Confiança, módulos irmãos e FAQ — link de `/modulos/crm` | T15 | Verified |
| URB-16 | Edge case: responsividade | T16 | Verified |
| URB-17 | Edge case: colisão de nomes | T1–T12 (prefixo `CrmUrbano`) | Verified |
| URB-18 | Edge case: H1 único | T13, T16 | Verified |

**ID format:** `URB-[NUMBER]`

**Status values:** Pending → In Design → In Tasks → Implementing → Verified

**Coverage:** 18 total, 18 mapped to tasks, 0 unmapped.

**Nota de verificação (T16):** auditoria em navegador headless (Playwright/chromium) na build de produção (`node .output/server/index.mjs`) em 320/375/576/768/991/992/1300/1440/1920px — 0px de overflow horizontal, 0 erros de console/página, 0 requisições falhas, 0 imagens quebradas, 1 `<h1>`, 10 `<h2>` (uma por seção não-Hero), 8 `<h3>` de conteúdo (4 em Portfolio + 4 em Dashboard; os outros 3 `<h3>` são do footer global), 0 sobreposições reais e 0 elementos cortados nas 11 seções (as ocorrências inicialmente sinalizadas na seção FAQ eram falsos positivos dos `<details>` fechados, confirmado via `checkVisibility()`), 0 headings/conteúdo duplicados entre variantes responsivas.

**Desvio de rota registrado (URB-12):** o card "CRM para Temporada" de `CrmUrbanoOtherModules.vue` aponta para `/modulos/crm-imobiliario-temporada` (rota real, página já existente no repo) em vez do placeholder `/modulos/temporada` previsto no texto original de P3 AC2 — apontar para o placeholder seria um link sabidamente quebrado, e `CrmOtherModules.vue`/`HeaderBar.vue` já apontam para a rota real. "CRM Imobiliário Rural" segue no placeholder `/modulos/rural` porque a página ainda não existe (comportamento intencional já documentado em Edge Cases).

---

## Success Criteria

- [x] `/modulos/crm-imobiliario-urbano` renderiza as 11 seções do Figma, na ordem correta, com conteúdo extraído fielmente (sem texto inventado) e registrado em `FIGMA_CONTENT_MANIFEST_CRM_URBANO.md`.
- [x] O mega-menu do header e o card "CRM Imobiliário Urbano" de `/modulos/crm` navegam corretamente até a nova página.
- [x] `pnpm build` completa sem erros com a nova rota incluída (`.output/server/chunks/build/crm-imobiliario-urbano-*.mjs`).
- [x] A página é visualmente fiel ao Figma e responsiva (desktop/tablet/mobile), sem overflow horizontal, elementos cortados ou sobrepostos.
- [x] A página contém exatamente um `<h1>`, sem headings ou conteúdo duplicado entre variantes responsivas.
