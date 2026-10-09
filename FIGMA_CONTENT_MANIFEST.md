# Manifesto de Conteúdo e Assets — Home (Figma)

Fonte: Figma fileKey `vX7qKnnXSOW8zv4kAuS2eN` — Página Home (nodeId `1:41`), artboard "Page" (nodeId `1:42`, 1920 x 11586px).

Este documento reúne, seção por seção e na ordem de topo do artboard, todo o texto real (copy) extraído verbatim do Figma e a tabela de assets (imagens/ícones) baixados para o projeto Nuxt em `public/images/<secao>/` e `public/icons/`. Nenhum código Vue/HTML foi escrito — apenas conteúdo e arquivos de asset.

Convenções:
- Caminhos abaixo são relativos a `d:\Trabalho\Git\site-subsee-novo\` salvo indicação contrária.
- "W x H" é a dimensão real do arquivo baixado (pixels para raster; `width`/`height` ou `viewBox` para SVG).
- Onde um ícone deveria logicamente ser vetor mas só existia como PNG no Figma (composição com máscaras), isso está sinalizado explicitamente.
- Ícones puramente decorativos (fundos, ondas, blobs, formas de recorte) têm alt sugerido "decorativo".

---

## 1. Header (instance) — nodeId `490:310`

Pasta de imagens: `public/images/header` (nenhuma foto real nesta seção — apenas logo/ícones vetoriais). Pasta de ícones: `public/icons`.

### Texto extraído (ordem visual, esquerda → direita)

- Logo/link: **SUB100 Imobiliárias** (é uma marca em SVG, sem string de texto renderizada)
- Menu: **Módulos** | **Eventos** (nota: o nome interno da camada no Figma é "Soluções", mas o texto visível/renderizado é "Eventos" — divergência entre nome de componente e conteúdo real; o texto real visível foi reportado) | **Preços** | **Portal de Imóveis** (link externo → `https://sub100.com.br/`) | **Blog** (link externo → `https://blog.sub100sistemas.com.br/`) | **Sobre a SUB100**
- Botão CTA (topo direito): **Entrar** (com ícone de usuário)

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| usuarioEntrar.svg | `public/icons/icone-usuario-entrar.svg` | 15 x 15 | ícone | Ícone de usuário |
| Sombra | `public/icons/header-sombra-divisoria.svg` | 1717.4 x 34.4 | decorativo | decorativo |
| Link → SUB100 Imobiliáriass | `public/icons/logo-sub100-imobiliarias.svg` | 158 x 44 | logo | Logo SUB100 Imobiliárias |

---

## 2. Hero / Main — nodeId `1:866`

Pasta de imagens: `public/images/hero-main`. Pasta de ícones: `public/icons`.

### Texto extraído (ordem visual)

- H1: "O **CRM Imobiliário** Completo para **Imobiliárias** e **Corretores**" (trechos em roxo conforme marcado no Figma)
- Parágrafo (linha em negrito + corpo): "**CRM SUBSEE desenvolvido para corretores e imobiliárias urbanas e rurais**" seguido de "Com **26 anos de experiência** no mercado imobiliário, o SUBSEE combina maturidade, conhecimento e inovação para tornar o atendimento comercial da sua imobiliária mais moderno, integrado e eficiente."
- Botão CTA 1 (primário): "Testar grátis por 30 dias"
- Botão CTA 2 (secundário/link): "Assista os vídeos do SUBSEE on" (o texto aparece cortado/truncado no próprio Figma — reproduzido verbatim)
- Bloco de confiança: "A confiança de **mais de 4 mil** corretores e imobiliárias" (com selo "tdesign:secured" e 5 avatares)
- Link/Métrica 1: "Mais vendas · Ciclo mais rápido"
- Link/Métrica 2: "Mais eficiência · Menos custo"
- Ícones decorativos "Btn → Icones Imóveis" (locação, temporada, rural, venda, lançamentos) — sem texto associado

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Phone2 - Portal da SUB100 | `public/images/hero-main/mockup-celular-portal-sub100.png` | 4000 x 3107 | mockup | Mockup do celular exibindo o Portal SUB100 |
| Phone1 - SUBSEE | `public/images/hero-main/mockup-celular-subsee.png` | 4000 x 3202 | mockup | Mockup do celular exibindo o app SUBSEE |
| mobile 4 (tela do Phone1) | `public/images/hero-main/mockup-celular-subsee-tela-conteudo.png` | 1429 x 2471 | mockup | Conteúdo de tela do app SUBSEE |
| Vector 645 (decorativo) | `public/images/hero-main/vetor-645-decorativo.png` | 742 x 1161 | decorativo (veio como PNG, não SVG) | decorativo |
| Avatar 1 | `public/images/hero-main/avatar-cliente-1.png` | 117 x 112 | foto | Foto de cliente/corretor 1 |
| Avatar 2 | `public/images/hero-main/avatar-cliente-2.png` | 117 x 112 | foto | Foto de cliente/corretor 2 |
| Avatar 3 | `public/images/hero-main/avatar-cliente-3.png` | 117 x 112 | foto | Foto de cliente/corretor 3 |
| Avatar 4 | `public/images/hero-main/avatar-cliente-4.png` | 117 x 112 | foto | Foto de cliente/corretor 4 |
| Avatar 5 | `public/images/hero-main/avatar-cliente-5.png` | 117 x 112 | foto | Foto de cliente/corretor 5 |
| SVG (seta do botão CTA) | `public/icons/icone-seta-cta.svg` | 20 x 20 | ícone | Seta do botão "Testar grátis" |
| Vector 52 (fundo) | `public/icons/hero-decorativo-vetor-52.svg` | 337.7 x 571.9 | decorativo | decorativo |
| Vector 53 (fundo) | `public/icons/hero-decorativo-vetor-53.svg` | 456.5 x 353.4 | decorativo | decorativo |
| Vector 54 (fundo) | `public/icons/hero-decorativo-vetor-54.svg` | 584.3 x 356.6 | decorativo | decorativo |
| Ellipse 30 (máscara) | `public/icons/hero-decorativo-ellipse-mask-30.svg` | 342.5 x 592.6 | decorativo | decorativo |
| Ellipse 31 | `public/icons/hero-decorativo-ellipse-31.svg` | 256.7 x 440.6 | decorativo | decorativo |
| Vector 72 | `public/icons/hero-decorativo-vetor-72.svg` | 145.7 x 279.5 | decorativo | decorativo |
| "3 Linhinhas curvas" (Vector 1) | `public/icons/linha-curva-decorativa-1.svg` | 13.2 x 57.6 | decorativo | decorativo |
| "3 Linhinhas curvas" (Vector 2) | `public/icons/linha-curva-decorativa-2.svg` | 13.0 x 53.6 | decorativo | decorativo |
| "3 Linhinhas curvas" (Vector 3) | `public/icons/linha-curva-decorativa-3.svg` | 18.9 x 37.4 | decorativo | decorativo |
| Item locação (Vector) | `public/icons/icone-imoveis-locacao.svg` | 29.0 x 33.7 | ícone | Ícone imóveis para locação |
| temporada.svg | `public/icons/icone-imoveis-temporada.svg` | 33.5 x 39 | ícone | Ícone imóveis de temporada |
| rural.svg | `public/icons/icone-imoveis-rural.svg` | 33.5 x 39 | ícone | Ícone imóveis rurais |
| venda.svg | `public/icons/icone-imoveis-venda.svg` | 33.5 x 39 | ícone | Ícone imóveis à venda |
| Item lançamentos (Vector) | `public/icons/icone-imoveis-lancamentos.svg` | 28.9 x 33.7 | ícone | Ícone imóveis lançamentos |
| Vector 5 ("Mais vendas") | `public/icons/icone-mais-vendas-1.svg` | 1.5 x 24 | ícone | Ícone do link "Mais vendas" |
| Vector 6 ("Mais vendas") | `public/icons/icone-mais-vendas-2.svg` | 15 x 17.25 | ícone | Ícone do link "Mais vendas" |
| Vector 7 ("Mais eficiência") | `public/icons/icone-mais-eficiencia-1.svg` | 24 x 12.75 | ícone | Ícone do link "Mais eficiência" |
| Vector 8 ("Mais eficiência") | `public/icons/icone-mais-eficiencia-2.svg` | 8.25 x 8.25 | ícone | Ícone do link "Mais eficiência" |
| Ellipse 1 (fundo avatares) | `public/icons/decorativo-ellipse-avatares.svg` | 121 x 32 | decorativo | decorativo |
| tdesign:secured | `public/icons/icone-selo-seguranca.svg` | 27.3 x 26.3 | ícone | Selo de segurança/confiança |

