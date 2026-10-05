# FIGMA_CONTENT_MANIFEST_PLANO_E_PRECO — página "Plano e Preço"

Figma (fonte vigente, desde 2026-10-04): arquivo `hMjVAFfVR3dgKDrxmwUhvL`, seção `4:48841` ("Plano e Preço", 2044×6965), frame `Page` `4:48842` (1920×6765). Conteúdo verbatim — nenhum texto foi inventado ou parafraseado. A extração original (2026-09-29) foi feita no arquivo `vX7qKnnXSOW8zv4kAuS2eN`, seção `1116:5607` (mesmas dimensões); os node ids `3220:*` citados abaixo pertencem a essa extração original. Para a implementação visual vale o arquivo `hMjV…` — ver a seção "Correção de fidelidade visual (2026-10-04)" no final deste documento.

---

## 0. Estrutura geral (ordem visual, topo → base)

| # | Seção Figma | Node | Observação |
| - | --- | --- | --- |
| 1 | Header | instância `3220:6412` | Componente global reaproveitado, sem alteração |
| 2 | Section / Hero / Title | `3220:6091` | H1 + descrição, sobreposto visualmente ao bloco de fundo |
| 3 | Section / Hero / Pricing | `3220:6001` | Toggle Mensal/Anual + badge "12% OFF" + 2 cards de preço |
| 4 | Section / Hero / Features | `3220:6094` | Tabela comparativa de funcionalidades (9 categorias) |
| 5 | Section / Hero / Opcionais | `3220:6334` | Tabela de complementos pagos |
| 6 | Section / Hero / FAQ | `3220:6358` | 6 perguntas/respostas |
| 7 | Footer | instância `3220:6411` | Componente global reaproveitado, sem alteração |

**Achado de nomenclatura (AD-015 novamente confirmado)**: dentro da seção Features, os frames que envolvem visualmente as duas colunas de preço estão nomeados **"Enterprise"** (`3220:6100`) e **"Pro"** (`3220:6108`) no Figma, mas o texto realmente renderizado em cada um é **"Rural"** e **"Urbano"**, respectivamente — confirmado via `get_design_context`, não usar os nomes das camadas. Da mesma forma, dois frames nomeados **"Plugin para WhatsApp"** existem na seção Features (`3220:6124` e `3220:6142`); o segundo (`3220:6142`) na verdade renderiza a categoria **"Treinamentos e Evolução"** — usar sempre o texto do node de título (`3220:6159` = "Treinamentos e Evolução"), não o nome do frame.

---

## 1. Section / Hero / Title — node `3220:6091`

- **H1** (`3220:6092`): "Planos & Preços"
- **Descrição** (`3220:6093`): "Elaboramos planos para seu CRM Imobiliário de acordo com o perfil da sua corretora, seja **urbana** ou **rural**." — as palavras "urbana" e "rural" vêm destacadas em roxo (`#5d5fef`) no Figma.

---

## 2. Section / Hero / Pricing — node `3220:6001`

### 2.1 Toggle Mensal/Anual + badge (`3220:6002`–`3220:6017`)

- Dois estados nomeados **"Anual"** (`3220:6005`, fundo branco, borda, texto "Anual") e **"Anual"** (sic — segundo frame também nomeado "Anual" no Figma, `3220:6008`, mas com fundo roxo `#686af1` preenchido e texto **"Mensal"**) — **nota de fidelidade**: o nome de camada do segundo frame está errado (diz "Anual" mas contém o texto "Mensal"); usar o texto renderizado, não o nome da camada.
- No design extraído, o estado **selecionado/ativo é "Mensal"** (fundo roxo preenchido, texto branco) e "Anual" aparece no estado inativo (fundo branco, borda escura, texto escuro).
- **Nenhum segundo estado visual (toggle com "Anual" selecionado) existe no arquivo Figma** — apenas esta única variante foi encontrada. Não é possível confirmar visualmente como o toggle se comportaria com "Anual" ativo, nem se os cards de preço mudariam de valor nesse estado (os dois cards mostram sempre `R$450/mês + opcionais`, sem uma variante anual visível). **Ver Open Question em `spec.md`.**
- Badge decorativo "12% OFF": composição de 5 vetores + texto rotacionado (fonte "Oleo Script"), formando um selo/etiqueta manuscrita próximo ao toggle. Puramente decorativo, sem interação própria.

