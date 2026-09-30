# LGPD QA Report

**Spec**: `.specs/features/lgpd/spec.md`
**Método**: build de produção (`pnpm build`) servido na porta 3100; Chrome headless controlado por DevTools com largura de viewport exata; medidas de DOM; texto renderizado comparado com os dados; screenshots de cada cartão do Figma (nodes de cartão, tamanho nativo) comparados por diferença de pixels com o recorte equivalente da página. O `get_screenshot` da página inteira volta em 307px de largura, pequeno demais para comparar em pixels; por isso a comparação é por cartão.

## Termos de Uso `/lgpd/termos-de-uso/` (T11)

Frame do Figma: `1057:3435` (1920×6409).

### Texto

- Os dados (`app/data/lgpd-termos.ts`) foram conferidos contra os nomes dos nós de texto do Figma que trazem o texto inteiro: 5 unidades (BOAS-VINDAS, SUB100 SISTEMAS LTDA, PORTAL DE IMÓVEIS SUB100, RESPONSABILIDADES e CADASTRO) batem exatamente. Os 10 textos restantes têm nome de camada genérico ("Text / Description") e foram revisados contra o `get_design_context`.
- O texto renderizado no navegador foi comparado com os dados: 0 diferenças (9 títulos, 7 rótulos de subcartão, todos os parágrafos e todas as quebras de linha das listas "(I)" a "(VII)").
- Estrutura: 1 `<h1>`, 9 `<h2>` de cartão, 7 `<h3>` de subcartão, 0 parágrafos vazios. O Footer global acrescenta outros `<h3>` fora da página.
- Aspas, travessões e endereços foram mantidos como no Figma: aspas retas em `"Condições Gerais"` e aspas curvas em “SUB100”, “Portal SUB100” e “SGL”; e-mail e endereços de site como texto puro (Q4).

### Posições a 1920px

| Elemento | Figma (y, altura) | Site (y, altura) |
| --- | --- | --- |
| Header | 0, 85 | 0, 85 |
| Hero (seção) | 85, 390 (H1 em y=216) | 85, 390 (H1 em y=216) |
| Subtítulo | y=294 | y=294 |
| Descrição | x=629,5, y=348, largura 661 | x=629,5, y=348,4, largura 661 |
| Fundo do Hero | SVG 2220×753 em x=-150, y=-150 | 2220×753 em x=-150, y=-150 |
| BOAS-VINDAS | 465, 349 | 465, 349 |
| DEFINIÇÕES | 862, 1452 (subcartões 133, 133, 102, ...) | 862, 1452 (subcartões 133, 133, 102, ...) |
| RESPONSABILIDADES | 2362, 873 | 2362, 873 |
| CADASTRO | 3283, 811 | 3283, 811 |
| USO DO SITE | 4142, 436 (altura fixa, texto cortado) | 4142, 563 |
| ARMAZENAMENTO E SEGURANÇA | 4626, 355 (altura fixa) | 4753, 470 |
| CONSENTIMENTO | 5029, 346 | 5271, 346 |
| CANAL DE DÚVIDAS | 5423, 222 | 5665, 222 |
| FORO | 5693, 194 (altura fixa) | 5935, 222 |

Do cartão USO DO SITE em diante as posições descem porque o site usa a altura do conteúdo, e os cartões de altura fixa do Figma cortam o texto (ver divergências). A descida é de 127px depois de USO DO SITE, 242px depois de ARMAZENAMENTO E SEGURANÇA, e o Footer fica 270px mais abaixo que no Figma.

### Diferença de pixels contra o Figma (cartão inteiro, 1920px)

| Cartão | Média (0 a 255) | Pixels com diferença > 24 |
| --- | --- | --- |
| BOAS-VINDAS | 3,03 | 4,94% |
| DEFINIÇÕES (Figma reduzido a 700 de largura) | 4,34 | 6,46% |
| RESPONSABILIDADES | 4,99 | 7,87% |
| CADASTRO | 4,08 | 6,52% |
| USO DO SITE (região comum de 436px) | 3,83 | 6,31% |
| ARMAZENAMENTO E SEGURANÇA (região comum de 355px) | 3,43 | 5,70% |
| CONSENTIMENTO | 2,92 | 4,63% |
| CANAL DE DÚVIDAS | 1,85 | 2,92% |
| FORO (região comum de 194px) | 2,27 | 3,91% |

A diferença restante vem do antialiasing do texto (o Figma e o Chrome rasterizam o texto de forma diferente). Lado a lado, as quebras de linha, os títulos e os espaçamentos coincidem.

