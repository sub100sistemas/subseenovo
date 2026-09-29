# FIGMA_CONTENT_MANIFEST_ASSISTA_VIDEOS_SUBSEE_ON

Fonte: Figma `vX7qKnnXSOW8zv4kAuS2eN`, seção "Assista os videos do SUBSEE on" (`1033:1855`), frame raiz "Page" `3188:3397` (1920×4359). Conteúdo extraído em 2026-09-29 com `get_metadata` (estrutura) e `get_design_context` (texto, cores, medidas) em cada seção. Todo texto abaixo é transcrição literal do Figma; nada foi inventado. Os assets **não foram baixados** nesta etapa (Etapa 1 é só planejamento).

Regra herdada de [[AD-015]]: nomes de camada não são conteúdo. O texto renderizado prevalece.

## Estrutura da página (1920px)

| Ordem | Seção | Node | Y | Altura |
| --- | --- | --- | --- | --- |
| 0 | Header (instância global) | `3188:3559` | 0 | 85 |
| 1 | Section / Hero / Top | `3188:3398` | 0 | 568 |
| 2 | Section / Content / Featured Video | `3188:3420` | 568 | 565 |
| 3 | Section / Content / Demo Videos | `3188:3438` | 1133 | 874 |
| 4 | Section / Content / By Profile (com CTA - App SUBSEE) | `3188:3474` | 2007 | 814 |
| 5 | Section / Hero / FAQ | `3188:3507` | 2821 | 1063 |
| 6 | Footer (instância global) | `3188:3558` | 3859 | 475 |

Container de conteúdo: 1400px, de x=260 a x=1660.

## 1. Hero — `3188:3398`

- **H1** (`3188:3419`, Poppins Bold 36px, leading 1,2, `#313846`, x=259, largura 555): "Assista aos vídeos do SUBSEE **on**". Quebra de linha depois de "vídeos"; "on" em `#e72f4d`.
- **Descrição** (`3188:3418`, Poppins Regular 20px, `#313846`, x=259, y=255, largura 630): "Escolher um sistema de gestão para sua imobiliária ou equipe de corretores é uma decisão estratégica, que exige análise, clareza e segurança na escolha da plataforma ideal para potencializar suas vendas."
- **Fileira de 5 ícones de módulo** (`3188:3403`, y=401, cada caixa 27,887×30, `rounded-[4px]`, fundo `#5d5fef`, sombra roxa): lançamentos, venda, rural, locação, temporada (mesma fileira de `BaseConhecimentoHero.vue`; conferir ícones antes de reusar).
- **Card 1** (`3188:3634`, 323×105, `rounded-[20px]`, fundo branco 80% com blur 10px, borda `#eee`): título "Vídeos Práticos" (Poppins Bold 18px `#313846`), texto "Aprenda no seu ritmo com tutoriais rápidos." (Poppins Medium 16px `#545567`), ícone quadrado `#5d5fef` 39,6×40 com globo.
- **Card 2** (`3188:3643`, 317×105, fundo branco 60%): título "Time Capacitado", texto "Treine sua equipe direto na plataforma.", ícone quadrado `#5d5fef` 39,6 com ícone de pessoas.
- **Foto** (`3188:3630`, 344×451, recorte elíptico): o nome da camada é "brunette-woman-hugging-laptop 1", mas o render mostra um homem de blazer marrom segurando um celular. Vale o render.
- **Fundo** (`3188:3399`, 1920×548) e **divisor de onda** (`3188:3400`, 1917,9×144,5, camadas "Azul" e "branca"). **Curvas decorativas** verde (`3188:3632`) e roxa (`3188:3633`) ligando os cards à foto.

## 2. Vídeo institucional — `3188:3420`

Container 1400×460, `gap-[96px]`, seção com `py-[40px]`, fundo branco.

