# Manifesto de Conteúdo e Assets — CRM Imobiliário Rural `/modulos/crm-imobiliario-rural` (Figma)

Fonte: Figma fileKey `vX7qKnnXSOW8zv4kAuS2eN` — frame raiz "Page" (nodeId `3089:13233`, 1920 x 10241.5px), 12 seções de conteúdo + Header/Footer (instâncias dos componentes globais já existentes no site).

Este documento reúne, seção por seção e na ordem visual real do Figma (Hero → Technology → Portfolio → Technical Report → Client Radar → Deal Timeline → Formal Closing → Regional Performance → Foreign Buyers → Testimonials → Other Modules → FAQ), todo o texto real (copy) extraído verbatim via `get_design_context`/`get_metadata`/`get_screenshot`, e a tabela de assets (imagens/ícones) a baixar para o projeto Nuxt em `public/images/modulos-crm-rural/` e `public/icons/` (ícones, pasta plana, convenção já existente no projeto). Nenhum código Vue foi escrito a partir deste documento ainda — apenas conteúdo e decisões de asset. Os componentes `CrmRural*.vue` usarão exclusivamente o texto abaixo.

Convenções (idênticas ao `FIGMA_CONTENT_MANIFEST_CRM.md`):
- Caminhos abaixo são relativos a `d:\Trabalho\Git\site-subsee-novo\` salvo indicação contrária.
- "W x H" é a dimensão do node no Figma (px), usada como base para o export estático quando aplicável.
- Composições ilustrativas com dezenas de fragmentos vetoriais sobrepostos (mockups de tela, mapas com pins, mocks de celular) são tratadas como **imagem estática exportada** (`NuxtImg`/`NuxtPicture`), não recriadas como HTML/CSS pixel a pixel — mesma decisão já validada em `CrmTechnology.vue`/`CrmPublishing.vue` da página `/modulos/crm` e documentada em `AD-001`/spec anteriores. Cards com poucos elementos e texto real (badges de dado, checklists, cards de etapa) são markup real.
- Nenhum texto foi inventado; onde o rótulo interno de um componente Figma diverge do texto realmente renderizado (ex.: botão nomeado "Link → Agendar Demonstração"), o texto real prevalece — mesma regra do manifesto CRM.
- O Figma reutiliza o mesmo componente de CTA ("Testar grátis por 30 dias", ícone de seta) em quase todas as seções — tratado como um único componente `CtaTestarGratis` reaproveitável, não recriado por seção.

---

## 1. Section / Hero / Top — nodeId `3556:5778` (1920 x 528, y=85)

Pasta de imagens: `public/images/modulos-crm-rural/`. Pasta de ícones: `public/icons/` (prefixo `crm-rural-hero-`).

### Texto extraído (ordem visual)

- H1 (único H1 da página): "A tecnologia certa para " / "quem vende **terra**" ("terra" em roxo marca `#5d5fef`; Poppins Bold 36px; cor do restante `#2d3442`)
- Parágrafo: "Cadastre propriedades rurais com todos os dados técnicos que fazem diferença na negociação, e alcance compradores em qualquer lugar do mundo." (Poppins Regular 24px, `#313846`)
- Botão pequeno (chip `27.887×30px`, fundo `#5d5fef`, `drop-shadow`) com ícone `rural.svg` centralizado — **sem texto visível, puramente decorativo/ícone de categoria**, não é um link com rótulo (mesma lógica dos chips de categoria de `CrmHero.vue`, mas aqui só 1 chip, não 5).
- Composição da direita: foto (mulher/celular não identificado — ver Assets) com fundo em elipse decorativa, sobre ela um mockup de celular mostrando um mapa da propriedade com camadas (Todas, Pastagem, Agricultura, Vegetação, Perímetro) e zoom.
- Card flutuante 1 (canto superior): "Cadastro do imóvel" / "Dados completos da propriedade." (ícone: trigo/wheat)
- Card flutuante 2 (canto inferior): "Mapas e Atributos" / "Informações da propriedade no mapa" (ícone: pin de mapa/terreno)
- Divisor ondulado inferior (mesmo padrão de `CrmHero.vue`)

