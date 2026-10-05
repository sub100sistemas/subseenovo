# SEO on-page de todas as páginas indexáveis Specification

## Problem Statement

A auditoria de SEO on-page de 2026-10-04 encontrou 15 de 17 titles e 8 de 17 descriptions indexáveis fora das faixas recomendadas (50–60 e 120–155 caracteres), titles no padrão "SUBSEE | …" sem foco na intenção de busca de cada página, ausência de `<meta name="keywords">`, e um `<h1>` ("Site para Loteadoras breve") contaminado por um selo visual. Esta feature revisa Title, Description e keywords das páginas de conteúdo e das de formulário, define a regra final de indexação (15 páginas `index, follow`; formulários, obrigado e 404 `noindex, follow`), corrige o H1 estrutural de Loteadoras e alinha o robots da página 404, sem alterar layout nem conteúdo visual.

## Goals

- [x] Cada uma das 15 páginas `index, follow` tem Title único (aprox. 48–60 caracteres), Description única (aprox. 120–155) e `<meta name="keywords">` com 3–6 termos próprios da página. As 2 páginas de formulário com conteúdo próprio (`/testar-gratis/` e `/agendar-demonstracao/`) mantêm Title, Description e keywords revisados, mas ficam `noindex, follow`.
- [x] Cada página tem uma palavra-chave principal distinta, preservando a separação de intenções: Home = guarda-chuva "CRM imobiliário"; `/modulos/crm/` = funcionalidades do CRM; Vídeos = produto em ação; Base de Conhecimento = ajuda e tutoriais; Eventos = lives e replays; Planos = preço; Teste grátis = teste; Demonstração = demonstração.
- [x] Canonical, robots e sitemap permanecem coerentes: as 15 páginas `index, follow` têm canonical `https://subsee.com.br/<rota>/` e estão no sitemap; os 3 formulários (`/testar-gratis/`, `/agendar-demonstracao/`, `/inscreva-se/`), as 3 páginas `/obrigado/` e a 404 ficam em `noindex, follow` e fora do sitemap. Nenhuma página usa `noindex, nofollow` em produção.

## Out of Scope

| Feature | Reason |
| --- | --- |
| Alterar o H1 de `/planos-e-precos/` e os H1 de CRM urbano, rural e temporada | Seguem o Figma aprovado; o H1 de CRM urbano já contém "imobiliário urbano" e o de temporada "imóveis para temporada". A palavra-chave de CRM rural fica no Title, na Description e nos H2; mudar o H1 exige aprovação de copy |
| JSON-LD / dados estruturados, `og:image`, `twitter:card`, `og:type`, `og:site_name` | Recomendados na auditoria como melhoria de prioridade média, fora desta etapa |
| Nova lógica de SEO para o domínio de auditoria `subseenovo.pages.dev` além da já existente | O preview da Cloudflare Pages é tratado como indexável e aponta para o próprio domínio (ver "Domínio por ambiente" nas premissas) |
| Alterar o robots de ambientes que não são de produção | Fora de produção o site continua `noindex, nofollow` em todas as páginas, com `robots.txt` `Disallow: /` e sitemap 404; é proteção de ambiente, não classificação de página |

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Padrão de Title | palavra-chave primeiro e marca por último ("… | SUBSEE" ou "… | SUBSEE on") | Prioriza a intenção de busca e o CTR; cada título é específico da página | y — aprovado pelo usuário em 2026-10-04 |
| `<meta name="keywords">` | usar, com 3–6 termos específicos por página, apenas nas páginas `index` | Decisão do usuário, mesmo sabendo que o Google não a usa para ranking | y — decisão do usuário |
| Fonte dos metadados | `useSeoMeta` em cada página (`title`, `description`, `keywords`, `ogTitle`, `ogDescription`) | Mantém o padrão atual do projeto, sem novo componente | y |
| H1 de Loteadoras | o selo "breve" passa a ser desenhado por `::after` (`content-['breve']`) e sai do texto do `<h1>` | Remove "breve" do H1 sem mudar o visual | y |
| Formulários `noindex, follow` | `/testar-gratis/` e `/agendar-demonstracao/` entram em `noindexPaths` (`app/data/seo.ts`), junto com `/inscreva-se/` e as 3 páginas `/obrigado/`; saem do sitemap automaticamente | Decisão do usuário em 2026-10-04, revertendo a recomendação de indexar essas duas páginas | y — decisão do usuário |
| Robots da 404 | `noindex, follow` em `app/plugins/seo.ts` (antes `noindex, nofollow`) | Decisão do usuário | y |
| Preço na description de Planos | "R$ 450/mês + opcionais", exatamente como na página | Não afirmar "a partir de" sem confirmação | y |
| Domínio por ambiente | `runtimeConfig.public.siteUrl` em `nuxt.config.ts`: `NUXT_PUBLIC_SITE_URL` explícita; sem ela, build da Cloudflare Pages na branch `master` usa `https://subseenovo.pages.dev`; qualquer outro caso usa `http://localhost:3000` | Preview e produção se diferenciam só pelo ambiente, sem duplicar SEO por página | y — decisão do usuário |
| Produção definitiva | `https://subsee.com.br`, definida por `NUXT_PUBLIC_SITE_URL=https://subsee.com.br` no ambiente de produção | Canonical, `og:url`, `robots.txt` (`Sitemap:`) e `sitemap.xml` passam a apontar para `subsee.com.br` | y |
| Preview Cloudflare Pages | `https://subseenovo.pages.dev` quando `NUXT_PUBLIC_SITE_URL` não está definida | Permite auditar o novo site (Semrush) sem apontar o canonical para o site antigo; `robots.txt` `Allow: /`, sitemap e canonical em `subseenovo.pages.dev` | y |
| `formsEndpoint` | continua `https://forms.sub100.com.br/sub100sistemas/formularios.php` | Não faz parte da diferenciação de ambiente | y |
| `alt` e `title` das imagens | toda `<img>` (incluindo decorativas e a `<img>` interna de `NuxtPicture`) tem `alt` e `title` preenchidos, sem valor vazio ou `/` | Decisão do usuário; textos centralizados em `app/utils/imageLabels.ts` | y |
| `title` e `aria-label` dos links | todo `<a>`/`<NuxtLink>` tem `title` e `aria-label` preenchidos, com o mesmo texto descritivo | Decisão do usuário; textos centralizados em `app/utils/linkTitles.ts` | y |

