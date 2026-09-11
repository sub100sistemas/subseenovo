# APIs & HUB Integrador (página `/modulos/apis-hub-integrador`) Specification

## Problem Statement

O mega-menu "Módulos" (`HeaderBar.vue`, coluna "INTEGRAÇÕES E HABILIDADES") já tem o item "APIs & HUB integrador" apontando para `/modulos/apis-hub-integrador`, e a Home (`HeroIntegrations.vue`) já tem um CTA "Conheça APIs & HUB Integrador" para a mesma rota — mas a página não existe hoje (404). O design completo foi produzido no Figma (arquivo `vX7qKnnXSOW8zv4kAuS2eN`, node `3164:35379`, 1920px, 8 seções) e precisa ser portado 1:1 para o site em Nuxt, seguindo o mesmo processo já validado em `/modulos/crm`: manifesto de conteúdo (`FIGMA_CONTENT_MANIFEST_APIS_HUB.md`, já escrito) → assets → componentes Vue.

## Goals

- [ ] A rota `/modulos/apis-hub-integrador` existe, renderiza as 8 seções do Figma na ordem correta e é alcançável pelos pontos de entrada já existentes (CTA da Home, mega-menu do header).
- [ ] Todo o conteúdo (copy, imagens, ícones) é extraído fielmente do Figma e documentado em `FIGMA_CONTENT_MANIFEST_APIS_HUB.md`, sem invenção de texto.
- [ ] A página é responsiva nos 7 breakpoints já definidos no design system do projeto (`app/assets/css/main.css`), sem overflow horizontal.
- [ ] Exatamente um `<h1>` na página, com hierarquia de heading correta (H1 único no Hero, H2 por seção, H3 nos cards/FAQ/feature items).

## Out of Scope

| Feature | Reason |
| --- | --- |
| Construir as demais páginas `/modulos/*` ainda não feitas (SGL, Site Imobiliário) | Cada uma é sua própria feature futura |
| Alterar `HeaderBar.vue` ou `HeroIntegrations.vue` | Ambos já apontam corretamente para esta rota — nenhuma mudança de navegação necessária nesta feature |
| Adicionar test runner (Vitest/Playwright) | Decisão de infraestrutura cross-cutting fora do escopo de uma página de conteúdo ([[AD-002]]) |
| Tornar o conteúdo dinâmico/editável via CMS | Todo o conteúdo do site é hardcoded nos componentes Vue ([[AD-001]]); esta feature segue o mesmo padrão |
| Construir a página "Base de conhecimento" | O link da seção Other Modules aponta para um destino ainda não confirmado/existente; construir essa página é fora de escopo — usa-se um placeholder documentado até confirmação |
| Corrigir a discrepância de cargo de João Calçada em `testimonials.json` (Figma diz "Diretor", JSON diz "Gerente de Locação") | Correção de dado publicado é decisão do time de conteúdo, não desta feature de página — usa-se o valor já publicado no JSON |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Nomenclatura dos componentes de seção novos | Prefixo `Apis` em todos (`ApisHero.vue`, `ApisTechnology.vue`, …), junto aos demais em `app/components/sections/` | Sem colisão hoje (`**/Apis*.vue`/`**/Hub*.vue` vazios); segue [[AD-004]] | y |
| Estratégia do manifesto de conteúdo Figma | `FIGMA_CONTENT_MANIFEST_APIS_HUB.md` na raiz do repo — já escrito nesta sessão, texto extraído node a node | Segue [[AD-003]] | y |
| Seção 3 (API Hub Bloco): wrapper de `layout/Portfolio.vue` vs. componente bespoke | Tentar wrapper primeiro na implementação; bifurcar só se as dimensões/overflow do Figma não couberem nos defaults do `Portfolio.vue` | Estrutura bate (heading/lead + imagem + lista de features + CTA), mas é uma decisão técnica de encaixe, não de conteúdo | n — decisão técnica adiada para a task de implementação |
| Seção 5 (Content/Integrações): reaproveitar texto de `CrmIntegrations.vue`? | Sim — o texto (tag/H2/descrição/CTA) é idêntico palavra por palavra ao já hardcoded em `CrmIntegrations.vue`; a única diferença é a imagem (`conecte.png` em vez da grade de 6 bolhas) | Confirmado via extração Figma nesta sessão — não é erro de extração, é mensagem reaproveitada entre páginas de módulo | y |
| Seção 6 (Testimonials): quais depoimentos usar | `crm-temporada-joao-calcada` (Imobiliária Soma) + `crm-geral-cleveson-costa` (Bellaka Negócios Imobiliários), ambos já existentes em `app/data/testimonials.json` | O Figma tem um mismatch confirmado entre logo e legenda nas 2 instâncias de depoimento (mesma pessoa/texto sob 2 logos diferentes) — não reproduzir o mismatch; usar as 2 entradas corretas do JSON que batem logo↔empresa | y |
| Seção 6: cargo de João Calçada | Usar `"Gerente de Locação"` (valor já publicado em `testimonials.json`) | Figma mostra "Diretor" para a mesma pessoa — discrepância não resolvida; o JSON é a fonte já publicada no site e não deve ser alterado por esta feature | n — registrado como Out of Scope corrigir; default é não mudar o JSON |
| Seção 7 (Other Modules): destino do link "Base de conhecimento" | Placeholder `href="#"` documentado no código até confirmação | Nenhuma página de "Base de conhecimento" identificada nas rotas existentes nem no Figma | n — precisa de confirmação do usuário antes do CTA apontar para uma URL real |
| CTA "Testar grátis por 30 dias" (usado nas seções 2, 3 e 5) | Reaproveitar a mesma rota já usada por `CrmIntegrations.vue` (`to="/testar-gratis"`) nas 3 ocorrências | O Figma não expõe URLs; o nome da instância nas seções 2 e 3 ("Link → Agendar Demonstração") está desatualizado — o texto renderizado real é "Testar grátis por 30 dias" nos 3 casos, então tratam-se do mesmo CTA reutilizado, não de 3 CTAs distintos. Confirmado: `/testar-gratis` é uma rota real já usada em 27 arquivos do site (`HeaderBar.vue`, `HeroCrm.vue`, `CrmIntegrations.vue`, etc.) | y |