Background: gradiente `linear-gradient(119.58deg, #dcfdf4 1.99%, #eff0fb 62.6%, #b2c8f1 103.35%)`.

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Imagem (foto + mockup composto, "Imagem"/"Mobile"/"Mapa") | `public/images/modulos-crm-rural/hero-composicao-mapa-propriedade.png` | 412 x 453 (base) | mockup | Composição mostrando celular com mapa da propriedade rural com camadas e um card de cadastro do imóvel |
| Ellipse/ CSS (blur decorativo atrás da composição) | `public/icons/crm-rural-hero-ellipse-blur.svg` | 374 x 446 (viewBox) | decorativo | decorativo |
| rural.svg (ícone do chip) | `public/icons/crm-rural-hero-icone-rural.svg` | 17.9 x 19 | ícone | decorativo |
| map-pin (ícone card "Mapas e Atributos") | `public/icons/crm-rural-hero-icone-map-pin.svg` | 21.8 x 21.8 | ícone | decorativo |
| wheat (ícone card "Cadastro do imóvel") | `public/icons/crm-rural-hero-icone-wheat.svg` | 21.8 x 21.8 | ícone | decorativo |
| Curva x2 (setas decorativas) | `public/icons/crm-rural-hero-curva-1.svg`, `-2.svg` | conforme arquivo | decorativo | decorativo |
| Icone (badge decorativo canto superior direito) | `public/icons/crm-rural-hero-badge.svg` | 50 x 50 | ícone | decorativo |
| Horizantal Divider (onda inferior) | `public/icons/crm-rural-hero-divider-onda.svg` | 1920 x 201 | decorativo | decorativo |

### Nota

Assim como em `CrmHero.vue` (AD-007), nenhuma centralização usa `top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` — usar flexbox (`items-center justify-center`).

---

## 2. Section / Hero / Technology — nodeId `3089:14178` (w=1400, "Div" 1400x292 + "Imagem/SVG" 1400x646)

Pasta de imagens: `public/images/modulos-crm-rural/`.

### Texto extraído (ordem visual)

- H2: "Gerencie imóveis **rurais** com precisão e agilidade" ("rurais" em roxo `#5d5fef`)
- Parágrafo: "Cadastre fazendas, sítios, chácaras e áreas agrícolas com fichas detalhadas, localização georreferenciada e documentação organizada para facilitar a negociação com compradores e investidores."
- Botão CTA: rótulo interno "Link → Agendar Demonstração", **texto real renderizado "Testar grátis por 30 dias"** (mesma divergência já documentada no manifesto CRM — texto real prevalece).
- Mockup: tela do produto SUB100 — "Cadastro de imóvel" (fluxo com passos: Identificação, Características [ativo], Endereço, Análise, Marketing, Proprietário), formulário "Características do imóvel" com campos reais visíveis: Nome da propriedade "Fazenda Campos Belos", Predominância de cultivo "4 Selecionados", Solo predominante "Latossolos", Uso/Grau de argila, Pluviometria "1350", Período de chuvas "Setembro a fim de maio", Biomas "Cerrado, Mata Atlântica", Área total "1060,00 ha" / Área aberta "800,00 ha" / Utilização do solo "85,00 %"; itens de atributo "Perímetro", "Agricultura", "Pastagem" com badges de área. Cabeçalho do mockup com logo SUB100, menu ("Eu sou a Mel", "Funil Imobiliário", "Dashboard"), avatar "Olá Walcir". Menu lateral com itens do produto (Início, Imóveis, Edifícios e Condomínios, Pessoas, CRM, Destaques, Chaves, Propostas, Análises de locação, Finanças, Relatórios, Dashboard, Configurações, Usuários, Treinamentos, Suporte, Sobre).

(Dados de formulário são conteúdo de demonstração da interface, não copy de marketing — mesmo tratamento de mockups equivalentes no manifesto CRM.)

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Tela (export achatado do mockup completo) | `public/images/modulos-crm-rural/tecnologia-mockup-cadastro-imovel.png` | 1076 x 646 (base) | mockup | Mockup da tela de Cadastro de Imóvel do SUB100 mostrando o formulário de características de uma fazenda |

---

## 3. Section / Hero / Portfolio — nodeId `3089:13694` (Bloco 1400px, rounded 50px)

Pasta de imagens: `public/images/modulos-crm-rural/`. Pasta de ícones: `public/icons/`.

### Texto extraído (ordem visual)

Bloco com fundo gradiente (`linear-gradient(75.89deg, #e6faf1 5.56%, #ecf8f9 30.92%, #eff2fa 76.37%, #c5dcf0 98.37%)`), `rounded-[50px]`.

- H2: "Cada detalhe da propriedade, " / "no **lugar certo**" ("lugar certo" em roxo)
- Parágrafo: "Apresente propriedades rurais com fichas detalhadas e organizadas, prontas para conquistar compradores e investidores qualificados."
- Coluna esquerda (mockup): composição "Telas" — ficha do imóvel com mapa de países (Brasil 921, Uruguai 80, Paraguai 21, Argentina 12), badge "Exclusivo", card "Fazendas · 1.034", mobile mockup com mapa e camadas, card flutuante "Mapa · Rurais" com contadores (3, 1), tag "Sincronizado com 13 portais".
- Coluna direita (texto): "Do georreferenciamento à análise de solo: registre cultivo predominante, bioma, recursos hídricos e acessos logísticos com precisão para atrair compradores e investidores qualificados."
- Lista de 4 funcionalidades (ícone + título + descrição, ordem visual de cima para baixo):
  1. **Dados de solo e bioma** — "Classificação do solo, tipo de bioma, cobertura vegetal e aptidão agrícola — informações essenciais para quem busca propriedades rurais produtivas."
  2. **Área total e aproveitável** — "Registre a área total da propriedade, percentual aproveitável, reserva legal e áreas de preservação com clareza para o comprador."
  3. **Índices de pluviometria da região** — "Apresente dados climáticos e de chuva da região, fundamentais para avaliar o potencial produtivo e a viabilidade do investimento."
  4. **Integração com portais imobiliários** — "Publique propriedades rurais nos principais portais do mercado de forma automática, ampliando a visibilidade para compradores e investidores."
