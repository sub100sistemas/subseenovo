# Validation — `seo-on-page`

**Spec:** [spec.md](spec.md) · **Data:** 2026-10-04 · **Método:** `pnpm build` (exit 0), servidor do build (`node .output/server/index.mjs`, porta 3100, encerrado) com `NUXT_PUBLIC_SITE_URL=https://subsee.com.br`, HTML renderizado das 21 rotas reais mais uma rota inexistente (HTTP/`fetch`) e Playwright para a 404 e para o selo de Loteadoras.

## Veredito: **PASS com ressalvas**

Regra final implementada: **páginas normais → `index, follow`; formulários, páginas de obrigado e 404 → `noindex, follow`**. As ressalvas estão ao final (404 só confirmada após a hidratação; fora de produção continua `noindex, nofollow`).

## Mudanças verificadas

| Arquivo | Mudança |
| --- | --- |
| 17 páginas em `app/pages/**` | `useSeoMeta` com `title`, `description`, `keywords`, `ogTitle`, `ogDescription` (metadados na tabela da spec) |
| `app/data/seo.ts` | `noindexPaths` agora inclui `/testar-gratis/` e `/agendar-demonstracao/` (além de `/inscreva-se/` e das 3 `/obrigado/`) |
| `app/plugins/seo.ts` | rota inexistente passa a `noindex, follow` (antes `noindex, nofollow`) |
| `app/components/sections/SiteLoteadorasHero.vue` | selo "breve" desenhado por `::after`; sai do texto do `<h1>` |

## Resultado por rota (build, produção simulada)

| URL | Robots | Canonical | Sitemap |
| --- | --- | --- | --- |
| `/` | `index, follow` | `https://subsee.com.br/` | sim |
| `/planos-e-precos/` | `index, follow` | próprio | sim |
| `/eventos/` | `index, follow` | próprio | sim |
| `/assista-os-videos-do-subsee-on/` | `index, follow` | próprio | sim |
| `/modulos/crm/` | `index, follow` | próprio | sim |
| `/modulos/crm-imobiliario-urbano/` | `index, follow` | próprio | sim |
| `/modulos/crm-imobiliario-rural/` | `index, follow` | próprio | sim |
| `/modulos/crm-imobiliario-temporada/` | `index, follow` | próprio | sim |
| `/modulos/site-para-imobiliarias-urbanas/` | `index, follow` | próprio | sim |
| `/modulos/site-para-imobiliarias-rurais/` | `index, follow` | próprio | sim |
| `/modulos/site-para-loteadoras/` | `index, follow` | próprio | sim |
| `/modulos/apis-hub-integrador/` | `index, follow` | próprio | sim |
| `/modulos/base-de-conhecimento/` | `index, follow` | próprio | sim |
| `/lgpd/politica-de-privacidade/` | `index, follow` | próprio | sim |
| `/lgpd/termos-de-uso/` | `index, follow` | próprio | sim |
| `/testar-gratis/` | `noindex, follow` | ausente | não |
| `/agendar-demonstracao/` | `noindex, follow` | ausente | não |
| `/inscreva-se/` | `noindex, follow` | ausente | não |
| `/testar-gratis/obrigado/` | `noindex, follow` | ausente | não |
| `/agendar-demonstracao/obrigado/` | `noindex, follow` | ausente | não |
| `/inscreva-se/obrigado/` | `noindex, follow` | ausente | não |
| rota inexistente (404) | HTTP 404; `noindex, follow` no DOM após a hidratação | — | não |

## Verificações

