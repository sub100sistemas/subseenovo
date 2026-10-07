# Manifesto de Conteúdo e Assets — CRM Imobiliário Urbano `/modulos/crm-imobiliario-urbano` (Figma)

Fonte: Figma fileKey `vX7qKnnXSOW8zv4kAuS2eN` — frame `Page` (nodeId `3089:5956`, 1920 x 10111.78px), section "CRM Imobiliário Urbanos", 11 seções de conteúdo listadas no `tasks.md` da feature `crm-imobiliario-urbano`.

Este documento reúne, seção por seção e na ordem visual real do Figma (topo → base), todo o texto (copy) extraído verbatim via `get_metadata` + `get_design_context` + `get_screenshot`, e a tabela de assets (imagens/ícones) baixados para o projeto Nuxt em `public/images/modulos-crm-urbano/` (fotos/mockups) e `public/icons/` (ícones, pasta plana, convenção já existente no projeto). Os componentes `CrmUrbano*.vue` usam exclusivamente o texto abaixo.

Convenções:

- Caminhos abaixo são relativos a `d:\Trabalho\Git\site-subsee-novo\` salvo indicação contrária.
- "W x H" é a dimensão real do arquivo baixado (pixels para raster; `width`/`height` do `viewBox` para SVG).
- Ícones novos desta página usam o prefixo `crm-urbano-` em `public/icons/` para não colidir com os ícones já existentes de `/modulos/crm` (`crm-hero-*`, `crm-tecnologia-*`, `crm-integrations-*`) nem com os da Home.
- Quando um asset baixado desta página é **byte-a-byte idêntico** (ou idêntico a menos de IDs internos gerados pelo exportador do Figma, ex.: `clip0_0_45` vs `clip0_0_4`) a um arquivo já versionado no projeto, o manifesto registra **reuso** em vez de duplicar o arquivo. Cada reuso abaixo foi confirmado por comparação de `md5sum` e/ou `diff` do conteúdo do SVG, não por semelhança visual.
- **Armadilha de download registrada**: as URLs de asset `.png` devolvidas por `get_design_context` para *fills* de imagem retornam um PNG **em branco** quando baixadas diretamente. As fotos/mockups desta página foram obtidas via `download_assets` (campo `export`, com `curl -L`, seguindo redirect) no node da composição, não pelas URLs de fill do `get_design_context`.

### Frame ignorado (decisão do `spec.md`)

O frame `3554:3142`, nomeado literalmente **"Claude, não mexe site e não coloca no site"** (1920×85, sobreposto à área do header), é uma nota do time de design endereçada a quem implementa. **Ele é ignorado**: a página usa o `<TheHeader />`/`<HeaderBar />` globais já existentes, sem nenhum componente de header novo. Nenhum asset foi extraído desse frame.

### Composições estáticas (imagem) vs. markup real

Conforme a tabela Out of Scope do `spec.md`:

| Seção | Composição | Tratamento |
| --- | --- | --- |
| 1. Hero / Top | Foto da mulher + elipse de blur | **imagem estática** (`hero-composicao-mulher-tablet.png`) |
| 1. Hero / Top | 3 cards flutuantes, curvas, badge de calculadora, divisor de onda | **markup real** (+ SVGs decorativos) |
| 2. Technology | Tela "Cadastro de imóvel" do SUB100 | **imagem estática** |
| 3. Portfolio | Telas de listagem + mapa + app (com badge "Sincronizado com 15 portais" embutido) | **imagem estática** |
| 3. Portfolio | Parágrafo lateral + 4 itens (ícone + H3 + descrição) + CTA | **markup real** |
| 4. Sales Funnel | tela de configuração da distribuição automática (`Tela`, `3887:3146`) | **imagem estática** (`crm-urbano-funil-tela.webp`) |
| 5. Leads Chart | 5 nós de origem, card central, chip de estatística, 3 nós de corretor | **markup real** |
| 5. Leads Chart | Linhas/pontos conectores e blobs de fundo | SVGs decorativos |
| 6. Reports | 4 stat cards | **markup real** (só os 4 ícones são assets) |
| 7. Portal Integrations | Mockup do app SUB100 (tela "Marketing") + anéis decorativos | **imagem estática** |
| 7. Portal Integrations | 7 badges flutuantes de portal | **markup real** (círculo em CSS + logo SVG) |
| 8. Dashboard | Mockup do notebook com o Dashboard SUBSEE | **imagem estática** |
| 8. Dashboard | 4 itens (ícone + H3 + descrição) + 2 badges flutuantes | **markup real** |
| 9. Testimonials | Bloco lavanda, onda, logo SUBSEE on, 2 cards | **markup real** |
| 10. Other Modules | 3 cards de módulo | **markup real** |
| 11. FAQ | Accordion de 6 itens | **markup real** |

---

## 1. Hero / Top — nodeId `3554:3036`

Frame: `x=0 y=85 width=1920 height=528`.
Estrutura interna (medidas confirmadas via `get_metadata` + `get_design_context`):

- `Background` (`3554:3037`) — `x=0 y=-85 w=1920 h=613`, `linear-gradient(119.58336658997149deg, rgb(220,253,244) 1.9863%, rgb(239,240,251) 62.602%, rgb(178,200,241) 103.35%)`
- `Row` (`3554:3038`) — `x=259 y=7 w=1401 h=456`, flex, `gap=5px`, `items-center`
  - `Coluna 01` (`3554:3039`) — `w=675`, flex-col, `gap=38px`, `padding-bottom=50px`
  - `Coluna 02` (`3554:3059`) — `w=721 h=456`, `overflow-clip`
- `Horizantal Divider` (`3554:3137`) — `x=0 y=327 w=1920 h=201`

### Texto extraído (ordem visual)

- **H1** (`3554:3042`, Poppins Bold 36px, `line-height 1.2`, `w=630`): "Acelere seus negócios no mercado " + "**imobiliário urbano**" (segundo trecho em `#5d5fef`)
  - Observação: a camada de texto tem `font-family` base `Nunito Sans ExtraBold` no Figma, mas os dois spans reais sobrescrevem para **Poppins Bold** — a fonte efetiva é Poppins, coerente com o restante do site.
- **Parágrafo** (`3554:3041`, Poppins Regular 24px, `w=675`, `#313846`): "Organize lançamentos, vendas e locações com gestão de leads, distribuição de atendimentos, funil de vendas e integração com portais em uma única plataforma"
- **`Btn → Icones Imóveis`** (`3554:3043`) — **3 chips** (não 5 como no Hero de `/modulos/crm`), `gap=15px`, cada chip `27.887 x 30`, `rounded-[4px]`, `bg #5d5fef`:
  1. Lançamentos (`3554:3044`) — ícone `14.137 x 16.479`, `drop-shadow-[0px_10px_20px_rgba(93,95,239,0.4)]`
  2. Venda (`3554:3047`) — ícone `16.409 x 19.017`, `drop-shadow-[0px_10px_20px_rgba(93,95,239,0.6)]`
  3. Locação (`3554:3053`) — ícone `14.165 x 16.479`, `drop-shadow-[0px_10px_20px_rgba(93,95,239,0.4)]`
- **Card "Apartamento"** (`3554:3175`, `x=0 y=223 w=309 h=185` dentro de `Card / Icone / Curva`; `rounded-[20px]`, `bg rgba(255,255,255,0.7)`, `border #eee`, `backdrop-blur-[10px]`):
  - Foto do prédio (`3554:3177`) — `x=21 y=22 w=101 h=141`, `rounded-[10px]`
  - H3 (`3554:3178`, Poppins Bold 16px, `tracking 0.32px`, `#313846`): "Apartamento"
  - "2 Suítes + 1 Quarto" (`3554:3181`, Poppins Medium 11px, `tracking 0.22px`) — ícone `16 x 15.52`
  - "2 Vagas de garagem" (`3554:3179`, Poppins Medium 11px) — ícone `17 x 15.52`
  - "185m² de Área total" (`3554:3180`, Poppins Medium 11px) — ícone `16 x 15.52`
  - Botão outline (`3554:3210`, `w=152 h=31`, `rounded-[7px]`, `border #5d5fef`) + texto (`3554:3211`, Poppins Medium 11px, `#5d5fef`, centralizado): "Fazer uma proposta"
  - `Ellipse 4` (`3554:3209`) — `x=112 y=18`, `15.829 x 15.829` (ponto decorativo sobre a foto)
