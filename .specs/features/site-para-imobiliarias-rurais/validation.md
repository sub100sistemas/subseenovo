# Validation — `site-para-imobiliarias-rurais`

**Verificação:** feita em sessão posterior à implementação, com evidência colhida de novo em 2026-10-02, após as correções do título da Technology e da ordem dos ícones do Listings. As marcações do `tasks.md` e do `spec.md` foram tratadas como não confirmadas até serem reproduzidas.

- **Playwright (Chromium)** contra o servidor de desenvolvimento, que serve o código-fonte atual. Um `pnpm dev` do desenvolvedor estava ativo na porta 3000 e compartilha `.nuxt` e `.output` com o build; por isso a varredura final não usou o build estático. O ruído de HMR e o ícone do DevTools de desenvolvimento não afetaram os resultados.
- **Figma:** capturas dos 11 nodes de seção a 1920px, lado a lado com o site, e comparação de 56 trechos de texto com o manifesto.
- **`pnpm build`, `pnpm generate` e `validate_spec.py`.**

A feature não tem `design.md` (decisão registrada na SPEC: "Profundidade do SPEC: `spec.md` + `tasks.md`").

## Veredito: **PASS with ressalvas**

A feature está funcional, responsiva, com SEO correto e sem regressão na página urbana causada por ela. As ressalvas são visuais (card Loteadoras, alturas de seção) e documentais. Nenhuma foi corrigida nesta validação.

---

## Resumo da evidência

| Verificação | Resultado |
| --- | --- |
| `pnpm build` | Exit 0 ("Build complete"), no código atual, logo depois das duas correções (a primeira tentativa falhou por colisão com o `pnpm dev` ativo; a segunda passou) |
| `pnpm generate` | Exit 0, `Prerendered 772 routes`; rota gerada em `.output/public/modulos/site-para-imobiliarias-rurais/` (executado antes das duas correções, que só alteram classes e ícones de dois componentes) |
| Rota | HTTP 200 em 1920, 1440, 1280, 1024, 992, 768, 576 e 375px |
| Seções | 11, na ordem do Figma: `site-rural-hero`, `-tecnologia`, `-anuncios`, `-ficha-tecnica`, `-internacional`, `-personalizacao`, `-ferramentas`, `-america-do-sul`, `-depoimentos`, `-outros-modulos`, `-faq` |
| Headings | 1 `<h1>`, 10 `<h2>` e 8 `<h3>` |
| Console / HTTP | 0 erros, 0 respostas ≥400, 0 requisições falhas, 0 imagens quebradas, 0 overflow horizontal |
| FAQ | 6 itens `<details>`; abrir leva o item de 91px para 239px, troca "+" por "−", e fechar volta ao estado inicial |
| Navegação | Mega-menu (1440px), menu mobile (375px), card da página urbana para a rural, link de rural para urbanas, link de rural para loteadoras e CTA "Agendar Demonstração" |
| Textos | 56 trechos dos componentes comparados com `FIGMA_CONTENT_MANIFEST_SITE_RURAL.md`, 0 ausentes |
| Higiene do código | Sem `translate-*`, sem comentários, nenhum asset faltando e nenhum duplicado entre `modulos-site-urbano/` e `modulos-site-rural/` |
| `validate_spec.py` | 0 erros e 0 avisos |

---

## Critérios de aceite (10)

**Total: 8 atendidos, 2 parciais, 0 não atendidos.**