---

## 3. Divider decorativo (onda azul/branca) — nodeId `1:923`

**Texto:** nenhum — seção puramente decorativa.

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Divider / Horizontal (Azul + branca) | `public/icons/divider-onda-decorativa.svg` | 1918.4 x 146.5 | decorativo | decorativo |

---

## 4. Hero / Urbano — nodeId `1:393`

Pasta de imagens: `public/images/hero-urbano`. Pasta de ícones: `public/icons`.

### Texto extraído (ordem visual)

- Tag: "ESPECIALIDADE · IMÓVEIS URBANOS"
- H2: "CRM para imobiliárias e corretores de **imóveis urbanos**"
- Destaque (negrito): "A alta concorrência do mercado urbano exige um CRM que acompanhe o ritmo da cidade."
- Parágrafo: "**Lançamentos, vendas** e **locações** em um CRM imobiliário moderno, completo e fácil de usar. Gestão de leads, roleta de atendimento, funil de vendas, integração com portais e atendimento centralizado em uma única plataforma, desenvolvida para a operação diária de **imobiliárias urbanas** de alta performance."
- H3: "Principais funcionalidades:"
- Item lista 1: "CRM com funil Kanban integrado ao plugin do WhatsApp;"
- Item lista 2: "Gestão de metas e acompanhamento do funil de vendas;"
- Item lista 3: "Distribuição automatizada de leads por roleta de atendimento;"
- Item lista 4: "Controle de empréstimo de chaves com registro de feedback;"
- Item lista 5: "Integração com portais imobiliários e redes sociais."
- Item lista 6: "Cadastro e divulgação internacional de imóveis;"
- Item lista 7: "Gestão de propostas e análise de locação;"
- Item lista 8: "Agenda integrada ao Google Calendar;"
- Item lista 9: "Integração nativa com o WhatsApp;"
- Item lista 10: "CRM com automação com AI."
- Botão CTA 1 (primário): "Testar grátis por 30 dias"
- Botão CTA 2 (secundário): "Conheça o módulo Urbanos"
- Card "VGV em aberto": Título "VGV em aberto" / Valor "R$ 84,2 mi" / Selo "+12 propostas"
- Card "Mapa": Rótulo "Mapa · Urbanos" + marcadores numerados decorativos: "12", "4", "8", "3", "5" (sem texto adicional)
- Mockup do app (tela do celular): dados de demonstração fictícios (endereços, preços, "Imobiliária Sub100", "Há X dias" etc.) — **não foi possível/não fazia sentido transcrever exaustivamente cada cartão de imóvel**: são dados de preenchimento (placeholder) para compor visualmente o screenshot do app, não copy de marketing real. Recomenda-se tratar essa área como asset de imagem/mockup do produto, não como texto editável.
- Ícones "Btn → Icones Imóveis" (locação, venda, lançamentos — reaproveitam os mesmos ícones do Hero Main) — sem texto

### Assets (fotos/mockups)

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Foto imóvel — sala com TV/cozinha (grande) | `public/images/hero-urbano/sala-estar-moderna-tv-cozinha.png` | 1280 x 722 | foto | Sala de estar moderna com TV e cozinha integrada |
| idem (miniatura) | `public/images/hero-urbano/sala-estar-moderna-tv-cozinha-thumb.png` | 320 x 181 | foto | Sala de estar moderna com TV e cozinha integrada (miniatura) |
| Foto imóvel — casa com portão de madeira e van | `public/images/hero-urbano/casa-portao-madeira-van-preta.jpeg` | 1205 x 586 | foto | Casa térrea com portão de madeira e van preta na garagem |
| idem (miniatura) | `public/images/hero-urbano/casa-portao-madeira-van-preta-mini.png` | 302 x 147 | foto | Casa térrea com portão de madeira (miniatura) |
| Foto imóvel — casa portão branco nº 97 | `public/images/hero-urbano/casa-portao-branco-numero-97.png` | 4032 x 1960 | foto | Casa com portão branco em X e muro de tijolos (nº 97) |
| idem (miniatura) | `public/images/hero-urbano/casa-portao-branco-numero-97-thumb.png` | 504 x 245 | foto | Casa com portão branco (miniatura) |
| Foto imóvel — varanda com vista da cidade | `public/images/hero-urbano/varanda-vista-cidade.png` | 1024 x 768 | foto | Varanda de apartamento com vista para a cidade |
| idem (miniatura) | `public/images/hero-urbano/varanda-vista-cidade-thumb.png` | 512 x 384 | foto | Varanda com vista da cidade (miniatura) |
| Foto imóvel — prédio "Terraço Jardins" (pôr do sol) | `public/images/hero-urbano/predio-sunset-palmeiras-ideal-imoveis.png` | 1280 x 1278 | foto | Prédio residencial ao entardecer, com palmeiras e pessoas |
| idem (miniatura) | `public/images/hero-urbano/predio-sunset-palmeiras-ideal-imoveis-thumb.png` | 320 x 320 | foto | Prédio residencial ao entardecer (miniatura) |
| Foto imóvel — prédio "Terraço Jardins" (dia) | `public/images/hero-urbano/predio-terraco-jardins-dia.png` | 1280 x 1048 | foto | Prédio residencial durante o dia, céu azul |
| idem (miniatura) | `public/images/hero-urbano/predio-terraco-jardins-dia-thumb.png` | 320 x 262 | foto | Prédio residencial durante o dia (miniatura) |
| Foto imóvel — sala com poltrona amarela | `public/images/hero-urbano/sala-estar-poltrona-amarela.jpeg` | 1024 x 768 | foto | Sala de estar com poltrona amarela e sofás escuros |
| idem (miniatura) | `public/images/hero-urbano/sala-estar-poltrona-amarela-thumb.jpeg` | 512 x 384 | foto | Sala de estar com poltrona amarela (miniatura) |

