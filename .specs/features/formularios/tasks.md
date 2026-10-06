# Formulários Tasks

## Execution Protocol (MANDATORY — do not skip)

Implement these tasks with the `tlc-spec-driven` skill: **activate it by name and follow its Execute flow and Critical Rules.** Do not search for skill files by filesystem path. If the skill cannot be activated, STOP and tell the user.

**Design**: `.specs/features/formularios/design.md`
**Spec**: `.specs/features/formularios/spec.md` (decisões D1–D16, Open Questions Q4–Q7, Q10–Q27)
**Manifesto Figma**: `FIGMA_CONTENT_MANIFEST_FORMULARIOS.md`
**Status**: Draft — Etapa 2 (Tasks), aguardando aprovação antes de Execute

**Regras que valem para TODAS as tasks**

1. **Open Questions não viram decisão silenciosa.** Toda task que toca um item aberto tem um campo `Backend/Aberto` e um gate explícito. Se a resposta não existir quando a task chegar, a task **para e pergunta ao usuário**; não escolhe um default.
2. **Nada inventado:** `tipo_mail`, `formSite`, `produto`, site key/action do reCAPTCHA, regra de Testar grátis, identificação do Inscreva-se, texto/visual de erro e sucesso. Onde o valor não existe, o tipo é opcional e o dado fica **ausente**.
3. **Instalação de dependência** só na T18 (`maska`) e somente com aprovação explícita do usuário no início do Execute. Nenhuma outra dependência.
4. **Não tocar** em `PlanoEPrecoPricing.vue`, `.specs/features/plano-e-preco/tasks.md`, nem em `.claude/scheduled_tasks.lock` (alterações externas/ruído da harness).
5. **Commit/push/merge/branch só quando o usuário pedir.** Esta lista não autoriza nenhum.
6. Convenções do `CLAUDE.md`: prefixo `Form*` em tudo; três camadas `layout/`·`sections/`·`ui/`; classes expostas por prop com `withDefaults()`; HTML rico por slot; **sem literais de array/objeto em atributos de template** (Tailwind v4); **sem `translate-x/y`** (AD-007, usar flex); dados repetidos em `const` tipado/`app/data`; sem comentários no código; ativo compartilhado em um único caminho em `public/`.
7. Sem test runner (AD-002): o gate é `pnpm build` + verificação manual/visual em `pnpm dev` contra Figma. Nenhuma task introduz Vitest/Playwright como dependência.

---

## Matriz por página (compartilhado × específico × dependente de backend)

| Aspecto | `/testar-gratis` | `/agendar-demonstracao` (Agendar Demonstração) | `/inscreva-se` |
| --- | --- | --- | --- |
| **Compartilhado (1 implementação)** | Todos os componentes `layout/` e `ui/`, `FormLeadFields`, `useLeadForm`, `useRecaptchaV3`, `app/data/forms.ts` (trust bar, badge, chips de contato e de área, UFs, texto do checkbox), campos Empresa*/Nome completo*/Site/Telefone*/E-mail*/Cidade*/Estado*, Suporte e Treinamento* (3 checkboxes, ≥1), Área de atuação*, aceite*, validação, máscara `maska`, `traffic_source`, estados idle/submitting/success/failure | idem | idem |
| **Específico da página** | H1 "Teste o SUBSEE grátis por 30 dias"; título/lead/3 benefícios (calendar/settings/headphones); card com asset único `rocket-icon-bg`, "Comece seu teste grátis"; badge **dentro** da lista; **sem** "Mensagem"; CTA "Começar teste grátis" (Poppins SemiBold 15px) | H1 "Agende uma demonstração do SUBSEE"; benefícios (monitor/settings/user); ícone message-circle + círculo CSS, "Vamos conversar?"; badge dentro da lista; "Mensagem" (placeholder do melhor dia/horário); CTA "Quero agendar uma demonstração" (Regular 20px) | H1 "Inscreva-se no evento do SUBSEE"; benefícios (monitor/settings/user); message-circle + círculo CSS, "Garanta sua vaga!"; badge **fora** da lista; "Mensagem" **opcional** (D10); CTA "Quero me inscrever no evento" (Regular 20px) |
| **Depende de confirmação do backend** | `tipo_mail`, `formSite` (Q4/Q5); regra para `message` ausente (Q25); `produto` (Q7); endpoint/CORS (Q6); reCAPTCHA (Q13) | `tipo_mail`, `formSite` (Q4/Q5); "Mensagem" obrigatória? (Q10); `produto` (Q7); endpoint/CORS (Q6); reCAPTCHA (Q13) | `tipo_mail`, `formSite` (Q4/Q5); identificação do Inscreva-se (Q26); evento/Zoom (Q19); `produto` (Q7); endpoint/CORS (Q6); reCAPTCHA (Q13) |

## Bloqueios (Open Question → o que ela trava)

| Open Question | Trava | Não trava |
| --- | --- | --- |
| Q4/Q5 `tipo_mail`/`formSite` | T40 e os testes de envio T42–T44 | Toda a UI, validação e estados |
| Q7 `produto` | T26 (mapeamento em `buildPayload`), T40 | UI do chip "Área de atuação" |
| Q13 reCAPTCHA (key/action/verificação) | T41, T42–T44 | T28 (implementado contra `runtimeConfig`, com chave vazia) |
| Q6/Q23 endpoint, CORS, contrato de resposta | T29 (critério `isSuccessResponse`), T41, T42–T44 | Máquina de estados (T29 isola o critério em um ponto) |
| Q25 Testar grátis sem `message` | T42 | UI sem o campo |
| Q26/Q19 Inscreva-se | T40 (parte de `/inscreva-se`), T44 | UI da página |
| Q10 Mensagem em Agendar | T25 (regra de obrigatoriedade da página `/agendar-demonstracao`) | Renderização do textarea |
| Q11 valor de UF | T11 (valor enviado), T26 | Lista visual de UFs |
| Q12 padrão da máscara e regras de formato | T25 (regras de formato), T32–T34 (`mask` do telefone) | Suporte a máscara em `FormField` (T19) |
| Q14/Q15 texto e visual de erro/sucesso | Acabamento final de T23 | Comportamento (D13/D14) |
| Q16 evento `obrigado` | T30 | Todo o resto |
| Q17 origem do cookie `__trf.src` | Verificação ponta a ponta de `traffic_source` | Leitura (T27) |
| Q27 rotas `/lgpd/...` | Verificação dos links em T21/T49 | Renderização do checkbox |
| Q20/Q21/Q22 responsivo, texto duplicado, tipografia do CTA | Sem bloqueio; reproduzir Figma / derivar do design system e sinalizar | — |

---

## Test Coverage Matrix

