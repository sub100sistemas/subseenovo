# Validation — `crm-imobiliario-rural`

**Verificação:** feita em 2026-10-02, em sessão posterior à implementação, e **substitui a validação de 2026-09-09**, que estava desatualizada (ver "Histórico"). Esta é a validação baseada no **runtime atual**: nenhum item da SPEC ou do `tasks.md` foi tratado como confirmado até ser reproduzido contra o código e o Figma.

- **Playwright (Chromium)** contra o **build de produção** (`.output/server/index.mjs`, servidor próprio em porta separada, encerrado ao final), com o `pnpm dev` do desenvolvedor parado.
- **Figma:** capturas dos 12 nodes de seção a 1920px, lado a lado com o site, e conferência com `FIGMA_CONTENT_MANIFEST_CRM_RURAL.md`.

## Veredito: **PASS com ressalvas**

A página está funcional, responsiva em 21 larguras (320 a 1920px), com SEO correto e fiel ao Figma na estrutura e no conteúdo. Os **17 critérios de aceite** e os **6 edge cases** da SPEC estão atendidos, e `pnpm build` termina com exit 0. Os dois defeitos da validação anterior (overflow entre 992 e 1198px e o espaço faltando no H1) **estão resolvidos**; o terceiro gap é uma **divergência documental da SPEC**, não um defeito do código. Esta auditoria **não encontrou nenhuma correção de código necessária e nenhum código foi alterado**. As ressalvas são visuais de baixa prioridade e documentais.

---

## Resumo da evidência

| Verificação | Resultado |
| --- | --- |
| Rota `/modulos/crm-imobiliario-rural/` | HTTP 200 nas 21 larguras |
| Larguras testadas (21) | 1920, 1440, 1280, 1024, 992, 768, 576, 414, 390, 375, 360, 320 (as 12 padrão) mais 980, 1000, 1050, 1100, 1150, 1198, 1199, 1200 e 1250 |
| Seções | 12, na ordem do Figma: `crm-rural-hero`, `-technology`, `-portfolio`, `-technical-report`, `-client-radar`, `-deal-timeline`, `-formal-closing`, `-regional-performance`, `-foreign-buyers`, `-depoimentos`, `-outros-modulos`, `-duvidas-frequentes` |
| Headings | **1 `<h1>`, 11 `<h2>` e 4 `<h3>`** (os 4 do Portfolio), constantes em todas as larguras; as perguntas do FAQ usam `<summary>` |
| Overflow horizontal | **Nenhum** (`scrollWidth === clientWidth`) nas 21 larguras, inclusive na faixa 980–1250px; nenhum texto cortado |
| Console / HTTP | **console 0**, respostas ≥400: **0**, falhas de requisição: **0**, imagens quebradas: **0** |
| FAQ | 6 itens `<details>`; abrir leva o item de 91px para 213px, troca "+" por "−", e fechar volta ao estado inicial |
| CTAs | 7 "Testar grátis por 30 dias" (Technology, Portfolio, Technical Report, Client Radar, Formal Closing, Regional Performance e Foreign Buyers) → `/testar-gratis/`; ausentes em Deal Timeline, Testimonials, Other Modules e FAQ, como no Figma |
| Navegação | Mega-menu (1440px), menu mobile (375px), CTA da Home (`HeroRural`), card em `/modulos/crm` e os 3 links de Outros módulos (`/modulos/crm/`, `/modulos/crm-imobiliario-urbano/`, `/modulos/crm-imobiliario-temporada/`), todos com o H1 certo |
| `pnpm build` | **exit 0** ("Build complete"), rodado com o dev server parado |
| `validate_spec.py` | **0 erros e 0 avisos** |

---

## Critérios de aceite (17)

**Total: 17/17 atendidos** (P1: 3, P2: 8, P3: 6). Os IDs `RUR-01` a `RUR-17` da SPEC correspondem, nesta ordem, a esses critérios.

