# FIGMA_CONTENT_MANIFEST_PLANO_E_PRECO — página "Plano e Preço"

Figma: arquivo `vX7qKnnXSOW8zv4kAuS2eN`, seção raiz `1116:5607` ("Plano e Preço", 2044×6965). Extraído via `get_metadata`/`get_design_context`/`get_screenshot` node a node. Conteúdo verbatim — nenhum texto foi inventado ou parafraseado. Rota ainda não definida pelo usuário — ver `spec.md` (Assumptions & Open Questions).

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
- **CTA primário** (`3220:6023`, instância "Link → Agendar Demonstração" — nome de instância não bate com o texto): texto renderizado **"Testar grátis por 30 dias"**. Sem `href` real definido no Figma.
- **Lista de 9 itens** (`3220:6024`, ordem visual topo→base confirmada por `get_design_context`):
  1. "Até **10 usuários** para sua equipe"
  2. "Organize seus **leads** e clientes em um só lugar"
  3. "Acompanhe negociações e **follow-ups** pelo funil de vendas"
  4. "Cadastre e gerencie **seus imóveis** com facilidade"
  5. "**Divulgue no SUB100** e em outros portais imobiliários *" — marcador de nota `*`
  6. "Tenha seu **site imobiliário** integrado **" — marcador de nota `**`
  7. "**Automatize tarefas** e ações do dia a dia"
  8. "Treinamentos e suporte **especializado**"
  9. "Conte com a **MEL.IA** para apoiar seus atendimentos"
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
- **CTA** (`3220:6357`, instância "Link → Testar grátis por 30 dias"): texto renderizado "Testar grátis por 30 dias". Sem `href` real definido no Figma.

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

## Assets a exportar / confirmar

| Elemento | Node(s) | Candidato de reuso já existente | Ação |
| --- | --- | --- | --- |
| Divisor de onda azul/branco (`Horizantal Divider`) | `3220:5998`–`6000` | `crm-hero-divider-onda.svg` (ou variantes irmãs) | Comparar visualmente antes de reusar; exportar novo asset só se divergir |
| Forma decorativa (blur/gradiente) atrás da tabela de Features | `3220:6096` (`imgShape`) | nenhum candidato óbvio | Exportar novo asset |
| Selo "12% OFF" (composição de 5 vetores + texto) | `3220:6011`–`6017` | nenhum candidato óbvio | Exportar como imagem única achatada (não recriar com múltiplos elementos) |
| Checkmark verde da tabela comparativa | `3220:6127` etc. (`Vector`), `3220:6216` etc. (`Visto`) | `icon-check-circle.svg`, `icone-check-verde-circulo.svg` | Comparar visualmente contra o screenshot antes de reusar |
| Ícone de bullet/check da lista dos cards de preço | `3220:6027` etc. (`imgVector1`) | `icone-check-lista-urbano.svg`, `seta-lista-verde.svg` | Comparar visualmente; pode ser ícone diferente do checkmark da tabela |
| Seta dos botões CTA | `imgArrowRight`/`1`/`2`, `imgSvg` | `seta-botao-cta.svg`, `icone-seta-cta.svg`, `seta-botao-branca.svg` | Comparar visualmente antes de reusar |
| Logo "SUBSEE on" no cabeçalho da coluna Urbano (tabela Features) | `3220:6116`/`6117` | `logo-subsee-on.svg` | Comparar visualmente antes de reusar |
| Ícones plus/minus do FAQ | `imgPlusCircle`, `imgPlusCircle1` | `faq-plus-circle.svg`, `faq-minus-circle.svg` | Comparar visualmente antes de reusar |
| Linha divisória entre itens de FAQ | `imgLine8` | padrão já usado em `CrmFaq.vue`/`HeroFaq.vue` | Reusar classe/estilo existente, sem novo asset se possível |

---

## Pendências registradas (não inventar — ver `spec.md`)

1. Texto da nota do marcador `**` ("Tenha seu site imobiliário integrado **") — não encontrado em nenhum node do Figma.
2. Rota da página — não especificada pelo usuário nesta rodada (diferente de Base de Conhecimento e Eventos).
3. Comportamento do toggle Mensal/Anual — apenas 1 estado visual existe no Figma; sem confirmação se é funcional (troca de preço) ou puramente decorativo.
4. `href` real dos CTAs "Testar grátis por 30 dias" (3 ocorrências) e "+ Opcionais" (2 ocorrências) — nenhum valor definido no Figma.
