# CRM Imobiliário (página `/modulos/crm`) Specification

## Problem Statement

A CTA "Conheça o módulo CRM Imobiliário" (`HeroCrm.vue`, na Home) e o item "CRM Imobiliário" do mega-menu "Módulos" (`HeaderBar.vue`) já apontam para a rota `/modulos/crm`, mas essa página não existe — quem clica hoje não chega a lugar nenhum útil. O design completo já foi produzido no Figma (arquivo `vX7qKnnXSOW8zv4kAuS2eN`, node `476:3`, 2044×8557px, 9 seções) e precisa ser portado 1:1 para o site em Nuxt, seguindo o mesmo processo de extração de conteúdo (manifesto Figma → assets → componentes Vue) já validado na Home.

## Goals

- [x] A rota `/modulos/crm` existe, renderiza as 9 seções do Figma na ordem correta e é alcançável pelos pontos de entrada já existentes no site (CTA da Home, mega-menu do header).
- [x] Todo o conteúdo (copy, imagens, ícones) é extraído fielmente do Figma e documentado em manifesto, sem invenção de texto.
- [x] A página é responsiva nos 7 breakpoints já definidos no design system do projeto (`app/assets/css/main.css`), sem overflow horizontal. (Verificado por revisão estrutural de código — classes Tailwind responsivas e `container-page`/`max-w-[...]` em todas as 9 seções — não por inspeção visual em navegador real nos 7 breakpoints; ver T13 em `tasks.md`.)

## Out of Scope

Explicitamente excluído. Documentado para prevenir scope creep.

| Feature | Reason |
| --- | --- |
| Construir as demais páginas `/modulos/*` (SGL, Urbano, Rural, Temporada, APIs & Hub Integrador, Site Imobiliário) | Fora do escopo desta feature — cada uma será sua própria feature futura; aqui apenas os links para elas (já um padrão existente no código) são preservados como hrefs reais. |
| Criar uma página índice `/modulos` | Não solicitado; o mega-menu já resolve a navegação entre módulos hoje. |
| Adicionar test runner (Vitest/Playwright) ao projeto | O projeto não tem test tooling hoje; introduzi-lo é uma decisão de infraestrutura cross-cutting, fora do escopo de uma página de conteúdo. |
| Tornar o conteúdo dinâmico/editável via CMS | Todo o conteúdo do site hoje é hardcoded nos componentes Vue (padrão já estabelecido); esta feature segue o mesmo padrão. |
| Redesenhar ou alterar o conteúdo de `HeroCrm.vue` (Home) | Já existe e já aponta corretamente para `/modulos/crm`; não faz parte desta feature. |

---

## Assumptions & Open Questions

Toda ambiguidade foi resolvida ou registrada aqui — nada fica silenciosamente indefinido.

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Atualizar o mega-menu do header agora ou depois | Atualizar agora, como tarefa final (após a página estar pronta) | Ajuste de uma linha em `HeaderBar.vue`, seguro e reversível isoladamente; entrega valor imediato a quem navega pelo menu | y |
| Links da seção "Outros módulos" para páginas irmãs ainda não construídas | Usar hrefs reais `/modulos/<slug>` (ficam 404 até as páginas existirem) | Segue precedente já existente no código (`HeroOtherProducts.vue` → `/modulos/sgl`, `HeroIntegrations.vue` → `/modulos/apis-hub-integrador`) | y |
| Mockup do dashboard na seção "Technology" | Imagem estática exportada (`NuxtImg`), não markup ao vivo | Elemento puramente ilustrativo com dezenas de sub-elementos; consistente com a abordagem já usada para mockups de celular em outras seções do site; recriar como HTML/CSS fiel seria desproporcional | y |
| Estratégia do manifesto de conteúdo Figma | Novo arquivo `FIGMA_CONTENT_MANIFEST_CRM.md` na raiz do repo, mesmo formato do manifesto da Home | Mantém cada manifesto de página legível isoladamente; escala melhor para as futuras páginas `/modulos/*` | y |
| Nomenclatura dos componentes de seção novos | Prefixo `Crm` em todos (`CrmHero.vue`, `CrmTechnology.vue`, …), sem subpasta, junto aos demais em `app/components/sections/` | `nuxt.config.ts` registra `~/components` com `pathPrefix: false` — o nome de auto-import é só o nome do arquivo; a Home já possui `HeroFaq.vue`, `HeroIntegrations.vue`, `HeroTestimonials.vue`, `HeroOtherProducts.vue` com copy hardcoded (não parametrizado), então nomes homônimos colidiriam silenciosamente | y |
| Reuso do componente de depoimentos (seção Testimonials, node `3089:12855`) | Se o conteúdo real extraído do Figma (depoimentos/logos) for idêntico ao de `HeroTestimonials.vue`, reusar o componente existente sem código novo; se divergir, clonar como `CrmTestimonials.vue` com os dados corretos | O heading ("O que nossos clientes falam dos nossos produtos e serviços") já é idêntico ao da Home, mas o conteúdo dos depoimentos ainda não foi extraído do node — critério objetivo de decisão já definido, a aplicar na Task correspondente | n — resolvido objetivamente na task da seção Testimonials, com base no conteúdo extraído do Figma |