- Botão CTA: "Testar grátis por 30 dias" (mesmo componente reutilizado)

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Telas (export achatado da composição completa: ficha + mobile + card mapa) | `public/images/modulos-crm-rural/portfolio-mockup-telas-fazenda.png` | 655 x 640 (base) | mockup | Composição mostrando a ficha de uma propriedade rural, mockup de celular com mapa e card de sincronização com portais |
| Icone (Dados de solo e bioma) | `public/icons/crm-rural-portfolio-icone-solo-bioma.svg` | 35 x 42 | ícone | decorativo |
| Icone (Área total e aproveitável) | `public/icons/crm-rural-portfolio-icone-area.svg` | 35 x 35 | ícone | decorativo |
| Icone (Índices de pluviometria) | `public/icons/crm-rural-portfolio-icone-pluviometria.svg` | 35 x 38 | ícone | decorativo |
| Icone (Integração com portais) | `public/icons/crm-rural-portfolio-icone-integracao.svg` | 35.03 x 35.04 | ícone | decorativo |

---

## 4. Section / Hero / Technical Report — nodeId `3089:14604` (Div 1400x480)

Pasta: sem imagens novas (card recriado como markup real).

### Texto extraído (ordem visual)

- H2: "Toda a documentação da" / "propriedade em um **só lugar**" ("só lugar" em roxo)
- Parágrafo: "Reúna as informações técnicas que só o imóvel rural exige, área em hectares, situação documental, coordenadas e uso da terra, evitando que essa checagem fique espalhada em e-mails e pastas físicas."
- Lista de 4 checkmarks (ícone check verde + texto):
  1. "Menos risco jurídico na hora de fechar negócio"
  2. "Agilidade para responder dúvidas técnicas do comprador"
  3. "Padronização das informações compartilhadas entre corretores"
  4. "Anexação de matrícula, CAR e laudos de avaliação em um só lugar"
- Botão CTA: "Testar grátis por 30 dias"
- **Card "Ficha da propriedade"** (coluna direita, 600x480, fundo branco, borda `#e8e8f7`, `rounded-[20px]`, header `#f7f7ff`):
  - Eyebrow: "DADOS REAIS DO IMÓVEL" (`#5c5ef0`)
  - Título do card: "Ficha da propriedade"
  - Badge: "10 informações" (fundo `#e3faf2`, texto `#0a7a61`)
  - Grid de 10 dados (label cinza + valor em negrito), ordem visual (2 colunas):
    - Área da propriedade: "1.065,00 alq" | Área aberta: "980,00 alq"
    - Utilização do solo: "85,00%" | Aptidão do solo: "120,00 conecat"
    - Bioma: "Cerrado e Mata Atlântica" | Solo predominante: "Latossolos"
    - Juquirada: "Sim" | Altitude média: "680 m"
    - Teor de argila: "28 a 32%" | Pluviometria: "1.350 mm/ano"
    - Cultivo predominante (destaque verde `#edfcf7`): "Soja, milho, algodão e pecuária de corte" | Período das chuvas (destaque verde): "Setembro ao fim de maio"

### Assets

Nenhum asset de imagem — card é markup real (grid de "Dado" com marcador colorido lateral, badge e header, todos recriáveis em HTML/CSS/Tailwind).

---

## 5. Section / Hero / Client Radar — nodeId `3104:15316` (Bloco 1400x635, rounded 50px)

Pasta: sem imagens novas.

### Texto extraído (ordem visual)

Bloco com fundo gradiente (`from #edeffd via #f1f4fd to #dae8f5`), borda `#e5e7eb`, `rounded-[50px]`.

- **Coluna esquerda — Card "Do imóvel ao cliente certo"** (620x460, fundo `#fbfcff`, `rounded-[28px]`):
  - Tag: "COMO FUNCIONA" (pill `#ebedff`, texto `#4042cc`)
  - Título do card: "Do imóvel ao cliente certo"
  - Subtítulo do card: "O Radar Inteligente cruza dados e indica as melhores oportunidades."
  - 3 mini-cards em linha (numerados):
    1. **01 · IMÓVEIS** — "Analisa os imóveis" / "Características, localização e faixa de valor."
    2. **02 · CRUZAMENTO** — "Compara os perfis" / "Preferências e interesses de cada cliente."
    3. **03 · RESULTADO** — "Indica as melhores opções" / "Mais agilidade e chances reais de conversão."
  - Banner de resultado (gradiente `#f2f5ff → #e8fcf5`, borda `#d1e0f5`): "Conexões mais rápidas e qualificadas" / "Menos busca manual, mais oportunidades para sua equipe."