- **Card "Proposta em análise"** (`3554:3212`, `x=397 y=209 w=316 h=87`; `rounded-[20px]`, `bg rgba(255,255,255,0.5)`, `border white`, `backdrop-blur-[10px]`):
  - H3 (`3554:3214`, Poppins Bold 18px, `line-height 1.8`, `tracking 0.36px`): "Proposta em análise"
  - Subtítulo (`3554:3215`, Poppins Regular 16px, `#545567`): "Negociação via CRM"
  - Ícone-chip (`3554:3217`, `39.572 x 39.572`, `rounded-[8px]`, `bg #5d5fef`) + glifo de lupa `23.74 x 23.74`
- **Card "Publicação integrado"** (`3554:3221`, `x=28 y=42 w=361 h=87`; retângulo interno `w=354 h=87`, `rounded-[20px]`, `bg rgba(255,255,255,0.6)`, `border #eee`, `backdrop-blur-[10px]`):
  - H3 (`3554:3223`, Poppins Bold 18px, `line-height 1.8`, `tracking 0.36px`): "Publicação integrado"
  - Subtítulo (`3554:3224`, Poppins Medium 16px, `#545567`): "No SUB100 e principais portais"
  - Ícone-chip (`3554:3226`, `39.572 x 39.572`, `rounded-[8px]`, `bg #5d5fef`, `border #eee`) + glifo de compartilhar `21.76 x 21.76`
- **Badge de calculadora** (`3554:3230`, `x=670 y=0`, `50 x 50`): caixa `rounded-[6px]`, `bg #e8e8fd`, `border #5d5fef`, com glifo `20 x 25` posicionado em `left=15 top=13`. Sem texto.
- **2 curvas decorativas** (`3554:3173` girada 45°, `3554:3174` girada 90° + espelhada verticalmente).
- **Nenhum CTA/botão existe neste node** — confirmado via `get_design_context` (o mesmo vale para o Hero de `/modulos/crm`). O CTA "Testar grátis por 30 dias" aparece a partir da seção Technology.

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| `Imagem` (`3554:3170`, export do retângulo da foto; posicionado em `left 34.26% top 0 width 50.21% height 100%` da `Coluna 02` 721×456) | `public/images/modulos-crm-urbano/hero-foto-mulher-tablet.png` | 724 x 912 (@2x) | foto | Corretora sorridente de blazer branco segurando um tablet |
| `Rectangle 7` (`3554:3177`, foto do prédio no card "Apartamento") | `public/images/modulos-crm-urbano/hero-card-apartamento-predio.png` | 303 x 423 (@3x) | foto | Fachada de um edifício residencial |
| `Clip path group` (`3554:3182`, ícone de suítes/quartos) | `public/icons/crm-urbano-hero-icone-suites.svg` | 16 x 16 | ícone | decorativo |
| `Clip path group` (`3554:3191`, ícone de vagas de garagem) | `public/icons/crm-urbano-hero-icone-vagas.svg` | 17 x 16 | ícone | decorativo |
| `Clip path group` (`3554:3200`, ícone de área total) | `public/icons/crm-urbano-hero-icone-area.svg` | 16 x 16 | ícone | decorativo |
| `search` (`3554:3219`) | `public/icons/crm-urbano-hero-icone-busca.svg` | 23.74 x 23.74 | ícone | decorativo |
| `share-2` (`3554:3228`) | `public/icons/crm-urbano-hero-icone-compartilhar.svg` | 21.76 x 21.76 | ícone | decorativo |
| `Group 1000004583` (`3554:3232`, glifo de calculadora do badge) | `public/icons/crm-urbano-hero-icone-calculadora.svg` | 22 x 27 | ícone | decorativo |

**Reusos confirmados (arquivos já existentes, nenhum download novo):**

| Nome Figma | Arquivo reaproveitado | Verificação |
|---|---|---|
| `lancamento.svg` (`3554:3045`) | `public/icons/crm-hero-icone-lancamentos-glyph.svg` | `diff` idêntico exceto o id de `clipPath` gerado pelo exportador |
| `venda.svg` (`3554:3048`) | `public/icons/crm-hero-icone-venda.svg` | `md5sum` idêntico |
| `locacao.svg` (`3554:3054`) | `public/icons/crm-hero-icone-locacao-glyph.svg` | `diff` idêntico exceto id de `clipPath` |
| `Curva` (`3554:3173`, 161 x 53) | `public/icons/crm-hero-seta-curva-azul.svg` | `diff` idêntico exceto id de `clipPath` e 1 dígito de arredondamento no path |
| `Curva` (`3554:3174`, 183 x 124) | `public/icons/crm-hero-seta-curva-verde.svg` | `md5sum` idêntico |
| `Ellipse/ CSS` (`3554:3061`, 974 x 1046) | `public/icons/crm-hero-ellipse-blur.svg` | `diff` idêntico exceto id de `filter` |
| `Ellipse 4` (`3554:3209`) | `public/icons/crm-hero-status-dot.svg` | `md5sum` idêntico |
| `Horizantal Divider` (`3554:3137`, 1920.24 x 201.999) | `public/icons/crm-hero-divider-onda.svg` | `md5sum` idêntico |

Nota: exportar o grupo pai `Imagem / CSS` (`3554:3060`) **não** serve — o export sai no espaço de coordenadas completo da `Coluna 02` e a elipse branca desfocada (`3554:3061`, blur de 150px) é recortada nesse limite, produzindo um retângulo branco opaco com bordas duras por cima do gradiente da seção. O correto é exportar apenas o retângulo da foto (`3554:3170`) e reproduzir a elipse separadamente com o SVG reaproveitado.

---

## 2. Hero / Technology — nodeId `3089:6048`

Frame: `x=0 y=613 width=1920 height=1095`.

- `Div` (`3220:4893`) — `x=260 y=41 w=1400 h=292`, flex-col, `gap=30px`, centralizado
  - `Heading / H2` (`3220:4894`) — `w=1000`
  - `Text / Description` (`3220:4895`) — `w=1048`
  - `Link → Agendar Demonstração` (`3220:4896`) — `w=297 h=56`, `rounded-[12px]`, `bg #5d5fef`
  - `Curva` (`3220:4897`) — `x=1197 y=73 w=184.972 h=210.812` (decorativa, canto direito)
- `Imagem / SVG` (`3089:6054`) — `x=260 y=408 w=1400 h=646`
  - `Tela` (`3089:6055`) — `x=162 y=12 w=1076 h=622.324` (mockup)
  - `Star 7` (`3089:6424`) — `x=0 y=283`, `80 x 80` (decorativa, borda esquerda)

### Texto extraído (ordem visual)

- **H2** (Poppins Bold 36px, `line-height 1.4`, centralizado): "Do cadastro à publicação, / tudo em um só **lugar**" (quebra de linha explícita após "publicação,"; "lugar" em `#5d5fef`)
- **Parágrafo** (Poppins Regular 24px, `line-height 1.4`, centralizado): "Siga um fluxo guiado por etapas, da identificação ao proprietário, e tenha cada imóvel pronto para publicar, sem retrabalho."
- **Botão CTA**: nome interno da instância é "Link → Agendar Demonstração", mas o **texto renderizado é "Testar grátis por 30 dias"** — mesma divergência rótulo × texto já documentada em `FIGMA_CONTENT_MANIFEST_CRM.md` §2. Vale a regra do projeto: o texto real prevalece. Destino: `/testar-gratis`.
- **Mockup**: tela "Cadastro de imóvel" do SUB100 Imobiliárias — breadcrumb "Início > Cadastrar > Imóveis", stepper de 7 etapas (Identificação / Características / Endereço / Anúncio / Mídias / Marketing / Proprietário) com a etapa 1 ativa, campos (Negociação "Venda", Tipo "Residenciais", Subtipo "Apartamento Padrão", Finalidade "Residencial", Condomínio/Edifício "Seven", Código interno "098-V", Nível de qualidade "Aprovado para anunciar", Revisão pendente "Não"), bloco "Valores" (Valor de venda R$ 1.500.000,00; Potencial de renda R$ 5.650,00; Avaliação Imobiliária R$ 1.500.000,00; Avaliação Bancária R$ 1.500.000,00; Valor da permuta R$ 300.000,00; Tipo de permuta "2 Selecionados"; Comissão % 5,00; Comissão Valor R$ 75.000,00; Valor do Condomínio R$ 2.450,00; Valor anual do IPTU R$ 4.200,00; Situação do Imóvel "Quitado"; Situação cadastral "Ativos"), campo "Princípios da negociação" e botões "Avançar"/"Concluir". **Dados de demonstração da interface, não copy de marketing** — não transcritos nos componentes.

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| `Tela` (`3089:6055`, export achatado) | `public/images/modulos-crm-urbano/technology-mockup-cadastro-imovel.png` | 2200 x 1292 (@2x) | mockup | Mockup da tela de cadastro de imóvel do SUB100, com o fluxo guiado por etapas e os campos de identificação e valores |