- **Coluna 1** (`3188:3422`, 520×420, `gap-[18px]`):
  - Eyebrow (`3188:3423`, Poppins SemiBold 14px, tracking 0,84px, `#5d5fef`): "VÍDEO INSTITUCIONAL"
  - H2 (`3188:3424`, Poppins Bold 38px, leading 46px, `#313846`): "Conheça o SUBSEE on em poucos minutos"
  - Descrição (`3188:3425`, Poppins Regular 20px, leading 30px, `#596273`, largura 510): "Veja como a plataforma conecta imóveis, leads, equipe e atendimento em uma experiência mais simples para sua imobiliária."
  - Tags (`3188:3426`, `gap-[10px]`; cada uma `rounded-[999px]`, fundo `#eef0ff`, `px-[16px] py-[10px]`, Poppins Medium 14px `#5d5fef`): "Gestão integrada", "Mais produtividade"
- **Card de vídeo** (`3188:3431`, 760×460, `rounded-[28px]`, `overflow-clip`, sombra `drop-shadow(0 10px 7.5px rgba(46,56,107,.30))`; container `3188:3421` com 485px de altura para a sombra aparecer). Fundo: thumbnail `3831:3865` (PNG 1672×941, `object-cover`, caixa 824×464 em x=-39 y=-2) e overlay `3831:3867` (800×272 em x=-16 y=206, degradê vertical transparente 15,9% → `rgba(128,128,128,.58)` 49,3% → `rgba(0,0,0,.68)` 82,7%). O degradê azul anterior foi removido. Arquivo: `public/images/assista-videos/featured-thumb.png`.
  - Badge (`3188:3432`, fundo branco 16%, `rounded-[999px]`, `px-[16px] py-[10px]`, Poppins SemiBold 13px branco, x=28 y=28): "SUBSEE ON • 03:24"
  - Botão play (`3188:3434`, `3188:3435`, `3188:3436`): círculo branco de 92px, triângulo azul, x=334 y=168
  - Legenda (`3188:3437`, Poppins SemiBold 18px branco, x=36 y=390): "Uma visão completa da plataforma"

## 3. Vídeos demonstrativos — `3188:3438`

Fundo `#f8f9ff` (`3188:3439`, largura total, `py-[40px]`, `gap-[32px]`).

- Eyebrow (`3188:3443`, centralizado, mesma tipografia do item 2): "VÍDEOS DEMONSTRATIVOS"
- H2 (`3188:3442`, Poppins Bold 38px `#313846`, centralizado): "Veja o SUBSEE on em ação"
- Descrição (`3188:3441`, Poppins Regular 18px `#596273`, centralizado, largura 1100): "Conteúdos rápidos para conhecer os recursos que fazem diferença na rotina da sua imobiliária."
- **Galeria** (`3188:3444`, 1400×520, `gap-[55px]`), 3 cards de 430×520 (`rounded-[22px]`, fundo branco, borda `#e6e8f2`, sombra `0 14 32 rgba(48,56,77,.08)`). Miniatura 430×240 em gradiente horizontal; duração em Poppins SemiBold 13px branco (x=28 y=24); play branco de 64px centralizado (y=88); eyebrow "DEMONSTRAÇÃO" (Poppins SemiBold 12px, tracking 0,6px, `#5d5fef`, y=274); título (Poppins SemiBold 22px, leading 30px, `#313846`, y=307); descrição (Poppins Regular 15px, leading 23px, `#657083`, y=396); link (Poppins SemiBold 14px `#5d5fef`, y=480).

| # | Gradiente da miniatura | Duração | Título | Descrição |
| --- | --- | --- | --- | --- |
| 1 (`3188:3445`) | `#5d5fef`→`#8b8dff` | 04:18 | Organize imóveis e publique com agilidade | Cadastre, organize e distribua seus imóveis nos principais canais com mais eficiência. |
| 2 (`3188:3454`) | `#17a6a6`→`#66d4c9` | 05:02 | Centralize leads e atendimento | Reúna contatos, mensagens e histórico para acompanhar cada oportunidade do início ao fim. |
| 3 (`3188:3464`) | `#7357c7`→`#b491e8` | 03:46 | Acompanhe sua equipe e oportunidades | Visualize tarefas, agenda e evolução comercial para tomar decisões com mais clareza. |

