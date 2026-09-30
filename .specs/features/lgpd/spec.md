# LGPD: Termos de Uso e Política de Privacidade (`/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/`) Specification

## Problem Statement

O site liga a "Termos de uso" e "Política de privacidade" em três lugares (rodapé, menu mobile do `HeaderBar.vue` e o checkbox de aceite dos formulários), mas **não existe nenhuma página para essas rotas em `app/pages/`**. O `pnpm generate` já registra 404 para elas ([[AD-016]]) e a feature de formulários deixou a dúvida aberta (Q27, `.specs/features/formularios/spec.md`). O Figma (arquivo `vX7qKnnXSOW8zv4kAuS2eN`) traz as duas páginas prontas: seção "Termos de uso" (`1057:3434`) e seção "Política de privacidade" (`1211:1825`). Esta feature cria as duas páginas sob o prefixo `/lgpd/` e alinha todos os links internos às novas rotas.

As duas páginas têm a mesma anatomia (hero centrado com fundo cinza curvo, cartões brancos empilhados, com título roxo, divisor e texto) e **textos diferentes**. O texto é jurídico: é copiado literalmente do Figma, sem edição, sem correção de português e sem acréscimo.

## Goals

- [ ] `/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/` respondem 200 e renderizam, entre o Header e o Footer globais, o Hero e a lista de cartões do respectivo frame do Figma, na ordem do Figma.
- [ ] Todo texto vem do Figma, palavra por palavra, e é conferido por comparação de texto (diff) contra os nodes listados abaixo. Nenhum texto jurídico é escrito ou reescrito por nós.
- [ ] Estrutura, tokens e componentes visuais compartilhados existem uma vez só; só o conteúdo (dados) muda entre as duas páginas.
- [ ] Todo link interno para termos e privacidade do projeto aponta para as novas rotas, com a mesma grafia (barra final) em todos os pontos.
- [ ] Nenhum overflow horizontal nos 7 breakpoints do projeto e exatamente um `<h1>` por página.

## Out of Scope

| Feature | Razão |
| --- | --- |
| Escrever, revisar ou "corrigir" texto jurídico (inclusive erros de digitação do Figma) | Decisão do usuário: não inventar conteúdo jurídico. O texto do Figma vale como está |
| Data de vigência, "última atualização", versão do documento | Não existe no Figma |
| Banner de cookies / consentimento | Não existe no Figma; o texto de "Cookies" é só informativo |
| Alterar os formulários, o checkbox ou `app/data/forms.ts` | Já apontam para as rotas novas (ver Links) |
| Redirecionamento 301 das URLs antigas | Decisão do usuário (Q2): não criar por enquanto. As rotas antigas não existem no projeto; os links que apontam para elas só são substituídos |
| Novo item de menu no Header | O Figma usa a instância global do Header e do Footer, sem item novo |
| Backend, persistência, aceite gravado do usuário | Sem backend neste site ([[AD-001]]) |
| Test runner | Infraestrutura cross-cutting ([[AD-002]]) |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Rotas novas | `app/pages/lgpd/termos-de-uso.vue` e `app/pages/lgpd/politica-de-privacidade.vue`; grafia oficial das URLs com barra final (`/lgpd/termos-de-uso/`) em todos os pontos | Pedido do usuário (Q3 confirmada); `pnpm generate` gera `lgpd/termos-de-uso/index.html` | y |
| Páginas "atuais" `/termos-de-uso/` e `/politica-de-privacidade/` | **Não existem neste repositório.** Só existem links para elas em `TheFooter.vue:74-75`. Não há o que migrar, só links a corrigir. As páginas novas já existem em produção nas rotas `/lgpd/...` e o conteúdo oficial é o do Figma | `app/pages/` não tem as rotas; o log do generate registra 404 para elas; Q1 confirmada pelo usuário | y |
| Prefixo dos componentes | `Legal*` para layout genérico e `Lgpd*` para as `sections` das duas páginas | [[AD-004]]: prefixo por página, `pathPrefix: false`; nenhum componente `Legal*`/`Lgpd*` existe hoje | y |
| Fonte do texto | Texto dos nodes de conteúdo do Figma, copiado verbatim para `app/data/` na implementação | Regra "nunca inventar conteúdo" do `CLAUDE.md` | y |
| Fonte da estrutura | Figma. O Hero é um `layout/LegalHero.vue` novo: a base da feature é `master`, onde `FormPageHero.vue` (só existe em `feature/formularios`, não integrada) ainda não existe | Fluxo Figma-to-code do `CLAUDE.md`: Figma manda no visual; branch `feature/lgpd` criada de `master` por decisão do usuário | y |
| Conteúdo dos cartões | Array tipado por página, um `v-for` por cartão; cartão e subcartão são componentes únicos | Padrão de dados do `CLAUDE.md` | y |
| Frames abaixo de 1920px | Não existem no Figma. O layout segue o sistema responsivo do projeto (`container-page`, breakpoints do `main.css`) | Mesma situação das demais páginas | y |
| Altura dos cartões e texto jurídico | Altura pelo conteúdo real; nenhum trecho é cortado ou escondido, nem com `overflow: hidden`, mesmo onde o Figma usa altura fixa (USO DO SITE, ARMAZENAMENTO E SEGURANÇA e FORO nos Termos) | Decisão do usuário, Lote 2: manter o texto jurídico completo | y |
| Semântica | 1 `<h1>` (título do Hero), `<h2>` nos títulos de cartão, `<h3>` nos subcartões | Acessibilidade e SEO; o Figma só define o visual | y |