**Reusos confirmados:**

| Nome Figma | Arquivo reaproveitado | Verificação |
|---|---|---|
| `Curva` (`3220:4897`, 184.972 x 210.812) | `public/icons/crm-tecnologia-seta-curva.svg` | `diff` idêntico exceto id de `clipPath` |
| `Star 7` (`3089:6424`, 80 x 80, `#5D5FEF`) | `public/icons/crm-tecnologia-estrela.svg` | `diff` idêntico exceto o atributo `id` do path |

Nota: o export direto do node `Star 7` vem com um `<rect fill="#1E1E1E">` de fundo indevido (artefato do exportador ao isolar o node); o asset correto é o vetor puro — e ele é idêntico ao já versionado, portanto reaproveitado.

---

## 3. Hero / Portfolio — nodeId `3089:6425`

Frame: `x=0 y=1708 width=1920 height=1110.78`.

- `Bloco` (`3089:6426`) — `x=260 y=40 w=1400 h=1030.78`
  - `Heading / H2` (`3089:6456`) — `x=173.5 y=85 w=1053`
  - `Text / Description` (`3089:6455`) — `x=125 y=197 w=1150`
  - `Row` (`3112:16777`) — `x=72.64 y=291 w=1254.71 h=654.78`
    - `Telas` (`3089:6457`) — `w=663.71 h=654.78`
    - `Coluna 02` (`3112:16775`) — `x=703.71 y=21.31 w=551 h=612.15`, flex-col `gap=20px`

### Texto extraído (ordem visual)

- **H2** (Poppins Bold 36px, `line-height 1.2`, centralizado): "Todo o seu portfólio, sob controle / e pronto para gerar **negócio**" (quebra explícita; "negócio" em `#5d5fef`)
- **Parágrafo** (Poppins Regular 24px, `line-height 1.4`, centralizado): "Acompanhe vendas, locações e lançamentos em um só painel, / com leads, valores e integração com portais sempre atualizados" (quebra explícita após "painel,")
- **Parágrafo lateral** (`3089:6454`, Poppins Regular 20px, `line-height 1.4`, `w=551`): "Com o portfólio centralizado, acompanhe indicadores de vendas, leads e VGV, e amplie o alcance dos seus imóveis com integração direta aos principais portais do mercado."
- **`Funcionalidades`** (`3089:6428`) — 4 itens, cada um com ícone + H3 (Poppins Bold 16px) + descrição (Poppins Regular 16px), `line-height 1.4`, texto `#313846`, coluna de texto `w=491`:
  1. **Organização do portfólio** (`3089:6446`, ícone `33 x 42.471`, `gap=21px`) — "Acompanhe todo o portfólio de venda, locação e lançamento, com indicadores de negócio sempre atualizados, como VGV, propostas e leads"
  2. **Mídias e divulgação organizadas** (`3089:6441`, ícone `23.626 x 33.076`) — "Centralize fotos, vídeos e demais conteúdos utilizados na apresentação dos imóveis."
  3. **Gestão de proprietário e angariação** (`3089:6434`, ícone `32.007 x 37.011`) — "Controle proprietário, chaves, autorizações, exclusividade e informações de angariação."
  4. **Integração com portais imobiliários** (`3089:6429`, ícone `35.033 x 35.035`) — "Publique seus imóveis no Portal SUB100 e em outros portais integrados diretamente pelo sistema."
- **CTA** (`3089:6427`, dentro de `3414:6082`, `w=297 h=56`): "Testar grátis por 30 dias" → `/testar-gratis`
- **Mockup**: telas de listagem "Imóveis Urbanos" (filtros "Todos · 1.284", "Venda · 842", "Locação · 312", "Lançamento · 130"; cards de imóvel com condomínio/endereço/valor), badge flutuante "**Sincronizado com 15 portais**", card "Mapa · Urbanos" com pins numerados e mockup do app de busca do SUB100 ("Procurando Apartamento ou Casa? Comprar ou Alugar? Encontre aqui!"). Todo o conteúdo interno é **dado de demonstração** e está embutido na imagem — inclusive o badge "Sincronizado com 15 portais", que **não** é markup separado.

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| `Telas` (`3089:6457`, export achatado) | `public/images/modulos-crm-urbano/portfolio-telas-imoveis-urbanos.png` | 1328 x 1310 (@2x) | mockup | Mockup das telas de portfólio de imóveis urbanos do SUB100, com listagem, mapa e o app de busca, e o selo "Sincronizado com 15 portais" |
| `Icon` (`3089:6447`) | `public/icons/crm-urbano-portfolio-icone-organizacao.svg` | 33 x 42.47 | ícone | decorativo |
| `Icone` (`3089:6442`) | `public/icons/crm-urbano-portfolio-icone-midias.svg` | 27.13 x 36.58 | ícone | decorativo |
| `Icone` (`3089:6435`) | `public/icons/crm-urbano-portfolio-icone-proprietario.svg` | 33.01 x 38.01 | ícone | decorativo |
| `Icone` (`3089:6430`) | `public/icons/crm-urbano-portfolio-icone-portais.svg` | 35.03 x 35.04 | ícone | decorativo |

Nota: os ícones 2 e 3 têm o canvas do SVG ligeiramente maior que a caixa do node no Figma (`23.626×33.076` renderizado num canvas `27.13×36.58`, e `32.007×37.011` num canvas `33.01×38.01`) — o Figma expande o canvas para acomodar o stroke. A implementação usa o canvas completo do arquivo, o que reproduz o resultado visual correto.

---

## 4. Hero / Sales Funnel — nodeId `3089:7064`

Frame: `x=0 y=2818.78 width=1920 height=701`, `bg white`, `py=40px`.

- `Div` (`3089:7065`) — `w=1400`, flex-col `gap=32px`, centralizado
  - `Heading / H2` (`3089:7066`) — `w=1100 h=110`, `tracking -1px`
  - `Text / Description` (`3089:7067`) — `w=900 h=70`
  - `Tela` (`3887:3146`) — `w=1072 h=594`, janela de navegador com a tela de configuração da distribuição automática do CRM
  - `Link → Testar grátis por 30 dias` (`3089:7129`) — `w=297 h=56`

### Texto extraído (ordem visual)

- **H2** (Poppins Bold 36px, `line-height 1.4`, `tracking -1px`, centralizado): "Cada lead enviado para o lugar **certo**, e segue para / o corretor da fila, conforme o perfil de cada oportunidade" (2 parágrafos; "certo" em `#5d5fef`)
- **Parágrafo** (Poppins Regular 24px, `line-height 1.4`, centralizado): "Distribua leads automaticamente com roletas inteligentes, acompanhe o follow-up das negociações em um Kanban visual e potencialize o atendimento com playbooks e automações."
- **CTA**: "Testar grátis por 30 dias" → `/testar-gratis`

### Tela (imagem)

`Tela` (`3887:3146`), `w=1072 h=594`, com borda `#c5ccd3` e cantos `rounded-[13px]` já inclusos na própria imagem. Conteúdo: barra de navegador com 3 bolinhas, cabeçalho do SUB100 Imobiliárias, menu lateral, "Distribuição automática de leads: Sim", agenda semanal (segunda a domingo), "Ação fora do horário padrão" / "Responsável fora do horário" e "Ordem da distribuição" com 4 roletas (Venda de terceiros, Roleta Patrocinada, Locação anual, Agroimóveis). Substitui os 3 Kanbans em markup que existiam antes.

### Assets

- `public/images/crm-urbano/crm-urbano-funil-tela.webp` — export 2x (2144×1188) do node `3902:3088`; exibida a 1072×594.

---

## 5. Hero / Leads Chart — nodeId `3089:7130`

Frame: `x=0 y=3519.78 width=1920 height=1000`, `py=40px`.

- `Bloco` (`3089:7131`) — `x=260 y=40 w=1400 h=920`, `rounded-[50px]`, `overflow-clip`, `linear-gradient(112.22978791406061deg, rgb(242,241,248) 5.7565%, rgb(227,236,248) 46.003%, rgb(242,241,248) 89.604%)`
  - `Mask group` (`3089:7132`) — 1400 x 920, blobs desfocados de fundo (`fill-opacity` 0.15 / 0.18 / 0.2)
  - `Heading / H2` (`3089:7234`) — `x=285.875 y=56 w=828.25 h=86`
  - `Text / Description` (`3089:7233`) — `x=221.92 y=162 w=956.16 h=72`
  - `Imagem` (`3089:7138`) — `x=100 y=283 w=1195 h=460` (o diagrama)
  - `Link → Agendar Demonstração` (`3089:7137`) — `x=552 y=788 w=297 h=56`