**Open questions**: none — as decisões acima foram confirmadas pelo usuário em 2026-10-04.

---

## User Stories

### P1: Buscadores e visitantes entendem cada página pelo Title, pela Description e pelas keywords ⭐ MVP

**User Story**: Como visitante vindo de uma busca, quero ver Title e Description específicos da página, para escolher o resultado certo.

**Acceptance Criteria**:

1. WHEN uma página de conteúdo ou de formulário revisada é renderizada THEN o sistema SHALL emitir um `<title>` único de 48 a 60 caracteres, uma `<meta name="description">` única de 120 a 155 caracteres e `og:title`/`og:description` iguais a eles.
2. WHEN uma página de conteúdo ou de formulário revisada é renderizada THEN o sistema SHALL emitir `<meta name="keywords">` com 3 a 6 termos, diferente da lista de qualquer outra página.
3. WHEN as 15 páginas `index, follow` são comparadas THEN o sistema SHALL não ter nenhum title, description, keywords ou H1 repetido entre elas.

### P2: Indexação coerente

**User Story**: Como equipe de SEO, quero que robots, canonical e sitemap estejam coerentes, para o Google indexar só o que importa.

**Acceptance Criteria**:

1. WHEN uma página `index` é renderizada com a URL de produção THEN o sistema SHALL emitir `robots` `index, follow`, canonical `https://subsee.com.br/<rota>/` e incluí-la no sitemap.
2. WHEN `/testar-gratis/`, `/agendar-demonstracao/`, `/inscreva-se/` ou uma página `/obrigado/` é renderizada com a URL de produção THEN o sistema SHALL emitir `noindex, follow`, não emitir canonical e não incluí-la no sitemap.
3. WHEN a rota não existe THEN o sistema SHALL responder HTTP 404, emitir `noindex, follow` (e não `nofollow`) após a hidratação e não incluí-la no sitemap.
4. WHEN `/` , `/planos-e-precos/`, `/eventos/`, `/assista-os-videos-do-subsee-on/`, qualquer `/modulos/*` ou `/lgpd/*` é renderizada com a URL de produção THEN o sistema SHALL emitir `index, follow` e nunca `noindex`.
5. WHEN `/modulos/site-para-loteadoras/` é renderizada THEN o sistema SHALL emitir um `<h1>` sem o texto do selo "breve", mantendo o selo visível.

