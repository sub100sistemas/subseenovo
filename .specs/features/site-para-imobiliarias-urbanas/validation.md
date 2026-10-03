# Validation — `site-para-imobiliarias-urbanas`

**Verificação:** feita em sessão posterior à implementação, com evidência colhida de novo em 2026-10-02. A feature tem só o `spec.md` (não existem `tasks.md` nem `design.md`), e o `spec.md` marca os 17 requisitos como `Pending`; por isso nada do que está documentado foi tratado como confirmado até ser reproduzido contra o código e o Figma.

- **Playwright (Chromium)** contra o servidor de desenvolvimento, que serve o código-fonte atual. Um `pnpm dev` do desenvolvedor estava ativo na porta 3000 e compartilha `.nuxt` e `.output` com o build; por isso não repeti `pnpm build` depois das correções (ver "Build").
- **Figma:** capturas dos 11 nodes de seção a 1920px (frame `3135:7086`), lado a lado com o site, e comparação de 55 trechos de texto com `FIGMA_CONTENT_MANIFEST_SITE_URBANO.md`.
- **Antes e depois das correções:** uma auditoria encontrou dois problemas objetivos e um terceiro, derivado de um deles. As três correções foram aplicadas e revalidadas (ver "Correções feitas durante a validação").

## Veredito: **PASS with ressalvas**

Após as correções, a página está funcional, responsiva em 12 larguras (320 a 1920px) e fiel ao Figma na estrutura e no conteúdo. Os 13 critérios de aceite e os 6 edge cases da SPEC estão atendidos. As ressalvas são visuais de baixa prioridade, documentais, e o fato de as três correções de código ainda **não estarem commitadas** e o build não ter sido repetido depois delas. Nenhuma ressalva foi corrigida nesta validação.

---

## Resumo da evidência

| Verificação | Resultado |
| --- | --- |
| `pnpm build` | Último build exit 0, com o código urbano atual antes das três correções; **não repetido depois** delas (ver "Build") |
| Rota `/modulos/site-para-imobiliarias-urbanas/` | HTTP 200 em 1920, 1440, 1280, 1024, 992, 768, 576, 414, 390, 375, 360 e 320px |
| Seções | 11, na ordem do Figma: `site-urbano-hero`, `-tecnologia`, `-fichas`, `-ficha-tecnica`, `-internacional`, `-personalizacao`, `-ferramentas`, `-tipos-de-imovel`, `-outros-modulos`, `-depoimentos`, `-faq` |
| Headings | 1 `<h1>`, 10 `<h2>` e 8 `<h3>` |
| Overflow horizontal | **`scrollWidth === clientWidth` nas 12 larguras**, depois das correções |
| Console / HTTP | 0 erros, 0 respostas ≥400, 0 requisições falhas, 0 imagens quebradas |
| FAQ | 6 itens `<details>`; abrir leva o item de 91px para 239px, troca "+" por "−", e fechar volta ao estado inicial |
| Navegação | Mega-menu (1440px), menu mobile (375px), CTA da seção Website da Home, cards de Outros módulos (rurais e loteadoras) e CTA "Agendar Demonstração" |
| Textos | 55 trechos dos componentes comparados com o manifesto: 54 conferem; 1 (parágrafo extra do Customization) não estava no Figma e foi removido |
| Higiene do código | Sem `translate-*`, sem comentários, nenhum asset faltando; 38 ícones `site-urbano-*` e 13 imagens em `modulos-site-urbano/` |
| `validate_spec.py` | 0 erros e 0 avisos |

---

## Critérios de aceite (13)

**Total: 13 atendidos** (12 desde a auditoria e 1 depois da correção do Customization).

