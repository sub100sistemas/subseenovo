# Validation — `eventos`

**Verificação:** auditoria em 2026-10-02 e correções com revalidação em 2026-10-03, em sessão posterior à implementação. **Substitui a validação independente anterior**, feita antes de o projeto estar em Git (diff contra `402cf50..feature/eventos`, branch que já não existe), em 3 larguras (1920, 1024 e 390px) e que deixava aberto o defeito do "1" sobrando na miniatura do Replay (Gap 1). Nenhum item da SPEC ou do `tasks.md` foi tratado como confirmado até ser reproduzido contra o código atual.

- **Playwright (Chromium)** contra o servidor de desenvolvimento (`pnpm dev` do desenvolvedor, porta 3000), que serve o código-fonte atual. `pnpm build` **não foi repetido** (ver "Build").
- **Figma:** metadados do frame `Page` (node `3171:41842`, alturas das seções) e capturas a 1920px, e conferência com `FIGMA_CONTENT_MANIFEST_EVENTOS.md`.

## Veredito: **PASS com ressalvas**

Os critérios `EV-01` a `EV-12` da SPEC estão atendidos. A auditoria encontrou **dois defeitos objetivos, ambos corrigidos e revalidados**: o overflow horizontal a 320px e o "1" sobrando na miniatura 2 do Replay. As ressalvas restantes são diferenças visuais em relação ao Figma e divergências documentais; nenhuma foi tratada como bug nem corrigida nesta etapa.

---

## Correções feitas

### 1. Overflow horizontal a 320px