- **Coluna direita:**
  - H2: "Cada terreno para" / "o **investidor certo**" ("investidor certo" em roxo)
  - Parágrafo: "Use o Radar Cliente x Imóveis para identificar automaticamente quais leads têm interesse compatível com uma fazenda ou sítio recém cadastrado, por região, finalidade e faixa de valor."
  - Lista de 3 checkmarks (ícone check em badge `#eef2ff`):
    1. "Menos tempo procurando cliente para cada imóvel"
    2. "Atendimento mais consultivo e direcionado"
    3. "Aumento da taxa de conversão"
  - Botão CTA: "Testar grátis por 30 dias"

### Assets

Nenhum asset de imagem — seção inteira é markup real (cards, badges, checklist).

---

## 6. Section / Hero / Deal Timeline — nodeId `3089:14743` (Div, timeline 1400x227)

Pasta: sem imagens novas.

### Texto extraído (ordem visual)

- H2 (2 linhas): "Negociações que duram meses," / "sem perder o histórico"
- Parágrafo: "Diferente de uma venda urbana, o negócio rural envolve mais decisores e prazos maiores. Acompanhe cada conversa, proposta e visita ao longo do tempo, sem depender da memória do corretor."
- **Timeline horizontal** (bloco com gradiente `rgba(238,237,255,.5) → rgba(234,247,246,.5)`, `rounded-[30px]`), 4 marcos ligados por uma linha (`#c5c4d7`):
  1. Ponto roxo `#5d5fef` — "1ª Visita" / "Reconhecimento da propriedade"
  2. Ponto laranja `#f59e0b` — "Proposta" / "Envio de proposta formal"
  3. Ponto ciano `#0dcaf0` — "Negociação" / "Ajustes de valor e condições"
  4. Ponto verde `#00d39b` (maior, 50px) — "Fechamento" / "Contrato assinado"
- Lista de 3 itens abaixo (sem CTA nesta seção):
  1. "Nenhuma informação se perde entre trocas de corretor"
  2. "Visão clara do estágio de cada negociação"
  3. "Menos follow-up manual no dia a dia"

### Assets

Nenhum asset de imagem — timeline é markup real (linha + 4 pontos coloridos + labels).

---

## 7. Section / Hero / Formal Closing — nodeId `3104:15311` (Bloco 1400x678.4, rounded 50px)

Pasta: sem imagens novas.

### Texto extraído (ordem visual)

Bloco fundo `#f4f4f7`, `rounded-[50px]`.

- H2: "Do acordo verbal ao" / "**contrato assinado**" (2ª linha em roxo)
- Parágrafo: "Gere propostas, recibos e contratos personalizados para venda, arrendamento ou parceria rural diretamente pelo sistema, reduzindo erros na formalização do negócio."
- Lista de 4 checkmarks:
  1. "Modelos padronizados de contratos, recibos e propostas"
  2. "Fechamento mais rápido com toda a documentação organizada"
  3. "Menos idas e vindas com o proprietário durante a negociação"
  4. "Assinatura eletrônica com validade jurídica e mais segurança"
- Botão CTA: "Testar grátis por 30 dias"
- **Card "Contrato de Arrendamento"** (560x480, header verde `#00d39b`, corpo com linhas de texto simuladas):
  - Título do card: "Contrato de Arrendamento"
  - Assinatura (fonte cursiva "Amostely Signature"): "João da Silva"
  - Legenda: "Assinatura eletrônica do proprietário"
  - Selo circular verde com check: "Assinado eletronicamente"

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Frame (selo de assinatura eletrônica, círculo tracejado + check) | `public/icons/crm-rural-formal-closing-selo-assinado.svg` | 90 x 90 | ícone | decorativo |

Corpo do card (linhas de texto simuladas, header colorido, título) é markup real.

### Decisão de fonte (resolvida no Execute — T1)

"Amostely Signature" **não está disponível no Google Fonts** (confirmado via busca — é distribuída apenas em marketplaces de fonte como dafont.com/fontbundles.net, autoria Kotak Kuning Studio, licença gratuita apenas para uso pessoal, uso comercial exige licença paga). Carregá-la de um desses CDNs não-oficiais violaria a licença e adicionaria uma fonte de fonte não verificada ao projeto. **Decisão**: `CrmRuralFormalClosing.vue` usa `font-family: cursive` (fallback genérico do sistema) no elemento da assinatura, preservando o texto "João da Silva" e o estilo visual manuscrito, sem adicionar nenhuma entrada nova a `nuxt.config.ts`. Nenhuma alteração de fontes do projeto foi necessária.

---

## 8. Section / Hero / Regional Performance — nodeId `3089:14814` (Div 1400x503)

Pasta de imagens: `public/images/modulos-crm-rural/`.

### Texto extraído (ordem visual)