> Generated from `.specs/STATE.md` (AD-002) and the prior page features (`eventos`, `base-de-conhecimento`). Guidelines found: `CLAUDE.md` ("no lint command and no test runner"; gate = `pnpm build` + manual/visual). No automated tests exist; **the composable is the highest-risk layer and gets an explicit manual scenario matrix (T25, T29, T50) instead of a runner.** Introducing Vitest is out of scope ([[AD-002]]).

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| --- | --- | --- | --- | --- |
| Types / data / config | none | Compila; dados 1:1 com o manifesto; nenhum valor pendente de backend preenchido | `app/types/forms.ts`, `app/data/forms.ts`, `nuxt.config.ts` | `pnpm build` |
| Assets (`public/icons/*`) | none | Bytes exatos exportados do Figma; um arquivo por ícone; sem cópia por página | `public/icons/form-*.svg` | comparação visual com `get_design_context`/`get_screenshot` |
| `layout/` shells | none | Compila; slots/props renderizam; sem conteúdo de produto | `app/components/layout/Form*.vue` | `pnpm build` + verificação em `pnpm dev` |
| `ui/` primitives | none | Cada estado (default/foco/erro/disabled/checked) verificado manualmente; teclado e `aria-*` | `app/components/ui/Form*.vue` | `pnpm build` + verificação em `pnpm dev` |
| Composables (`useLeadForm`, `useRecaptchaV3`) | none (manual scenario matrix) | Todos os cenários de validação, contato ≥1, aceite, sucesso, falha de rede/HTTP/token: sem sucesso indevido | `app/composables/use*.ts` | `pnpm build` + cenários manuais em `pnpm dev` |
| `sections/` wrappers | none | Config correta por página; diferenças estruturais só por props/slots | `app/components/sections/Form*.vue` | `pnpm build` + comparação visual |
| Pages | none | 200; exatamente 1 `<h1>`; `useSeoMeta`; ordem das seções como no Figma | `app/pages/{testar-gratis,contato,inscreva-se}.vue` | `pnpm build` + `pnpm dev` |
| Envio real (integração) | none (manual, ambiente de homologação) | 1 envio por página chega ao backend com o payload esperado | — | `pnpm dev` contra o endpoint confirmado |

## Gate Check Commands

| Gate Level | When to Use | Command |
| --- | --- | --- |
| Quick | Após tasks de componente/dado/tipo | `pnpm build` |
| Full | Após tasks de composable, seção e página | `pnpm build` && `pnpm dev` → exercitar os ACs mapeados na rota |
| Build | Fim de fase de QA (T51/T52) | `pnpm build` (com `/testar-gratis`, `/agendar-demonstracao`, `/inscreva-se` no output) && varredura nos 7 breakpoints (1920/1440/1280/1024/768/576/375px) sem overflow horizontal e sem erros de console/404 && comparação por seção com `get_screenshot` |

> Toolchain: Node 22 + pnpm (`nvm use 22.22.0`, `corepack prepare pnpm@10.27.0 --activate`, AD-006).

---

## Execution Plan

Fases sequenciais. **A Fase 1 (Confirmações) roda em paralelo com as Fases 2–7** (é trabalho do usuário/backend, não de código) e só **bloqueia a Fase 8**. As Fases 2–7 entregam a UI completa sem depender de nenhuma resposta do backend.

```
Fase 1  Confirmações (paralela)   T1 T2 T3 T4 T5 T6 T7 ─────────────┐
Fase 2  Base compartilhada        T8 → T9 → T10 → T11 → T12          │
Fase 3  Componentes layout        T13 → T14 → T15 → T16 → T17        │
Fase 4  Componentes UI            T18 → T19 → T20 → T21 → T22 → T23  │
Fase 5  Lógica                    T24 → T25 → T26 → T27 → T28 → T29 → T30
Fase 6  Sections                  T31 → T32 → T33 → T34              │
Fase 7  Páginas e links           T35 → T36 → T37 → T38 → T39        │
Fase 8  Integração (bloqueada) ◄──────────────────────────────────── ┘
                                  T40 → T41 → T42 → T43 → T44
Fase 9  QA e fechamento           T45 → T46 → T47 → T48 → T49 → T50 → T51 → T52
```

Dependências entre fases: 3 depende de 2 (T8–T12) · 4 depende de 2 e 3 · 5 depende de T10, T11, T12 e T18 (só para máscara na T19) · 6 depende de 3, 4 e 5 · 7 depende de 6 · **8 depende de 5, 7 e da Fase 1 (T1–T6)** · 9 depende de 7 (visual/responsivo/a11y) e de 8 (envio real, falha e final).

---

## Task Breakdown

### Fase 1 — Confirmações (Open Questions; não são tarefas de código)

Cada task é um pedido de confirmação ao usuário/time de backend. **Done when** = resposta registrada por escrito em `spec.md` (movendo a Q para "Decisões fechadas") ou explicitamente adiada pelo usuário. Nenhuma delas autoriza inventar um valor.

### T1: Confirmar `tipo_mail` e `formSite` por página

**What**: Obter, para as 3 páginas, os valores exatos de `tipo_mail` e `formSite`.
**Where**: `.specs/features/formularios/spec.md` (registro da resposta)
**Depends on**: None
**Requirement**: FORM-05, FORM-09, FORM-13 · Q4, Q5
**Escopo**: Específico por página (3 valores × 2 campos)
**Backend/Aberto**: Q4, Q5
**Tools**: nenhuma (pergunta ao usuário)

**Done when**:
- [ ] Valores de `tipo_mail` e `formSite` documentados para Testar grátis, Agendar e Inscreva-se — ou "adiado" por escrito

**Tests**: none
**Gate**: Manual — resposta registrada

---

### T2: Confirmar mapeamento de `produto` / Área de atuação

**What**: Obter o valor esperado em `produto` e como "Área de atuação" (Urbana/Rural/Temporada, seleção única no Figma) é mapeada (rótulo? slug? múltiplo?).
**Where**: `.specs/features/formularios/spec.md`
**Depends on**: None
**Requirement**: FORM-05 · Q7, D12
**Escopo**: Compartilhado (1 mapeamento para as 3 páginas)
**Backend/Aberto**: Q7
**Tools**: nenhuma

**Done when**:
- [ ] Tabela `Urbana/Rural/Temporada → valor de produto` registrada, ou confirmado que o backend recebe outro formato

**Tests**: none
**Gate**: Manual

---

### T3: Confirmar configuração do reCAPTCHA v3

**What**: Obter site key, `action`, score mínimo, verificação server-side e comportamento esperado se o token faltar/expirar.
**Where**: `.specs/features/formularios/spec.md`
**Depends on**: None
**Requirement**: FORM-07 · Q13, D15
**Escopo**: Compartilhado
**Backend/Aberto**: Q13
**Tools**: nenhuma

**Done when**:
- [ ] site key, `action` e política de token ausente registrados (a versão v3 já está decidida)

**Tests**: none
**Gate**: Manual

---

### T4: Confirmar endpoint, CORS e contrato de resposta

**What**: Confirmar se o endpoint legado (`https://forms.sub100.com.br/sub100sistemas/formularios.php`) serve as 3 páginas, se aceita o domínio novo (CORS/origem), e obter o contrato de resposta (status/corpo de sucesso e de erro) e o código-fonte do legado.
**Where**: `.specs/features/formularios/spec.md`
**Depends on**: None
**Requirement**: FORM-05, FORM-06 · Q6, Q23
**Escopo**: Compartilhado
**Backend/Aberto**: Q6, Q23
**Tools**: nenhuma

**Done when**:
- [ ] Endpoint e origem permitidos confirmados
- [ ] Critério objetivo de "sucesso" da resposta (status e/ou corpo) documentado — necessário para T29

**Tests**: none
**Gate**: Manual

---

### T5: Confirmar regra do backend para Testar grátis

**What**: Confirmar se o backend aceita envio de Testar grátis sem `message` (o legado exigia `message`; o Figma não tem o campo) e qual valor/omissão é esperado.
**Where**: `.specs/features/formularios/spec.md`
**Depends on**: None
**Requirement**: FORM-02, FORM-05 · Q25
**Escopo**: Específico de `/testar-gratis`
**Backend/Aberto**: Q25
**Tools**: nenhuma

**Done when**:
- [ ] Regra registrada (omitir campo / enviar vazio / outro)

**Tests**: none
**Gate**: Manual

---

### T6: Confirmar identificação do Inscreva-se e evento

