# Fidelidade ao Figma — CrmTechnology.vue Specification

## Problem Statement

A seção `CrmTechnology.vue` (Hero/Technology do módulo CRM) diverge visualmente do Figma (fileKey `vX7qKnnXSOW8zv4kAuS2eN`, nodeId `3089:12139`): título sem a quebra de 2 linhas, cor errada na descrição, espaçamentos incorretos entre título/descrição/botão e entre o bloco de texto e o mockup, e faltam dois elementos decorativos do Figma (seta curva e estrela) que hoje só aparecem "grudados" dentro do PNG do mockup em vez de serem ativos independentes. O objetivo é reproduzir os valores reais extraídos via `get_design_context`/`get_screenshot` no MCP do Figma, mantendo o botão CTA intocado e sem quebrar a responsividade.

## Goals

- [ ] Título (H2), descrição e botão reproduzem exatamente posição/espaçamento/tipografia do node `3089:12140` no desktop
- [ ] Seta curva (`3130:3511`) e estrela (`3089:12610`) são SVGs originais do Figma, não recriados à mão, posicionados fielmente
- [ ] Nenhum overflow horizontal em nenhuma largura de viewport (320px–1920px testado)

## Out of Scope

| Item | Motivo |
| --- | --- |
| Alterar `CtaButton` ou o texto/link do botão | Usuário pediu explicitamente para não mexer — já segue o padrão do projeto |
| Outras seções do site/módulo CRM | Usuário pediu ajuste restrito a esta seção |
| Alterar `.container-page` (classe global) | Compartilhada por todo o site; risco fora do escopo desta correção pontual |
| Frame de mobile/tablet dedicado no Figma | Não existe no arquivo — esta seção do Figma foi desenhada apenas em 1400px (desktop) |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Breakpoint de "reprodução exata do Figma" | `desktop-full` (`87.5rem`/1400px) — mesmo token já usado no projeto (`--breakpoint-desktop-full`), com padding lateral zerado só nesse tier | Testado empiricamente: com o wrapper ainda tendo padding lateral (ex.: no tier `desktop`, 1400px), a seta curva — ancorada em px fixos a partir da borda direita do wrapper — colidia visivelmente com a última linha da descrição, porque o padding reduz a largura de conteúdo abaixo dos 1400px de referência do Figma. Zerando o padding e adiando a ativação para exatamente 1400px, a largura de conteúdo bate 1:1 com o frame do Figma (sem padding) e a colisão desaparece; abaixo disso, layout adaptado | y |
| Wrapper de largura para o bloco de topo (H2/parágrafo/botão/seta) e para o bloco da imagem (mockup/estrela) | Wrapper local `max-w-[1400px] mx-auto`, substituindo `.container-page` **somente nesta seção**, com `px-0` a partir de `desktop-full` | `.container-page` usa larguras "degrau" (960/992/1200px) menores que 1400px, o que forçaria o parágrafo (1048px no Figma) a quebrar em 3 linhas em vez de 2, e deslocaria a posição das decorações absolutas. Um wrapper local de 1400px evita isso sem tocar a classe global compartilhada | y |
| Visibilidade da seta curva abaixo do breakpoint `desktop-full` | Oculta (`hidden`) abaixo de `desktop-full` (1400px), visível a partir dele | Não existe frame de Figma para mobile/tablet desta seção; a seta decora um bloco de texto de altura variável (sem aspect-ratio fixo). Confirmado visualmente que qualquer breakpoint abaixo de 1400px (com padding ainda ativo) produz colisão com o texto — ver linha acima. Tratamento simétrico ao já concedido explicitamente à estrela pelo usuário | y |
| Resolução do novo PNG do mockup | 3300×1938px (node `3089:12146` isolado, via `download_assets`/`defaultScale:3`) — **revisado em 2026-09-08**: uma primeira tentativa via `get_screenshot` só devolveu 1100×646px, aceitando perda de resolução como troca; usuário reportou a imagem "distorcida e com baixa qualidade" e pediu correção | `get_screenshot` renderiza sempre em 1x nativo do node, ignorando `maxDimension` acima disso (confirmado testando `maxDimension` até 4000 sem mudança de tamanho); `download_assets` expõe `defaultScale` (até 4x) e faz o Figma re-renderizar de verdade nessa escala (texto nítido, não upscaling). Sem essa troca a imagem ficava borrada em qualquer tela retina | y |
| Cor do parágrafo de descrição | `text-ink` (`#313846`) em vez de `text-ink-soft` (`#4f4f4f`) | Valor real confirmado no node `3089:12143` via `get_design_context`; divergência não fazia parte do pedido explícito do usuário mas é uma lacuna de fidelidade rastreável encontrada na extração | n |
| Entrega WebP/AVIF do mockup | `<NuxtPicture>` (não `<NuxtImg>`) com `sizes="mobile-lg:100vw tablet-lg:1000px desktop:1100px"` e `densities="x1 x2"` | `<NuxtImg>` só nego­cia um formato via a prop `format` (deixada vazia, então nunca lia `image.format` do `nuxt.config.ts`) — confirmado lendo o código-fonte do componente instalado; `<NuxtPicture>` lê esse array e emite `<source>` avif/webp reais. As chaves de `sizes` (`mobile-lg`/`tablet-lg`/`desktop`) são as de `nuxt.config.ts` → `image.screens`, não os tokens Tailwind (`--breakpoint-*`) usados no resto do arquivo — os dois mapas são independentes; uma chave só-Tailwind (`desktop-full`) era descartada silenciosamente, e um valor `vw` sem prefixo de breakpoint gerava candidatos de ~1px (bugs reais encontrados e corrigidos) | y |