**Open questions:** none — todas resolvidas ou registradas acima.

---

## User Stories

### P1: Visitante acessa a página do módulo e vê a proposta de valor principal ⭐ MVP

**User Story**: Como visitante do site (potencial cliente de imobiliária), eu quero acessar `/modulos/crm` a partir da Home ou do menu e ver a proposta de valor do CRM Imobiliário (hero, tecnologia, principais recursos), para entender rapidamente o que o produto oferece.

**Why P1**: Sem isso, os CTAs já publicados no site (`HeroCrm.vue`, mega-menu) levam a lugar nenhum — é o valor mínimo demonstrável.

**Acceptance Criteria**:

1. WHEN um visitante navega para `/modulos/crm` THEN o sistema SHALL renderizar a página com status HTTP 200.
2. WHEN a página `/modulos/crm` é renderizada THEN o sistema SHALL exibir, na ordem do Figma, a seção Hero/Top (node `3472:6589` — id atualizado; o `3089:12037` original não existe mais no arquivo Figma) com o heading principal, a composição de foto/cards/setas decorativas fiel ao node, e os ícones de categoria de imóvel. — *texto corrigido em 2026-09-08 após reextração via MCP Figma: o node confirmadamente não contém nenhum CTA (verificado via `get_metadata`); a exigência original de "CTAs funcionando" nesta seção específica não se sustenta contra o design real e foi removida daqui — o requisito de CTA funcional do módulo é satisfeito pela seção Technology (AC3 abaixo).*
3. WHEN a página `/modulos/crm` é renderizada THEN o sistema SHALL exibir a seção Technology (node `3089:12139`) com uma imagem estática (`NuxtImg`) do mockup de dashboard e um CTA "Agendar Demonstração" com destino definido.
4. WHEN a página `/modulos/crm` é renderizada THEN o sistema SHALL exibir a seção All-in-One (node `3089:12611`) com os 6 cards de funcionalidade (Funil Imobiliário, Kanban de Atendimentos, Gestão de Leads, Automação de Marketing, Agenda, Relatórios e Metas) e seu CTA. — *texto corrigido em 2026-09-08 após validação: o node Figma tem 6 cards, não 4; a contagem e os títulos originais eram uma suposição pré-extração, substituída pelo conteúdo real confirmado em `FIGMA_CONTENT_MANIFEST_CRM.md`.*
5. WHEN um visitante clica no CTA "Conheça o módulo CRM Imobiliário" em `HeroCrm.vue` (Home) THEN o sistema SHALL navegar para `/modulos/crm` e exibir a página completa.

**Independent Test**: Rodar `npm run dev`, abrir a Home, clicar em "Conheça o módulo CRM Imobiliário" e confirmar que a página carrega com as 3 primeiras seções visíveis e funcionais, sem depender das demais seções (P2/P3).

---

### P2: Visitante explora os recursos e integrações do CRM

