# CRM Imobiliário Temporada (página `/modulos/crm-imobiliario-temporada`) Specification

## Problem Statement

O mega-menu "Módulos" (`HeaderBar.vue`) e `CrmOtherModules.vue` (na página `/modulos/crm`) já listam "CRM para Temporada" — mas ambos apontam para rotas placeholder (`/modulos/temporada`) sem página real por trás. O design completo já existe no Figma (arquivo `vX7qKnnXSOW8zv4kAuS2eN`, frame `3118:20686`, 1920×10128px, 12 seções de conteúdo) e precisa ser portado para o site em Nuxt na rota real `/modulos/crm-imobiliario-temporada`, seguindo o Figma como fonte de verdade — mesmo quando uma seção lembrar visualmente algo já existente em `/modulos/crm`.

## Out of Scope

| Feature | Reason |
| --- | --- |
| Construir `/modulos/rural`, `/modulos/crm-imobiliario-urbano` (se ainda não existir) ou outras páginas `/modulos/*` | Fora do escopo — cada uma é sua própria feature; aqui apenas os links reais para elas são preservados como hrefs |
| Alterar `/modulos/crm` (a página CRM Imobiliário genérica já existente) além da correção de href | Já existe e não faz parte desta feature; apenas `CrmOtherModules.vue` recebe uma correção de href de uma linha |
| Adicionar test runner (Vitest/Playwright) ao projeto | Decisão de infraestrutura cross-cutting já registrada em `AD-002`/`CLAUDE.md` |
| Tornar o conteúdo dinâmico/editável via CMS | Todo o conteúdo do site é hardcoded nos componentes Vue (`AD-001`); esta feature segue o mesmo padrão |
| Recriar mockups de produto como HTML/CSS pixel-a-pixel | Mesma abordagem já usada em `CrmTechnology.vue`: imagens estáticas exportadas do Figma para composições de produto com dezenas de sub-elementos |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Nomenclatura dos componentes de seção novos | Prefixo `CrmTemporada` em todos (`CrmTemporadaHero.vue`, etc.), sem subpasta | `pathPrefix: false` resolve por nome de arquivo; `HeroTemporada.vue` já existe na Home com esse prefixo, então esta página usa `CrmTemporada*` distinto | y |
| Frame "Claude, não mexe site e não coloca no site" (node `3558:5987`, 1920×85) | Ignorar esse frame; usar o `<TheHeader />` global já existente | É uma nota do Figma endereçada a quem implementar; coincide com a área do header real | y |
| Seção "Testimonials" (node `3127:3371`) — reaproveitar `CrmTestimonials.vue` ou clonar | Clonar como `CrmTemporadaTestimonials.vue`: mesmo layout (bg lavanda, logo SUBSEE on, 2 cards), mas com depoimentos reais desta página (João Calçada/Soma Imóveis, Marcio Carmona/Carmona Imóveis) | Conteúdo diferente do `CrmTestimonials.vue` (que usa Bellakaza e Ideal Imóveis) | y |
| Seção "Other Modules" (node `3118:22313`) — reaproveitar `CrmOtherModules.vue` ou clonar | Clonar como `CrmTemporadaOtherModules.vue`: mesma estrutura de card, mas com 3 módulos que esta página lista (CRM Imobiliário, Urbano, Rural — excluindo Temporada, a própria página) | `CrmOtherModules.vue` lista Urbano/Rural/Temporada (exclui genérico); esta página precisa da lista complementar (inclui genérico, exclui Temporada) | y |
| Seção "FAQ" (node `3127:3510`) — reaproveitar `CrmFaq.vue` ou clonar | Clonar como `CrmTemporadaFaq.vue`: mesmo padrão visual/accordion (ícones +/− reais, `AD-008`), com 6 perguntas específicas de Temporada | Conteúdo diferente; padrão de ícones confirmado por `AD-008` | y |
| Composições de produto com muitos sub-elementos (Technology screenshot, Portfolio app+phone, Automated Messaging card, Financial Transfer payment card) | Imagem estática exportada via MCP (`NuxtImg`/`NuxtPicture`), mesma abordagem de `CrmTechnology.vue` | Dezenas de sub-camadas puramente ilustrativas; recriar ao vivo não muda a fidelidade visual | y |
| Elementos simples com texto real (Calendar grid, Key Board Kanban, Pricing Rules monthly grid, Inteligente before/after cards) | Markup HTML/CSS real com texto extraído do Figma | Camadas de texto/retângulo simples no Figma — recriável fielmente como componente | y |
| Entry points para a nova rota | Corrigir `HeaderBar.vue` (CRM para Temporada → `/modulos/crm-imobiliario-temporada`), `CrmOtherModules.vue` (CRM para Temporada → `/modulos/crm-imobiliario-temporada`) | Mesma abordagem da feature `crm-imobiliario-urbano` | y |

**Open questions:** nenhuma — todas resolvidas ou registradas acima.

---

## User Stories

### P1: Visitante acessa a página do módulo Temporada e vê a proposta de valor principal ⭐ MVP

**User Story**: Como visitante do site (potencial cliente de imobiliária de temporada), eu quero acessar `/modulos/crm-imobiliario-temporada` a partir do mega-menu do header e ver a proposta de valor principal (hero com composição visual e ícone de imóvel), para entender rapidamente o que o módulo oferece.