### Assets (ícones)

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| SVG (seta CTA "Testar grátis") | `public/icons/icone-seta-cta-urbano.svg` | 20 x 20 | ícone | Seta do botão "Testar grátis" (idêntica à do Hero Main) |
| SVG (check da lista de funcionalidades) | `public/icons/icone-check-lista-urbano.svg` | 11 x 11 | ícone | Marca de verificação (check) da lista |
| SVG ("+12 propostas") | `public/icons/icone-vgv-propostas.svg` | 22.2 x 22.2 | ícone | Ícone de seta ascendente (tendência) |

**Observação de escopo:** o card "Mapa" contém ~11 vetores decorativos minúsculos (ruas/quadras/áreas verdes de um mapa estilizado abstrato) que não foram baixados individualmente — são puramente decorativos/ilustrativos, sem conteúdo real (os números "12, 4, 8, 3, 5" são apenas texto sobre círculos coloridos, já documentados acima). Os ícones de imóveis (locação/venda/lançamentos) do bloco "Btn → Icones Imóveis" desta seção reaproveitam exatamente os mesmos SVGs já baixados na seção Hero Main, não foram duplicados.

---

## 5. Hero / Rural — nodeId `1:355`

Pasta de imagens: `public/images/hero-rural`. Pasta de ícones: `public/icons`.

### Texto extraído (ordem visual)

- Tag: "Especialidade · Imóveis RURAIS & agro"
- H2: "CRM Imobiliário para corretores e **imobiliárias rurais**"
- Parágrafo: "Inteligência comercial para anunciar e vender fazendas e propriedades rurais."
- Parágrafo: "**Venda** ou **arrendamento**, georreferenciamento, cultivo predominante, bioma, altitude média, características do solo, teor de argila, pluviometria, período de chuvas, disponibilidade hídrica e logística: todas as informações essenciais para destacar seu anúncio de **imóvel rural**."
- H3: "Principais funcionalidades:"
- Item lista 1: "Cadastro de atributos e delimitações por meio de arquivos KML;"
- Item lista 2: "Publicação internacional de imóveis rurais;"
- Item lista 3: "Informações detalhadas sobre venda e arrendamento;"
- Item lista 4: "Cadastro da área em hectares, com valor unitário e valor total;"
- Item lista 5: "Anexação de matrícula, CAR e laudos de avaliação;"
- Item lista 6: "Filtros específicos para pesquisa de imóveis rurais."
- Botão CTA (secundário): "Conheça o módulo Rurais"
- Botão CTA (primário): "Testar grátis por 30 dias"
- Widget flutuante (badge): "Sincronizado com 13 portais"
- Widget flutuante (mapa): "Mapa · Rurais" (com marcadores numerados "1" e "3")
- Widget flutuante (card **oculto** no Figma, `hidden=true`, não renderizado — não incluir no site): "LEADS ESTA SEMANA" / "8.254" / "+11,2% leads"
- Widget flutuante (card): "VGV em aberto" / "R$ 84,2 mi" / "+12 propostas"
- Ícone decorativo (camada "Btn → Acesse imóveis rurais"): emblema roxo com ícone de folha — sem texto, sem link funcional aparente

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Imagem → Telas da Imóveis Rurais (export achatado) | `public/images/hero-rural/mockup-telas-imoveis-rurais.png` | 672 x 728 | mockup | Mockup mostrando telas do módulo Imóveis Rurais: ficha de fazenda com fotos, mapa e badges de país (Brasil/Uruguai/Paraguai/Argentina) |
| Mapa (widget flutuante) | `public/images/hero-rural/mapa-widget-rurais.png` | 300 x 300 | decorativo/mockup | Miniatura "Mapa · Rurais" com marcadores numerados |
| rural_ImgID (fill soja) | `public/images/hero-rural/foto-lavoura-soja.png` | 4096 x 2731 | foto | Lavoura de soja ao pôr do sol |
| fazenda 1 (fill gado) | `public/images/hero-rural/foto-pecuaria-pastagem.png` | 4096 x 2301 | foto | Rebanho de gado em pastagem aérea |
| rural_ImgID2 1 (fill satélite) | `public/images/hero-rural/foto-satelite-propriedade-rural.png` | 697 x 805 | foto | Imagem de satélite de propriedade rural com talhão demarcado em verde/amarelo |
| Check (ícone lista) | `public/icons/icon-check-circle.svg` | 11 x 11 (viewBox) | ícone | Checkmark branco (usado em círculo verde nos itens de lista e no badge "Sincronizado"; reaproveitado na seção Temporada) |
| Vector (seta alta, card VGV) | `public/icons/icon-seta-alta-vgv.svg` | 22.18 x 22.18 (viewBox) | ícone | Seta diagonal para cima (indicador de crescimento) |
| Btn → Acesse imóveis rurais | `public/icons/icon-badge-folha-rural.svg` | 107.9 x 110 (viewBox, inclui sombra) | ícone/decorativo | Emblema roxo com ícone de folha (módulo Rural) |

Nota: a seta do botão CTA "Testar grátis" nesta seção é idêntica à já baixada em `public/icons/icone-seta-cta.svg` — não foi duplicada.

---

## 6. Hero / Temporada — nodeId `1:235`

Pasta de imagens: `public/images/hero-temporada`. Pasta de ícones: `public/icons`.

### Texto extraído (ordem visual)

- Tag: "Especialidade · Imóveis TEMPORADAS"
- H2: "CRM Imobiliário para gestão de **temporada**"
- Parágrafo (subheading, centralizado): "**O CRM ideal para a gestão de locações por temporada e de curta duração**."
- Parágrafo: "**Da reserva ao check-out**, gerencie anúncios personalizados, disponibilidade, atendimentos e toda a operação em uma plataforma desenvolvida para simplificar a gestão diária de **locações por temporada** e de **curta duração**."
- H3: "Principais funcionalidades:"
- Item lista 1: "Cadastro personalizado de imóveis para locação por temporada;"
- Item lista 2: "Cadastro de cômodos, mobiliário, equipamentos e utensílios;"
- Item lista 3: "Emissão de contratos de locação por temporada e de curta duração;"
- Item lista 4: "Controle de reservas e calendário de disponibilidade;"
- Item lista 5: "Gestão financeira de recebimentos e repasses;"
- Item lista 6: "Valores de diárias para períodos especiais do ano;"
- Item lista 7: "Gestão do check-in e do check-out dos hóspedes;"
- Item lista 8: "Controle de ordens de serviço para limpeza e diaristas."
- Botão CTA (secundário): "Conheça o módulo Temporadas"
- Botão CTA (primário): "Testar grátis por 30 dias"
- Widget flutuante (badge): "Sincronizado com 11 portais"
- Widget flutuante (card): "Leads esta semana" / "5.375" / "+10,2%"
- Widget/mockup (calendário): "Novembro, 2026" (dias 15 e 22 destacados)
- Ícone decorativo (camada "Btn → Acesse imóveis temporada"): emblema roxo com ícone estilo folha/coqueiro — sem texto, decorativo

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Imagem → Tela da Imóveis Temporada (export achatado) | `public/images/hero-temporada/mockup-telas-imoveis-temporada.png` | 742 x 542 | mockup | Mockup com telas do módulo Temporada: anúncio de apartamento em Canasvieiras com fotos, calendário de reservas e app mobile de reserva |
| fill varanda/vista mar | `public/images/hero-temporada/foto-varanda-vista-mar.png` | 1536 x 1024 | foto | Varanda de apartamento com vista para o mar ao entardecer |
| fill academia | `public/images/hero-temporada/foto-academia-condominio.png` | 377 x 326 | foto | Academia do condomínio com vista para o mar |
| fill piscina | `public/images/hero-temporada/foto-piscina-cobertura.png` | 392 x 324 | foto | Piscina de borda infinita na cobertura, vista da cidade ao entardecer |
| Btn → Acesse imóveis temporada | `public/icons/icon-badge-praia-temporada.svg` | 107.9 x 110 (viewBox) | ícone/decorativo | Emblema roxo com ícone estilo folha/praia (módulo Temporada) |

