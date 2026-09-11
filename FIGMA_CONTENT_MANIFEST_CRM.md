# Manifesto de Conteúdo e Assets — CRM Imobiliário `/modulos/crm` (Figma)

Fonte: Figma fileKey `vX7qKnnXSOW8zv4kAuS2eN` — frame `Section / CRM Imobiliário` (nodeId `476:3`, 2044 x 8557px), 9 seções filhas listadas no `tasks.md` da feature `crm-imobiliario`.

Este documento reúne, seção por seção e na ordem definida no `spec.md`/`tasks.md` (Hero → Technology → All-in-One → Overview → Integrations → Publishing → Testimonials → Other Modules → FAQ), todo o texto real (copy) extraído verbatim do Figma via `get_design_context`/`get_metadata`, e a tabela de assets (imagens/ícones) baixados para o projeto Nuxt em `public/images/modulos-crm/` e `public/icons/` (ícones, pasta plana, convenção já existente no projeto). Nenhum código Vue foi escrito a partir deste documento ainda — apenas conteúdo e arquivos de asset (T1). Os componentes `Crm*.vue` (T2–T10) usam exclusivamente o texto abaixo.

Convenções:
- Caminhos abaixo são relativos a `d:\Trabalho\Git\site-subsee-novo\` salvo indicação contrária.
- "W x H" é a dimensão real do arquivo baixado (pixels para raster; `width`/`height` do `viewBox` para SVG).
- Ícones puramente decorativos (fundos, ondas, blobs) foram, nesta página, majoritariamente substituídos por gradientes CSS simples (já usados em outras seções do site) em vez de baixar cada vetor de fundo individualmente — decisão de simplicidade (nenhuma AC/Done-when desta feature exige reprodução pixel-a-pixel de decorações de fundo). Onde um asset decorativo foi baixado mesmo assim, está identificado como tal.
- Vários ícones "compostos" do Figma (ex.: seção All-in-One, Technology) são exportados pela ferramenta como fragmentos vetoriais numerados sem nome estável; quando isso ocorreu, a correspondência ícone→conceito foi confirmada abrindo o SVG baixado e conferindo a forma/`viewBox` contra o `alt` esperado (documentado caso a caso abaixo).
- **Nota de nomenclatura interna do Figma**: os nodeId `3089:12661` e `3089:12721` têm, internamente no arquivo Figma, os nomes de camada trocados (`3089:12661` chama-se internamente "Section / Hero / **Publishing**" e contém o conteúdo de 3 cards "Publicação Integrada de Imóveis"; `3089:12721` chama-se internamente "Section / Hero / **Overview**" e contém os 4 mockups de celular). Este manifesto e os componentes seguem os nomes de seção do `spec.md`/`tasks.md` (Overview = `3089:12661`, Publishing = `3089:12721`), que correspondem corretamente ao conteúdo de cada nodeId — a troca é apenas um rótulo interno de camada no arquivo de design, não um erro deste manifesto.

---

## 1. Hero / Top — nodeId `3472:6589` (id atualizado em 2026-09-08)

**Nota de node id**: o nodeId `3089:12037` documentado originalmente não existe mais no arquivo Figma — o arquivo foi editado pelo time de design entre a extração inicial (T1) e esta revisão. Re-extraído via `get_metadata` (busca no frame pai `476:3`) + `get_design_context` em 2026-09-08. Todo o conteúdo abaixo substitui a versão anterior desta seção.

**Nota de dimensão do frame (2026-09-08, segunda revisão no mesmo dia)**: o frame "Section / Hero / Top" media 1920×613px na extração anterior (mesmo dia); uma nova consulta via `get_metadata` + `get_screenshot` confirmou que o arquivo Figma foi editado novamente e o frame agora mede **1920×528px** (`x=0 y=85 width=1920 height=528`). Medidas atuais confirmadas por duas chamadas MCP independentes: Row em `x=259 y=7 width=1401 height=456`; Divider ("Horizantal Divider") em `x=0 y=327 width=1920 height=201`. A implementação em `CrmHero.vue` usa essas medidas atuais (528, não 613) para o bloco de aspect-ratio do desktop. Se o arquivo Figma for editado de novo no futuro, reconfirmar via `get_metadata` antes de assumir que estas medidas ainda valem — este arquivo já mudou de tamanho 2 vezes no mesmo dia.

Pasta de imagens: `public/images/modulos-crm`. Pasta de ícones: `public/icons` (prefixo `crm-hero-` para os assets novos desta seção, para não colidir com ícones compartilhados de `HeroMain.vue`).

### Texto extraído (ordem visual)

- H1: "CRM Completo" / "para **Imobiliárias**" (2 linhas; "Imobiliárias" em roxo/marca `#5d5fef`; fonte real do Figma é **Nunito Sans ExtraBold**, 42px, mas por pedido explícito do usuário (2026-09-08) o componente usa **Poppins Bold** para bater com o padrão tipográfico do restante do site — divergência intencional e aprovada, não um gap de extração. Nunito Sans continua carregada via Google Fonts pois o parágrafo "Tenho interesse neste apartamento..." do card Paulo Henrique Silva genuinamente usa essa fonte no Figma e não foi solicitado alterá-lo.)
- Parágrafo: "Gerencie clientes, atendimentos, agendamentos, leads, propostas e negociações, tudo em um só lugar para aumentar a produtividade da sua imobiliária." (Poppins Regular, 24px)
- Ícones "Btn → Icones Imóveis" (5 itens, ordem real: Lançamentos, Venda, Rural, Locação, Temporada) — **todos os 5 têm exatamente a mesma estrutura**: um chip `27.887×30px` com fundo `bg-brand` (`#5d5fef`) + `drop-shadow`, contendo 1 único ícone pequeno centralizado (14–18px de largura, 16–19px de altura, variando por glifo). Nenhum deles embute o fundo no próprio SVG nem usa canvas sobredimensionado — essa era uma leitura **errada** de uma extração anterior (ver correção abaixo).
  - **Correção 2026-09-08 (segunda revisão)**: a extração original (um único `get_design_context` no Hero inteiro) capturou, para Lançamentos/Locação/Temporada, um asset com canvas 107.887×110 aparentando ter o fundo embutido, e para Rural uma composição de 2 camadas (outline + fill). Consultando cada node individualmente (`3472:6597`, `3472:6599`, `3472:6602`, `3472:6606`, `3472:6608`) via `get_design_context`, ficou claro que essa leitura estava errada: **todos os 5 nodes têm a mesma estrutura simples** (chip `bg-brand` + 1 ícone único centralizado, sem canvas grande, sem composição de camadas). A consulta por node individual provou ser mais confiável que o fetch único do Hero inteiro para este tipo de detalhe — registrar como lição para próximas extrações desta página.
  - Dimensões reais por ícone (ícone dentro do chip 27.887×30, centralizado): Lançamentos 14.137×16.479; Venda 16.409×19.017; Rural 17.911×19; Locação 14.165×16.479; Temporada 16.331×19.
  - Sombras reais por ícone (não são todas iguais — confirmado no Figma, não é inconsistência de implementação): Lançamentos/Rural/Locação usam `drop-shadow-[0px_10px_20px_rgba(93,95,239,0.4)]`; Venda usa `drop-shadow-[0px_10px_20px_rgba(93,95,239,0.6)]`; Temporada usa `drop-shadow-[9px_0px_20px_rgba(93,95,239,0.6)]` (deslocamento horizontal, não vertical).
  - Centralização implementada via flexbox (`items-center justify-center` no chip) — **não** via `top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` no ícone: essa combinação de utilities do Tailwind não gera nenhum CSS neste projeto (bug sitewide confirmado, ver `AD-007` em `.specs/STATE.md`), então usá-la deixaria os ícones deslocados (o próprio Figma reference code usa esse padrão, mas ele não funciona neste projeto — flexbox é o substituto funcional).