### Texto extraído (ordem visual)

- **H2** (Poppins Bold 36px, `line-height 1.2`, centralizado): "Leads de todos os canais, / no corretor certo, na **hora certa**" (2 parágrafos; "hora certa" em `#5d5fef`)
- **Parágrafo** (Poppins Regular 24px, `line-height 1.5`, centralizado): "Centralize leads do site, portais, WhatsApp e indicações, e distribua automaticamente para quem pode atender primeiro."
- **5 nós de origem** (Poppins Regular 16px, `#242a3a`): "Site", "Portais", "WhatsApp", "Redes Sociais", "Indicações"
- **Card central**: "CRM" (Poppins Bold 31px, `#242a3a`) + "SUB100" (Poppins Bold 20px, `#655fef`) + "Distribuição inteligente / para o corretor disponível." (Poppins Regular 15px, `#313846`, centralizado, quebra explícita)
- **Chip de estatística**: "Tempo médio" (Poppins Regular 12px, `#747c92`) · "8s" (Poppins Bold 26px, `#5753e8`) · "+32% rápido" (Poppins Bold 11px, `#0daf7d`)
- **3 nós de corretor**: iniciais em Poppins Bold 16px `#605be8` ("JS", "MC", "RL") · nome em Poppins Medium 15px `#313846` ("João Silva", "Mariana Costa", "Rafael Lima") · status em Poppins Regular 11px `#12a976` ("Disponível agora", nos 3)
- **CTA**: "Testar grátis por 30 dias" → `/testar-gratis`

### Geometria do diagrama (coordenadas absolutas dentro do `Bloco` 1400 x 920; o bloco `Imagem` é `x=100 y=283 w=1195 h=460`)

| Elemento | node | x | y | w | h |
|---|---|---|---|---|---|
| Card origem "Site" | `3089:7140` | 100 | 283 | 290 | 76 |
| Card origem "Portais" | `3089:7145` | 100 | 379 | 290 | 76 |
| Card origem "WhatsApp" | `3089:7151` | 100 | 475 | 290 | 76 |
| Card origem "Redes Sociais" | `3089:7156` | 100 | 571 | 290 | 76 |
| Card origem "Indicações" | `3089:7161` | 100 | 667 | 290 | 76 |
| Ícone-chip de cada origem | — | 118 | +16 do card | 44 | 44 |
| Rótulo de cada origem | — | 184 | +28 do card | — | 24 |
| Pontos conectores (esquerda) | `3089:7175` | 383 | 314 | 14 | 398 |
| Linhas conectoras (esquerda) | `3089:7169` | 390 | 321 | 164.5 | 384 |
| Ponto antes do card central | `3089:7192` | 546 | 505 | 16 | 16 |
| Card central | `3089:7181` | 554 | 403 | 302 | 224 |
| Caixa do logo (gradiente) | `3089:7186` | 619 | 427 | 72 | 72 |
| Divisor do card central | `3089:7188` | 578 | 519 | 254 | 0 |
| Barra de progresso (trilha / preenchimento) | `3089:7190` / `3089:7191` | 622 | 594 | 138 / 98 | 5 |
| Ponto depois do card central | `3089:7232` | 848 | 505 | 16 | 16 |
| Linhas conectoras (direita) | `3089:7224` | 856 | 376 | 149 | 274 |
| Pontos conectores (direita) | `3089:7228` | 998 | 369 | 14 | 288 |
| Chip "Tempo médio 8s" | `3089:7193` | 594 | 653 | 222 | 76 |
| Card corretor "João Silva" | `3089:7203` | 1005 | 331 | 290 | 90 |
| Card corretor "Mariana Costa" | `3089:7210` | 1005 | 468 | 290 | 90 |
| Card corretor "Rafael Lima" | `3089:7217` | 1005 | 605 | 290 | 90 |
| Avatar de cada corretor | — | 1026 | +21 do card | 48 | 48 |

### Cores/estilos exatos (lidos diretamente dos SVGs exportados)

- Card de origem (`src-card-bg`, 291 x 77): `fill white` + `fill-opacity 0.92`, `stroke #DCE5F3`, raio 18px
- Chips de ícone (44 x 44, raio 13px): Site `#313846` · Portais `#676AF1` · WhatsApp `#25D366` · Redes Sociais `#FBBC04` · Indicações `#1CD9A4`
- Card central (303 x 225): `fill white` + `fill-opacity 0.93`, `stroke #D8D7FA`, raio 30px
- Caixa do logo (72 x 72, raio 20px): `linear-gradient` de `#6E67FF` a `#4644E8`
- Divisor do card central: `stroke #E3E5F1`
- Barra de progresso: trilha `#ECECFF`, preenchimento `#6863F1` (98/138), altura 5px, raio total
- Chip de estatística (223 x 77): `fill white` + `fill-opacity 0.94`, `stroke #DFE1F4`, raio 18px; círculo do ícone 36 x 36 `#F0F0FF`; glifos com `stroke #665FF0`
- Card de corretor (291 x 91): `fill white` + `fill-opacity 0.94`, `stroke #DEDDF5`, raio 20px; avatar 48 x 48 `#EEEDFF`; ponto de status 8 x 8 `#12BE83`
- Pontos conectores: esquerda `#69DED1`, direita `#8B71FA`, ambos com `stroke white` de 4px; pontos junto ao card central `#6A65F2` com `stroke white` de 4px
- Linhas conectoras: gradientes `#68DFD1 → #7068FF` (esquerda) e `#68DFD1 / #6AC4DC → #7068FF` (direita), `stroke-width 2.2`, `stroke-linecap round`

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| `Mask group` (`3089:7132`) | `public/icons/crm-urbano-leads-bloco-blobs.svg` | 1400 x 920 | decorativo | decorativo |
| `Vector` (`3089:7143`, globo) | `public/icons/crm-urbano-leads-icone-site.svg` | 25 x 24.92 | ícone | decorativo |
| `Group 1000004559` (`3089:7148`) | `public/icons/crm-urbano-leads-icone-portais.svg` | 26.5 x 25.5 | ícone | decorativo |
| `Vector` (`3089:7155`, WhatsApp) | `public/icons/crm-urbano-leads-icone-whatsapp.svg` | 26 x 26 | ícone | decorativo |
| `Vector` (`3089:7160`, compartilhar) | `public/icons/crm-urbano-leads-icone-redes-sociais.svg` | 23 x 26 | ícone | decorativo |
| `Camada_x0020_1` (`3089:7164`) | `public/icons/crm-urbano-leads-icone-indicacoes.svg` | 26 x 25 | ícone | decorativo |
| `Vector` (`3089:7187`, camadas) | `public/icons/crm-urbano-leads-icone-camadas.svg` | 31 x 33 | ícone | decorativo |
| `Vector` (`3089:7196`) | `public/icons/crm-urbano-leads-icone-tempo-1.svg` | 30 x 14 | ícone | decorativo |
| `Vector` (`3089:7197`) | `public/icons/crm-urbano-leads-icone-tempo-2.svg` | 18 x 18 | ícone | decorativo |
| `Vector` (`3089:7198`) | `public/icons/crm-urbano-leads-icone-tempo-3.svg` | 7 x 6 | ícone | decorativo |
| `Group` (`3089:7169`) | `public/icons/crm-urbano-leads-conectores-esquerda.svg` | 166.7 x 386.2 | decorativo | decorativo |
| `Group` (`3089:7175`) | `public/icons/crm-urbano-leads-pontos-esquerda.svg` | 18 x 402 | decorativo | decorativo |
| `Group` (`3089:7224`) | `public/icons/crm-urbano-leads-conectores-direita.svg` | 151.2 x 276.2 | decorativo | decorativo |
| `Group` (`3089:7228`) | `public/icons/crm-urbano-leads-pontos-direita.svg` | 18 x 292 | decorativo | decorativo |
| `Vector` (`3089:7192` / `3089:7232`) | `public/icons/crm-urbano-leads-ponto-central.svg` | 20 x 20 | decorativo | decorativo |

