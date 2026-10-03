# Validation — `base-de-conhecimento`

**Verificação:** auditoria em 2026-10-02 e correções com revalidação em 2026-10-03, em sessão posterior à implementação. **Substitui a validação independente anterior** (2026-09-28, antes de o projeto estar em Git, com 5 das 7 larguras da SPEC), cuja conclusão de que a seção Other "casa de perto com o Figma" não se sustenta. Nenhum item da SPEC ou do `tasks.md` foi tratado como confirmado até ser reproduzido contra o código atual.

- **Playwright (Chromium)** contra o servidor de desenvolvimento (`pnpm dev` do desenvolvedor, porta 3000), que serve o código-fonte atual. `pnpm build` **não foi repetido** (ver "Build").
- **Figma:** node raiz `3164:37761` (fileKey `vX7qKnnXSOW8zv4kAuS2eN`): alturas das 8 seções e capturas a 1920px de Other (`3164:38481`) e Publishing (`3164:38449`) e, na auditoria, de Hero, Technology, Training e FAQ, e conferência com `FIGMA_CONTENT_MANIFEST_BASE_CONHECIMENTO.md`.

## Veredito: **PASS com ressalvas**

Os critérios `BC-01` a `BC-14` da SPEC estão atendidos em conteúdo e comportamento. A auditoria encontrou **dois defeitos de layout objetivos**, em `BaseConhecimentoOther.vue` e `BaseConhecimentoPublishing.vue`, **corrigidos e revalidados**. Ficam ressalvas visuais em relação ao Figma, incluindo um **residual conhecido** nos cards de Publishing (cerca de 511px contra 489px) e o Hero, que não foi alterado. Um item do Goal da SPEC (H3 no FAQ) permanece **parcial** (ver "Critérios").

---

## Correções feitas

### 1. `BaseConhecimentoOther.vue` — composição da seção "Content / Other"

- **Problema:** a partir de 992px a composição era a inversa da do Figma (texto à esquerda e imagem à direita, sobre um painel cinza `rounded-[50px] bg-[#f5f5f5]` copiado de `ApisConecte.vue`). O Figma (node `3164:38481`) tem a imagem à esquerda (x=0, 703px) e o texto à direita (x=783, 609px) sobre fundo branco, sem painel. Com `py-0` e `justify-center`, a tag e a linha de confiança tocavam o topo e a base do painel (folga 0px). O H2 quebrava em 3 linhas contra 2 no Figma, porque a coluna de texto media 595px (menos o `px-16` de 128px).
- **Correção:**
  - removido o painel cinza e o padding das duas colunas;
  - em `tablet-lg` o contêiner passou a `flex-row-reverse items-center justify-between`, de modo que a ordem do DOM continua sendo texto e depois imagem, e visualmente a imagem fica à esquerda;
  - as colunas mantêm as larguras de 43,75% e 50,5%;
  - o espaçamento da coluna de texto passou de `gap-5` para `gap-8` (32px do Figma), com `tablet-lg:mt-0` no CTA e `tablet-lg:-mt-[18px]` na linha de confiança, que dá os 14px entre o botão e a linha de confiança.
- **Resultado a 1920px (medido):** linha de 425px; imagem à esquerda (687px) e texto à direita; **sem painel cinza**; tag e linha de confiança a 6px das bordas da linha (antes, 0px); H2 em 2 linhas; seção de 521px (antes 576px). Mesma composição a 1440px (521px). A 375px o texto continua antes da imagem, sem painel.

### 2. `BaseConhecimentoPublishing.vue` — altura dos cards

- **Problema:** os 3 cards tinham alturas diferentes (cerca de 415 / 454 / 415px, com o do meio mais alto porque o título quebra em 3 linhas), contra 3 cards iguais de 428×489px no Figma (node `3164:38449`).
- **Correção:** a linha passou de `items-start` para `items-stretch`, e o corpo de cada card ganhou `tablet-lg:min-h-[432px] tablet-lg:flex-1` (432px é a altura do corpo no Figma, que somada aos 100px do ícone menos a sobreposição de 43px dá os 489px).
- **Resultado (medido):** os 3 cards ficam com **altura igual**: 511px a 1920 e 1440px, 695px a 1280px e 763px a 1024 e 992px. Abaixo de 992px os cards empilham e cada um mantém a altura do conteúdo.
- **Residual conhecido:** **cerca de 511px, não os 489px do Figma.** O título do card do meio ("Melhorar o treinamento de novos colaboradores") quebra em 3 linhas no site e em 2 no Figma: a primeira linha ("Melhorar o treinamento de") ocupa 378px e o espaço disponível no card é de 331px, porque o contêiner mede 1360px a 1920px (o Figma usa 1400px) e os cards ficam com cerca de 414px em vez de 428px. Testei reduzir o padding lateral de 43 para 41px, sem efeito, e **reverti**. Chegar a 489px exigiria reduzir a fonte do título (28px no Figma) ou ampliar o card; **a tipografia não foi alterada para forçar os 489px.**