- Card flutuante 1: "Agendar uma visita" / "Agenda inteligente" (ícone: calendário)
- Card flutuante 2: "Fazer uma proposta" / "Negociação simplificada" (ícone: envelope)
- Card flutuante 3 (mensagem de cliente): "Paulo Henrique Silva" / "Tenho interesse neste apartamento de 2 suítes." / botão "Me ligue"
- Badge decorativo (ícone de pessoas, canto superior direito da foto): sem texto, puramente decorativo

**Composição responsiva (2026-09-08, terceira revisão)**: até então, tablet/mobile (<992px) usavam um layout alternativo (cards em pilha vertical, separados da foto). Por pedido do usuário, tablet/mobile agora reutilizam a MESMA composição sobreposta do desktop (foto + badge + 2 setas + 3 cards flutuantes, todos nas mesmas posições percentuais do bloco de referência 721×456) em largura total, empilhada abaixo da Coluna 01 — só a escala muda. Nova escala de font-size própria para os textos dos cards nesse intervalo (independente da escala 992+ do desktop): `<576px` (mais estreito) = menor; `576–767px` = intermediário; `768–991px` = maior, já próximo do tamanho usado em 992–1299px no desktop. Testado de 375px até 991px sem quebra de linha nos títulos/subtítulos dos cards; abaixo de ~360px (ex.: 320px, viewport legado/raro hoje) o texto ainda quebra para 2 linhas — aceito como limitação de borda em vez de reduzir a fonte a um tamanho ilegível.

### Nota importante (gap confirmado via `get_design_context`, 2026-09-08)

