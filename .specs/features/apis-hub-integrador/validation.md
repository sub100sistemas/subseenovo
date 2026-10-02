# Validation — `apis-hub-integrador`

**Verificação:** feita em sessão posterior à implementação, com evidência colhida de novo em duas rodadas (2026-10-02). As marcações `[x]` do `tasks.md` e `Verified` do `spec.md` foram tratadas como não confirmadas até serem reproduzidas.
- **Rodada 1 — diagnóstico estático:** leitura de `spec.md`, `design.md`, `tasks.md`, STATE e código; `pnpm build`; `curl` da rota no build; contagem de headings e seções no HTML renderizado; comparação dos textos do código com o manifesto.
- **Rodada 2 — evidência dinâmica:** Playwright (Chromium) contra o build de produção da `master` (`.output`), servidor local iniciado e encerrado pelo próprio script; Figma MCP (`get_screenshot` e `get_metadata` do node `3164:35379`).

Nenhum arquivo de código, `spec.md`, `design.md` ou `tasks.md` foi alterado durante a verificação.

## Veredito: **PASS com ressalvas**

Os 14 requisitos (`APIS-01` a `APIS-14`) estão atendidos pelo código e pelo comportamento observado. As ressalvas são **desvios de fidelidade visual em relação ao Figma** (3 principais e alguns menores) e **divergências de documentação**. Nenhuma delas é falha funcional e nenhuma foi corrigida nesta validação.

O resultado não é PASS limpo por dois motivos:
1. Há desvios visuais conhecidos em relação ao Figma, listados em "Desvios de fidelidade visual".
2. A conferência com o Figma foi visual, lado a lado, **sem comparação pixel a pixel**, por limitação descrita adiante.

---

## Resumo da evidência

| Verificação | Resultado |
| --- | --- |
| `pnpm build` | Sucesso (exit 0, "Build complete") |
| Rota `/modulos/apis-hub-integrador/` | HTTP 200 |
| Seções | 8, na ordem: `apis-hero`, `apis-tecnologia`, `apis-hub-integracoes`, `apis-beneficios`, `apis-conecte`, `apis-depoimentos`, `apis-outros-modulos`, `apis-duvidas-frequentes` |
| Headings no `<main>` | 1 `<h1>`, 7 `<h2>`, 7 `<h3>` |
| Textos contra o manifesto | 26 strings de FAQ, features e benefícios sem divergência; descrições do hero, Technology, Other Modules e Conecte também batem |
| Responsividade (Playwright) | 1920, 1440, 1280, 1024, 768, 576 e 375px: HTTP 200, **zero overflow horizontal**, **zero erros de console**, **zero respostas ≥400**, **zero requisições falhas**, **zero imagens quebradas**, 1 `<h1>`, 8 seções |
| FAQ aberto e fechado | Funciona (detalhe em APIS-11) |
| CTA da Home | Funciona |
| Mega-menu (desktop e mobile) | Funciona |
| Banner "Base de conhecimento" | Funciona, destino correto, HTTP 200 |
| Conferência com o Figma | Realizada visualmente, **sem afirmar comparação pixel a pixel** |

---

## Evidência por requisito

