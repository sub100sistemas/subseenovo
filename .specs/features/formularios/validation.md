# Validation — `formularios`

**Verificação:** validação final em 2026-10-04, ao fim das etapas de implementação (máscara e e-mail, reCAPTCHA sob demanda, payload com `tipo_mail`/`formSite`/`produto`, reconhecimento de sucesso, páginas de obrigado, redirecionamento e estado de loading), sobre o código atual da `master` com alterações locais ainda não commitadas.

**SPEC:** [spec.md](spec.md) · **Design:** [design.md](design.md) · **Tasks:** [tasks.md](tasks.md) · **Manifesto Figma:** `FIGMA_CONTENT_MANIFEST_FORMULARIOS.md`

**Método e fontes de evidência**

- **Playwright (Chromium)** contra o servidor de desenvolvimento (porta 3000) nas etapas anteriores e contra o build servido com `node .output/server/index.mjs` (porta 3100, já encerrado) na etapa de loading. Backend simulado por interceptação de rede (`page.route`), com `grecaptcha` falso nesses testes.
- **Teste real contra o backend local** (Apache/PHP do WampServer, `email.localhost`) em `/testar-gratis/`, com token reCAPTCHA v3 real gerado em `subseenovo.localhost`.
- **Figma:** frame `Obrigado` (node `3847:3224`), via metadados, captura e contexto de design.
- **Inspeção de código** onde indicado. Onde um item não tem teste executado, a tabela diz isso.
- Nenhuma chave, token real ou segredo está registrado neste documento.

## Veredito: **PASS com ressalvas**

As três páginas de formulário e as três páginas `/obrigado/` estão implementadas e se comportam como especificado nos testes executados: validação, payload, reconhecimento de sucesso, loading, redirecionamento, tratamento de erro, SEO/`noindex` e build. As ressalvas são limitações reais de cobertura, não defeitos conhecidos: a falha real de `navigateTo` não foi simulada, o envio real só foi feito em `/testar-gratis/`, o endpoint testado é o local, e o conjunto de alterações ainda não foi commitado.

---

## 1. Escopo

| Página | Rota | Componente |
| --- | --- | --- |
| Testar grátis | `/testar-gratis/` | `FormTestarGratis` |
| Agendar demonstração | `/agendar-demonstracao/` | `FormAgendarDemo` |
| Inscreva-se | `/inscreva-se/` | `FormInscrevaSe` |
| Obrigado (3 rotas) | `/testar-gratis/obrigado/`, `/agendar-demonstracao/obrigado/`, `/inscreva-se/obrigado/` | `FormObrigado` sobre `ThankYouHero` |

Os 3 formulários compartilham `FormLeadFields` e o composable `useLeadForm`. As 3 páginas de obrigado compartilham um único shell (`layout/ThankYouHero.vue`) e um único wrapper (`sections/FormObrigado.vue`).

---

## 2. Campos e validações

Mensagens e regras estão em `app/data/forms.ts` e em `collectErrors()` de `app/composables/useLeadForm.ts`. As mensagens continuam **provisórias** (Q14).

| Critério | Regra implementada | Evidência | Situação |
| --- | --- | --- | --- |
| Campos obrigatórios | Empresa, Nome completo, Telefone, E-mail, Cidade e Estado → "Campo obrigatório."; Site é opcional | Inspeção de `collectErrors()`; validação exercitada nas 3 páginas na etapa Q12/T18 | Atendido |
| E-mail | Regex `^[^\s@]+@[^\s@]+\.[^\s@]+$` → "Informe um e-mail válido." | Testado nas 3 páginas na etapa Q12/T18 | Atendido |
| Telefone | Máscara dupla `(##) ####-####` / `(##) #####-####` (`maska`); campo sem dígitos é tratado como vazio | Testado nas 3 páginas na etapa Q12/T18 | Atendido |
| UF | `select` com 27 siglas; valor enviado = **sigla** (Q11) | Inspeção de `app/data/forms.ts`; `estado` presente no payload interceptado | Atendido |
| Área de atuação | Seleção única, obrigatória; opções **Urbana** e **Rural** (a opção "Temporada" foi removida) | Inspeção de `formAreaOptions`; seleção "Urbana" usada nos testes de envio | Atendido |
| Suporte e Treinamento | Múltipla escolha, ao menos 1; nenhum chip pré-selecionado (Q14) | Inspeção de `collectErrors()`; "Ligação" marcada nos testes de envio | Atendido |
| Checkbox de termos | Obrigatório; sem aceite → "É necessário aceitar os termos para continuar." | Mensagem observada com o checkbox desmarcado (ver §6, teste preliminar); links para `/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/` | Atendido |
| Mensagem opcional | Agendar demonstração (Q10) e Inscreva-se: campo existe e **não** é obrigatório | Inspeção das `config.message` (`required: false` em Inscreva-se; Agendar sem `required`) | Atendido |
| `message` no Testar grátis | O campo **não existe** (a config não define `message`), conforme Figma/SPEC (D10); o backend trata a ausência | Inspeção de `FormTestarGratis.vue`; POST de `/testar-gratis/` sem `message` aceito pelo PHP (ver §4) | Atendido |