---

## Resumo da evidência

Revalidação **depois das correções**, nas 12 larguras principais:

| Verificação | Resultado |
| --- | --- |
| Rota `/modulos/base-de-conhecimento/` | HTTP 200 em 1920, 1440, 1280, 1024, 992, 768, 576, 414, 390, 375, 360 e 320px (200 também sem a barra final) |
| Overflow horizontal | **Nenhum** (`scrollWidth === clientWidth`) nas 12 larguras |
| Console / HTTP | console 0, respostas ≥400: 0, falhas de requisição: 0 |
| Imagens | quebradas: 0; candidatos `0w` no `srcset`: 0 |
| Seções | 8, na ordem do Figma: `base-conhecimento-hero`, `-tecnologia`, `-treinamento`, `-vantagens`, `-informacao-centralizada`, `-outros-modulos`, `-depoimentos`, `-duvidas-frequentes` |
| Headings | **1 `<h1>`, 7 `<h2>` e 7 `<h3>`**, sem saltos; as perguntas do FAQ usam `<summary>` |
| Alturas a 1920px (site / Figma) | Hero 513 / 568, Technology 1168 / 1187, Training 1014 / 1060, Publishing 792 / 757, **Other 521 / 505**, Other Modules 349 / 342, Testimonials 766 / 770, FAQ 1026 / 1484 |

A **faixa 980–1250px** (980, 1000, 1050, 1100, 1150, 1198, 1199, 1200 e 1250) foi testada na auditoria, **antes das correções**: sem overflow, console 0 e `0w` 0. Depois das correções foram medidas a geometria de Other e Publishing a 1280, 1024 e 992px, sem repetir a varredura completa da faixa.

---

## Critérios de aceite (BC-01 a BC-14)

**Total: 14/14 atendidos**, com um item do Goal da SPEC **parcial** (última linha da tabela).

| BC-ID | Evidência | Situação |
| --- | --- | --- |
| BC-01 rota | HTTP 200; 8 seções na ordem do Figma; `app/pages/modulos/base-de-conhecimento.vue` as compõe nessa ordem | Atendido |
| BC-02 Hero | H1 "Central de Ajuda, Tutoriais e Documentação do SUBSEE on" com "on" em `#e72f4d`, descrição, cards, 5 ícones e selo; sem CTA. A altura de 513px vem do shell compartilhado `layout/Hero.vue` (CRM e APIs medem o mesmo), contra 568px no Figma | Atendido (diferença visual no shell; Hero **não alterado**) |
| BC-03 Technology | `BaseConhecimentoTechnology.vue` envolve `CrmTechnology.vue`; mockup 2200×1292 e CTA "Testar grátis por 30 dias" → `/testar-gratis/` (clicado, chega à rota) | Atendido |
| BC-04 Training | Imagem, descrição e 4 features (`<h3>`); CTA → `/testar-gratis/` (clicado) | Atendido |
| BC-05 mega-menu | 1440px: hover em "Módulos" e clique levam à rota; 375px: botão "Abrir menu" → "Módulos" → link → rota, e o menu fecha. O footer não tem link para a página, e a Home tem um, só no header | Atendido |
| BC-06 Publishing | H2, descrição e 3 cards com título, ícone e descrição; **cards com altura igual** (correção acima); 511px, não 489px, ver residual | Atendido (residual visual) |
| BC-07 Other | Tag, H2, descrição, linha de confiança, CTA e a imagem `devices-composition`; **composição corrigida** (imagem à esquerda, sem painel cinza) | Atendido |
| BC-08 Testimonials | `crm-geral-mauro-alencar` (Ideal Imóveis) e `crm-rural-julio-silveira` (Vettore), com logos e `alt` | Atendido |
| BC-09 Other Modules | Banner "APIs e HUB Integradores" | Atendido |
| BC-10 FAQ | 6 itens `<details>` com as perguntas e respostas do manifesto | Atendido |
| BC-11 banner | O clique no banner leva a `/modulos/apis-hub-integrador/` (medido) | Atendido |
| BC-12 estado do FAQ | Abrir e fechar por clique, Enter e Espaço; "+" some e "−" aparece; vários itens podem ficar abertos ao mesmo tempo (como em `CrmFaq`) | Atendido |
| BC-13 responsividade | Sem overflow de 320 a 1920px (as 12 larguras e, na auditoria, as 21) | Atendido |
| BC-14 colisão de nomes | Prefixo `BaseConhecimento*` nos 8 componentes, sem colisão | Atendido |
| Goal "H3 nos cards, features e FAQ" | Há `<h3>` em cards e features; as perguntas do FAQ são `<span>` dentro de `<summary>` (`layout/Faq.vue`), comportamento do componente compartilhado | **Parcial** |