**Decisões do usuário (Etapa 1 aprovada)**: Q1 confirmada (conteúdo oficial é o do Figma; as páginas novas já existem em produção); Q2 sem redirecionamento 301 por enquanto; Q3 todas as URLs novas com barra final; Q4 e-mail e endereços de site como texto puro, igual ao Figma; Q6 reproduzir textos e inconsistências exatamente como no Figma, sem corrigir texto jurídico.

**Open questions** (só a Q5 permanece; não bloqueia a estrutura das páginas):

- **Q5.** Título e descrição SEO (`useSeoMeta`) das duas páginas. O Figma não traz e não será inventado. Fica documentada como questão a definir antes da implementação final; até lá as páginas não têm `useSeoMeta` próprio (LGPD-09, bloqueado).

---

## User Stories

### P1: Visitante abre os Termos de Uso ⭐ MVP

**User Story**: Como visitante ou anunciante, quero ler os Termos de Uso da SUB100 numa página legível, para saber as condições de uso dos sites e produtos.

**Why P1**: É a página de destino do link "Termos de uso" do rodapé, do menu mobile e do checkbox dos formulários.

**Acceptance Criteria**:

1. WHEN o visitante acessa `/lgpd/termos-de-uso/` THEN o sistema SHALL responder 200 e renderizar, entre o Header e o Footer globais, o Hero (node `1182:1656`) e a lista de cartões (node `3220:6556`).
2. WHEN a página é renderizada THEN o sistema SHALL exibir o Hero com o H1 "Termos de Uso", o subtítulo "Transparência e compromisso com você" e a descrição "Conheça as diretrizes que garantem a **segurança**, a **privacidade** e a **confiança** na utilização dos nossos serviços e plataformas.", com as três palavras em negrito na cor `#5d5fef`.
3. WHEN a página é renderizada THEN o sistema SHALL exibir, na ordem do Figma, os 9 cartões: BOAS-VINDAS, DEFINIÇÕES (com 7 subcartões: USUÁRIO, ANUNCIANTE, VOCÊ, SUB100 SISTEMAS LTDA, PORTAL DE IMÓVEIS SUB100, SUBSEE ON, SISTEMA SGL), RESPONSABILIDADES, CADASTRO, USO DO SITE, ARMAZENAMENTO E SEGURANÇA, CONSENTIMENTO, CANAL DE DÚVIDAS e FORO.
4. WHEN os textos dos cartões são comparados com os nodes do Figma THEN o sistema SHALL apresentar 0 diferenças de texto (mesmas palavras, mesma pontuação, mesmas quebras de parágrafo e as mesmas listas "(I)" a "(VII)").
5. The sistema SHALL renderizar exatamente um `<h1>` na página.

