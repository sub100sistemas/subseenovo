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

Abaixo de 992px as duas colunas do Vídeo institucional e as grades de 3 cards ficam em coluna única (2 colunas entre 768 e 991px). O Hero segue o comportamento das páginas irmãs (composição empilhada, onda como divisor mobile).

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