Nota: o ícone do chip "Tempo médio" vem do Figma decomposto em **3 fragmentos vetoriais** (raios, círculo e ponteiro), sem um node único que os agrupe — mesma situação já documentada para os ícones de calendário/e-mail em `FIGMA_CONTENT_MANIFEST_CRM.md` §1. Eles são reproduzidos como 3 `<img>` sobrepostos posicionados por porcentagem dentro do círculo de 36 x 36, em vez de reescritos como um SVG único à mão. Os retângulos/círculos simples (fundos dos cards, avatares, ponto de status, barra de progresso) **não** foram baixados: são reproduzidos em CSS com as cores exatas listadas acima, lidas dos SVGs correspondentes.

---

## 6. Hero / Reports — nodeId `3089:7235`

Frame: `x=0 y=4519.78 width=1920 height=656`, `bg white`, `px=260px py=40px`.

- `Div` (`3089:7236`) — `w=1400`
  - `Heading / H2` (`3089:7281`) — `ml=200 w=1000`, `tracking -1px`
  - `Text / Description` (`3089:7280`) — `ml=270 mt=110 w=860 h=60`
  - `List` (`3089:7238`) — `mt=230`, flex `gap=34px`, 4 cards de `324–325 x 220`
  - CTA (`3089:7237`) — `ml=552 mt=520 w=297 h=56`

### Texto extraído (ordem visual)

- **H2** (Poppins Bold 36px, `line-height 1.2`, `tracking -1px`, centralizado): "Metas e resultados, / acompanhados em **tempo real**" (2 parágrafos; "tempo real" em `#5d5fef`)
- **Parágrafo** (Poppins Regular 24px, `line-height 1.4`, centralizado): "Defina metas por corretor ou equipe e acompanhe taxa de conversão, tempo de resposta e desempenho por origem."
- **CTA**: "Testar grátis por 30 dias" → `/testar-gratis`

**4 stat cards** (`h=220`, `rounded-[20px]`, `bg white`, `border #ededf2`, `drop-shadow-[0px_6px_9px_rgba(26,26,63,0.06)]`; caixa do ícone `56 x 56`, `rounded-[16px]`, em `left=27 top=27`, com o glifo `36 x 36` centralizado; número em Poppins Bold 40px em `top=103`; rótulo em Poppins Medium 15px `#313846` em `top=159`; indicador secundário em 13px em `top=183`):

| # | Número | Cor do número | Fundo do ícone | Rótulo | Indicador secundário | Cor do indicador |
|---|---|---|---|---|---|---|
| 1 | 68% | `#5d5fef` | `rgba(93,95,239,0.1)` | Taxa de conversão | "↑ 8pts este mês" | `#00b894` |
| 2 | 2h | `#3b82f6` | `rgba(59,130,246,0.1)` | Tempo médio de resposta | "↓ 30min vs mês anterior" | `#00b894` |
| 3 | 312 | `#f59e0b` | `rgba(245,158,11,0.1)` | Leads este mês | "↑ 18% vs mês anterior" | `#00b894` |
| 4 | 94% | `#00d39b` | `rgba(0,211,155,0.1)` | Metas atingidas | "Meta: 90%" | `#8b8da0` |

Nota: os indicadores 1–3 incluem, verbatim, o caractere de seta ("↑ 8pts este mês", "↓ 30min vs mês anterior", "↑ 18% vs mês anterior") como parte do próprio texto — não são ícones separados. O card 4 não tem seta e usa cor cinza (`#8b8da0`), não verde.

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| `Ícone — Conversão` (`3089:7241`) | `public/icons/crm-urbano-reports-icone-conversao.svg` | 36 x 36 | ícone | decorativo |
| `Ícone — Tempo de resposta` (`3089:7250`) | `public/icons/crm-urbano-reports-icone-tempo-resposta.svg` | 36 x 36 | ícone | decorativo |
| `Ícone — Leads` (`3089:7260`) | `public/icons/crm-urbano-reports-icone-leads.svg` | 36 x 36 | ícone | decorativo |
| `Ícone — Metas` (`3089:7271`) | `public/icons/crm-urbano-reports-icone-metas.svg` | 36 x 36 | ícone | decorativo |

---

## 7. Hero / Portal Integrations — nodeId `3089:7282`

Frame: `x=0 y=5175.78 width=1920 height=676`, `py=40px`.

- `Bloco` (`3089:7283`) — `w=1400`, `rounded-[50px]`, `bg #eeedff`, `overflow-clip`, flex `gap=60px`, `px=30px`
  - `Imagem` (`3089:7284`) — `w=720 h=596`
    - `Mobile` (`3089:7285`) — `x=39 y=23 w=681 h=573` (anéis decorativos + mockup do celular)
    - `Portais` (`3089:7419`) — 7 badges flutuantes de `80 x 80`
  - Coluna de texto (`3414:6083`) — `w=525`, flex-col `gap=38px`

### Texto extraído (ordem visual)

- **H2** (`3089:7476`, Poppins Bold 36px, `line-height 1.2`): "Publique **seus imóveis** / nos principais portais" ("seus imóveis" em `#5d5fef`; quebra explícita)
- **Parágrafo** (`3089:7475`, 24px, `line-height 1.4`, `#313846`): "Centralize o cadastro dos seus imóveis no **SUBSEE** e envie seus anúncios para diferentes portais imobiliários de forma integrada, facilitando a gestão e ampliando a visibilidade" ("SUBSEE" em negrito)
  - Nota de fonte: esta camada usa `Inter Regular`/`Inter Bold` no Figma, divergindo do padrão Poppins do restante da página e do site. A implementação segue o padrão tipográfico do site (Poppins), como já foi decidido para o H1 de `/modulos/crm` (ver `FIGMA_CONTENT_MANIFEST_CRM.md` §1) — divergência intencional e registrada, não um gap de extração.
- **CTA**: "Testar grátis por 30 dias" → `/testar-gratis`
- **Badge "chave na mão"** (`3089:7465`, Poppins Bold 10px, `tracking -0.3px`, preto, centralizado, 2 linhas): "chave" / "na mão"
- **Badge "imovel web"** (`3089:7473`, Poppins SemiBold 11px, `tracking -0.33px`, `#313846`, centralizado, 2 linhas): "imovel" / "web"
- **Mockup**: tela "Marketing" (etapa 6 de 7) do app SUB100 Imobiliárias, com as seções "Conexões primárias" (Liberado, Meu Site), "Portais imobiliários" (Portal Sub100, "Anunciar em outros portais", Imovelweb, Olx, Zap imóveis, Viva Real, Chaves na mão, Casa Mineira) e "Divulgar no anúncio" (Divulgar Preço, Divulgar Negociação, Divulgar Corretor, Variação de Preço). **Dados de demonstração da interface**, embutidos na imagem.

### Posições dos 7 badges (coordenadas dentro de `Imagem`, 720 x 596; todos `80 x 80`, `rounded-full`, `drop-shadow-[0px_35px_32px_rgba(0,0,0,0.08)]`)

| Badge | node | x | y | Fundo | Conteúdo |
|---|---|---|---|---|---|
| SUB100 | `3089:7456` | 70 | 140 | `#5d5fef` | logo `50 x 33.85` |
| VivaReal | `3089:7436` | 99 | 268 | white | logo `50 x 40.24` |
| imovel web | `3089:7466` | 0 | 379 | white | glifo `15 x 30.21` + texto de 2 linhas |
| 123i | `3089:7427` | 113 | 469 | white | logo `49.48 x 23` |
| zap | `3089:7420` | 587 | 121 | white | logo `50 x 22` |
| OLX | `3089:7451` | 571 | 269 | white | logo `45 x 27.45` |
| chave na mão | `3089:7460` | 560 | 469 | white | glifo `27 x 27` + texto de 2 linhas |

### Nota (contagem de badges: 7, não 6)