**Independent Test**: Abrir `/lgpd/termos-de-uso/` a 1920px e comparar com o screenshot do node `1057:3435`; rodar o diff de texto contra os nodes de conteúdo.

---

### P1: Visitante abre a Política de Privacidade ⭐ MVP

**User Story**: Como visitante ou anunciante, quero ler a Política de Privacidade da SUB100, para saber como meus dados são coletados, usados e protegidos.

**Why P1**: É a segunda página de destino dos mesmos links legais e a base do aceite dos formulários.

**Acceptance Criteria**:

1. WHEN o visitante acessa `/lgpd/politica-de-privacidade/` THEN o sistema SHALL responder 200 e renderizar, entre o Header e o Footer globais, o Hero (node `1211:1892`), a decoração de elipse (node `1211:1834`) e a lista de cartões (node `1211:1835`).
2. WHEN a página é renderizada THEN o sistema SHALL exibir o Hero com o H1 "Política de Privacidade", o subtítulo "Seu direito à proteção de dados é nossa prioridade" e a descrição "Saiba como a **SUB100** coleta, utiliza e protege suas informações pessoais em conformidade com a **LGPD**.", com "SUB100" e "LGPD" em negrito na cor `#5d5fef`.
3. WHEN a página é renderizada THEN o sistema SHALL exibir, na ordem do Figma, os 11 cartões: CONSIDERANDO QUE, 1. RESTRIÇÃO PARA MENORES, 2. FORNECIMENTO DE DADOS, 3. USUÁRIOS E ANUNCIANTES (com 4 subcartões: 3.1. COLETA DE INFORMAÇÕES, 3.2. OS DADOS USUÁRIOS, 3.3. COMPARTILHAMENTO DAS INFORMAÇÕES, 3.4. LIMITAÇÃO DE RESPONSABILIDADE), 4. COOKIES, 5. SEGURANÇA, 6. DIREITOS DO TITULAR, 7. TÉRMINO DO TRATAMENTO, 8. ALTERAÇÃO NA POLÍTICA DE PRIVACIDADE, 9. CONTATO e 10. FORO.
4. WHEN os textos dos cartões são comparados com os nodes do Figma THEN o sistema SHALL apresentar 0 diferenças de texto (inclui o texto do cartão CONSIDERANDO QUE com os itens "(I)" a "(III)" e a lista "a)" a "e)").
5. The sistema SHALL renderizar exatamente um `<h1>` na página.

**Independent Test**: Abrir `/lgpd/politica-de-privacidade/` a 1920px e comparar com o screenshot do node `1211:1826`; rodar o diff de texto contra os nodes de conteúdo.

---

### P1: Estrutura visual compartilhada ⭐ MVP

**User Story**: Como mantenedor do site, quero que as duas páginas usem os mesmos componentes visuais, para que uma mudança de estilo valha para as duas.

**Why P1**: As páginas só diferem em dados; duplicar markup violaria o padrão de componentização do `CLAUDE.md`.

**Acceptance Criteria**:

1. WHEN o Hero de qualquer das duas páginas é renderizado a 1920px THEN o sistema SHALL usar o fundo cinza curvo do Figma (node `1182:1666` / `1211:1828`, 1920×603), H1 em Poppins Bold 40px `#313846`, subtítulo em Poppins Medium 26px `#313846` com `line-height` 1,4 e descrição em Poppins Regular 20px `#6b7280` com `line-height` 1,6, tudo centralizado.
2. WHEN um cartão de seção é renderizado THEN o sistema SHALL exibir fundo branco, borda `#e5e7eb` de 1px, raio de 16px, padding 40px horizontal e 36px vertical, largura de 992px a 1920px, título centralizado em Poppins SemiBold 26px `#5d5fef`, divisor de 1px `#e5e7eb` e texto em Poppins Regular 18px `#4b5563` com `line-height` 1,7; os cartões ficam separados por 48px.
3. WHEN um subcartão é renderizado THEN o sistema SHALL exibir fundo `#f9fafb`, padding 24px horizontal e 20px vertical, rótulo em Poppins SemiBold 15px `#313846` e texto em Poppins Regular 18px `#4b5563` com `line-height` 1,7, separados por 8px.
4. The sistema SHALL definir cartão, subcartão e Hero uma única vez (componentes compartilhados) e alimentar cada página por um array tipado de dados, com um `v-for` sobre um único template de cartão.
5. WHEN um cartão tem altura fixa no Figma (por exemplo 436px, 355px, 194px) THEN o sistema SHALL usar altura pelo conteúdo, sem `overflow` cortando o texto.