---

## Conformidade com o Figma

Comparado a 1920px, seção a seção (alturas na tabela acima).

- **Conformes:** conteúdo, ícones e CTAs das 8 seções; Technology, Training, Testimonials e Other Modules na estrutura; o "on" vermelho do Hero e do Training e o negrito da descrição do card do meio de Publishing (corrigidos na validação anterior).
- **Diferenças visuais** (nenhuma é bug; **nenhuma foi corrigida**):
  - **Hero:** a seção mede 513px contra 568px, e a composição da foto e dos cards começa no topo do bloco (o selo fica colado em y=0 e a cabeça da modelo em cerca de y=20, contra cerca de y=113 no Figma). É deslocamento do shell compartilhado `layout/Hero.vue`, que afetaria CRM, APIs e outras páginas; **o Hero não foi alterado.**
  - **Other:** as **ondas decorativas** do Figma (duas ondas, verde e azul, atrás da seção, nodes `3164:38483` e `3164:38484`) **não foram implementadas, porque não existe asset correspondente no projeto**. A 992, 1024 e 1280px (medidos) a coluna de texto fica estreita (43,75%) e o H2 quebra em 4 linhas; antes das correções era pior. O Figma só define o desktop. A imagem mede 687px a 1920px (o Figma tem 703px) por causa do contêiner de 1360px.
  - **Publishing:** 511px contra 489px (residual acima); o título do card do meio em 3 linhas contra 2.
  - **Training:** o H2 fica em 1 linha no site e em 2 no Figma, e a coluna de features é mais larga.
  - **Technology:** o título quebra em "…tutoriais e / treinamentos", e no Figma "…com / tutoriais e treinamentos"; a descrição é mais larga.
  - **FAQ:** o Figma mostra as 6 respostas abertas (1484px), e o site abre sob demanda (1026px).

---

## SEO e acessibilidade

- `title` e `description` próprios, `og:title` e `og:description`; `lang` `pt-BR`. `canonical` (`http://localhost:3000/modulos/base-de-conhecimento/`) e `robots` (`noindex, nofollow`) vêm do plugin global de SEO e saem assim localmente, o esperado fora de produção. Não há `og:image`, `og:type`, `twitter:*` nem JSON-LD (lacuna do site todo).
- Hierarquia `<h1>` > `<h2>` > `<h3>` sem saltos. As perguntas do FAQ ficam em `<summary>` em vez de `<h3>`, **comportamento do componente compartilhado `layout/Faq.vue`**, comum a todas as páginas; mexer nisso é decisão entre páginas, fora desta feature.
- Imagens: nenhuma sem `alt`; as decorativas têm `alt=""` e `aria-hidden`. Só SVGs decorativos ficam sem `width`/`height`; as imagens raster têm dimensões. Landmarks `header`, `nav`, `main` e `footer`; 0 links ou botões sem nome acessível.
- O hero-visual carrega `eager` com `fetchpriority="high"`; os mockups, `lazy`.

---

## Regressões

Nenhuma. As correções afetam só `BaseConhecimentoOther.vue` e `BaseConhecimentoPublishing.vue`, e as demais 6 seções mantêm as mesmas alturas a 1920px. Nenhum componente compartilhado foi alterado, e o Hero não foi tocado.

---

## Build

`pnpm build` **não foi repetido**: o `pnpm dev` ativo compartilha `.nuxt` e `.output` com o build. A validação anterior registrava `pnpm build` com exit 0 e o chunk `base-de-conhecimento-*.mjs` presente; o gate de build desta página não foi reverificado agora.