---

## 3. Payload

Valores confirmados, definidos nas `config` de cada componente e enviados em `tipo_mail`, `formSite`, `produto` e (como action do reCAPTCHA) `recaptchaAction`. O payload foi conferido com o POST interceptado nas 3 páginas.

| Página | `tipo_mail` | `formSite` | `produto` | `recaptchaAction` |
| --- | --- | --- | --- | --- |
| Testar grátis | `Solicite um teste grátis por 30 dias` | `SUB100 Imobiliárias` | `Quero um CRM Imobiliário` | `subsee_teste` |
| Demonstração | `Solicite uma demonstração` | `SUB100 Imobiliárias` | `Quero um Site Imobiliário` | `subsee_demo` |
| Eventos | `Eventos` | `SUB100 Imobiliárias` | `Quero um CRM Imobiliário` | `subsee_eventos` |

- O travessão em `produto` é o **U+2013 (–)**, como informado.
- `subsee_teste` e `subsee_demo` vêm do legado; `subsee_eventos` é **convenção nova**, sem equivalente no legado.
- Os demais campos do payload: `empresa`, `contato`, `site`, `phone`, `email`, `cidade`, `estado`, `respostaLigacao`, `respostaEmail`, `respostaWhatsapp`, `aceito`, `traffic_source`, `token` e, onde há o campo, `message`.
- O envio do reCAPTCHA v3 é sob demanda: o script carrega no primeiro foco do formulário ou no envio, sem duplicar o script (`loading` em escopo de módulo em `useRecaptchaV3.ts`).

---

## 4. Backend

O contrato do backend (`formularios.php`) está **fora deste repositório**; as informações abaixo vêm de testes contra a instância local.

### Teste real em `/testar-gratis/`

| Item | Resultado |
| --- | --- |
| HTTP | 200 |
| `Content-Type` | `application/json` |
| Corpo | `{"success":true,"message":"Formulário enviado com sucesso!"}` |
| `Notice`/avisos do PHP | Nenhum |
| E-mail | **Enviado de fato** (destinatário de teste) |
| `message` ausente | Tratado corretamente pelo PHP (normalizado para vazio antes do uso) |
| reCAPTCHA | Token v3 real, aprovado pelo Google com score alto, `hostname` e `action` corretos (domínio autorizado `subseenovo.localhost`) |

### Demonstração e Eventos

Tiveram validação de **payload e de contrato do backend com token inválido**. **Não houve envio de e-mail real** nessas duas páginas; o caminho completo de sucesso (com e-mail) só foi exercitado em Testar grátis.

---

## 5. Resposta e reconhecimento de sucesso

`isSuccessResponse()` ([formResponse.ts](../../../app/utils/formResponse.ts)) reconhece **somente** `response.success === true`.

Testado nas 3 páginas, com o backend simulado:

| Resposta | Resultado esperado | Resultado |
| --- | --- | --- |
| `{"success":true,...}` | Sucesso | Sucesso (na versão atual: redirecionamento para `/obrigado/`) |
| `{"success":false,...}` | Falha | Falha |
| JSON sem `success` | Falha | Falha |
| HTTP 500 | Falha | Falha |
| Avisos de PHP antes do JSON | Falha | Falha |

Nos casos de falha: formulário visível, dados preenchidos preservados e alerta "Não foi possível enviar o formulário. Tente novamente.".

O último caso é **conservador**: um backend que emita avisos de PHP antes do JSON é tratado como falha mesmo que o e-mail tenha sido enviado. É o comportamento esperado da regra atual e já existia antes da etapa de obrigado.

---

## 6. Estado de loading

Testado nas 3 páginas, com backend simulado com atraso de 1,5 s e 3 respostas (sucesso, `success:false`, HTTP 500), contra o build servido (viewport 1440×900).