### 2.2 Card "Urbano" — node `3220:6019` ("Preço - Ubrana" no Figma — nome de camada com erro de digitação; conteúdo renderizado usa "Urbano" corretamente)

- **H2** (`3220:6020`): "Urbano"
- **Descrição** (`3220:6021`): "Gestão de apartamentos, casas e imóveis comerciais em áreas urbanas, com foco em resultados e eficiência."
- **Preço** (`3220:6022`): "R$450/mês + opcionais"
- **CTA primário** (`3220:6023`, instância "Link → Agendar Demonstração" — nome de instância não bate com o texto): texto renderizado **"Testar grátis por 30 dias"**. Sem `href` real definido no Figma — mas confirmado em T3/Etapa 3 como `to="/testar-gratis"`, rota real já estabelecida sitewide (29 arquivos) para este texto exato de botão.
- **Lista de 9 itens** (`3220:6024`, ordem visual topo→base confirmada por `get_design_context`):
  1. "Até **10 usuários** para sua equipe"
  2. "Organize seus **leads** e clientes em um só lugar"
  3. "Acompanhe negociações e **follow-ups** pelo funil de vendas"
  4. "Cadastre e gerencie **seus imóveis** com facilidade"
  5. "**Divulgue no SUB100** e em outros portais imobiliários *" — marcador de nota `*`
  6. "Tenha seu **site imobiliário** integrado **" — marcador de nota `**`
  7. "Conte com a **MEL.IA** para apoiar seus atendimentos" — **posição corrigida em 2026-10-04**: no arquivo `hMjV…` (frame `Preço - Ubrana` `4:48867`) o item vem antes de "Automatize" e "Treinamentos"
  8. "**Automatize tarefas** e ações do dia a dia"
  9. "Treinamentos e suporte **especializado**"
- **CTA secundário** (`3220:6052`): "+ Opcionais" (borda, sem preenchimento). Sem `href` real definido no Figma — provavelmente uma âncora interna para a seção Opcionais desta mesma página.

### 2.3 Card "Rural" — node `3220:6055`

Estrutura idêntica ao card Urbano. Únicas diferenças de conteúdo:

- **H2** (`3220:6056`): "Rural"
- **Descrição** (`3220:6057`): "Gerencie fazendas, sítios e terras com mais controle e produtividade."
- **Preço** (`3220:6058`): "R$450/mês + opcionais" — **idêntico ao card Urbano**.
- **Lista de 9 itens** (`3220:6060`): **texto idêntico, item a item, ao card Urbano** (mesmos 9 bullets, mesma ordem, incluindo os marcadores `*` e `**`).
- CTAs: mesmo texto/estrutura do card Urbano ("Testar grátis por 30 dias", "+ Opcionais").

**Achado importante**: os dois cards de preço são **funcionalmente idênticos** neste ponto do Figma — mesmo preço, mesma lista de 9 recursos. A única diferença de conteúdo entre "Urbano" e "Rural" é o nome do plano e a frase de descrição. Isso é consistente com o achado da seção Features (item 3 abaixo): a tabela comparativa também marca as duas colunas com exatamente o mesmo conjunto de funcionalidades.

### 2.4 Notas de rodapé dos marcadores `*` e `**`

- **Marcador `*`** ("Divulgue no SUB100 e em outros portais imobiliários *"): texto da nota **localizado** na seção Features (`3220:6322`): *"No período gratuito de 30 dias as integrações não estão liberadas."*
- **Marcador `**`** ("Tenha seu site imobiliário integrado **"): **texto da nota NÃO localizado em nenhum node do arquivo Figma** apesar de busca em toda a seção "Plano e Preço" (Pricing, Features, Opcionais, FAQ). **Conteúdo pendente — ver Open Question em `spec.md`. Não inventar.**

---

