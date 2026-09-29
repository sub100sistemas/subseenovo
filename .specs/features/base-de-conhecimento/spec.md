# Base de Conhecimento (página `/modulos/base-de-conhecimento`) Specification

## Problem Statement

O mega-menu "Módulos" (`HeaderBar.vue`, coluna "INTEGRAÇÕES E HABILIDADES") já tem o item "Base de conhecimento" (com badge "novo") apontando para `/modulos/base-de-conhecimento`, e a seção "Outros módulos" de `apis-hub-integrador` também referencia esse módulo — mas a página não existe hoje (404). O design completo foi produzido no Figma (arquivo `vX7qKnnXSOW8zv4kAuS2eN`, node `3164:37761`, 1920px, 8 seções) e precisa ser portado 1:1 para o site em Nuxt, seguindo o mesmo processo já validado em `/modulos/apis-hub-integrador`: manifesto de conteúdo (`FIGMA_CONTENT_MANIFEST_BASE_CONHECIMENTO.md`, já escrito) → assets → componentes Vue. 4 assets de imagem já existem em `public/images/modulos-base-de-conhecimento/` de uma sessão anterior e foram confirmados por inspeção visual direta contra o Figma.

## Goals

- [ ] A rota `/modulos/base-de-conhecimento` existe, renderiza as 8 seções do Figma na ordem correta e é alcançável pelo ponto de entrada já existente (mega-menu do header).
- [ ] Todo o conteúdo (copy, imagens, ícones) é extraído fielmente do Figma e documentado em `FIGMA_CONTENT_MANIFEST_BASE_CONHECIMENTO.md`, sem invenção de texto.
- [ ] A página é responsiva nos 7 breakpoints já definidos no design system do projeto (`app/assets/css/main.css`), sem overflow horizontal.
- [ ] Exatamente um `<h1>` na página, com hierarquia de heading correta (H1 único no Hero, H2 por seção, H3 nos cards/features/FAQ).

## Out of Scope