**User Story**: Como visitante já convencido pelo hero, eu quero ver detalhes de publicação de imóveis, integrações e a experiência do produto em uso, para avaliar se o CRM atende às necessidades específicas da minha operação.

**Why P2**: Aprofunda a decisão de compra, mas a página já é demonstrável e navegável sem essas seções (não bloqueia o MVP).

**Acceptance Criteria**:

1. WHEN a página `/modulos/crm` é renderizada THEN o sistema SHALL exibir a seção Overview (node `3089:12661`) com os 3 cards de "Publicação Integrada de Imóveis".
2. WHEN a página `/modulos/crm` é renderizada THEN o sistema SHALL exibir a seção Integrations (node `3089:12689`) com os ícones de integração (WhatsApp, redes sociais, RD Station) e um CTA/link associado.
3. WHEN a página `/modulos/crm` é renderizada THEN o sistema SHALL exibir a seção Publishing (node `3089:12721`) com os 4 mockups de celular/app lado a lado.

**Independent Test**: Rolar a página até essas 3 seções e confirmar que cada uma renderiza seu conteúdo e imagens corretamente, em isolamento visual das demais.

---

### P3: Visitante confia no produto, descobre módulos irmãos e tira dúvidas; navegação global é atualizada

**User Story**: Como visitante em fase final de decisão, eu quero ver prova social, conhecer outros módulos do CRM e tirar dúvidas comuns, e como usuário do site eu quero que o menu "Módulos" me leve direto a esta página, para fechar o ciclo de descoberta e confiança.

**Why P3**: Reforça conversão e completa a navegação, mas não é necessário para a página existir e cumprir seu propósito central.

**Acceptance Criteria**:

1. WHEN a página `/modulos/crm` é renderizada THEN o sistema SHALL exibir a seção Testimonials (node `3089:12855`) com depoimentos de clientes, reaproveitando `HeroTestimonials.vue` OU um novo `CrmTestimonials.vue`, conforme a assunção registrada acima.
2. WHEN a página `/modulos/crm` é renderizada THEN o sistema SHALL exibir a seção Other Modules (node `3089:12874`) com 3 cards linkando para rotas reais `/modulos/<slug>` das páginas irmãs, cada uma com um CTA "Explorar".
3. WHEN a página `/modulos/crm` é renderizada THEN o sistema SHALL exibir a seção FAQ (node `3089:12879`) como um accordion com as perguntas/respostas extraídas do Figma.
4. WHILE um item do accordion de FAQ está aberto THE sistema SHALL indicar visualmente o estado expandido (rotação do chevron), consistente com o padrão já usado em `HeroFaq.vue`.
5. WHEN um visitante clica no item "CRM Imobiliário" do mega-menu "Módulos" (`HeaderBar.vue`) THEN o sistema SHALL navegar para `/modulos/crm` (em vez do placeholder `/modulos` atual).

**Independent Test**: Abrir o mega-menu do header, clicar em "CRM Imobiliário" e confirmar que leva à página; na página, abrir/fechar um item do FAQ e confirmar a troca de estado visual; clicar em um card de "Outros módulos" e confirmar que o link aponta para a rota `/modulos/<slug>` esperada.

---

## Edge Cases

- WHILE a largura da viewport é menor que 576px (breakpoint `mobile-lg`) THE sistema SHALL renderizar todas as 9 seções sem overflow horizontal.
- IF uma rota de página irmã referenciada em "Outros módulos" ainda não existir THEN o link SHALL permanecer apontando para o href real esperado (a página retorna 404 até ser construída em uma feature futura — comportamento intencional, não um bug desta feature).
- IF o nome de um novo componente de seção colidir com um componente já existente em `app/components/sections/` THEN o sistema SHALL usar o prefixo `Crm` no nome do arquivo/componente para evitar sobrescrita silenciosa via auto-import.

---

## Implicit-Requirement Dimensions (sweep — escopo Large)