## 3. Section / Hero / Features — node `3220:6094`

- **H2** (`3220:6097`): "Funcionalidades do **CRM Imobiliário**" (palavra destacada em roxo)
- **Descrição** (`3220:6098`): "Compare os princípios recursos e escolha a solução ideal para sua operação" — **texto literal do Figma, incluindo o provável erro de digitação "princípios" (aparentando ser "principais")**. Manter verbatim; não corrigir sem confirmação do usuário.
- **Cabeçalho das colunas**: "Urbano" (`3220:6110`) e "Rural" (`3220:6102`), cada uma com um botão "Site & hotsite padrão" (borda, seta). Logo "SUBSEE on" decorativo (`3220:6116`, asset `_2432243841280`) aparece apenas acima da coluna Urbano.

### 3.1 As 9 categorias (ordem visual topo → base)

Cada categoria lista N funcionalidades; **em todas as 45 linhas extraídas, tanto a coluna Urbano quanto a coluna Rural exibem o mesmo ícone de checkmark verde preenchido** (confirmado por `get_screenshot` em dois nodes distintos — `3220:6208`/"Experiência, Visitas e Relacionamento" e `3220:6099`/tabela completa). **Não há nenhuma linha em que uma coluna tenha check e a outra não** — a tabela comparativa não diferencia as duas colunas por conjunto de recursos, apenas pela marca de identidade visual do cabeçalho.

1. **Gestão Imobiliária e Cadastros** (`3220:6304`): Cadastro de Imóveis Nacionais e Internacionais · Cadastro de Pessoas · Edifícios e Condomínios
2. **CRM e Atendimento** (`3220:6274`): Funil Imobiliário · Kanban de Atendimentos · Base de Leads · Roleta de Distribuição de Leads · Radar de Oportunidades · Agenda integrada ao Google · Gestão de Metas · Automação de Marketing
3. **Canais, Mensageria e Integrações** (`3220:6241`): Portal SUB100 · Portais Imobiliários · Redes de Parcerias · Meu Site · Lais.AI · Facebook Forms · WhatsApp Oficial e Parceiros · E-mail, Push e SMS · API
4. **Negociação e Gestão Operacional** (`3220:6184`): Dashboard · Propostas e Contrapropostas · Empréstimo de Chaves · Quadro de Chaves · Análise de Locação · Rateio de Comissões
5. **Experiência, Visitas e Relacionamento** (`3220:6208`): Atualização Rápida · Performance do Imóvel · Validação pelo Proprietário · Feedback de Visita · Rota de Visitas pelo Google Maps · Compartilhamento por Link Temporário · Portarias Remotas e Controle de Acessos
6. **Inteligência e Produtividade** (`3220:6172`): Inteligência Artificial Embarcada · Site otimizado para SEO/GEO
7. **Carreira e Oportunidades** (`3220:6160`): Vagas de Emprego · Currículo do Corretor
8. **Plugin para WhatsApp** (`3220:6124`): Mensagens Automáticas · Anotações e Tarefas · Compartilhamento de Imóveis · Follow-up de Atendimento
9. **Treinamentos e Evolução** (`3220:6142` — nome de frame "Plugin para WhatsApp" no Figma é um erro de cópia, ver nota de nomenclatura no topo do documento): Histórico de Versões · Base de Conhecimento · Aprenda com a Mel.AI · Eventos Online

### 3.2 Nota de rodapé e botão Ocultar/Ver todas (`3220:6321`)

- **Nota** (`3220:6322`): "* No período gratuito de 30 dias as integrações não estão liberadas."
- **Botão com 2 estados nomeados** — confirmado via `get_metadata` que existem dois frames irmãos, um visível e um `hidden="true"`:
  - Estado padrão/visível: "Ocultar as funcionalidades" (`3220:6324`/`3220:6325`)
  - Estado alternativo (oculto no Figma, mas existe como variante): "Ver todas as funcionalidades" (`3220:6329`/`3220:6330`)
- **Isto é um componente de expandir/recolher real** (diferente do toggle Mensal/Anual, que só tem 1 estado desenhado) — a tabela de 9 categorias deve poder ser ocultada/exibida via este botão.