**Open questions:** none — todas resolvidas ou registradas acima (nenhuma pendente).

---

## User Stories

### P1: Reprodução fiel do bloco de título (H2 + descrição + botão) ⭐ MVP

**User Story**: Como visitante do site em desktop, quero ver o título "A tecnologia que impulsiona / sua imobiliária" exatamente como no Figma (2 linhas, espaçamento correto), para que a seção transmita a mesma hierarquia visual pretendida pelo design.

**Why P1**: É o conteúdo principal da seção; é o problema mais visível reportado pelo usuário.

**Acceptance Criteria**:

1. WHILE a viewport é ≥1400px (`desktop-full`) o H2 SHALL quebrar em exatamente 2 linhas ("A tecnologia que impulsiona" / "sua imobiliária") via caixa de texto com `max-width: 1000px`, reproduzindo o node Figma `3089:12144`.
2. WHILE a viewport é <1400px o H2 SHALL quebrar de forma natural conforme a largura disponível, sem `<br>`/quebra forçada.
3. The H2 SHALL renderizar a segunda linha ("sua imobiliária") na cor `#5d5fef` (`text-brand`), mantendo a primeira linha na cor `#313846` (`text-ink`, herdada do `h2` global).
4. WHILE a viewport é ≥1400px a descrição SHALL usar `max-width: 1048px` e cor `#313846` (`text-ink`), reproduzindo o node `3089:12143`.
5. WHILE a viewport é ≥1400px o espaçamento vertical entre H2→descrição e entre descrição→botão SHALL ser de 30px cada, reproduzindo o `gap-[30px]` do node `3089:12140`.
6. IF a viewport é <1400px THEN os espaçamentos entre H2/descrição/botão SHALL usar os valores já adaptados do projeto (não o valor de 30px do desktop), evitando um espaçamento desproporcional em telas estreitas.
7. The CTA "Testar grátis por 30 dias" SHALL permanecer inalterado (mesmo componente `CtaButton`, mesmo texto, mesmo link `/testar-gratis`).

**Independent Test**: Abrir a seção em viewport 1400px e conferir 2 linhas no H2, cor da descrição e os 3 gaps de 30px; redimensionar para 375px e conferir que o texto quebra naturalmente sem overflow.

---

### P1: Elementos decorativos originais do Figma (seta curva + estrela)

**User Story**: Como stakeholder de design, quero que a seta curva e a estrela decorativas sejam os SVGs reais extraídos do Figma (não recriados à mão), posicionados como no design, para manter fidelidade visual exata.

**Why P1**: Pedido explícito do usuário — usar sempre os assets originais do Figma via MCP.

**Acceptance Criteria**:

1. WHILE a viewport é ≥1400px o sistema SHALL renderizar `public/icons/crm-tecnologia-seta-curva.svg` (184.972×210.812px nativos, `fill:#12141D`, extraído do node `3130:3511`) ancorado a 18.03px da borda direita e 73px do topo do wrapper de 1400px do bloco de título.
2. IF a viewport é <1400px THEN a seta curva SHALL ficar oculta (`hidden`).
3. WHILE a viewport é ≥1400px o sistema SHALL renderizar `public/icons/crm-tecnologia-estrela.svg` (80×80px nativos, `fill:#5d5fef`, extraído do node `3089:12610`) na borda esquerda (`left:0`) do wrapper do bloco da imagem, centralizado verticalmente.
4. IF a viewport é <1400px THEN a estrela SHALL ficar oculta (`hidden`) — comportamento já autorizado explicitamente pelo usuário.
5. The system SHALL NOT recriar seta ou estrela como paths desenhados à mão — ambos os SVGs SHALL ser os arquivos baixados via `get_design_context` do Figma.

**Independent Test**: Inspecionar o DOM em ≥1400px e confirmar que os dois `<img>`/SVGs apontam para os arquivos baixados do Figma (não inline hand-authored); reduzir para <1400px e confirmar que ambos desaparecem sem deixar espaço vazio quebrado.

---

### P1: Mockup do dashboard sem elemento decorativo embutido, em resolução e formatos corretos

**User Story**: Como usuário, quero que a imagem do mockup do CRM mostre apenas a tela do dashboard (sem a estrela "assada" nela), em resolução nítida e nos formatos modernos (WebP/AVIF), para que a estrela possa ser posicionada/ocultada independentemente e a imagem não fique borrada em telas retina.