| Verificação | Resultado |
| --- | --- |
| Texto durante o envio | `Enviando...` |
| Spinner | Presente; **18px** no CSS (`getBoundingClientRect` dá ≈25px porque o ícone está girando); a seta some |
| `aria-busy` | `"true"` durante o envio |
| Botão | `disabled` |
| Campos | Campos de texto, selects e textarea (`FormField`) desabilitados |
| Duplo clique | Um clique mais dois forçados → exatamente **1 POST** em todos os casos |
| Layout | Botão estável em 560×52, sem salto |
| Sucesso | Mantém `Enviando...` + spinner até o redirecionamento |
| Erro | Volta o **texto original** de cada botão ("Começar teste grátis", "Quero agendar uma demonstração", "Quero me inscrever no evento"), a **seta**, o botão **habilitado**, sem spinner |
| Dados | Permanecem preenchidos após erro (`empresa` conferida) |
| Mensagem de erro | Comportamento anterior mantido |

**Observação:** chips (Suporte e Treinamento e área) e o checkbox de termos **não** são desabilitados durante o envio. Isso já era o comportamento anterior (só os `FormField` eram desabilitados) e não foi alterado.

---

## 7. Páginas de obrigado

Fonte de design: Figma, frame `Obrigado` (node `3847:3224`, um único design para as 3 páginas). Ilustração exportada do Figma para `public/images/obrigado.svg` (paths intactos; removidos `preserveAspectRatio="none"`, `overflow` e `style`).

| Critério | Resultado | Situação |
| --- | --- | --- |
| HTTP | 200 nas 3 rotas | Atendido |
| Layout (desktop 1920px) | Ilustração em x=416 com 352×363; coluna de texto em x=861 com 643px (Figma: 644px); "Obrigado!" 40px e subtítulo 32px; botão 406×52, `rgb(0,211,155)` (`#00d39b`), `gap` 10px e sombra `0 6 10 rgba(93,95,239,.25)`; fundo `rgb(93,95,239)` | Atendido |
| Altura da faixa | Medida **459px** contra 460px do Figma; corrigida depois com `tablet-lg:min-h-[460px]`; **não remedida** | Atendido, com a medição final pendente |
| Título | `SUBSEE \| Obrigado` | Atendido |
| Descrição | `Seu cadastro foi realizado com sucesso.` | Atendido |
| `noindex` | `noindex, follow` no build com URL de produção (ver §10) | Atendido |
| Canonical | **Ausente** nas 3 páginas | Atendido |
| Sitemap | As 3 rotas **fora** do sitemap | Atendido |
| Botão "Voltar para a página principal" | `<CtaButton variant="success" to="/">`; o clique leva a `/` (testado em `/testar-gratis/obrigado/`; as 3 páginas usam o mesmo `FormObrigado`) | Atendido |
| Header/Footer | Reaproveitados do `app.vue`, sem layout próprio | Atendido |
| Acesso direto | As páginas abrem sem passar pelo formulário (decisão: sem bloqueio por `sessionStorage`) | Conforme decisão |

### Responsividade medida (página `/testar-gratis/obrigado/`)

| Largura | Resultado medido |
| --- | --- |
| 1920px | Seção 459px de altura (antes do `min-h`); medidas do Figma acima |
| 1440px | Mesmo desenho do desktop: ilustração em x=176, texto em x=621, sem scroll horizontal |
| 1280px | Linha com ilustração e texto, subtítulo em 2 linhas, sem scroll horizontal |
| 992px | Linha com ilustração e texto, sem scroll horizontal |
| 768px | Ilustração (220px) acima do texto, centralizada, fontes 28px/20px, sem scroll horizontal |
| 375px | Ilustração acima do texto, botão com 343px (largura total), sem scroll horizontal; captura conferida visualmente |

Não foi feita varredura das 12 larguras usada em outras features, nem teste a 320px, e as páginas `agendar-demonstracao/obrigado` e `inscreva-se/obrigado` não foram medidas isoladamente (o componente é o mesmo).

---

## 8. Redirecionamento

| Cenário | Resultado | Tipo de evidência |
| --- | --- | --- |
| `success:true` em `/testar-gratis/` | → `/testar-gratis/obrigado/` | Teste executado |
| `success:true` em `/agendar-demonstracao/` | → `/agendar-demonstracao/obrigado/` | Teste executado |
| `success:true` em `/inscreva-se/` | → `/inscreva-se/obrigado/` | Teste executado |
| Erro (`success:false`, sem `success`, HTTP 500, avisos de PHP) | Permanece no formulário | Teste executado |
| Dados após erro | Permanecem preenchidos | Teste executado |
| Flash de "Formulário enviado." antes do redirecionamento | **Não ocorreu** — amostragem do DOM a cada 40 ms durante a navegação, nas 3 páginas, após a implementação do loading | Teste executado |
| Falha real de `navigateTo` | **Não simulada.** A navegação está dentro do mesmo `try`; se `navigateTo` lançar erro, o `catch` muda o status para `failure`, restaura o botão e mostra a mensagem padrão | **Cobertura por inspeção de código/try-catch, não por teste executado** |
| Config sem `thankYouPath` | Mantém o sucesso inline (`status = 'success'`) | Inspeção de código |