---

## 4. Section / Hero / Opcionais — node `3220:6334`

- Cabeçalhos de coluna: "Urbano" (`3220:6339`) e "Rural" (`3220:6337`)
- Rótulo da seção (`3220:6354`): "Opcionais"
- **3 linhas** (idênticas nas duas colunas):
  1. "5 usuários adicionais" → **R$ 100,00** (Urbano) / **R$ 100,00** (Rural)
  2. "Site & Hotsite Padrão" → **R$ 1.200,00** / **R$ 1.200,00**
  3. "Site & Hotsite personalizado" → **Consulte** / **Consulte**
- **CTA** (atualizado em 2026-10-04): no arquivo `vX7qKnnXSOW8zv4kAuS2eN`, seção `3220:6334`, o link é `3849:3129` ("Link → Agendar Demonstração"): texto **"Agendar Demonstração"** (18px), 297×56, `#5d5fef`, raio 12, em x=964 / y=313 dentro da seção (borda esquerda no centro da página, não centralizado). Destino: **`/agendar-demonstracao/`**. O texto anterior desta linha ("Testar grátis por 30 dias" → `/testar-gratis`) vinha da extração original e foi superado; o CTA de Opcionais **não** é o mesmo dos cards de preço.

**Achado**: assim como a lista de 9 recursos dos cards de preço e a tabela de Features, os preços dos Opcionais são **idênticos entre Urbano e Rural** — não há diferenciação de preço por perfil de plano em nenhum ponto do Figma desta página.

---

## 5. Section / Hero / FAQ — node `3220:6358`

- **H2** (`3220:6360`): "Perguntas Frequentes"
- **Descrição** (`3220:6361`): "Encontre respostas sobre os pacotes, valores e funcionalidades do SUBSEE on."
- **6 perguntas/respostas** (numeradas 01–06 no Figma, ordem de exibição = 01 no topo; sem duplicação de conteúdo entre itens, diferente do achado de Eventos):

1. **"O que a assinatura do SUBSEE oferece?"**
   "Com o SUBSEE, você gerencia imóveis, clientes, leads, propostas e atendimentos em um só lugar. Também pode integrar gratuitamente seus anúncios ao portal SUB100 e publicar nos principais portais imobiliários, conforme os planos e condições contratados diretamente com cada portal de sua preferência."

2. **"Posso conhecer o SUBSEE antes de contratar?"**
   "Sim. Você pode agendar uma demonstração gratuita para conhecer os principais recursos do SUBSEE e entender qual plano atende melhor às necessidades da sua imobiliária. Durante a apresentação, também é possível conhecer os modelos de sites disponíveis, tanto na versão padrão quanto em opções personalizadas."

3. **"Como funciona o cancelamento da assinatura?"**
   "O SUBSEE é comercializado na modalidade SaaS, com renovação da licença de uso a cada 30 dias. Caso não queira continuar utilizando o sistema, o cancelamento pode ser solicitado pelo painel, mantendo o acesso pelo período já contratado. Se houver um site ainda em pagamento, as parcelas restantes continuam devidas, pois a contratação do site é realizada separadamente em até 10 parcelas."

4. **"Existe limite de imóveis cadastrados?"**
   "Sim. A quantidade de imóveis cadastrados e de usuários disponíveis pode variar conforme o plano contratado. Você pode consultar as opções disponíveis e, quando necessário, aumentar ou reduzir seu plano diretamente pelo painel do CRM."

5. **"Existe desconto nos planos anuais?"**
   "Sim. Na contratação anual do SUBSEE, é concedido desconto de 12% sobre o valor total da assinatura. O mesmo desconto pode ser aplicado ao pagamento à vista do site, com opções de pagamento por cartão de crédito, boleto ou Pix." — **nota**: este é o único ponto de todo o Figma que confirma o significado do badge "12% OFF" do toggle Mensal/Anual (seção 2.1).