O node `3472:6589` **não contém nenhum botão/CTA** — reconfirmado na re-extração (mesma conclusão do node original `3089:12037`). O texto do usuário para esta revisão da seção também não lista nenhum CTA na estrutura exigida. **Decisão revisada**: a CTA "Testar grátis por 30 dias" que havia sido reaproveitada na primeira implementação foi **removida** de `CrmHero.vue`, para bater exatamente com o Figma. `spec.md` AC2 (P1) foi corrigido para não exigir mais CTA nesta seção especificamente — o requisito de CTA funcional do módulo já é satisfeito pela seção Technology (AC3).

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Imagem (foto) | `public/images/modulos-crm/hero-foto-mulher-notebook.png` | 343 x 456 | foto | Mulher sorridente segurando um notebook/tablet |
| Ellipse (avatar do card "Paulo Henrique Silva") | `public/images/modulos-crm/hero-avatar-paulo-henrique.png` | 44 x 44 | foto | Foto de perfil de Paulo Henrique Silva |
| Ellipse/ CSS (blur decorativo atrás da foto) | `public/icons/crm-hero-ellipse-blur.svg` | 974 x 1046 | decorativo | decorativo |
| Curva (seta azul) | `public/icons/crm-hero-seta-curva-azul.svg` | 161 x 53 | decorativo | decorativo |
| Curva (seta verde/teal) | `public/icons/crm-hero-seta-curva-verde.svg` | 183 x 124 | decorativo | decorativo |
| Ellipse (status online, card Paulo Henrique) | `public/icons/crm-hero-status-dot.svg` | 15.8 x 15.8 | ícone | decorativo |
| venda.svg | `public/icons/crm-hero-icone-venda.svg` | 16.4 x 19 | ícone | decorativo |
| Item → Acesse imóveis lançamentos | `public/icons/crm-hero-icone-lancamentos.svg` | 27.9 x 30 | ícone | decorativo |
| Item → Acesse imóveis locação | `public/icons/crm-hero-icone-locacao.svg` | 27.9 x 30 | ícone | decorativo |
| Item → Acesse imóveis temporada | `public/icons/crm-hero-icone-temporada.svg` | 27.9 x 30 | ícone | decorativo |
| Vector (contorno rural) | `public/icons/crm-hero-icone-rural-outline.svg` | ~15 x 16 | ícone | decorativo |
| Vector (preenchimento rural) | `public/icons/crm-hero-icone-rural-fill.svg` | 17.9 x 19 | ícone | decorativo |
| Group (email, 2 fragmentos) | `public/icons/crm-hero-email-1.svg`, `crm-hero-email-2.svg` | 23.7 x 23.7 (combinado) | ícone | decorativo |
| Group (calendário, 12 fragmentos) | `public/icons/crm-hero-calendar-1.svg` … `crm-hero-calendar-12.svg` | 21.8 x 21.8 (combinado) | ícone | decorativo |
| Vector (badge/ícone de pessoas, 4 fragmentos) | `public/icons/crm-hero-badge-icone-1.svg` … `-4.svg` | 50 x 50 (combinado) | ícone | decorativo |
| Horizantal Divider (onda + 2 linhas decorativas combinadas em 1 asset) | `public/icons/crm-hero-divider-onda.svg` | 1920.24 x 202 | decorativo | decorativo |

Os ícones de calendário/email/badge são exportados pelo Figma como fragmentos vetoriais numerados sem nome estável (múltiplos `Group`/`Vector` por glifo) — reproduzidos fielmente como múltiplas imagens sobrepostas via posicionamento percentual, sem recriar como SVG único à mão, conforme a convenção do topo deste documento. O `Horizantal Divider` já vem do Figma como um único asset combinando o bloco branco inferior (path preenchido) e as 2 linhas curvas decorativas (paths com stroke) — não são 3 elementos separados nesta versão do arquivo Figma.

---

## 2. Hero / Technology — nodeId `3089:12139`

Pasta de imagens: `public/images/modulos-crm`.

### Texto extraído (ordem visual)

- H2: "A tecnologia que impulsiona **sua imobiliária**" (2ª linha em roxo/marca)
- Parágrafo: "Reduza o retrabalho no dia a dia da imobiliária, acompanhe o desempenho dos corretores e centralize atendimentos, propostas e negociações em um único sistema"
- Botão CTA: rótulo do componente é "Link → Agendar Demonstração", mas o **texto realmente renderizado** é "Testar grátis por 30 dias" (confirmado no código extraído — a instância do componente não teve o texto sobrescrito no Figma). Ver nota abaixo.
- Mockup: tela de dashboard "Kanban de atendimentos" do produto SUBSEE — cabeçalho com logo SUB100, menu (Eu sou a Mel / Funil Imobiliário / Dashboard), avatar "Olá Walcir"; menu lateral com itens (Início, Imóveis, Edifícios e Condomínios, Pessoas, CRM ▸ Funil Imobiliário/Kanban de atendimentos/Base de Leads/Distribuição de Leads/Radar Cliente X Imóveis/Automação de Marketing/Agenda/Origens de atendimento/Motivos de perda/Metas/Tags/Importar Leads, Destaques, Chaves); board Kanban com colunas "Sem Contato" (20), "Em Atendimento" (5), "Em Negociação" (4) e cartões de clientes fictícios (nomes, valores, tipo de negociação) — dados de demonstração da interface, não copy de marketing (mesmo tratamento dado a mockups equivalentes no manifesto da Home).