| Feature | Reason |
| --- | --- |
| Construir as demais páginas `/modulos/*` ainda não feitas (SGL, Site Imobiliário) | Cada uma é sua própria feature futura |
| Alterar `HeaderBar.vue` | Já aponta corretamente para esta rota (com badge "novo") — nenhuma mudança de navegação necessária nesta feature |
| Atualizar o banner "Base de conhecimento" em `ApisOtherModules.vue` (hoje `href="#"`) para apontar para `/modulos/base-de-conhecimento` | Pertence à feature `apis-hub-integrador`, já entregue; corrigir esse `href` é um follow-up cross-page documentado aqui como observação, não uma tarefa desta feature |
| Adicionar test runner (Vitest/Playwright) | Decisão de infraestrutura cross-cutting fora do escopo de uma página de conteúdo ([[AD-002]]) |
| Tornar o conteúdo dinâmico/editável via CMS | Todo o conteúdo do site é hardcoded nos componentes Vue ([[AD-001]]); esta feature segue o mesmo padrão |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Nomenclatura dos componentes de seção novos | Prefixo `BaseConhecimento` em todos (`BaseConhecimentoHero.vue`, `BaseConhecimentoTechnology.vue`, …), junto aos demais em `app/components/sections/` | Sem colisão hoje (`grep -r "BaseConhecimento" app` vazio); segue [[AD-004]] | y |
| Estratégia do manifesto de conteúdo Figma | `FIGMA_CONTENT_MANIFEST_BASE_CONHECIMENTO.md` na raiz do repo — já escrito nesta sessão, texto extraído node a node | Segue [[AD-003]] | y |
| Seção 3 (Training): wrapper de `layout/Portfolio.vue` | Reaproveitar `layout/Portfolio.vue` como base — estrutura (heading/lead + `#image` + `#summary` com features[] + CTA) bate exatamente, mesmo padrão de `ApisIntegrationsHub.vue` | Estrutura confirmada via `get_design_context` no node `3168:40734`: Bloco (H2+descrição) → Row (Imagem + Coluna 02 com descrição secundária + lista de 4 features + CTA) | y |
| Seção 4 (Publishing): componente bespoke vs. shell genérico | Bespoke, mesmo padrão de `ApisBenefits.vue`/`CrmAllInOne.vue` (nenhum shell `layout/` genérico cobre "3 cards com ícone circular sobreposto") | `layout/` não tem um componente de "grade de cards de benefício com ícone circular flutuante"; forçar em `Portfolio.vue` quebraria sua forma (1 imagem + N features), não 3 cards simétricos | y |
| Seção 5 (Content/Other): imagem "devices-composition" (laptop + celular) | Tratar como asset pendente de exportação do Figma (imagem única), mesmo padrão de `ApisConecte.vue`/`conecte.png` — não reconstruir em HTML/CSS nesta feature | A composição tem estrutura limpa (janela+sidebar+cards+mobile mockup) mas envolve dezenas de sub-camadas de texto/ícone; replicar em HTML introduziria manutenção duplicada sem ganho de fidelidade sobre uma imagem exportada — decisão revisitável na fase de Design/Execute se o export não for viável | n — decisão técnica default adotada; pode ser revista na implementação |
| Seção 6 (Other Modules): ícone do banner "APIs e HUB Integradores" | Tentar reaproveitar `/icons/menu-icone-apis-hub.svg` (já usado no mega-menu para o mesmo módulo); exportar do Figma apenas se não bater visualmente | Evita asset duplicado se o glyph já for idêntico — mesmo princípio de "Shared assets" do CLAUDE.md | n — precisa confirmação visual na implementação |
| Seção 7 (Testimonials): quais depoimentos usar | `crm-geral-mauro-alencar` (Ideal Imóveis) + `crm-rural-julio-silveira` (Vettore Uruguay), ambos já existentes em `app/data/testimonials.json` | Confirmado via `get_design_context` nas próprias instâncias do Figma (não apenas nos nomes de camada, seguindo a lição de [[AD-015]]): texto, nome, cargo e empresa batem exatamente com essas 2 entradas já publicadas — sem mismatch logo↔texto desta vez | y |
| CTA "Testar grátis por 30 dias" (seções 2, 3 e 5) | Reaproveitar a mesma rota já usada em todo o site (`to="/testar-gratis"`) nas 3 ocorrências | O Figma não expõe URLs; o nome da instância ("Link → Agendar Demonstração") está desatualizado — o texto renderizado real é "Testar grátis por 30 dias" nos 3 casos, mesmo CTA reutilizado (mesmo padrão de [[AD-015]]) | y |
| Ícone do badge de canto do Hero + ícones dos itens de Training/Publishing | Assets pendentes de download do Figma (não existem hoje em `public/icons/`) | `get_design_context` retornou URLs de asset válidas para cada um (expiram em ~7 dias) — download necessário na fase de Execute | n — pendente de download, não bloqueia a estrutura da página |

**Open questions**: 3 itens acima seguem sem confirmação plena (`n`) — decisão de build da imagem "devices-composition" (seção 5), confirmação visual do ícone do banner da seção 6, e o download dos ícones pendentes. Nenhum bloqueia a estrutura da página; todos têm um default documentado para a fase de Execute.

---

## User Stories

### P1: Visitante acessa a página do módulo e entende a proposta de valor ⭐ MVP

**User Story**: Como visitante do site (potencial cliente de imobiliária), eu quero acessar `/modulos/base-de-conhecimento` a partir do menu e ver a proposta de valor da Base de Conhecimento (hero, tecnologia, treinamento da equipe), para entender rapidamente o que o módulo oferece.

**Why P1**: Sem isso, o link já publicado no mega-menu (com badge "novo") leva a um 404.

**Acceptance Criteria**:

1. WHEN um visitante navega para `/modulos/base-de-conhecimento` THEN o sistema SHALL renderizar a página com status HTTP 200.
2. WHEN a página é renderizada THEN o sistema SHALL exibir, na ordem do Figma, a seção Hero/Top (node `3164:37762`) com o H1 "Central de Ajuda, Tutoriais e Documentação do SUBSEE on", a descrição, os 2 cards flutuantes ("Acesso Online" e "Equipe treinada") e a fileira de 5 ícones de tipo de imóvel — sem CTA nesta seção (confirmado inexistente no Figma).
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Technology (node `3168:40055`) com o mockup estático (`NuxtImg`, `technology-mockup.png`) e o CTA "Testar grátis por 30 dias" com destino `/testar-gratis`.
4. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Training (node `3168:40734`) com a imagem `portfolio-telas-base-conhecimento.png`, os 4 itens de feature (Suporte e implantação humanizada, Treinamentos em vídeo, Manuais e materiais de apoio, Eventos online) e o CTA "Testar grátis por 30 dias".
5. WHEN um visitante clica no item "Base de conhecimento" do mega-menu "Módulos" (`HeaderBar.vue`) THEN o sistema SHALL navegar para `/modulos/base-de-conhecimento` (já wired hoje — apenas confirmar que continua funcionando).

**Independent Test**: Rodar `pnpm dev`, abrir o mega-menu "Módulos" → "Integrações e Habilidades" → "Base de conhecimento" e confirmar que a página carrega com as 3 primeiras seções visíveis e funcionais.

---

### P2: Visitante explora as vantagens e o valor centralizado da plataforma

**User Story**: Como visitante já convencido pelo hero, eu quero ver as vantagens da Base de Conhecimento e a mensagem de "tudo em um só lugar", para avaliar se o módulo resolve a dispersão de informação da minha equipe.

**Why P2**: Aprofunda a decisão, mas a página já é demonstrável sem essas seções.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Publishing/Vantagens (node `3164:38449`) com os 3 cards ("Maior engajamento das equipes", "Melhorar o treinamento de novos colaboradores", "Aumenta a satisfação dos clientes").
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Content/Other (node `3164:38481`) com a tag "base de conhecimento", o heading "Toda a informação que sua equipe precisa, em um só lugar.", o indicador de confiança ("Sem compromisso. Teste gratuito por 30 dias para toda a equipe.") e o CTA "Testar grátis por 30 dias".

**Independent Test**: Rolar até essas 2 seções e confirmar que cada uma renderiza seu conteúdo e imagens corretamente, em isolamento visual das demais.

---

### P3: Visitante confia no produto, descobre outros módulos e tira dúvidas

**User Story**: Como visitante em fase final de decisão, eu quero ver depoimentos de clientes, descobrir o módulo de APIs e HUB Integrador e tirar dúvidas comuns via FAQ.

**Why P3**: Reforça conversão, mas não é necessário para a página cumprir seu propósito central.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Testimonials (node `3164:38612`) com os depoimentos `crm-geral-mauro-alencar` (Ideal Imóveis) e `crm-rural-julio-silveira` (Vettore Uruguay) de `app/data/testimonials.json`.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Other Modules (node `3164:38607`) com o heading "Conheça os outros módulos do Integrações e Habilidades" e o banner único "APIs e HUB Integradores" (ícone + descrição + link "Clique aqui →") apontando para `/modulos/apis-hub-integrador`.
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção FAQ (node `3168:40951`) como um accordion com as 6 perguntas/respostas extraídas do Figma, reutilizando `layout/Faq.vue` com os ícones "+"/"−" já existentes (`/icons/faq-plus-circle.svg`/`faq-minus-circle.svg`).
4. WHILE um item do accordion de FAQ está aberto THE sistema SHALL indicar visualmente o estado expandido, consistente com `CrmFaq.vue`/`ApisFaq.vue`.
5. WHEN um visitante clica no banner "APIs e HUB Integradores" da seção Other Modules THEN o sistema SHALL navegar para `/modulos/apis-hub-integrador`.

**Independent Test**: Abrir o mega-menu, clicar em "Base de conhecimento" e confirmar que leva à página; abrir/fechar um item do FAQ e confirmar a troca de estado visual; clicar no banner de Other Modules e confirmar a navegação para a página de APIs.

---

## Edge Cases