### Correções feitas durante a comparação

1. **Altura de linha em pixels inteiros.** O Figma renderiza `line-height: 1.7` com passos inteiros (31px a 18px e 27px a 16px), e o CSS usa 30,6px e 27,2px; a diferença acumulava 3 a 4px por parágrafo. A partir de 992px o texto usa `leading-[31px]`, o rótulo `leading-[23px]` e o BOAS-VINDAS `leading-[27px]`. A separação entre parágrafos usa `gap-[1lh]` (uma linha em branco, como o parágrafo vazio do Figma).
2. **Título 1px mais alto.** O texto do título dos cartões saía 1px acima do Figma; corrigido com `top-px` a partir de 992px, sem mudar o layout.
3. **CADASTRO sem linha em branco entre os três parágrafos.** No Figma os três parágrafos são contíguos, e só existe uma linha em branco dentro do segundo, antes de "O anunciante deverá se cadastrar nos seguintes casos:". Os três viraram um único parágrafo com quebras de linha, com a mesma linha em branco. Com isso a altura do cartão passou de 873 para 811px, igual ao Figma.
4. **Espaço sob o último cartão.** O bloco do Figma termina 47px abaixo do FORO; adicionado `pb-[47px]` a partir de 992px.

### Decisão do usuário: texto jurídico completo

O usuário decidiu **manter o texto jurídico completo**: nenhum trecho é escondido ou cortado só para reproduzir a altura fixa do Figma. USO DO SITE, ARMAZENAMENTO E SEGURANÇA e FORO mantêm todos os parágrafos, a altura dos cartões acompanha o conteúdo real e nenhum cartão usa `overflow: hidden` para esconder texto. A decisão vale para as duas páginas.

### Divergências que permanecem

| Divergência | Causa | Impacto |
| --- | --- | --- |
| USO DO SITE, ARMAZENAMENTO E SEGURANÇA e FORO ficam mais altos que no Figma (563 contra 436, 470 contra 355, 222 contra 194) | O Figma desenha esses três cartões com altura fixa e `overflow-clip`. O frame de USO DO SITE **corta o terceiro parágrafo** ("Os sites da SUB100 poderão armazenar cookies, ...") e o de ARMAZENAMENTO E SEGURANÇA **corta o terceiro parágrafo** ("A SUB100 poderá acessar e manter os dados pessoais dos usuários mesmo após pedido de exclusão, ..."). O site mostra o texto completo, como a spec pede (altura pelo conteúdo) | O texto que o Figma corta aparece no site. Posições abaixo de USO DO SITE descem 127 a 242px |
| Altura total da página: 6666px contra 6409px | Soma das diferenças acima e Footer 13px mais baixo | Nenhum |
| Footer com 462px (Figma: 475px) | Componente global fora desta feature | Nenhum |
| Diferenças de antialiasing do texto | Rasterizador do Figma | Imperceptível |

Os textos que o Figma corta continuam nos dados e no HTML; a decisão de mostrá-los foi da spec (AC 5 de "Estrutura visual compartilhada").

## Política de Privacidade `/lgpd/politica-de-privacidade/` (T17)

Frame do Figma: `1211:1826` (1920×5666). Mesmo método dos Termos.

### Texto

- Os dados (`app/data/lgpd-politica.ts`) foram conferidos contra os nomes dos nós de texto do Figma: 4 unidades batem exatamente (CONSIDERANDO QUE, 3.1, 3.4 e 7). As demais foram revisadas contra o `get_design_context`.
- O nó `1215:1051` (2. FORNECIMENTO DE DADOS) tem nome de camada "O não fornecimento dos dados implicará no bloqueio/inutilização de algumas funcionalidades." (só a última frase), mas o texto desenhado é o parágrafo inteiro, que começa em "Tanto para o usuário quanto para os anunciantes, ...". Vale o texto desenhado (a altura do nó, 124px, corresponde a 4 linhas, não a 1). O nome da camada é um resto de edição.
- O texto renderizado no navegador foi comparado com os dados: 0 diferenças (11 títulos, 4 rótulos de subcartão, todos os parágrafos e a lista "a)" a "e)").
- Estrutura: 1 `<h1>`, 11 `<h2>` de cartão, 4 `<h3>` de subcartão, 0 parágrafos vazios.
- O texto do Figma foi reproduzido sem correção: "Como compartilharmos" (item c), "sistema operacionais" (3.1 b), aspas retas em `"SUB100"`, `"Anunciante"` e `"usuário"`; e-mail e endereços de site como texto puro.