Notas: o checkmark verde (badge/lista) reaproveita `public/icons/icon-check-circle.svg` (idêntico ao da seção Rural); a seta de tendência é visualmente igual a `public/icons/icon-seta-alta-vgv.svg` (variação de tamanho irrelevante, 21.3 vs 22.2); a seta do botão CTA reaproveita `public/icons/icone-seta-cta.svg`. Nenhum foi duplicado.

Observação de conteúdo: os textos internos do mockup da "ficha do imóvel" simulada (nome "Costa Azul Residence", endereço, valores, "Valor da diária R$ 1.250,00", botões "Contato por Whatsapp"/"Solicitar Reserva" etc.) são dados fictícios de demonstração da interface do produto, capturados apenas como parte da imagem do mockup — não são copy de marketing e não foram transcritos à parte.

---

## 7. Hero / Website — nodeId `371:216`

Pasta de imagens: `public/images/hero-website`. Pasta de ícones: `public/icons`.

### Texto extraído (ordem visual)

- Tag: "Especialidade · Sites, Hotsites e Landing Pages"
- H2: "Sites, Hotsites e Landing Pages otimizados para **SEO** e **GEO**"
- Destaque: "Sites profissionais desenvolvidos para cada segmento do mercado imobiliário."
- Parágrafo: "Desenvolvemos **sites modernos**, rápidos e inteligentes para imobiliárias, corretores de imóveis, agrocorretores, loteadoras e incorporadoras, com foco em desempenho, credibilidade e geração de oportunidades comerciais."
- Card 1 - Título: "Imobiliárias e Corretores" (ícone: casa)
- Card 2 - Título: "Agrocorretores" (ícone: trator)
- Card 3 - Título: "Loteadoras" (ícone: pin de localização)
- Card 4 - Título: "Incorporadoras" (ícone: capacete de obra)
- Botão CTA (secundário): "Conheça o módulo Sites e Hotsites"
- Botão CTA (primário): "Testar grátis por 30 dias"

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Imagem → Telas do Site (export achatado, MacBook + iPhone) | `public/images/hero-website/mockup-telas-do-site.png` | 711 x 612 | mockup | Mockup de site imobiliário "Ideal Imóveis" em notebook e celular, com busca de imóveis e destaques de lançamento |
| siteHome_verde 1 | `public/icons/icone-site-imobiliarias-corretores.png` | 82 x 82 | ícone (**veio como PNG, não SVG**) | Ícone de casa (Imobiliárias e Corretores) |
| siteRural_verde 1 | `public/icons/icone-site-agrocorretores.png` | 82 x 82 | ícone (**veio como PNG, não SVG**) | Ícone de trator (Agrocorretores) |
| siteLotedora_verde 1 | `public/icons/icone-site-loteadoras.png` | 82 x 82 | ícone (**veio como PNG, não SVG**) | Ícone de pin de mapa (Loteadoras) |
| siteConstrutor_verde 1 | `public/icons/icone-site-incorporadoras.png` | 82 x 82 | ícone (**veio como PNG, não SVG**) | Ícone de capacete de obra (Incorporadoras) |

Nota: seta do botão CTA reaproveita `public/icons/icone-seta-cta.svg`, não duplicada. O mockup do site também contém ~16 thumbnails de imóveis fictícios ("AXIS", "ALBOR Residence", "RESIDENCIAL MAIORI") e textos de busca fictícios ("Maringá – PR"); não foram extraídos individualmente por serem conteúdo de preenchimento de demonstração já capturado na imagem única do mockup.

---

## 8. Hero / CRM — nodeId `373:102`

Sem fotos/mockups de tela nesta seção (apenas badge, título, parágrafo, 4 cards de funcionalidades e botões) — nenhuma pasta de imagens foi necessária.

### Texto extraído (ordem visual)

- Tag: "Especialidade · CRM IMOBILIÁRIO"
- H2: "Funcionalidades inovadoras para o **mercado imobiliário**"
- Parágrafo: "Um **CRM** com uma trajetória marcada pela inovação e pela evolução constante, agora integrado às novas possibilidades da **inteligência artificial** para tornar sua operação mais simples, **ágil e eficiente**."

**Card 1 - Título:** "Gestão de Leads e Oportunidades" (ícone: chave)
- Item lista 1: "Controle de empréstimo de chaves com rotas para visitas no Google Maps;"
- Item lista 2: "Registro do feedback das visitas a imóveis direto no CRM pelo celular;"
- Item lista 3: "Radar de oportunidades entre clientes e imóveis;"
- Item lista 4: "Automação e distribuição de leads por roleta;"

**Card 2 - Título:** "Relacionamento e Agendamento" (ícone: duas pessoas conectadas)
- Item lista 1: "Cadastro de pessoas e imóveis internacionais;"
- Item lista 2: "Agenda integrada ao Google Calendar;"
- Item lista 3: "Integração nativa com o WhatsApp;"
- Item lista 4: "Central de mensagens;"

**Card 3 - Título:** "Perfil e Performance" (ícone: perfil/currículo)
- Item lista 1: "Perfil profissional e currículo comercial dos corretores integrado ao site;"
- Item lista 2: "Comitê de avaliação;"
- Item lista 3: "Análise de desempenho dos imóveis;"

**Card 4 - Título:** "Integrações e Inteligência" (ícone: peças de engrenagem/puzzle)
- Item lista 1: "Plugin do WhatsApp integrado ao Kanban de atendimento;"
- Item lista 2: "Esteira digital de vendas e locações;"
- Item lista 3: "Muitiplas integrações com inteligência artificial;" (grafia "Muitiplas" reproduzida verbatim do Figma — provável erro de digitação no design original)

- Botão CTA (secundário): "Conheça o módulo CRM Imobiliário"
- Botão CTA (primário): "Testar grátis por 30 dias"

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Icon — Key | `public/icons/icone-crm-leads-chave.svg` | 66 x 66 (viewBox) | ícone | Ícone de chave com pegada, representando gestão de leads |
| Icon — Relationship | `public/icons/icone-crm-relacionamento.svg` | 64 x 64 (viewBox) | ícone | Ícone de duas pessoas conectadas |
| Icon — Profile | `public/icons/icone-crm-perfil-performance.svg` | 66 x 66 (viewBox) | ícone | Ícone de perfil com barras de desempenho |
| Icon — Integrations | `public/icons/icone-crm-integracoes.svg` | 66 x 66 (viewBox) | ícone | Ícone de peças de puzzle entrelaçadas |
| Check (checklist, repetido nos 4 cards) | `public/icons/icone-check-verde-circulo.svg` | 16 x 16 (viewBox) | ícone | Checkmark branco em círculo verde |

Nota: seta do botão CTA reaproveita `public/icons/icone-seta-cta.svg`, não duplicada.

---

## 9. Hero / Integrations — nodeId `1:957`

Pasta de imagens: `public/images/hero-integrations`. Pasta de ícones: `public/icons`.

