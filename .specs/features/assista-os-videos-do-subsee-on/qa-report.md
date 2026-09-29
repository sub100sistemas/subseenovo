# Assista os vídeos do SUBSEE on QA Report

**Spec**: `.specs/features/assista-os-videos-do-subsee-on/spec.md`
**Rota**: `/assista-os-videos-do-subsee-on`
**Método**: build de produção (`pnpm build`) servido na porta 3100; Chrome headless controlado por DevTools com largura de viewport exata (inclusive 375px) e captura de página inteira.

## Responsive sweep (T14)

Verificado em cada largura: `scrollWidth <= innerWidth`, erros de console, respostas 4xx, imagens quebradas e quantidade de `<h1>`.

| Largura | Overflow horizontal | Erros de console | 4xx | Imagens quebradas | `<h1>` |
| --- | --- | --- | --- | --- | --- |
| 1920 | não | 0 | 0 | 0 | 1 |
| 1440 | não | 0 | 0 | 0 | 1 |
| 1299 | não | 0 | 0 | 0 | 1 |
| 1280 | não | 0 | 0 | 0 | 1 |
| 1199 | não | 0 | 0 | 0 | 1 |
| 1100 | não | 0 | 0 | 0 | 1 |
| 1024 | não | 0 | 0 | 0 | 1 |
| 992 | não | 0 | 0 | 0 | 1 |
| 991 | não | 0 | 0 | 0 | 1 |
| 768 | não | 0 | 0 | 0 | 1 |
| 576 | não | 0 | 0 | 0 | 1 |
| 375 | não | 0 | 0 | 0 | 1 |

Abaixo de 992px as duas colunas do Vídeo institucional e as grades de 3 cards ficam em coluna única (inclusive entre 768 e 991px). O Hero segue o comportamento das páginas irmãs (composição empilhada, onda como divisor mobile).

### Achados

1. **Corrigido (commit `fix(videos): let cards grow when text wraps`)**: entre 992 e ~1400px os cards de perfil (`h-[260px]`) e demonstrativos (`h-[520px]`) tinham altura fixa. Com colunas mais estreitas o texto quebrava em mais linhas e a descrição encostava no link ("organização." sobre "Ver vídeos →" a 1024px). Passaram a `min-h`, e a grade iguala as alturas. Repetida a varredura em 1024, 992 e 1100px: sem sobreposição.
2. **Aberto, sem correção**: a 992px o título do Hero encosta na borda inferior do header (~15px). Vem do `aspect-[1400/483]` do Hero, que reduz a altura com a largura. As páginas irmãs têm o mesmo comportamento. Não há referência do Figma abaixo de 1920px.
3. **Aberto, sem correção**: no mobile os textos dos dois cards flutuantes do Hero ficam pequenos (cerca de 7px a 375px), porque a composição escala proporcionalmente, como a imagem composta das páginas irmãs.
4. **Decorativos fora da viewport**: brilho do Hero, elipse do banner e a curva do fundo ultrapassam a largura da janela, mas ficam cortados por `overflow-hidden` e não geram rolagem horizontal (`scrollWidth == innerWidth` em todas as larguras).

### Gate de build

- `pnpm build`: exit 0.
- `pnpm generate`: exit 0. Os `[404]` do log são links já existentes no site para páginas ainda não criadas (`/sobre`, `/entrar`, `/termos-de-uso`, `/politica-de-privacidade`, `/modulos/sites`, três posts do blog, `/lgpd/termos-de-uso/`), conforme [[AD-016]]. Nenhum `[404]` novo veio desta feature.

### Rota fora do site estático (a decidir)

`pnpm generate` **não gerou** `assista-os-videos-do-subsee-on/index.html`. O prerenderizador do Nitro só segue links a partir de `/`, e nenhum link do site aponta para a nova rota. Enquanto o botão da Home não apontar para ela (etapa posterior, Q6) ou a rota não for listada em `nitro.prerender.routes`, o deploy estático (`pnpm generate`, Cloudflare Pages) não terá a página. Esta feature não altera `nuxt.config.ts` nem o botão da Home.

