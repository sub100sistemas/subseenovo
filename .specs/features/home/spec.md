# Home / Principal (`/`) Specification

> **SPEC retroativa e documental.** Este documento descreve uma implementação que já existe e está em uso. Ele não especifica trabalho a executar: não há `design.md`, `tasks.md` nem `validation.md` para esta feature, e nada na Home deve ser alterado por causa dele. A Home é anterior à adoção do `tlc-spec-driven` (skill instalado em 2026-09-08; as seções da Home já estão no commit inicial `2044cf6`, de 2026-09-10) e nunca teve uma SPEC. Cada critério abaixo foi escrito a partir do código atual de `app/pages/index.vue`, das 12 seções, dos componentes compartilhados que elas usam, de `FIGMA_CONTENT_MANIFEST.md` e do `.specs/STATE.md`. Onde as fontes divergem, o código atual prevalece.

**Status:** Implemented (retroativa) · **Data da redação:** 2026-10-02 · **Rota:** `/` · **Arquivo da página:** `app/pages/index.vue`

## Problem Statement

A Home é a página principal do site SUBSEE (CRM imobiliário da SUB100): apresenta o produto e seus módulos, reúne prova social, dúvidas frequentes, planos e preços, conteúdo do blog e os demais produtos da empresa, e conduz o visitante para o teste grátis (`/testar-gratis/`) e para as páginas dos módulos. Ela foi construída a partir do Figma (`fileKey vX7qKnnXSOW8zv4kAuS2eN`, página Home, node `1:41`, artboard `1:42`, 1920×11586) e é a origem do padrão de páginas estáticas do projeto (AD-001), mas não tinha nenhum registro SPEC. Esta SPEC existe para documentar, de forma rastreável, o que a Home entrega hoje e as decisões que a moldaram, sem introduzir requisitos novos.

A página é composta por 12 seções em `app/components/sections/` (prefixo `Hero*`), cada uma autocontida: o conteúdo (textos, listas, preços, depoimentos, perguntas) está escrito diretamente nos componentes (AD-001), e elas usam apenas primitivos de `ui/` (`CtaButton`, `SectionTag`, `SectionDivider`, `FeatureList`), sem shells de `layout/`. O cabeçalho e o rodapé vêm do `app.vue` e são compartilhados com todas as páginas.

## Out of Scope

| Feature | Reason |
|---|---|
| Cabeçalho (`TheHeader`/`HeaderBar`) e rodapé (`TheFooter`) | Layout compartilhado por todas as páginas; não pertence à Home. Só o acoplamento com o id `hero-main` é registrado aqui (HOM-14) |
| Canonical, `og:url`, robots, sitemap e a regra de indexação por ambiente | Regras transversais do site (`app/plugins/seo.ts`, `modules/seo.ts`, `server/routes/`), não específicas da Home |
| Conteúdo dos posts do blog e das páginas de destino externas | Os cards apontam para `blog.sub100sistemas.com.br`, `sub100.com.br` e `sistemasgl.com.br`, que não pertencem a este projeto |
| Páginas dos módulos, `/testar-gratis/`, `/planos-e-precos/` e `/assista-os-videos-do-subsee-on/` | Têm SPECs próprias; a Home só linka para elas |
| CMS ou fonte de conteúdo externa | AD-001 — todo o conteúdo é hardcoded nos componentes de seção |
| Testes automatizados | AD-002 — não há test runner no projeto |
| Novas seções, mudanças de conteúdo, layout ou design | Esta SPEC não autoriza alterações; qualquer mudança futura deve abrir uma SPEC própria ou atualizar esta |
| Metas numéricas de Performance (Lighthouse/PageSpeed) | Resultados de laboratório variam com o ambiente; as decisões que os sustentam estão em HOM-09 a HOM-11 |

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
|---|---|---|---|
| Natureza do documento | SPEC retroativa: descreve o que existe, sem requisitos novos | Decisão do usuário em 2026-10-02: documentar a Home no fluxo SPEC-driven sem alterar nada nela | y |
| Profundidade da SPEC | `spec.md` apenas, sem `design.md`, `tasks.md` nem `validation.md` | Não há implementação a executar nem feature nova a verificar | y |
| Fonte de verdade do conteúdo | O código atual das seções; `FIGMA_CONTENT_MANIFEST.md` é a referência de origem | O manifesto foi extraído do Figma (AD-003), mas a coluna de `alt` sugerido está defasada em relação aos `alt` atuais, ajustados em lote posterior | y |
| Prefixo dos componentes | `Hero*` (12 componentes) | Convenção anterior à AD-004; o prefixo `HeroTemporada` da Home motivou a escolha de `CrmTemporada*` nas páginas de módulo (AD-010) | y |
| Hidratação | `HeroMain` renderiza normalmente; as outras 11 seções entram como `Lazy…` com `hydrate-on-visible` | Reduz o JavaScript executado na carga inicial; as seções não têm estado nem eventos próprios | y |
| Interações | Nenhuma lógica de cliente nas seções além do acordeão nativo `<details>` do FAQ | Verificado no código: não há `ref`, `watch`, `onMounted` nem eventos em `Hero*` | y |
| Preços e depoimentos | São conteúdo do Figma escrito nos componentes; esta SPEC não valida a atualidade comercial desses valores | O valor exibido hoje é "R$ 450,00 mês + opcionais" para os planos Urbano e Rural; a conferência comercial é responsabilidade do negócio | y |