Antes da etapa de loading havia um pequeno flash de "Formulário enviado." antes do redirecionamento (registrado e depois eliminado ao manter `status = 'submitting'` até a navegação).

---

## 9. Responsividade e visual dos formulários

O layout visual dos formulários **não foi alterado** nas etapas finais (só o botão de envio ganhou o estado de loading, com as mesmas dimensões 560×52). Os testes funcionais desta validação usaram viewport **1440×900**. As larguras do layout das páginas de obrigado estão em §7.

Este documento **não** reproduz medições de larguras dos formulários além dessas, para não citar números que não constam nas evidências desta etapa.

---

## 10. Build

| Item | Resultado |
| --- | --- |
| `pnpm build` (siteUrl local) | **Exit code 0** |
| `pnpm build` com `NUXT_PUBLIC_SITE_URL=https://subsee.com.br` | **Exit code 0**; módulo SEO: "Produção: 17 URLs no sitemap" |
| Build após a etapa de loading (siteUrl local) | **Exit code 0** |
| Páginas `/obrigado/` no build | Presentes: chunks `obrigado-*` (3) e `FormObrigado-*`; as 3 rotas respondem 200 no servidor do build (o deploy é SSR; não há `.html` estático gerado) |
| `noindex` (build de produção) | As 3 rotas `/obrigado/` com `<meta name="robots" content="noindex, follow">` e **sem canonical** |
| Demais páginas (build de produção) | `/testar-gratis/` e `/agendar-demonstracao/` `index, follow` com canonical; `/inscreva-se/` `noindex` (como antes) |
| Sitemap | 17 URLs, **nenhuma** com `obrigado`; contém `/testar-gratis/` e `/agendar-demonstracao/`, não contém `/inscreva-se/` |
| Build com siteUrl local | Sem sitemap e `noindex` em todas as páginas, por desenho do módulo `seo` |

### Warnings conhecidos (nenhum é erro)

1. `WARN [PLUGIN_TIMINGS] Plugin hooks ran for ~3–5s of this build (89–95%)` — Vite.
2. `WARN "…cache-driver.mjs" is imported by "virtual:#nitro-internal-virtual…"` — `@nuxt/nitro-server`, em `node_modules`.
3. `WARN "H3Error" and "H3Event" are imported from external module … but never used` — `@nuxt/nitro-server`, em `node_modules`.
4. `DeprecationWarning DEP0155` (padrão de barra final `"./"` no `exports` de um pacote) — Node/dependência.

Os warnings 2 a 4 vêm de dependências; o 1 vem do Vite. Nenhum envolve os arquivos desta feature.

---

## 11. Critérios de aceite da SPEC (resumo)

| Critério | Situação |
| --- | --- |
| Três páginas com H1 próprio, Header/Footer globais, sem "Mensagem" no Testar grátis | Atendido |
| Validação separada da falha de envio; sucesso **somente** com POST bem-sucedido (D14) | Atendido |
| Máscara via `maska` (D11, T18), sem `axios`/`vue-the-mask` | Atendido |
| reCAPTCHA v3 no payload; falha de token = falha de envio | Atendido |
| Payload com `tipo_mail`, `formSite`, `produto` | Atendido (valores em §3) |
| Meta por página (`useSeoMeta`) | Atendido |
| `pnpm build` sem erros | Atendido |
| Sucesso inline como comportamento-base (D13) / "obrigado" fora do escopo | **Superado**: o sucesso agora redireciona para páginas de obrigado dedicadas; o inline permanece só como fallback sem `thankYouPath` |

---

## 12. Divergências documentais (SPEC × estado atual)

Itens em que o [spec.md](spec.md) ficou desatualizado em relação à implementação aprovada:

- **Out of Scope** lista "Página/fluxo de obrigado" e **D13/Q15** definem sucesso inline; a implementação atual redireciona para `/obrigado/` (com o inline apenas como fallback).
- **D5/D15** citam o endpoint `https://forms.sub100.com.br/...` (produção); os testes desta validação usaram o endpoint **local** (ver ressalvas).
- **Q4, Q5, Q7, Q11, Q12, Q13, Q14 (parcial), Q25 e Q26** foram respondidas ou decididas nas etapas finais (valores em §3; backend local tratando `message` ausente), mas o `spec.md` ainda as lista como abertas.
- **Q27**: as rotas `/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/` existem hoje em `app/pages/lgpd/`; os links do checkbox apontam para elas. Não foi feito teste de clique nesta validação.
- O `spec.md` e o `tasks.md` **não foram atualizados** nesta etapa.

---

## 13. Ressalvas e limitações

1. **Falha de `navigateTo` não simulada.** Tentativa de forçar a falha bloqueando os chunks da página de obrigado não gerou erro (a navegação concluiu). A cobertura é por inspeção de código/try-catch.
2. **Envio real só em `/testar-gratis/`.** Demonstração e Eventos foram validadas com token inválido (payload/backend), sem e-mail real.
3. **Endpoint local.** Os testes usaram `formsEndpoint` apontando para `email.localhost`, que é uma alteração **local não commitada** em `nuxt.config.ts`. O endpoint de produção e o CORS do domínio real não foram testados (Q6).
4. **Aviso do console `requestStorageAccess: Permission denied`** do iframe do reCAPTCHA: sem relação com a implementação; não afeta o envio.
5. **Chips e checkbox de termos não são desabilitados** durante o loading (comportamento anterior preservado).
6. **Aviso de PHP antes do JSON** é tratado como falha, mesmo que o backend tenha processado o envio.
7. **Responsividade das páginas de obrigado** foi medida em 6 larguras (1920, 1440, 1280, 992, 768 e 375px), sem a varredura das 12 larguras e sem teste a 320px; a altura de 460px do Figma foi aplicada mas não remedida.
8. **Textos provisórios:** mensagens de validação e de falha seguem provisórias (Q14); o título/descrição de SEO das obrigado é o fornecido (`SUBSEE | Obrigado`).
9. **Pendências de backend/produto fora do escopo desta validação:** evento de conversão `obrigado`/GTM (Q16, não implementado), origem do cookie `__trf.src` (Q17), identificação do evento em Inscreva-se (Q19).
10. **Alterações não commitadas.** O conjunto de arquivos desta feature está no working tree (incluindo renomeações `pages/x.vue → x/index.vue` já em staging). `CLAUDE.md` e `nuxt.config.ts` têm alterações locais do usuário que **não** fazem parte desta feature e não devem entrar no commit.
11. **`pnpm-lock.yaml`** (commit `298ca88`) traz ruído de sufixos de peers do pnpm 10 contra o 12, sem mudança de versões (`maska@3.2.2`).
12. **E-mails de teste** foram enviados para o destinatário de teste durante o teste real em `/testar-gratis/`.

---

## 14. Arquivos da feature (estado atual)

- **Formulários:** `app/components/sections/FormTestarGratis.vue`, `FormAgendarDemo.vue`, `FormInscrevaSe.vue`, `FormLeadFields.vue`; `app/components/ui/FormSubmitButton.vue`, `FormField.vue`; `app/components/icons/IconSpinner.vue`.
- **Lógica:** `app/composables/useLeadForm.ts`, `useRecaptchaV3.ts`; `app/utils/formResponse.ts`; `app/types/forms.ts`; `app/data/forms.ts`.
- **Obrigado:** `app/components/layout/ThankYouHero.vue`, `app/components/sections/FormObrigado.vue`; `app/pages/{testar-gratis,agendar-demonstracao,inscreva-se}/obrigado.vue` e `…/index.vue`; `public/images/obrigado.svg`; `app/components/ui/CtaButton.vue` (variante `success`); `app/data/seo.ts` (`noindexPaths`).

---

## Conclusão

A feature **`formularios` está validada com ressalvas**. Os 3 formulários validam os campos, enviam o payload confirmado, reconhecem o sucesso apenas com `success === true`, mostram o loading com `Enviando...` e spinner, bloqueiam duplo clique e redirecionam para a respectiva página `/obrigado/` sem flash de sucesso. Em qualquer erro permanecem no formulário, com o texto original do botão, o botão habilitado e os dados preservados. As 3 páginas de obrigado seguem o Figma em desktop, são responsivas nas larguras medidas, ficam `noindex, follow`, sem canonical e fora do sitemap, e `pnpm build` termina com exit code 0 (local e com URL de produção).

As ressalvas de §13 não bloqueiam o fechamento da feature, mas devem ser lidas antes do deploy, em especial a **falha de `navigateTo` não simulada**, o **envio real feito só em Testar grátis** e o **endpoint local** usado nos testes.