## Figma fidelity (T15)

**Método**: build de produção a 1920px, captura de página inteira e comparação com `get_screenshot` do frame `3188:3397` (1920×4334). Para cada seção, o Chrome calculou num canvas a diferença média por canal (0 a 255) e a fração de pixels com diferença acima de 24. Além disso, recortes lado a lado por seção e leitura de textos, links e imagens pelo DOM.

### Posição e altura das seções

| Seção | Figma (y, altura) | Site (y, altura) |
| --- | --- | --- |
| Header | 0, 85 | 0, 85 |
| Hero | 85, 483 (abaixo do header) | 85, 483 |
| Vídeo institucional | 568, 540 | 568, 540 |
| Vídeos demonstrativos | 1108, 874 | 1108, 874 |
| Conteúdo por perfil | 1982, 478 | 1982, 478 |
| Banner App SUBSEE | 2460, 336 (76 + 220 + 40) | 2460, 336 |
| FAQ | 2796 | 2796 |

### Diferença de pixels contra o Figma

| Seção | Diferença média | Pixels com diferença > 24 |
| --- | --- | --- |
| Hero | 4,81 | 3,54% |
| Vídeo institucional | 1,82 | 2,22% |
| Vídeos demonstrativos | 1,74 | 1,71% |
| Perfis e banner | 1,50 | 1,90% |
| FAQ (título e subtítulo) | 1,07 | 1,45% |

Cores de fundo do Hero amostradas em 5 pontos: diferença de 0 a 2 níveis por canal. A diferença maior do Hero vem do antialiasing da foto espelhada e das linhas da onda.

### Textos, links e assets

- **Textos**: 0 textos do manifesto ausentes na página e 0 linhas da página fora do manifesto (57 linhas em `<main>`). As respostas do FAQ ficam em `<details>` fechado e foram conferidas no código.
- **Links**: os 8 links da página apontam para `https://www.youtube.com/@subsee`, com `target="_blank"` e `rel="noopener"`. É o fallback provisório (Q1 a Q3), não uma decisão.
- **Assets**: 39 imagens em `<main>`, nenhuma quebrada. Tamanhos renderizados conferidos com o Figma: play 92/64/54px, círculos de perfil 54px, elipse do banner 360px, glow 951×1058, curva A 166,2×125,5 e curva B 161,6×206 (as mesmas caixas do Figma), ícones do FAQ 30px. Os arquivos reusados (5 ícones de módulo, curva verde, ícones do FAQ) são os comprovadamente idênticos. A foto usa a versão de 680px para um espaço de 676px.

### Correções feitas durante a comparação

1. `sizes` da foto do Hero apontava para uma chave inexistente (`desktop-full`), e o navegador baixava a versão de 480px para um espaço de 676px. Corrigido.
2. Cards de perfil com 266px em vez de 260px deslocavam o banner e o FAQ 6px. Corrigido (`pb-[14px]`).
3. Com itens do FAQ abertos, o `Faq.vue` aplica 18px de padding e o Figma usa 13px; as respostas também quebravam em 970px em vez de 870px. Sobrescritos nesta página.
4. Deslocamentos de 1 a 2px em eyebrows, números e links dos cards (texto centralizado na caixa em vez de alinhado ao topo). Corrigidos.

### Divergências que permanecem

