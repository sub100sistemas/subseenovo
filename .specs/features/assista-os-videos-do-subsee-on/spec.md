# Assista os vídeos do SUBSEE on (página `/assista-os-videos-do-subsee-on`) Specification

## Problem Statement

A Home tem o botão "Assista os vídeos do SUBSEE on" (`HeroMain.vue:83-88`) que hoje leva ao canal externo `https://www.youtube.com/@subsee` (`CtaButton` outline, sem ícone). O design de uma página própria para esse conteúdo existe no Figma (arquivo `vX7qKnnXSOW8zv4kAuS2eN`, seção "Assista os videos do SUBSEE on", node `1033:1855`, frame raiz "Page" `3188:3397`, 1920×4334), mas a rota não existe no projeto. Esta feature porta a página 1:1 para Nuxt 4 + Vue 3 + Tailwind v4, seguindo a arquitetura de três camadas do `CLAUDE.md`. Atualizar o botão da Home para a nova rota é uma etapa posterior, fora desta spec.

## Goals

- [ ] A rota `/assista-os-videos-do-subsee-on` responde 200 e renderiza, na ordem do Figma, os 5 blocos de conteúdo (Hero, Vídeo institucional, Vídeos demonstrativos, Conteúdo por perfil com CTA do App SUBSEE, Perguntas Frequentes) entre o Header e o Footer globais.
- [ ] Todo texto, cor, medida e asset vem do Figma e fica registrado em `FIGMA_CONTENT_MANIFEST_ASSISTA_VIDEOS_SUBSEE_ON.md`; nenhum texto é inventado.
- [ ] A página não gera overflow horizontal nos 7 breakpoints do projeto (`app/assets/css/main.css`) e tem exatamente um `<h1>`.
- [ ] Os componentes seguem o `CLAUDE.md`: reuso de `layout/Hero.vue` e `layout/Faq.vue`, dados repetidos em arrays tipados com um `v-for` por card, prefixo próprio nas `sections/`.

## Out of Scope