O `tasks.md` (T1, linha 7) e o `spec.md` (P2 AC6) listam **6** badges (SUB100, VivaReal, imovelweb, ZAP, OLX, Chaves na Mão). O node real contém **7**: existe também um badge com o logo **123i** (node `3089:7427`, nome interno de camada "12 1", em `x=113 y=469`). O logo é o mesmo wordmark já versionado em `public/icons/logo-123i.svg` (paths e cores `#121619`/branco/`#EF764E` idênticos), mas ali dentro de um círculo branco com contorno roxo de 98 x 98, enquanto aqui é o wordmark puro sobre o badge branco — por isso o wordmark foi baixado como arquivo próprio. **Divergência resolvida a favor do conteúdo real do Figma**: a implementação renderiza os 7 badges.

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| `Mobile` (`3089:7285`, export achatado: anéis decorativos + celular) | `public/images/modulos-crm-urbano/portais-mockup-app-marketing.png` | 1362 x 1146 (@2x) | mockup | Mockup do app SUB100 na etapa de Marketing, com os portais imobiliários integrados e seus interruptores ativos |
| `_23Layer_x0020_1` (`3089:7458`) | `public/icons/crm-urbano-portais-logo-sub100.svg` | 50 x 33.85 | logo | Logo SUB100 |
| `Group 1000004563` (`3089:7437`) | `public/icons/crm-urbano-portais-logo-vivareal.svg` | 50 x 40.24 | logo | Logo VivaReal |
| `_2396805998144` (`3089:7469`) | `public/icons/crm-urbano-portais-logo-imovelweb.svg` | 15 x 30.21 | logo | Logo imovelweb |
| `Conteúdo_x0020_do_x0020_PowerClip` (`3089:7429`) | `public/icons/crm-urbano-portais-logo-123i.svg` | 49.48 x 23 | logo | Logo 123i |
| `zap` (`3089:7421`) | `public/icons/crm-urbano-portais-logo-zap.svg` | 50 x 22 | logo | Logo Zap Imóveis |
| `Group 1000004564` (`3089:7452`) | `public/icons/crm-urbano-portais-logo-olx.svg` | 45 x 27.45 | logo | Logo OLX |
| `Group 1000004567` (`3089:7461`) | `public/icons/crm-urbano-portais-logo-chave-na-mao.svg` | 27 x 27 | logo | Logo Chaves na Mão |

Nota: `logo-zap.svg` e `logo-imovelweb.svg` já existem no projeto, mas são recortes/dimensões diferentes dos desta página (`md5sum` divergente e dimensões distintas), por isso foram baixados como arquivos próprios com o prefixo `crm-urbano-portais-` em vez de reaproveitados.

---

## 8. Hero / Dashboard — nodeId `3089:7477`

Frame: `x=0 y=5851.78 width=1920 height=729`.

- `Div` (`3089:7478`) — `x=260 y=40 w=1400 h=649`
  - `Heading / H2` (`3089:7986`) — `x=447 y=40 w=1100 h=50` (coordenadas absolutas na página)
  - `Text / Description` (`3089:7985`) — `x=509 y=95 w=976 h=36`
  - `Coluna 01` (`3089:7949`) — `x=260 y=125 w=583 h=564`
    - `CSS` (`3089:7950`) — elipse de blur decorativa, `w=395.43 h=564`
    - `List - Beneficios` (`3089:7951`) — `bg white`, `rounded-[25px]`, `px=33px py=41px`, `w=545.49`, flex-col `gap=29px`
  - `Coluna 02` (`3089:7479`) — `x=843 y=125 w=817 h=564`
    - `Imagem` (`3089:7538`) — `x=4 y=75.37 w=807.56 h=469.15` (notebook + tela)
    - `Card` (`3089:7942`) — `x=606.27 y=59.37`, bbox `186.72 x 109.37`
    - `Card` (`3089:7945`) — `x=36.23 y=405.37`, bbox `224.93 x 111.38`

### Texto extraído (ordem visual)

- **H2** (Poppins Bold 34px, `tracking -1px`, centralizado): "O painel que dá **clareza** ao seu negócio" ("clareza" em `#5d5fef`)
- **Parágrafo** (Poppins Regular 24px, centralizado): "Imóveis, propostas, leads e financeiro: tudo em tempo real no Dashboard SUBSEE."
- **`List - Beneficios`** — 4 itens, cada um com ícone `44 x 44` + H3 (Poppins Bold 18px item 1 / 16px itens 2–4, `#313846`) + descrição (Poppins Regular 16px, `line-height 1.5`, `rgba(49,56,70,0.7)`), `gap=16px` entre ícone e texto:
  1. **Visão completa em tempo real** — "Acompanhe imóveis, propostas, leads e financeiro em um único painel, sempre atualizado."
  2. **Alertas que evitam perda de negócio** — "Identifique imóveis vencendo, retornos de chave atrasados e oportunidades antes que se percam."
  3. **Indicadores por tipo de negócio** — "Venda, locação, lançamento e temporada, cada um com sua performance detalhada."
  4. **Gestão de equipe integrada** — "Distribua leads, acompanhe candidaturas e monitore o desempenho do time comercial."
- **Badge flutuante 1** (`3089:7942`): "1.271" (Poppins Bold 32px, branco) + "imóveis ativos" (Poppins Medium 13px, `rgba(255,255,255,0.9)`) — `bg #00d39b`, `rounded-[18px]`, `shadow-[0px_18px_36px_0px_rgba(0,211,155,0.3)]`
- **Badge flutuante 2** (`3089:7945`): "316" (Poppins Bold 32px, branco) + "(Este mês)" (Poppins Regular 11px, `rgba(255,255,255,0.9)`) + "Vendidos/Alugados" (Poppins Medium 13px) — `bg #5d5fef`, `rounded-[18px]`, `shadow-[0px_18px_36px_0px_rgba(93,95,239,0.35)]`
- **Nenhum CTA neste node.**

### Nota (rotação dos 2 badges — medida, não estimada)

As bounding boxes reportadas pelo `get_metadata` para os dois badges e para seus textos internos são todas **não-inteiras** (ex.: texto "1.271" com bbox `101.95638924837112 x 45.17877593636513` para uma caixa nominal de `100 x 40`). Resolvendo o sistema `w·cosθ + h·senθ = bbox_w` / `h·cosθ + w·senθ = bbox_h` para os dois textos e para os dois cards, obtém-se θ ≈ **3°** e tamanhos nominais de **182 x 100** (badge "1.271") e **220 x 100** (badge "316"). Pelas capturas de tela dos dois nodes, a borda superior sobe para a direita — ou seja, o equivalente em CSS é `rotate(-3deg)`. Os cards são retângulos arredondados simples: **não** têm "bico"/cauda de balão de fala, apesar da aparência à primeira vista na captura da seção inteira.

### Nota (tamanho do H3 do item 1)

No Figma o título do **item 1** ("Visão completa em tempo real") é **18px**, enquanto os títulos dos itens 2–4 são **16px** — confirmado no `get_design_context` do node `3089:7949` (item 1 declara `text-[18px]` no próprio parágrafo do título; itens 2–4 herdam `text-[16px]` do `Div` pai). Não é um erro de extração: é uma inconsistência do próprio arquivo de design, reproduzida fielmente na implementação.

### Ícone do item 1 (composto, sem asset)

O ícone de "Visão completa em tempo real" (`3089:7977`) **não é um SVG**: é uma caixa `44 x 44`, `rounded-[12px]`, `bg rgba(93,95,239,0.1)`, com 4 retângulos `bg #5d5fef` `rounded-[2px]` posicionados dentro dela — `12 x 9` em (8,8); `12 x 14` em (24,8); `12 x 15` em (8,21); `12 x 10` em (24,26). Reproduzido em CSS, sem download.

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| `Imagem` (`3089:7538`, export achatado do notebook + tela) | `public/images/modulos-crm-urbano/dashboard-mockup-notebook.png` | 1616 x 939 (@2x) | mockup | Mockup do Dashboard SUBSEE em um notebook, com os indicadores de imóveis, propostas, leads e financeiro |
| `CSS` (`3089:7950`, elipse de blur) | `public/icons/crm-urbano-dashboard-ellipse-blur.svg` | 595.43 x 764 | decorativo | decorativo |
| `Icone` (`3089:7968`) | `public/icons/crm-urbano-dashboard-icone-alertas.svg` | 44 x 44 | ícone | decorativo |
| `Indicadores por tipo de negócio` (`3089:7960`) | `public/icons/crm-urbano-dashboard-icone-indicadores.svg` | 44 x 44 | ícone | decorativo |
| `Icone` (`3089:7953`) | `public/icons/crm-urbano-dashboard-icone-equipe.svg` | 44 x 44 | ícone | decorativo |

Nota: o node `SVG` (`3089:7481`, `180.35 x 152.71`, padrão de pontos decorativo atrás do notebook) não foi baixado — é uma decoração de fundo, tratada com a mesma regra de simplicidade do manifesto de `/modulos/crm` (fundos/blobs decorativos reproduzidos em CSS ou omitidos quando nenhuma AC os exige).

---

## 9. Hero / Testimonials — nodeId `3089:7987`

Frame: `x=0 y=6580.78 width=1920 height=770`, `bg white`, `py=40px`.