### Nota (divergência rótulo × texto real)

O componente é nomeado internamente "Agendar Demonstração" mas o texto efetivamente visível/renderizado no Figma é "Testar grátis por 30 dias". Por regra deste projeto (nunca inventar copy — o conteúdo real do Figma prevalece sobre o nome da camada), o componente `CrmTechnology.vue` (T3) usa o texto real "Testar grátis por 30 dias" → `/testar-gratis`, com nota `SPEC_DEVIATION` referenciando este manifesto (o `tasks.md` original assumia o rótulo "Agendar Demonstração").

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Tela (export achatado do dashboard, per assunção confirmada do spec: mockup estático) | `public/images/modulos-crm/tecnologia-mockup-dashboard.png` | 2800 x 1292 (export @2x) | mockup | Mockup do painel Kanban de atendimentos do SUBSEE, mostrando menu lateral do CRM e cartões de clientes organizados por etapa de atendimento |

Dezenas de fragmentos vetoriais internos ao mockup (ícones do menu, avatares, decorações do Kanban) não foram baixados individualmente — a seção inteira do dashboard é tratada como imagem estática única, conforme assunção já confirmada no `spec.md` ("Mockup do dashboard na seção Technology: Imagem estática exportada, não markup ao vivo").

---

## 3. Hero / All-in-One — nodeId `3089:12611`

Pasta de ícones: `public/icons`.

### Texto extraído (ordem visual)

- H2: "Tudo o que sua imobiliária precisa para vender mais"
- Parágrafo: "Ferramentas pensadas para cada etapa do processo comercial imobiliário: da captação do lead ao fechamento do contrato"

**Card 1 — Funil Imobiliário**: "Gerencie todas as etapas da venda, do primeiro contato ao fechamento de cada oportunidade."
**Card 2 — Kanban de Atendimentos**: "Organize os atendimentos em quadros, distribua tarefas e acompanhe cada atividade em tempo real."
**Card 3 — Gestão de Leads**: "Centralize todos os leads em um só lugar e distribua automaticamente para sua equipe comercial."
**Card 4 — Automação de Marketing**: "Automatize campanhas, nutra seus contatos e mantenha clientes sempre engajados durante a jornada."
**Card 5 — Agenda**: "Organize visitas, reuniões e compromissos com lembretes para nunca perder uma oportunidade."
**Card 6 — Relatórios e Metas**: "Acompanhe indicadores, metas e resultados da equipe para tomar decisões com mais segurança."

- Botão CTA: texto real renderizado "Testar grátis por 30 dias" (mesmo componente padrão do site) → mesma observação de reaproveitamento do CTA universal.

### Nota (correspondência spec ↔ conteúdo real)

O `spec.md` (AC4 P1) e `tasks.md` (T4) descrevem esta seção como "4 cards de funcionalidade (Automação de Marketing, Agenda, Distribuição de Leads, Relatórios e metas)". O node Figma real (`3089:12611`) contém **6 cards**, não 4, e o card citado como "Distribuição de Leads" no `spec.md` chama-se, no Figma, "**Gestão de Leads**" (texto: "Centralize todos os leads..."); os outros 5 títulos batem. Este manifesto reporta os 6 cards reais; T4 implementa os 6, não 4 — divergência de contagem do `spec.md`/`tasks.md` (assunção pré-extração) vs. conteúdo real do Figma, resolvida a favor do conteúdo real por regra deste projeto.

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| icon (Funil Imobiliário) | `public/icons/icone-crm-allinone-funil.svg` | 48 x 53 (viewBox) | ícone | Ícone de funil de vendas |
| Vector (Kanban de Atendimentos) | `public/icons/icone-crm-allinone-kanban.svg` | 50 x 50 (viewBox) | ícone | Ícone de quadro Kanban |
| icon (Gestão de Leads) | `public/icons/icone-crm-allinone-gestao-leads.svg` | 53.2 x 50 (viewBox) | ícone | Ícone de gestão de leads |
| icon (Automação de Marketing) | `public/icons/icone-crm-allinone-automacao-marketing.svg` | 43.5 x 50 (viewBox) | ícone | Ícone de automação de marketing |
| icon (Agenda) | `public/icons/icone-crm-allinone-agenda.svg` | 45 x 54.3 (viewBox) | ícone | Ícone de agenda |
| icon (Relatórios e Metas) | `public/icons/icone-crm-allinone-relatorios.svg` | width/height conforme arquivo | ícone | Ícone de relatórios e metas |

Fundo decorativo (gradiente roxo + padrão de pontos em máscara SVG) não foi baixado — reproduzido como gradiente CSS simples na implementação (T4), seguindo a regra de simplicidade. Seta do botão CTA não baixada — `CtaButton.vue` já renderiza seu próprio ícone de seta.

---

## 4. Hero / Overview ("Publicação Integrada de Imóveis") — nodeId `3089:12661`