**Independent Test**: Trocar um token (por exemplo o raio do cartão) em um único arquivo e conferir a mudança nas duas páginas.

---

### P1: Links internos apontam para as novas rotas ⭐ MVP

**User Story**: Como visitante, quero que todo link de termos e privacidade leve à página certa, para não cair em 404.

**Why P1**: Hoje o rodapé leva a rotas inexistentes (404).

**Acceptance Criteria**:

1. WHEN o visitante clica em "Termos de uso" ou "Política de privacidade" no rodapé (`TheFooter.vue:74-75`) THEN o sistema SHALL navegar para `/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/`.
2. WHEN o visitante abre o menu mobile do `HeaderBar.vue` (linhas 401-402) THEN o sistema SHALL apontar os dois links para `/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/`, com a mesma grafia (barra final).
3. WHERE a branch `feature/formularios` for integrada, o checkbox de aceite dos formulários SHALL continuar apontando para `/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/` (`app/data/forms.ts:36-37` nessa branch); esta feature não altera `forms.ts` nem `FormLeadFields.vue` (não existem em `master`).
4. The sistema SHALL não conter, em `app/`, nenhuma referência às rotas antigas `/termos-de-uso` e `/politica-de-privacidade` (busca textual retorna 0 ocorrências fora de `/lgpd/`).
5. WHEN `pnpm generate` é executado THEN o sistema SHALL gerar `lgpd/termos-de-uso/index.html` e `lgpd/politica-de-privacidade/index.html` e o log SHALL deixar de listar `/termos-de-uso`, `/politica-de-privacidade` e `/lgpd/termos-de-uso/` como 404.

**Independent Test**: `grep` por `termos-de-uso` e `politica-de-privacidade` em `app/`; `pnpm generate` e conferência dos dois `index.html` e do log.

---

### P3: Responsividade e SEO

**User Story**: Como visitante em qualquer dispositivo ou vindo de um buscador, quero a página legível e com título correto.

**Why P3**: Necessário para entregar, mas sem frame de referência no Figma além de 1920px.

**Acceptance Criteria**:

1. WHEN a viewport é 1920, 1440, 1280, 1024, 768, 576 ou 375px THEN o sistema SHALL renderizar as duas páginas sem overflow horizontal (`scrollWidth <= innerWidth`) e sem erros de console.
2. WHEN a viewport é menor que 992px THEN o sistema SHALL reduzir os cartões à largura disponível com recuo lateral do `container-page`, com texto legível (mínimo 16px) e sem quebrar palavras longas (endereços de site e e-mail) para fora do cartão.
3. IF o texto SEO das páginas não estiver definido (Q5) THEN o sistema SHALL ficar sem `useSeoMeta` próprio até a decisão, sem texto inventado.

**Independent Test**: Varrer as 7 larguras nas duas páginas e conferir `scrollWidth <= innerWidth`.

---

## Diferenças e inconsistências do Figma

### Compartilhado (igual nas duas páginas)

| Aspecto | Valor |
| --- | --- |
| Header e Footer | Instâncias globais (`1057:3438`/`1057:3436`; `1211:1896`/`1211:1827`), sem variação |
| Fundo do Hero | Frame "Background" 1920×603 com forma cinza `#F5F5F5`, retângulo esmaecido e divisor de duas ondas (`1182:1666`, `1211:1828`) |
| H1 | Poppins Bold 40px `#313846`, centralizado |
| Subtítulo | Poppins Medium 26px, `line-height` 1,4, `#313846` |
| Descrição | Poppins Regular 20px, `line-height` 1,6, `#6b7280`; palavras-chave em `#5d5fef` |
| Bloco de conteúdo | Coluna de 992px, centralizada, cartões separados por 48px |
| Cartão | ver LGPD acima (tokens do AC 2) |
| Subcartão | ver AC 3 |