| ID | Evidência | Atendido? |
| --- | --- | --- |
| APIS-01 | `curl` e Playwright: HTTP 200 em todas as larguras. [apis-hub-integrador.vue:15-24](../../../app/pages/modulos/apis-hub-integrador.vue#L15-L24) compõe as 8 seções na ordem do Figma; o DOM renderizado confirma a ordem dos ids. | sim |
| APIS-02 | [ApisHero.vue:14-22](../../../app/components/sections/ApisHero.vue#L14-L22) (H1 e descrição), `:37-42` (`card_arrow.png` com os 2 cards), `:4-10` (5 ícones), `:44-53` (selo). Sem CTA. Captura do Figma lado a lado: estrutura e conteúdo conferem. **Desvio de cor do "on"** (ver Desvio 1). | sim (estrutura e conteúdo); com desvio visual |
| APIS-03 | [ApisTechnology.vue:10-27](../../../app/components/sections/ApisTechnology.vue#L10-L27). O CTA "Testar grátis por 30 dias" vem de `CrmTechnology.vue` e leva a `/testar-gratis/`. O mockup sai por `NuxtPicture` em `layout/Technology.vue`. Comparação com o Figma: mockup, texto e CTA conferem. | sim |
| APIS-04 | [ApisIntegrationsHub.vue:8-29](../../../app/components/sections/ApisIntegrationsHub.vue#L8-L29) (4 itens), `:33-38` (CTA), `:49-57` (imagem). **Desvios de cor do "on" e do painel de fundo** (ver Desvios 1 e 2). | sim (estrutura e conteúdo); com desvio visual |
| APIS-05 | Playwright em `/` (1440px): clique em "Conheça APIs & HUB Integrador" ([HeroIntegrations.vue:152-153](../../../app/components/sections/HeroIntegrations.vue#L152-L153)). URL final `/modulos/apis-hub-integrador/`, H1 "Conecte o SUBSEE on aos seus sistemas por APIs e Hub", 8 seções. | sim |
| APIS-06 | [ApisBenefits.vue:10-32](../../../app/components/sections/ApisBenefits.vue#L10-L32), `v-for` em `:49`, `h3` em `:58`. Os 3 cards conferem com o Figma (ver desvio menor 1). | sim |
| APIS-07 | [ApisConecte.vue:12-22](../../../app/components/sections/ApisConecte.vue#L12-L22) e `:26-34`. Texto e imagem conferem. **Desvio de fundo e borda** (ver Desvio 3). | sim (estrutura e conteúdo); com desvio visual |
| APIS-08 | [ApisTestimonials.vue:22-31](../../../app/components/sections/ApisTestimonials.vue#L22-L31). O HTML renderizado contém Cleveson Costa e João Calçada, este com "Gerente de Locação". `testimonials.json` não foi modificado. | sim |
| APIS-09 | [ApisOtherModules.vue:7](../../../app/components/sections/ApisOtherModules.vue#L7) e `:15-40`. O banner usa `NuxtLink to="/modulos/base-de-conhecimento/"`. Playwright: o clique leva a `/modulos/base-de-conhecimento/` (H1 "Central de Ajuda, Tutoriais e Documentação do SUBSEE on"); `GET` direto retorna **HTTP 200**. | sim. A documentação ainda descreve o placeholder `href="#"`; ver "Divergências documentais" |
| APIS-10 | [ApisFaq.vue:7-38](../../../app/components/sections/ApisFaq.vue#L7-L38) e `:42`; `layout/Faq.vue:65` renderiza `<details>`; ícones padrão em [CrmFaq.vue:45-46](../../../app/components/sections/CrmFaq.vue#L45-L46). O HTML contém 6 `<details>`; as 6 perguntas e respostas batem com o manifesto. | sim |
| APIS-11 | Playwright (1280px), 1º item do FAQ. Fechado: ícone "+" visível, "−" oculto, altura 91px, `padding-bottom` do `summary` 30px. Aberto: `open=true`, "+" oculto, "−" visível, altura 187px, `padding-bottom` 18px. Fechado de novo: volta exatamente ao estado inicial. | sim |
| APIS-12 | [HeaderBar.vue:79](../../../app/components/layout/HeaderBar.vue#L79). Playwright a 1440px: hover em "Módulos" e clique em "APIs & HUB integrador" levam a `/modulos/apis-hub-integrador/`. Playwright a 375px: menu mobile, "Expandir Módulos" e o mesmo item levam ao mesmo destino. | sim |
| APIS-13 | Playwright em 1920, 1440, 1280, 1024, 768, 576 e 375px, com scroll completo para disparar imagens lazy: `scrollWidth` igual a `clientWidth` em todas, sem erro de console, sem respostas ≥400, sem requisições falhas, sem imagens quebradas. Em todas as larguras uma imagem decorativa (`left-[-260px]`) ultrapassa o viewport, mas fica cortada pelo container e não gera rolagem horizontal. | sim |
| APIS-14 | Existem 8 arquivos `Apis*.vue` em `app/components/sections/`; não há `Hub*`. O `pnpm build` conclui e a página renderiza as 8 seções sem substituição de componente. | sim |

**Total: 14/14 requisitos atendidos.**

---

## Desvios de fidelidade visual (Figma × site)

Registrados a partir da comparação lado a lado das capturas em 1920px, seção a seção. Não são falhas funcionais. **Nenhum foi corrigido nesta validação.**

### Desvios principais

1. **Cor do "on".** No Figma o "on" do H1 e do lead da seção API Hub aparece em vermelho (`#e72f4d`), e o manifesto diz "Manter literal". No site aparece em azul (`text-brand`): [ApisHero.vue:16](../../../app/components/sections/ApisHero.vue#L16) e [ApisIntegrationsHub.vue:44](../../../app/components/sections/ApisIntegrationsHub.vue#L44). A task T3 afirma que o "on" segue o tratamento do Figma, o que a captura não confirma. No Figma o "on" do lead da seção API Hub não aparece colorido; o manifesto o descreve como "termo estilizado".
2. **Painel de fundo da seção API Hub ausente.** O Figma tem um cartão arredondado com gradiente verde-azulado envolvendo a seção. No site o fundo é branco liso.
3. **Fundo e borda da seção Conecte.** O Figma usa um cartão claro com borda azul-clara. O site usa cinza `#f5f5f5` sem borda ([ApisConecte.vue:7](../../../app/components/sections/ApisConecte.vue#L7)), e a seção fica 24px mais alta (692px contra 668px).

### Desvios menores

- **Ícone do 2º card de Benefits.** O Figma mostra um ícone de compartilhamento; o site mostra um glifo semelhante a ramificação.
- **Quebra de linha do H2 da Technology.** Difere por pequena variação de largura.
- **Alturas das seções (Figma → site, 1920px).** Tecnologia 1095 → 1102, API Hub 1060 → 1049, Benefits 757 → 753, Testimonials 770 → 790, Other Modules 341 → 349. Todas dentro de cerca de 3% a 4%, exceto Conecte (+24px) e Testimonials (+20px).
- **FAQ.** O Figma mostra os 6 itens abertos (altura 1790px) e o site abre sob demanda (1026px fechado). Diferença esperada para um accordion.
- **Depoimentos.** O Figma mostra Edson Naka (Legado Urbano) e Cleveson Costa. O site mostra João Calçada (Imobiliária Soma) e Cleveson Costa. É a decisão já documentada na SPEC, devido ao erro de logo e legenda dentro do próprio Figma.

---

## Limitação da conferência com o Figma

- A conferência foi **visual, lado a lado**, entre a captura do Figma (`get_screenshot` do node `3164:35379`) e a captura de página inteira do site a 1920px.
- Não houve comparação pixel a pixel confiável. A captura do Figma sai limitada a 4096px de altura (escala de cerca de 0,545), e fonte e antialiasing do Figma diferem do navegador. Os desvios acima são julgamento visual e comparação de alturas, não um diff de pixels.
- A conferência cobre a página em 1920px. Larguras menores foram verificadas só quanto a overflow, erros e carregamento, sem comparação visual com o Figma.

---

## Divergências documentais

1. **Link da Base de conhecimento.** `spec.md` (critério P3-2, Assumptions e Open Questions), `tasks.md` (T9), `design.md` e o Handoff do STATE descrevem o banner com `href="#"` como placeholder documentado. O código atual aponta corretamente para `/modulos/base-de-conhecimento/` (página existente, HTTP 200). A documentação ficou desatualizada; o código está certo.
2. **Handoff do STATE.** Diz que a branch `feature/apis-hub-integrador` ainda não foi integrada à `master`. A feature já está na `master` (commit `f226d5e` e a série `feat(apis-hub-integrador)`).
3. **`design.md`.** Está com `Status: Draft`, enquanto o `tasks.md` está `Approved` e todas as tasks concluídas.
4. **Redação da SPEC.** Cita a rota sem a barra final, mas os links do código usam `/modulos/apis-hub-integrador/` (AD-017). O `spec.md` e o `design.md` mencionam `NuxtImg` para o mockup da Technology, mas o componente de layout usa `NuxtPicture`.

Nenhuma dessas divergências foi corrigida; este documento só as registra.

---

## Escopo e responsabilidade

- **Canonical e robots.** O `<head>` da página inclui canonical e a regra de indexação por ambiente, mas isso vem do SEO global do site (`app/plugins/seo.ts`, `modules/seo.ts`), posterior à feature. **Não é atribuído ao código específico desta feature**, e esta validação não avalia esses valores.
- **`useSeoMeta` da página.** O título e a descrição definidos em [apis-hub-integrador.vue:6-11](../../../app/pages/modulos/apis-hub-integrador.vue#L6-L11) foram lidos no HTML renderizado e estão corretos.
- **Árvore de trabalho.** Durante a verificação não houve alteração em arquivos da feature. As únicas mudanças pendentes do repositório são as preexistentes (`CLAUDE.md` modificado e `.claude/scheduled_tasks.lock` deletado), que não pertencem a esta feature.

---

## Itens em aberto (fora desta validação)

- Os 3 desvios principais e os menores acima ficam registrados como possíveis correções futuras, a serem decididas e autorizadas à parte.
- A atualização de `spec.md`, `design.md`, `tasks.md` e do STATE para refletir o link real da Base de conhecimento, o merge e o status do design também fica para uma etapa separada.