**Open questions**: 2 itens acima seguem sem confirmação (`n`) — destino do banner da seção 7 ("Base de conhecimento") e o cargo de João Calçada (decisão adotada: não alterar o JSON já publicado). Nenhum bloqueia a estrutura da página; bloqueiam apenas o valor final de um `href`/dado de conteúdo já publicado.

---

## User Stories

### P1: Visitante acessa a página do módulo e vê a proposta de valor principal ⭐ MVP

**User Story**: Como visitante do site (potencial cliente de imobiliária), eu quero acessar `/modulos/apis-hub-integrador` a partir da Home ou do menu e ver a proposta de valor do HUB de integrações (hero, tecnologia, principais recursos), para entender rapidamente o que o produto oferece.

**Why P1**: Sem isso, os CTAs já publicados no site (Home, mega-menu) levam a um 404.

**Acceptance Criteria**:

1. WHEN um visitante navega para `/modulos/apis-hub-integrador` THEN o sistema SHALL renderizar a página com status HTTP 200.
2. WHEN a página é renderizada THEN o sistema SHALL exibir, na ordem do Figma, a seção Hero/Top (node `3164:35380`) com o H1 "Conecte o SUBSEE on aos seus sistemas por APIs e Hub", a descrição, os 2 cards flutuantes ("Troca de Dados" e "Conexão via API") e a fileira de 5 ícones de tipo de imóvel — sem CTA nesta seção (confirmado inexistente no Figma).
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Technology (node `3164:38941`) com o mockup estático (`NuxtImg`, `technology-mockup-telas.png`) e o CTA "Testar grátis por 30 dias" com destino definido.
4. WHEN a página é renderizada THEN o sistema SHALL exibir a seção API Hub Bloco (node `3165:39276`) com a imagem `portfolio-telas-apis-hub.png`, os 4 itens de feature (Integração com APIs, Sincronização automática, Dados centralizados, Mais eficiência operacional) e o CTA "Testar grátis por 30 dias".
5. WHEN um visitante clica no CTA "Conheça APIs & HUB Integrador" em `HeroIntegrations.vue` (Home) THEN o sistema SHALL navegar para `/modulos/apis-hub-integrador` e exibir a página completa.

**Independent Test**: Rodar `pnpm dev`, abrir a Home, clicar em "Conheça APIs & HUB Integrador" e confirmar que a página carrega com as 3 primeiras seções visíveis e funcionais.

---

### P2: Visitante explora benefícios e integrações específicas

**User Story**: Como visitante já convencido pelo hero, eu quero ver os benefícios do Hub e a seção de integrações específicas (WhatsApp, RD Station, redes sociais), para avaliar se atende às necessidades da minha operação.

**Why P2**: Aprofunda a decisão, mas a página já é demonstrável sem essas seções.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Benefits (node `3164:35970`) com os 3 cards ("Sincronização automática de dados", "Integração com múltiplos sistemas", "Mais segurança e controle centralizado").
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Content/Integrações (node `3164:36002`) com a tag "INTEGRAÇÕES", o heading "Conecte seu CRM às ferramentas que você já utiliza", a imagem `conecte.png` e o CTA "Testar grátis por 30 dias".

**Independent Test**: Rolar até essas 2 seções e confirmar que cada uma renderiza seu conteúdo e imagens corretamente, em isolamento visual das demais.

---

### P3: Visitante confia no produto, descobre outros módulos e tira dúvidas

**User Story**: Como visitante em fase final de decisão, eu quero ver depoimentos de clientes, descobrir outros módulos e tirar dúvidas comuns via FAQ.