### Posições a 1920px (todas iguais ao Figma)

| Elemento | Figma (y, altura) | Site (y, altura) |
| --- | --- | --- |
| Hero (seção) | 85, 358; H1 em y=156, subtítulo em 226, descrição em x=635, y=288, largura 650 | 85, 358; H1 em 156, subtítulo em 226, descrição em x=635, y=288, largura 650 |
| Elipse decorativa | 90, 326, 1760×372 | 90, 326, 1760×372 (SVG 2160×772 em x=-110, y=126) |
| Fundo do Hero | SVG 2220×753 em x=-150, y=-150 | igual |
| CONSIDERANDO QUE | 394, 1028 | 394, 1028 |
| 1. RESTRIÇÃO PARA MENORES | 1470, 253 | 1470, 253 |
| 2. FORNECIMENTO DE DADOS | 1771, 284 | 1771, 284 |
| 3. USUÁRIOS E ANUNCIANTES | 2103, 1105 (3.1 em +124 e 288; 3.2 em +436 e 257; 3.3 em +717 e 164; 3.4 em +905 e 164) | 2103, 1105 (mesmas posições e alturas) |
| 4. COOKIES | 3256, 222 | 3256, 222 |
| 5. SEGURANÇA | 3526, 222 | 3526, 222 |
| 6. DIREITOS DO TITULAR | 3796, 253 | 3796, 253 |
| 7. TÉRMINO DO TRATAMENTO | 4097, 222 | 4097, 222 |
| 8. ALTERAÇÃO NA POLÍTICA DE PRIVACIDADE | 4367, 222 | 4367, 222 |
| 9. CONTATO | 4637, 222 | 4637, 222 |
| 10. FORO | 4907, 222 | 4907, 222 |
| Footer | y=5191 | y=5191 |
| Altura total da página | 5666 | 5653 (Footer 13px mais baixo) |

Como não há cartão de altura fixa na Política, a página inteira acompanha o Figma sem deslocamento.

### Diferença de pixels contra o Figma (cartão inteiro, 1920px)

| Cartão | Média (0 a 255) | Pixels com diferença > 24 |
| --- | --- | --- |
| CONSIDERANDO QUE (Figma reduzido para 989×1024) | 7,20 | 9,63% |
| 1. RESTRIÇÃO PARA MENORES | 2,41 | 4,00% |
| 2. FORNECIMENTO DE DADOS | 3,00 | 4,77% |
| 3. USUÁRIOS E ANUNCIANTES (Figma reduzido para 920×1024) | 5,87 | 7,95% |
| 4. COOKIES | 1,91 | 3,08% |
| 5. SEGURANÇA | 2,20 | 3,51% |
| 6. DIREITOS DO TITULAR | 2,80 | 4,51% |
| 7. TÉRMINO DO TRATAMENTO | 2,38 | 3,81% |
| 8. ALTERAÇÃO NA POLÍTICA DE PRIVACIDADE | 2,36 | 3,92% |
| 9. CONTATO | 1,54 | 2,40% |
| 10. FORO | 1,99 | 3,14% |

Os dois cartões maiores que 1024px o `get_screenshot` entrega reduzidos, o que eleva a média; os demais têm 1,5 a 3,0. O restante é antialiasing do texto. Lado a lado, quebras de linha, títulos e espaçamentos coincidem.

### Correção feita durante a comparação

- **Quebra de linha nos endereços.** O Figma quebra a linha depois de `//` nos endereços de site ("https://" no fim de uma linha e "www..." na seguinte), e o Chrome não tem oportunidade de quebra ali. O `LegalSections` passou a inserir `<wbr>` depois de cada `//` (não altera o texto: `textContent` fica igual). A correção vale para as duas páginas; nos Termos a comparação continua com 0 diferenças de texto e as mesmas alturas.

### Divergências que permanecem

| Divergência | Causa | Impacto |
| --- | --- | --- |
| A elipse decorativa só aparece a partir de 992px | O Figma só desenha a 1920px; abaixo de 992px ela só produziria uma mancha desalinhada | Nenhum a 1920px |
| Footer com 462px (Figma: 475px) | Componente global fora desta feature | Nenhum |
| Diferenças de antialiasing do texto | Rasterizador do Figma | Imperceptível |
| Comparação de pixels dos dois cartões grandes feita com o Figma reduzido | Limite de 1024px do `get_screenshot` | A média sobe cerca de 3 pontos; posições e quebras conferidas por medida |