- **Problema:** a 320px o `scrollWidth` era 335 contra `clientWidth` 320 (+15px). Era a única largura com falha, das 21 testadas na auditoria.
- **Causa:** [EventosReplay.vue:110](../../../app/components/sections/EventosReplay.vue#L110): o CTA "Ver mais vídeos no App SUBSEE" tinha `w-[349px]` fixo.
- **Correção:** `w-[349px]` → `w-full max-w-[349px]`.
- **Resultado:** o CTA mede 349×56 a 1920, 1440 e 992px (idêntico ao anterior), 295×56 a 375px, e **240×56 a 320px (`right` = 280)**. `scrollWidth === clientWidth` a 320px.

### 2. "1" sobrando na miniatura 2 do Replay (Gap 1 da validação anterior)

- **Origem identificada:** o arquivo `public/images/eventos/eventos-replay-thumb-2.png` tem o texto "1.0.15" gravado nos pixels da imagem. O selo "1.0.18" é uma sobreposição em HTML (`EventosReplay.vue:79-86`). Conforme o Figma (node `3171:41898`), o selo ocupa x=152 a 229 de um cartão de 399px, o que cobre todo o "1.0.15". No código ele estava centralizado e mais estreito à esquerda, e o "1" inicial ficava 2 a 4px fora dele. Um segundo desalinhamento: o `top` estava em pixels (`top-[89px]`), mas a imagem encolhe abaixo de 399px de largura; nessas larguras o "1.0.15" aparecia por cima do selo.
- **Correção (só no elemento responsável, a imagem não foi alterada):** o contêiner do selo passou de `absolute top-[89px] left-0 flex w-full items-center justify-center` para `absolute top-[33.3%] left-[38.1%] flex`, as proporções do Figma (89/267 e 152/399).
- **Resultado:** capturas do card 2 em 1920, 1440, 1024, 992, 768, 576, 414, 375 e 320px (a 768px também com zoom de 3×): sem o "1" sobrando nas larguras conferidas visualmente depois da versão final da correção (1440, 768, 375 e 320px). A 1920px conferi a primeira versão da correção (só o `left`), e a captura final de 1920px foi gerada mas não inspecionada.

---

## Resumo da evidência

Revalidação **depois das correções**, nas 12 larguras principais:

| Verificação | Resultado |
| --- | --- |
| Rota `/eventos/` | HTTP 200 em 1920, 1440, 1280, 1024, 992, 768, 576, 414, 390, 375, 360 e 320px |
| Overflow horizontal | **Nenhum** (`scrollWidth === clientWidth`) nas 12 larguras, inclusive **320px** |
| Console / HTTP | console 0, respostas ≥400: 0, falhas de requisição: 0 |
| Imagens | quebradas: 0; candidatos `0w` no `srcset`: 0 |
| Seções | 6, na ordem do Figma: `eventos-galeria`, `-hero`, `-replay`, `-visao-geral`, `-inscricao`, `-duvidas-frequentes` |
| Headings | **1 `<h1>`, 4 `<h2>` e 3 `<h3>`** em `main` (os 3 títulos de cards do Replay); as perguntas do FAQ usam `<summary>` |
| Alturas das seções a 1920px | 400 / 747 / 867 / 593 / 464 / 1026, iguais às medidas antes das correções |

A **faixa 980–1250px** (980, 1000, 1050, 1100, 1150, 1198, 1199, 1200 e 1250) foi testada na auditoria, **antes das correções**: sem overflow, console 0 e `0w` 0. Não foi repetida depois, porque as correções só afetam o CTA do Replay (que só muda abaixo de 349px) e o selo do card 2 (posicionado em percentual).

---

## Critérios de aceite (EV-01 a EV-12)

**Total: 12/12 atendidos**, com divergências de redação da SPEC (ver "Divergências documentais").

| EV-ID | Evidência | Situação |
| --- | --- | --- |
| EV-01 rota | HTTP 200 nas 12 larguras (e nas 21 da auditoria) | Atendido |
| EV-02 galeria | `EventosGallery` é o primeiro filho de `main`, com 5 fotos com `alt` descritivo | Atendido |
| EV-03 Hero | H1 "Eventos Online e Replays do SUBSEE on", "on" em `#e33b48`, descrição, banner (775px a 1920px, igual ao Figma), kicker e parágrafo. O CTA "Inscreva-se!!!" agora aponta para `/inscreva-se/` (não mais `#`) | Atendido |
| EV-04 nav | Mega-menu/header a 1440px leva a `/eventos/` (`aria-current` correto); menu mobile a 375px leva a `/eventos/` e fecha | Atendido |
| EV-05 Replay | H2, descrição, 3 cards via `v-for`, CTA para `https://app.subsee.com.br/treinamentos/eventos-online?page=1&order=default` com `target="_blank"` e `rel="noopener"`; o selo "1.0.18" agora cobre o "1.0.15" da imagem | Atendido |
| EV-06 Overview | H2, descrição, foto e blocos decorativos; o ícone de play é decorativo (`<img aria-hidden>`, sem `<a>`) | Atendido |
| EV-07 Signup | O card inteiro é um `<a>` para `/inscreva-se/`, com selo, H2, descrição, CTA, nota e imagem | Atendido |
| EV-08 FAQ | 6 itens via `layout/Faq.vue` com ícones "+" e "−" | Atendido |
| EV-09 estado do FAQ | 6 `<details>`; abrir troca "+" por "−", cada item é independente, e Enter alterna pelo teclado | Atendido |
| EV-10 CTAs `#` | A decisão original (CTAs com `href="#"`) foi **superada**: o destino foi definido e `/inscreva-se/` existe; os 2 CTAs navegam (HTTP 200) | Atendido (critério superado) |
| EV-11 responsividade | Sem overflow de 320 a 1920px; a galeria rola em `overflow-x-auto` contido; o Replay empilha em coluna abaixo de 992px e quebra em 2+1 de 992 a 1280px (medido; a 1440 e a 1920px os 3 cards ficam em linha), por desenho (`flex-wrap`) | Atendido |
| EV-12 colisão de nomes | Os 6 componentes têm o prefixo `Eventos`, sem colisão | Atendido |

O critério "sem overflow horizontal" do Success Criteria, que cita 7 larguras, agora vale também a 320px.

---

## Edge cases

| Edge case | Evidência | Situação |
| --- | --- | --- |
| Abaixo de 576px, sem overflow | `scrollWidth === clientWidth` em 576, 414, 390, 375, 360 e **320px** (antes a 320px havia overflow) | Atendido |
| Replay de 992 a 1280px (medido; a 1440 e a 1920px os 3 cards ficam em linha) | Quebra em 2+1 sem overflow, por desenho | Atendido |
| Assets pendentes | Todos exportados; 0 imagens quebradas e 0 `0w` | Atendido |
| Colisão de nomes | Prefixo `Eventos` | Atendido |

---

## Conformidade com o Figma

Comparado a 1920px (node `3171:41842`). Alturas (site / Figma): Gallery 400 / 506, Hero 747 / 767, Replay 867 / 889, Overview 593 / 593, Signup 464 / 430, FAQ 1026 / 1130.

- **Conformes:** Hero e Overview (muito próximos do Figma), o Replay (cartões, tags, CTA e agora o selo da miniatura 2) e o Signup (conteúdo).
- **Diferenças visuais** (nenhuma é bug; **nenhuma foi corrigida**):
  - **Gallery:** as fotos do site são quadradas (384×384, com borda de 8px) e as do Figma medem 379×360; a seção mede 400px contra 506px no Figma (a diferença inclui os 90px do Header sobreposto).
  - **Hero e Replay:** 20 a 22px mais baixos que no Figma.
  - **Signup:** a descrição quebra em 3 linhas no site e em 2 no Figma, e a seção mede 464 contra 430px. O fundo do Figma é um gradiente lavanda contínuo, enquanto o do site tem a metade esquerda cinza chapada (`#f2f5f4`) com uma emenda onde começa a imagem.
  - **FAQ:** o Figma mostra os itens abertos e sem painel cinza (1130px); o site abre sob demanda e usa o painel `#f5f5f5`, padrão do `layout/Faq.vue` (1026px).
  - **Replay:** o selo "1.0.18" é `bg-[#fdfdfe]` sobre uma miniatura clara, então o contraste é baixo; o círculo de play cobre parte dele, como no Figma (selo 77×23 em y=90, play em y=112).

---

## SEO e acessibilidade

- `title` "SUBSEE | Eventos Online e Replays do SUBSEE on", `description` conforme a SPEC, `og:title` e `og:description`. `canonical` e `robots` são adicionados pelo plugin global de SEO; localmente saem como `localhost:3000` e `noindex, nofollow`, o esperado fora de produção.
- Não há `og:image`, `og:url`, `og:type`, `twitter:*` nem JSON-LD (lacuna do site todo; a SPEC não os exige). `lang` é `pt-BR`.
- Imagens: nenhuma sem `alt`; as decorativas têm `alt=""` e `aria-hidden`. 14 imagens decorativas ficam sem `width`/`height`.
- O card do Signup é um `<a>` que envolve `<h2>` e parágrafo; o nome acessível é longo, mas aceitável.
- As perguntas do FAQ ficam em `<summary>`, não em `<h3>`, como em todo o site (`layout/Faq.vue`).
- O contorno de foco dos `<a>` é `none` no estilo computado; o foco visível depende do estilo global e não foi verificado visualmente.

---

## Regressões

Nenhuma. As correções afetam só o CTA e o selo do Replay. Nenhum componente compartilhado foi alterado, e as alturas das 6 seções a 1920px não mudaram.

---

## Build

`pnpm build` **não foi repetido**: o `pnpm dev` ativo compartilha `.nuxt` e `.output` com o build. A validação anterior registrava `pnpm build` com exit 0; o gate de build desta página não foi reverificado agora.

---

## Ressalvas

Nenhuma é falha funcional, e **nenhuma foi corrigida nesta validação**, exceto as duas correções acima.

1. **Diferenças visuais de Figma** (ver acima): Gallery, Signup (fundo e quebra da descrição) e as alturas de Hero e Replay.
2. **FAQ** aberto no Figma e sob demanda no site, e com painel cinza.
3. **FAQ** em `<summary>` em vez de `<h3>`.
4. **`canonical` e `robots` locais**, e ausência de `og:image` e `twitter:*` em todo o site.
5. **Build** de produção não repetido nesta validação.
6. **Faixa 980–1250px** não repetida depois das correções (ver "Resumo da evidência").

---

## Divergências documentais

Registradas aqui; **`spec.md`, `tasks.md` e `design.md` não foram alterados nesta etapa.**

1. Os dois CTAs "Inscreva-se!!!" (decisão "locked-in", critério P3-4 e `EV-10`) estão documentados como `href="#"`; hoje apontam para `/inscreva-se/`.
2. A SPEC diz "sem canonical"; hoje há canonical e robots via plugin global.
3. A SPEC e o `design.md` apontam o nav para `/eventos`; hoje é `/eventos/`, com barra final.
4. As larguras citadas na SPEC (1920, 1440, 1280, 1024, 768, 576 e 375px) não cobrem 320px nem a faixa 992 a 1199px.
5. O `design.md` cita `CtaButton` no Replay e um gradiente "inlined"; o CTA do Replay é um `<a>` próprio, e o `EventosFaq` envolve `layout/Faq.vue` direto (e não `CrmFaq`).
6. O `design.md` descreve `ReplayCard` com `tagColor?` e sem `alt`; o código tem `alt` e não tem `tagColor`.
7. `design.md` em `Status: Draft`; `tasks.md` em `Status: Draft — awaiting user approval`, embora a feature esteja implementada.
8. Esta validação anterior citava o branch `feature/eventos` e a regra de branch por tarefa; o trabalho está na `master`.
9. `spec.md`: os 12 requisitos `EV-01` a `EV-12` e o Success Criteria estão marcados como `Verified`/`[x]` com base na validação anterior.

---

## Pendências da SPEC e do design originais

- Nenhum critério de aceite está pendente de implementação.
- Fidelidade ao Figma ainda não implementada, por decisão a tomar: fotos da Gallery em 379×360, fundo gradiente contínuo e descrição em 2 linhas no Signup, e FAQ sem painel cinza.

---

## Histórico

**Validação anterior** (verificador independente, **antes de o projeto estar em Git**, em 3 larguras: 1920, 1024 e 390px): veredito "PASS (with 1 real, reportable gap)", 12/12 requisitos e 2 reflexões de sensor de discriminação. Registrou o Gap 1 ("1" sobrando na miniatura 2), que **continuava aberto até esta validação**.

**Por que estava desatualizada:** foi feita antes do Git e **sem validação a 320px nem na faixa 980–1250px**, onde está o overflow encontrado agora. Não conhecia as mudanças posteriores: SEO e canonical (`c8c24ac`), AVIF e lazy-load (`d503130`), as páginas de formulário (`d8adab9`, que inclui `/inscreva-se/`, hoje o destino dos CTAs) e a indexação no ambiente de auditoria (`2d4f632`, `030e368`). Esta validação a substitui.

---

## Itens em aberto (fora desta validação)

- Decidir o tratamento das diferenças visuais de Gallery, Signup e FAQ em relação ao Figma.
- Atualizar a SPEC, o `tasks.md` e o `design.md` (divergências documentais acima).
- Repetir `pnpm build` quando o servidor de desenvolvimento estiver parado.
- Commitar as correções de `EventosReplay.vue` e esta validação.
