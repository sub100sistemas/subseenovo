# Validation — `crm-imobiliario-urbano`

**Verificação:** feita em 2026-10-02, em sessão posterior à implementação, e **substitui a validação de 2026-09-09**, que estava desatualizada (ver "Histórico"). Esta é a validação baseada no **runtime atual**: nenhum item da SPEC ou do `tasks.md` foi tratado como confirmado até ser reproduzido contra o código e o Figma.

- **Playwright (Chromium)** contra o servidor de desenvolvimento, que serve o código-fonte atual. Um `pnpm dev` do desenvolvedor estava ativo na porta 3000 e compartilha `.nuxt` e `.output` com o build; por isso não repeti `pnpm build` (ver "Build").
- **Figma:** metadados do frame `Page` (alturas das 11 seções) e capturas de Hero, Reports e Dashboard a 1920px, lado a lado com o site, e conferência com `FIGMA_CONTENT_MANIFEST_CRM_URBANO.md`.

## Veredito: **PASS com ressalvas**

A página está funcional, responsiva em 21 larguras (320 a 1920px), com SEO correto e fiel ao Figma na estrutura e no conteúdo. Os **18 critérios de aceite** e os **5 edge cases** da SPEC estão atendidos. Esta auditoria **não encontrou nenhum defeito de código ou de funcionalidade e nenhum código foi alterado**. As ressalvas são visuais de baixa prioridade e documentais.

---

## Resumo da evidência

| Verificação | Resultado |
| --- | --- |
| Rota `/modulos/crm-imobiliario-urbano/` | HTTP 200 nas 21 larguras |
| Larguras testadas (21) | 1920, 1440, 1280, 1024, 992, 768, 576, 414, 390, 375, 360, 320 (as 12 principais) mais 980, 1000, 1050, 1100, 1150, 1198, 1199, 1200 e 1250 |
| Seções | 11, na ordem do Figma: `crm-urbano-hero`, `-tecnologia`, `-portfolio`, `-funil`, `-leads`, `-relatorios`, `-portais`, `-dashboard`, `-depoimentos`, `-outros-modulos`, `-duvidas-frequentes` |
| Headings | **1 `<h1>`, 10 `<h2>` e 8 `<h3>`** (4 do Portfolio e 4 do Dashboard), constantes em todas as larguras; as perguntas do FAQ usam `<summary>` |
| Overflow horizontal | **Nenhum** (`scrollWidth === clientWidth`) nas 21 larguras, sem texto cortado |
| Console / HTTP | **console 0**, respostas ≥400: **0**, falhas de requisição: **0**, imagens quebradas: **0** |
| `srcset` | **Nenhum candidato `0w`** em nenhuma imagem, em nenhuma largura |
| FAQ | 6 itens `<details>`; abrir leva o item de 91px para 187px, troca "+" por "−", e fechar volta ao estado inicial |
| CTAs | 6 "Testar grátis por 30 dias" (Technology, Portfolio, Sales Funnel, Leads Chart, Reports e Portal Integrations) → `/testar-gratis/` |
| Navegação | Mega-menu (1440px), menu mobile (375px), CTA da Home (`HeroUrbano`), card em `/modulos/crm` e os 3 links de Outros módulos (`/modulos/crm/`, `/modulos/crm-imobiliario-rural/`, `/modulos/crm-imobiliario-temporada/`), todos com o H1 correto |
| Higiene do código | Sem `translate-*`, sem comentários nos `CrmUrbano*` |
| Imagens | 74 em `main`: nenhuma sem `alt`; as decorativas têm `alt=""` e `aria-hidden`; 53 sem `width`/`height` (ver "Ressalvas") |
| `validate_spec.py` | **0 erros e 0 avisos** |

---

## Critérios de aceite (18)

**Total: 18/18 atendidos**, com divergências de redação da SPEC (ver "Divergências documentais"). Os IDs `URB-01` a `URB-18` correspondem, nesta ordem, a esses critérios.