| Feature | Reason |
| --- | --- |
| Alterar o botão "Assista os vídeos do SUBSEE on" de `HeroMain.vue` para apontar à nova rota | Pedido explícito: o botão deve apontar para a página "posteriormente". Etapa própria, depois que esta página existir |
| Player de vídeo real (embed YouTube, modal, lightbox) | O Figma só desenha o card com botão play, sem URL, ID ou comportamento de reprodução. Ver Q1 |
| Conteúdo dinâmico de vídeos (API do YouTube, CMS, JSON remoto) | Conteúdo é hardcoded nos componentes ([[AD-001]]); os 3 vídeos e 3 perfis do Figma são estáticos |
| Página ou filtro por perfil (destino real dos links "Ver vídeos →") | O Figma não define destino. Ver Q2 |
| Novo item de menu no `HeaderBar.vue` | Nenhum item de nav para esta página existe no Figma (o frame "Header" é a instância global) |
| Test runner (Vitest/Playwright) | Decisão de infraestrutura cross-cutting ([[AD-002]]) |
| Alterar qualquer feature existente (Home, Eventos, Base de Conhecimento, Formulários) | Escopo restrito à nova página |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Rota | `/assista-os-videos-do-subsee-on` (arquivo `app/pages/assista-os-videos-do-subsee-on.vue`) | Decisão inicial do usuário; `app/pages/` não tem rota igual nem parecida | y |
| Prefixo dos componentes de `sections/` | `Videos*` (`VideosHero`, `VideosFeatured`, `VideosDemo`, `VideosProfiles`, `VideosAppCta`, `VideosFaq`) | Nenhum componente `Videos*` existe hoje; segue [[AD-004]] (prefixo por página, `pathPrefix: false`) | y |
| Destino dos links dentro da página ("Assistir ao vídeo →" ×3, "Ver vídeos →" ×3, "Veja mais no App SUBSEE →" e cards com play) | **PENDENTE (Q1, Q2, Q3). Não há decisão.** Fallback provisório, só para a página não ficar com link quebrado enquanto pendente: `https://www.youtube.com/@subsee` (única URL de vídeo real do projeto, já usada em `HeroMain.vue:84`), em nova aba. Não é decisão final e sai quando os destinos forem confirmados | O Figma não traz URL. O fallback existe só para evitar `href` vazio; não vale como definição de produto | n |
| Duração ("03:24", "04:18", "05:02", "03:46") e títulos dos vídeos | Transcritos exatamente do Figma como texto estático | Não inventar; o Figma é a única fonte. Se forem placeholders de design, o time confirma (Q1) | n |
| Responsivo abaixo de 1920px | Derivar dos breakpoints do projeto e das páginas irmãs (colunas empilham, cards em coluna única no mobile). Nenhum frame mobile ou tablet existe no Figma | O Figma só tem 1920px; regra do `CLAUDE.md` para responsivo | y |
| `layout/Hero.vue`: tipografia específica da página | Aprovado: novas props `headingClass` e `descriptionClass`, com os valores atuais como padrão. Os 9 chamadores existentes (`ApisHero`, `BaseConhecimentoHero`, `CrmHero`, `CrmRuralHero`, `CrmTemporadaHero`, `CrmUrbanoHero`, `SiteLoteadorasHero`, `SiteRuralHero`, `SiteUrbanoHero`) não passam essas props e não mudam | Decisão do usuário na aprovação da Etapa 1 | y |
| Branch | `feature/assista-videos-subsee-on`, no worktree `D:\Trabalho\Git\site-subsee-novo`, criada a partir de `feature/formularios` em `29fe303`; os commits `d8adab9` e `29fe303` de `feature/formularios` permanecem intactos | Decisão do usuário; preserva o trabalho de formulários | y |
| Assets | Somente os exportados do Figma desta página. Um asset existente só é reusado se o conteúdo for comprovadamente idêntico (comparado nesta etapa; ver `design.md`) | Decisão do usuário: não reusar por parecença | y |
| Container | `container-page`, com largura de conteúdo de 1400px (Figma: x 260 a 1660) | Mesma largura das demais páginas | y |
| Nome "brunette-woman-hugging-laptop 1" da foto do Hero | O nome da camada não descreve a imagem: o render mostra um homem de blazer marrom com celular. Foto nova, exportada do Figma (PNG 1536×1024 RGBA, com transparência real, verificado na Etapa 2). `modulos-base-de-conhecimento/hero-visual.png` (homem de camisa branca com tablet) e `card_arrow.png` (cards "Acesso Online" e "Equipe treinada") não servem: foto e textos dos cards são outros | Nomes de camada não são conteúdo ([[AD-015]]); comparação visual feita nesta etapa | y |
| Cor do "on" no H1 | `#e72f4d` (vermelho de marca já usado nas outras páginas) | Confirmado no `get_design_context` do H1 (`3188:3419`) | y |
| Comportamento do FAQ | Acordeão nativo do `layout/Faq.vue` (`<details>`), todos os itens fechados por padrão | O Figma desenha 5 itens abertos e o último fechado como render estático; o padrão do projeto (Eventos, CRM) é fechado por padrão | n |
| Fundo do FAQ | Sem painel cinza (fundo branco, itens de 970px), diferente do `#F5F5F5` de Eventos | Figma: bloco "Div" `bg-white`, sem card; `Faq.vue` já expõe `panelClass` | y |

**Open questions** (bloqueiam só valores finais de conteúdo ou link, não a estrutura da página):