**Open questions:** none

_Lacuna conhecida, fora do escopo desta SPEC: a fidelidade visual da Home ao Figma não tem relatório de verificação em `.specs/`. Verificá-la exigiria um `validation.md` próprio, que esta SPEC documental não cria._

## User Stories

### P1 — O visitante entende o produto e é conduzido ao teste grátis

**User Story:** Como visitante interessado em um CRM imobiliário, quero ver na Home o que o SUBSEE oferece, para quem e por quanto, com caminhos claros para testar grátis e conhecer cada módulo.

**Why P1:** É a função da página principal; sem ela o site não tem entrada.

**Acceptance Criteria:**
1. [HOM-01] WHEN o visitante acessa `/`, THEN o sistema SHALL renderizar a página com HTTP 200 e 12 seções dentro de um único `<main>`, nesta ordem: `HeroMain`, `HeroUrbano`, `HeroRural`, `HeroTemporada`, `HeroWebsite`, `HeroCrm`, `HeroIntegrations`, `HeroTestimonials`, `HeroFaq`, `HeroPricing`, `HeroBlog`, `HeroOtherProducts`.
2. [HOM-02] WHEN a página é renderizada, THEN cada seção SHALL expor o seu id: `hero-main`, `imoveis-urbanos`, `imoveis-rurais`, `imoveis-temporada`, `site-hotsites`, `crm-imobiliario`, `integracoes`, `depoimentos`, `duvidas-frequentes`, `precos`, `blog` e `outros-produtos`.
3. [HOM-03] WHEN o hero é renderizado, THEN o sistema SHALL exibir o título "O CRM Imobiliário Completo para Imobiliárias e Corretores", o botão "Testar grátis por 30 dias" apontando para `/testar-gratis/` e o botão "Assista os vídeos do SUBSEE on" apontando para `/assista-os-videos-do-subsee-on/`.
4. [HOM-04] WHEN uma seção de módulo (urbanos, rurais, temporada, sites e hotsites, CRM imobiliário, integrações) é renderizada, THEN o sistema SHALL oferecer o botão "Testar grátis por 30 dias" para `/testar-gratis/` e um botão para o módulo correspondente: `/modulos/crm-imobiliario-urbano/`, `/modulos/crm-imobiliario-rural/`, `/modulos/crm-imobiliario-temporada/`, `/modulos/site-para-imobiliarias-urbanas/`, `/modulos/crm/` e `/modulos/apis-hub-integrador/`, respectivamente.
5. [HOM-05] WHEN a seção de preços é renderizada, THEN o sistema SHALL exibir os planos "Urbano" e "Rural", cada um com a lista de funcionalidades, o preço, o link "Ver todos os recursos inclusos" para `/planos-e-precos/` e o botão "Testar grátis por 30 dias" para `/testar-gratis/`.
6. [HOM-06] WHEN a seção de dúvidas frequentes é renderizada, THEN o sistema SHALL listar 9 perguntas em um acordeão nativo de `<details>`/`<summary>`, que funciona sem JavaScript de hidratação.
7. [HOM-07] WHEN a seção de depoimentos é renderizada, THEN o sistema SHALL exibir 3 depoimentos escritos no próprio componente, de João Calçada (Imobiliária Soma), Marcio Carmona (Carmona Imóveis) e Henrique Benedini (Benedini Fazendas).
8. [HOM-08] WHEN as seções de blog e de outros produtos são renderizadas, THEN o sistema SHALL exibir 3 cards de posts (todos apontando para `blog.sub100sistemas.com.br`) e 2 cards de produtos ("SUB100 Imóveis", para `sub100.com.br`, e "SUB100 Loteadoras e Incorporadas", o SGL, para `sistemasgl.com.br`), cada um com um link externo que abre em nova aba com `target="_blank"` e `rel="noopener"`.