Tipo (todos): "DEMONSTRAÇÃO". Link (todos): "Assistir ao vídeo →".

## 4. Conteúdo por perfil — `3188:3474`

Seção `py-[40px]`, `gap-[76px]`, fundo branco.

- Eyebrow (`3188:3500`): "CONTEÚDO PARA CADA PERFIL"
- H2 (`3188:3499`, Poppins Bold 36px `#313846`): "Encontre os vídeos ideais para o seu negócio"
- Descrição (`3188:3498`, Poppins Regular 18px `#596273`): "Escolha um tema e descubra como o SUBSEE on pode apoiar sua rotina e seus objetivos."
- **Lista** (`3188:3476`, `gap-[55px]`), 3 cards de 430×260, `rounded-[22px]`. Número (Poppins Bold 14px, x=28 y=26); ícone circular de 54px com triângulo de play (x=348 y=24); título (Poppins SemiBold 23px `#313846`, y=94); descrição (Poppins Regular 15px, leading 23px, `#596273`, y=142); link (Poppins SemiBold 14px, y=222).

| # | Node | Fundo | Cor de destaque | Número | Título | Descrição | Link |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `3188:3477` | `#eef0ff` | `#5d5fef` | 01 | Imobiliárias urbanas | Gestão de imóveis, integração com portais, leads e atendimento em um só lugar. | Ver vídeos → |
| 2 | `3188:3484` | `#eaf9f7` | `#159c96` | 02 | Imobiliárias rurais | Cadastros completos, informações técnicas e oportunidades para o mercado rural. | Ver vídeos → |
| 3 | `3188:3491` | `#f4eefc` | `#7652b5` | 03 | Corretores e equipes | Agenda, distribuição de contatos e acompanhamento para vender com mais organização. | Ver vídeos → |

- **CTA - App SUBSEE** (`3188:3501`, 1400×220, `rounded-[28px]`, gradiente horizontal `#5d5fef`→`#2e386b`, `overflow-clip`, elipse decorativa 360×360 em x=1080 y=-180):
  - Título (`3188:3506`, Poppins Bold 30px branco, x=58 y=46): "Continue aprendendo no App SUBSEE"
  - Texto (`3188:3505`, Poppins Regular 24px, leading 25px, branco com opacidade 82%, largura 760, x=58 y=104): "Acesse mais vídeos, novidades e conteúdos para aproveitar melhor todos os recursos da plataforma."
  - Botão (`3188:3503`, 300×58, fundo branco, `rounded-[10px]`, x=1034 y=81; texto Poppins SemiBold 15px `#5d5fef`): "Veja mais no App SUBSEE →"

## 5. Perguntas Frequentes — `3188:3507`

Seção `pt-[40px] pb-[80px]`, fundo branco, sem painel cinza. Itens de 970px de largura, centralizados; separador de 1px entre itens; ícone de 30px à direita.

- Título (`3188:3509`, Poppins SemiBold 52px `#313846`, centralizado): "Perguntas Frequentes"
- Subtítulo (`3188:3510`, Poppins Regular 20px, preto, centralizado): "Encontre respostas sobre os vídeos, tutoriais e conteúdos disponíveis no SUBSEE on."
- Pergunta: Poppins SemiBold 20px, leading 20px, `#313846`. Resposta: Poppins Regular 16px, leading 26px, `#313846`, largura 870.