- `Bloco` (`3089:7988`) — `x=260 y=40 w=1400 h=690`, `rounded-[50px]`, `bg #ebf4fe`, `overflow-clip`
  - `SVG` (`3089:7989`) — onda decorativa, `x=-260 y=-17 w=1917.9 h=194.64`
  - `Heading / H2` (`3089:8005`) — centro em `(267.5, 264.5)`
  - `Logomarca` (`3089:7995`) — caixa branca `275.78 x 85.49`, `rounded-[20px]`, em `x=130 y=403`, com o logo "SUBSEE on" `183.92 x 45.17` em `x=176 y=424.64`
  - `Cards → Depoimentos` (`3089:7992`) — `x=522 y=66`, flex `gap=50px`, 2 cards de `w=380`

### Texto extraído (ordem visual)

- **H2** (Poppins Bold 36px, `line-height 1.4`, centralizado, 3 linhas): "O que **nossos clientes** / falam dos nossos / produtos e serviços" ("nossos clientes" em `#5d5fef`)

**Depoimento 1** (`3089:7994`, card `bg white`, `rounded-[16px]`, `p=30px`, `gap=30px`, `shadow-[0px_2px_40px_-6px_rgba(103,105,240,0.1)]`):

- Avaliação: 5 estrelas (`161 x 27`)
- Citação (Poppins Regular 16px, `line-height 1.5`, centralizado, `#313846`): "Minha relação com a SUB100 começou há muitos anos, ainda como corretor. Quando abri minha própria imobiliária, escolher o CRM SUBSEE foi uma consequência natural dessa confiança. Hoje, como empresário, sigo contando com uma parceria tecnológica capaz de acompanhar nosso crescimento e atender às novas necessidades que surgem com a expansão da empresa."
- Logo da empresa: Carmona Imóveis (`210 x 46.57`)
- Nome (Poppins Bold 17.6px, `#5d5fef`): "Marcio Carmona"
- Cargo (Poppins Regular 14px, `#313846`): "Diretor"
- Empresa (Poppins Regular 14px, `#313846`): "Carmona Imóveis"

**Depoimento 2** (`3089:7993`, mesmo estilo):

- Avaliação: 5 estrelas
- Citação: "A Legado Urbano nasceu da união de três amigos corretores com uma visão comum de crescimento. Desde o início, entendemos a importância de contar com parceiros sólidos e tecnologia confiável. No SUBSEE e na SUB100 Sistemas encontramos uma estrutura capaz de apoiar nossos processos e acompanhar a evolução da nossa empresa."
- Logo da empresa: Legado Urbano (`250 x 34.09`)
- Nome: "Edson Naka"
- Cargo: "Diretor"
- Empresa: "Legado Urbano"

### Observação de qualidade do arquivo Figma (logos "fantasma")

Um `get_design_context` no node da seção inteira devolve, para **os dois** cards, o **mesmo** asset de logomarca — um vetor cujo nome de camada é "Soma Imóveis" e que é `md5sum`-idêntico ao já versionado `public/icons/logo-soma-imoveis.svg`. Esse **não** é o logo visível. Consultando cada card individualmente via `download_assets`, a subárvore de cada um contém 4–5 logos remanescentes de instâncias reaproveitadas do componente de depoimentos da Home (Soma Imóveis, Bellakaza, ideal 1, Benedini, "Vettore"), cobertos pelos logos reais. Os logos **realmente visíveis**, confirmados por captura de tela do node `3089:7992`, são **CARMONA IMÓVEIS** e **LEGADO URBANO**. Mesma classe de problema já documentada em `FIGMA_CONTENT_MANIFEST_CRM.md` §7 — registrar como lição: para esta seção, **sempre** consultar cada card individualmente e conferir contra a captura de tela.

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| `Legado` (card `3089:7993`) | `public/icons/crm-urbano-logo-legado-urbano.svg` | 250 x 34.09 | logo | Logo Legado Urbano |
| `_2432243841280` (`3089:7998`) | `public/icons/crm-urbano-logo-subsee-on.svg` | 183.92 x 45.17 | logo | Logo SUBSEE on |

**Reusos confirmados:**

| Nome Figma | Arquivo reaproveitado | Verificação |
|---|---|---|
| `Carmano` (card `3089:7994`, 210 x 46.5742) | `public/icons/logo-carmona-imoveis.svg` | `diff` sem diferença alguma (arquivos idênticos) |
| `estrelas 1` (161 x 27) | `public/icons/icone-estrelas-avaliacao.svg` | `md5sum` idêntico |
| `Group 2` (aspas de abertura, 93.26 x 69.54) | `public/icons/aspas-abertura.svg` | `md5sum` idêntico |
| `Group 1` (aspas de fechamento, 93.26 x 69.54) | `public/icons/aspas-fechamento.svg` | `md5sum` idêntico (nos dois cards) |
| `SVG` (`3089:7989`, onda decorativa) | `public/icons/onda-decorativa-crm-depoimentos.svg` | `md5sum` idêntico |

Nota: `logo-subsee-on.svg` já existe no projeto, mas com altura 40 em vez de 45.17 — recorte diferente, por isso o desta página foi salvo como arquivo próprio.

---

## 10. Hero / Other Modules — nodeId `3089:8006`

Frame: `x=0 y=7350.78 width=1920 height=566`, `px=260px py=40px`, flex-col `gap=50px`.

- `Header` (`3089:8007`) — `w=1400 h=92`
- `List - CRM Imobiliário` (`3089:8010`) — flex-col `gap=30px`, 3 cards `1120 x 96`

### Texto extraído (ordem visual)

- **H2** (`3089:8009`, Poppins Bold 36px, `#303847`): "Conheça os outros módulos do CRM Imobiliário"
- **Parágrafo** (`3089:8008`, Poppins Regular 24px, `#313846`): "Soluções desenvolvidas para diferentes segmentos do mercado imobiliário."

**3 cards** (`bg white`, `rounded-[20px]`, `shadow-[0px_2px_35px_0px_rgba(31,56,115,0.08)]`; container do ícone `78 x 74`, `rounded-[16px]`, `bg #f7f7ff`, em `left=11`; título em Poppins SemiBold 20px `#5d5fef`; descrição em Poppins Regular 16px `#666e8a`; botão `215 x 52`, `rounded-[12px]`, `bg #5d5fef`, `shadow-[0px_7px_18px_-7px_rgba(20,64,217,0.22)]`, texto Poppins SemiBold 16px branco):

| # | Título | Descrição | Botão | Destino |
|---|---|---|---|---|
| 1 | CRM Imobiliário | Conheça recursos de IA, automações e integrações da plataforma. | Clique aqui → | `/modulos/crm` |
| 2 | CRM Imobiliário Rural | Gestão completa de propriedades rurais e negociações do campo. | Clique aqui → | `/modulos/rural` |
| 3 | CRM para Temporada | Gestão completa de aluguéis por temporada e reservas de imóveis. | Clique aqui → | `/modulos/temporada` |

Nota: o texto do CTA é "**Clique aqui →**" (a seta faz parte do texto), idêntico ao já implementado em `CrmOtherModules.vue`. O nome interno das 3 camadas de card é, em todos os 3, "CRM Imobiliário Urbano" (rótulo herdado do componente-fonte) — o **conteúdo** de cada card é o da tabela acima. Esta lista é a **complementar** à de `CrmOtherModules.vue`: inclui o CRM genérico e exclui o Urbano (a própria página).

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| `team icon` (`I3089:8010;2385:1951`) | `public/icons/crm-urbano-modulos-icone-crm.svg` | 51 x 51 | ícone | Ícone do módulo CRM Imobiliário |
| `Camada_x0020_1` (`I3089:8010;2385:1874`) | `public/icons/crm-urbano-modulos-icone-rural.svg` | 40 x 40 | ícone | Ícone do módulo CRM Imobiliário Rural |
| `icon` (`I3089:8010;2385:1906`) | `public/icons/crm-urbano-modulos-icone-temporada.svg` | 35.99 x 40 | ícone | Ícone do módulo CRM para Temporada |

Nota: os ícones do mega-menu já existentes (`menu-icone-crm-generico.svg` 27 x 25, `menu-icone-crm-rural.svg` 22 x 22, `menu-icone-crm-temporada.svg` 29 x 31) representam os mesmos módulos, mas são vetores de dimensões e desenho diferentes dos deste node — por isso os desta seção foram baixados em vez de reaproveitados (diferente da decisão tomada em `FIGMA_CONTENT_MANIFEST_CRM.md` §8, onde os ícones do Figma vinham decompostos em fragmentos ambíguos; aqui cada ícone é um vetor único e limpo).

---

## 11. Hero / FAQ — nodeId `3089:8011`

