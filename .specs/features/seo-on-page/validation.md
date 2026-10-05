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