## Edge Cases

- WHEN o site não é o de produção nem o preview `subseenovo.pages.dev` (por exemplo, local) THEN o plugin SHALL manter `noindex, nofollow` e o sitemap SHALL responder 404, como antes.
- WHEN o build usa `https://subseenovo.pages.dev` THEN canonical, `og:url`, `Sitemap:` do `robots.txt` e `sitemap.xml` SHALL apontar para `https://subseenovo.pages.dev`.
- IF o texto de uma description contém aspas simples THEN o sistema SHALL escapá-las no código-fonte.

---

## Requirement Traceability

| Requirement ID | Story | Task | Status |
| --- | --- | --- | --- |
| SEO-01 | P1 AC1 | Implementação direta | Verified |
| SEO-02 | P1 AC2 | Implementação direta | Verified |
| SEO-03 | P1 AC3 | Implementação direta | Verified |
| SEO-04 | P2 AC1 | Implementação direta | Verified |
| SEO-05 | P2 AC2 | Implementação direta | Verified |
| SEO-06 | P2 AC3 | Implementação direta | Verified |
| SEO-07 | P2 AC5 | Implementação direta | Verified |
| SEO-08 | P2 AC4 | Implementação direta | Verified |

## Success Criteria

- [x] As 15 páginas `index, follow` e as 2 páginas de formulário com conteúdo renderizam Title, Description e keywords conforme a tabela abaixo, sem duplicidades.
- [x] `pnpm build` termina sem erros.

## Metadados finais por página (fonte da implementação)

As linhas `/testar-gratis/` e `/agendar-demonstracao/` mantêm os metadados revisados, mas ficam `noindex, follow` e fora do sitemap.