- WHILE a largura da viewport é menor que 576px (`mobile-lg`) THE sistema SHALL renderizar todas as 8 seções sem overflow horizontal.
- IF o asset "devices-composition" (seção Content/Other) não estiver disponível no momento da implementação THEN o sistema SHALL usar um placeholder documentado (ex.: `NuxtImg` com `alt` descritivo apontando para um caminho pendente) em vez de inventar uma composição HTML/CSS aproximada.
- IF o ícone do banner "APIs e HUB Integradores" (`/icons/menu-icone-apis-hub.svg`) não bater visualmente com o glyph do Figma THEN o sistema SHALL exportar um ícone dedicado em vez de forçar o reaproveitamento.
- IF o nome de um novo componente de seção colidir com um componente já existente em `app/components/sections/` THEN o sistema SHALL usar o prefixo `BaseConhecimento` para evitar sobrescrita silenciosa via auto-import.

---

## Implicit-Requirement Dimensions (sweep — escopo Large)

| Dimension | Resolução |
| --- | --- |
| Input validation & bounds | N/A — página de conteúdo estático, sem formulários. |
| Failure / partial-failure states | N/A — sem chamadas assíncronas; o único "erro" possível é link/imagem quebrado, coberto pela auditoria de QA final. |
| Idempotency / retry / duplicate handling | N/A — sem mutações. |
| Auth boundaries & rate limits | N/A — página pública de marketing. |
| Concurrency / ordering | N/A — renderização estática. |
| Data lifecycle / expiry | As URLs de asset retornadas por `get_design_context` expiram em ~7 dias — todos os ícones pendentes devem ser baixados e commitados antes do fim da sessão de implementação, nunca referenciados diretamente pela URL remota. |
| Observability | N/A — fora do escopo desta feature de conteúdo. |
| External-dependency failure | N/A — todos os assets são baixados e versionados localmente no build. |
| State-transition integrity | Aplica-se ao accordion de FAQ — ver P3, critério 4. |

---

## Requirement Traceability

| Requirement ID | Story | Task | Status |
| --- | --- | --- | --- |
| BC-01 | P1: Proposta de valor principal | T11 | Verified |
| BC-02 | P1: Proposta de valor principal | T3 | Verified |
| BC-03 | P1: Proposta de valor principal | T4 | Verified |
| BC-04 | P1: Proposta de valor principal | T5 | Verified |
| BC-05 | P1: Proposta de valor principal | T11 | Verified |
| BC-06 | P2: Vantagens e valor centralizado | T6 | Verified |
| BC-07 | P2: Vantagens e valor centralizado | T7 | Verified |
| BC-08 | P3: Confiança, outros módulos e FAQ | T9 | Verified |
| BC-09 | P3: Confiança, outros módulos e FAQ | T8 | Verified |
| BC-10 | P3: Confiança, outros módulos e FAQ | T10 | Verified |
| BC-11 | P3: Confiança, outros módulos e FAQ | T8 | Verified |
| BC-12 | P3: Confiança, outros módulos e FAQ | T10 | Verified |
| BC-13 | Edge case: responsividade | T12 | Verified |
| BC-14 | Edge case: colisão de nomes | T11 | Verified |

**ID format**: `BC-[NUMBER]`
**Status values**: Pending → In Design → In Tasks → Implementing → Verified
**Coverage**: 14 total, 14 verificados — ver `.specs/features/base-de-conhecimento/tasks.md` (T1–T12) e `validation.md`.

---

## Success Criteria

- [x] `/modulos/base-de-conhecimento` renderiza as 8 seções do Figma, na ordem correta, com conteúdo extraído fielmente e registrado em `FIGMA_CONTENT_MANIFEST_BASE_CONHECIMENTO.md`.
- [x] Ponto de entrada já existente (mega-menu) navega corretamente até a página — sem alteração necessária em `HeaderBar.vue` (confirmado via Playwright: Home → mega-menu → página).
- [x] `pnpm build` completa sem erros com a nova rota incluída (chunk `base-de-conhecimento-*.mjs` presente no output).
- [x] Página visualmente fiel ao Figma e responsiva em 1920/1440/1280/1024/768/576/375px, sem overflow horizontal — verificado com Playwright contra o dev server real e contra `get_screenshot` do Figma por seção. 2 desvios reais encontrados e corrigidos (gradiente do painel de Training; altura/proporções do painel Content/Other) — ver `tasks.md` T11.
- [x] Exatamente 1 `<h1>` na página (confirmado nos 7 breakpoints).