Pasta de ícones: `public/icons`.

### Texto extraído (ordem visual)

- H2: "Publicação Integrada de **Imóveis**"
- Parágrafo: "Publique e mantenha seus imóveis atualizados automaticamente nos portais integrados, sem retrabalho."

**Card 1 — Portfólio Sempre Atualizado**: "Integre seu CRM e disponibilize automaticamente novos imóveis em nossa plataforma. Sua imobiliária ganha mais visibilidade sem precisar realizar cadastros manuais."
**Card 2 — Sincronização Inteligente**: "Alterações de preço, disponibilidade, fotos e demais informações são sincronizadas automaticamente, garantindo dados sempre atualizados e reduzindo retrabalho."
**Card 3 — Mais Leads Qualificados**: "Com informações organizadas e imóveis atualizados, seus anúncios geram mais confiança e atraem clientes realmente interessados, aumentando suas chances de conversão."

(Total: 3 cards, sem CTA nesta seção — nenhum botão presente no node.)

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| file-invoice 1 (Portfólio Sempre Atualizado) | `public/icons/icone-crm-overview-portfolio.svg` | 33 x 46 (viewBox) | ícone | Ícone de ficha/portfólio de imóvel |
| sync-icon (Sincronização Inteligente) | `public/icons/icone-crm-overview-sincronizacao.svg` | 59 x 59 (viewBox) | ícone | Ícone de sincronização |
| users 1 (Mais Leads Qualificados) | `public/icons/icone-crm-overview-leads.svg` | 55 x 44 (viewBox) | ícone | Ícone de grupo de pessoas/leads |

---

## 5. Hero / Integrations — nodeId `3089:12689`

Pasta de imagens: `public/images/modulos-crm`.

### Texto extraído (ordem visual)

- H2: "Conecte **seu CRM** às ferramentas que você já utiliza"
- Parágrafo: "Conecte o WhatsApp, Redes Sociais e o RD Station diretamente ao seu funil de atendimento, sem precisar alternar entre sistemas"
- Botão CTA: texto real "Testar grátis por 30 dias" (mesmo componente padrão do site)

### Nota (ícones exibidos vs. copy)

O texto menciona "WhatsApp, Redes Sociais e o RD Station", mas os selos/ícones realmente visíveis no diagrama (confirmado via captura de tela) são: um ícone de sincronização/carregamento (círculo tracejado), o logo do WhatsApp, dois selos "SUB100" (um rotulado "Meu Site", outro "Imóveis") e o logo da Meta (infinito azul). **Não há um ícone com a marca "RD Station" distinguível no diagrama** — apenas citado no texto. Isso é reportado como está, sem inventar um ícone RD Station que não existe no Figma. A implementação (T6) usa a imagem estática abaixo, que já contém fielmente os ícones reais.

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Bloco (export achatado do diagrama completo — decisão de simplicidade, mesmo padrão de mockup estático já usado em Technology/Publishing) | `public/images/modulos-crm/integracoes-diagrama.png` | 1920 x 676 | mockup/diagrama | Diagrama mostrando o CRM conectado a um ícone de sincronização, WhatsApp, dois selos SUB100 ("Meu Site" e "Imóveis") e Meta |

---

## 6. Hero / Publishing (4 mockups de celular) — nodeId `3089:12721`

Pasta de imagens: `public/images/modulos-crm`.

### Texto extraído (ordem visual)

- H2: "Conheça o módulo CRM do SUBSEE **on**" ("on" em vermelho, `#e72f4d`)
- Parágrafo: "Do primeiro contato ao fechamento, veja como o CRM organiza leads, atendimentos e negociações em um só lugar, tornando o processo comercial mais simples de acompanhar e mais fácil de fechar."
- 4 mockups de celular lado a lado, cada um com uma etiqueta (tag) acima:
  1. Tag "Funil Imobiliário" — tela: termômetro "100% Geral", funil (Leads 15, Atendimentos 1, Visitas 2, Propostas 2, Vendas 0), início de bloco "Metas" (Leads 25, Atendimentos 15)
  2. Tag "Kanban de atendimentos" — tela: colunas "Sem Contato" (cartão "Glaucia Buzzo"), "Em Atendimento" (cartão "Beatriz Mendes"), "Em Negociação" (cartão "Mario Carmem Meira")
  3. Tag "Dados do atendimento" — tela: ficha "Beatriz Mendes" com WhatsApp/e-mail, abas (Imóveis, Perfil de interesse, Tags, Anotações, Histórico), cartão de imóvel de exemplo (Bairro "Zona 06", endereço "Rua Victal Possani", corretor "Silvio Matos Rodrigues")
  4. Tag "Agenda" — tela: botão "Conectar Google Calendar", filtros (Categoria, Tipo, Situação "Pendentes", Responsável "Walcir Franzoni", Período), calendário "agosto de 2026"