### Específico de cada página

| Aspecto | Termos de Uso (`1057:3434`) | Política de Privacidade (`1211:1825`) |
| --- | --- | --- |
| Frame de página | `1057:3435`, 1920×6409 | `1211:1826`, 1920×5666 |
| H1 | "Termos de Uso" | "Política de Privacidade" |
| Subtítulo | "Transparência e compromisso com você" | "Seu direito à proteção de dados é nossa prioridade" |
| Descrição | "Conheça as diretrizes que garantem a segurança, a privacidade e a confiança na utilização dos nossos serviços e plataformas." (3 palavras em roxo semibold) | "Saiba como a SUB100 coleta, utiliza e protege suas informações pessoais em conformidade com a LGPD." (2 palavras em roxo bold) |
| Largura da descrição | 661px | 650px |
| Hero: posição | y=156, altura 319; H1 em y=60 do frame, gap de 18px entre H1, subtítulo e descrição | y=82, altura 361; H1 em y=74, subtítulo em y=144 (10px abaixo do H1), descrição em y=206 (26px abaixo do subtítulo) |
| Início dos cartões | y=465 (bloco em y=425 + 40px de padding), sobrepõe o Hero em 10px | y=394 (sem padding), sobrepõe o Hero em 49px |
| Decoração | Nenhuma | Elipse branca desfocada, opacidade 0,7, 1760×372 em x=90 y=326 (node `1211:1834`) |
| Cartões | 9 (BOAS-VINDAS, DEFINIÇÕES, RESPONSABILIDADES, CADASTRO, USO DO SITE, ARMAZENAMENTO E SEGURANÇA, CONSENTIMENTO, CANAL DE DÚVIDAS, FORO) | 11 (CONSIDERANDO QUE, 1 a 10, numerados) |
| Numeração dos títulos | Sem número | "1." a "10." |
| Subcartões | 7 dentro de DEFINIÇÕES, raio 18px | 4 dentro de "3. USUÁRIOS E ANUNCIANTES", raio 12px e numerados "3.1." a "3.4." |
| Listas no texto | "(I)" a "(VII)" em CADASTRO, com quebra de linha por item | "(I)" a "(III)" e "a)" a "e)" em CONSIDERANDO QUE; "a)" e "b)" em 3.1 |
| Tamanho do primeiro texto | BOAS-VINDAS em 16px (os demais em 18px) | CONSIDERANDO QUE em 18px |
| Contato | "privacidade@sub100.com.br" em CANAL DE DÚVIDAS | "privacidade@sub100.com.br" em 9. CONTATO |
| Foro | "Foro Central da Comarca de Maringá - PR ... destes Termos de Uso" | "Foro Central da Comarca de Maringá - PR, ... desta Política de Privacidade" |

### Inconsistências dentro do Figma (decisão Q6: replicar como estão)

1. **Tamanho do texto**: o cartão BOAS-VINDAS dos Termos usa 16px, e todos os outros cartões das duas páginas usam 18px.
2. **Nome da camada**: o cartão `1211:1671` se chama "RESPONSABILIDADES" mas o título desenhado é "CADASTRO". Vale o texto desenhado.
3. **Alturas fixas** em três cartões dos Termos (USO DO SITE 436px, ARMAZENAMENTO E SEGURANÇA 355px e FORO 194px) com `overflow-clip`; na implementação a altura sai do conteúdo.
4. **Raio dos subcartões** 18px (Termos) contra 12px (Política).
5. **Espaçamento vertical do Hero** e **início dos cartões** diferentes entre as duas páginas (tabela acima).
6. **Erros no texto do Figma**, mantidos como estão por regra: "Como compartilharmos" (política, item c da lista), "sistema operacionais" (política, 3.1 b)). São os dois que identifiquei na leitura; a lista completa sai do diff de texto na implementação. Nenhum é corrigido sem ordem expressa.

---

## Links internos encontrados

