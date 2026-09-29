# Plano e Preço Specification

## Problem Statement

O menu do site já referencia preços (`HeaderBar.vue:9` — item "Preços" apontando para `/#precos`, âncora dentro da Home) e a Home tem uma prévia de 2 cards de preço (`HeroPricing.vue` — Urbano/Rural, R$450,00, botão "Ver todos os recursos inclusos" já apontando para `to="#"`), mas não existe hoje uma página dedicada de planos e preços com o conteúdo completo. O design completo já foi produzido no Figma (arquivo `vX7qKnnXSOW8zv4kAuS2eN`, seção `1116:5607` "Plano e Preço", 7 blocos visuais) e precisa ser portado 1:1 para o site em Nuxt, seguindo o mesmo processo já validado em Base de Conhecimento e Eventos (manifesto Figma → assets → componentes Vue).

## Goals

- [ ] A rota `/planos-e-precos` exibe as 5 seções de conteúdo do Figma (Title, Pricing, Features, Opcionais, FAQ) na ordem correta, envolvidas pelo Header/Footer globais já existentes.
- [ ] Todo o conteúdo (copy, preços, ícones) é extraído fielmente do Figma e documentado em `FIGMA_CONTENT_MANIFEST_PLANO_E_PRECO.md`, sem invenção de texto — incluindo o registro explícito dos itens não encontrados no Figma (nota do marcador `**`, hrefs reais dos CTAs).
- [ ] A página é responsiva nos 7 breakpoints do design system do projeto (`app/assets/css/main.css`), sem overflow horizontal.
- [ ] O botão "Ocultar as funcionalidades" / "Ver todas as funcionalidades" da tabela comparativa funciona como um expandir/recolher real (os 2 estados existem desenhados no Figma).

## Out of Scope

Explicitamente excluído. Documentado para prevenir scope creep.

| Feature | Reason |
| --- | --- |
| Descobrir/confirmar a nota de rodapé do marcador `**` ("Tenha seu site imobiliário integrado **") | Não existe em nenhum node do Figma desta seção; inventar o texto violaria a regra de não fabricar conteúdo. **Decisão aprovada pelo usuário em 2026-09-29**: manter o `**` no texto sem footnote correspondente, registrado como pendência documentada (ver Assumptions). |
| Implementar lógica funcional do toggle Mensal/Anual (troca de preço, cálculo do desconto de 12%) | O Figma só desenha 1 dos 2 estados do toggle; não há nenhum valor de preço anual visível em nenhum card. **Decisão aprovada pelo usuário em 2026-09-29**: implementar apenas o visual, sem lógica de troca de preço. |
| Atualizar `HeaderBar.vue` para que "Preços" (`/#precos`) aponte para `/planos-e-precos`, ou atualizar o CTA de `HeroPricing.vue` (Home) | Decisão de navegação cross-page; melhor feita como uma tarefa isolada e reversível depois que a página existir — não faz parte desta feature. |
| Resolver os `href` reais dos CTAs "Testar grátis por 30 dias" e "+ Opcionais" | Nenhum destino real está definido no Figma. **Decisão aprovada pelo usuário em 2026-09-29**: usar `href="#"` como placeholder documentado (consistente com o precedente já existente em `HeroPricing.vue`), até que um destino real seja fornecido. |
| Adicionar test runner (Vitest/Playwright) ao projeto | O projeto não tem test tooling hoje; decisão de infraestrutura cross-cutting, fora do escopo de uma página de conteúdo. |
| Tornar o conteúdo dinâmico/editável via CMS | Todo o conteúdo do site hoje é hardcoded nos componentes Vue; esta feature segue o mesmo padrão. |

---

## Assumptions & Open Questions