---

## Ressalvas

Nenhuma é falha funcional, e **nenhuma foi corrigida nesta validação**, exceto as duas correções acima.

1. **Cards de Publishing** em cerca de 511px, contra 489px no Figma (residual conhecido).
2. **Ondas decorativas** da seção Other do Figma não implementadas, por falta de asset.
3. **Hero** não alterado: a diferença de altura e de composição vertical vem do shell compartilhado.
4. **FAQ** aberto no Figma e sob demanda no site; perguntas em `<summary>` em vez de `<h3>` (componente compartilhado).
5. **H2 de Other** em 4 linhas a 992, 1024 e 1280px, e demais diferenças de quebra de título (Training, Technology).
6. **`canonical` e `robots` locais**, e ausência de `og:image` e `twitter:*` em todo o site.
7. **Build** de produção e a faixa 980–1250px (varredura completa) não repetidos depois das correções.

---

## Divergências documentais

Registradas aqui; **`spec.md`, `tasks.md` e `design.md` não foram alterados nesta etapa.**

1. `tasks.md` ("Status: Draft — awaiting user approval before Execute") e `design.md` ("Status: Draft"), embora todas as tarefas estejam concluídas.
2. A SPEC, o `tasks.md` e a validação anterior citam `/testar-gratis` e `/modulos/apis-hub-integrador` sem a barra final; o código usa `/testar-gratis/` e `/modulos/apis-hub-integrador/` (desde `c8c24ac`).
3. O "Out of Scope" da SPEC e os "Integration Points" do `design.md` dizem que `ApisOtherModules` usa `href="#"`; hoje aponta para `/modulos/base-de-conhecimento/` (`ApisOtherModules.vue:16`). O `.specs/STATE.md` (linhas 125 e 145) também descreve a página como 404 e o banner como `#`.
4. O `tasks.md` (T11) cita o gradiente do Training a 75,5deg; o código e a validação usam 75,89deg.
5. O `tasks.md` (T7) e a validação anterior dizem que a seção Other "casa de perto com o Figma" (43,75/50,5): a medição mostrou o layout invertido e o painel cinza que o Figma não tem, corrigidos nesta validação. O `tasks.md` e o `design.md` não foram atualizados.
6. O `design.md` descreve `SectionTag` e `ApisConecte` como padrão da seção Other; o código usa markup local e, desta validação em diante, não tem mais o painel.
7. A validação anterior cita `CrmTechnology.vue:98` para o CTA; as linhas mudaram em `c8c24ac`.
8. `spec.md`: os 14 requisitos `BC-01` a `BC-14` e o Success Criteria estão marcados como `Verified`/`[x]`, e os 4 Goals ainda estão `[ ]`, embora cumpridos.

---

## Histórico

**Validação anterior (2026-09-28)** (verificador independente, **antes de o projeto estar em Git**): veredito "PASS, with 1 real fidelity gap and 2 minor notes", 14/14 requisitos, `pnpm build` com exit 0, 5 das 7 larguras da SPEC (1024px não testado) e 2 reflexões de sensor de discriminação. Registrou o "on" em roxo em vez de vermelho no Hero e no Training, o negrito da descrição do card do meio de Publishing e um `spec.md` não commitado; os três foram corrigidos na própria validação.

**Por que estava desatualizada:** foi feita antes do Git e **sem validação das 12 larguras principais nem da faixa 980–1250px**. Não conhecia as mudanças posteriores: AVIF e lazy-load (`d503130`), fontes self-hosted, SEO, canonical e barras finais (`c8c24ac`, `030e368`, `2d4f632`). O ponto BC-07 (Other "close match") não se sustenta, o BC-06 (Publishing "near-pixel") era frouxo, e o BC-02 passou sem notar o deslocamento vertical da composição do Hero. Esta validação a substitui.

---

## Itens em aberto (fora desta validação)

- Decidir o tratamento do Hero (shell compartilhado, com efeito em outras páginas), da altura dos cards de Publishing (489px exigiria mexer na tipografia) e das ondas decorativas (exigem exportar o asset do Figma).
- Atualizar a SPEC, o `tasks.md`, o `design.md` e o `.specs/STATE.md` (divergências documentais acima).
- Repetir `pnpm build` quando o servidor de desenvolvimento estiver parado.
- Commitar as correções de `BaseConhecimentoOther.vue` e `BaseConhecimentoPublishing.vue` e esta validação.