6. **"Existe algo a mais que preciso pagar?"**
   "Depende dos serviços adicionais utilizados. Recursos de mensageria, como WhatsApp Oficial, integrações com provedores de WhatsApp não oficial e serviços de SMS, podem gerar cobranças realizadas diretamente pela Meta ou pelos respectivos fornecedores. Esses serviços complementares são contratados de terceiros e não fazem parte da mensalidade do SUBSEE."

Ícones plus/minus: mesmo padrão de `CrmFaq.vue` — assets já existentes no repo `public/icons/faq-plus-circle.svg` / `public/icons/faq-minus-circle.svg` (a confirmar visualmente contra `imgPlusCircle`/`imgPlusCircle1` antes de reusar).

---

## Assets a exportar / confirmar — veredito final (T1, 2026-09-29)

| Elemento | Node(s) | Candidato de reuso já existente | Veredito |
| --- | --- | --- | --- |
| Divisor de onda azul/branco (`Horizantal Divider`) | `3220:5998`–`6000` · `4:48846` | `divider-onda-decorativa.svg` (somente strokes `#CEDAFC` e branco, 1918×146, idêntico ao export do Figma `hMjV…`) | **REUSAR** — o `crm-hero-divider-onda.svg` tem um preenchimento branco (`Curva`) que o Figma desta página não tem; o asset correto é o de strokes puros. Na implementação o divisor chega embutido em `legal-page-background.svg` (BG `#F5F5F5` curvo + retângulo com gradiente `#E6FDF7 → #EFF8F5 → #E1E9F9` + divisor), que é o mesmo desenho do frame `Backgroud` `4:48843`. |
| Forma decorativa (blur/gradiente) atrás da tabela de Features | `3220:6096` · `4:48944` (`shape`) | nenhum | **NÃO EXPORTAR IMAGEM** — elipse com `radialGradient` `#5D5FEF` (opacidade 0,26 → 0), blur de ~100px, opacidade 0,5 (1398×672, base do bloco cinza). Implementada em Tailwind (`bg-[radial-gradient(...)]` + `blur-[100px]` + `opacity-50`), sem `style=` inline. |
| Selo "12% OFF" (composição de 5 vetores + texto) | `3220:6011`–`6017` | nenhum | **EXPORTAR NOVO** — confirmado por `get_screenshot`: ilustração manuscrita única (seta espiral + traços verdes + texto rotacionado "12% OFF"), sem equivalente no repo. Exportar como uma única imagem achatada (T2). |
| Checkmark verde (tabela comparativa **e** lista de recursos dos cards de preço) | `4:48875` etc. (`Vector`, 23×23, cards) · `Possui Urbano/Rural` (tabela, 25,84px) | **nenhum** — `icone-check-verde-circulo.svg` NÃO corresponde | **EXPORTAR NOVO** (corrige o veredito de 2026-09-29): o Figma usa um selo recortado (badge com check) `#1CD9A4`, e não o círculo `#00D39B` 16×16. Novo asset único `public/icons/plano-e-preco-check-badge.svg` (23×23), usado a 23px nos cards e 26px na tabela. O `icone-check-verde-circulo.svg` permanece intacto para as outras páginas que o usam. |
| Seta dos botões CTA | `imgArrowRight`/`1`/`2`, `imgSvg` | `seta-botao-cta.svg` | **REUSAR** — confirmado por `get_screenshot`: seta fina "→" simples, bate com o path de 2 elementos (linha + chevron) do asset existente. `icone-seta-cta.svg`/`seta-botao-branca.svg` são variações de cor do mesmo path — usar a de cor correta por contexto (branca dentro de botão preenchido roxo, escura dentro de botão outline). |
| Logo "SUBSEE on" no cabeçalho da coluna Urbano (tabela Features) | `3220:6116`/`6117` | `logo-subsee-on.svg` | **REUSAR** — confirmado por `get_screenshot`: wordmark "SUBSEE" (`#313846`) + "on" em vermelho (`#E72F4D`) boxado, idêntico ao asset existente. Nenhum export novo. |
| Ícones plus/minus do FAQ | `imgPlusCircle`, `imgPlusCircle1` | `faq-plus-circle.svg`, `faq-minus-circle.svg` | **REUSAR** — confirmado pela estrutura do SVG existente: `faq-plus-circle.svg` = círculo preenchido preto + cruz branca (estado fechado, itens 01–05); `faq-minus-circle.svg` = círculo apenas com contorno + traço horizontal (estado aberto, item 06) — bate exatamente com o padrão visto no screenshot da seção FAQ. |
| Linha divisória entre itens de FAQ | `imgLine8` | padrão já usado em `CrmFaq.vue`/`HeroFaq.vue` | **REUSAR** — classe/estilo existente (borda inferior), sem novo asset. |