Toda ambiguidade foi resolvida ou registrada aqui — nada fica silenciosamente indefinido.

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Rota da página | **`/planos-e-precos`** | Aprovado explicitamente pelo usuário em 2026-09-29, fechando a Open Question 1 | **y — aprovado pelo usuário** |
| Comportamento do toggle Mensal/Anual | Implementar apenas o visual fiel ao Figma; o estado "Mensal" é o estado funcional/visual disponível (renderizado como ativo). Nenhuma lógica de troca de preço é implementada. | Aprovado explicitamente pelo usuário em 2026-09-29: como o Figma não fornece preços anuais nem um estado "Anual" desenhado, criar essa lógica exigiria inventar uma regra de negócio (o desconto de 12% só é mencionado na resposta da FAQ 5, nunca aplicado a um valor visível) | y — aprovado pelo usuário |
| Nota do marcador `**` | Manter o `**` no texto do item de lista exatamente como está no Figma. Não inventar nem criar uma footnote correspondente. A ausência da nota fica registrada como pendência documentada (não é uma Open Question em aberto — é uma limitação de conteúdo do próprio Figma, aceita como está). | Aprovado explicitamente pelo usuário em 2026-09-29: busca completa em todos os nodes da seção não encontrou o texto da nota; inventar violaria a regra "nunca inventar conteúdo" | y — aprovado pelo usuário |
| `href` dos CTAs "Testar grátis por 30 dias" (3 ocorrências) e "+ Opcionais" (2 ocorrências) | `href="#"` temporário, documentado | Aprovado explicitamente pelo usuário em 2026-09-29; consistente com o precedente já existente e aprovado no próprio código (`HeroPricing.vue`'s CTA "Ver todos os recursos inclusos" já usa `to="#"`) | y — aprovado pelo usuário |
| Nomenclatura dos componentes de seção novos | Prefixo `PlanoEPreco` em todos (`PlanoEPrecoHero.vue`, `PlanoEPrecoFeatures.vue`, …), sem subpasta, junto aos demais em `app/components/sections/` | `nuxt.config.ts` registra `~/components` com `pathPrefix: false`; agente de exploração confirmou zero colisões de nome com este prefixo no branch atual | y |
| Reuso do FAQ | Clonar o padrão de `CrmFaq.vue` (não existe `EventosFaq.vue`/`BaseConhecimentoFaq.vue` neste branch, pois vivem em branches próprias ainda não mergeadas) como `PlanoEPrecoFaq.vue` | Único wrapper de FAQ realmente presente no branch atual; mesma estrutura de accordion nativo `<details>/<summary>` | y |
| Estratégia do manifesto de conteúdo Figma | Novo arquivo `FIGMA_CONTENT_MANIFEST_PLANO_E_PRECO.md` na raiz do repo | Mesmo padrão já usado em todas as páginas anteriores | y |

**Open questions**: none — as 4 questões acima foram todas resolvidas pela aprovação explícita do usuário em 2026-09-29 (ver tabela acima). Fica registrada como **pendência documentada, não bloqueante**: a nota de rodapé do marcador `**` permanece indisponível (não localizada no Figma); se o texto real vier a ser fornecido no futuro, uma tarefa isolada deve adicioná-la sem reabrir esta feature.

---

## User Stories

### P1: Visitante compara os planos Urbano e Rural e entende o preço ⭐ MVP

**User Story**: Como visitante do site (potencial cliente de imobiliária), eu quero acessar a página de Planos e Preços e ver os dois planos (Urbano e Rural) lado a lado, com preço e principais recursos, para decidir qual perfil atende à minha operação.

**Why P1**: É o valor mínimo demonstrável — sem isso a página não cumpre seu propósito central, e o CTA já publicado em `HeroPricing.vue` (Home) continua sem destino real.

**Acceptance Criteria**:

1. WHEN um visitante navega para a rota da página THEN o sistema SHALL renderizar a página com status HTTP 200.
2. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Title (node `3220:6091`) com o H1 "Planos & Preços" e a descrição completa.
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Pricing (node `3220:6001`) com os 2 cards "Urbano" e "Rural", cada um com nome, descrição, preço "R$450/mês + opcionais", lista de 9 recursos (idêntica nos dois cards, conforme `FIGMA_CONTENT_MANIFEST_PLANO_E_PRECO.md`) e os 2 CTAs ("Testar grátis por 30 dias", "+ Opcionais").
4. WHEN a página é renderizada THEN o sistema SHALL exibir o toggle Mensal/Anual e o selo "12% OFF" como elementos visuais fiéis ao Figma (sem lógica de troca de preço, conforme Assumption registrada).

**Independent Test**: Rodar `pnpm dev`, abrir a rota da página e confirmar que os 2 cards de preço renderizam com todo o conteúdo do manifesto, sem depender das demais seções (P2/P3).

---

### P2: Visitante compara funcionalidades detalhadamente e conhece os opcionais

**User Story**: Como visitante já interessado no preço-base, eu quero comparar a lista completa de funcionalidades entre os planos e conhecer os itens opcionais pagos, para confirmar que o plano escolhido cobre tudo que preciso.

**Why P2**: Aprofunda a decisão de compra, mas a página já é demonstrável sem essas seções (não bloqueia o MVP).

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Features (node `3220:6094`) com as 9 categorias e suas funcionalidades, marcando cada uma como incluída em ambos os planos (Urbano e Rural), conforme extraído no manifesto.
2. WHEN um visitante clica no botão "Ocultar as funcionalidades" THEN o sistema SHALL recolher a tabela comparativa e alternar o texto/estado do botão para "Ver todas as funcionalidades" (e vice-versa).
3. WHEN a página é renderizada THEN o sistema SHALL exibir a seção Opcionais (node `3220:6334`) com as 3 linhas de complementos pagos (5 usuários adicionais, Site & Hotsite Padrão, Site & Hotsite personalizado) e seus preços, idênticos para Urbano e Rural.

**Independent Test**: Rolar até a tabela de Features, clicar no botão de ocultar/exibir e confirmar a troca de estado; rolar até Opcionais e confirmar que as 3 linhas e preços batem com o manifesto.

---

### P3: Visitante tira dúvidas sobre a assinatura

**User Story**: Como visitante em fase final de decisão, eu quero ler as perguntas frequentes sobre pacotes, valores e funcionalidades, para resolver objeções antes de assinar.

**Why P3**: Reforça conversão, mas não é necessário para a página existir e cumprir seu propósito central.

**Acceptance Criteria**:

1. WHEN a página é renderizada THEN o sistema SHALL exibir a seção FAQ (node `3220:6358`) como um accordion com as 6 perguntas/respostas extraídas verbatim do Figma.
2. WHILE um item do accordion de FAQ está aberto THE sistema SHALL indicar visualmente o estado expandido, consistente com o padrão já usado em `CrmFaq.vue`/`HeroFaq.vue`.

**Independent Test**: Abrir/fechar um item do FAQ e confirmar a troca de estado visual e o texto exato das 6 perguntas contra o manifesto.

---

## Edge Cases

- WHILE a largura da viewport é menor que 576px (breakpoint `mobile-lg`) THE sistema SHALL renderizar as 5 seções sem overflow horizontal, incluindo a tabela comparativa larga (9 categorias) e os 2 cards de preço lado a lado no Figma (que devem empilhar verticalmente em telas estreitas).
- IF o nome de um novo componente de seção colidir com um componente já existente em `app/components/sections/` THEN o sistema SHALL usar o prefixo `PlanoEPreco` no nome do arquivo/componente para evitar sobrescrita silenciosa via auto-import.
- IF o texto do marcador de nota `**` permanecer indisponível THEN o sistema SHALL renderizar o item de lista sem footnote associada (apenas o `*` terá nota, conforme conteúdo real confirmado).

---

## Implicit-Requirement Dimensions (sweep — escopo Large)

| Dimension | Resolução |
| --- | --- |
| Input validation & bounds | N/A — página de conteúdo estático, sem formulários ou entrada de usuário nesta feature. |
| Failure / partial-failure states | N/A — não há chamadas assíncronas, escrita de dados ou operações que possam falhar parcialmente; o único "erro" possível é um link/imagem quebrado, coberto pela auditoria de QA. |
| Idempotency / retry / duplicate handling | N/A — não há mutações, submissões ou operações repetíveis nesta feature. |
| Auth boundaries & rate limits | N/A — página pública de marketing, sem autenticação ou controle de acesso. |
| Concurrency / ordering | N/A — renderização estática, sem estado compartilhado ou condições de corrida. |
| Data lifecycle / expiry | N/A — todo o conteúdo é hardcoded nos componentes Vue, sem dados persistidos, cache ou expiração. |
| Observability | N/A — nenhuma métrica/log novo é necessário além do que a infraestrutura de hospedagem já coleta. |
| External-dependency failure | N/A — todos os assets são baixados e versionados localmente no build, sem dependência de serviço externo em tempo de execução. |
| State-transition integrity | Aplica-se a 2 componentes: o accordion de FAQ (P3, critério 2) e o botão Ocultar/Ver todas da tabela de Features (P2, critério 2) — ambos precisam indicar visualmente o estado atual. |

---

## Requirement Traceability

| Requirement ID | Story | Task | Status |
| --- | --- | --- | --- |
| PEP-01 | P1: Comparação de planos e preço | TBD | Pending |
| PEP-02 | P1: Comparação de planos e preço | TBD | Pending |
| PEP-03 | P1: Comparação de planos e preço | TBD | Pending |
| PEP-04 | P1: Comparação de planos e preço | TBD | Pending |
| PEP-05 | P2: Funcionalidades e opcionais | TBD | Pending |
| PEP-06 | P2: Funcionalidades e opcionais | TBD | Pending |
| PEP-07 | P2: Funcionalidades e opcionais | TBD | Pending |
| PEP-08 | P3: Dúvidas frequentes | TBD | Pending |
| PEP-09 | P3: Dúvidas frequentes | TBD | Pending |
| PEP-10 | Edge case: responsividade | TBD | Pending |
| PEP-11 | Edge case: colisão de nomes | TBD | Pending |

**ID format:** `PEP-[NUMBER]`

**Status values:** Pending → In Design → In Tasks → Implementing → Verified

**Coverage:** 11 total, 0 mapeado a tasks ainda (Etapa de Tasks não iniciada) — esta Etapa 1 cobre apenas Specify + Design.

---

## Success Criteria

- [ ] A rota `/planos-e-precos` renderiza as 5 seções do Figma, na ordem correta, com conteúdo extraído fielmente (sem texto inventado) e registrado em `FIGMA_CONTENT_MANIFEST_PLANO_E_PRECO.md`.
- [ ] `pnpm build` completa sem erros com a rota `/planos-e-precos` incluída.
- [ ] A página é visualmente fiel ao Figma e responsiva nos 7 breakpoints do projeto, sem overflow horizontal.
- [x] Todas as Open Questions foram resolvidas por aprovação explícita do usuário em 2026-09-29 (rota, toggle, marcador `**`, CTAs) — ver tabela de Assumptions acima.

**Este documento cobre a Etapa 1 (Specify + Design), aprovada em 2026-09-29. Tasks: ver `tasks.md`. Execute aguarda aprovação do usuário.**
