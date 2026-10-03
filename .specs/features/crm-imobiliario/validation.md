# Validation — `crm-imobiliario`

**Verificação:** feita em 2026-10-02, em sessão posterior à implementação, e **substitui a validação de 2026-09-08**, que estava desatualizada (ver "Histórico"). Esta é a validação baseada no **runtime atual**: nenhum item da SPEC ou do `tasks.md` foi tratado como confirmado até ser reproduzido contra o código e o Figma.

- **Playwright (Chromium)** contra o servidor de desenvolvimento, que serve o código-fonte atual. Um `pnpm dev` do desenvolvedor estava ativo na porta 3000 e compartilha `.nuxt` e `.output` com o build; por isso não repeti `pnpm build` (ver "Build").
- **Figma:** capturas dos 9 nodes de seção a 1920px, lado a lado com o site, e conferência com `FIGMA_CONTENT_MANIFEST_CRM.md`.

## Veredito: **PASS with ressalvas**

A página está funcional, responsiva em 12 larguras (320 a 1920px), com SEO correto e fiel ao Figma na estrutura e no conteúdo. Os 13 critérios de aceite e os 3 edge cases da SPEC estão atendidos. A auditoria encontrou **um defeito técnico objetivo (24 avisos de console)**, já corrigido. As ressalvas são visuais de baixa prioridade, documentais, e o fato de a correção ainda **não estar commitada**. Nenhuma ressalva foi corrigida nesta validação.

---

## Correção feita durante a validação

**Problema:** toda carga de `/modulos/crm/` gerava **24 avisos de console** em todas as larguras: 12 `Failed parsing 'srcset' attribute value since its 'w' descriptor is invalid` e 12 `Dropped srcset candidate "…publishing-mockup-*.png"` (4 imagens × 3 ocorrências). Só a seção Publishing tinha o problema; as páginas urbana e loteadoras, no mesmo teste, têm console 0. O defeito vem do commit inicial `2044cf6`.