### Texto extraído (ordem visual)

- Tag: nenhum texto de eyebrow (apenas ponto decorativo)
- H2: "O CRM SUBSEE on integra-se às principais ferramentas e tecnologias do mercado" ("on" em destaque vermelho)
- Parágrafo: "Integre o CRM aos principais sistemas, plataformas e soluções de inteligência artificial que sua empresa já utiliza. Centralize informações, automatize processos e aumente a produtividade da sua operação." ("CRM", "sua empresa" e "sua operação" em negrito)
- Badge segmento 1: "Imobiliárias e Corretores"
- Badge segmento 2: "Agrocorretores"
- Badge segmento 3: "Loteadoras"
- Badge segmento 4: "Incorporadoras"
- Label central (logo do diagrama): "SUBSEE on"
- Conector direito 1: "Integrações com dezenas de Portais"
- Conector direito 2: "Integrações com Redes de Parcerias"
- Conector direito 3: "Integrações MCP e APIs"
- Botão CTA 1: "Testar grátis por 30 dias" (com ícone de seta)
- Botão CTA 2 (link secundário): "Conheça o módulo APIs & HUB Integrador"
- Ícones de parceiros ao redor do diagrama (sem texto associado): SUB100, Zap (Zap Imóveis), Meta, WhatsApp, Imovelweb, "123i", ícone de chave/API, ícone de IA, ícone de sincronização

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| siteHome_verde 1 (Imobiliárias e Corretores) | `public/images/hero-integrations/icone-imobiliarias-corretores.png` | 82 x 82 | ícone (**veio como PNG, não SVG**) | Ícone de imobiliárias e corretores |
| siteRural_verde 2 (Agrocorretores) | `public/images/hero-integrations/icone-agrocorretores.png` | 82 x 82 | ícone (**veio como PNG, não SVG**) | Ícone de agrocorretores |
| siteHome_verde 1 (Loteadoras) | `public/images/hero-integrations/icone-loteadoras.png` | 82 x 82 | ícone (**veio como PNG, não SVG**) | Ícone de loteadoras |
| siteHome_verde 1 (Incorporadoras) | `public/images/hero-integrations/icone-incorporadoras.png` | 82 x 82 | ícone (**veio como PNG, não SVG**) | Ícone de incorporadoras |
| SVG (seta do botão CTA) | `public/icons/seta-botao-cta.svg` | 20 x 20 | ícone | Seta do botão "Testar grátis por 30 dias" |
| _2432243841280 (logo central) | `public/icons/logo-subsee-on.svg` | 183.9 x 40 | logo | Logo SUBSEE on |
| Zap | `public/icons/logo-zap.png` | 98 x 98 | logo (**veio como PNG**, export achatado do badge) | Logo Zap Imóveis |
| Meta | `public/icons/logo-meta.png` | 98 x 98 | logo (**veio como PNG**) | Logo Meta |
| WhatsApp | `public/icons/logo-whatsapp.png` | 98 x 98 | logo (**veio como PNG**) | Logo WhatsApp |
| SUB100 | `public/icons/logo-sub100.png` | 98 x 98 | logo (**veio como PNG**) | Logo Portal SUB100 |
| Imovelweb | `public/icons/logo-imovelweb.png` | 98 x 98 | ícone (**veio como PNG**) | Ícone do portal Imovelweb |
| 123 (portal "123i") | `public/icons/logo-123i.png` | 98 x 98 | logo (**veio como PNG**) | Logo do portal 123i |
| Chave | `public/icons/icone-chave-api.png` | 98 x 98 | ícone (**veio como PNG**) | Ícone de chave/API |
| AI | `public/icons/icone-ai.png` | 98 x 98 | ícone (**veio como PNG**) | Ícone de inteligência artificial |
| Lards (na verdade ícone de sincronização/loading, renomeado para refletir o conteúdo real) | `public/icons/icone-sincronizacao.png` | 98 x 98 | ícone decorativo (**veio como PNG**) | Ícone de sincronização automática |

Observação: os PNGs de logos/ícones de parceiro vieram achatados (em vez de SVG) porque o design original usa múltiplas camadas com máscaras (`mask-alpha`/`mask-intersect`) que não se reconstroem de forma limpa como SVG único — resolvido exportando o badge completo já achatado em PNG. Formas puramente decorativas de fundo (elipses/blur, linhas conectoras, pontinhos) não foram baixadas — fora do escopo pedido (ícones de integração/parceiro).

---

## 10. Hero / Testimonials — nodeId `31:150`

Pasta de ícones: `public/icons` (sem pasta de imagens — os logos de clientes vieram como SVG).

### Texto extraído (ordem visual)

- Tag: "Especialidade · DEPOIMENTOS"
- H2: "O que nossos clientes falam dos nossos produtos e serviços"

**Depoimento 1:**
- Avaliação: 5 estrelas
- Citação: "Há quase 20 anos nossa imobiliária trabalha com o CRM SUBSEE. Essa trajetória foi construída com confiança, proximidade e troca constante de experiências. Ao longo dos anos, o sistema e o site acompanharam a evolução dos nossos processos e continuam contribuindo diariamente para tornar nossa operação mais organizada, eficiente e preparada para crescer."
- Logo empresa: Soma Imóveis
- Nome: "João Calçada"
- Cargo: "Gerente de Locação"
- Empresa: "Imobiliária Soma"

**Depoimento 2:**
- Avaliação: 5 estrelas
- Citação: "Minha relação com a SUB100 começou há muitos anos, ainda como corretor. Quando abri minha própria imobiliária, escolher o CRM SUBSEE foi uma consequência natural dessa confiança. Hoje, como empresário, sigo contando com uma parceria tecnológica capaz de acompanhar nosso crescimento e atender às novas necessidades que surgem com a expansão da empresa."
- Logo empresa: Carmona Imóveis
- Nome: "Marcio Carmona"
- Cargo: "Diretor"
- Empresa: "Carmona Imóveis"

**Depoimento 3:**
- Avaliação: 5 estrelas
- Citação: "A Benedini Fazendas buscava um CRM que realmente entendesse as particularidades do agronegócio. Com o SUBSEE, encontramos abertura para construir soluções em conjunto e adaptar processos à nossa realidade. Essa parceria tem sido importante para nossa atuação na intermediação de fazendas no Brasil e no Uruguai."
- Logo empresa: Benedini Fazendas
- Nome: "Henrique Benedini"
- Cargo: "Diretor"
- Empresa: "Benedini Fazendas"

(Total: 3 depoimentos — não há mais cards nesta seção.)

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Soma Imóveis | `public/icons/logo-soma-imoveis.svg` | 91.5 x 55 | logo | Logo Soma Imóveis |
| Carmano (Carmona) | `public/icons/logo-carmona-imoveis.svg` | 210 x 46.6 | logo | Logo Carmona Imóveis |
| Benedini | `public/icons/logo-benedini-fazendas.svg` | 151 x 65 | logo | Logo Benedini Fazendas |
| estrelas 1 | `public/icons/icone-estrelas-avaliacao.svg` | 161 x 27 | ícone (reutilizado nos 3 cards) | Avaliação 5 estrelas |
| Group 2 (aspas de abertura) | `public/icons/aspas-abertura.svg` | 93.3 x 69.5 | decorativo | decorativo |
| Group 1 (aspas de fechamento, cards 1 e 2) | `public/icons/aspas-fechamento.svg` | 93.3 x 69.5 | decorativo | decorativo |
| Group 3 (aspas de fechamento, card Benedini) | `public/icons/aspas-fechamento-benedini.svg` | 93.3 x 69.5 | decorativo | decorativo |
| Background / Vector | `public/icons/background-linhas-decorativas.svg` | 1918.2 x 195.6 | decorativo | decorativo |