| Critério | Evidência | Situação |
| --- | --- | --- |
| P1 · URB-01 rota | HTTP 200 nas 21 larguras; [crm-imobiliario-urbano.vue](../../../app/pages/modulos/crm-imobiliario-urbano.vue) compõe as 11 seções na ordem do Figma | Atendido |
| P1 · URB-02 Hero | `CrmUrbanoHero.vue`: H1 único "Acelere seus negócios no mercado imobiliário urbano", descrição, 3 ícones de categoria, foto, 3 cards flutuantes, curvas, selo da calculadora e divisor ondulado | Atendido |
| P1 · URB-03 mega-menu | [HeaderBar.vue:31](../../../app/components/layout/HeaderBar.vue#L31); Playwright a 1440px (hover em "Módulos") e a 375px (menu mobile) levam à rota | Atendido |
| P2 · URB-04 Technology | `CrmUrbanoTechnology.vue`: H2, descrição, mockup e CTA → `/testar-gratis/` | Atendido |
| P2 · URB-05 Portfolio | `CrmUrbanoPortfolio.vue`: H2, mockup, 4 `<h3>` e CTA | Atendido |
| P2 · URB-06 Sales Funnel | `CrmUrbanoSalesFunnel.vue`: H2, 3 colunas Kanban e cards de lead em markup real; CTA | Atendido |
| P2 · URB-07 Leads Chart | `CrmUrbanoLeadsChart.vue`: H2, 5 canais, nó central e corretores; CTA | Atendido |
| P2 · URB-08 Reports | `CrmUrbanoReports.vue`: H2 e 4 stat cards (68%, 2h, 312, 94%); CTA | Atendido |
| P2 · URB-09 Portal Integrations | `CrmUrbanoPortalIntegrations.vue`: H2, mockup e 7 badges de portal (a SPEC diz 6; ver divergências); CTA | Atendido |
| P2 · URB-10 Dashboard | `CrmUrbanoDashboard.vue`: H2, 4 `<h3>` e mockup | Atendido |
| P3 · URB-11 Testimonials | `CrmUrbanoTestimonials.vue`: H2, logo SUBSEE on e 2 cards (Marcio Carmona/Carmona Imóveis, Edson Naka/Legado Urbano); cards de mesma altura quando lado a lado | Atendido |
| P3 · URB-12 Other Modules | `CrmUrbanoOtherModules.vue`: 3 cards com links reais; os três navegam e abrem com o H1 correto | Atendido |
| P3 · URB-13 FAQ | `CrmUrbanoFaq.vue`: 6 itens `<details>` com perguntas e respostas | Atendido |
| P3 · URB-14 estado do FAQ | Item aberto: 91px → 187px, "+" some e "−" aparece; fechar restaura | Atendido |
| P3 · URB-15 card em `/modulos/crm` | [CrmOtherModules.vue:14](../../../app/components/sections/CrmOtherModules.vue#L14); Playwright: o card leva à rota | Atendido |
| Edge · URB-16 abaixo de 576px | Sem overflow, 11 seções, nenhum texto cortado | Atendido |
| Edge · URB-17 colisão de nomes | Os 11 componentes têm o prefixo `CrmUrbano`; página renderiza as 11 seções | Atendido |
| Edge · URB-18 H1 único | 1 `<h1>` constante nas 21 larguras | Atendido |

CTA da Home (`HeroUrbano`, [HeroUrbano.vue:61](../../../app/components/sections/HeroUrbano.vue#L61)): leva à rota; verificado.

---

## Edge cases (5)

**Total: 5/5 atendidos.**

| Edge case | Evidência | Situação |
| --- | --- | --- |
| Abaixo de 576px, 11 seções sem overflow, cortes ou sobreposição | `scrollWidth === clientWidth` em 576, 414, 390, 375, 360 e 320px; 11 seções; nenhum texto cortado | Atendido |
| Mesma composição do desktop adaptada onde o Figma não define tablet/mobile | A mesma árvore responsiva em todas as larguras (headings constantes: 1/10/8); sem overflow de 320 a 1920px | Atendido |
| Rota irmã com href real em Outros módulos | Os 3 links apontam para rotas que hoje existem e respondem 200 (a SPEC previa um 404 temporário) | Atendido |
| Prefixo `CrmUrbano` contra colisão de nomes | Os 11 componentes têm o prefixo; a página renderiza sem sobrescrita | Atendido |
| Exatamente um `<h1>` em qualquer breakpoint | 1 `<h1>` e 10 `<h2>` constantes; nenhum conteúdo duplicado entre variantes responsivas | Atendido |

---

## Itens da validação antiga que já foram resolvidos

| Item | Situação atual |
| --- | --- |
| **SVG duplicado do logo do Testimonials** (Fix 3: `public/icons/crm-urbano-logo-subsee-on.svg` byte-idêntico a `logo-subsee-on-depoimentos.svg`) | **Resolvido.** O arquivo duplicado não existe mais em `public/icons/`; `logo-subsee-on-depoimentos.svg` permanece |
| **`scratch-rural.vue`** (rota pública de rascunho, citada como observação fora de escopo) | **Resolvido.** O arquivo não existe mais em `app/pages/`, e a build não o expõe como rota |
| **Blur do Dashboard** (`crm-urbano-dashboard-ellipse-blur.svg`, que "vazava" 16 a 43px além da borda esquerda, sem ancestral de clipe) | **Sem overflow.** `scrollWidth === clientWidth` em todas as 21 larguras e nenhum elemento sem clipe passa da borda direita. O SVG é decorativo (`aria-hidden`, `pointer-events-none`) e aparece só a partir de `tablet-lg` |

---

## Conformidade com o Figma

Comparado a 1920px. Alturas das 11 seções (site / Figma): Hero 513 / 528, Technology 1101 / 1095, Portfolio 1105 / 1111, Sales Funnel 704 / 701, Leads Chart 987 / 1000, Reports 688 / 656, Portal Integrations 674 / 676, Dashboard 770 / 729, Testimonials 766 / 770, Other Modules 659 / 566 e FAQ 1030 / 1720.

- **Conformes na estrutura e no conteúdo:** as 11 seções, com textos, ícones, mockups e CTAs iguais ao Figma.
- **Diferenças visuais** (nenhuma é bug; **nenhuma foi corrigida**, e nenhum código foi alterado):
  - **Alturas das seções:** variam de −3 a +14px na maioria, e as maiores são Reports (+32px), Dashboard (+41px) e Other Modules (+93px).
  - **FAQ:** o Figma mostra os itens abertos (1720px), e o site abre sob demanda (1030px).
  - **Hero:** a descrição quebra em 4 linhas no site e em 3 no Figma; o título e o conteúdo são iguais.
  - **Reports:** os stat cards são um pouco maiores no site (688 contra 656px).
  - **Dashboard:** o painel de benefícios e o texto são um pouco maiores no site (770 contra 729px); o ponteado decorativo que o Figma mostra acima do laptop não apareceu na captura do site (observado só na captura; não conferi no código).
  - **Other Modules:** 659 contra 566px; a diferença vem da forma como os cards ocupam a seção.
  - Diferenças menores em Technology, Portfolio, Leads Chart e Testimonials, todas dentro de ±13px.
- Verifiquei lado a lado só Hero, Reports e Dashboard; as demais seções foram comparadas pela altura e pelo conteúdo.

---

## Responsividade

21 larguras: HTTP 200, `scrollWidth === clientWidth`, 11 seções, 1 `<h1>`, 10 `<h2>`, 8 `<h3>`, 0 imagens quebradas, ≥400 0, falhas 0, console 0 e nenhum texto cortado. A faixa 980–1250px (incluindo 1198, 1199 e 1200px) foi testada por inteiro porque o `.container-page` muda de largura ali. A SPEC afirmava que a responsividade tinha sido auditada em 9 larguras na build de produção; a validação anterior a repetiu em 5; agora está verificada nas 21.

---

## SEO

[crm-imobiliario-urbano.vue:2-9](../../../app/pages/modulos/crm-imobiliario-urbano.vue#L2-L9) define `title` ("SUBSEE | CRM Imobiliário Urbano para Venda, Locação e Lançamentos"), `description`, `ogTitle` e `ogDescription` (iguais entre si). O HTML tem os quatro, mais `canonical` e `robots`. Localmente o canonical sai como `localhost:3000` e o `robots` como `noindex, nofollow`, o esperado fora de produção. Não há dados estruturados (JSON-LD), e a SPEC não os exige. O `textContent` do H1 lê "Acelere seus negócios no mercado imobiliário urbano", sem espaço faltando.

---

## Regressões

Nenhuma. Esta validação não alterou código. Os pontos de entrada (mega-menu, card em `/modulos/crm`, CTA da Home) e os três links de Outros módulos levam às páginas certas, com o H1 correto.

---

## Build

`pnpm build` **não foi repetido**: o `pnpm dev` ativo compartilha `.nuxt` e `.output` e já derrubou um build por colisão em sessões anteriores. Os testes de navegador foram feitos contra o servidor de desenvolvimento, que serve o código-fonte atual. A validação anterior registrava `pnpm build` com exit 0 (2026-09-09); o gate de build desta página não foi reverificado agora.

---

## Ressalvas

Nenhuma é falha funcional, e **nenhuma foi corrigida nesta validação.**

1. **Diferenças visuais de Figma** (ver acima): alturas das seções, Hero (quebra da descrição), Reports, Dashboard e Other Modules.
2. **FAQ** aberto no Figma e sob demanda no site.
3. **FAQ** em `<summary>` em vez de `<h3>`, padrão do `layout/Faq.vue` de todo o site.
4. **53 de 74 imagens em `main` sem `width` e `height`**, em sua maioria ícones decorativos; é um padrão do site todo e pode contribuir para CLS.
5. **`canonical` e `robots` locais** (`localhost:3000` e `noindex, nofollow`), esperados fora de produção.
6. **Build** de produção não repetido nesta validação.

---

## Divergências documentais

Registradas aqui; **`spec.md`, `tasks.md` e `design.md` não foram alterados nesta etapa.**

1. **`tasks.md`:** ainda diz que o diretório não é um repositório git e que o commit por tarefa não é executável, embora o projeto já esteja no Git. O status "Complete" e as 67 tarefas `[x]` batem com o código.
2. **P2 AC6 (URB-09):** a SPEC diz 6 badges de portal, e o Figma (node `3089:7282`) tem 7, incluindo `123i` (`3089:7427`). A divergência está no manifesto e no `tasks.md` (T8), mas não anotada na `spec.md`, ao contrário do URB-12. Esta pendência veio da validação anterior e não foi relida na `spec.md` nesta validação.
3. **P3 AC1 (URB-11):** "com altura igual entre si" não diz em que largura vale. Os cards são iguais lado a lado (384/384 a 992px) e diferem quando empilhados (384/312 a 375px).
4. **P3 AC2 (URB-12):** pede links para `/modulos/rural` e `/modulos/temporada`; o código usa `/modulos/crm-imobiliario-rural/` e `/modulos/crm-imobiliario-temporada/`. O desvio de Temporada está registrado na `spec.md`.
5. **Edge case das rotas irmãs:** a SPEC ainda descreve que a página irmã retornaria 404 até ser construída; as três rotas existem e respondem 200.
6. **FAQ:** as perguntas usam `<summary>`, não `<h3>`; a SPEC não define o nível de heading das perguntas.
7. **`spec.md`:** os 18 requisitos `URB-01` a `URB-18` e o Success Criteria estão marcados como `Verified`/`[x]` com base na validação anterior.

---

## Histórico

**Validação de 2026-09-09** (verificador independente, **antes de o projeto estar em Git**): veredito "PASS", 18/18 critérios, `pnpm build` com exit 0 e sensor de discriminação 1/1, com 269 asserções de navegador (263 passaram) em 5 larguras (375, 768, 992, 1440 e 1920px). Registrou três itens não bloqueantes: Fix 1 (nota de 7 badges ausente na SPEC), Fix 2 (altura dos depoimentos sem escopo de largura) e Fix 3 (SVG duplicado).

**Por que estava desatualizada:** foi feita antes do Git e **sem validação real em navegador da faixa 980–1250px** (testou 5 larguras). Não conhecia as mudanças posteriores: SEO e acessibilidade (`c8c24ac`), AVIF e lazy-load (`d503130`) e indexação no ambiente de auditoria (`030e368`). A validação foi **refeita no runtime atual, com 21 larguras**, e substitui a anterior. Dos três itens que ela registrava, o Fix 3 foi resolvido, e os Fix 1 e 2 seguem como divergências documentais.

---

## Itens em aberto (fora desta validação)

- Atualizar a SPEC e o `tasks.md` (divergências documentais acima).
- Decidir o tratamento das diferenças visuais de Reports, Dashboard e Other Modules em relação ao Figma.
- Repetir `pnpm build` quando o servidor de desenvolvimento estiver parado.
- Commitar esta validação.