(Nomes de clientes, valores e demais dados dentro das telas são dados fictícios de demonstração da interface — mesmo tratamento dado a mockups equivalentes na Home, não transcritos como copy de marketing.)

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Card - Funil Imobiliário (export achatado) | `public/images/modulos-crm/publishing-mockup-funil.png` | 560 x 1022 | mockup | Mockup do celular mostrando a tela "Funil Imobiliário" com termômetro de 100% e funil de vendas |
| Card - Kanban de atendimentos (export achatado) | `public/images/modulos-crm/publishing-mockup-kanban.png` | 560 x 1022 | mockup | Mockup do celular mostrando o Kanban de atendimentos com colunas Sem Contato, Em Atendimento e Em Negociação |
| Card - Dados do atendimento (export achatado) | `public/images/modulos-crm/publishing-mockup-dados-atendimento.png` | 560 x 1022 | mockup | Mockup do celular mostrando os dados de atendimento de um cliente, com abas e um imóvel de interesse |
| Card - Agenda (export achatado) | `public/images/modulos-crm/publishing-mockup-agenda.png` | 560 x 1022 | mockup | Mockup do celular mostrando a Agenda integrada ao Google Calendar |

---

## 7. Hero / Testimonials — nodeId `3089:12855`

Pasta de ícones: `public/icons`.

### Texto extraído (ordem visual)

- H2: "O que **nossos clientes** falam dos nossos produtos e serviços" (idêntico ao heading da seção de depoimentos da Home)

**Depoimento 1:**
- Avaliação: 5 estrelas
- Citação: "Fomos um dos primeiros clientes da SUB100, há mais de 25 anos. Desde então, construímos uma parceria sólida, marcada pela confiança e pela troca constante de experiências em cada mudança tecnológica. Essa proximidade nos ajuda a evoluir nossos processos e a manter a qualidade dos serviços oferecidos aos nossos clientes."
- Logo empresa: Bellakaza
- Nome: "Cleveson Costa"
- Cargo: "Diretor"
- Empresa: "Bellaka Negócios Imobiliários" (grafia "Bellaka" no cargo/empresa vs. "Bellakaza" no nome do logo — ambas reproduzidas verbatim do Figma, divergência do próprio arquivo de design)

**Depoimento 2:**
- Avaliação: 5 estrelas
- Citação: "Acompanho a trajetória do SUBSEE há mais de 25 anos. Durante esse período, construímos uma relação baseada em evolução contínua, troca de experiências e melhoria de processos. Essa parceria contribuiu para tornar nossa operação mais ágil, organizada e transparente, sempre com foco em oferecer uma experiência melhor aos nossos clientes."
- Logo empresa: Ideal Imóveis
- Nome: "Mauro Alencar"
- Cargo: "Diretor"
- Empresa: "Ideal Imóveis"

(Total: 2 depoimentos neste node — diferente dos 3 depoimentos de `HeroTestimonials.vue` na Home.)

### Veredito de reuso (decisão objetiva exigida pela T1/T8)

**DIVERGE — clonar como `CrmTestimonials.vue`.** O heading é idêntico ao de `HeroTestimonials.vue`, mas o conteúdo dos depoimentos é completamente diferente: apenas 2 depoimentos (não 3), empresas diferentes (Bellakaza e Ideal Imóveis, não Soma Imóveis/Carmona Imóveis/Benedini Fazendas), pessoas diferentes, citações diferentes. Critério do `spec.md` ("se idêntico, reusar; se divergir, clonar") aponta claramente para clonagem. T8 cria `CrmTestimonials.vue`.

### Observação de qualidade do arquivo Figma

Ao inspecionar os assets vetoriais extraídos deste node, foram encontrados **dois logos "fantasma"** não visíveis na tela renderizada: um logo "Soma Imóveis" (91.5 x 55) e um logo "Benedini" (151 x 65) — ambos remanescentes de camadas de instância reaproveitadas da versão Home do componente de depoimentos, cobertos pelos logos reais (Bellakaza/Ideal) mas ainda presentes na subárvore do arquivo. Confirmado via captura de tela que apenas Bellakaza e Ideal aparecem visualmente; os logos fantasma não foram usados nos assets abaixo.

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| Bellakaza | `public/icons/logo-bellakaza-negocios-imobiliarios.svg` | 126 x 55 (viewBox) | logo | Logo Bellakaza Negócios Imobiliários |
| ideal 1 | `public/icons/logo-ideal-imoveis.svg` | 164 x 50 (viewBox) | logo | Logo Ideal Imóveis |

Reaproveitados sem novo download (idênticos aos já existentes da Home): estrelas de avaliação → `public/icons/icone-estrelas-avaliacao.svg` (161x27, mesmo tamanho exato do asset encontrado neste node); aspas decorativas → `public/icons/aspas-abertura.svg` e `public/icons/aspas-fechamento.svg` (93.3x69.5, mesmo tamanho exato); logo "SUBSEE on" do selo decorativo no canto do bloco → `public/icons/logo-subsee-on.svg` (dimensão muito próxima: 183.9x45.2 no CRM vs. 183.9x40 já existente — mesma marca, recorte ligeiramente diferente, reaproveitado).