| Critério | Evidência | Situação |
| --- | --- | --- |
| P1-1 rota 200 | HTTP 200 nas 12 larguras; [site-para-imobiliarias-urbanas.vue:16-26](../../../app/pages/modulos/site-para-imobiliarias-urbanas.vue#L16-L26) compõe as 11 seções na ordem do Figma | Atendido |
| P1-2 Hero | [SiteUrbanoHero.vue:20-27](../../../app/components/sections/SiteUrbanoHero.vue#L20-L27) (H1 e descrição), `:31-66` (foto, `card_arrow.png` com os cards "Publicação integrado" e "Meu Site", selo do canto), `:4-9` (ícones de categoria). Confere com o node `3135:7088`. A SPEC cita "ícones de redes sociais" e "CTA principal", que o Hero do Figma não tem | Atendido (conforme o Figma; a SPEC está imprecisa) |
| P1-3 Sites Showcase | [SiteUrbanoTechnology.vue:19-27](../../../app/components/sections/SiteUrbanoTechnology.vue#L19-L27): H2, descrição, CTA "Testar grátis por 30 dias" (do `CrmTechnology`) e mockup com o site IDEAL e os 3 cards | Atendido |
| P1-4 Technology Property | [SiteUrbanoListings.vue:10-43](../../../app/components/sections/SiteUrbanoListings.vue#L10-L43) (4 features), `:47` (CTA "Agendar Demonstração"), `:58-69` (mockup com os indicadores). A ordem dos ícones confere com o Figma | Atendido |
| P2-1 Technology Mobile | [SiteUrbanoPropertySheet.vue:7-23](../../../app/components/sections/SiteUrbanoPropertySheet.vue#L7-L23): 15 atributos com ícone. O código usa "Visto" e "Ano de construção"; o Figma tem "Visto" e "Ano **do** construção" (erro de digitação do Figma, corrigido no código) | Atendido |
| P2-2 International | [SiteUrbanoInternational.vue:4-27](../../../app/components/sections/SiteUrbanoInternational.vue#L4-L27): 6 idiomas com bandeira, texto e cadeia de logos (via `LanguageSwitcher`) | Atendido |
| P2-3 Control (Customization) | [SiteUrbanoCustomization.vue:10-43](../../../app/components/sections/SiteUrbanoCustomization.vue#L10-L43): 4 features, H2, descrição e mockup. **O parágrafo extra "Com ferramentas simples e intuitivas…", que não existia no Figma nem no manifesto, foi removido** (a seção hoje bate com o Figma) | Atendido (após correção) |
| P2-4 Tools | [SiteUrbanoTools.vue:4-49](../../../app/components/sections/SiteUrbanoTools.vue#L4-L49): label "Simples de configurar", 3 passos e diagrama (via `ToolsIntegration`) | Atendido |
| P2-5 Property Types | [SiteUrbanoPropertyTypes.vue:10-46](../../../app/components/sections/SiteUrbanoPropertyTypes.vue#L10-L46): 5 categorias com foto e rótulo, em 3 grupos escalonados | Atendido |
| P3-1 Other Modules | [SiteUrbanoOtherModules.vue:10-24](../../../app/components/sections/SiteUrbanoOtherModules.vue#L10-L24): 2 cards com CTA "Clique aqui →"; os hrefs `/modulos/site-para-imobiliarias-rurais/` e `/modulos/site-para-loteadoras/` levam às páginas, que já existem. O badge diz "breve", como no Figma, e não "BETA", como na SPEC | Atendido |
| P3-2 Testimonials | [SiteUrbanoTestimonials.vue:22](../../../app/components/sections/SiteUrbanoTestimonials.vue#L22): `crm-urbano-marcio-carmona` e `crm-geral-mauro-alencar`; os dois cards têm altura igual e 5 estrelas. Os cargos nos dados são "Diretor", e a SPEC diz "Sócio" e "Sócio-Diretor" | Atendido (cargos conforme o Figma e o manifesto) |
| P3-3 FAQ | [SiteUrbanoFaq.vue:7-37](../../../app/components/sections/SiteUrbanoFaq.vue#L7-L37) e `:42-44`: título "Perguntas Frequentes", subtítulo e 6 perguntas no accordion | Atendido |
| P3-4 estado do FAQ | Playwright: item aberto muda de 91px para 239px, o ícone "+" some e o "−" aparece, e fechar volta ao estado inicial | Atendido |

---

## Edge cases (6)

**Total: 6 atendidos** (5 desde a auditoria e 1 depois das correções de overflow).

| Edge case | Evidência | Situação |
| --- | --- | --- |
| Abaixo de 576px, sem overflow, sem elementos cortados e sem sobreposição | Depois das correções, `scrollWidth === clientWidth` em 575 a 320px (576, 414, 390, 375, 360 e 320). Ver "Correções feitas durante a validação" | Atendido (após correção) |
| Adaptação fluida sem inventar layout nem reduzir conteúdo | Todas as seções empilham e reduzem sem perda de conteúdo | Atendido |
| Rota de módulo irmão com o href real esperado | Os dois links apontam para as rotas reais, que hoje existem e respondem 200 | Atendido |
| Prefixo `SiteUrbano` contra colisão de nomes (AD-004) | Os 11 componentes têm o prefixo; o build passa e a página renderiza as 11 seções | Atendido |
| Um único `<h1>`, sem repetição entre variantes responsivas | 1 `<h1>` ("Site para Imobiliárias Urbanas") nas 12 larguras | Atendido |
| Sem `translate-x/y` (AD-007) | `grep` nos 11 componentes e na página: 0 ocorrências (nem comentários) | Atendido |

---

## Correções feitas durante a validação

Detectado na auditoria inicial e corrigido em seguida, por pedido do desenvolvedor. **As três correções estão no working tree e ainda não foram commitadas.**

1. **Overflow horizontal de 5px em 375px** (também 360 e 390px, e +16px em 320px).
   - **Causa:** dois círculos decorativos desfocados na seção `site-urbano-ficha-tecnica` (`left:23% + width:83%` e `left:12% + width:94%`, ou seja, 106% da largura do container), mais 5 fotos de 64px em `site-urbano-tipos-de-imovel`, que passam de 320px.
   - **Origem:** a geometria horizontal dos círculos vem do commit `90fce1c` (2026-09-10), da própria feature; não foi introduzida por nenhuma alteração posterior.
   - **Correção:** `overflow-x-clip` nas duas `<section>` ([SiteUrbanoPropertySheet.vue:27](../../../app/components/sections/SiteUrbanoPropertySheet.vue#L27) e [SiteUrbanoPropertyTypes.vue:50](../../../app/components/sections/SiteUrbanoPropertyTypes.vue#L50)), que corta só o eixo horizontal, na borda da janela.
   - **Verificação:** `scrollWidth === clientWidth` em 1920, 1440, 1280, 1024, 992, 768, 576, 414, 390, 375, 360 e 320px. Comparação de capturas das duas seções antes e depois, em 1920, 1440, 1024, 768, 375 e 320px (Property Types) e em 1920, 1024, 768 e 375px (ficha técnica): **0 pixels diferentes em todas**. A altura das 11 seções não mudou.
2. **Parágrafo inventado no Customization.** O texto "Com ferramentas simples e intuitivas, ajuste textos, banners, imagens e seções do site sem depender de agências ou equipes técnicas." não existe no Figma nem no manifesto (origem: commit `ced81f0`). Foi removido o bloco `#summary` de [SiteUrbanoCustomization.vue](../../../app/components/sections/SiteUrbanoCustomization.vue). A seção passou de 789px para 705px a 1920px (o Figma tem 664px), e o resto ficou igual.

---

## Conformidade com o Figma

Comparado a 1920px, seção a seção.

- **Conformes:** Hero, Showcase, Listings, Property Sheet, International, Customization (depois da correção), Tools, Property Types (estrutura), Testimonials e FAQ.
- **Alturas de seção** (Figma → site, 1920px): variam de −98px a +50px por largura de coluna e altura de texto; Property Sheet (806 → 706) e Property Types (880 → 927) são as maiores.

---

## Ressalvas

Nenhuma é falha funcional, e **nenhuma foi corrigida nesta validação.**

1. **Other Modules.** O ícone do card "Site para Imobiliárias Rurais" é uma folha, e o Figma mostra uma planta; o badge "breve" é lilás pálido e minúsculo, e no Figma é vermelho com texto branco.
2. **Property Types.** Os rótulos sobre as fotos ("Terreno", "Lazer"…) são bem menores que no Figma.
3. **Alturas de seção** diferentes do Figma (ver acima).
4. **Testimonials.** O título quebra em 4 linhas no site e em 3 no Figma, por coluna mais estreita (do `layout/Testimonials.vue` compartilhado).
5. **FAQ.** O Figma mostra os 6 itens abertos (estado de design); o site abre sob demanda, e as perguntas usam `<summary>`, como em todas as páginas que usam `layout/Faq.vue`.
6. **320px.** Com o corte horizontal, as fotos de Property Types ainda aparecem cortadas nas bordas (a primeira e a última, em cerca de 16px cada). Isso já era assim; antes a página só ganhava rolagem horizontal. O Figma não tem frame de 320px.
7. **Correções sem commit e build não repetido** (ver "Build").

---

## Build

O `pnpm build` mais recente terminou com **exit 0** (`Build complete`) com o código urbano anterior às três correções (os arquivos `SiteUrbano*` não mudavam desde `c8c24ac`). **Não foi repetido depois das correções**, porque o `pnpm dev` do desenvolvedor, ativo na porta 3000, compartilha `.nuxt` e `.output` e já derrubou um build por colisão durante esta sessão. As três alterações são de classes e remoção de um bloco de template, e a página renderizou sem erros no servidor de desenvolvimento.

---

## SEO

[site-para-imobiliarias-urbanas.vue:2-11](../../../app/pages/modulos/site-para-imobiliarias-urbanas.vue#L2-L11) define `title`, `description`, `ogTitle` e `ogDescription` (iguais entre si), no padrão "SUBSEE | …". O HTML tem os quatro, mais `canonical` e `robots`. Localmente o canonical sai como `localhost:3000` e o `robots` como `noindex, nofollow`, que é o esperado fora de produção (regra global do `siteUrl`). Não há `og:url` na página (SEO global, fora desta feature). A SPEC não exige metadados de SEO.

---

## Regressões

**Nenhuma causada pela feature.** Os links de entrada continuam funcionando: [HeaderBar.vue:54](../../../app/components/layout/HeaderBar.vue#L54), [HeroWebsite.vue:95](../../../app/components/sections/HeroWebsite.vue#L95) e o card em [SiteRuralOtherModules.vue:15](../../../app/components/sections/SiteRuralOtherModules.vue#L15). Nenhum link para `/modulos/sites` restou no código. A página rural não tem o overflow de 360 a 390px.

---

## Divergências documentais

1. **Sem `tasks.md` e sem `design.md`**, embora a SPEC mapeie os requisitos para tarefas T1 a T13.
2. **Rastreabilidade:** os 17 requisitos `SU-01` a `SU-17` continuam `Pending`, e os 6 itens de Success Criteria continuam desmarcados.
3. **Nomes de componentes:** a SPEC cita `SiteUrbanoSitesShowcase` e `SiteUrbanoPropertyTech`; o código tem `SiteUrbanoTechnology`, `SiteUrbanoListings`, `SiteUrbanoPropertySheet` e `SiteUrbanoCustomization`.
4. **Other Modules:** a SPEC pede badge "BETA" e links "mesmo que retornem 404"; o código usa "breve" (igual ao Figma) e as duas páginas já existem.
5. **Cargos:** a SPEC diz "Sócio" e "Sócio-Diretor"; os dados e o manifesto dizem "Diretor".
6. **Links genéricos:** a SPEC diz que `HeaderBar` e `HeroWebsite` apontam para `/modulos/sites`; hoje apontam para esta página.
7. **Hero:** a SPEC menciona "ícones de redes sociais" e "CTA principal", que o Figma não tem.
8. **Premissas:** duas linhas do quadro de premissas estão `n (verificar na implementação)`, apesar de `Open questions: none`.

---

## Histórico

Correções feitas durante esta validação, ainda sem commit:

- `SiteUrbanoPropertySheet.vue` — `overflow-x-clip` na seção da ficha técnica.
- `SiteUrbanoPropertyTypes.vue` — `overflow-x-clip` na seção de tipos de imóvel.
- `SiteUrbanoCustomization.vue` — remoção do parágrafo que não existe no Figma.

---

## Itens em aberto (fora desta validação)

- Decidir o tratamento do badge e do ícone do card Rurais em Other Modules, e do tamanho dos rótulos de Property Types.
- Atualizar a SPEC (nomes, cargos, "breve", links, Hero) e criar ou dispensar formalmente `tasks.md`/`design.md`; marcar os status `SU-01` a `SU-17` e o Success Criteria.
- Repetir `pnpm build` quando o servidor de desenvolvimento estiver parado.
- Commitar as três correções.
