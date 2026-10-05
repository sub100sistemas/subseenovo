# Validation — `site-para-loteadoras`

**Verificação:** feita em 2026-10-02, em sessão posterior à implementação, e **substitui** a validação de 2026-09-11 (ver "Histórico"). As marcações do `spec.md` (12 requisitos `done`, Success Criteria todos `[x]`) foram tratadas como não confirmadas até serem reproduzidas.

- **Playwright (Chromium)** contra o servidor de desenvolvimento, que serve o código-fonte atual. Um `pnpm dev` do desenvolvedor estava ativo na porta 3000 e compartilha `.nuxt` e `.output` com o build; por isso não repeti `pnpm build` (ver "Build").
- **Figma:** capturas dos 6 nodes de seção a 1920px (page node `3164:32801`), lado a lado com o site.
- A feature não tem `tasks.md` nem `design.md` (decisão registrada na SPEC: "`spec.md` apenas").

## Veredito: **PASS with ressalvas**

A página está funcional, responsiva em 12 larguras (320 a 1920px), com SEO correto e sem regressões nas páginas irmãs. Dos 12 critérios de aceite, **10 estão atendidos e 2 parciais**; os 6 edge cases estão atendidos. As ressalvas são diferenças visuais de baixa prioridade em relação ao Figma, a ausência de `<h3>` e a correção do `<h1>` ainda não commitada. Nenhuma ressalva foi corrigida nesta validação.

---

## Correção do `<h1>` feita durante a validação