**What**: Obter como o backend identifica um envio de Inscreva-se e se há identificador/campo do evento (nome/data/Zoom).
**Where**: `.specs/features/formularios/spec.md`
**Depends on**: None
**Requirement**: FORM-15 · Q26, Q19
**Escopo**: Específico de `/inscreva-se`
**Backend/Aberto**: Q26, Q19
**Tools**: nenhuma

**Done when**:
- [ ] Forma de identificação (e campo de evento, se houver) registrada

**Tests**: none
**Gate**: Manual

---

### T7: Confirmar demais Open Questions

**What**: Coletar resposta (ou adiamento explícito) para: Q10 (Mensagem em Agendar), Q11 (valor de UF), Q12 (padrão da máscara e regras de formato de telefone/e-mail/site), Q14/Q15 (texto e visual de erro/sucesso), Q16 (evento `obrigado`), Q17 (origem de `__trf.src`), Q18 (destino dos dados), Q20 (responsivo), Q21 (descrição duplicada), Q22 (tipografia do CTA), Q27 (existência de `/lgpd/...`).
**Where**: `.specs/features/formularios/spec.md`
**Depends on**: None
**Requirement**: FORM-03, FORM-04, FORM-10, FORM-19 · Q10–Q12, Q14–Q22, Q27
**Escopo**: Misto (marcado por questão)
**Backend/Aberto**: as listadas
**Tools**: nenhuma

**Done when**:
- [ ] Cada questão listada tem resposta registrada ou "adiada" com o comportamento-base já decidido (D13/D14; reproduzir Figma em Q21/Q22)

**Tests**: none
**Gate**: Manual

---

### Fase 2 — Base compartilhada

### T8: Verificar colisão de nomes `Form*`

**What**: `grep` no namespace plano de auto-import por qualquer `Form*`/nome colidente (componentes, ícones, composables) antes de criar arquivos.
**Where**: n/a (verificação; resultado registrado nesta task)
**Depends on**: None
**Requirement**: A2/D2 (AD-004, AD-010)
**Escopo**: Compartilhado
**Tools**: Grep

**Done when**:
- [x] Nenhum arquivo existente em `app/components/**` colide com os 16 nomes propostos: `FormPageHero`, `FormSplitSection`, `FormBenefitList`, `FormCard`, `FormTrustBar`, `FormField`, `FormChoiceGroup`, `FormCheckbox`, `FormSubmitButton`, `FormSubmitStatus`, `FormLeadFields`, `FormTestarGratis`, `FormAgendarDemo`, `FormInscrevaSe`
- [x] Colisões (se houver) registradas e renomeadas antes de seguir

**Tests**: none
**Gate**: Quick — resultado do grep anexado

---

### T9: Exportar ícones e vetores do Figma

**What**: Baixar (não redesenhar) cada ícone listado na seção 5 do manifesto, um arquivo por ícone em `public/icons/`, e decidir sobre BG/divisor comparando com `public/images/divider/` e `crm-hero-divider-onda.svg` (AD-014/AD-015: confirmar com `get_design_context`, não pelo nome da camada).
**Where**: `public/icons/form-*.svg` (novos), `public/images/form/` (fundo/divisor, se não houver equivalente idêntico)
**Depends on**: T8
**Reuses**: `IconArrowRight`, `IconChevronDown`, `IconCheck`, `IconUser` e divisores existentes — **só se idênticos ao Figma**
**Requirement**: FORM-01, FORM-09, FORM-13, FORM-17
**Escopo**: Compartilhado; exceções: `calendar`/`headphones`/`rocket-icon-bg` só Testar grátis; `monitor`/`user`/`message-circle 24.375px` só Agendar e Inscreva-se
**Tools**: MCP `figma` (`get_design_context`/`download_assets`), Skill `figma:figma-design-to-code`

**Done when**:
- [ ] Todos os ícones do manifesto existem uma única vez (sem cópia por página); URLs do Figma expiram em 7 dias — rodar no início do Execute
- [ ] Cada arquivo é o SVG exportado, comparado visualmente ao node
- [ ] Decisão sobre fundo/divisor documentada (reuso vs. exportar), com a comparação feita

**Tests**: none
**Gate**: Quick — comparação visual por ativo

---

### T10: Criar `app/types/forms.ts`

**What**: Tipos de contrato do design: `FormFieldKey`, `ContactPreference`, `FormBenefit`, `FormTrustItem`, `FormPageConfig`, `LeadPayload`, estado do envio.
**Where**: `app/types/forms.ts`
**Depends on**: T8
**Reuses**: contratos de `design.md` (com `tipoMail`, `formSite`, `produto`, `message` **opcionais**)
**Requirement**: FORM-05
**Escopo**: Compartilhado
**Backend/Aberto**: os campos pendentes ficam opcionais no tipo (D16)
**Tools**: nenhuma

**Done when**:
- [x] Tipos exportados conforme `design.md`; nenhum valor default para `tipo_mail`/`formSite`/`produto`
- [x] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T11: Criar `app/data/forms.ts` (dados compartilhados)

**What**: Dados repetidos nas 3 páginas, tipados: trust bar (3 itens), texto do badge, opções de Suporte e Treinamento (3), opções de Área de atuação (3), lista de 27 UFs, texto e links do checkbox (D7).
**Where**: `app/data/forms.ts`
**Depends on**: T9, T10
**Reuses**: `CLAUDE.md` (dados compartilhados entre páginas → `app/data`, importados na camada `sections/`, nunca em `layout/`)
**Requirement**: FORM-01, FORM-03
**Escopo**: Compartilhado
**Backend/Aberto**: Q11 (valor enviado de UF: guardar `{ sigla, nome }`; qual vai ao payload é decidido pela resposta), Q7 (opções de Área guardam só rótulo/ícone; valor de `produto` **não** é definido aqui)
**Tools**: nenhuma

**Done when**:
- [ ] Textos verbatim do manifesto; ícones apontam para os arquivos de T9
- [ ] Nenhum valor de payload pendente de backend está preenchido
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T12: Adicionar `runtimeConfig.public` em `nuxt.config.ts`

**What**: `formsEndpoint` (endpoint legado, D15) e `recaptchaSiteKey` (**vazio**), sem outra alteração.
**Where**: `nuxt.config.ts`
**Depends on**: T8
**Requirement**: FORM-05, FORM-07
**Escopo**: Compartilhado
**Backend/Aberto**: Q6 (CORS), Q13 (site key permanece vazia até T3/T41)
**Tools**: nenhuma

**Done when**:
- [x] `useRuntimeConfig().public.formsEndpoint` retorna o endpoint legado; `recaptchaSiteKey` é string vazia
- [x] Nenhum outro trecho de `nuxt.config.ts` alterado; `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### Fase 3 — Componentes de layout (sem conteúdo de produto; classes por prop; HTML por slot)

### T13: `layout/FormPageHero.vue`

**What**: Fundo + divisor horizontal + coluna centralizada 820px com H1 e descrição.
**Where**: `app/components/layout/FormPageHero.vue`
**Depends on**: T9
**Reuses**: `container-page`, `section-py`; ativos de fundo de T9
**Requirement**: FORM-01, FORM-17
**Escopo**: Compartilhado
**Tools**: MCP `figma` (`get_design_context` nodes `3220:7062`/`3220:8102`/`3220:8468`), Skill `figma:figma-design-to-code`

**Done when**:
- [x] Slots `#heading`, `#lead`; classes por prop com `withDefaults()`; sem texto embutido
- [x] Tipografia/cores conforme manifesto (H1 Poppins Medium 40px `#313846`; lead 26px); H1 é o único `<h1>` (renderizado como `<h1>` pelo slot)
- [x] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T14: `layout/FormSplitSection.vue`