- H2: "Enxergue onde " / "**seu portfólio**" / "**rural** performa melhor" ("seu portfólio" e "rural" em roxo, restante preto — 2 linhas)
- Parágrafo: "Acompanhe relatórios por região e tipo de uso da terra, agricultura, pecuária ou lazer, identificando onde concentrar esforço comercial."
- Lista de 4 checkmarks:
  1. "Decisões mais estratégicas sobre onde investir e prospectar"
  2. "Visibilidade clara sobre as regiões com maior retorno financeiro"
  3. "Gestão do portfólio de imóveis rurais com dados atualizados"
  4. "Comparativo de desempenho entre corretores por região"
- Botão CTA: "Testar grátis por 30 dias"
- **Card "Desempenho por região"** (725x500, `rounded-[24px]`): filtro "Últimos 30 dias"; mapa de satélite com pins de propriedades (Brasil, Argentina); 3 cards de indicador:
  1. "IMÓVEIS RURAIS ATIVOS" — "1659" — "+18% neste mês"
  2. "PAÍSES DESTAQUE" — "4 países" — "150 imóveis rurais"
  3. "MELHOR CONVERSÃO" — "+24%" — "Região Sul"
  - Nota "Dados atualizados"; controles de mapa/satélite ("Mapa"/"Satélite") e toggle "Favoritos".

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| mapa-satélite + Mapa (export achatado do mapa com pins, países, camadas) | `public/images/modulos-crm-rural/regional-performance-mapa.png` | 464 x 410 (base) | mockup | Mapa com propriedades rurais no Brasil e Argentina, indicando regiões de destaque |

Os 3 stat cards e o header do painel são markup real.

---

## 9. Section / Hero / Foreign Buyers — nodeId `3089:13381` (Div 1400x561.7)

Pasta de imagens: `public/images/modulos-crm-rural/`.

### Texto extraído (ordem visual)

- H2: "Anuncie propriedades" / "rurais além do **Brasil**" ("Brasil" em roxo)
- Parágrafo: "Divulgue fazendas, sítios e outras propriedades rurais no Brasil, Paraguai, Uruguai, Argentina e Bolívia e alcance compradores interessados em investir na América do Sul."
- Botão CTA: "Testar grátis por 30 dias"
- **Vitrine de cards** (composição com 5 cards sobrepostos e rotacionados): cards "Uruguai", "Paraguai", "Bolívia", "Argentina" (fotos de propriedades + bandeira) ao redor de um card central maior "Fazenda disponível" (foto de fazenda, localização "Sinop - MT | Brasil", dados "Área aberta 925,00 alq" / "Cultivo Soja e algodão" / "Pluviometria 2.000 mm/ano", botão "Ver detalhes"). Tag flutuante "Alcance internacional".
- Texto de apoio abaixo da vitrine: "Seus imóveis conectados a compradores de outros países"
- Lista de 5 chips de país (bolinha colorida + nome): Brasil (verde `#00c78f`), Paraguai (azul `#1cadeb`), Uruguai (roxo `#5d5fef`), Argentina (vermelho `#f44336`), Bolívia (laranja `#fa9e2e`)

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Vitrine — Imóveis internacionais (export achatado da composição completa de 5 cards) | `public/images/modulos-crm-rural/foreign-buyers-vitrine-cards.png` | 889 x 520 (base) | mockup | Cards sobrepostos de propriedades rurais no Uruguai, Paraguai, Bolívia, Argentina e Brasil |

Chips de país (bolinha + texto) e o texto de apoio são markup real.

---

## 10. Section / Hero / Testimonials — nodeId `3127:3200` (Bloco 1400x690, rounded 50px)

Pasta de ícones: `public/icons/`.

### Texto extraído (ordem visual)

- H2: "O que **nossos clientes**" / "falam dos nossos " / "produtos e serviços" ("nossos clientes" em roxo)
- Logomarca "SUBSEE on" à esquerda do bloco.

**Depoimento 1:**
- Avaliação: 5 estrelas
- Citação: "A Benedini Fazendas buscava um CRM que realmente entendesse as particularidades do agronegócio. Com o SUBSEE, encontramos abertura para construir soluções em conjunto e adaptar processos à nossa realidade. Essa parceria tem sido importante para nossa atuação na intermediação de fazendas no Brasil e no Uruguai."
- Logos: "Soma Imóveis" + "Benedini" (Fazendas)
- Nome: "Henrique Benedini" — Cargo: "Diretor" — Empresa: "Benedini Fazendas"

**Depoimento 2:**
- Avaliação: 5 estrelas
- Citação: "Somos uma empresa uruguaia e encontramos no CRM SUBSEE uma solução que se adaptou muito bem à nossa operação. É importante poder contar com uma empresa brasileira comprometida com tecnologia e evolução constante, ajudando-nos a melhorar processos, organizar a gestão e crescer no segmento de intermediação de fazendas."
- Logos: "Soma Imóveis" + "Vettore" (Real Estate)
- Nome: "Julio Silveira" — Cargo: "Corretor" — Empresa: "Vettore Uruguay"