---

## 8. Hero / Other Modules — nodeId `3089:12874`

Pasta de ícones: `public/icons` (ícones reaproveitados do menu existente — ver nota abaixo).

### Texto extraído (ordem visual)

- H2: "Conheça os outros módulos do CRM Imobiliário"
- Parágrafo: "Soluções desenvolvidas para diferentes segmentos do mercado imobiliário."

**Card 1 — CRM Imobiliário Urbano**: "Centralize imóveis, clientes e negociações em um só lugar." — botão "Clique aqui →" — link (`href`) para `/modulos/urbano` (rota irmã ainda não construída, conforme padrão de hrefs reais já usado no site)
**Card 2 — CRM Imobiliário Rural**: "Gestão completa de propriedades rurais e negociações do campo." — botão "Clique aqui →" — link para `/modulos/rural`
**Card 3 — CRM para Temporada**: "Gestão completa de aluguéis por temporada e reservas de imóveis." — botão "Clique aqui →" — link para `/modulos/temporada`

(Total: 3 cards — bate com o `spec.md` P3 AC2.)

### Nota (rótulo do CTA: "Explorar" vs. texto real)

O `design.md`/`tasks.md` descrevem o CTA de cada card como "Explorar", mas o **texto real renderizado no Figma é "Clique aqui →"** em todos os 3 cards. Por regra deste projeto (nunca inventar copy), T9 usa o texto real "Clique aqui →", com nota `SPEC_DEVIATION` referenciando este manifesto.

### Nota (ícones)

Os ícones de cada card no Figma vêm decompostos em múltiplos fragmentos vetoriais sem nome estável (12 fragmentos para 3 ícones, sem correspondência 1:1 confiável). Como o projeto **já possui ícones reais para estes 3 mesmos módulos**, usados no mega-menu (`HeaderBar.vue`: CRM Imobiliário Urbano/Rural/Temporada), a implementação (T9) reaproveita esses ícones existentes em vez de tentar extrair fragmentos ambíguos do Figma — decisão de reuso, não de invenção (mesmo conceito visual, mesmo módulo, ícone já real e versionado no projeto).

### Assets

| Nome Figma | Caminho local salvo | W x H | Tipo | Alt sugerido |
|---|---|---|---|---|
| building icon (Urbano) — reaproveitado | `public/icons/menu-icone-crm-urbano.svg` (já existente) | conforme arquivo existente | ícone | Ícone do módulo CRM Imobiliário Urbano |
| Camada_x0020_1 / Icon — Key (Rural) — reaproveitado | `public/icons/menu-icone-crm-rural.svg` (já existente) | conforme arquivo existente | ícone | Ícone do módulo CRM Imobiliário Rural |
| icon (Temporada) — reaproveitado | `public/icons/menu-icone-crm-temporada.svg` (já existente) | conforme arquivo existente | ícone | Ícone do módulo CRM para Temporada |

---

## 9. Hero / FAQ — nodeId `3089:12879`

Sem imagens novas nesta seção.

### Texto extraído (ordem visual)

- H2: "Perguntas Frequentes"
- Subtítulo: "Tire suas dúvidas sobre o CRM Imobiliário da SUBSEE on."

**Pergunta 1:** "Como funciona o CRM Imobiliário SUBSEE?"
**Resposta 1:** "O CRM Imobiliário SUBSEE centraliza clientes, leads, atendimentos, agendamentos, propostas e negociações em um único sistema. A imobiliária pode acompanhar toda a jornada comercial, desde a entrada do lead e o primeiro atendimento até a negociação e o fechamento do contrato, proporcionando mais organização, controle e produtividade para corretores e gestores."

**Pergunta 2:** "Posso testar o CRM Imobiliário SUBSEE antes de contratar?"
**Resposta 2:** "Sim. O CRM Imobiliário SUBSEE pode ser testado gratuitamente por 30 dias, permitindo que sua imobiliária conheça a plataforma, utilize suas funcionalidades e avalie como o sistema se adapta à rotina da equipe antes da contratação, sem compromisso."

**Pergunta 3:** "O CRM SUBSEE atende imóveis urbanos, rurais e de temporada?"
**Resposta 3:** "Sim. O SUBSEE possui soluções para imóveis urbanos, imóveis rurais e locações por temporada, considerando as características de cada tipo de negócio imobiliário. Isso permite organizar cadastros, atendimentos e negociações de acordo com a operação da imobiliária, sem tratar diferentes segmentos da mesma maneira."

**Pergunta 4:** "Como integrar o CRM SUBSEE ao WhatsApp e às redes sociais?"
**Resposta 4:** "O CRM SUBSEE pode ser integrado ao WhatsApp por meio das soluções oficiais da Meta ou de parceiros de integração, facilitando a comunicação com clientes e leads. O sistema também permite receber leads gerados por campanhas digitais e compartilhar anúncios de imóveis nas redes sociais, centralizando informações importantes para o atendimento e reduzindo processos manuais."