**Causa:** em [CrmPublishing.vue:48](../../../app/components/sections/CrmPublishing.vue#L48), `sizes="45vw tablet-lg:280px"` tinha o primeiro valor sem prefixo de breakpoint. O `@nuxt/image` o tratava como largura 0 e gerava o candidato `…png 0w` no `srcset` das 4 imagens, que o navegador descartava (as imagens renderizavam normalmente com os outros candidatos).

**Correção:** `sizes="mobile-lg:45vw tablet-lg:280px"`, o padrão do restante do projeto.

**Resultado, nas 12 larguras (1920, 1440, 1280, 1024, 992, 768, 576, 414, 390, 375, 360 e 320px):**
- **Console 0** (antes: 24 avisos).
- **0 candidatos `0w`** (antes: 4 imagens com `0w`).
- **HTTP 200**, respostas ≥400: 0, falhas de requisição: 0, imagens quebradas: 0.
- **`scrollWidth === clientWidth`** e **1 `<h1>`**.
- **`srcset` antes:** `560w…0w, 280w, 560w`. **Depois:** `259w, 280w, 518w, 560w`, todos válidos. O atributo `sizes` renderizado continua `(max-width: 991px) 45vw, 280px`.

**Diferença visual nos mockups em telas pequenas** (capturas da seção Publishing antes e depois):

| Largura | Pixels diferentes (soma de canais >24) |
| --- | --- |
| 1920, 1440, 1280, 1024, 992, 768, 576 | **0** (idêntico) |
| 414 | 2,5% |
| 390 | 7,1% |
| 375 | 3,9% |
| 360 | a seção ficou **1px mais alta** (913px, antes 912px) |
| 320 | 7,5% |

Essa diferença é **consequência da seleção de um candidato válido do `srcset`, não um problema de layout**: com o `srcset` corrigido, o navegador em telas pequenas escolhe o candidato de 259px de largura (antes escolhia o de 280px), e a imagem, exibida entre 132 e 179px, é reduzida de forma ligeiramente diferente. O mapa de diferenças fica nos contornos e nos textos finos dos mockups; layout, cores, posições e conteúdo permanecem iguais. O 1px de altura a 360px vem da proporção do arquivo de 259px. Em larguras ≥576px, onde o candidato escolhido não mudou, a comparação deu **0 pixels diferentes**.

**Estado:** a alteração está no working tree e **ainda não foi commitada**.

---

## Resumo da evidência

| Verificação | Resultado |
| --- | --- |
| Rota `/modulos/crm/` | HTTP 200 em 1920, 1440, 1280, 1024, 992, 768, 576, 414, 390, 375, 360 e 320px |
| Seções | 9, na ordem do Figma: `crm-hero`, `-tecnologia`, `-all-in-one`, `-publicacao-integrada`, `-integracoes`, `-publishing`, `-depoimentos`, `-outros-modulos`, `-duvidas-frequentes` |
| Headings | 1 `<h1>` ("CRM Completo para Imobiliárias"), 8 `<h2>` e 9 `<h3>` (6 do All-in-One e 3 do Overview); as perguntas do FAQ usam `<summary>` |
| Overflow horizontal | **`scrollWidth === clientWidth` nas 12 larguras**, sem texto cortado |
| Console / HTTP | **console 0 (após a correção)**, 0 respostas ≥400, 0 requisições falhas, 0 imagens quebradas |
| FAQ | 6 itens `<details>`; abrir leva o item de 91px para 187px, troca "+" por "−", e fechar volta ao estado inicial |
| Navegação | Mega-menu (1440px), menu mobile (375px), CTA da Home (`HeroCrm`), e os 3 links de Outros módulos (urbano, rural e temporada) |
| CTAs | Os 3 "Testar grátis por 30 dias" (Technology, All-in-One e Integrations) apontam para `/testar-gratis/` |
| Higiene do código | Sem `translate-*`, sem comentários |
| `validate_spec.py` | 0 erros e 0 avisos |

---

## Critérios de aceite (13)

**Total: 13 atendidos**, com três divergências de redação da SPEC (ver "Divergências documentais").

| Critério | Evidência | Situação |
| --- | --- | --- |
| P1-1 rota 200 | HTTP 200 nas 12 larguras; [crm.vue:14-22](../../../app/pages/modulos/crm.vue#L14-L22) compõe as 9 seções na ordem do Figma | Atendido |
| P1-2 Hero | [CrmHero.vue:33-85](../../../app/components/sections/CrmHero.vue#L33-L85): H1, descrição, foto, `card_arrow.png` (cards "Agendar uma visita", "Fazer uma proposta" e o card de Paulo Henrique Silva), 5 ícones de categoria e o selo do canto. A SPEC já registra que o Hero do Figma não tem CTA | Atendido |
| P1-3 Technology | [CrmTechnology.vue:96-100](../../../app/components/sections/CrmTechnology.vue#L96-L100): mockup estático e CTA "Testar grátis por 30 dias" → `/testar-gratis/`; a SPEC cita "Agendar Demonstração" | Atendido (SPEC desatualizada) |
| P1-4 All-in-One | [CrmAllInOne.vue:8-39](../../../app/components/sections/CrmAllInOne.vue#L8-L39): 6 cards e CTA | Atendido |
| P1-5 CTA da Home | Playwright: `HeroCrm` leva a `/modulos/crm/` | Atendido |
| P2-1 Overview | [CrmOverview.vue:8-27](../../../app/components/sections/CrmOverview.vue#L8-L27): 3 cards | Atendido |
| P2-2 Integrations | [CrmIntegrations.vue:52-64](../../../app/components/sections/CrmIntegrations.vue#L52-L64): ícones (WhatsApp, Meta, RD Station) e CTA | Atendido |
| P2-3 Publishing | [CrmPublishing.vue:7-24](../../../app/components/sections/CrmPublishing.vue#L7-L24): 4 mockups | Atendido |
| P3-1 Testimonials | [CrmTestimonials.vue:22](../../../app/components/sections/CrmTestimonials.vue#L22): `crm-geral-cleveson-costa` e `crm-geral-mauro-alencar` | Atendido |
| P3-2 Other Modules | [CrmOtherModules.vue:9-28](../../../app/components/sections/CrmOtherModules.vue#L9-L28): 3 cards com links reais; o CTA é "Clique aqui →" (igual ao Figma), e a SPEC cita "Explorar". Os três links levam às páginas | Atendido (SPEC desatualizada) |
| P3-3 FAQ | 6 itens `<details>` com perguntas e respostas | Atendido |
| P3-4 estado do FAQ | Item aberto: 91px → 187px, "+" some e "−" aparece; a SPEC diz "rotação do chevron" (AD-008 trocou por "+/−") | Atendido (SPEC desatualizada) |
| P3-5 mega-menu | [HeaderBar.vue:25](../../../app/components/layout/HeaderBar.vue#L25); Playwright a 1440px (hover em "Módulos") e a 375px (menu mobile) levam a `/modulos/crm/` | Atendido |

---

## Edge cases (3)

**Total: 3 atendidos.**

| Edge case | Evidência | Situação |
| --- | --- | --- |
| Abaixo de 576px, sem overflow horizontal | `scrollWidth === clientWidth` em 576, 414, 390, 375, 360 e 320px | Atendido |
| Rota irmã com href real | Os 3 links de Outros módulos apontam para `/modulos/crm-imobiliario-urbano/`, `-rural/` e `-temporada/`, que hoje existem e respondem 200 | Atendido |
| Prefixo `Crm` contra colisão de nomes | Os 9 componentes têm o prefixo; o build passa e a página renderiza as 9 seções | Atendido |

---

## Conformidade com o Figma

Comparado a 1920px, seção a seção.

- **Conformes:** Hero (composição com foto, cards e curvas, mais o selo de pessoas do canto, descrito no manifesto), Technology (mockup e CTA), Overview (estrutura), Integrations (composição das bolhas), Publishing (4 mockups com os fundos coloridos), Testimonials, Other Modules e FAQ.
- **Diferenças visuais** (nenhuma é bug; **nenhuma foi corrigida**):
  - **All-in-One:** o painel mede 868px contra 1030px no Figma, com texto e ícones menores, e o CTA do site é um botão branco cheio, enquanto o do Figma é contornado.
  - **Overview:** 625px contra 757px; os cards são mais baixos e com texto menor.
  - **Technology:** o título cabe numa linha no site e em duas no Figma (1043px contra 1095px).
  - **Integrations:** o título quebra em 3 linhas no site e em 2 no Figma (692px contra 676px).
  - **Publishing:** 790px contra 717px. **Other Modules:** 661px contra 566px.
  - **Testimonials:** 766px contra 768px; o título quebra em 4 linhas contra 3.
  - **FAQ:** o Figma mostra os itens abertos, e o site abre sob demanda (1026px contra 1660px).

---

## Responsividade

12 larguras (1920, 1440, 1280, 1024, 992, 768, 576, 414, 390, 375, 360 e 320px): HTTP 200, `scrollWidth === clientWidth`, 9 seções, 1 `<h1>`, 8 `<h2>`, 0 imagens quebradas, ≥400 0 e falhas 0, e nenhum texto cortado. O console estava em 24 avisos por carga antes da correção e está em **0** depois. A SPEC afirmava que a responsividade tinha sido "verificada por revisão estrutural de código, sem navegador real"; agora está **verificada em runtime** nas 12 larguras.

---

## SEO

[crm.vue:2-9](../../../app/pages/modulos/crm.vue#L2-L9) define `title`, `description`, `ogTitle` e `ogDescription` (iguais entre si), no padrão "SUBSEE | CRM Completo para Imobiliárias". O HTML tem os quatro, mais `canonical` e `robots`. Localmente o canonical sai como `localhost:3000` e o `robots` como `noindex, nofollow`, o esperado fora de produção (regra global do `siteUrl`). Não há dados estruturados (JSON-LD), e a SPEC não os exige.

---

## Regressões

Nenhuma. A correção do `sizes` afeta só a seção Publishing desta página, e nenhum shell compartilhado (`CrmTechnology`, `CrmFaq`, `CrmPortfolio`, `layout/*`) foi alterado. Os links de Outros módulos levam às páginas urbana, rural e temporada, com o H1 certo.

---

## Build

`pnpm build` **não foi repetido**: o `pnpm dev` ativo compartilha `.nuxt` e `.output` e já derrubou um build por colisão durante esta sessão. Última evidência disponível: builds com exit 0 durante esta sessão incluíam a página `/modulos/crm` com o código anterior à correção do `sizes`, e a alteração desta validação é a de um atributo de uma linha, que renderizou sem erros no servidor de desenvolvimento.

---

## Ressalvas

Nenhuma é falha funcional, e **nenhuma foi corrigida nesta validação.**

1. **Diferenças visuais de Figma** (ver acima), sobretudo All-in-One, Overview e as alturas de Other Modules e Publishing.
2. **Reamostragem dos mockups em telas pequenas** (414 a 320px) e 1px de altura a 360px, por efeito de a correção do `srcset` selecionar um candidato válido de 259px; não é problema de layout.
3. **FAQ** em `<summary>` em vez de `<h3>`, padrão do `layout/Faq.vue` de todo o site.
4. **Correção do `sizes` sem commit** e build não repetido.

---

## Divergências documentais

1. **CTA da Technology:** a SPEC diz "Agendar Demonstração"; o código e o Figma usam "Testar grátis por 30 dias".
2. **CTA dos cards de Outros módulos:** a SPEC diz "Explorar"; o código e o Figma usam "Clique aqui →".
3. **Estado do FAQ:** a SPEC diz "rotação do chevron"; o código usa os ícones "+" e "−" (AD-008).
4. **`tasks.md` e `design.md`:** `Status: Draft` e aviso de que o diretório "não é um repositório git", embora o projeto já esteja no Git.
5. **SPEC:** os 14 requisitos `CRM-01` a `CRM-14` e o Success Criteria estão marcados como concluídos com base numa verificação "estrutural".

---

## Histórico

**Validação de 2026-09-08** (verificador independente, **antes de o projeto estar em Git**, por revisão de código): veredito "Ready", com `pnpm build` falhando por `AD-005` (Node 20) e responsividade verificada só estruturalmente, sem navegador. Registrou quatro lacunas de precisão da SPEC, que continuam valendo como divergências documentais (CRM-03, CRM-07, CRM-10 e o Hero sem CTA em CRM-02/05), e a correção do texto do AC4 (6 cards, não 4), já feita na SPEC.

**Por que estava desatualizada:** foi feita antes dos commits de refatoração do Hero (`c07afef`, `d6dcf85`), de AVIF e lazy-load (`d503130`) e de SEO e acessibilidade (`c8c24ac`), e antes de a máquina migrar para Node 22 (AD-006), então o build agora passa. Esta validação a substitui.

**Correção desta validação, ainda sem commit:** `CrmPublishing.vue`, `sizes="mobile-lg:45vw tablet-lg:280px"`.

---

## Itens em aberto (fora desta validação)

- Decidir o tratamento das diferenças visuais do All-in-One e do Overview em relação ao Figma.
- Atualizar a SPEC e o `tasks.md` (CTAs, estado do FAQ, status `Draft` e menção a "não é repositório git").
- Commitar a correção do `sizes` e repetir `pnpm build` quando o servidor de desenvolvimento estiver parado.