**Why P1**: Sem isso, o item já publicado no mega-menu leva a um placeholder.

**Acceptance Criteria**:

1. WHEN um visitante navega para `/modulos/crm-imobiliario-temporada` THEN o sistema SHALL renderizar a página com status HTTP 200.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Hero/Top (node `3558:5988`) com o H1 "Simplifique a gestão de imóveis para temporada" (único H1 da página), a descrição, o ícone de imóvel, a foto do homem com laptop, os 2 cards flutuantes ("Casa na Praia" e "Nova reserva") e o divisor ondulado inferior.
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Technology (node `3118:20758`) com o H2 "Da captação à reserva, tudo integrado em um só painel", a descrição, o CTA "Testar grátis por 30 dias →" e o screenshot estático do software.
4. WHEN um visitante clica em "CRM para Temporada" no mega-menu THEN o sistema SHALL navegar para `/modulos/crm-imobiliario-temporada` (em vez do placeholder `/modulos/temporada` atual).

**Independent Test**: Rodar `pnpm dev`, abrir o mega-menu, clicar em "CRM para Temporada" e confirmar que a página carrega com Hero e Technology visíveis e funcionais.

---

### P2: Visitante explora os recursos do CRM Temporada em profundidade

**User Story**: Como visitante já convencido pelo hero, eu quero ver como o produto organiza gestão de imóveis, calendário, check-out, análises de ocupação, comunicação e repasses, para avaliar se atende à operação da minha imobiliária de temporada.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Portfolio (node `3118:21156`) com o H2 "Gerencie imóveis de temporada com agilidade e controle total", a descrição, o mockup estático (app + phone), e as 4 features com H3s: "Calendário de reservas", "Fotos e tour virtual", "Gestão de proprietários e contratos", "Integração com portais de temporada".
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Calendar (node `3118:21800`) com o H2 "Um calendário só para todas as suas locações", a descrição, os 2 feature items ("Status em tempo real", "Gestão simplificada"), o CTA e o card-calendário com grade visual, métricas (94% Ocupação atual, R$ 128k Receita mensal) e legenda (Livre/Baixa/Média/Alta).
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Key Board (node `3120:23218`) com o H2 "Do check-out à próxima reserva, sem atraso", a descrição, as 3 colunas Kanban (Disponível 3, Em Limpeza 2, Ocupado 4) com seus itens reais, e os 3 checkmarks inferiores.
4. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Pricing Rules (node `3118:21958`) com o H2 "Entenda sua alta e baixa temporada", a descrição, os 4 bullets de vantagem e o grid mensal de ocupação por mês (Jan-Dez com percentuais).
5. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Automated Messaging (node `3120:23302`) com o H2 "Fale com o hóspede no momento certo, sem esforço", a descrição, o card de mensagens automáticas (imagem estática), e os 3 checkmarks.
6. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Financial Transfer (node `3118:22085`) com o H2 "Cada reserva, um repasse simples de calcular", a descrição, os 3 feature items ("Rastreio completo do pagamento", "Repasse calculado automaticamente", "Histórico sempre à mão") e o card de pagamento estático.
7. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Inteligente (node `3118:22186`) com o H2 "Da rotina manual para uma operação inteligente", a descrição e os 4 cards ANTES→COM SUBSEE (Informações, Processos, Equipe, Crescimento).

**Independent Test**: Rolar a página até cada seção e confirmar que cada uma renderiza seu conteúdo, textos e imagens/composições corretamente.

---

### P3: Visitante confia no produto, descobre módulos irmãos e tira dúvidas

**User Story**: Como visitante em fase final de decisão, eu quero ver prova social, conhecer os outros módulos do CRM e tirar dúvidas comuns sobre o CRM Temporada especificamente.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Testimonials (node `3127:3371`) com o H2 "O que nossos clientes falam dos nossos produtos e serviços", o logo SUBSEE on, e 2 cards de depoimento (João Calçada/Imobiliária Soma, Marcio Carmona/Carmona Imóveis) com 5 estrelas cada.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Other Modules (node `3118:22313`) com o H2 "Conheça os outros módulos do CRM Imobiliário", e 3 linhas de módulo (CRM Imobiliário → `/modulos/crm`, CRM Imobiliário Urbano → `/modulos/crm-imobiliario-urbano`, CRM Imobiliário Rural → `/modulos/rural`) — excluindo CRM Temporada.
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção FAQ (node `3127:3510`) com o H2 "Perguntas Frequentes", a tagline "Tire suas dúvidas sobre o CRM para Temporada da SUBSEE on." e 6 perguntas accordion com ícones +/− reais (padrão `AD-008`).
4. WHEN a página é renderizada THEN o sistema SHALL conter exatamente um elemento `<h1>` em toda a árvore DOM.
5. WHEN a página é renderizada THEN o sistema SHALL exibir metadados SEO (`<title>`, `<meta name="description">`) via `useSeoMeta()`.

**Independent Test**: Rolar até cada seção e confirmar depoimentos, módulos (com links corretos) e FAQ accordion funcional; inspecionar DOM para confirmar 1 único H1.
