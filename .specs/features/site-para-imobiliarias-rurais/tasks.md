# Tasks — Site para Imobiliárias Rurais

Branch: `feature/site-para-imobiliarias-rurais` · Gate por tarefa: `pnpm build` verde + conferência visual contra o node Figma.

## Gate Check Commands

```bash
nvm use 22.22.0
pnpm build
pnpm dev   # + captura Playwright em 1440/992/768/375
```

## Execution Plan

### Fase 0 — Base compartilhada

**T00: Extrair `layout/ToolsIntegration.vue` e `layout/LanguageSwitcher.vue`** — `SRU-03`
Promove as duas seções idênticas para `layout/`; converte `SiteUrbanoTools.vue` e `SiteUrbanoInternational.vue` em wrappers finos.
Depends on: —
Tests: página urbana visualmente inalterada em 1440 e 768.
Gate: `pnpm build` + comparação das duas seções antes/depois.
Status: **done** (commit `9b61ee8`)

### Fase 1 — Conteúdo e assets

**T0A: Manifest de conteúdo** — suporte
`FIGMA_CONTENT_MANIFEST_SITE_RURAL.md` com as 11 seções, nodes, copy literal e inventário de assets.
Depends on: —
Status: **done**

**T0B: Baixar assets do Figma**
Hero (foto + vetores), Technology (mockup), Listings (mockup + 4 ícones), Property Details (celular composto + 11 ícones), Customization (mockup + 4 ícones), South America (5 fotos + 5 bandeiras + curva), Other Modules (2 ícones).
Imagens em `public/images/modulos-site-rural/`; ícones em `public/icons/site-rural-*`.
Não duplicar os assets já existentes de International e Tools.
Depends on: T0A

### Fase 2 — Seções que reutilizam shells existentes

**T01: `SiteRuralHero.vue`** — `SRU-04` · wrap `layout/Hero.vue` · node `3164:26826`
**T02: `SiteRuralTechnology.vue`** — `SRU-05` · wrap `sections/CrmTechnology.vue` · node `3164:26868`
**T03: `SiteRuralListings.vue`** — `SRU-06` · wrap `sections/CrmPortfolio.vue` · node `3164:27608`
**T05: `SiteRuralInternational.vue`** — `SRU-08` · wrap `layout/LanguageSwitcher.vue` · node `3164:30610`
**T06: `SiteRuralCustomization.vue`** — `SRU-09` · wrap `sections/CrmPortfolio.vue` · node `3164:31638`
**T07: `SiteRuralTools.vue`** — `SRU-10` · wrap `layout/ToolsIntegration.vue` · node `3164:31847`
**T09: `SiteRuralTestimonials.vue`** — `SRU-12` · wrap `layout/Testimonials.vue` · node `3164:32221`
**T0C: `SiteRuralFaq.vue`** — `SRU-14` · wrap `sections/CrmFaq.vue` · node `3164:32428`

Depends on: T00, T0B
Tests por tarefa: seção confere com o node Figma em 1440 e empilha sem overflow em 375.
Gate: `pnpm build`.

### Fase 3 — Seções com markup próprio

**T04: `SiteRuralPropertyDetails.vue`** — `SRU-07` · node `3164:28095`
Duas colunas: celular 378×641 à esquerda, conteúdo + grid de 11 atributos (3 colunas, cards 276×49, `rounded-[10px]`, borda `#dddddd`) à direita.

**T08: `SiteRuralSouthAmerica.vue`** — `SRU-11` · node `3164:31952`
Heading centralizado + 5 cards de imagem com alturas escalonadas alinhados pela base, badge de bandeira sobreposto, curva decorativa.

**T0D: `SiteRuralOtherModules.vue`** — `SRU-13` · node `3164:29825`
Dois cards horizontais: urbanas (ativo) e loteadoras (badge "breve", sem link).

Depends on: T0B
Gate: `pnpm build` + conferência visual.

### Fase 4 — Página e verificação

**T10: `app/pages/modulos/site-para-imobiliarias-rurais.vue`** — `SRU-01`, `SRU-02`, `SRU-13`
`useSeoMeta` no padrão Variante B + `<main>` com as 11 seções na ordem do Figma.
Depends on: todas as seções.

**T11: Verificação final** — `SRU-14`
Captura em 1440/992/768/375, comparação seção a seção com o Figma e correção das diferenças. Regressão da página urbana. Auditorias: um `<h1>`, zero `translate-`, zero comentários, sem assets duplicados.
Depends on: T10

## Test Coverage Matrix

| Requisito | Verificação |
|---|---|
| SRU-01, SRU-02 | Navegação pelos dois pontos de entrada retorna 200 |
| SRU-03 | Página urbana pixel-idêntica antes/depois da extração |
| SRU-04 … SRU-14 | Screenshot da seção vs `get_screenshot` do node Figma |
| SRU-13 | Contagem de headings no HTML renderizado + inspeção das meta tags |
| Todos | `pnpm build` verde |