| Critério | Evidência | Situação |
| --- | --- | --- |
| P1 · RUR-01 rota | HTTP 200 nas 21 larguras; [crm-imobiliario-rural.vue](../../../app/pages/modulos/crm-imobiliario-rural.vue) compõe as 12 seções na ordem do Figma | Atendido |
| P1 · RUR-02 Hero | [CrmRuralHero.vue](../../../app/components/sections/CrmRuralHero.vue): H1 único, descrição, foto/mapa, 2 cards flutuantes e divisor ondulado. O `textContent` do H1 hoje é "A tecnologia certa para quem vende terra" (Gap 2 resolvido) | Atendido |
| P1 · RUR-03 mega-menu | [HeaderBar.vue:37](../../../app/components/layout/HeaderBar.vue#L37); Playwright a 1440px (hover em "Módulos") e a 375px (menu mobile) levam à rota | Atendido |
| P2 · RUR-04 Technology | `CrmRuralTechnology.vue`: H2, descrição, mockup e CTA → `/testar-gratis/` | Atendido |
| P2 · RUR-05 Portfolio | `CrmRuralPortfolio.vue`: H2, mockup, 4 `<h3>` e CTA | Atendido |
| P2 · RUR-06 Technical Report | `CrmRuralTechnicalReport.vue`: H2, checklist de 4 itens, CTA e card "Ficha da propriedade" com os 12 dados; badge "10 informações" conforme o Figma (Gap 3, divergência documental) | Atendido |
| P2 · RUR-07 Client Radar | `CrmRuralClientRadar.vue`: H2, checklist de 3 itens, CTA e card com 3 mini-passos e banner de resultado | Atendido |
| P2 · RUR-08 Deal Timeline | `CrmRuralDealTimeline.vue`: H2 e 4 etapas (1ª Visita → Proposta → Negociação → Fechamento) via `v-for`; sem CTA, como no Figma | Atendido |
| P2 · RUR-09 Formal Closing | `CrmRuralFormalClosing.vue`: H2, checklist, CTA e card "Contrato de Arrendamento" com assinatura e selo | Atendido |
| P2 · RUR-10 Regional Performance | `CrmRuralRegionalPerformance.vue`: H2, checklist, CTA e card com mapa e 3 stat cards; **sem overflow na faixa 980–1250px** (Gap 1 resolvido) | Atendido |
| P2 · RUR-11 Foreign Buyers | `CrmRuralForeignBuyers.vue`: H2, CTA, vitrine e 5 chips de país | Atendido |
| P3 · RUR-12 Testimonials | `CrmRuralTestimonials.vue`: `crm-rural-henrique-benedini` e `crm-rural-julio-silveira` | Atendido |
| P3 · RUR-13 Other Modules | `CrmRuralOtherModules.vue`: 3 cards com links reais; os três navegam e abrem com o H1 correto | Atendido |
| P3 · RUR-14 FAQ | `CrmRuralFaq.vue`: 6 itens `<details>` com perguntas e respostas | Atendido |
| P3 · RUR-15 estado do FAQ | Item aberto: 91px → 213px, "+" some e "−" aparece; fechar restaura | Atendido |
| P3 · RUR-16 card em `/modulos/crm` | [CrmOtherModules.vue:20](../../../app/components/sections/CrmOtherModules.vue#L20); Playwright: o card leva à rota | Atendido |
| P3 · RUR-17 CTA da Home | [HeroRural.vue:59](../../../app/components/sections/HeroRural.vue#L59); Playwright: o CTA leva à rota | Atendido |

---

## Edge cases (6)

**Total: 6/6 atendidos.**

| Edge case | Evidência | Situação |
| --- | --- | --- |
| Abaixo de 576px, 12 seções sem overflow, cortes ou sobreposição (RUR-18) | `scrollWidth === clientWidth` em 576, 414, 390, 375, 360 e 320px, 12 seções, nenhum texto cortado | Atendido |
| Mesma composição do desktop adaptada onde o Figma não define tablet/mobile | A mesma árvore responsiva em todas as larguras (headings constantes: 1/11/4); sem overflow de 320 a 1920px | Atendido |
| Rota irmã com href real (Outros módulos) | Os 3 links apontam para rotas que hoje existem e respondem 200 (a SPEC previa a hipótese de 404 temporário) | Atendido |
| Prefixo `CrmRural` contra colisão de nomes (RUR-19) | Os 12 componentes têm o prefixo; o build passa e a página renderiza as 12 seções | Atendido |
| Exatamente um `<h1>` (RUR-20) | 1 `<h1>` e 11 `<h2>` constantes nas 21 larguras; nenhum conteúdo duplicado entre variantes responsivas | Atendido |
| Fallback de fonte de assinatura (RUR-21) | Assinatura "João da Silva" renderiza com `cursive`; sem fonte nova no `nuxt.config.ts` | Atendido |

---

## Gaps da validação anterior (2026-09-09)

| Gap | Descrição anterior | Situação atual |
| --- | --- | --- |
| **Gap 1** | Overflow horizontal de até 98px entre 992 e 1198px em `CrmRuralRegionalPerformance.vue` (card de largura fixa de 725px a partir de `tablet-lg`) | **Resolvido.** O layout em linha agora começa em `desktop-full` (`desktop-full:flex-row`, card `desktop-full:w-[725px]`). `scrollWidth === clientWidth` em 980, 992, 1000, 1024, 1050, 1100, 1150, 1198, 1199, 1200 e 1250px, e nas demais larguras |
| **Gap 2** | `textContent` do H1 sem espaço: "…certa paraquem vende terra" | **Resolvido.** O H1 hoje lê "A tecnologia certa para quem vende terra" (`<br class="hidden tablet-lg:block" />` no lugar dos dois `<span class="block">`), com a quebra visual preservada em `tablet-lg` |
| **Gap 3** | Badge "10 informações" do card "Ficha da propriedade" contra 12 dados renderizados | **Mantido como divergência documental da SPEC.** O badge está conforme o Figma e o card contém os 12 dados do manifesto; a SPEC e o manifesto dizem "10" enquanto listam 12 rótulos. Não é defeito do código, e nada foi alterado |

---

## Conformidade com o Figma

Comparado a 1920px, seção a seção. Alturas do site contra o Figma: Hero 513/528, Technology 1083/1093, Portfolio 993/1088, Technical Report 650/560, Client Radar 694/715, Deal Timeline 607/581, Formal Closing 702/759, Regional Performance 588/583, Foreign Buyers 547/642, Testimonials 766/770, Other Modules 661/566 e FAQ 1026/1798.

- **Conformes:** Hero, Technology, Technical Report, Client Radar, Deal Timeline, Formal Closing, Other Modules (estrutura e conteúdo), com textos e CTAs iguais ao Figma.
- **Diferenças visuais** (nenhuma é bug; **nenhuma foi corrigida**, e nenhum código foi alterado):
  - **Portfolio:** mockup menor que o do Figma, painel de 996 × 1089px e título em 1 linha (no Figma, 2).
  - **Foreign Buyers:** vitrine menor (549 × 642px) e chips de país sem o formato de pílula do Figma.
  - **Regional Performance:** os stat cards do site são neutros, e os do Figma são tingidos de laranja e verde.
  - **Testimonials:** diferenças menores; o título quebra em 4 linhas no site e em 3 no Figma.
  - **FAQ:** o Figma mostra os itens abertos (1798px), e o site abre sob demanda (1026px).
  - **Technical Report** (650 × 560px) e **Other Modules** (664 × 565px) têm alturas diferentes das do Figma, sem diferença de conteúdo.

---

## Responsividade

21 larguras: HTTP 200, `scrollWidth === clientWidth`, 12 seções, 1 `<h1>`, 11 `<h2>`, 4 `<h3>`, 0 imagens quebradas, ≥400 0, falhas 0, console 0 e nenhum texto cortado. A faixa 980–1250px (incluindo 1198, 1199 e 1200px, onde o `.container-page` muda de largura) foi testada por inteiro porque era onde estava o overflow do Gap 1. A SPEC afirmava que a responsividade tinha sido confirmada "por revisão estrutural do código"; agora está **verificada em runtime** nas 21 larguras.

---

## SEO

[crm-imobiliario-rural.vue:2-9](../../../app/pages/modulos/crm-imobiliario-rural.vue#L2-L9) define `title` ("SUBSEE | CRM Imobiliário Rural para Fazendas e Propriedades Rurais"), `description`, `ogTitle` e `ogDescription`. O HTML tem os quatro, mais `canonical` e `robots`. Localmente o canonical sai como `localhost:3000` e o `robots` como `noindex, nofollow`, o esperado fora de produção (regra global do `siteUrl`). Não há dados estruturados (JSON-LD), e a SPEC não os exige.

---

## Higiene do código

Sem `translate-*` e sem comentários nos 12 componentes `CrmRural*` e na página, conforme o `CLAUDE.md`.

---

## Regressões

Nenhuma. Esta validação não alterou código. Os pontos de entrada (mega-menu, card em `/modulos/crm`, CTA da Home) e os três links de Outros módulos levam às páginas certas.

---

## Build

`pnpm build` com **exit 0** ("Build complete"), rodado com o `pnpm dev` do desenvolvedor parado (ele compartilha `.nuxt` e `.output` com o build). Os testes de navegador foram feitos contra esse build de produção.

---

## Ressalvas

Nenhuma é falha funcional, e **nenhuma foi corrigida nesta validação.**

1. **Diferenças visuais de Figma** (ver acima): Portfolio, Foreign Buyers, Regional Performance, diferenças menores do Testimonials e as alturas de Technical Report e Other Modules.
2. **FAQ** aberto no Figma e sob demanda no site.
3. **FAQ** em `<summary>` em vez de `<h3>`, padrão do `layout/Faq.vue` de todo o site.
4. **`canonical` e `robots` locais** (`localhost:3000` e `noindex, nofollow`), esperados fora de produção.

---

## Divergências documentais

Registradas aqui; **`spec.md`, `tasks.md` e `design.md` não foram alterados nesta etapa.**

1. **Badge "10 informações" × 12 dados (Gap 3):** a SPEC (P2, Technical Report) e o manifesto dizem "10 dados" ao listar 12 rótulos; o código segue o Figma (badge "10 informações", 12 dados).
2. **Rota de "Outros módulos" como possível 404:** a SPEC prevê que um link para página irmã inexistente retornaria 404 até a página ser construída; as três rotas existem hoje.
3. **Overflow e H1 (Gaps 1 e 2):** o `tasks.md` (T18) marca a ausência de overflow como concluída por revisão estrutural, o que a validação anterior contradisse; os gaps foram corrigidos no código depois, sem atualização do `tasks.md`.
4. **Responsividade:** o Success Criteria e o T18 do `tasks.md` citam "revisão estrutural do código", sem navegador real; a verificação em runtime só existe agora, neste arquivo.
5. **`tasks.md`:** `Status: Draft` e aviso de que o diretório não é um repositório git (desvio de commit por tarefa), embora o projeto já esteja no Git.
6. **`spec.md`:** os 21 requisitos `RUR-01` a `RUR-21` e o Success Criteria estão marcados como `Verified`/`[x]` com base na validação anterior e na revisão estrutural.

---

## Histórico

**Validação de 2026-09-09** (verificador independente, **antes de o projeto estar em Git**): veredito "PASS com um follow-up Important", 21/21 requisitos, sensor de discriminação 3/3 e 176 asserções de navegador (169 passaram), em 6 larguras (375, 768, 992, 1300, 1440 e 1920px). Registrou três gaps: Gap 1 (overflow de 98px a 992px), Gap 2 (espaço no H1) e Gap 3 ("10 informações" × 12 dados).

**Por que estava desatualizada:** foi feita antes do Git, antes das alterações posteriores à data (as correções dos Gaps 1 e 2, a refatoração do Hero, AVIF e lazy-load, SEO e acessibilidade) e **sem validação real em navegador** da faixa de largura onde o Gap 1 se manifestava (testou 6 larguras, e hoje foram testadas 21). Esta validação a substitui, e os Gaps 1 e 2 que ela apontava estão resolvidos.

---

## Itens em aberto (fora desta validação)

- Atualizar a SPEC, o `tasks.md` e o `design.md` (divergências documentais acima).
- Decidir o tratamento das diferenças visuais de Portfolio, Foreign Buyers e Regional Performance em relação ao Figma.
- Commitar esta validação.