**What**: Coluna de texto 530px + card 640px, empilhando abaixo de `tablet-lg`.
**Where**: `app/components/layout/FormSplitSection.vue`
**Depends on**: T13
**Reuses**: `container-page`, breakpoints do design system (Q20)
**Requirement**: FORM-01, FORM-18
**Escopo**: Compartilhado
**Backend/Aberto**: Q20 (responsivo derivado do design system, sinalizar)
**Tools**: MCP `figma`

**Done when**:
- [ ] Slots `#intro` e `#card`; sem `translate-x/y`
- [ ] Sem overflow horizontal de 320 a 1920px (verificação de esqueleto)
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T15: `layout/FormBenefitList.vue`

**What**: Lista de benefícios (chip 60px com sombra + ícone + título + descrição) com slot de rodapé para o badge.
**Where**: `app/components/layout/FormBenefitList.vue`
**Depends on**: T14
**Requirement**: FORM-01, FORM-09, FORM-13
**Escopo**: Compartilhado; **diferença estrutural**: `#footer` posiciona o badge dentro da lista (Testar grátis, Agendar) ou fora dela, gap 10px (Inscreva-se)
**Tools**: MCP `figma`

**Done when**:
- [x] `items: FormBenefit[]` renderizado por um único `v-for`; `#footer` opcional
- [x] Sombra `0 8 12 rgba(49,56,70,.12)` e chip `rounded-[16px]` conforme manifesto
- [x] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T16: `layout/FormCard.vue`

**What**: Casca do card (640px, `p-[40px]`, `rounded-[16px]`, sombra `0 10 15 rgba(93,95,239,.2)`, `min-h-[700px]`) com header por slots.
**Where**: `app/components/layout/FormCard.vue`
**Depends on**: T14
**Requirement**: FORM-01, FORM-09, FORM-13
**Escopo**: Compartilhado; **diferença estrutural**: `#icon` recebe asset único (rocket, Testar grátis) ou círculo `#eef2ff` + ícone (Agendar/Inscreva-se)
**Tools**: MCP `figma`

**Done when**:
- [x] Slots `#icon`, `#title`, `#subtitle` e default (campos); classes por prop
- [x] Sem flex-hack de `translate`; `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T17: `layout/FormTrustBar.vue`

**What**: Barra de credibilidade (3 itens, borda `#eceff4`, `rounded-[16px]`).
**Where**: `app/components/layout/FormTrustBar.vue`
**Depends on**: T13
**Requirement**: FORM-01
**Escopo**: Compartilhado (idêntica nas 3 páginas)
**Tools**: MCP `figma` (nodes `3220:7176`/`3220:8226`/`3220:8592`)

**Done when**:
- [x] `items: FormTrustItem[]` via `v-for`; círculo 48px `#f0f1fb`; textos `whitespace-nowrap` como no Figma sem causar overflow em telas estreitas
- [x] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### Fase 4 — Componentes UI

### T18: Instalar `maska` (requer aprovação explícita)

**What**: Adicionar `maska` como dependência (D11: v3.2.2, sem peerDependencies) e validar compatibilidade com o SSR do Nuxt 4 (diretiva só ativa no cliente, sem erro de hydration).
**Where**: `package.json` (+ `pnpm-lock.yaml`)
**Depends on**: T12
**Requirement**: FORM-04 · D11
**Escopo**: Compartilhado
**Backend/Aberto**: nenhum
**Tools**: `pnpm add maska` — **só após o usuário aprovar a instalação**; se não aprovar, esta task e a máscara ficam pendentes e o campo Telefone segue sem máscara

**Done when**:
- [ ] Aprovação do usuário registrada
- [ ] `maska` instalada; nenhuma outra dependência alterada
- [ ] `pnpm build` passa; teste mínimo com a diretiva em uma página descartável **não** é commitado

**Tests**: none
**Gate**: Build

---

### T19: `ui/FormField.vue`

**What**: Label + `input`/`textarea`/`select` + mensagem de erro; `defineModel`; `required`; prop `mask` (pattern opcional, aplicado via `vMaska`).
**Where**: `app/components/ui/FormField.vue`
**Depends on**: T18, T11
**Requirement**: FORM-03, FORM-04, FORM-20
**Escopo**: Compartilhado (Empresa, Nome, Site, Telefone, E-mail, Cidade, Estado, Mensagem)
**Backend/Aberto**: Q12 — o componente aceita `mask` mas **não** fixa o padrão do telefone; Q14 — estilo de erro neutro/mínimo, sem inventar visual
**Tools**: MCP `figma` (caixa 46px, borda `#e2e8f0`, `rounded-[8px]`, placeholder `#94a3b8`; textarea borda `#e5e7eb`, `rounded-[10px]`, min 96px)

**Done when**:
- [ ] `label for`/`id`, `aria-invalid`, `aria-describedby` e `role="alert"` no erro; `*` no label conforme Figma
- [ ] Variantes `text`, `select` (chevron-down), `textarea` funcionando; foco visível
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T20: `ui/FormChoiceGroup.vue`

**What**: Chips com ícone, modos `single` e `multiple`, `v-model`.
**Where**: `app/components/ui/FormChoiceGroup.vue`
**Depends on**: T19
**Requirement**: FORM-03 · D8
**Escopo**: Compartilhado — Suporte e Treinamento = `multiple` (checkboxes independentes reais em `<fieldset>/<legend>`); Área de atuação = `single`
**Backend/Aberto**: Q7 (o componente devolve a opção escolhida; o mapeamento para `produto` não vive aqui); Q14 (estado inicial dos chips — **não** pré-selecionar "Ligação")
**Tools**: MCP `figma` (chips 40px, gap 12px, selecionado `#eef2ff`/`#5d5fef`)

**Done when**:
- [ ] 3 checkboxes de contato independentes; operação por teclado; erro anunciável quando nenhum marcado
- [ ] Nenhuma opção vem pré-selecionada por padrão (o "Ligação" do Figma é estado estático do frame — só muda se Q14 disser)
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T21: `ui/FormCheckbox.vue`

**What**: Checkbox de aceite (18px, borda `#cbd5e1`, `rounded-[4px]`) com slot para o texto.
**Where**: `app/components/ui/FormCheckbox.vue`
**Depends on**: T19
**Requirement**: FORM-03 · D7
**Escopo**: Compartilhado
**Backend/Aberto**: Q27 (as rotas `/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/` podem não existir neste site)
**Tools**: MCP `figma`