| Verificação | Resultado |
| --- | --- |
| `pnpm build` (local) e `pnpm build` com a URL de produção | exit 0 em ambos; módulo SEO: "Produção: 15 URLs no sitemap" |
| Sitemap gerado (`.output/public/sitemap.xml`) | 15 URLs; não contém `testar-gratis`, `agendar-demonstracao`, `inscreva-se` nem `obrigado` |
| Páginas normais com `noindex` | **0** |
| Formulários com `index` | **0** |
| Páginas `noindex, nofollow` em produção | **0** |
| Canonical das 15 `index` | `https://subsee.com.br/<rota>/`, sem exceções; ausente nas 6 `noindex` |
| Titles, descriptions, keywords e H1 entre as 15 `index` | 0 duplicados; title 48–59 caracteres, description 130–149, keywords 3–5 |
| `og:title` / `og:description` | iguais a title e description |
| H1 de Loteadoras | "Site para Loteadoras"; selo "breve" visível (70×25px a 1440, 61×25px a 375), sem overflow |
| `robots.txt` | `Allow: /` e `Sitemap:`; nenhuma página `noindex` bloqueada |
| `validate_spec.py` | 0 erros e 0 avisos em `seo-on-page/spec.md` |

## Ressalvas

1. **404:** o HTML estático de 404 não traz o robots; ele é aplicado pelo plugin após a hidratação (`noindex, follow` confirmado no DOM). O sinal principal para o Google continua sendo o HTTP 404.
2. **Fora de produção e fora do preview** (por exemplo, local) o site continua `noindex, nofollow` em todas as páginas, com `robots.txt` `Disallow: /`; é proteção de ambiente, não classificação de página.
3. **Domínio por ambiente:** o preview da Cloudflare Pages (`https://subseenovo.pages.dev`, sem `NUXT_PUBLIC_SITE_URL`) é tratado como indexável (`isAuditSite`) e aponta canonical, `og:url`, `robots.txt` (`Allow: /` + `Sitemap:`) e `sitemap.xml` para o próprio domínio. Com `NUXT_PUBLIC_SITE_URL=https://subsee.com.br` tudo aponta para a produção definitiva. Validado com builds limpos nos dois ambientes e no local (`Disallow: /`, sem sitemap).
4. **`alt`/`title` e `title`/`aria-label`:** nas 21 rotas, 1.192 imagens com `alt` e `title` preenchidos e 671 links com `title` e `aria-label` preenchidos (HTML bruto e DOM hidratado). `formsEndpoint` permanece `https://forms.sub100.com.br/sub100sistemas/formularios.php`.
5. Os H1 de CRM urbano, rural e temporada e o H1 de Planos não foram alterados (copy do Figma); a palavra-chave de CRM rural está no Title, na Description e nos H2.

## Auditoria de dados estruturados e redes sociais — 6 páginas (2026-10-09, `https://subseenovo.pages.dev`, pós `b9de8ab`)

Páginas: `/modulos/site-para-loteadoras/`, `/eventos/`, `/planos-e-precos/`, `/assista-os-videos-do-subsee-on/`, `/lgpd/termos-de-uso/`, `/lgpd/politica-de-privacidade/`. Fonte: HTML entregue pelo servidor publicado. O deploy já reflete `b9de8ab` (`SoftwareApplication` ausente no HTML da Home e de módulos que o tinham); o ID do deploy no Cloudflare não foi lido.

| Verificação | Resultado |
| --- | --- |
| Twitter Cards (`card` `summary_large_image`, `title`, `description`, `image`, `image:alt`) | OK nas 6 |
| Open Graph (`title`, `description`, `url` = canonical, `type`, `site_name` SUBSEE, `locale`, `image` 1200×630 + `alt`) | OK nas 6 |
| JSON-LD: 1 bloco por página, sem erro de parse, sem `@id` duplicado, sem referência quebrada | OK nas 6 |
| Tipos: `Organization`, `WebSite`, `WebPage`, `BreadcrumbList` (+ `FAQPage` em Loteadoras, Eventos, Planos e Vídeos) | OK; `SoftwareApplication` ausente nas 6 |
| FAQ: perguntas e respostas do `FAQPage` presentes no HTML visível (6, 6, 6 e 5 itens); Termos e Privacidade sem FAQ e sem `FAQPage` | OK |
| Schema Markup Validator | Eventos: 0 erros, 0 avisos (`BreadcrumbList` e `FAQPage`). Os tipos das outras 5 foram detectados, mas as contagens de erros/avisos não foram lidas: o validador passou a exigir reCAPTCHA após as consultas automatizadas e o desafio não foi contornado |
| Google Rich Results Test | Não verificado: exige login |