| Critério | Evidência | Situação |
| --- | --- | --- |
| P1-1 rota 200 com as 11 seções na ordem do Figma | HTTP 200; [site-para-imobiliarias-rurais.vue:16-26](../../../app/pages/modulos/site-para-imobiliarias-rurais.vue#L16-L26); a ordem confere com a seção "Ordem de render" do manifesto | Atendido |
| P1-2 mega-menu leva à rota | [HeaderBar.vue:60](../../../app/components/layout/HeaderBar.vue#L60). Playwright a 1440px (hover em "Módulos") e a 375px (menu mobile) levam a `/modulos/site-para-imobiliarias-rurais/` | Atendido |
| P1-3 primeiro card da página urbana leva à rota | [SiteUrbanoOtherModules.vue:15](../../../app/components/sections/SiteUrbanoOtherModules.vue#L15). Playwright: o clique leva à rota | Atendido |
| P2-1 cada seção confere com o Figma | Comparação lado a lado a 1920px. Hero, Technology, Listings, Property Details, International, Customization, Tools, South America, Testimonials e FAQ conferem. O card Loteadoras e as alturas de seção ainda diferem (ver "Ressalvas") | **Parcial** |
| P2-2 abaixo de 992px, colunas empilhadas sem overflow | Varredura em 992, 768, 576 e 375px: sem overflow e sem texto cortado | Atendido |
| P2-3 375px sem scroll horizontal | `scrollWidth` 375, igual a `clientWidth` | Atendido |
| P2-4 shells por props e slots | Hero ([SiteRuralHero.vue:10](../../../app/components/sections/SiteRuralHero.vue#L10)), `CrmTechnology` (`:10`), `CrmPortfolio` ([SiteRuralListings.vue:47](../../../app/components/sections/SiteRuralListings.vue#L47)), `LanguageSwitcher` ([SiteRuralInternational.vue:15](../../../app/components/sections/SiteRuralInternational.vue#L15)), `ToolsIntegration` ([SiteRuralTools.vue:34](../../../app/components/sections/SiteRuralTools.vue#L34)), `Testimonials` ([SiteRuralTestimonials.vue:35](../../../app/components/sections/SiteRuralTestimonials.vue#L35)) e `CrmFaq` ([SiteRuralFaq.vue:42](../../../app/components/sections/SiteRuralFaq.vue#L42)) | Atendido |
| P3-1 exatamente um `<h1>` | 1 `<h1>` ("Site para Imobiliárias Rurais") em todas as larguras | Atendido |
| P3-2 `useSeoMeta` com `title`, `description`, `ogTitle` e `ogDescription` no padrão `SUBSEE \| …` | [site-para-imobiliarias-rurais.vue:2-11](../../../app/pages/modulos/site-para-imobiliarias-rurais.vue#L2-L11); os quatro campos estão no HTML | Atendido |
| P3-3 `<h2>` por seção e `<h3>` para features e perguntas de FAQ | `<h2>` em cada seção abaixo do hero e `<h3>` nos 4 itens do Listings e nos 4 do Customization. As perguntas do FAQ usam `<summary>` (via `layout/Faq.vue`), não `<h3>` | **Parcial** |

---

## Edge cases (6)

**Total: 5 atendidos, 1 não atendido.**

| Edge case | Evidência | Situação |
| --- | --- | --- |
| Asset compartilhado referenciado, sem cópia | Tools, ícones de idioma e curva decorativa vêm de `modulos-site-urbano/` e dos ícones `site-urbano-*`; nenhum arquivo de `modulos-site-rural/` é idêntico a um de `modulos-site-urbano/` | Atendido |
| Centralização sem `translate-x/y` (AD-007) | `grep` nos 11 componentes e na página: 0 ocorrências | Atendido |
| Arrays e objetos como `const` tipado | Os arrays dos componentes estão em `<script setup>` (por exemplo `features`, `attributes`, `groups`, `modules`, `faqs`) | Atendido |
| Card "Site para Loteadoras" com badge "breve" e sem link ativo | O card tem link ativo para `/modulos/site-para-loteadoras/` ([SiteRuralOtherModules.vue:22](../../../app/components/sections/SiteRuralOtherModules.vue#L22)), e o badge é lilás pálido e minúsculo ([SiteRuralOtherModules.vue:50-55](../../../app/components/sections/SiteRuralOtherModules.vue#L50-L55)), enquanto o Figma o mostra vermelho com texto branco e o CTA desabilitado | **Não atendido** |
| Extração para `layout/` não altera a página urbana | A página urbana está funcional de 1920 a 576px (11 seções, 1 `<h1>`, console 0, sem overflow); nenhum arquivo `SiteUrbano*`, `layout/` ou `ui/` foi alterado por esta feature | Atendido |
| Sem comentários em arquivos `.vue` | `grep` nos 11 componentes e na página: 0 ocorrências | Atendido |

---

## Conformidade com o Figma

Comparado a 1920px, seção a seção.

- **Technology (corrigida):** a quebra do título ocorre depois de "às" e só "sua imobiliária rural" fica em roxo ([SiteRuralTechnology.vue:21-24](../../../app/components/sections/SiteRuralTechnology.vue#L21-L24)).
- **Listings (corrigida):** os ícones aparecem na ordem documento, gota, quadro e camadas, igual ao Figma, usando os assets existentes `…-descritivo`, `…-mapas`, `…-hidrica` e `…-documentos` ([SiteRuralListings.vue:12-37](../../../app/components/sections/SiteRuralListings.vue#L12-L37)). Os nomes dos arquivos estavam trocados em relação ao glifo que cada um contém.
- **Hero, Property Details, International, Customization, Tools, South America, Testimonials e FAQ:** estrutura, textos e composição conferem.
- **Alturas de seção** (Figma → site, 1920px): variam de −22 a +117px por largura de coluna e altura de texto; Tools é a maior diferença.

---

## Ressalvas

Nenhuma é falha funcional, e **nenhuma foi corrigida nesta validação.**

1. **Card Loteadoras.** O badge e o CTA divergem do Figma e da SPEC: o badge "breve" é lilás pálido e minúsculo (no Figma é vermelho com texto branco), e o CTA está ativo (no Figma é desabilitado). O título também deveria ser roxo no Figma. O link ativo é provável consequência de a página de Loteadoras já existir.
2. **FAQ.** As perguntas usam `<summary>` em vez de `<h3>`, como em todas as páginas que usam `layout/Faq.vue`.
3. **Alturas de seção** diferentes do Figma, sobretudo Tools (+117px).
4. **Logo do 1º depoimento.** O site mostra o logo Carmona, que é o par correto; o Figma mostra o logo Vettore sob o texto de Marcio Carmona, que é um erro do próprio Figma.
5. **FAQ aberto no Figma.** O Figma mostra os 6 itens abertos (estado de design); o site abre sob demanda.

---

## Regressão urbana

**Nenhuma causada por esta feature.**

- O diff do repositório contém só `SiteRuralListings.vue` e `SiteRuralTechnology.vue`; nenhum `SiteUrbano*`, `layout/` ou `ui/` mudou, e nenhum componente urbano importa esses dois arquivos.
- Achado independente, **não relacionado a esta feature**: a página `/modulos/site-para-imobiliarias-urbanas/` tem **5px de overflow horizontal a 375px** (também a 360 e 390px), causado por dois círculos decorativos desfocados na seção `site-urbano-ficha-tecnica`. A página rural não tem o problema. Merece uma tarefa à parte.

---

## Divergências documentais

1. **IDs divergentes entre `spec.md` e `tasks.md`.** `SRU-13` é "SEO" na SPEC (T10) e "Other Modules" nas tasks (T0D); `SRU-14` é "verificação" na SPEC (T11) e "FAQ" nas tasks (T0C).
2. **`tasks.md`.** Só T00 e T0A têm `Status: done`; as outras 14 tarefas estão sem status, T11 não tem evidência registrada, e o cabeçalho cita a branch `feature/site-para-imobiliarias-rurais`, já integrada.
3. **`spec.md`.** Trata a página de Loteadoras como inexistente ("fora de escopo", card "sem link ativo"), mas ela já existe e o card a liga.
4. **Sem `design.md`**, por decisão registrada na SPEC.

---

## Histórico

Correções feitas durante esta validação, ainda sem commit:

- `SiteRuralTechnology.vue` — quebra do título depois de "às" e destaque roxo apenas em "sua imobiliária rural".
- `SiteRuralListings.vue` — ordem dos ícones alinhada ao Figma, com as dimensões de cada asset.

---

## Itens em aberto (fora desta validação)

- Decidir o tratamento do card Loteadoras (badge, título e CTA) e atualizar a SPEC conforme a existência da página.
- Alinhar os IDs `SRU-13` e `SRU-14` entre `spec.md` e `tasks.md` e atualizar os status do `tasks.md`.
- Tratar o overflow de 5px da página urbana a 375px em tarefa separada.