| Arquivo | Linha | Link hoje | Situação | Ação prevista |
| --- | --- | --- | --- | --- |
| `app/components/layout/TheFooter.vue` | 74 | `/termos-de-uso` | Rota antiga, sem página (404) | Trocar para `/lgpd/termos-de-uso/` |
| `app/components/layout/TheFooter.vue` | 75 | `/politica-de-privacidade` | Rota antiga, sem página (404) | Trocar para `/lgpd/politica-de-privacidade/` |
| `app/components/layout/HeaderBar.vue` | 401 | `/lgpd/termos-de-uso/` | Já é a rota nova | Nenhuma |
| `app/components/layout/HeaderBar.vue` | 402 | `/lgpd/politica-de-privacidade` | Rota nova **sem** barra final | Padronizar com barra final (Q3) |
| `app/data/forms.ts` (só em `feature/formularios`) | 36-37 | `/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/` | Já são as rotas novas; arquivo não existe em `master` | Nenhuma |
| `app/components/sections/FormLeadFields.vue` (só em `feature/formularios`) | 154-157 | usa `formTermsLinks` (`forms.ts`), `target="_blank"` | Consome `forms.ts`; não existe em `master` | Nenhuma |

Referências só em documentação (não são links do site): `.specs/features/formularios/{spec,design,tasks}.md` (Q27, D7) e `FIGMA_CONTENT_MANIFEST_FORMULARIOS.md`; `qa-report.md` da feature de vídeos (404 do generate); `crm-imobiliario-urbano/tasks.md:434`. Na implementação, a Q27 da feature de formulários passa a ter resposta.

---

## Edge Cases

- WHEN uma linha do texto tem endereço longo sem espaço (por exemplo `https://www.sub100sistemas.com.br/`) THEN o sistema SHALL quebrar dentro do cartão (`overflow-wrap`), sem overflow horizontal.
- WHEN o texto do Figma tem parágrafo vazio entre blocos THEN o sistema SHALL reproduzir a separação como espaçamento entre parágrafos, sem parágrafos vazios no HTML.
- WHEN o texto tem lista "(I)", "(II)" ou "a)", "b)" com quebra de linha THEN o sistema SHALL manter cada item em sua linha.
- IF uma das duas páginas ficar sem dados de um cartão THEN o sistema SHALL não renderizar cartão vazio.
- WHEN o usuário chega pelo checkbox dos formulários (`target="_blank"`) THEN o sistema SHALL abrir a página legal em nova aba, sem perder o formulário.

---

## Requirement Traceability

| ID | Story | Phase | Status |
| --- | --- | --- | --- |
| LGPD-01 | P1: Rota e página de Termos de Uso | Design | Specified |
| LGPD-02 | P1: Rota e página de Política de Privacidade | Design | Specified |
| LGPD-03 | P1: Hero compartilhado (tokens e fundo) | Design | Specified |
| LGPD-04 | P1: Cartão e subcartão compartilhados | Design | Specified |
| LGPD-05 | P1: Conteúdo dos Termos (9 cartões, texto verbatim) | Design | Specified |
| LGPD-06 | P1: Conteúdo da Política (11 cartões, texto verbatim) | Design | Specified |
| LGPD-07 | P1: Links internos para as novas rotas | Design | Specified |
| LGPD-08 | P3: Responsividade e ausência de overflow | Design | Specified |
| LGPD-09 | P3: SEO (bloqueado por Q5) | Design | Blocked |

**Coverage:** 9 total, 8 especificados, 1 bloqueado por decisão pendente (LGPD-09 por Q5). Redirecionamento 301 fora de escopo (Q2).

---

## Success Criteria

- [ ] As duas rotas respondem 200 e cada Hero e lista de cartões bate com os screenshots dos nodes `1057:3435` e `1211:1826` a 1920px.
- [ ] Diff de texto contra o Figma com 0 diferenças nas duas páginas.
- [ ] `grep` por `/termos-de-uso` e `/politica-de-privacidade` em `app/` sem ocorrência fora de `/lgpd/`; `pnpm generate` gera os dois `index.html` e o log não lista mais essas rotas como 404.
- [ ] `pnpm build` conclui sem erros; nenhum overflow horizontal em 1920/1440/1280/1024/768/576/375px e zero erros de console.
- [ ] Nenhum texto, URL ou data fora do Figma, exceto o que estiver registrado nas Open Questions com decisão do usuário.