| # | Node | Pergunta | Resposta |
| --- | --- | --- | --- |
| 1 | `3188:3550` | Que tipo de vídeos encontro na SUBSEE on? | Você encontra tutoriais, demonstrações de recursos e conteúdos que ajudam a entender como o sistema pode potencializar as vendas da sua imobiliária. |
| 2 | `3188:3542` | Os vídeos são organizados por categoria? | Sim. Os vídeos são organizados por categoria e duração, facilitando encontrar o conteúdo certo para cada dúvida ou funcionalidade do sistema. |
| 3 | `3188:3534` | Preciso ser cliente para assistir aos vídeos? | Não. Os vídeos estão disponíveis para qualquer pessoa que queira conhecer o SUBSEE, seja cliente ou esteja avaliando qual sistema contratar. |
| 4 | `3188:3526` | Posso assistir aos vídeos quantas vezes quiser? | Sim, os vídeos ficam disponíveis a qualquer momento, e você pode assistir quantas vezes precisar, no seu próprio ritmo. |
| 5 | `3188:3518` | Existem vídeos sobre planos e contratação? | Sim, também há vídeos explicando pacotes, valores e como escolher o plano ideal para sua imobiliária. |
| 6 | `3188:3512` | Posso sugerir temas para novos vídeos? | **Sem texto de resposta no Figma** (item desenhado fechado, só com a pergunta). Ver Open Question Q4 da spec. |

## Assets (inspecionados na Etapa 2; nada gravado em `public/`)

Os 29 arquivos abaixo foram baixados do MCP para uma pasta temporária, só para medir e comparar. As URLs do MCP expiram em 7 dias (a partir de 2026-09-29); a Etapa 3 refaz o `get_design_context` antes de baixar de vez. Regra: só reusar um arquivo existente do repositório quando o conteúdo for comprovadamente idêntico.