| Divergência | Causa | Impacto |
| --- | --- | --- |
| A sombra do card de vídeo institucional aparece inteira; no Figma o container corta a sombra (`overflow-clip`) | O corte é artefato do frame do Figma | Nenhum; o comportamento do site é o esperado |
| O FAQ vem com todos os itens fechados; o Figma desenha os itens 1 a 5 abertos | Acordeão nativo do `layout/Faq.vue`, fechado por padrão (decisão da spec) | Altura total da página 3952px contra 4334px |
| Pergunta 6 do FAQ ausente | Sem texto de resposta no Figma (Q4) | Bloqueia a T17 |
| Item 3 do FAQ quebra a resposta uma palavra antes do Figma | O Figma desenha esse item 6,5px mais à esquerda e 24px mais estreito (845,8px contra 870px) | Imperfeição do design, não replicada |
| Diferenças de 1 a 3px em textos de cards | Arredondamento de altura de linha | Imperceptível |
| Header do site projeta sombra sobre o topo do Hero | O Header é um componente global; a captura do frame do Hero no Figma não o inclui | Nenhum |

## Rodada 2: correções visuais

**Método**: build de produção, captura de página inteira em 1920, 1440, 1280, 1024, 992, 768, 576 e 375px, diferença de pixels contra o frame `3188:3397` a 1920px e medidas de DOM. Só existe referência do Figma a 1920px; nas demais larguras a comparação é da composição contra as proporções do frame.

### Corrigido

| Item | Antes | Depois |
| --- | --- | --- |
| FAQ | Passo entre itens de 148px | Passo de 147px, como no Figma. Por decisão do usuário, os itens carregam fechados com "+" (o Figma os desenha abertos) |
| Item 3 do FAQ | Resposta com 870px, quebrava uma palavra depois do Figma | A partir de 1400px: 845,833px de largura, deslocada -6,53px e 6px mais curta, como no Figma. Quebra em "cliente ou / esteja" |
| Sombra do card institucional | Sombra inteira | Container com `overflow-clip` a partir de 992px, como o `overflow-clip` do Figma. Foco por teclado passa a desenhar dentro do card |
| Hero a 992px | Título a ~15px do header | `min-h-[380px]` a partir de 992px; título a ~38px do header. Sem efeito acima de ~1150px |
| Cards do Hero no mobile | Texto de ~7,6px a 375px | Cards em `em` com fonte `max(2.221cqw, 11px)`. Idênticos ao anterior em telas largas; a 375px o texto tem 11px e 12,4px, e abaixo de 576px os cards ficam à esquerda da foto e as curvas decorativas somem |
| Item institucional | Coluna de texto no topo (espaço perdido numa edição) | Centralizada como no Figma; diferença média 1,82 para 1,16 |

### Diferença de pixels a 1920px

| Região | Média | Pixels > 24 |
| --- | --- | --- |
| Header + Hero (0 a 568) | 4,62 | 3,47% |
| Institucional | 1,16 | 1,30% |
| Demonstrativos | 1,68 | 1,71% |
| Perfis e banner | 1,50 | 1,90% |
| FAQ (2796 a 3496) | 5,87 | 4,57% |

Os pixels do FAQ diferem sobretudo pelo ícone (ver abaixo) e por 1px de antialiasing no texto das perguntas.

### AVS-04

O Figma tem o frame do Hero com 568px porque o Header (85px) fica sobre o topo dele. No site o Header é um componente separado e a seção do Hero mede 483px, então a borda inferior do Hero fica em y=568, igual ao Figma, e todas as seções seguintes ficam nas mesmas posições. Composição e altura conferidas lado a lado. Não há diferença de implementação; o texto do critério (568) mistura a altura do frame com a da seção. O `spec.md` não foi alterado.

### Divergências que permanecem

| Divergência | Causa |
| --- | --- |
| Estado inicial do FAQ: o Figma desenha os itens 1 a 5 abertos; o site os carrega fechados com "+" | Decisão do usuário: respostas ocultas ao acessar a página |
| Pergunta 6 do FAQ ausente; a página fica 83px mais curta que o Figma (4251px contra 4334px a 1920px) | Sem resposta no Figma (Q4) |
| Header: posição do botão "Entrar" difere de 1 a 2px | Componente global, fora desta feature |
| Abaixo de 1920px não há referência do Figma | Composição verificada só por proporção |