**Done when**:
- [ ] Slot recebe "Li e aceito os Termos de Uso e a Política de Privacidade." com os links decididos em D7 (Poppins Medium sublinhado)
- [ ] Erro anunciável; teclado; `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T22: `ui/FormSubmitButton.vue`

**What**: CTA gradiente com seta e estado `loading`, `<button type="submit">`.
**Where**: `app/components/ui/FormSubmitButton.vue`
**Depends on**: T19
**Requirement**: FORM-05
**Escopo**: Compartilhado; **diferença por página**: tipografia do CTA por prop de classe (Testar grátis SemiBold 15px; Agendar/Inscreva-se Regular 20px)
**Backend/Aberto**: Q22 (reproduzir Figma e sinalizar a inconsistência)
**Tools**: MCP `figma` (gradiente `linear-gradient(106.15deg, #5d5fef 1.6%, #4042cc 110.35%)`, h 52px, `rounded-[12px]`, sombra `0 6 10 rgba(93,95,239,.25)`)

**Done when**:
- [ ] Estados default/hover/foco/`loading`/disabled; `aria-busy` no loading; texto por slot
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T23: `ui/FormSubmitStatus.vue`

**What**: Bloco de feedback de envio: sucesso inline (D13) e erro de envio (D14), separados dos erros de campo.
**Where**: `app/components/ui/FormSubmitStatus.vue`
**Depends on**: T19
**Requirement**: FORM-05, FORM-06
**Escopo**: Compartilhado. **Refinamento de design** (ver seção final): componente não previsto em `design.md`
**Backend/Aberto**: Q14/Q15 — texto e visual finais **não inventados**: mensagens neutras e mínimas, marcadas como provisórias, expostas por slot/prop para troca; pendente de confirmação
**Tools**: nenhuma

**Done when**:
- [ ] `status: 'success' | 'failure'` com `role="status"`/`role="alert"`; textos vêm por slot/prop, sem copy definitiva embutida
- [ ] Visual mínimo, tokens existentes; nada de ilustração/animação inventada
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### Fase 5 — Lógica (Composition API + TypeScript)

### T24: `useLeadForm` — estado e campos por config

**What**: Estado reativo dos campos (`empresa`, `contato`, `site`, `phone`, `email`, `cidade`, `estado`, `message`, `contactPreference[]`, `area`, `accepted`) dirigido por `FormPageConfig` (a presença de `message` vem da config).
**Where**: `app/composables/useLeadForm.ts`
**Depends on**: T10, T11
**Requirement**: FORM-01, FORM-02
**Escopo**: Compartilhado; `message` só quando a config da página o declara
**Tools**: nenhuma

**Done when**:
- [x] Retorna estado, `errors`, `status`, `submitError`, `submit()` (vazios por ora) e reset de erro por campo
- [x] Sem estado inicial pré-selecionado em `contactPreference` nem `area`
- [x] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T25: `useLeadForm` — validação de campos

**What**: Validação por campo, separada do estado de envio: Empresa*, Nome*, Telefone*, E-mail*, Cidade*, Estado*, Área de atuação*, Suporte e Treinamento (≥1), aceite; Site e Mensagem conforme config.
**Where**: `app/composables/useLeadForm.ts`
**Depends on**: T24
**Requirement**: FORM-03, FORM-10 · D8, D9
**Escopo**: Compartilhado, exceto Mensagem (por página: Testar grátis n/a; Inscreva-se opcional; **Agendar: regra pendente**)
**Backend/Aberto**: Q10 (Mensagem em Agendar — sem regra até resposta; se Q10 não estiver respondida aqui, **perguntar ao usuário**); Q12 (só validação "não vazio" para telefone/e-mail/site; regras de formato **só depois** de Q12); Q14 (texto das mensagens de erro provisório)
**Tools**: nenhuma

**Done when**:
- [ ] Cenários manuais em `pnpm dev`: cada obrigatório vazio bloqueia o envio; nenhum contato marcado bloqueia; sem aceite bloqueia; tudo válido passa
- [ ] Erros de campo **não** alteram `status` do envio; re-validação por campo após a 1ª tentativa
- [ ] `pnpm build` passa

**Tests**: none (matriz manual)
**Gate**: Full

---

### T26: `useLeadForm` — montagem do payload

**What**: `buildPayload()` que gera `LeadPayload`: `resposta*` a partir dos 3 checkboxes, `aceito`, `traffic_source`, `token`; `tipo_mail`, `formSite`, `produto` e `message` **só entram se definidos na config/resposta confirmada**.
**Where**: `app/composables/useLeadForm.ts`
**Depends on**: T25
**Requirement**: FORM-05 · D12, D16
**Escopo**: Compartilhado; `message` ausente em Testar grátis
**Backend/Aberto**: Q4/Q5 (ausentes até T1), Q7 (mapeamento de `produto` **não implementado** até T2), Q11 (valor de `estado`), Q25 (comportamento de `message` em Testar grátis)
**Tools**: nenhuma

**Done when**:
- [x] `buildPayload()` nunca preenche `tipo_mail`/`formSite`/`produto` com valor inventado; chaves ausentes são omitidas
- [x] `respostaLigacao/Email/Whatsapp` refletem exatamente os 3 checkboxes
- [x] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T27: Leitura de `traffic_source` / `__trf.src`

**What**: Ler o cookie `__trf.src` com `useCookie` e expor como `traffic_source`.
**Where**: `app/composables/useLeadForm.ts`
**Depends on**: T24
**Requirement**: FORM-08 · D15
**Escopo**: Compartilhado
**Backend/Aberto**: Q17 (quem grava o cookie no site novo — a leitura não depende disso; a verificação ponta a ponta sim)
**Tools**: nenhuma

**Done when**:
- [ ] Com o cookie definido manualmente em `pnpm dev`, `traffic_source` no payload = valor do cookie; sem cookie = string vazia (ou omitido, conforme contrato de T4)
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Full

---

### T28: `useRecaptchaV3`

**What**: Carregar o script do reCAPTCHA v3 sob demanda no cliente e expor `getToken()`; falha ao obter token = erro (sem sucesso implícito).
**Where**: `app/composables/useRecaptchaV3.ts`
**Depends on**: T12
**Requirement**: FORM-07 · D15
**Escopo**: Compartilhado. **Refinamento de design**: extraído de `useLeadForm` (ver seção final)
**Backend/Aberto**: Q13 — lê `recaptchaSiteKey` do `runtimeConfig` (vazio até T3/T41); `action` **não é inventada**: entra por parâmetro com valor a definir em T41. Sem script no `<head>` global (PageSpeed)
**Tools**: nenhuma

**Done when**:
- [x] Script carregado só no cliente e só quando o formulário é usado; nenhuma requisição ao reCAPTCHA no carregamento das demais páginas
- [x] Site key vazia → `getToken()` rejeita com erro claro (caminho de falha), sem quebrar o build/SSR
- [x] `pnpm build` passa

**Tests**: none
**Gate**: Full

---

### T29: `useLeadForm` — envio e máquina de estados

**What**: `submit()` com dois eixos independentes: erros de validação (T25) × `status: idle | submitting | success | failure`. `$fetch` POST; `success` **somente** quando `isSuccessResponse(response)` for verdadeiro; qualquer rejeição (rede, CORS, HTTP de erro, token indisponível) → `failure`, dados preservados, botão reabilitado.
**Where**: `app/composables/useLeadForm.ts`
**Depends on**: T26, T27, T28
**Requirement**: FORM-05, FORM-06 · D13, D14
**Escopo**: Compartilhado
**Backend/Aberto**: Q23/Q6 — `isSuccessResponse` fica **isolado em um único ponto** e implementado conforme o contrato confirmado em T4; se T4 não estiver respondida, **parar e perguntar**; não assumir "HTTP 200 = sucesso"
**Tools**: nenhuma

**Done when**:
- [ ] Botão desabilitado em `submitting`; `success` inline só após resposta aceita; `failure` mostra erro de envio distinto das mensagens de campo
- [ ] Cenários manuais (endpoint forçado a falhar, rede off, resposta com corpo de erro): **nunca** exibe sucesso
- [ ] Submeter inválido não muda `status`
- [ ] `pnpm build` passa

**Tests**: none (matriz manual)
**Gate**: Full

---

### T30: Evento `obrigado` (gated)

**What**: Disparar o evento `obrigado` apenas após `success`.
**Where**: `app/composables/useLeadForm.ts`
**Depends on**: T29, T7
**Requirement**: FORM-05 · Q16
**Escopo**: Compartilhado
**Backend/Aberto**: Q16 (alvo — dataLayer/GTM? —, payload, momento). **Sem resposta, esta task é pulada e reportada**; não se assume `dataLayer`.
**Tools**: nenhuma

**Done when**:
- [ ] Q16 respondida e evento implementado exatamente conforme a resposta — **ou** task marcada como "não executada: aguarda Q16", sem código
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### Fase 6 — Sections (conteúdo e configuração por página)

### T31: `sections/FormLeadFields.vue`

**What**: Corpo do formulário compartilhado pelas 3 páginas: `<form novalidate>` com os campos, chips, checkbox, CTA e `FormSubmitStatus`, ligado a `useLeadForm(config)`.
**Where**: `app/components/sections/FormLeadFields.vue`
**Depends on**: T19, T20, T21, T22, T23, T29
**Reuses**: `FormField`, `FormChoiceGroup`, `FormCheckbox`, `FormSubmitButton`, `FormSubmitStatus`; dados de `app/data/forms.ts` (T11)
**Requirement**: FORM-01–FORM-08
**Escopo**: Compartilhado. **Refinamento de design**: evita repetir o markup dos campos nos 3 wrappers (ver seção final)
**Backend/Aberto**: Q12 (padrão da máscara do telefone: só aplica `mask` quando informado; **não** fixa padrão); Q11; Q7
**Tools**: nenhuma

**Done when**:
- [x] Campos renderizados por `v-for` sobre um array tipado (linha 1: Empresa/Nome; linha 2: Site/Telefone; E-mail; linha 4: Cidade/Estado)
- [x] "Mensagem" renderizado **somente** se a config da página o declara
- [x] `pnpm build` passa

**Tests**: none
**Gate**: Full

---

### T32: `sections/FormTestarGratis.vue`

**What**: Config e composição da página Testar grátis (Hero + Split + TrustBar).
**Where**: `app/components/sections/FormTestarGratis.vue`
**Depends on**: T13, T14, T15, T16, T17, T31
**Requirement**: FORM-01, FORM-02
**Escopo**: **Específico**: textos do manifesto §1, benefícios calendar/settings/headphones, card rocket (asset único), badge dentro da lista, **sem** Mensagem, CTA "Começar teste grátis" (15px semibold)
**Backend/Aberto**: `tipoMail`/`formSite` **omitidos** (Q4/Q5); Q25; Q12 (máscara do telefone só depois de T7)
**Tools**: MCP `figma` (frame `3220:7055`)

**Done when**:
- [x] Textos verbatim do manifesto, incluindo os trechos de destaque ("30 dias", "SUBSEE")
- [x] Nenhum campo "Mensagem"; nenhum `tipoMail`/`formSite` preenchido
- [x] `pnpm build` passa

**Tests**: none
**Gate**: Full

---

### T33: `sections/FormAgendarDemo.vue`

**What**: Config e composição da página Agendar Demonstração.
**Where**: `app/components/sections/FormAgendarDemo.vue`
**Depends on**: T32
**Requirement**: FORM-09, FORM-10, FORM-11
**Escopo**: **Específico**: manifesto §2 (H1 com espaço inicial literal, descrição em 2 parágrafos), benefícios monitor/settings/user, ícone message-circle + círculo CSS, "Vamos conversar?", badge dentro da lista, "Mensagem" com o placeholder do melhor dia/horário, CTA 20px regular; descrição repetida de "Demonstração direcionada" reproduzida (Q21)
**Backend/Aberto**: `tipoMail`/`formSite` omitidos (Q4/Q5); **obrigatoriedade da Mensagem: Q10 — não definida**; Q21
**Tools**: MCP `figma` (frame `3220:8095`)

**Done when**:
- [x] Textos verbatim; textarea presente; `message.required` **não** preenchido (indefinido) até T7/Q10
- [x] `pnpm build` passa

**Tests**: none
**Gate**: Full

---

### T34: `sections/FormInscrevaSe.vue`

**What**: Config e composição da página Inscreva-se.
**Where**: `app/components/sections/FormInscrevaSe.vue`
**Depends on**: T33
**Requirement**: FORM-13, FORM-14, FORM-15
**Escopo**: **Específico**: manifesto §3, benefícios monitor/settings/user, message-circle + círculo CSS, "Garanta sua vaga!", **badge fora da lista** (gap 10px), "Mensagem" **opcional** (D10) com placeholder "(opcional)", CTA "Quero me inscrever no evento" 20px regular
**Backend/Aberto**: `tipoMail`/`formSite` omitidos (Q4/Q5); identificação do Inscreva-se (Q26); evento/Zoom (Q19) — **nenhum campo de evento inventado**
**Tools**: MCP `figma` (frame `3220:8461`)

**Done when**:
- [ ] Textos verbatim, incluindo a divergência de cor do título documentada (resultado visual igual às outras páginas)
- [ ] Mensagem opcional (não bloqueia envio vazio); nenhum campo/identificador de evento
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Full

---

### Fase 7 — Páginas e links

### T35: `app/pages/testar-gratis.vue`

**What**: Página fina: `useSeoMeta` + `<main>` com `FormTestarGratis`.
**Where**: `app/pages/testar-gratis.vue`
**Depends on**: T32
**Reuses**: `app/pages/eventos.vue` (padrão)
**Requirement**: FORM-01, FORM-02, FORM-17
**Escopo**: Específico da página
**Backend/Aberto**: copy de SEO **não decidida na spec**: propor título/descrição derivados literalmente do H1 e do lead do Figma e **submeter à revisão do usuário** antes de fechar a task
**Tools**: nenhuma

**Done when**:
- [ ] `/testar-gratis` responde 200 (fim do 404 dos ~35 CTAs); exatamente 1 `<h1>`
- [ ] `useSeoMeta` (title, description, og) aprovado pelo usuário
- [ ] Sem Header/Footer próprios (globais em `app.vue`); `pnpm build` passa

**Tests**: none
**Gate**: Full

---

### T36: `app/pages/agendar-demonstracao.vue`

**What**: Página fina para Agendar Demonstração.
**Where**: `app/pages/agendar-demonstracao.vue`
**Depends on**: T33
**Requirement**: FORM-09, FORM-12, FORM-17
**Escopo**: Específico da página
**Backend/Aberto**: copy de SEO (mesmo procedimento de T35)
**Tools**: nenhuma

**Done when**:
- [ ] `/agendar-demonstracao` responde 200; os CTAs "Agendar Demonstração" de `SiteUrbanoListings.vue` e `SiteRuralListings.vue` passam a resolver, pois esses arquivos foram alterados para apontar o destino do CTA para `/agendar-demonstracao`
- [ ] Exatamente 1 `<h1>`; SEO aprovado; `pnpm build` passa

**Tests**: none
**Gate**: Full

---

### T37: `app/pages/inscreva-se.vue`

**What**: Página fina para Inscreva-se.
**Where**: `app/pages/inscreva-se.vue`
**Depends on**: T34
**Requirement**: FORM-13, FORM-16, FORM-17
**Escopo**: Específico da página
**Backend/Aberto**: copy de SEO (mesmo procedimento de T35); Q26/Q19
**Tools**: nenhuma

**Done when**:
- [ ] `/inscreva-se` responde 200; exatamente 1 `<h1>`; SEO aprovado; `pnpm build` passa

**Tests**: none
**Gate**: Full

---

### T38: Apontar CTA de `EventosHero.vue` para `/inscreva-se`

**What**: Trocar o `href="#"` do CTA "Inscreva-se!!!" do Hero de `/eventos` por `/inscreva-se` (D6).
**Where**: `app/components/sections/EventosHero.vue`
**Depends on**: T37
**Requirement**: FORM-16
**Escopo**: Específico de `/inscreva-se`
**Tools**: nenhuma

**Done when**:
- [x] Apenas o destino do CTA muda; nenhuma outra alteração no arquivo; o link navega para `/inscreva-se`
- [x] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T39: Apontar CTA de `EventosSignup.vue` para `/inscreva-se`

**What**: Idem T38 para o CTA da seção Signup.
**Where**: `app/components/sections/EventosSignup.vue`
**Depends on**: T38
**Requirement**: FORM-16
**Escopo**: Específico de `/inscreva-se`
**Tools**: nenhuma

**Done when**:
- [x] Apenas o destino do CTA muda; navega para `/inscreva-se`; `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### Fase 8 — Integração real (bloqueada pela Fase 1)

> **Não iniciar** sem as respostas indicadas. Sem elas, a UI está completa (Fases 2–7), mas o envio real permanece desligado.

### T40: Aplicar valores confirmados às configs das 3 páginas

**What**: Preencher `tipoMail`, `formSite`, o mapeamento de `produto`, a regra de `message` (Testar grátis) e a identificação do Inscreva-se **exatamente conforme as respostas** de T1, T2, T5, T6.
**Where**: `app/components/sections/FormTestarGratis.vue`, `FormAgendarDemo.vue`, `FormInscrevaSe.vue`, `app/composables/useLeadForm.ts` (mapeamento) — **task dividida em execução por arquivo se o validador de granularidade exigir**
**Depends on**: T1, T2, T5, T6, T26, T34
**Requirement**: FORM-05, FORM-09, FORM-13, FORM-15
**Escopo**: Específico por página (valores) + compartilhado (mapeamento de `produto`)
**Backend/Aberto**: Q4, Q5, Q7, Q25, Q26, Q19 — **BLOQUEADA** até todas respondidas; se alguma faltar, parar e perguntar
**Tools**: nenhuma

**Done when**:
- [ ] Cada valor rastreável a uma resposta registrada em `spec.md`; nenhum valor sem fonte
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T41: Configurar reCAPTCHA (key/action) e endpoint

**What**: Definir `recaptchaSiteKey` e `action` conforme T3; confirmar `formsEndpoint` conforme T4.
**Where**: `nuxt.config.ts` (`runtimeConfig.public`) e o ponto de chamada de `getToken()`
**Depends on**: T3, T4, T28, T29
**Requirement**: FORM-05, FORM-07
**Escopo**: Compartilhado
**Backend/Aberto**: Q13, Q6 — **BLOQUEADA** até T3 e T4
**Tools**: nenhuma

**Done when**:
- [ ] Site key e action vêm da resposta registrada; nenhum valor de exemplo/teste do Google embutido sem confirmação
- [ ] `pnpm build` passa

**Tests**: none
**Gate**: Quick

---

### T42: Envio de teste — `/testar-gratis`

**What**: Enviar um formulário válido em ambiente de homologação e comparar o payload recebido com o esperado.
**Where**: n/a (verificação em `pnpm dev`)
**Depends on**: T40, T41, T35
**Requirement**: FORM-05, FORM-06, FORM-07, FORM-08
**Escopo**: Específico de Testar grátis
**Backend/Aberto**: Q25, Q6, Q13 — bloqueada até respondidas; requer ambiente de homologação indicado pelo usuário (**não enviar lead real sem autorização**)
**Tools**: DevTools/Network

**Done when**:
- [ ] Resposta aceita; sucesso inline só após o critério de T29; payload sem `message` conforme T5; `traffic_source` e `token` presentes

**Tests**: none
**Gate**: Full — evidência anexada

---

### T43: Envio de teste — `/agendar-demonstracao`

**What**: Idem T42 para Agendar Demonstração (com Mensagem).
**Where**: n/a
**Depends on**: T42, T36
**Requirement**: FORM-09, FORM-10, FORM-11
**Escopo**: Específico de Agendar
**Backend/Aberto**: Q10, Q4/Q5 — mesmas condições de T42
**Tools**: DevTools/Network

**Done when**:
- [ ] Payload inclui `message`; regra de obrigatoriedade conforme resposta de Q10; sucesso/falha como em T29

**Tests**: none
**Gate**: Full

---

### T44: Envio de teste — `/inscreva-se`

**What**: Idem T42 para Inscreva-se (Mensagem opcional; identificação conforme T6).
**Where**: n/a
**Depends on**: T43, T37
**Requirement**: FORM-13, FORM-14, FORM-15
**Escopo**: Específico de Inscreva-se
**Backend/Aberto**: Q26, Q19 — mesmas condições de T42
**Tools**: DevTools/Network

**Done when**:
- [ ] Envio com Mensagem vazia aceito; identificação do Inscreva-se conforme T6; sem campo de evento inventado

**Tests**: none
**Gate**: Full

---

### Fase 9 — QA e fechamento

### T45: Responsividade nos 7 breakpoints (3 páginas)

**What**: Verificar `/testar-gratis`, `/agendar-demonstracao`, `/inscreva-se` em 1920/1440/1280/1024/768/576/375px.
**Where**: n/a
**Depends on**: T39
**Requirement**: FORM-18
**Escopo**: Compartilhado (as 3 páginas)
**Backend/Aberto**: Q20 (responsivo derivado do design system — sinalizar ao usuário, não é fidelidade ao Figma)
**Tools**: Playwright local (script, não dependência do projeto)

**Done when**:
- [ ] Sem overflow horizontal (`scrollWidth`) e sem erros de console/404 em nenhum breakpoint, incluindo scroll completo
- [ ] Formulário utilizável em 375px (campos, chips e CTA sem corte)

**Tests**: none
**Gate**: Build

---

### T46: Fidelidade visual — Testar grátis

**What**: Comparar cada seção (Hero/Top, Form, Credibility) com `get_screenshot` do frame `3220:7055` em 1920px.
**Where**: n/a
**Depends on**: T45
**Requirement**: FORM-01, FORM-02
**Escopo**: Específico de Testar grátis
**Tools**: MCP `figma` (`get_screenshot`), Playwright

**Done when**:
- [ ] Desvios encontrados listados e corrigidos; ausência do campo Mensagem confirmada; CTA 15px semibold

**Tests**: none
**Gate**: Full

---

### T47: Fidelidade visual — Agendar Demonstração

**What**: Idem para o frame `3220:8095`.
**Where**: n/a
**Depends on**: T46
**Requirement**: FORM-09, FORM-10
**Escopo**: Específico de Agendar
**Tools**: MCP `figma`, Playwright

**Done when**:
- [ ] Desvios corrigidos; ícone message-circle + círculo CSS; badge na lista; CTA 20px regular; descrição repetida reproduzida (Q21)

**Tests**: none
**Gate**: Full

---

### T48: Fidelidade visual — Inscreva-se

**What**: Idem para o frame `3220:8461`.
**Where**: n/a
**Depends on**: T47
**Requirement**: FORM-13, FORM-14
**Escopo**: Específico de Inscreva-se
**Tools**: MCP `figma`, Playwright

**Done when**:
- [ ] Desvios corrigidos; badge **fora** da lista (gap 10px); Mensagem com "(opcional)"

**Tests**: none
**Gate**: Full

---

### T49: Acessibilidade, SEO e hierarquia de headings

**What**: Verificar teclado, foco visível, labels associadas, `aria-describedby`/`role="alert"`, exatamente 1 `<h1>` por página, meta tags por página e resolução dos links legais.
**Where**: n/a
**Depends on**: T48
**Requirement**: FORM-17, FORM-19, FORM-20
**Escopo**: Compartilhado (3 páginas)
**Backend/Aberto**: Q27 — se `/lgpd/...` responder 404, **reportar ao usuário**, não criar as páginas por conta própria
**Tools**: Playwright/curl

**Done when**:
- [ ] Fluxo completo só por teclado em cada página; erros anunciáveis
- [ ] `title`, `description` e Open Graph presentes e distintos por página; 1 `<h1>` cada
- [ ] Resultado dos links dos Termos/Privacidade reportado

**Tests**: none
**Gate**: Full

---

### T50: Verificação dos estados de envio (idle/submitting/success/failure)

**What**: Executar a matriz manual de cenários em cada página: validação × envio, falha de rede, HTTP de erro, resposta com corpo de erro, token reCAPTCHA indisponível, duplo clique durante `submitting`, reenvio após falha.
**Where**: n/a
**Depends on**: T44
**Requirement**: FORM-05, FORM-06, FORM-07
**Escopo**: Compartilhado (as 3 páginas)
**Backend/Aberto**: Q14/Q15 — verifica comportamento (D13/D14), **não** o visual final
**Tools**: DevTools (throttling/bloqueio de requisição)

**Done when**:
- [ ] Em nenhum cenário de falha o sucesso é exibido; dados preservados; botão reabilitado
- [ ] Segundo clique durante `submitting` não gera segundo POST
- [ ] Resultado por cenário registrado nesta task

**Tests**: none
**Gate**: Full

---

### T51: `pnpm build`

**What**: Build de produção completo.
**Where**: n/a
**Depends on**: T50
**Requirement**: FORM-20
**Escopo**: Compartilhado
**Tools**: `pnpm build` (Node 22)

**Done when**:
- [ ] `pnpm build` conclui sem erros, com `/testar-gratis`, `/agendar-demonstracao` e `/inscreva-se` no output; nenhuma requisição ao reCAPTCHA no HTML pré-renderizado

**Tests**: none
**Gate**: Build

---

### T52: Validação final e fechamento

**What**: Auditoria final: rastreabilidade FORM-01–FORM-20, Open Questions restantes, `git status`, ausência de dependências extras.
**Where**: `.specs/features/formularios/spec.md` (Requirement Traceability e Success Criteria)
**Depends on**: T51
**Requirement**: FORM-01–FORM-20
**Escopo**: Compartilhado
**Tools**: `git status`/`git diff` (leitura)

**Done when**:
- [ ] Traceability atualizada (`Pending` → `Verified` só onde verificado; itens dependentes de Open Question sem resposta ficam `Blocked` com a Q citada)
- [ ] `package.json` só diferiu por `maska` (T18); `PlanoEPrecoPricing.vue` e `plano-e-preco/tasks.md` continuam intocados
- [ ] Todas as Open Questions ainda abertas listadas ao usuário com seu impacto
- [ ] Nenhum commit/push/merge feito sem pedido explícito

**Tests**: none
**Gate**: Build

---

## Phase Execution Map

```
Fase 1 (paralela, bloqueia só a Fase 8):  T1 T2 T3 T4 T5 T6 T7
Fase 2:  T8 → T9 → T10 → T11 → T12
Fase 3:  T13 → T14 → T15 → T16 → T17
Fase 4:  T18 → T19 → T20 → T21 → T22 → T23
Fase 5:  T24 → T25 → T26 → T27 → T28 → T29 → T30
Fase 6:  T31 → T32 → T33 → T34
Fase 7:  T35 → T36 → T37 → T38 → T39
Fase 8:  T40 → T41 → T42 → T43 → T44        (exige T1–T6)
Fase 9:  T45 → T46 → T47 → T48 → T49 → T50 → T51 → T52
```

Execução sequencial dentro de cada fase; as Fases 2–7 podem ser executadas por completo sem nenhuma resposta do backend.

---

## Task Granularity Check

| Task | Scope | Status |
| --- | --- | --- |
| T1–T7 | 1 pedido de confirmação cada (T7 agrupa questões de baixo risco por serem de design/conteúdo) | ✅ Granular (T7 é o mais largo; pode ser dividido no Execute) |
| T8 | 1 verificação | ✅ |
| T9 | 1 lote coeso de ativos (mesmo formato de `T2` das features anteriores) | ✅ |
| T10, T11, T12 | 1 arquivo cada | ✅ |
| T13–T17 | 1 componente layout cada | ✅ |
| T18 | 1 dependência | ✅ |
| T19–T23 | 1 componente UI cada | ✅ |
| T24–T30 | 1 preocupação cada (T24–T27, T29, T30 no mesmo arquivo `useLeadForm.ts` em sequência; T28 em arquivo próprio) | ✅ |
| T31–T34 | 1 componente section cada | ✅ |
| T35–T37 | 1 página cada | ✅ |
| T38, T39 | 1 arquivo, 1 troca de destino cada | ✅ |
| T40 | Vários arquivos de config — **exceção**: mesma natureza (preencher valores confirmados); dividir por página no Execute se o validador exigir | ⚠️ Largo, justificado |
| T41 | 1 configuração | ✅ |
| T42–T44 | 1 página cada | ✅ |
| T45–T52 | Verificações, 0 arquivos novos | ✅ |

## Diagram-Definition Cross-Check

Fases 2–9 são cadeias lineares (`Tn → Tn+1` dentro da fase); cada `Depends on` acima cita o antecessor imediato **mais** dependências cruzadas explícitas. Cruzadas: T13→T9; T19→T18,T11; T24→T10,T11; T28→T12; T31→T19–T23,T29; T32→T13–T17,T31; T40→T1,T2,T5,T6,T26,T34; T41→T3,T4,T28,T29; T42→T40,T41,T35; T43→T42,T36; T44→T43,T37. Nenhuma task depende de outra em fase posterior; a Fase 1 não depende de nada e só é consumida pela Fase 8.

## Test Co-location Validation

| Task | Camada | Matriz exige | Task diz | Status |
| --- | --- | --- | --- | --- |
| T10–T12 | types/data/config | none | none | ✅ |
| T9 | assets | none | none | ✅ |
| T13–T17 | layout | none | none | ✅ |
| T19–T23 | ui | none | none | ✅ |
| T24–T30 | composables | none (matriz manual) | none + cenários manuais no Done when | ✅ |
| T31–T34 | sections | none | none | ✅ |
| T35–T39 | pages/links | none | none | ✅ |
| T40–T44 | integração | none (manual, homologação) | none | ✅ |

Todos os "none" são respaldados por AD-002.

---

## Refinamentos de design que requerem aprovação (não estavam em `design.md`)

Estas tasks adicionam peças que a Etapa 1 aprovada não previa. São propostas; se preferir o design original literal, elas são removidas/fundidas:

1. **`FormLeadFields` (T31, `sections/`)** — sem ele, o markup dos ~10 campos seria copiado nos 3 wrappers (o design diz que os wrappers só passam config). Está de acordo com o princípio "sem duplicação" do `CLAUDE.md`.
2. **`FormSubmitStatus` (T23, `ui/`)** — o design cita estados sucesso/falha mas não o componente que os exibe.
3. **`useRecaptchaV3` (T28)** — o design põe o reCAPTCHA dentro de `useLeadForm`; extrair mantém `useLeadForm` legível e o reCAPTCHA isolado (carregamento sob demanda).
4. **Copy de SEO das 3 páginas (T35–T37)** — a spec exige `useSeoMeta` próprio mas não define os textos; a task propõe derivar do Figma e depende de revisão do usuário.
5. **Fase 1 como trilha paralela de confirmações** — organiza as Open Questions como entregáveis rastreáveis, sem convertê-las em decisão.

## Resumo

- **52 tasks** em 9 fases: Confirmações 7 · Base 5 · Layout 5 · UI 6 · Lógica 7 · Sections 4 · Páginas/links 5 · Integração 5 · QA 8.
- **Instalação de dependência:** somente `maska` (T18), com aprovação explícita.
- **Bloqueios de backend:** Fase 8 (T40–T44) depende de T1–T6. A UI das Fases 2–7 não depende de nenhuma.