**Independent Test:** abrir `/`, conferir a ordem e os ids das 12 seções e clicar em cada botão para confirmar o destino.

### P2 — A página carrega rápido no primeiro acesso

**User Story:** Como visitante em rede móvel, quero que a Home abra rapidamente, para ver o conteúdo principal sem esperar o carregamento do resto da página.

**Why P2:** A Home é a página de maior tráfego; as decisões abaixo foram tomadas em lotes de performance e precisam ficar registradas.

**Acceptance Criteria:**
1. [HOM-09] WHEN `app/pages/index.vue` é renderizado, THEN o sistema SHALL renderizar `HeroMain` normalmente e as outras 11 seções como componentes `Lazy…` com `hydrate-on-visible`, mantendo no HTML estático o mesmo conteúdo.
2. [HOM-10] WHEN a imagem principal do hero é carregada, THEN o sistema SHALL usá-la via `NuxtPicture` (formatos AVIF e WebP, conforme `image.format` do `nuxt.config.ts`) com `loading="eager"`, largura 711 e altura 794 e SHALL NOT definir `fetchpriority` nela; WHEN uma imagem pertencer às 11 seções abaixo do hero, THEN o sistema SHALL carregá-la com `loading="lazy"`, e `decoding="async"` em todas elas, exceto nos 4 `NuxtPicture` dos mockups de Urbano, Rural, Temporada e Website, que têm apenas `loading="lazy"`. Os ícones e ornamentos decorativos do próprio `HeroMain` não definem `loading`.
3. [HOM-11] WHEN o diagrama de integrações é renderizado, THEN o sistema SHALL injetar o SVG do diagrama sem PNGs embutidos e exibir os 4 ícones de segmento como `<img>` posicionados em porcentagem sobre o diagrama, com `loading="lazy"`, e o contêiner do diagrama SHALL manter `role="img"` com o seu `aria-label`. Abaixo de `tablet-lg` o diagrama fica oculto e é substituído por um grid com os mesmos 4 segmentos.

**Independent Test:** no HTML gerado, conferir os componentes `Lazy`, os atributos do hero e a ausência de PNGs dentro do SVG do diagrama.

### P3 — SEO, semântica e acessibilidade

**User Story:** Como responsável por SEO e acessibilidade, quero metadados e semântica corretos na Home, para que ela seja indexada e utilizável por tecnologias assistivas.

**Why P3:** Importante, mas não bloqueia o uso da página.

**Acceptance Criteria:**
1. [HOM-12] WHEN a página é renderizada, THEN `useSeoMeta` SHALL definir `title` "SUBSEE | CRM Imobiliário completo para imobiliárias e corretores" e `description` "CRM SUBSEE: gestão de imóveis urbanos, rurais, temporada e loteamentos, com site, integrações e automações para imobiliárias e corretores.", com `ogTitle` e `ogDescription` iguais.
2. [HOM-13] WHEN a página é renderizada, THEN o sistema SHALL expor exatamente um `<h1>` (no hero) e um `<h2>` por seção das 11 seguintes, usando `<h3>` para os títulos de blocos internos (funcionalidades, cards de preço, posts e produtos).
3. [HOM-14] WHEN o cabeçalho acompanha a rolagem, THEN a seção do hero SHALL manter o id `hero-main`, que `TheHeader` observa com `IntersectionObserver` para alternar entre os modos normal e fixo.
4. [HOM-15] WHEN uma imagem é decorativa, THEN o sistema SHALL marcá-la com `alt=""` (e `aria-hidden` quando apropriado); WHEN uma imagem transmite conteúdo, THEN o sistema SHALL fornecer um `alt` curto e descritivo em português.