| Uso | Node | Arquivo exportado | Dimensões | Decisão |
| --- | --- | --- | --- | --- |
| Fundo do Hero | `3188:3399` | SVG | 1920×548 | Novo. Gradiente horizontal `#E6FDF7` 17% → `#EFF8F5` 48% → `#E1E9F9`, borda inferior curva. Difere do gradiente de `Hero.vue` |
| Forma de recorte do Hero | `3188:3627` | SVG | 1920×548 | Mesma forma do fundo, usada como máscara da foto |
| Brilho branco desfocado | `3188:3629` | SVG | 951×1058 | Novo. Elipse branca, blur 150 |
| Foto do Hero | `3188:3630` | PNG RGBA | 1536×1024 | Novo. Transparência real. Enquadramento: largura 196,66%, deslocamento −51,38% numa janela de 344×451 |
| Divisor de onda | `3188:3400` | SVG | 1918,37×146,5 | Novo. Duas linhas (`#CEDAFC` e branca, 2px). Não é o `crm-hero-divider-onda.svg` |
| Curva decorativa A | `3188:3632` | SVG | 161×53 | Novo |
| Curva decorativa B | `3188:3633` | SVG | 183×124 | **Reusar** `crm-hero-seta-curva-verde.svg` (byte a byte idêntico ao exportado, comprovado na T2) |
| Ícone globo (card 1) | `3188:3640` | SVG | 23,88×23,88 | Novo |
| Ícone pessoas (card 2) | `3188:3649` | SVG | 27×25 | Novo |
| Módulo: venda | `3188:3414` | SVG | 16,409×19,017 | **Reusar** `crm-hero-icone-venda.svg` (paths idênticos, comprovado) |
| Módulo: rural | `3188:3410` | SVG | 17,911×19 | **Reusar** `crm-hero-icone-rural.svg` (paths idênticos, comprovado) |
| Módulo: lançamentos (glifo) | `3188:3408` | SVG | 14,137×16,479 | **Reusar** `crm-hero-icone-lancamentos-glyph.svg` (paths idênticos, comprovado) |
| Módulo: locação | `3188:3411` | SVG | 107,887×110 | O export traz o botão inteiro com sombra; o glifo é o mesmo de `crm-hero-icone-locacao-glyph.svg`. Reusar o arquivo existente |
| Módulo: temporada | `3188:3404` | SVG | 107,887×110 | Idem: reusar `crm-hero-icone-temporada-glyph.svg` |
| Módulo: lançamentos (botão) | `3188:3416` | SVG | 107,887×110 | Só o botão com sombra; não usar |
| Play do Vídeo institucional (círculo + borda) | `3188:3435` | SVG | 92×92 | Novo. Círculo branco, borda `#DDE6F6` 2px |
| Play do Vídeo institucional (sombra) | `3188:3434` | SVG | 140×140 | Novo. Círculo branco de raio 46 com sombra `dy 10, blur 12, 20%` |
| Triângulo do Vídeo institucional | `3188:3436` | SVG | 33,5×24,8 | Novo. Preenchimento `#2764F2` |
| Play dos cards demo (com borda) | `3188:3448` | SVG | 64×64 | Novo. Círculo branco, borda `#DDE6F6` 2px |
| Play dos cards demo (sem borda) | `3188:3457` | SVG | 64×64 | Novo. Círculo branco liso, camada abaixo do de borda |
| Triângulo dos cards demo | `3188:3449` | SVG | 22,35×17,24 | Novo. Preenchimento `#2764F2` |
| Círculo de perfil 01 / 02 / 03 | `3188:3479`, `3188:3486`, `3188:3493` | 3 SVGs | 54×54 | Novos. Cores `#5D5FEF`, `#159C96`, `#7652B5` |
| Triângulo dos perfis | `3188:3480` | SVG | 19,65×15,04 | Novo. Preenchimento branco |
| Elipse decorativa do banner | `3188:3502` | SVG | 360×360 | Novo. Círculo branco a 8% de opacidade |
| Linha divisória do FAQ | `3188:3513` | SVG | 970×1 | Novo (ou borda CSS de 1px, se o resultado for idêntico) |
| Ícone do FAQ, itens 1 a 5 | `3188:3521` | SVG | 30×30 | **Reusar** `faq-plus-circle.svg` (paths idênticos, comprovado) |
| Ícone do FAQ, item 6 | `3188:3514` | SVG | 30×30 | Círculo vazado com traço horizontal; equivale visualmente ao `faq-minus-circle.svg` existente (o traço vertical branco desse arquivo some sobre fundo branco). Confirmar com screenshot na Etapa 3 |

Os cards flutuantes do Hero ("Vídeos Práticos", "Time Capacitado") não têm imagem própria no Figma: são retângulos com blur de fundo, texto e ícone. Definir na Etapa 3 se viram HTML/CSS ou uma imagem composta.

## Observações de fidelidade

- A foto do Hero e o texto dos dois cards flutuantes **diferem** dos assets de `modulos-base-de-conhecimento/` (`hero-visual.png`, `card_arrow.png`): não reusar.
- O nome do frame no Figma é "Assista os videos do SUBSEE on" (sem acento); o H1 renderizado é "Assista **aos** vídeos do SUBSEE on". O botão da Home diz "Assista **os** vídeos do SUBSEE on". Divergência textual entre botão e H1 registrada; vale o texto renderizado de cada lugar.
- Durações e títulos dos 3 vídeos parecem dados de demonstração do design (ver Q1 da spec).
- O item 6 do FAQ usa o ícone de estado aberto (traço horizontal) mas não tem texto de resposta; os itens 1 a 5 têm resposta visível e ícone de "+". Registrado em Q4.
- O fundo do Hero da página tem gradiente e borda curva próprios; o divisor tem duas linhas. Ambos diferem dos de `layout/Hero.vue` e de `crm-hero-divider-onda.svg`.
- O item 03 do FAQ tem a resposta 6,5px mais à esquerda que os demais no Figma (imperfeição do design; não replicar).
- Nenhum frame mobile ou tablet existe no arquivo; o responsivo é derivado do projeto.