- **Problema:** o badge "breve" estava dentro do slot `#heading` do `layout/Hero.vue`, portanto dentro do `<h1>`; o nome acessível do título era "Site para Loteadoras breve".
- **Correção:** `aria-hidden="true"` no `<span>` do badge, em [SiteLoteadorasHero.vue:14-20](../../../app/components/sections/SiteLoteadorasHero.vue#L14-L20). Texto, classes, posição e estrutura do badge não mudaram; `layout/Hero.vue` não foi alterado.
- **Resultado:** o nome acessível do `<h1>` passou a ser **"Site para Loteadoras"** (verificado no `ariaSnapshot` do Playwright e por `getByRole('heading', { level: 1, name: 'Site para Loteadoras', exact: true })`, que encontra 1; nenhum `<h1>` tem o nome contendo "breve"), nas 12 larguras.
- **Badge visualmente idêntico:** capturas da seção Hero antes e depois nas 12 larguras têm **0 pixels diferentes**, e a posição e o tamanho do badge ficaram iguais (por exemplo, 531,220 e 70×25px a 1920px).
- **Limite:** o `textContent` do `<h1>` ainda contém "Site para Loteadoras breve", porque o `<span>` continua dentro do elemento. A correção remove o texto da árvore de acessibilidade, não do DOM.
- **Estado:** a alteração está no working tree e **ainda não foi commitada**.

---

## Resumo da evidência

| Verificação | Resultado |
| --- | --- |
| Rota `/modulos/site-para-loteadoras/` | HTTP 200 em 1920, 1440, 1280, 1024, 992, 768, 576, 414, 390, 375, 360 e 320px |
| Seções | 6, na ordem do Figma: `site-loteadoras-hero`, `-tecnologia`, `-em-breve`, `-outros-modulos`, `-faq`, `-sgl` |
| Headings | 1 `<h1>`, 5 `<h2>`, **0 `<h3>` na página principal** (os 3 `<h3>` da página são do rodapé) |
| Overflow horizontal | **`scrollWidth === clientWidth` nas 12 larguras** |
| Console / HTTP | 0 erros, 0 respostas ≥400, 0 requisições falhas, 0 imagens quebradas, nenhum texto cortado |
| FAQ | 6 itens `<details>`; abrir leva o item de 91px para 187px, troca "+" por "−", e fechar volta ao estado inicial |
| Navegação | Mega-menu (1440px), menu mobile (375px), urbana → loteadoras, rural → loteadoras, loteadoras → urbanas e loteadoras → rurais |
| CTAs | Technology "Agendar Demonstração" → `/agendar-demonstracao/` (atualizado em 2026-10-04; antes "Testar grátis por 30 dias" → `/testar-gratis/`); SGL "Acessar o Sistema SGL" → `https://sistemasgl.com.br/` com `target="_blank"` e `rel="noopener"` |
| Higiene do código | Sem `translate-*`, sem comentários, nenhum asset faltando |
| `validate_spec.py` | 0 erros e 0 avisos |

---

## Critérios de aceite (12)

**Total: 10 atendidos, 2 parciais, 0 não atendidos.**

| Critério | Evidência | Situação |
| --- | --- | --- |
| P1-1 rota 200 com 6 seções na ordem do Figma | HTTP 200; [site-para-loteadoras.vue:16-21](../../../app/pages/modulos/site-para-loteadoras.vue#L16-L21) compõe as 6 seções na ordem do manifesto | Atendido |
| P1-2 mega-menu leva à rota | [HeaderBar.vue:66](../../../app/components/layout/HeaderBar.vue#L66). Playwright a 1440px (hover em "Módulos") e a 375px (menu mobile) levam a `/modulos/site-para-loteadoras/` | Atendido |
| P1-3 cards nas páginas urbana e rural levam à rota e mantêm o badge "breve" | `SiteUrbanoOtherModules.vue` e `SiteRuralOtherModules.vue` têm o `badge: 'breve'` e o href real; Playwright: o clique em cada um leva à página | Atendido |
| P1-4 2 cards ativos (Urbanas, Rurais) | [SiteLoteadorasOtherModules.vue:9-22](../../../app/components/sections/SiteLoteadorasOtherModules.vue#L9-L22); os dois links levam às páginas | Atendido |
| P2-1 cada seção confere com o Figma | Estrutura, textos e composição conferem; as diferenças de altura e de detalhe estão em "Conformidade com o Figma" | **Parcial** |
| P2-2 abaixo de 992px, colunas empilhadas sem overflow | `scrollWidth === clientWidth` em 992, 768, 576, 414, 390, 375, 360 e 320px | Atendido |
| P2-3 375px sem scroll horizontal | 375 / 375 | Atendido |
| P2-4 shells por props e slots | [SiteLoteadorasHero.vue:11](../../../app/components/sections/SiteLoteadorasHero.vue#L11) (`Hero`), [SiteLoteadorasTechnology.vue:10](../../../app/components/sections/SiteLoteadorasTechnology.vue#L10) (`CrmTechnology`) e [SiteLoteadorasFaq.vue:42](../../../app/components/sections/SiteLoteadorasFaq.vue#L42) (`CrmFaq`) | Atendido |
| P2-5 seções bespoke usam tokens de `main.css` | `ComingSoon`, `OtherModules` e `SglOffer` usam `section-py` e `container-page` | Atendido |
| P3-1 exatamente um `<h1>` ("Site para Loteadoras") | 1 `<h1>` nas 12 larguras; após a correção, o nome acessível é "Site para Loteadoras" | Atendido (após correção) |
| P3-2 `useSeoMeta` no padrão `SUBSEE \| Site para Loteadoras — <subtítulo>` | [site-para-loteadoras.vue:2-11](../../../app/pages/modulos/site-para-loteadoras.vue#L2-L11); os quatro campos estão no HTML | Atendido |
| P3-3 `<h2>` por seção e `<h3>` nos cards do Hero e nas perguntas do FAQ | 5 `<h2>` corretos. **0 `<h3>`:** os cards do Hero estão dentro de `card_arrow.png` e as perguntas do FAQ usam `<summary>` (via `layout/Faq.vue`) | **Parcial** |

---

## Edge cases (6)

**Total: 6 atendidos.**

| Edge case | Evidência | Situação |
| --- | --- | --- |
| Ícone de módulo do Hero já existente como asset compartilhado, sem duplicar | [SiteLoteadorasHero.vue:5-6](../../../app/components/sections/SiteLoteadorasHero.vue#L5-L6) referencia `crm-hero-icone-venda.svg` e `crm-hero-icone-lancamentos-glyph.svg`; `modulos-site-loteadoras/` só tem `card_arrow`, `hero-visual`, `sgl-phone-mockup` e `technology-mockup` | Atendido |
| Centralização sem `translate-x/y` (AD-007) | `grep` nos componentes e na página: 0 ocorrências | Atendido |
| Arrays e objetos como `const` tipado | `moduleIcons`, `mockupImgAttrs`, `modules` e `faqs` declarados em `<script setup>` | Atendido |
| Mockup do celular do SGL com transparência real (AD-014) | `sgl-phone-mockup.png` tem canal alfa e 50,1% de pixels transparentes; a validação de 09-11 só o havia confirmado parcialmente | Atendido |
| Badge "breve" mantido nas páginas irmãs | `badge: 'breve'` presente em `SiteUrbanoOtherModules.vue` e `SiteRuralOtherModules.vue` | Atendido |
| Sem comentários em arquivos `.vue` | `grep`: 0 ocorrências | Atendido |

---

## Conformidade com o Figma

Comparado a 1920px, seção a seção. As diferenças abaixo são visuais e **não são tratadas como bugs funcionais**.

- **Conformes:** Technology (idêntica, incluindo o mockup), Hero (foto, badge "breve", curvas e os dois cards "Meu Site" e "Sistema SGL", que vêm dentro de `card_arrow.png`, mais o ícone de canto), Other Modules (estrutura) e a estrutura de ComingSoon, FAQ e SGL.
- **Diferenças reais de baixa prioridade:**
  1. **"Em breve" (ComingSoon):** o painel mede 363px e o do Figma, 452px, e o texto é visivelmente menor.
  2. **Other Modules:** 505px contra 449px; o ícone do card Rurais é uma folha, e no Figma é uma planta.
  3. **SGL:** 451px contra 485px.
  4. **Hero:** as posições dos cards flutuantes e da foto diferem um pouco; a altura é 513px contra 568px do Figma, que inclui o header.
  5. **FAQ:** 1056px contra 1680px, porque o Figma mostra os 6 itens abertos e o site abre sob demanda.

---

## Responsividade

12 larguras (1920, 1440, 1280, 1024, 992, 768, 576, 414, 390, 375, 360 e 320px): HTTP 200, `scrollWidth === clientWidth`, 6 seções, 1 `<h1>`, 5 `<h2>`, console 0, respostas ≥400 0, falhas de requisição 0, imagens quebradas 0 e nenhum texto cortado. Os resultados valem tanto antes quanto depois da correção do `<h1>`.

---

## SEO

[site-para-loteadoras.vue:2-11](../../../app/pages/modulos/site-para-loteadoras.vue#L2-L11) define `title`, `description`, `ogTitle` e `ogDescription` (iguais entre si), no padrão "SUBSEE | Site para Loteadoras — …". O HTML tem os quatro, mais `canonical` e `robots`. Localmente o canonical sai como `localhost:3000` e o `robots` como `noindex, nofollow`, o esperado fora de produção (regra global do `siteUrl`). Não há dados estruturados (JSON-LD), e a SPEC não os exige.

---

## Regressões

**Nenhuma.** As páginas urbana e rural foram reverificadas em 1920, 1280, 992, 768, 414, 375 e 320px: HTTP 200, sem overflow, 11 seções, 1 `<h1>`, console 0 e respostas ≥400 0. Os componentes `SiteLoteadoras*` têm prefixo próprio e não alteram componentes compartilhados, e os links entre as três páginas funcionam nos dois sentidos.

---

## Build

`pnpm build` **não foi repetido**: o `pnpm dev` ativo compartilha `.nuxt` e `.output` e já derrubou um build por colisão durante esta sessão. Última evidência disponível: a validação de 09-11 registra build exit 0 sobre o commit `3546871`, e os builds exit 0 desta sessão já incluíam o código atual da feature (que só mudou nos commits de AVIF e de SEO, ambos de 10-02). A correção do `<h1>` é a adição de um atributo, e a página renderizou sem erros no servidor de desenvolvimento.

---

## Ressalvas

Nenhuma é falha funcional, e **nenhuma foi corrigida nesta validação.**

1. **Ausência de `<h3>`** (P3-3): os cards do Hero estão na imagem e as perguntas do FAQ são `<summary>`, padrão do `layout/Faq.vue` de todo o site. O critério da SPEC para os cards do Hero deixou de ser realizável depois que eles passaram para `card_arrow.png`.
2. **Diferenças visuais de Figma** (ver acima), sobretudo o painel "Em breve", o ícone do card Rurais e as alturas.
3. **`<h1>`:** o `textContent` ainda contém "breve" (só o nome acessível foi corrigido).
4. **Correção do `<h1>` sem commit** e build não repetido.

---

## Divergências documentais

1. **SPEC:** pede `<h3>` para os cards do Hero, que hoje estão na imagem; os 12 requisitos `SLO-01` a `SLO-12` continuam `done`, embora dois critérios sejam parciais.
2. **Sem `tasks.md` e sem `design.md`**, por decisão registrada na SPEC (só "Specify").
3. **A validação anterior (09-11) estava desatualizada**: terminava em FAIL e sua tabela de rastreabilidade ainda tinha `SLO-05` e `SLO-12` como "Needs Fix". Este documento a substitui.

---

## Histórico

**Validação de 2026-09-11** (verificador independente, sobre o commit isolado `3546871`, num worktree): veredito **FAIL**, com duas lacunas:
- **Gap 1 (Major):** o Hero não tinha os dois cards flutuantes, as curvas e o ícone de canto. Corrigido depois: os cards e as curvas pelo commit `39406eb` (Hero reaproveitando a composição foto + `card_arrow.png` + selo), e o ícone de canto pelo `653f136`.
- **Gap 2 (Minor):** sem `<h3>` nas perguntas do FAQ e nos cards do Hero (padrão do `layout/Faq.vue`). **Continua aberto.**
- Mutações do sensor: 3 de 3 mortas. Build exit 0 sobre o commit isolado.

**Alterações posteriores à validação de 09-11:** `39406eb`, `653f136`, `d503130` (AVIF e lazy) e `c8c24ac` (SEO e acessibilidade).

**Correção desta validação, ainda sem commit:** `SiteLoteadorasHero.vue`, `aria-hidden="true"` no badge "breve".

---

## Itens em aberto (fora desta validação)

- Decidir o tratamento do `<h3>` (padrão do `layout/Faq.vue` e cards do Hero em imagem) e atualizar a SPEC.
- Ajustar, se desejado, o painel "Em breve", o ícone do card Rurais e as alturas de SGL e Other Modules.
- Commitar a correção do `<h1>` e repetir `pnpm build` quando o servidor de desenvolvimento estiver parado.

---

## Atualização 2026-10-04 — CTA da seção Technology

O CTA da seção Technology passou de "Testar grátis por 30 dias" (`/testar-gratis/`, default de `CrmTechnology.vue`) para **"Agendar Demonstração" → `/agendar-demonstracao/`**, conforme o Figma atualizado, por um slot `#cta` em `SiteLoteadorasTechnology.vue` (mesmo `CtaButton` primário e classes do default). Verificado no navegador (1440px e 375px): texto e `href` corretos, botão de 270×56 dentro da tela, sem overflow e sem erros de console. O CTA "Acessar o Sistema SGL" não foi alterado.