**Independent Test:** inspecionar o HTML renderizado: metadados no `<head>`, contagem de headings, presença de `#hero-main` e atributos `alt`.

## Edge Cases

- WHEN uma seção da Home precisar de centralização, THEN o sistema NÃO SHALL usar `translate-x-*`/`translate-y-*` (AD-007) e SHALL usar flexbox. _Desvio conhecido, não corrigido por esta SPEC documental: `HeroIntegrations.vue` ainda usa `-translate-x-1/2` em 5 pontos (o bloco de título em `tablet-lg` e os pontos das linhas conectoras do grid mobile)._
- WHEN um array ou objeto for passado a um componente, THEN o sistema SHALL declará-lo como `const` tipado em `<script setup>`, e NÃO SHALL escrevê-lo inline no binding do template.
- WHEN um arquivo `.vue` da Home for criado ou editado, THEN o sistema NÃO SHALL conter comentários.
- WHEN uma seção da Home for dividida em outra página, THEN o componente SHALL manter o prefixo `Hero*` e SHALL NOT colidir com o namespace plano de `~/components` (`pathPrefix: false`, AD-004 e AD-010).

## Implicit-Requirement Dimensions

| Dimension | Applies? |
|---|---|
| Persistência / estado | N/A — conteúdo estático; o único estado é o acordeão nativo `<details>` do FAQ |
| Chamadas externas | N/A em tempo de execução — a página não faz requisições de dados; os links externos são navegação |
| Autenticação | N/A — página pública de marketing |
| Pagamentos | N/A — os preços exibidos são informativos |
| Concorrência | N/A |
| Transições de estado | Apenas o acordeão do FAQ; o cabeçalho alterna entre modo normal e fixo conforme `#hero-main` (HOM-14) |
| Acessibilidade | HOM-15; acordeão semântico (HOM-06) |
| Performance | HOM-09, HOM-10 e HOM-11 |

## Requirement Traceability

| Requirement ID | Story | Task | Status |
|---|---|---|---|
| HOM-01 | P1 | — (retroativa) | done |
| HOM-02 | P1 | — (retroativa) | done |
| HOM-03 | P1 | — (retroativa) | done |
| HOM-04 | P1 | — (retroativa) | done |
| HOM-05 | P1 | — (retroativa) | done |
| HOM-06 | P1 | — (retroativa) | done |
| HOM-07 | P1 | — (retroativa) | done |
| HOM-08 | P1 | — (retroativa) | done |
| HOM-09 | P2 | — (retroativa) | done |
| HOM-10 | P2 | — (retroativa) | done |
| HOM-11 | P2 | — (retroativa) | done |
| HOM-12 | P3 | — (retroativa) | done |
| HOM-13 | P3 | — (retroativa) | done |
| HOM-14 | P3 | — (retroativa) | done |
| HOM-15 | P3 | — (retroativa) | done |

ID format: `HOM-NN` · Status values: `pending` | `done` · Coverage: 15 requisitos / 3 stories · Retroativa: sem `tasks.md`; o status `done` significa "já implementado no código atual", não "executado por tarefas".

## Success Criteria

- [x] As 12 seções renderizam na ordem e com os ids documentados (HOM-01, HOM-02)
- [x] Os botões do hero, das seções de módulo e dos preços apontam para os destinos documentados (HOM-03 a HOM-05)
- [x] Os 9 itens do FAQ usam `<details>` nativo (HOM-06)
- [x] Os links de blog e de outros produtos abrem em nova aba com `rel="noopener"` (HOM-08)
- [x] As 11 seções abaixo do hero hidratam sob demanda e as imagens abaixo da dobra são `lazy` (HOM-09, HOM-10)
- [x] Há exatamente um `<h1>` e metadados `title`/`description` definidos (HOM-12, HOM-13)
- [x] Esta SPEC não altera `app/pages/index.vue`, as seções, o layout, o conteúdo, o SEO nem a performance da Home