- **Q1.** Quais são os vídeos reais (URL ou ID do YouTube, título, duração) do card "Vídeo institucional" e dos 3 cards demonstrativos? O clique deve reproduzir inline (embed ou modal) ou abrir o YouTube em nova aba? Pendente; sem player até resposta. Fallback provisório do link: canal do YouTube (ver tabela).
- **Q2.** Para onde levam os 3 links "Ver vídeos →" da seção por perfil (urbanas, rurais, corretores)? Pendente; fallback provisório: canal do YouTube (ver tabela).
- **Q3.** Qual o destino do botão "Veja mais no App SUBSEE →"? O Figma não define. Pendente; fallback provisório: canal do YouTube (ver tabela).
- **Q4.** A pergunta 6 do FAQ ("Posso sugerir temas para novos vídeos?") não tem texto de resposta no Figma (item desenhado só como cabeçalho, com ícone de fechado). Qual é a resposta? Pendente; o item não recebe resposta inventada. No Figma o item 6 usa o ícone de estado aberto (círculo vazado com traço) mas sem texto, o que sugere resposta esquecida no design. Bloqueia só o item 6.
- **Q5.** Título e descrição SEO da página (`useSeoMeta`). O Figma não traz. Definir na etapa de SEO/conteúdo (decisão do usuário). Sugestão para discussão, sem valor de decisão: title derivado do H1, description derivada do Hero.
- **Q6.** Quando a Home passar a apontar para a nova rota, o link continua abrindo em nova aba? Pendente até o comportamento desejado ser confirmado (etapa posterior).

---

## User Stories

### P1: Visitante acessa a página e vê o Hero ⭐ MVP

**User Story**: Como visitante, quero abrir a página de vídeos do SUBSEE on e entender de imediato do que se trata, para decidir assistir aos vídeos.

**Why P1**: Sem a rota e o Hero não existe página; é o ponto de entrada do futuro botão da Home.

**Acceptance Criteria**:

1. WHEN um visitante navega para `/assista-os-videos-do-subsee-on` THEN o sistema SHALL responder com status HTTP 200 e renderizar Header, o conteúdo da página e Footer globais.
2. WHEN a página é renderizada THEN o sistema SHALL exibir o Hero (node `3188:3398`) com o H1 "Assista aos vídeos do SUBSEE on" (o "on" em `#e72f4d`), a descrição "Escolher um sistema de gestão para sua imobiliária ou equipe de corretores é uma decisão estratégica, que exige análise, clareza e segurança na escolha da plataforma ideal para potencializar suas vendas.", a fileira de 5 ícones de módulo, a foto e os cards flutuantes "Vídeos Práticos" e "Time Capacitado".
3. The sistema SHALL renderizar exatamente um `<h1>` na página, o do Hero.
4. WHEN a viewport tem 1920px de largura THEN o sistema SHALL renderizar o Hero com o H1 em Poppins Bold 36px `#313846`, a descrição em Poppins Regular 20px `#313846` e a altura total de 568px (fundo de 548px mais o divisor de onda).

**Independent Test**: Abrir `/assista-os-videos-do-subsee-on` a 1920px e comparar o topo com o screenshot do node `3188:3398`.

---

### P1: Vídeo institucional e vídeos demonstrativos ⭐ MVP

**User Story**: Como visitante, quero ver o vídeo institucional em destaque e os 3 vídeos demonstrativos, para conhecer a plataforma em poucos minutos.

**Why P1**: É o conteúdo central da página, o que dá nome à feature.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir, após o Hero, a seção "Vídeo institucional" (node `3188:3420`) com o eyebrow "VÍDEO INSTITUCIONAL", o H2 "Conheça o SUBSEE on em poucos minutos", a descrição, as tags "Gestão integrada" e "Mais produtividade" e o card de vídeo de 760×460 com badge "SUBSEE ON • 03:24", botão play de 92px e legenda "Uma visão completa da plataforma".
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção "Vídeos demonstrativos" (node `3188:3438`) com fundo `#f8f9ff`, eyebrow "VÍDEOS DEMONSTRATIVOS", H2 "Veja o SUBSEE on em ação", a descrição "Conteúdos rápidos para conhecer os recursos que fazem diferença na rotina da sua imobiliária." e 3 cards de 430×520 com miniatura em gradiente, duração, botão play, tipo "DEMONSTRAÇÃO", título, descrição e link "Assistir ao vídeo →".
3. The sistema SHALL renderizar os 3 cards demonstrativos a partir de um único array tipado e um único `v-for` sobre um único template de card.
4. WHEN um visitante clica em um card com play ou no link "Assistir ao vídeo →" THEN o sistema SHALL abrir o destino definido na Q1 (enquanto pendente, fallback provisório: canal do YouTube em nova aba; não é decisão final).
5. WHEN um visitante ativa por teclado o botão play de um card THEN o sistema SHALL comportar-se como no item 4, com elemento focável e nome acessível contendo o título do vídeo.