(Total: 2 depoimentos — diferente dos 2 de `CrmTestimonials.vue` da página `/modulos/crm`, mas com pessoas/empresas totalmente diferentes: **clonar como `CrmRuralTestimonials.vue`**, não reaproveitar.)

### Nota (logo duplo por card)

Cada card de depoimento tem 2 logos empilhados: "Soma Imóveis" (aparentemente um logo de plataforma/parceiro comum às duas empresas) + o logo específico do cliente (Benedini / Vettore). Reproduzir os 2 logos como aparecem, sem inventar hierarquia adicional.

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Soma Imóveis (logo comum aos 2 cards) | `public/icons/crm-rural-logo-soma-imoveis.svg` | 91.5 x 55 | logo | Logo Soma Imóveis |
| Benedini (logo) | `public/icons/crm-rural-logo-benedini.svg` | 151 x 65 | logo | Logo Benedini Fazendas |
| Vettore (logo) | `public/icons/crm-rural-logo-vettore.svg` | 154 x 45 | logo | Logo Vettore Real Estate |
| estrelas 1 (avaliação) — reaproveitar | `public/icons/icone-estrelas-avaliacao.svg` (já existente, mesma dimensão 161x27) | 161 x 27 | ícone | 5 estrelas de avaliação |
| Group (aspas decorativas, 2 fragmentos) — reaproveitar se dimensão bater | `public/icons/aspas-abertura.svg`/`aspas-fechamento.svg` (já existentes) | ~91 x 67 | decorativo | decorativo |
| Logo SUBSEE on (selo do bloco) — reaproveitar | `public/icons/logo-subsee-on.svg` (já existente) | 183.9 x 45.2 | logo | Logo SUBSEE on |

---

## 11. Section / Hero / Other Modules — nodeId `3089:13356`

Pasta de ícones: `public/icons/`.

### Texto extraído (ordem visual)

- H2: "Conheça os outros módulos do CRM Imobiliário"
- Parágrafo: "Soluções desenvolvidas para diferentes segmentos do mercado imobiliário."

**Card 1 — CRM Imobiliário**: "Conheça recursos de IA, automações e integrações da plataforma." — botão "Clique aqui →" — link para `/modulos/crm`
**Card 2 — CRM Imobiliário Urbano**: "Centralize imóveis, clientes e negociações em um só lugar." — botão "Clique aqui →" — link para `/modulos/crm-imobiliario-urbano`
**Card 3 — CRM para Temporada**: "Gestão completa de aluguéis por temporada e reservas de imóveis." — botão "Clique aqui →" — link para `/modulos/crm-imobiliario-temporada`

**Atualização (verificado no código antes do Batch 2 do Execute)**: tanto `/modulos/crm-imobiliario-urbano` quanto `/modulos/crm-imobiliario-temporada` já existem como páginas reais e completas no projeto (construídas por sessões paralelas nesta mesma máquina) — não são mais placeholders 404. Os hrefs acima já refletem as rotas reais confirmadas em `HeaderBar.vue`.

(Total: 3 cards — exclui a própria página Rural, inclui o CRM genérico, que a página `/modulos/crm` exclui de si mesma — mesmo padrão "exclude self" já usado em `CrmOtherModules.vue`.)

### Nota (ícones)

Ícone do Card 1 é um "team icon" (2 pessoas) — **não existe ainda** um `menu-icone-crm-generico.svg` de "2 pessoas" no projeto com esse desenho exato; o projeto já tem `menu-icone-crm-generico.svg` usado no mega-menu para "CRM Imobiliário" (usado em `CrmOtherModules.vue`) — reaproveitar esse ícone existente em vez de extrair fragmentos ambíguos do Figma. Ícone do Card 2 (building/prédio) → reaproveitar `menu-icone-crm-urbano.svg`. Ícone do Card 3 (calendário/chave) → reaproveitar `menu-icone-crm-temporada.svg`. Todos já existentes no projeto (mesma decisão de reuso do manifesto CRM, Seção 8).

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| team icon (CRM Imobiliário) — reaproveitado | `public/icons/menu-icone-crm-generico.svg` (já existente) | conforme arquivo existente | ícone | Ícone do módulo CRM Imobiliário |
| building icon (Urbano) — reaproveitado | `public/icons/menu-icone-crm-urbano.svg` (já existente) | conforme arquivo existente | ícone | Ícone do módulo CRM Imobiliário Urbano |
| icon — Key (Temporada) — reaproveitado | `public/icons/menu-icone-crm-temporada.svg` (já existente) | conforme arquivo existente | ícone | Ícone do módulo CRM para Temporada |

---

## 12. Section / Hero / FAQ — nodeId `3112:16782`

Sem imagens novas.

### Texto extraído (ordem visual, de cima para baixo)