---

## 11. Hero / FAQ — nodeId `54:422`

Pasta de imagens: `public/images/hero-faq`. Pasta de ícones: `public/icons`.

### Texto extraído (ordem visual)

- Tag: "Especialidade · Dúvidas Frequentes"
- H2: "Tudo sobre o SUBSEE on antes de começar"
- H3 (coluna lateral): "Tire suas dúvidas sobre o SUBSEE on de forma rápida e simples"
- (Imagem de pessoa ao lado do H3, sem texto associado)

**Pergunta 1:** "Por que você deve experimentar o CRM Imobiliário SUBSEE gratuitamente?"
**Resposta 1:** "Cada CRM possui características diferentes, com funcionalidades que podem fazer mais ou menos sentido para a realidade de cada imobiliária. Com o teste gratuito do SUBSEE, você pode conhecer o sistema sem custo, avaliar seus recursos, entender como ele se adapta à sua operação e contar com nosso suporte para esclarecer dúvidas, seja sua atuação focada em imóveis urbanos, rurais ou outros segmentos."

**Pergunta 2:** "Como vou aprender a usar o SUBSEE?"
**Resposta 2:** "Você conta com uma central de ajuda completa, com artigos e vídeos explicativos sobre cada funcionalidade do sistema. Também disponibilizamos treinamentos guiados durante a implantação, além de suporte próximo da nossa equipe para tirar dúvidas no dia a dia. Assim, você aprende no seu ritmo e sem complicação."

**Pergunta 3:** "Se eu estiver com dificuldade, posso solicitar um treinamento online?"
**Resposta 3:** "Sim. Além do material de apoio disponível na plataforma, você pode solicitar treinamentos online individuais ou em grupo diretamente com nossa equipe de suporte. As sessões são agendadas conforme sua disponibilidade e focadas nas dificuldades específicas da sua imobiliária."

**Pergunta 4:** "É possível importar meus dados do meu sistema para o SUBSEE?"
**Resposta 4:** "Sim. Nossa equipe auxilia na migração dos seus dados, como imóveis, clientes e contatos, de outros sistemas para o SUBSEE. O processo é acompanhado de perto para garantir que nenhuma informação importante se perca durante a transição."

**Pergunta 5:** "Por usar o SUBSEE, tenho direito a anunciar no Portal SUB100?"
**Resposta 5:** "Sim. Assinantes do SUBSEE têm acesso para anunciar seus imóveis no Portal SUB100, ampliando a visibilidade dos anúncios sem custo adicional. Essa integração é automática, então os imóveis cadastrados no CRM já ficam disponíveis para publicação no portal."

**Pergunta 6:** "O SUBSEE integra-se com quais portais imobiliários?"
**Resposta 6:** "O SUBSEE se integra aos principais portais do mercado, como Portal SUB100, OLX, Viva Real e ZAP Imóveis, entre outros. Assim você cadastra o imóvel uma única vez no sistema e ele é publicado automaticamente nos portais integrados, economizando tempo da sua equipe."

**Pergunta 7:** "Os anúncios podem ser integrados ao Pixel da Meta?"
**Resposta 7:** "Sim. O SUBSEE permite integrar o Pixel da Meta aos seus anúncios, possibilitando o rastreamento de conversões e a criação de públicos personalizados para campanhas no Facebook e Instagram. Isso ajuda a otimizar seus investimentos em anúncios pagos."

**Pergunta 8:** "O SUBSEE já vem com um site imobiliário?"
**Resposta 8:** "Sim. O SUBSEE inclui um site imobiliário integrado ao sistema, onde os imóveis cadastrados são publicados automaticamente. O site é responsivo, otimizado para buscadores e conta com formulários de contato conectados diretamente ao CRM" (sem ponto final — reproduzido verbatim do Figma)

**Pergunta 9:** "Se eu contratar um Plano Urbano, posso anunciar imóveis rurais?"
**Resposta 9:** "Não. O Plano Urbano é voltado para a gestão e divulgação de imóveis urbanos. Para anunciar imóveis rurais, é necessário contratar o Plano Rural ou um plano que contemple os dois segmentos, garantindo as funcionalidades específicas de cada operação."

(Total: 9 perguntas — capturadas por completo.)

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Imagem → Pessoa | `public/images/hero-faq/foto-pessoa-duvidas.png` | 251 x 373 | foto | Mulher sorrindo apontando para cima, ilustrando dúvidas sobre o sistema |
| Vector (interrogação topo) | `public/icons/decorativo-interrogacao-topo.svg` | 78.9 x 124.4 | decorativo | decorativo |
| Vector 1 (interrogação esquerda, parte 1) | `public/icons/decorativo-interrogacao-esquerda-1.svg` | 300.7 x 471.5 | decorativo | decorativo |
| Vector 2 (interrogação esquerda, parte 2) | `public/icons/decorativo-interrogacao-esquerda-2.svg` | 258.7 x 187.8 | decorativo | decorativo |
| Vector 3 (interrogação direita, parte 1) | `public/icons/decorativo-interrogacao-direita-1.svg` | 300.5 x 471.3 | decorativo | decorativo |
| Vector 4 (interrogação direita, parte 2) | `public/icons/decorativo-interrogacao-direita-2.svg` | 258.6 x 187.7 | decorativo | decorativo |
| Vector 5 (máscara do cartão FAQ) | `public/icons/decorativo-mask-cartao-faq.svg` | 1401 x 1830 | decorativo (retângulo de máscara) | decorativo |
| Vector 6 (blob azul 1) | `public/icons/decorativo-blob-azul-1.svg` | 444 x 439 | decorativo | decorativo |
| Vector 7 (blob azul 2) | `public/icons/decorativo-blob-azul-2.svg` | 439 x 439 | decorativo | decorativo |
| Div (bolinha marcador) | `public/icons/faq-bullet-dot.svg` | 12 x 24 | ícone (reutilizado nos 9 itens) | Marcador da pergunta |
| Div 1 (seta/chevron) | `public/icons/faq-seta-chevron.svg` | 16 x 10 | ícone (reutilizado nos 9 itens) | Seta de expandir/recolher pergunta |

---

## 12. Hero / Pricing — nodeId `64:154`

Pasta de imagens: `public/images/pricing`. Pasta de ícones: `public/icons`.

### Texto extraído (ordem visual)

- Tag: "Especialidade · Planos e Preços"
- H2: "Elaboramos planos que se encaixam no seu perfil"

**Plano 1 - Nome:** "Urbano"
**Plano 1 - Rótulo lista:** "Funcionalidades:"
**Plano 1 - Feature 1:** "10 Usuários"
**Plano 1 - Feature 2 (negrito):** "Site & hotsite padrão urbano*"
**Plano 1 - Feature 3:** "Integração com **SUB100** e outros portais"
**Plano 1 - Feature 4:** "Suporte via WhatsApp"
**Plano 1 - Feature 5:** "Treinamentos"
**Plano 1 - Preço:** "R$ 450,00"
**Plano 1 - Complemento preço:** "mês + opcionais"
**Plano 1 - Link secundário:** "Ver todos os recursos inclusos"
**Plano 1 - Botão CTA:** "Testar grátis por 30 dias"