Frame: `x=0 y=7916.78 width=1920 height=1720`, `pt=40px pb=80px px=260px`.

- `Bloco` (`3089:8012`) — `w=1400`, `rounded-[50px]`, `bg #f5f5f5`, `px=195px py=120px`, flex-col `gap=29px`
  - Título (`3089:8063`) — Poppins SemiBold 52px, `w=583`, centralizado
  - Subtítulo (`3089:8062`) — Poppins Regular 20px, preto, centralizado
  - `FAQ` (`3089:8013`) — 6 itens; por item: pergunta (Poppins SemiBold 20px, `line-height 20px`, `#313846`), resposta (Poppins Regular 16px, `line-height 26px`, `#313846`, `w≈870`), ícone `PlusCircle` `30 x 30` alinhado à direita (`ml≈940`) e linha divisória `w=970`

### Texto extraído (ordem visual)

- **H2**: "Perguntas Frequentes"
- **Subtítulo**: "Tire suas dúvidas sobre o CRM Imobiliário da SUBSEE on."

**Pergunta 1** (`3089:8061`): "O que é o CRM Imobiliário Urbano do SUBSEE?"
**Resposta 1** (`3089:8056`): "O CRM Imobiliário Urbano do SUBSEE foi desenvolvido para organizar a rotina comercial de imobiliárias que trabalham com venda, locação e lançamentos. O sistema centraliza imóveis, clientes, leads, atendimentos, funil de vendas, propostas, negociações e publicação em portais, permitindo acompanhar toda a jornada comercial, do primeiro contato até o fechamento do negócio."

**Pergunta 2** (`3089:8053`): "Como funciona a distribuição de leads para os corretores?"
**Resposta 2** (`3089:8048`): "O SUBSEE distribui leads automaticamente por meio de uma roleta de atendimento configurável, que pode considerar corretores, equipes, tipo de negócio, horários, plantões e períodos específicos de atendimento, como noites e finais de semana. Essa flexibilidade permite adaptar a distribuição à operação de cada imobiliária, reduzir o tempo de resposta e diminuir o risco de perda de oportunidades."

**Pergunta 3** (`3089:8045`): "O SUBSEE publica imóveis automaticamente nos portais imobiliários?"
**Resposta 3** (`3089:8040`): "Sim. O imóvel é cadastrado no CRM SUBSEE e pode ser distribuído automaticamente para os portais imobiliários integrados à plataforma. Dessa forma, a imobiliária mantém seus anúncios atualizados a partir de um único cadastro, reduzindo trabalho manual, duplicidade de informações e retrabalho da equipe."

**Pergunta 4** (`3089:8037`): "É possível acompanhar metas, conversão e desempenho da equipe?"
**Resposta 4** (`3089:8032`): "Sim. O CRM SUBSEE permite acompanhar metas e indicadores comerciais por tipo de negócio, incluindo conversão de leads, tempo de atendimento e resultados alcançados pela equipe. A plataforma também oferece informações de retroalimentação para o marketing, ajudando gestores a entender não apenas quantos leads foram gerados, mas a qualidade desses leads e o resultado das campanhas."

**Pergunta 5** (`3089:8029`): "O CRM SUBSEE atende venda, locação e outros tipos de negócio imobiliário?"
**Resposta 5** (`3089:8024`): "Sim. O SUBSEE permite acompanhar separadamente operações de Venda, Locação, Lançamentos, Imóveis Rurais e Temporada. Cada tipo de negócio possui sua própria jornada comercial e seus indicadores, permitindo que a imobiliária analise a performance de cada operação sem misturar processos e resultados diferentes."

**Pergunta 6** (`3089:8020`): "Posso testar o CRM Imobiliário Urbano antes de contratar?"
**Resposta 6** (`3089:8021`): "Sim. Durante o período de teste do CRM Imobiliário SUBSEE, sua equipe pode conhecer as funcionalidades da plataforma e também utilizar a base de conhecimento, participar de lives e treinamentos e esclarecer dúvidas com a Mel, assistente de suporte com inteligência artificial. A equipe também pode abrir chamados de suporte e contar com o acompanhamento de um gestor de conta durante o onboarding, facilitando a adoção e a evolução no uso do sistema."

(Total: 6 perguntas, na ordem visual de cima para baixo — que coincide com a numeração interna "01"–"06" das camadas. No estado do arquivo Figma, o item **06** aparece expandido, com o ícone "−"; os itens 01–05 aparecem recolhidos, com "+".)

### Assets

Nenhum asset novo.

**Reusos confirmados:**

| Nome Figma | Arquivo reaproveitado | Verificação |
|---|---|---|
| `PlusCircle` (itens 01–05, `30 x 30`) | `public/icons/faq-plus-circle.svg` | `md5sum` idêntico |
| `PlusCircle` (item 06 = estado aberto, `30 x 30`) | `public/icons/faq-minus-circle.svg` | `md5sum` idêntico |
| `Line 8` (divisória, `w=970 h=0`) | reproduzida em CSS (`border-top`), sem asset | — |

Nota: diferente da decisão tomada para `/modulos/crm` (onde o `design.md` mandou usar o chevron de `HeroFaq.vue`), esta página **usa os ícones "+"/"−" reais do Figma**, que já estão versionados no projeto como `faq-plus-circle.svg`/`faq-minus-circle.svg` — conforme o `spec.md` P3 AC4 desta feature.

---

## Itens que precisam de decisão/atenção manual

1. **Hero/Top** — o node não contém CTA algum; nenhum foi inventado (mesma situação de `/modulos/crm`). O primeiro CTA da página está na seção Technology.
2. **Technology** — a instância do botão chama-se "Link → Agendar Demonstração" mas renderiza "Testar grátis por 30 dias"; vale o texto real.
3. **Sales Funnel** — o conteúdo visual da seção é a imagem da tela de distribuição automática (`Tela`, `3887:3146`), não mais os 3 Kanbans em markup.
4. **Portal Integrations** — o Figma tem **7** badges de portal, não 6: existe também um badge **123i**. Resolvido a favor do conteúdo real.
5. **Portal Integrations** — o parágrafo usa `Inter` no Figma (divergindo do Poppins do resto da página/site); a implementação usa Poppins, seguindo o padrão tipográfico do site.
6. **Dashboard** — os 2 badges flutuantes são **rotacionados 3°** (`rotate(-3deg)` em CSS), com tamanhos nominais `182 x 100` e `220 x 100`; medida derivada das bounding boxes, não estimada visualmente.
7. **Testimonials** — a subárvore de cada card contém logos "fantasma" (Soma Imóveis, Bellakaza, ideal 1, Benedini, "Vettore") não visíveis; os logos reais são **Carmona Imóveis** e **Legado Urbano**. Um `get_design_context` na seção inteira devolve o logo errado para os dois cards — consultar cada card individualmente.
8. **Other Modules** — o CTA real é "Clique aqui →" (com a seta no texto); os nomes internos das 3 camadas de card são todos "CRM Imobiliário Urbano" (rótulo herdado), o que **não** reflete o conteúdo.
9. **Download de assets** — as URLs `.png` devolvidas por `get_design_context` para *fills* de imagem retornam PNG em branco; usar `download_assets` (campo `export`) com `curl -L`.
10. **Frame `3554:3142`** ("Claude, não mexe site e não coloca no site") — ignorado, conforme `spec.md`.

---

## Resumo de arquivos baixados

- Imagens/mockups novos em `public/images/modulos-crm-urbano/`: **6 arquivos** (`hero-composicao-mulher-tablet.png`, `hero-card-apartamento-predio.png`, `technology-mockup-cadastro-imovel.png`, `portfolio-telas-imoveis-urbanos.png`, `portais-mockup-app-marketing.png`, `dashboard-mockup-notebook.png`).
- Ícones/logos novos em `public/icons/` (prefixo `crm-urbano-`): **45 arquivos** — 6 do Hero, 4 do Portfolio, 15 do Leads Chart, 4 do Reports, 7 do Portal Integrations, 4 do Dashboard, 2 dos Testimonials, 3 do Other Modules (os do Leads Chart incluem 3 fragmentos do ícone do chip "Tempo médio").
- Reusos de assets já existentes (nenhum download novo): **17** — 8 no Hero, 2 no Technology, 5 nos Testimonials, 2 no FAQ; cada um verificado por `md5sum` e/ou `diff`.
- 11 de 11 seções tiveram texto e assets extraídos com sucesso; nenhuma chamada ao Figma MCP falhou. Duas seções (Hero/Top, Dashboard) não têm CTA no node original — reportado explicitamente, não preenchido com suposição.