- H2: "Perguntas Frequentes"
- Subtítulo: "Tire suas dúvidas sobre o CRM Imobiliário da SUBSEE on."

**Pergunta 1:** "O que é o CRM Imobiliário Rural do SUBSEE?"
**Resposta 1:** "O CRM Imobiliário Rural do SUBSEE foi desenvolvido para corretores e imobiliárias que trabalham com fazendas, sítios, chácaras e outras propriedades rurais. O sistema permite cadastrar informações específicas desse mercado, como tipo de solo, bioma, áreas produtivas, pluviometria, CAR, arquivos KML e dados georreferenciados, oferecendo uma estrutura de anúncio muito mais completa do que a utilizada em imóveis urbanos."

**Pergunta 2:** "Posso testar o CRM Imobiliário Rural antes de contratar?"
**Resposta 2:** "Sim. O CRM Imobiliário Rural do SUBSEE pode ser testado gratuitamente por 30 dias, permitindo conhecer as funcionalidades do módulo antes da contratação. Durante o período de teste, o corretor pode avaliar na prática uma plataforma desenvolvida com linguagem, cadastros e recursos mais próximos da rotina do mercado imobiliário rural."

**Pergunta 3:** "O SUBSEE também atende imóveis urbanos e locações por temporada?"
**Resposta 3:** "Sim. O SUBSEE possui módulos específicos para imóveis urbanos, imóveis rurais e locações por temporada, respeitando as particularidades de cada operação. Dessa forma, uma imobiliária que atua em diferentes segmentos pode trabalhar dentro da mesma plataforma, mantendo processos, cadastros e indicadores adequados para cada tipo de negócio."

**Pergunta 4:** "Que informações posso registrar sobre uma propriedade rural?"
**Resposta 4:** "O CRM Rural do SUBSEE permite cadastrar informações técnicas e comerciais detalhadas da propriedade, como área total e aproveitável, tipo de solo, bioma, pluviometria, disponibilidade hídrica, logística de acesso e estruturas de armazenamento. Também é possível disponibilizar links públicos com laudos, histórico de chuvas e informações do CAR, além de integrar arquivos KML com dados georreferenciados, interação de informações e controle de camadas. Esses recursos ajudam compradores e corretores a avaliar com mais precisão o potencial produtivo, a infraestrutura e as características da propriedade."

**Pergunta 5:** "Como publicar imóveis rurais nos portais imobiliários?"
**Resposta 5:** "O SUBSEE permite publicar e atualizar propriedades rurais automaticamente nos portais imobiliários integrados, evitando cadastros repetidos e retrabalho. Como o imóvel é cadastrado no CRM com informações específicas do mercado rural, o anúncio pode ser distribuído com uma descrição mais completa e qualificada. Em portais que valorizam atributos rurais, como o Portal SUB100, essas informações podem ganhar ainda mais destaque."

**Pergunta 6:** "O CRM Rural ajuda a acompanhar metas e o desempenho da equipe?"
**Resposta 6:** "Sim. O CRM SUBSEE permite acompanhar metas e indicadores específicos para operações com imóveis rurais, incluindo desempenho da equipe, evolução dos atendimentos e resultados comerciais. Assim, gestores e corretores conseguem visualizar o planejado e o realizado, identificar oportunidades e acompanhar a performance da operação rural de forma mais estruturada."

(Total: 6 perguntas, ordem visual confirmada via `y`/`mt` de cada bloco no Figma — a ordem real de cima para baixo é P1→P6 listada acima, que corresponde à ordem inversa da numeração interna de camadas "01"–"06" do Figma, que numera de baixo para cima.)

### Nota (padrão do accordion)

O Figma usa ícone "PlusCircle" (+/−) — **mesmo padrão já implementado em `CrmFaq.vue`** (`AD-008`: ícones reais "+/−" via SVG, não chevron). `CrmRuralFaq.vue` reaproveita esse padrão e os assets `faq-plus-circle.svg`/`faq-minus-circle.svg` já existentes — sem divergência de decisão de design nesta página (ao contrário do que ocorreu na página CRM genérica, aqui o Figma já pede exatamente o padrão que o projeto usa).

### Assets

Nenhum asset novo — reaproveitar `public/icons/faq-plus-circle.svg` e `faq-minus-circle.svg` já existentes (mesmos usados por `CrmFaq.vue`).

---

## Itens que precisam de decisão/atenção manual