**Pergunta 5:** "Como funciona a publicação de imóveis nos portais imobiliários?"
**Resposta 5:** "O CRM SUBSEE permite integrar o cadastro de imóveis aos portais imobiliários parceiros, automatizando a publicação e a atualização dos anúncios. Assim, alterações realizadas no CRM podem ser distribuídas para os canais integrados, reduzindo cadastros repetidos, inconsistências de informações e retrabalho da equipe."

**Pergunta 6:** "O CRM SUBSEE ajuda a acompanhar metas e o desempenho da equipe?"
**Resposta 6:** "Sim. O CRM SUBSEE permite definir e acompanhar metas por tipo de negócio, comparando em tempo real o planejado com o realizado. O sistema também utiliza indicadores visuais e um score de desempenho, ajudando gestores a identificar a evolução das metas, acompanhar resultados da equipe e agir mais rapidamente quando houver desvios."

(Total: 6 perguntas — capturadas por completo, na ordem visual de cima para baixo do Figma, que difere da ordem interna dos nodeId "01"–"06" usada pelo Figma para numerar as camadas.)

### Nota (padrão de implementação do accordion, per design.md)

O Figma usa um ícone "PlusCircle" (+/−) para indicar expandir/recolher. O `design.md` e o `spec.md` (AC4 P3) determinam explicitamente reaproveitar o padrão já implementado em `HeroFaq.vue` (chevron rotativo via `<details>/<summary>`, sem ícone de +/−) para manter consistência visual com o resto do site. T10 segue essa instrução do design em vez do ícone "+/−" do Figma — decisão já tomada no Design, não uma invenção desta task.

### Assets

Nenhum asset novo — T10 reaproveita o ícone de chevron já existente (`public/icons/icone-seta-faq.svg`) e o markup/estilo de `HeroFaq.vue`, conforme instrução do `design.md`.

---

## Itens que precisam de decisão/atenção manual

1. **Hero/Top** — nenhum CTA existe no node real (`3089:12037`); T2 adiciona o CTA universal do site ("Testar grátis por 30 dias" → `/testar-gratis`) para cumprir a AC1 do `spec.md`. Ver nota na Seção 1.
2. **Technology** — botão nomeado "Agendar Demonstração" mas com texto real "Testar grátis por 30 dias"; T3 usa o texto real. Ver nota na Seção 2.
3. **All-in-One** — Figma tem 6 cards, não 4 como o `spec.md`/`tasks.md` assumiam; um dos títulos é "Gestão de Leads", não "Distribuição de Leads". T4 implementa os 6 cards reais. Ver nota na Seção 3.
4. **Integrations** — "RD Station" é citado no texto, mas não há ícone distinguível com essa marca no diagrama; nenhum ícone foi inventado. Ver nota na Seção 5.
5. **Testimonials** — diverge do conteúdo de `HeroTestimonials.vue` (2 depoimentos diferentes, não 3); **veredito: clonar como `CrmTestimonials.vue`** (T8). Ver Seção 7. Arquivo Figma contém 2 logos "fantasma" não usados (Soma Imóveis, Benedini) — não confundir com os logos reais usados (Bellakaza, Ideal Imóveis).
6. **Other Modules** — CTA real é "Clique aqui →", não "Explorar" como o `design.md`/`tasks.md` assumiam; T9 usa o texto real. Ícones reaproveitados dos já existentes no mega-menu (`menu-icone-crm-urbano/rural/temporada.svg`) em vez de fragmentos ambíguos do Figma. Ver nota na Seção 8.
7. **FAQ** — o Figma usa ícone "+/−"; por instrução explícita do `design.md`, a implementação usa o padrão de chevron já existente em `HeroFaq.vue`. Não é uma divergência não-intencional. Ver nota na Seção 9.

---

## Resumo de arquivos baixados

- Imagens/mockups novos em `public/images/modulos-crm/`: **8 arquivos** (`hero-foto-mulher-notebook.jpg`, `hero-avatar-paulo-henrique.jpg`, `tecnologia-mockup-dashboard.png`, `integracoes-diagrama.png`, `publishing-mockup-agenda.png`, `publishing-mockup-dados-atendimento.png`, `publishing-mockup-kanban.png`, `publishing-mockup-funil.png`).
- Ícones novos em `public/icons/`: **13 arquivos** (6 All-in-One, 3 Overview, 2 logos de depoimentos, e mais nenhum novo para Hero/Integrations/Other Modules/FAQ — todos reaproveitados de assets já existentes no projeto, listados em cada seção acima).
- Todos os arquivos foram confirmados fisicamente em disco (verificação via `ls`/leitura de imagem) antes deste manifesto ser finalizado.
- 9 de 9 seções tiveram texto e assets extraídos com sucesso; nenhuma chamada ao Figma MCP falhou. Duas seções (Hero, Overview) não têm CTA no node original — reportado explicitamente, não preenchido com suposição.