| Rota | Palavra-chave principal | Title | Description | Keywords |
| --- | --- | --- | --- | --- |
| `/` | CRM imobiliário | CRM Imobiliário para Imobiliárias e Corretores | SUBSEE | Gerencie imóveis, leads e negociações em um CRM imobiliário completo, com site, integrações e automações para imobiliárias e corretores. | CRM imobiliário, software imobiliário, sistema para imobiliárias, gestão imobiliária |
| `/planos-e-precos/` | preço do CRM imobiliário | Preço do CRM Imobiliário: Planos Urbano e Rural | SUBSEE | Veja o preço do CRM imobiliário SUBSEE: planos Urbano e Rural por R$ 450/mês + opcionais, com funcionalidades incluídas. Teste grátis por 30 dias. | preço CRM imobiliário, planos CRM imobiliário, valor CRM para imobiliárias, CRM urbano e rural |
| `/eventos/` | eventos online para imobiliárias | Eventos e Webinars para Imobiliárias | SUBSEE on | Participe de lives e eventos online sobre o SUBSEE on, tire dúvidas ao vivo e assista aos replays para tirar mais resultado do seu CRM imobiliário. | eventos online para imobiliárias, webinar imobiliário, replays SUBSEE on, treinamento CRM imobiliário |
| `/assista-os-videos-do-subsee-on/` | vídeos do CRM imobiliário | Vídeos do CRM Imobiliário SUBSEE on: Veja na Prática | Assista a vídeos curtos do SUBSEE on e veja na prática como organizar imóveis, centralizar leads e acompanhar a equipe no CRM imobiliário. | vídeos CRM imobiliário, SUBSEE on em vídeo, software imobiliário na prática |
| `/testar-gratis/` | teste grátis CRM imobiliário | Teste Grátis do CRM Imobiliário por 30 Dias | SUBSEE | Teste grátis por 30 dias o CRM imobiliário SUBSEE e veja na prática como organizar imóveis, leads e negociações da sua imobiliária. | teste grátis CRM imobiliário, CRM imobiliário grátis, teste SUBSEE 30 dias |
| `/agendar-demonstracao/` | demonstração CRM imobiliário | Agende uma Demonstração do CRM Imobiliário | SUBSEE | Agende uma demonstração do SUBSEE e veja como o CRM imobiliário organiza atendimento, leads e vendas da sua imobiliária, do lead à assinatura. | demonstração CRM imobiliário, agendar demonstração SUBSEE, apresentação do CRM |
| `/modulos/crm/` | CRM para imobiliárias | CRM para Imobiliárias: Funil, Leads e Propostas | SUBSEE | Controle atendimentos, leads, agenda, propostas e negociações em um só CRM para imobiliárias e aumente a produtividade do seu time de vendas. | CRM para imobiliárias, funil de vendas imobiliário, gestão de leads imobiliários, propostas imobiliárias |
| `/modulos/crm-imobiliario-urbano/` | CRM imobiliário urbano | CRM Imobiliário Urbano para Vendas e Locação | SUBSEE | CRM imobiliário urbano com funil Kanban, distribuição automática de leads, metas em tempo real e publicação nos principais portais imobiliários. | CRM imobiliário urbano, CRM para vendas e locação, funil Kanban imobiliário, distribuição de leads |
| `/modulos/crm-imobiliario-rural/` | CRM imobiliário rural | CRM Imobiliário Rural para Fazendas e Terras | SUBSEE | CRM imobiliário rural para fazendas, sítios e terras: dados técnicos da propriedade, negociações até o contrato e anúncios no Brasil e no exterior. | CRM imobiliário rural, CRM para fazendas, software imobiliário rural, imóveis rurais |
| `/modulos/crm-imobiliario-temporada/` | sistema para aluguel por temporada | Sistema para Aluguel por Temporada com CRM | SUBSEE on | Sistema para aluguel por temporada com calendário de reservas, repasses automáticos e comunicação com hóspedes. Teste grátis por 30 dias. | sistema para aluguel por temporada, CRM para temporada, gestão de reservas, calendário de reservas, imóveis de temporada |
| `/modulos/site-para-imobiliarias-urbanas/` | site para imobiliárias urbanas | Site para Imobiliárias Urbanas com Portais | SUBSEE | Site para imobiliárias urbanas com fichas completas de imóveis, tradução automática e integração com o CRM e com os principais portais. | site para imobiliárias, site imobiliário urbano, site integrado a portais, site com CRM |
| `/modulos/site-para-imobiliarias-rurais/` | site para imobiliária rural | Site para Imobiliárias Rurais: Fazendas e Sítios | SUBSEE | Site para imobiliárias rurais para divulgar fazendas, sítios e chácaras com dados georreferenciados, tradução automática e alcance na América do Sul. | site para imobiliária rural, site para vender fazendas, anúncio de imóveis rurais, site imobiliário rural |
| `/modulos/site-para-loteadoras/` | site para loteadoras | Site para Loteadoras: Lotes e Lançamentos | SUBSEE | Site para loteadoras que apresenta lotes e lançamentos de forma completa, com integração ao CRM SUBSEE e ao Sistema SGL. Em breve. | site para loteadoras, site de loteamento, site para lançamento de lotes, Sistema SGL |
| `/modulos/apis-hub-integrador/` | API para integração imobiliária | API e Hub de Integração para Imobiliárias | SUBSEE on | Integre o CRM aos portais imobiliários, WhatsApp, redes sociais e Meta Ads por API e Hub, centralizando leads, imóveis e atendimentos. | API imobiliária, integração com portais imobiliários, hub de integração, integração WhatsApp CRM |
| `/modulos/base-de-conhecimento/` | base de conhecimento SUBSEE | Base de Conhecimento SUBSEE on: Tutoriais e Treinamentos | Central de ajuda do SUBSEE on com vídeos, tutoriais e treinamentos para sua equipe aprender a usar o CRM imobiliário com mais autonomia. | base de conhecimento SUBSEE, central de ajuda SUBSEE, tutoriais CRM imobiliário, treinamento SUBSEE |
| `/lgpd/politica-de-privacidade/` | política de privacidade SUBSEE | Política de Privacidade e Proteção de Dados (LGPD) | SUBSEE | Saiba como a SUB100 coleta, usa e protege seus dados pessoais, em conformidade com a LGPD: cookies, segurança e direitos do titular. | política de privacidade SUBSEE, LGPD, proteção de dados SUB100 |
| `/lgpd/termos-de-uso/` | termos de uso SUBSEE | Termos de Uso e Condições Gerais dos Sites | SUBSEE | Leia os termos de uso dos sites da SUB100 Sistemas: definições, responsabilidades, cadastro, armazenamento, segurança, consentimento e foro. | termos de uso SUBSEE, termos de uso SUB100, condições de uso dos sites |