1. **Hero/Top** — o chip de ícone `rural.svg` não tem rótulo textual nem indício de link (`href`) — tratar como puramente decorativo (indicador de categoria "rural"), não como CTA funcional.
2. **Technology, Portfolio, Regional Performance, Foreign Buyers** — mockups/composições com dezenas de fragmentos vetoriais sobrepostos exportados como imagem estática única, seguindo o precedente já validado em `CrmTechnology.vue`/`CrmPublishing.vue`. Nenhum desses fragmentos foi recriado como SVG à mão.
3. **Formal Closing** — assinatura usa a fonte "Amostely Signature" (fonte de assinatura/script). Verificar disponibilidade real (Google Fonts ou licença própria) antes da implementação; se indisponível, usar uma fonte cursiva de fallback do sistema operacional (`cursive`/cursiva similar), preservando o texto "João da Silva" e o estilo visual de assinatura manuscrita.
4. **Testimonials** — diverge do conteúdo de `CrmTestimonials.vue` (pessoas/empresas diferentes: Benedini Fazendas e Vettore Uruguay, não Marcio Carmona/Edson Naka) — **veredito: clonar como `CrmRuralTestimonials.vue`**. Cada card tem 2 logos empilhados (Soma Imóveis + logo do cliente) — reproduzir ambos.
5. **Other Modules** — ícone do card "CRM Imobiliário" reaproveita `menu-icone-crm-generico.svg` (já usado no mega-menu); demais ícones reaproveitam os já existentes `menu-icone-crm-urbano.svg`/`menu-icone-crm-temporada.svg`.
6. **FAQ** — sem divergência de padrão de accordion: o Figma já pede ícones "+/−", que já são o padrão real implementado em `CrmFaq.vue` (`AD-008`). Reaproveitar os assets existentes diretamente.
7. **Todos os CTAs "Testar grátis por 30 dias"** — mesmo componente reutilizado em 7 das 12 seções (Technology, Portfolio, Technical Report, Client Radar, Formal Closing, Regional Performance, Foreign Buyers); Deal Timeline, Testimonials, Other Modules e FAQ não têm CTA — confirmado nó a nó, não é omissão.
8. **Rotas de "Outros Módulos"** — `/modulos/crm-imobiliario-urbano` e `/modulos/crm-imobiliario-temporada` já existem como páginas reais e completas (confirmado no código antes do Batch 2), construídas por sessões paralelas nesta máquina. Os hrefs de `CrmRuralOtherModules.vue` apontam para essas rotas reais, não para placeholders.

---

## Resumo de arquivos baixados (fase Execute — T1, concluído)

- **Imagens/mockups** em `public/images/modulos-crm-rural/` — 5 arquivos, todos baixados e confirmados com tamanho não-zero:
  - `hero-composicao-mapa-propriedade.png` (214.383 bytes)
  - `tecnologia-mockup-cadastro-imovel.png` (112.418 bytes)
  - `portfolio-mockup-telas-fazenda.png` (563.524 bytes)
  - `regional-performance-mapa.png` (239.557 bytes)
  - `foreign-buyers-vitrine-cards.png` (375.727 bytes)
- **Ícones novos** em `public/icons/` — 17 arquivos com prefixo `crm-rural-*`, todos baixados e confirmados com tamanho não-zero:
  - Hero (8): `crm-rural-hero-icone-rural.svg`, `crm-rural-hero-icone-map-pin.svg`, `crm-rural-hero-icone-wheat.svg`, `crm-rural-hero-curva-1.svg`, `crm-rural-hero-curva-2.svg`, `crm-rural-hero-badge.svg`, `crm-rural-hero-ellipse-blur.svg`, `crm-rural-hero-divider-onda.svg`
  - Technology (1): `crm-rural-tecnologia-seta-curva.svg`
  - Portfolio (4): `crm-rural-portfolio-icone-solo-bioma.svg`, `crm-rural-portfolio-icone-area.svg`, `crm-rural-portfolio-icone-pluviometria.svg`, `crm-rural-portfolio-icone-integracao.svg`
  - Formal Closing (1): `crm-rural-formal-closing-selo-assinado.svg`
  - Testimonials (3, para uso do T11/Batch 2): `crm-rural-logo-soma-imoveis.svg`, `crm-rural-logo-benedini.svg`, `crm-rural-logo-vettore.svg`
- **Ícones/logos reaproveitados** (confirmados existentes no projeto, sem novo download) — 9 arquivos: `menu-icone-crm-generico.svg`, `menu-icone-crm-urbano.svg`, `menu-icone-crm-temporada.svg`, `faq-plus-circle.svg`, `faq-minus-circle.svg`, `icone-estrelas-avaliacao.svg`, `aspas-abertura.svg`, `aspas-fechamento.svg`, `logo-subsee-on-depoimentos.svg`.
- **Technical Report, Client Radar, Deal Timeline, Regional Performance (stat cards)**: sem novos assets — confirmado via `get_design_context` que são markup real (cards de dado, checklists, timeline), usando o componente global `IconCheck` para os ícones de check das listas.
- Nenhuma chamada ao Figma MCP falhou durante a extração original nem durante o download desta fase; todos os 9 nós usados pelo Batch 1 (T2–T10) foram reconfirmados ao vivo via `get_design_context`/`get_metadata` nesta sessão de Execute antes da implementação.
- Decisão de fonte "Amostely Signature" resolvida (ver seção 7, acima): `cursive` como fallback, sem alteração em `nuxt.config.ts`.