**Independent Test**: A 1920px, comparar as duas seções com os screenshots dos nodes `3188:3420` e `3188:3438`; clicar em cada card e conferir o destino.

---

### P2: Conteúdo por perfil e CTA do App SUBSEE

**User Story**: Como visitante de um segmento específico, quero achar os vídeos do meu perfil (imobiliárias urbanas, rurais, corretores), para ir direto ao que me serve.

**Why P2**: Complementa o conteúdo principal e converte para o app, mas a página funciona sem ele.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção "Conteúdo por perfil" (node `3188:3474`) com eyebrow "CONTEÚDO PARA CADA PERFIL", H2 "Encontre os vídeos ideais para o seu negócio", a descrição "Escolha um tema e descubra como o SUBSEE on pode apoiar sua rotina e seus objetivos." e 3 cards de perfil de 430×260 numerados 01, 02 e 03.
2. The sistema SHALL renderizar os 3 perfis a partir de um único array tipado com um `v-for`, cada perfil com cores próprias de fundo e destaque (`#eef0ff` com `#5d5fef`, `#eaf9f7` com `#159c96`, `#f4eefc` com `#7652b5`).
3. WHEN a página é renderizada THEN o sistema SHALL exibir o banner "Continue aprendendo no App SUBSEE" (node `3188:3501`, 1400×220, gradiente `#5d5fef` para `#2e386b`, raio de 28px) com o botão branco "Veja mais no App SUBSEE →".
4. WHEN um visitante clica em "Ver vídeos →" ou em "Veja mais no App SUBSEE →" THEN o sistema SHALL abrir o destino definido na Q2 ou Q3 (enquanto pendente, fallback provisório: canal do YouTube em nova aba; não é decisão final).

**Independent Test**: A 1920px, comparar com o screenshot do node `3188:3474`.

---

### P2: Perguntas Frequentes

**User Story**: Como visitante, quero tirar dúvidas sobre os vídeos, para saber o que encontro e como acessar.

**Why P2**: Conteúdo de apoio; segue o padrão de FAQ das outras páginas.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir o FAQ (node `3188:3507`) com o título "Perguntas Frequentes" (Poppins SemiBold 52px), o subtítulo "Encontre respostas sobre os vídeos, tutoriais e conteúdos disponíveis no SUBSEE on." e as 6 perguntas do Figma, sobre fundo branco e sem painel cinza.
2. WHEN um visitante ativa uma pergunta THEN o sistema SHALL expandir a resposta e trocar o ícone de "+" para "−".
3. The sistema SHALL renderizar as perguntas a partir de um único array tipado, reusando `layout/Faq.vue`.
4. IF a resposta da pergunta 6 não estiver definida (Q4) THEN o sistema SHALL NOT exibir texto de resposta inventado para esse item.

**Independent Test**: A 1920px, comparar com o screenshot do node `3188:3507`; abrir e fechar cada item.

---

### P3: Responsividade e SEO

**User Story**: Como visitante em qualquer dispositivo ou vindo de um buscador, quero a página legível e com título correto.

**Why P3**: Necessário para entregar, mas sem frame de referência no Figma além de 1920px.

**Acceptance Criteria**:

1. WHILE a viewport tem qualquer largura entre 375px e 1920px the sistema SHALL renderizar a página sem overflow horizontal.
2. WHILE a viewport tem menos de 992px the sistema SHALL empilhar as duas colunas do Vídeo institucional e as grades de 3 cards em coluna única, com o texto legível e sem corte.
3. WHEN a página é servida THEN o sistema SHALL definir `title`, `description`, `og:title` e `og:description` via `useSeoMeta`, com os valores definidos na etapa de SEO/conteúdo (Q5).

**Independent Test**: Varrer 1920/1440/1280/1024/768/576/375px e conferir `scrollWidth <= innerWidth`.

---

## Edge Cases

- IF a imagem da foto do Hero não carregar THEN o sistema SHALL manter o texto do Hero legível sobre o fundo em gradiente (a foto é decorativa).
- IF o texto de um card for mais longo que o previsto THEN o sistema SHALL quebrar em mais linhas dentro do card sem sobrepor o link inferior.
- IF o destino de um link for URL externa THEN o sistema SHALL abrir em nova aba com `rel="noopener"`.
- WHEN a viewport fica abaixo de 992px THEN o sistema SHALL seguir o comportamento do `layout/Hero.vue` nas páginas irmãs para a composição absoluta do Hero (foto e cards flutuantes), mantendo H1 e descrição legíveis.

---

## Requirement Traceability

| Requirement ID | Story | Phase | Status |
| -------------- | ----- | ----- | ------ |
| AVS-01 | P1: Rota responde 200 com Header e Footer | Tasks (T13) | In Tasks |
| AVS-02 | P1: Hero (H1, descrição, ícones, foto, cards) | Tasks (T2, T7, T15) | In Tasks |
| AVS-03 | P1: Um único `<h1>` | Tasks (T7, T13) | In Tasks |
| AVS-04 | P1: Fidelidade do Hero a 1920px | Tasks (T1, T7, T15) | In Tasks |
| AVS-05 | P1: Seção Vídeo institucional | Tasks (T3, T4, T5, T8, T15) | In Tasks |
| AVS-06 | P1: Seção Vídeos demonstrativos (3 cards, 1 array) | Tasks (T3, T4, T5, T9, T15) | In Tasks |
| AVS-07 | P1: Destino dos cards e acesso por teclado | Tasks (T4, T6, T8, T9, T10; T18 bloqueada por Q1 a Q3) | In Tasks |
| AVS-08 | P2: Seção Conteúdo por perfil (3 cards, 1 array) | Tasks (T3, T4, T5, T10, T15) | In Tasks |
| AVS-09 | P2: Banner CTA App SUBSEE | Tasks (T3, T11, T15) | In Tasks |
| AVS-10 | P2: FAQ (6 perguntas, `layout/Faq.vue`, sem resposta inventada no item 6) | Tasks (T12, T15; T17 bloqueada por Q4) | In Tasks |
| AVS-11 | P3: Sem overflow horizontal de 375px a 1920px | Tasks (T14) | In Tasks |
| AVS-12 | P3: Empilhamento abaixo de 992px | Tasks (T14) | In Tasks |
| AVS-13 | P3: SEO via `useSeoMeta` | Tasks (T16, bloqueada por Q5) | In Tasks |

**Coverage:** 13 total, 13 mapped to tasks, 0 unmapped. 3 tarefas bloqueadas por decisões pendentes (T16 por Q5, T17 por Q4, T18 por Q1 a Q3); AVS-13 só é atendido por uma tarefa bloqueada.

---

## Success Criteria

- [ ] `/assista-os-videos-do-subsee-on` responde 200 e as 5 seções batem com os screenshots do Figma a 1920px.
- [ ] `pnpm build` conclui sem erros com a rota no output.
- [ ] Nenhum overflow horizontal em 1920/1440/1280/1024/768/576/375px e zero erros de console.
- [ ] Nenhum texto, URL ou duração fora do Figma, exceto o fallback provisório de destino registrado nas Open Questions (Q1 a Q3), que não é decisão final.