### Breadcrumb visual

- **Decisão do usuário (2026-10-09):** manter o `BreadcrumbList` somente no JSON-LD; não criar breadcrumb visual.
- **Figma:** nenhuma das seções das 6 páginas tem breadcrumb (busca por nome de camada e por texto "Início/Home/›/»"; o único achado, "Trilha de Integração", é conteúdo da Base de Conhecimento). Criar um elemento visual desviaria do Figma.
- **Código:** não existe componente de breadcrumb; o único `nav` é "Menu principal".
- **Validação:** o `BreadcrumbList` do Eventos passou no Schema Markup Validator com 0 erros e 0 avisos. Os demais resultados externos estão em "Pendências".

### Status por item

| Item | Status |
| --- | --- |
| Twitter Cards, Open Graph, JSON-LD (estrutura, `@id`, referências), FAQ visível x `FAQPage`, ausência de `SoftwareApplication` | Validado no HTML publicado (6 páginas) |
| Schema Markup Validator — Eventos | Validado: 0 erros, 0 avisos |
| Schema Markup Validator — tipos detectados nas outras 5 páginas | Validado (`BreadcrumbList`/`FAQPage`; `WebPage`/`BreadcrumbList` em Termos e Privacidade) |
| Schema Markup Validator — contagem de erros e avisos das outras 5 páginas | Não verificado (reCAPTCHA do validador; não contornado) |
| Google Rich Results Test (6 páginas) | Não verificado (exige login no Google; não executado) |
| FAQ em Termos de Uso e Política de Privacidade | Não aplicável (sem FAQ visível e sem `FAQPage`) |
| Verificação em `subsee.com.br` | Pendente (go-live) |

### Pendências

1. Executar manualmente, no navegador, o Schema Markup Validator (contagens das 5 páginas restantes) e o Google Rich Results Test nas 6 URLs.
2. Go-live: repetir a verificação em `subsee.com.br` com `NUXT_PUBLIC_SITE_URL=https://subsee.com.br`; `https://subsee.com.br/images/og-subsee.png` ainda retorna 404 porque o domínio serve o site antigo.
3. Nomes do breadcrumb x navegação (observação, não erro): Planos ("Planos e preços" x menu "Preços" x H1 "Planos & Preços") e Vídeos ("Vídeos do SUBSEE on", sem link próprio no menu).

## `Organization.image` (2026-10-09, build local com `NUXT_PUBLIC_SITE_URL=https://subseenovo.pages.dev`)

Alteração: `buildOrganization` passa a emitir `image` (`ImageObject` com `url`, `width`, `height` de `socialImage`). `pnpm build` terminou com exit code 0.

| Verificação | Origem | Resultado |
| --- | --- | --- |
| `https://subseenovo.pages.dev/images/og-subsee.png` | Site publicado | HTTP 200, `image/png`, 339.706 bytes, 1200×630 (cabeçalho do PNG) |
| `Organization.image` presente nas 15 páginas indexáveis, com `url` `https://subseenovo.pages.dev/images/og-subsee.png`, `width` 1200 e `height` 630 | Build local servido | Validado |
| 6 páginas `noindex` (3 formulários e 3 `/obrigado/`) | Build local servido | Sem JSON-LD, como decidido |
| `SoftwareApplication` | Build local servido | Ausente nas 21 rotas |
| JSON-LD: 1 bloco, sem erro de parse, sem `@id` duplicado, sem referência quebrada; `FAQPage` igual ao FAQ visível | Build local servido | Validado nas 15 indexáveis |
| `og:image` e `twitter:image` = `…/images/og-subsee.png` | Build local servido | Validado nas 21 rotas |
| Meta SEO (robots, canonical, `og:*`, `twitter:*`, description) e JSON-LD sem a `image` | Build local x site publicado, 18 rotas | Idênticos |
| Site publicado com `Organization.image` | Site publicado | Pendente: depende de deploy |
| Rich Results Test / Schema Markup Validator com `Organization.image` | Validadores externos | Não verificado: reexecutar no navegador após o deploy |