**Why P1**: Pré-requisito técnico para a estrela (P1 acima) funcionar como elemento independente; qualidade de imagem é requisito funcional explícito do usuário (follow-up de 2026-09-08).

**Acceptance Criteria**:

1. The system SHALL usar `public/images/modulos-crm/tecnologia-mockup-dashboard.png` (3300×1938px, re-exportado isoladamente do node `3089:12146` via `download_assets`/`defaultScale:3` — não `get_screenshot`, que satura em 1x nativo independente do `maxDimension` pedido, confirmado empiricamente) como fonte da imagem do mockup.
2. The mockup image SHALL manter a proporção 3300:1938 (≡ 1100:646) em todas as larguras de viewport, sem distorção.
3. The system SHALL entregar a imagem via `<picture>` com `<source type="image/avif">` e `<source type="image/webp">` reais (não apenas negociação implícita de um único formato) — implementado trocando `<NuxtImg>` por `<NuxtPicture>`, a única que lê `image.format` do `nuxt.config.ts`.
4. The system SHALL gerar candidatos de srcset em pelo menos duas densidades (1x/2x) sem upscaling (nenhum candidato gerado pode exceder 3300×1938, a resolução real da fonte).
5. The system SHALL NOT apresentar overflow horizontal (scrollbar de página) em nenhuma largura entre 320px e 1920px.

**Independent Test**: Inspecionar visualmente a imagem em ≥1400px e confirmar ausência da estrela dentro do PNG e texto nítido (sem blur) num crop 1:1 da imagem; inspecionar o DOM e confirmar 2 `<source>` (`image/avif`, `image/webp`) com múltiplos candidatos `w` no srcset; redimensionar a janela do navegador de 320px a 1920px e confirmar ausência de scrollbar horizontal.

---

## Edge Cases

- IF a fonte Poppins ainda não carregou (FOUT) THEN o layout SHALL manter a proporção via `max-width` fixo (não depende de medir texto renderizado em tempo de execução).
- WHEN a viewport está exatamente no breakpoint `desktop-full` (1400px) THEN não SHALL haver sobreposição visível entre a estrela e a imagem do mockup (margem mínima esperada ~70–82px, sempre >0), nem entre a seta curva e a última linha da descrição (bug real encontrado e corrigido durante a verificação visual — ver Assumptions).

---

## Requirement Traceability

| Requirement ID | Story | Phase | Status |
| --- | --- | --- | --- |
| CRMTECH-01 | P1: Bloco de título | Implementing | Verified |
| CRMTECH-02 | P1: Bloco de título | Implementing | Verified |
| CRMTECH-03 | P1: Bloco de título | Implementing | Verified |
| CRMTECH-04 | P1: Bloco de título | Implementing | Verified |
| CRMTECH-05 | P1: Bloco de título | Implementing | Verified |
| CRMTECH-06 | P1: Bloco de título | Implementing | Verified |
| CRMTECH-07 | P1: Bloco de título (botão intocado) | Implementing | Verified |
| CRMTECH-08 | P1: Decorações | Implementing | Verified |
| CRMTECH-09 | P1: Decorações | Implementing | Verified |
| CRMTECH-10 | P1: Decorações | Implementing | Verified |
| CRMTECH-11 | P1: Decorações | Implementing | Verified |
| CRMTECH-12 | P1: Decorações | Implementing | Verified |
| CRMTECH-13 | P1: Mockup | Implementing | Verified |
| CRMTECH-14 | P1: Mockup | Implementing | Verified |
| CRMTECH-15 | P1: Mockup — WebP/AVIF reais | Implementing | Verified |
| CRMTECH-16 | P1: Mockup — 1x/2x sem upscaling | Implementing | Verified |
| CRMTECH-17 | P1: Mockup (no overflow) | Implementing | Verified |

**Coverage:** 17 total, 17 mapeados e verificados via screenshot Playwright + inspeção de DOM (`<picture>`/`srcset`) em 375/768/992/1200/1300/1400/1920px (Medium scope — Tasks formal pulado), 0 sem mapeamento.

---

## Success Criteria

- [x] Comparação lado a lado (screenshot do site em 1400px vs. screenshot do Figma) mostra título, espaçamentos, seta e estrela nas mesmas posições relativas
- [x] Nenhum overflow horizontal em 375/768/992/1200/1300/1400/1920px (verificado via Playwright: `scrollWidth === clientWidth` em todas)
- [x] Botão CTA inalterado (apenas classes/wrapper ao redor mudaram; a tag `<CtaButton variant="primary" to="/testar-gratis">Testar grátis por 30 dias</CtaButton>` é idêntica ao original)
- [x] Mockup nítido em qualquer densidade de tela: fonte 3300×1938px, nenhum candidato de srcset excede a fonte (sem upscaling), texto legível num crop 1:1 (verificado visualmente)
- [x] `<picture>` do mockup contém `<source type="image/avif">` e `<source type="image/webp">` com múltiplos candidatos `w` cada (verificado inspecionando o DOM renderizado — não apenas o código)