**Plano 2 - Nome:** "Rural"
**Plano 2 - Rótulo lista:** "Funcionalidades:"
**Plano 2 - Feature 1:** "10 Usuários"
**Plano 2 - Feature 2 (negrito):** "Site & hotsite padrão Rural*"
**Plano 2 - Feature 3:** "Integração com **SUB100**"
**Plano 2 - Feature 4:** "Suporte via WhatsApp"
**Plano 2 - Feature 5:** "Treinamentos"
**Plano 2 - Preço:** "R$ 450,00"
**Plano 2 - Complemento preço:** "mês + opcionais"
**Plano 2 - Link secundário:** "Ver todos os recursos inclusos"
**Plano 2 - Botão CTA:** "Testar grátis por 30 dias"

(Apenas 2 planos nesta seção. A imagem da pessoa tem 4 ícones flutuantes ao redor sem texto/rótulo visível — categorias de imóveis: venda, locação, rural, temporada, lançamentos.)

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Imagem → Pessoa (imgImagemPessoa) | `public/images/pricing/pessoa-apontando.png` | 886 x 1068 | foto | Homem sorrindo apontando para os planos de preços |
| Vector (bg, alvo) | `public/icons/decorativo-alvo-pricing.svg` | 209.4 x 232.6 | decorativo | decorativo |
| Vector2 (bg, prédio) | `public/icons/decorativo-predio-pricing.svg` | 607.2 x 471.7 | decorativo | decorativo |
| Vector1 (bg, casa/chave) | `public/icons/decorativo-casa-pricing.svg` | 348.4 x 293.3 | decorativo | decorativo |
| SVG (seta chevron botão) | `public/icons/seta-botao-branca.svg` | 20 x 20 | ícone | Seta do botão "Testar grátis" |
| seta.svg (bullet lista) | `public/icons/seta-lista-verde.svg` | 10 x 15 | ícone | Marcador de item da lista de funcionalidades |
| Vector4 (ícone rural) | `public/icons/icone-imoveis-rurais.svg` | 23.3 x 24.7 | ícone | Acesse imóveis rurais |
| Vector5 (ícone temporada) | `public/icons/icone-imoveis-temporada.svg` | 21.2 x 24.7 | ícone | Acesse imóveis de temporada |
| Vector6 (ícone lançamentos) | `public/icons/icone-imoveis-lancamentos.svg` | 21.2 x 24.7 | ícone | Acesse imóveis lançamentos |
| Vector3 (ícone locação) | `public/icons/icone-imoveis-locacao.svg` | 21.2 x 24.7 | ícone | Acesse imóveis locação |
| venda.svg (ícone venda) | `public/icons/icone-imoveis-venda.svg` | 21.3 x 24.7 | ícone | Acesse imóveis venda |

Nota: `icone-imoveis-temporada.svg`, `icone-imoveis-lancamentos.svg`, `icone-imoveis-locacao.svg` e `icone-imoveis-venda.svg` reaproveitam os mesmos nomes de arquivo já usados no Hero Main/Urbano (podem ser variações levemente diferentes desta seção — vide dimensões próprias reportadas acima; confira antes de reaproveitar 1:1 no componente).

---

## 13. Hero / Blog — nodeId `64:129`

Pasta de imagens: `public/images/blog`. Pasta de ícones: `public/icons`.

### Texto extraído (ordem visual)

- Tag: "Especialidade · BLOG DA SUB100"
- H2: "Tendências, dicas e oportunidades do **mercado imobiliário**"

**Post 1 - Título:** "Como escolher um corretor"
**Post 1 - Resumo:** "Encontrar o corretor certo pode fazer toda a diferença na compra ou na venda de um imóvel."
**Post 1 - Botão CTA:** "Saiba mais →"

**Post 2 - Título:** "Inovação para Agrocorretores"
**Post 2 - Resumo:** "Corretores de imóveis inovam com a expansão do agronegócio no Brasil."
**Post 2 - Botão CTA:** "Saiba mais →"

**Post 3 - Título:** "Descubra Porto Rico"
**Post 3 - Resumo:** "Paraíso da natureza, com praias de água doce e um dos maiores canteiros de obras do Paraná."
**Post 3 - Botão CTA:** "Saiba mais →"

(Não há "categoria/tag" nem "autor/data" visíveis nos cards — apenas imagem, título, resumo e link "Saiba mais". Total: 3 posts.)

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| vendedor 1 | `public/images/blog/corretor-aperto-de-mao.png` | 1536 x 773 | foto | Dois corretores se cumprimentando com aperto de mão |
| rural 2 | `public/images/blog/agrocorretor-plantacao-milho.png` | 1024 x 516 | foto | Homem em plantação de milho segurando celular com mapa de imóvel rural |
| ilha 1 | `public/images/blog/ilha-porto-rico-vista-aerea.png` | 1536 x 773 | foto | Vista aérea de ilha com praias e rios em Porto Rico (Paraná) |
| Azul (linha decorativa) | `public/icons/decorativo-linha-azul-blog.svg` | 1920.3 x 192.9 | decorativo | decorativo |
| branca (linha decorativa) | `public/icons/decorativo-linha-branca-blog.svg` | 1920.4 x 175.5 | decorativo | decorativo |

Observação: existia um layer "rural 1" sem imagem/fill atribuído (vazio) sobreposto por "rural 2" — não gerou asset próprio; apenas "rural 2" é a imagem real usada.

---

## 14. Hero / Other Products — nodeId `2907:2192`

Pasta de ícones: `public/icons` (não há fotos/rawImages neste nó — apenas vetores).

### Texto extraído (ordem visual)

- Tag: "Especialidade · outros produtos"
- H2: "Anuncie em um dos maiores portais de **imóveis** do Brasil e conheça o melhor sistema para gestão de **loteamentos**"

**Produto 1 - Nome/Selo:** "SUB100 Imóveis"
**Produto 1 - Título:** "Anuncie seus imóveis e empreendimentos em um dos maiores portais do Brasil"
**Produto 1 - Descrição:** "Anuncie seus Lançamentos, Imóveis de Venda, Locação, Imóveis Rurais e Temporada em um portal com mais de 26 anos de experiência"
**Produto 1 - Botão CTA:** "Saiba mais →"

**Produto 2 - Nome/Selo:** "SUB100 Loteadoras e Incorporadas"
**Produto 2 - Título:** "Simulador de vendas, mapa interativo, financeiro completo e portal do cliente"
**Produto 2 - Descrição:** "O ERP para loteadoras e incorporadas, o SGL é um sistema de gestão fácil que se integra aos seus processos"
**Produto 2 - Botão CTA:** "Saiba mais →"

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| micro.svg | `public/icons/logo-sub100-imoveis-produto.svg` | 120 x 138 | logo | Ícone/logo do produto SUB100 Imóveis |
| sgl.svg | `public/icons/logo-sgl-produto.svg` | 158 x 160 | logo | Ícone/logo do produto SGL |
| Azul (linha decorativa) | `public/icons/decorativo-linha-azul-outros-produtos.svg` | 1920.3 x 192.9 | decorativo | decorativo |
| branca (linha decorativa) | `public/icons/decorativo-linha-branca-outros-produtos.svg` | 1920.4 x 175.5 | decorativo | decorativo |