**Resultado da T1**: apenas 1 asset novo precisa ser exportado (selo "12% OFF"). Todos os demais são reuso confirmado ou substituídos por CSS puro (gradiente de fundo).

---

## Pendências registradas (não inventar — ver `spec.md`)

1. Texto da nota do marcador `**` ("Tenha seu site imobiliário integrado **") — não encontrado em nenhum node do Figma.
2. Rota da página — não especificada pelo usuário nesta rodada (diferente de Base de Conhecimento e Eventos).
3. Comportamento do toggle Mensal/Anual — apenas 1 estado visual existe no Figma; sem confirmação se é funcional (troca de preço) ou puramente decorativo.
4. `href` real dos CTAs "Testar grátis por 30 dias" (2 ocorrências, nos cards de preço, → `/testar-gratis/`) e "+ Opcionais" (2 ocorrências) — nenhum valor definido no Figma. O CTA da seção Opcionais é "Agendar Demonstração" → `/agendar-demonstracao/` (ver item acima).

---

## Correção de fidelidade visual (2026-10-04)

Fonte: arquivo `hMjVAFfVR3dgKDrxmwUhvL`, seção `4:48841` (`Page` `4:48842`, 1920×6765). O node citado no pedido (`4-62872`) é apenas o botão "Testar grátis por 30 dias"; a página é a seção `4:48841` do mesmo arquivo.

### Mapa de nodes (arquivo `hMjV…`)

| Seção | Node | Medidas no Figma (1920px) |
| --- | --- | --- |
| Background (BG + gradiente + divisor) | `4:48843` | 1920×1432; BG `#F5F5F5` em y=89 (513 de altura), retângulo gradiente com blur, divisor em y=412 |
| Title | `4:48939` | y=97, 184 de altura; H1 40px (**"Planos" Poppins Bold**, " & Preços" Medium, tracking −0,25px, `#313846`); descrição 26px, `leading 1.4`, 740px de largura, "urbana"/"rural" em Bold `#5d5fef` |
| Pricing | `4:48849` | y=281; toggle em grupo de 133px; gap de 32px; linha de cards 1360 de largura |
| Toggle Mensal/Anual | `4:48851` | pílula 215×59, borda 1px `#313846`, raio 42; "Mensal" 90×39 `#686af1` (texto branco), "Anual" 88×39; rótulos Inter Medium 16px |
| Selo "12% OFF" | `4:48859` | 207×133, 162px à direita do início da pílula |
| Cards | `4:48867` (Urbano) · `4:48903` (Rural) | 471×908, borda 2px `#686af1`, raio 16, padding 42/24/46/40, gap 20 (Urbano) / 26 (Rural); gap entre cards 29px |
| Conteúdo dos cards | — | título 36px Bold `#5d5fef`; descrição 20px `#666e8a` `leading 1.4`; preço "R$450" 48px SemiBold `#313846` (tracking −1,44px) + "/" e "mês + opcionais" 22px; CTA 401×67 `#5d5fef` raio 12; lista 16px `#404040` (itens com 23px de check); "+ Opcionais" 401×67 borda 2px `#313846` raio 12, 20px SemiBold |
| Features (bloco) | `4:48943` | bloco `#f5f5f5`, raio 50, 1360 de largura; H2 32px Bold `#0b0d0f` + "CRM Imobiliário" `#5d5fef`; descrição 26px `#313846` |
| Features (painéis e faixas) | `4:48947` | área 1099×2584: painéis brancos (opacidade 0,8, raio 16, 370 de largura) em x=319 (Urbano) e x=729 (Rural); título "Urbano"/"Rural" 32px Bold; botão "Site & hotsite padrão" 310×55,46, borda 1px `#313846`, raio 8, 20px Medium; logo SUBSEE on; 9 categorias com título 16px SemiBold `#5d5fef`, faixa `rgba(93,95,239,.08)` com opacidade 0,5, itens 16px Regular `#0b0d0f` com `list-disc` (linha de 28px, gap 10px) |
| Nota e botão | `4:49169` | nota 14px Light Italic `#313846`; botão 426×55 `#5d5fef`, raio 8, 20px Medium; gap 219px |
| Opcionais | `4:49182` | 409 de altura; cartões Urbano (`#5d5fef`) e Rural (`#686af1`) 370×248, borda 2px, raio 16, título 32px Bold; faixa tabular 1085×135 (`rgba(93,95,239,.08)`, opacidade 0,65) com 3 linhas de 45px e divisores `rgba(49,56,70,.12)`; rótulo "Opcionais" 26px SemiBold `#5d5fef`; CTA 297×56 em x=964 / y=313 (no arquivo `hMjV…` o texto é "Testar grátis por 30 dias"; vale "Agendar Demonstração" do arquivo `vX7q`, node `3849:3129`, por decisão do usuário em 2026-10-04) |
| FAQ | `4:49206` | fundo **branco** (sem painel cinza); H2 52px SemiBold `#313846`; descrição 20px; itens com pergunta 20px SemiBold, resposta 16px/26px, divisor 1px, largura 970px |