**Why P3**: Reforça conversão, mas não é necessário para a página cumprir seu propósito central.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Testimonials (node `3168:39878`) com os depoimentos `crm-temporada-joao-calcada` e `crm-geral-cleveson-costa` de `app/data/testimonials.json`.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Other Modules (node `3164:36110`) com o heading "Conheça os outros módulos do Integrações e Habilidades" e o banner único "Base de conhecimento" (ícone + descrição + link "Clique aqui →"), com `href` placeholder documentado até confirmação do destino real.
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção FAQ (node `3168:40054`) como um accordion com as 6 perguntas/respostas extraídas do Figma, reutilizando `layout/Faq.vue` com os ícones "+"/"−" já existentes (`/icons/faq-plus-circle.svg`/`faq-minus-circle.svg`).
4. WHILE um item do accordion de FAQ está aberto THE sistema SHALL indicar visualmente o estado expandido, consistente com `CrmFaq.vue`.
5. WHEN um visitante clica no item "APIs & HUB integrador" do mega-menu "Módulos" (`HeaderBar.vue`) THEN o sistema SHALL navegar para `/modulos/apis-hub-integrador` (já wired hoje — apenas confirmar que continua funcionando).

**Independent Test**: Abrir o mega-menu, clicar em "APIs & HUB integrador" e confirmar que leva à página; abrir/fechar um item do FAQ e confirmar a troca de estado visual.

---

## Edge Cases

- WHILE a largura da viewport é menor que 576px (`mobile-lg`) THE sistema SHALL renderizar todas as 8 seções sem overflow horizontal.
- IF o destino real do link "Base de conhecimento" não for confirmado antes da implementação THEN o link SHALL usar um `href="#"` (ou constante documentada) em vez de uma URL adivinhada.
- IF o nome de um novo componente de seção colidir com um componente já existente em `app/components/sections/` THEN o sistema SHALL usar o prefixo `Apis` para evitar sobrescrita silenciosa via auto-import.

---

## Implicit-Requirement Dimensions (sweep — escopo Large)

| Dimension | Resolução |
| --- | --- |
| Input validation & bounds | N/A — página de conteúdo estático, sem formulários. |
| Failure / partial-failure states | N/A — sem chamadas assíncronas; o único "erro" possível é link/imagem quebrado, coberto pela auditoria de QA final. |
| Idempotency / retry / duplicate handling | N/A — sem mutações. |
| Auth boundaries & rate limits | N/A — página pública de marketing. |
| Concurrency / ordering | N/A — renderização estática. |
| Data lifecycle / expiry | N/A — conteúdo hardcoded, sem cache/expiração própria desta feature. |
| Observability | N/A — fora do escopo desta feature de conteúdo. |
| External-dependency failure | N/A — todos os assets são baixados e versionados localmente no build. |
| State-transition integrity | Aplica-se ao accordion de FAQ — ver P3, critério 4. |

---

## Requirement Traceability

| Requirement ID | Story | Task | Status |
| --- | --- | --- | --- |
| APIS-01 | P1: Proposta de valor principal | T11 | Verified |
| APIS-02 | P1: Proposta de valor principal | T3 | Verified |
| APIS-03 | P1: Proposta de valor principal | T4 | Verified |
| APIS-04 | P1: Proposta de valor principal | T5 | Verified |
| APIS-05 | P1: Proposta de valor principal | T11 | Verified |
| APIS-06 | P2: Benefícios e integrações | T6 | Verified |
| APIS-07 | P2: Benefícios e integrações | T7 | Verified |
| APIS-08 | P3: Confiança, módulos irmãos e FAQ | T8 | Verified |
| APIS-09 | P3: Confiança, módulos irmãos e FAQ | T9 | Verified |
| APIS-10 | P3: Confiança, módulos irmãos e FAQ | T10 | Verified |
| APIS-11 | P3: Confiança, módulos irmãos e FAQ | T10 | Verified |
| APIS-12 | P3: Confiança, módulos irmãos e FAQ | n/a — já funcionava antes desta feature | Verified |
| APIS-13 | Edge case: responsividade | T12 | Verified |
| APIS-14 | Edge case: colisão de nomes | T3–T10 | Verified |

**ID format**: `APIS-[NUMBER]`
**Status values**: Pending → In Design → In Tasks → Implementing → Verified
**Coverage**: 14 total, 14 verificados — ver `.specs/features/apis-hub-integrador/tasks.md` (T1–T12)

---

## Success Criteria

- [x] `/modulos/apis-hub-integrador` renderiza as 8 seções do Figma, na ordem correta, com conteúdo extraído fielmente e registrado em `FIGMA_CONTENT_MANIFEST_APIS_HUB.md`.
- [x] Pontos de entrada já existentes (CTA da Home, mega-menu) navegam corretamente até a página — sem alteração necessária (confirmado sem tocar em `HeaderBar.vue`/`HeroIntegrations.vue`).
- [x] `pnpm build` completa sem erros com a nova rota incluída.
- [x] Página visualmente fiel ao Figma e responsiva em 1920/1440/1280/1024/768/576/375px, sem overflow horizontal — verificado com Playwright contra o dev server real. Comparação pixel-a-pixel via `get_screenshot` do Figma não foi possível na rodada final (MCP intermitentemente desconectado) — comparação feita contra o manifesto de conteúdo, os PNGs de referência já exportados (inspecionados diretamente) e os metadados estruturais do Figma já capturados na sessão.
- [x] Exatamente 1 `<h1>` na página.