Observação: os dois vetores de linha decorativa ("Azul"/"branca") têm mesmo conteúdo/tamanho do já baixado na seção Blog (elemento de fundo reaproveitado entre seções); foi salva uma cópia própria com sufixo "-outros-produtos" para esta seção.

---

## 15. Footer (instance) — nodeId `525:256`

Pasta de ícones: `public/icons` (não há fotos/rawImages neste nó — apenas vetores).

### Texto extraído (ordem visual)

- Logo (topo esquerdo): "SUB100 Imobiliárias" (wordmark em SVG)

**Grupo "Localização":**
- H3: "Localização"
- Endereço: "Rua Machado de Assis, 621 / Zona 06 - CEP 87015-580 / Maringá - PR"
- Botão: "Como chegar"

**Parágrafo institucional (centro):**
"Há 26 anos, a SUB100 Sistemas ajuda a realizar os sonhos de milhões de pessoas, conectando através do seu CRM e Site imobiliário a corretores, imobiliárias, loteadoras, incorporadoras e construtoras às pessoas que procuram um novo lugar para morar ou investir"

**Grupo "Redes sociais":**
- H3: "Siga nas redes sociais"
- Ícones (ordem visual esquerda → direita, sem rótulo textual, apenas como link): Facebook, Instagram, LinkedIn, Blog
  - Facebook → `https://www.facebook.com/sub100brasil`
  - Instagram → `https://www.instagram.com/sub100brasil/`
  - LinkedIn → `https://www.linkedin.com/company/sub100/`
  - Blog SUB100 → `https://blog.sub100sistemas.com.br/`

**Grupo "Comercial" (direita):**
- H3: "Comercial"
- Telefone: "44 3032-5200"
- Link: "Política de privacidade"
- Link: "Termos de uso"
- Botão (ícone apenas, sem texto): alternância de tema claro/escuro

**Rodapé / Copyright (linha inferior):**
- "© 2026 SUB100 Imobiliárias"
- "CNPJ: 11.528.518/0001-19"
- "SUB100 Sistemas by [ícone coração]" (link "SUB100" → `https://sub100sistemas.com.br/`, com "Sistemas" ao lado, e "by ♥" entre eles)

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| sub100imobiliarias.svg | `public/icons/logo-sub100-imobiliarias-footer.svg` | 160 x 44 | logo | Logo SUB100 Imobiliárias |
| heart.svg | `public/icons/icone-coracao-footer.svg` | 14 x 14 | ícone | Ícone de coração ("feito com amor") |
| dark.svg | `public/icons/icone-modo-escuro.svg` | 24 x 24 | ícone | Alternar para modo escuro |
| linkedin.svg | `public/icons/social-linkedin.svg` | 34 x 34 | ícone | LinkedIn da SUB100 |
| instagram.svg | `public/icons/social-instagram.svg` | 29.75 x 34 | ícone | Instagram da SUB100 |
| facebook.svg | `public/icons/social-facebook.svg` | 29.75 x 34 | ícone | Facebook da SUB100 |
| blog.svg | `public/icons/social-blog.svg` | 34 x 34 | ícone | Blog da SUB100 |

Nota: existe também `public/icons/icone-usuario-entrar.svg` da seção Header — não relacionado ao Footer, listado apenas na seção 1.

---

## Resumo de duplicidades/reaproveitamentos entre seções

- **Seta do botão "Testar grátis por 30 dias"**: idêntica em várias seções (Main, Urbano, Rural, Temporada, Website, CRM, Integrations, Pricing) — arquivos `public/icons/icone-seta-cta.svg`, `icone-seta-cta-urbano.svg`, `seta-botao-cta.svg` e `seta-botao-branca.svg` foram salvos (algumas seções reaproveitaram o arquivo já existente ao invés de recriar; confira no detalhamento por seção acima).
- **Checkmark verde** (listas/badges "Sincronizado"): mesmo desenho usado em Rural, Temporada (`icon-check-circle.svg`) e variante própria no CRM (`icone-check-verde-circulo.svg`) e Urbano (`icone-check-lista-urbano.svg`).
- **Seta de tendência "para cima"** (cards VGV/Leads): mesma em Rural e Temporada (`icon-seta-alta-vgv.svg`), variação de tamanho irrelevante; variante própria em Urbano (`icone-vgv-propostas.svg`).
- **Ícones de categoria de imóvel** (locação/venda/rural/temporada/lançamentos): reaproveitados entre Hero Main, Hero Urbano e Hero Pricing (mesmos nomes de arquivo `icone-imoveis-*.svg` — confira dimensões reportadas por seção, pois pequenas variações de tamanho podem indicar arquivos ligeiramente diferentes apesar do nome igual).
- **Linhas decorativas azul/branca** (fundo de seção): reaproveitadas entre Blog e Other Products (`decorativo-linha-azul-blog.svg`/`decorativo-linha-azul-outros-produtos.svg` e as versões "branca" equivalentes — mesmo conteúdo, cópias separadas por seção).

## Itens que precisam de decisão/atenção manual

1. **Header** — texto do menu "Eventos" diverge do nome da camada Figma ("Soluções"); confirmar com o time se o rótulo correto é "Eventos" ou se há erro de atualização no arquivo de design.
2. **Hero / Main** — botão "Assista os vídeos do SUBSEE on" aparenta estar truncado no próprio Figma; confirmar o texto completo antes de implementar.
3. **Hero / Rural** — existe um card oculto ("LEADS ESTA SEMANA" / "8.254" / "+11,2% leads") com `hidden=true` no Figma — não deve ser implementado, mantido aqui apenas para registro.
4. **Hero / CRM** — item de lista "Muitiplas integrações com inteligência artificial" contém erro de digitação ("Muitiplas") reproduzido verbatim do Figma; validar se deve ser corrigido para "Múltiplas" na implementação final.
5. **Hero / FAQ** — Resposta 8 não possui ponto final no Figma original; validar se deve ser adicionado na implementação.
6. Vários ícones em **Integrations** e **Hero/Website** vieram como **PNG achatado em vez de SVG** (composições com máscaras no Figma) — considerar solicitar reexportação como SVG puro ao designer, se vetorização for necessária para escalabilidade/temas.
7. Conteúdo de mockups de produto (telas de app/site simuladas em Urbano, Rural, Temporada, Website) contém dados fictícios de demonstração (endereços, preços, nomes de empreendimentos fake) que foram capturados apenas como imagem única — não foram transcritos como copy, pois não são texto de marketing real.

---

## Resumo de arquivos baixados

- Total de imagens (fotos/mockups) em `public/images/`: **42 arquivos**, distribuídos em 11 subpastas (`header` sem foto própria, `hero-main`, `hero-urbano`, `hero-rural`, `hero-temporada`, `hero-website`, `hero-faq`, `pricing`, `blog`, `hero-integrations`; `hero-crm`, `hero-other-products` e `footer` não geraram fotos, apenas ícones).
- Total de ícones/vetores em `public/icons/`: **89 arquivos** (a maioria SVG nativo; alguns marcados explicitamente como "veio como PNG, não SVG").
- Todos os arquivos foram confirmados fisicamente em disco (nenhum arquivo vazio/corrompido encontrado na verificação final).
- Todas as 15 seções tiveram texto e assets extraídos com sucesso — nenhuma seção falhou integralmente.