### Divergências corrigidas na implementação
1. H1 passou de 48px/tudo bold para 40px com "Planos" Bold e "& Preços" Medium; descrição passou para 26px com "urbana"/"rural" em Bold roxo.
2. Fundo do Title + Pricing: gradiente/base cinza curva/divisor de onda (via `legal-page-background.svg`, mesmo desenho do Figma), no novo `PlanoEPrecoHero.vue`.
3. Cards de preço: 471px, borda `#686af1`, paddings e cores do Figma; preço em três partes; selo "12% OFF" em tamanho real (207×133) e visível em todos os breakpoints (reduzido abaixo de 576px).
4. Ordem dos 9 itens (MEL.IA em 7º) e novo ícone de check (selo `#1CD9A4`).
5. Features: bloco cinza com painéis brancos, faixas lavanda por categoria, bullets e botões com seta; `style=` inline removido.
6. Opcionais: dois cartões separados com bordas roxas sobre faixa tabular.
7. FAQ: painel cinza removido, lista com 970px (accordion `<details>` preservado).
8. CTA da seção Opcionais: texto "Agendar Demonstração" (18px), destino `/agendar-demonstracao/`, 297×56 posicionado como no Figma `3220:6334` (borda esquerda no centro da página), centralizado abaixo de `tablet-lg`; os CTAs dos cards de preço continuam "Testar grátis por 30 dias".

### Divergências remanescentes (documentadas, não corrigíveis sem decisão)
- **Inter** (rótulos Mensal/Anual) e **Poppins Light** / **Light Italic** (lista dos cards e nota): o site só carrega Poppins 400/500/600/700; usados Poppins 400/500 e itálico sintético.
- Quebras de linha forçadas do Figma na lista dos cards ("…follow-ups / pelo funil de vendas") não são reproduzidas; o texto quebra naturalmente. Nas Features, as quebras forçadas dos 4 rótulos longos e do título "Experiência, Visitas e Relacionamento" **são** reproduzidas.
- Irregularidades do Figma reproduzidas: gaps 20/26 entre blocos dos cards (preço, CTA e lista do Rural ficam alguns px acima do Urbano) e o título "Rural" dos Opcionais ~15px mais baixo que "Urbano".
- O Figma mostra todas as respostas do FAQ abertas; o site mantém o accordion fechado por padrão.
- Não há frames de tablet/mobile; o layout é derivado e a tabela de Features/Opcionais rola horizontalmente abaixo de 760px.
- O toggle do Figma está ~9px à direita do centro; no site fica centralizado.