| Dimension | Resolução |
| --- | --- |
| Input validation & bounds | N/A — página de conteúdo estático, sem formulários ou entrada de usuário nesta feature. |
| Failure / partial-failure states | N/A — não há chamadas assíncronas, escrita de dados ou operações que possam falhar parcialmente; o único "erro" possível é um link/imagem quebrado, coberto pela auditoria de QA (task final). |
| Idempotency / retry / duplicate handling | N/A — não há mutações, submissões ou operações repetíveis nesta feature. |
| Auth boundaries & rate limits | N/A — página pública de marketing, sem autenticação ou controle de acesso. |
| Concurrency / ordering | N/A — renderização estática, sem estado compartilhado ou condições de corrida. |
| Data lifecycle / expiry | N/A — todo o conteúdo é hardcoded nos componentes Vue (mesmo padrão da Home), sem dados persistidos, cache ou expiração. |
| Observability | N/A — nenhuma métrica/log novo é necessário além do que a infraestrutura de hospedagem já coleta para qualquer página; fora do escopo desta feature. |
| External-dependency failure | N/A — todos os assets (imagens/ícones) são baixados e versionados localmente no build (`public/images/`, `public/icons/`), sem dependência de serviço externo em tempo de execução. |
| State-transition integrity | Aplica-se ao accordion de FAQ — ver P3, critério 4 (estado expandido/recolhido deve ser indicado visualmente). |

---

## Requirement Traceability

| Requirement ID | Story | Task | Status |
| --- | --- | --- | --- |
| CRM-01 | P1: Proposta de valor principal | T11 | Verified |
| CRM-02 | P1: Proposta de valor principal | T2 | Verified |
| CRM-03 | P1: Proposta de valor principal | T3 | Verified |
| CRM-04 | P1: Proposta de valor principal | T4 | Verified |
| CRM-05 | P1: Proposta de valor principal | T11 | Verified |
| CRM-06 | P2: Recursos e integrações | T5 | Verified |
| CRM-07 | P2: Recursos e integrações | T6 | Verified |
| CRM-08 | P2: Recursos e integrações | T7 | Verified |
| CRM-09 | P3: Confiança, módulos irmãos e FAQ | T8 | Verified |
| CRM-10 | P3: Confiança, módulos irmãos e FAQ | T9 | Verified |
| CRM-11 | P3: Confiança, módulos irmãos e FAQ | T10 | Verified |
| CRM-12 | P3: Confiança, módulos irmãos e FAQ | T12 | Verified |
| CRM-13 | Edge case: responsividade | T13 | Verified |
| CRM-14 | Edge case: colisão de nomes | T13 | Verified |

**ID format:** `CRM-[NUMBER]`

**Status values:** Pending → In Design → In Tasks → Implementing → Verified

**Coverage:** 14 total, 14 mapped to tasks, 0 unmapped — ver `.specs/features/crm-imobiliario/tasks.md` (T1–T13)

---

## Success Criteria

- [x] `/modulos/crm` renderiza as 9 seções do Figma, na ordem correta, com conteúdo extraído fielmente (sem texto inventado) e registrado em `FIGMA_CONTENT_MANIFEST_CRM.md`.
- [x] Todos os pontos de entrada já existentes no site (CTA da Home em `HeroCrm.vue`, item "CRM Imobiliário" do mega-menu) navegam corretamente até a página.
- [x] `pnpm build` completa sem erros com a nova rota incluída. **Resolvido em 2026-09-08**: `AD-005` foi corrigido — máquina migrada para Node 22.22.0 via `nvm`, pnpm reativado via `corepack prepare pnpm@10.27.0 --activate` (a versão 12.3.4 anteriormente ativa tinha um bug de empacotamento incompatível com o corepack instalado). `pnpm build` confirmado passando de ponta a ponta, incluindo o chunk da rota `/modulos/crm` (`crm-B5crKiyC.mjs`) no output. Ver `AD-005` em `.specs/STATE.md` para o histórico completo.
- [x] A página é visualmente fiel ao Figma e responsiva nos 7 breakpoints do projeto, sem overflow horizontal. (Verificação estrutural via código — ver nota nos Goals acima e evidência detalhada em `tasks.md` T13; sem navegador real disponível neste ambiente para confirmação visual pixel a pixel.)
