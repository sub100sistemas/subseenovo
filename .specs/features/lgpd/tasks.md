# LGPD: Termos de Uso e Política de Privacidade Tasks

## Execution Protocol (MANDATORY -- do not skip)

Implement these tasks with the `tlc-spec-driven` skill: **activate it by name and follow its Execute flow and Critical Rules.** Do not search for skill files by filesystem path. The skill is the source of truth for the full flow (per-task cycle, sub-agent delegation, adequacy review, Verifier, discrimination sensor).

**If the skill cannot be activated, STOP and tell the user - do not proceed without it.**

Regras fixas desta feature (decisões do usuário):

- Branch `feature/lgpd`, criada de `master`. Nada de `main`.
- Um commit atômico local por tarefa (Conventional Commits, `check_commit.py` antes). Marcar a tarefa como concluída neste arquivo **antes** do commit e incluir a atualização no mesmo commit.
- Sem push, merge ou deploy. Não tocar em `.claude/scheduled_tasks.lock`.
- Texto jurídico: copiado do Figma palavra por palavra, sem correção, sem acréscimo. Erros de português do Figma ficam.
- Nada de `useSeoMeta` próprio e nada de redirect 301 (Q5 e Q2).
- Sem comentários no código (`CLAUDE.md`).

---

**Spec**: `.specs/features/lgpd/spec.md`
**Design**: `.specs/features/lgpd/design.md`
**Status**: Draft (aguardando aprovação; nenhum código implementado)

---

## Test Coverage Matrix

> Generated from codebase, project guidelines, and spec - confirm before Execute. Guidelines found: `CLAUDE.md` (seção Commands: sem lint e sem test runner; gate é `pnpm build` mais checagem visual/manual da página) e `.specs/STATE.md` ([[AD-002]]: sem test runner). Nenhum arquivo de teste existe no repositório.

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| ---------- | ------------------ | -------------------- | ---------------- | ----------- |
| `layout/` (Legal*) e `sections/` (Lgpd*) | none (sem runner) | Substituído por checagem no navegador: DOM renderizado (tokens, classes, ordem, 1 `<h1>`) e comparação visual com o node do Figma a 1920px | `app/components/{layout,sections}/*.vue` | `pnpm build` + checagem no build de produção |
| Dados de conteúdo (`app/data/lgpd-*.ts`) | none (sem runner) | Diff de texto contra o Figma: 0 diferenças (AC de LGPD-05 e LGPD-06) | `app/data/lgpd-*.ts` | script de diff de texto fora do repositório (`scratchpad`), rodado no navegador contra o build de produção |
| Páginas (`app/pages/lgpd/`) | none (sem runner) | Rota responde 200, 1 `<h1>`, ordem das seções, sem erro de console e sem 4xx | `app/pages/lgpd/*.vue` | build de produção + checagem no navegador |
| Assets (`public/icons/legal-*.svg`) e links | none | Arquivo não vazio, dimensões do Figma, renderiza; `grep` para links | `public/icons/`, `app/components/layout/` | `pnpm build`, `grep` |

## Gate Check Commands

> Generated from codebase - confirm before Execute.

| Gate Level | When to Use | Command |
| ---------- | ----------- | ------- |
| Quick | Após tarefa de dados ou asset (sem UI nova) | `pnpm build` (exit 0) mais o diff de texto ou a conferência do arquivo |
| Full | Após tarefa com componente ou página | `pnpm build` (exit 0), servir o build (`node .output/server/index.mjs` na porta 3100) e conferir no navegador contra o Figma |
| Build | Fim de fase e tarefas de links, docs e varredura | `pnpm build` mais, quando citado, `pnpm generate` e `grep` das rotas antigas |

Node 22.22.0 e pnpm 10.27.0 (`CLAUDE.md`, [[AD-006]]). O `pnpm build` precisa rodar com o servidor de preview parado (senão `.output` fica travado). Exit code lido com `rc=$?`, não pelo pipeline.

---

## Execution Plan

Phases são sequenciais; as tarefas de cada fase executam na ordem numérica.

### Phase 1: Estrutura compartilhada (T1 a T6)

```
T1 → T4
T2 → T4
T3 → T4
T5 → T6
```

### Phase 2: Termos de Uso (T7 a T11)

```
T7 → T9
T8 → T10
T9 → T10
T10 → T11
```

### Phase 3: Política de Privacidade (T12 a T17)

```
T12 → T15
T13 → T14
T14 → T16
T15 → T16
T16 → T17
```

### Phase 4: Links, varredura e entrega (T18 a T22)

```
T18 → T20
T19 → T20
T19 → T21
T20 → T22
```

### Phase 5: Bloqueada por decisão (T23)

```
T23
```

---

## Task Breakdown

### Phase 1: Estrutura compartilhada

### T1: Tipos dos dados legais

**What**: Exportar os tipos `LegalParagraph`, `LegalSubsection` e `LegalSection` do design.
**Where**: `app/data/lgpd-types.ts`
**Depends on**: None
**Reuses**: Modelo de dados do `design.md` (seção Data Models)
**Requirement**: LGPD-04

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [x] Três interfaces exportadas exatamente como no design (`lines: string[]`, `label`, `paragraphs`, `id`, `title`, `subsections`, `bodyClass`)
- [x] Sem comentários; `pnpm build` exit 0

**Tests**: none
**Gate**: build

**Commit**: `feat(lgpd): add the legal content types`

---

### T2: Cartão de seção `LegalCard`

**What**: Shell `layout/` do cartão: título centralizado, divisor e corpo, com classes por prop e slots.
**Where**: `app/components/layout/LegalCard.vue`
**Depends on**: None
**Reuses**: Convenção de `layout/` (props de classe com `withDefaults()`, [[AD-004]]); tokens da spec (LGPD-04)
**Requirement**: LGPD-04

**Tools**:

- MCP: Figma (`get_design_context` do node `1207:976` e `1215:1044`)
- Skill: `figma-design-to-code`

**Done when**:

- [x] Fundo branco, borda 1px `#e5e7eb`, raio 16px, padding 40px horizontal e 36px vertical, gap 24px; título Poppins SemiBold 26px `#5d5fef` centralizado; divisor 1px `#e5e7eb`; corpo Poppins Regular 18px `#4b5563` `leading-[1.7]`
- [x] Título renderizado como `<h2>`; nenhum texto de produto no componente
- [x] Sem altura fixa e com `overflow-wrap: anywhere` no corpo; valores de mobile (padding 20px, título 20px, corpo 16px) atrás dos breakpoints do projeto
- [x] Renderizado num arquivo temporário fora do repositório e conferido contra o node `1215:1044`
- [x] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `feat(layout): add the legal card shell`

---

### T3: Subcartão `LegalSubCard`

**What**: Shell `layout/` do subcartão com rótulo e texto, com raio configurável por prop.
**Where**: `app/components/layout/LegalSubCard.vue`
**Depends on**: None
**Reuses**: Mesmo padrão de props de classe de `LegalCard`
**Requirement**: LGPD-04

**Tools**:

- MCP: Figma (nodes `1207:983` e `1215:1055`)
- Skill: `figma-design-to-code`

**Done when**:

- [x] Fundo `#f9fafb`, padding 24px horizontal e 20px vertical, gap 8px; rótulo Poppins SemiBold 15px `#313846` como `<h3>`; texto Poppins Regular 18px `#4b5563` `leading-[1.7]`
- [x] `radiusClass` com padrão de 18px; um valor de 12px passado por prop produz o raio do Figma da Política
- [x] Rótulo sem quebra forçada e com `overflow-wrap: anywhere` no texto
- [x] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `feat(layout): add the legal sub card shell`

---

### T4: Lista de cartões `LegalSections`

**What**: Shell que recebe `sections: LegalSection[]` e renderiza cartões e subcartões com um único `v-for` por template, com parágrafos e listas (`lines` com `<br>`).
**Where**: `app/components/layout/LegalSections.vue`
**Depends on**: T1, T2, T3
**Reuses**: `LegalCard`, `LegalSubCard`, tipos de T1
**Requirement**: LGPD-04

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [x] Um `v-for` sobre `sections` e um `LegalCard`; um `v-for` sobre `subsections` e um `LegalSubCard`; um `v-for` sobre `paragraphs`
- [x] Coluna de 992px centralizada com gap de 48px entre cartões (24px no mobile); largura total abaixo de 992px, com recuo do `container-page`
- [x] Cada `lines` vira um `<p>` com `<br>` entre as linhas; nenhum `<p>` vazio; `bodyClass` aplicado ao corpo
- [x] Seção sem `paragraphs` nem `subsections` não renderiza cartão vazio (Edge Case da spec)
- [x] Não importa arquivo de `app/data/` (regra do `CLAUDE.md`: `layout/` é agnóstico de conteúdo)
- [x] Verificado com um array de teste temporário fora do repositório: ordem, espaçamento e `<br>`; `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `feat(layout): add the legal sections list`

---

### T5: Asset do fundo do Hero

**What**: Exportar do Figma o SVG do fundo do Hero para `public/icons/`.
**Where**: `public/icons/legal-page-background.svg`
**Depends on**: None
**Reuses**: Node `1182:1666` (Termos) e `1211:1828` (Política); conferir se os dois SVGs são idênticos e, se forem, manter um arquivo só (regra de assets compartilhados do `CLAUDE.md`)
**Requirement**: LGPD-03

**Tools**:

- MCP: Figma (`get_design_context`, download do asset; URLs do MCP expiram em 7 dias)
- Skill: `figma-design-to-code`

**Done when**:

- [x] Arquivo não vazio, com `width="2220" height="753"` e `viewBox` como o exportado; sem edição do SVG
- [x] Comparação dos SVGs dos dois nodes registrada (idênticos ou não); se forem diferentes, a tarefa lista o segundo arquivo e o design é ajustado antes do T6
- [x] Nenhuma cópia por página do mesmo arquivo
- [x] `pnpm build` exit 0

**Tests**: none
**Gate**: quick

**Commit**: `feat(lgpd): add the hero background exported from figma`

---

### T6: Hero `LegalHero`

**What**: Shell `layout/` do Hero: fundo por prop, `container-page`, H1, subtítulo e descrição por slots, com classes por prop.
**Where**: `app/components/layout/LegalHero.vue`
**Depends on**: T5
**Reuses**: `Hero.vue` e padrão de fundo por prop (mesma ideia de `Hero.vue`); asset de T5; `container-page`
**Requirement**: LGPD-03

**Tools**:

- MCP: Figma (nodes `1182:1656` e `1211:1892`)
- Skill: `figma-design-to-code`

**Done when**:

- [x] Fundo cinza curvo do Figma atrás do Header e do Hero (mesma técnica de posicionamento negativo usada nas páginas irmãs), `pointer-events-none`
- [x] H1 Poppins Bold 40px `#313846`, subtítulo Poppins Medium 26px `leading-[1.4]`, descrição Poppins Regular 20px `leading-[1.6]` `#6b7280`, tudo centralizado; tamanhos de mobile menores atrás dos breakpoints
- [x] Posição vertical do H1 e larguras do subtítulo e da descrição vêm por props de classe (as duas páginas diferem)
- [x] Exatamente um `<h1>` no componente; sem texto de produto
- [x] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `feat(layout): add the legal hero shell`

---

### Phase 2: Termos de Uso

### T7: Dados dos Termos de Uso

**What**: Array tipado com os 9 cartões dos Termos, com o texto do Figma palavra por palavra.
**Where**: `app/data/lgpd-termos.ts`
**Depends on**: T1
**Reuses**: Tipos de T1; `get_design_context` do node `3220:6556` (texto e quebras de parágrafo)
**Requirement**: LGPD-05

**Tools**:

- MCP: Figma (`get_design_context` do node `3220:6556`, `get_metadata` do node `1190:976`)
- Skill: NONE

**Done when**:

- [x] 9 seções na ordem do Figma: BOAS-VINDAS, DEFINIÇÕES (7 subseções), RESPONSABILIDADES, CADASTRO, USO DO SITE, ARMAZENAMENTO E SEGURANÇA, CONSENTIMENTO, CANAL DE DÚVIDAS, FORO
- [x] Título do cartão `1211:1671` é "CADASTRO" (texto desenhado, não o nome da camada)
- [x] Listas "(I)" a "(VII)" e "(I)" a "(II)" em `lines` do mesmo parágrafo; parágrafos separados por linha vazia no Figma viram parágrafos separados
- [x] BOAS-VINDAS com `bodyClass` de 16px (replicando o Figma, decisão Q6); e-mail e endereços de site como texto puro (Q4)
- [x] Diff de texto contra os strings extraídos do `get_design_context`: 0 diferenças (só espaços normalizados); erros de português mantidos
- [x] `pnpm build` exit 0

**Tests**: none
**Gate**: quick

**Commit**: `feat(lgpd): add the terms of use content from figma`

---

### T8: Hero dos Termos `LgpdTermosHero`

**What**: Section com os textos do Hero dos Termos, envolvendo `LegalHero`.
**Where**: `app/components/sections/LgpdTermosHero.vue`
**Depends on**: T6
**Reuses**: `layout/LegalHero.vue`; node `1182:1656`
**Requirement**: LGPD-01

**Tools**:

- MCP: Figma (node `1182:1656`)
- Skill: `figma-design-to-code`

**Done when**:

- [x] H1 "Termos de Uso", subtítulo "Transparência e compromisso com você" e descrição com "segurança", "privacidade" e "confiança" em `#5d5fef` semibold, textos idênticos ao Figma
- [x] H1 a 131px abaixo do Header (y=216 no frame de 1920px), descrição com 661px de largura
- [x] Renderizado a 1920px e comparado com o node `1182:1656`
- [x] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `feat(lgpd): add the terms of use hero section`

---

### T9: Conteúdo dos Termos `LgpdTermosContent`

**What**: Section que importa `lgpd-termos.ts` e passa para `LegalSections`, com a sobreposição de 10px sobre o Hero.
**Where**: `app/components/sections/LgpdTermosContent.vue`
**Depends on**: T4, T7
**Reuses**: `layout/LegalSections.vue`; `app/data/lgpd-termos.ts`
**Requirement**: LGPD-05

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [ ] Forwarda a lista de T7 para `LegalSections` sem markup próprio de cartão
- [ ] Bloco inicia em y=465 do frame de 1920px (40px de padding vertical e sobreposição de 10px sobre o Hero), aplicado nesta section e não no componente compartilhado
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `feat(lgpd): add the terms of use content section`

---

### T10: Página `/lgpd/termos-de-uso/`

**What**: Página fina que compõe o Hero e o conteúdo dos Termos.
**Where**: `app/pages/lgpd/termos-de-uso.vue`
**Depends on**: T8, T9
**Reuses**: Padrão de página fina de `app/pages/planos-e-precos.vue`
**Requirement**: LGPD-01

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [ ] `<main>` com `LgpdTermosHero` e `LgpdTermosContent`, sem `useSeoMeta` (Q5)
- [ ] `/lgpd/termos-de-uso/` responde 200, tem 1 `<h1>`, 9 `<h2>` de cartão e 7 `<h3>` de subcartão, sem erro de console e sem 4xx
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `feat(lgpd): add the terms of use page`

---

### T11: Verificação dos Termos contra o Figma

**What**: Comparar a página com o Figma a 1920px e registrar o resultado no relatório de QA.
**Where**: `.specs/features/lgpd/qa-report.md`
**Depends on**: T10
**Reuses**: Frame `1057:3435`; método de diff de pixels e de texto usado na página de vídeos
**Requirement**: LGPD-05

**Tools**:

- MCP: Figma (`get_screenshot`)
- Skill: `run`

**Done when**:

- [ ] Diff de texto do DOM renderizado contra o Figma: 0 diferenças
- [ ] Posições dos cartões conferidas: primeiro cartão em y=465 e altura total da página próxima de 6409px; diferença média de pixels por região registrada
- [ ] Divergências corrigidas em tarefas de correção antes do commit, ou listadas como pendentes com motivo
- [ ] Relatório com a tabela de posições, a diferença de pixels e as divergências que permanecem
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `docs(lgpd): record the terms of use figma check`

---

### Phase 3: Política de Privacidade

### T12: Dados da Política de Privacidade

**What**: Array tipado com os 11 cartões da Política, com o texto do Figma palavra por palavra.
**Where**: `app/data/lgpd-politica.ts`
**Depends on**: T1
**Reuses**: Tipos de T1; `get_design_context` do node `1211:1835`
**Requirement**: LGPD-06

**Tools**:

- MCP: Figma (`get_design_context` do node `1211:1835`)
- Skill: NONE

**Done when**:

- [ ] 11 seções na ordem do Figma: CONSIDERANDO QUE, "1. RESTRIÇÃO PARA MENORES", "2. FORNECIMENTO DE DADOS", "3. USUÁRIOS E ANUNCIANTES" (4 subseções 3.1 a 3.4), "4. COOKIES", "5. SEGURANÇA", "6. DIREITOS DO TITULAR", "7. TÉRMINO DO TRATAMENTO", "8. ALTERAÇÃO NA POLÍTICA DE PRIVACIDADE", "9. CONTATO", "10. FORO"
- [ ] Listas "(I)" a "(III)", "a)" a "e)" e "a)" e "b)" (3.1) em `lines`; "Como compartilharmos" e "sistema operacionais" mantidos como no Figma
- [ ] E-mail e endereços de site como texto puro (Q4)
- [ ] Diff de texto contra os strings do `get_design_context`: 0 diferenças
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: quick

**Commit**: `feat(lgpd): add the privacy policy content from figma`

---

### T13: Asset da elipse decorativa

**What**: Exportar do Figma o SVG da elipse desfocada da Política.
**Where**: `public/icons/legal-hero-ellipse.svg`
**Depends on**: None
**Reuses**: Node `1211:1834`
**Requirement**: LGPD-02

**Tools**:

- MCP: Figma (`get_design_context`, download do asset)
- Skill: `figma-design-to-code`

**Done when**:

- [ ] Arquivo não vazio, 2160×772, com a elipse branca, filtro de desfoque e opacidade 0,7, sem edição
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: quick

**Commit**: `feat(lgpd): add the hero ellipse exported from figma`

---

### T14: Hero da Política `LgpdPoliticaHero`

**What**: Section com os textos do Hero da Política e a elipse decorativa, envolvendo `LegalHero`.
**Where**: `app/components/sections/LgpdPoliticaHero.vue`
**Depends on**: T6, T13
**Reuses**: `layout/LegalHero.vue`; asset de T13; nodes `1211:1892` e `1211:1834`
**Requirement**: LGPD-02

**Tools**:

- MCP: Figma (nodes `1211:1892` e `1211:1834`)
- Skill: `figma-design-to-code`

**Done when**:

- [ ] H1 "Política de Privacidade", subtítulo "Seu direito à proteção de dados é nossa prioridade" e descrição com "SUB100" e "LGPD" em `#5d5fef` bold, textos idênticos ao Figma
- [ ] H1 a 71px abaixo do Header (y=156 no frame de 1920px); subtítulo a 10px do H1 e descrição a 26px do subtítulo; descrição com 650px de largura
- [ ] Elipse em x=90, y=326, 1760×372 no frame de 1920px, posicionada em unidades relativas ao container, `pointer-events-none`, atrás dos cartões
- [ ] Renderizado a 1920px e comparado com o node `1211:1892`
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `feat(lgpd): add the privacy policy hero section`

---

### T15: Conteúdo da Política `LgpdPoliticaContent`

**What**: Section que importa `lgpd-politica.ts` e passa para `LegalSections`, com subcartões de raio 12px e a sobreposição de 49px sobre o Hero.
**Where**: `app/components/sections/LgpdPoliticaContent.vue`
**Depends on**: T4, T12
**Reuses**: `layout/LegalSections.vue`; `app/data/lgpd-politica.ts`
**Requirement**: LGPD-06

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [ ] Forwarda a lista de T12 para `LegalSections` sem markup próprio de cartão; passa o raio de 12px aos subcartões
- [ ] Bloco inicia em y=394 do frame de 1920px (sem padding vertical e com sobreposição de 49px sobre o Hero), aplicado nesta section
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `feat(lgpd): add the privacy policy content section`

---

### T16: Página `/lgpd/politica-de-privacidade/`

**What**: Página fina que compõe o Hero e o conteúdo da Política.
**Where**: `app/pages/lgpd/politica-de-privacidade.vue`
**Depends on**: T14, T15
**Reuses**: Padrão de página fina de `app/pages/planos-e-precos.vue`
**Requirement**: LGPD-02

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [ ] `<main>` com `LgpdPoliticaHero` e `LgpdPoliticaContent`, sem `useSeoMeta` (Q5)
- [ ] `/lgpd/politica-de-privacidade/` responde 200, tem 1 `<h1>`, 11 `<h2>` de cartão e 4 `<h3>` de subcartão, sem erro de console e sem 4xx
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `feat(lgpd): add the privacy policy page`

---

### T17: Verificação da Política contra o Figma

**What**: Comparar a página com o Figma a 1920px e registrar o resultado no relatório de QA.
**Where**: `.specs/features/lgpd/qa-report.md`
**Depends on**: T16
**Reuses**: Frame `1211:1826`; o mesmo método de T11
**Requirement**: LGPD-06

**Tools**:

- MCP: Figma (`get_screenshot`)
- Skill: `run`

**Done when**:

- [ ] Diff de texto do DOM renderizado contra o Figma: 0 diferenças
- [ ] Primeiro cartão em y=394 e altura total da página próxima de 5666px; diferença média de pixels por região registrada
- [ ] Divergências corrigidas ou listadas como pendentes com motivo
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `docs(lgpd): record the privacy policy figma check`

---

### Phase 4: Links, varredura e entrega

### T18: Links do rodapé para as novas rotas

**What**: Trocar os dois links do rodapé para `/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/`.
**Where**: `app/components/layout/TheFooter.vue` (modify)
**Depends on**: T10, T16
**Reuses**: Links atuais em `TheFooter.vue:74-75`
**Requirement**: LGPD-07

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [ ] `TheFooter.vue` aponta para `/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/` com barra final; textos e classes dos links inalterados
- [ ] Clique no rodapé de uma página qualquer abre as duas novas páginas (200), sem 404
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `fix(footer): point the legal links to the lgpd pages`

---

### T19: Barra final no link de privacidade do menu mobile

**What**: Padronizar o link de privacidade do menu mobile com barra final.
**Where**: `app/components/layout/HeaderBar.vue` (modify)
**Depends on**: T10, T16
**Reuses**: `HeaderBar.vue:401-402`
**Requirement**: LGPD-07

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [ ] `HeaderBar.vue:402` aponta para `/lgpd/politica-de-privacidade/`; a linha 401 já usa `/lgpd/termos-de-uso/` e fica como está
- [ ] Abrir o menu mobile (largura menor que 992px) e clicar nos dois links leva às novas páginas
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `fix(header): add the trailing slash to the privacy link`

---

### T20: Varredura responsiva das duas páginas

**What**: Medir overflow, erros de console e composição das duas páginas em 7 larguras e corrigir o que aparecer.
**Where**: `.specs/features/lgpd/qa-report.md` (modify)
**Depends on**: T18, T19
**Reuses**: Método de varredura da página de vídeos (Chrome headless com largura exata, inclusive 375px)
**Requirement**: LGPD-08

**Tools**:

- MCP: NONE
- Skill: `run`

**Done when**:

- [ ] 1920, 1440, 1280, 1024, 768, 576 e 375px nas duas páginas: `scrollWidth <= innerWidth`, 0 erros de console, 0 respostas 4xx, 0 imagens quebradas, 1 `<h1>`
- [ ] Nenhum endereço de site ou e-mail longo estoura o cartão (`overflow-wrap`); texto com no mínimo 16px abaixo de 992px
- [ ] Achados corrigidos em commits de correção próprios ou registrados como abertos com motivo
- [ ] Tabela da varredura registrada no relatório
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: full

**Commit**: `docs(lgpd): record the responsive sweep`

---

### T21: Registrar a convenção de barra final no STATE

**What**: Registrar como AD a convenção de links internos com barra final (decisão Q3).
**Where**: `.specs/STATE.md` (modify)
**Depends on**: T19
**Reuses**: Formato dos AD existentes em `STATE.md`
**Requirement**: LGPD-07

**Tools**:

- MCP: NONE
- Skill: `tlc-spec-driven`

**Done when**:

- [ ] Novo `AD-NNN` (próximo número livre) com decisão, motivo e alcance: URLs legais novas com barra final em todos os pontos
- [ ] Nenhum AD existente alterado
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: build

**Commit**: `docs(state): record the trailing slash rule for legal links`

---

### T22: `pnpm generate` e busca pelas rotas antigas

**What**: Confirmar que a geração estática inclui as duas páginas e que não sobram links para as rotas antigas.
**Where**: `.specs/features/lgpd/qa-report.md` (modify)
**Depends on**: T20
**Reuses**: Prerender só de rotas linkadas ([[AD-016]])
**Requirement**: LGPD-07

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [ ] `grep` por `termos-de-uso` e `politica-de-privacidade` em `app/` sem nenhuma ocorrência fora de `/lgpd/`
- [ ] `pnpm generate` exit 0 (lido com `rc=$?`); existem `.output/public/lgpd/termos-de-uso/index.html` e `.output/public/lgpd/politica-de-privacidade/index.html`
- [ ] O log do generate deixa de listar `/termos-de-uso`, `/politica-de-privacidade` e `/lgpd/termos-de-uso/` como 404
- [ ] Resultado registrado no relatório
- [ ] `pnpm build` exit 0

**Tests**: none
**Gate**: build

**Commit**: `docs(lgpd): record the generate and old route check`

---

### Phase 5: Bloqueada por decisão

### T23: SEO das duas páginas (BLOQUEADA)

**What**: Definir `useSeoMeta` (title, description e og) das duas páginas.
**Where**: `app/pages/lgpd/termos-de-uso.vue` (modify) e `app/pages/lgpd/politica-de-privacidade.vue` (modify)
**Depends on**: T22
**Reuses**: Padrão de `useSeoMeta` de `app/pages/planos-e-precos.vue`
**Requirement**: LGPD-09

**Tools**:

- MCP: NONE
- Skill: NONE

**Done when**:

- [ ] **BLOQUEADA pela Q5**: o texto de title e description não existe no Figma e não será inventado; só executa depois da decisão do usuário
- [ ] Depois da decisão: as duas páginas com `useSeoMeta` usando exatamente o texto aprovado; `pnpm build` exit 0

**Tests**: none
**Gate**: build

**Commit**: `feat(lgpd): add the seo meta to the legal pages`

---

## Phase Execution Map

| Fase | Tarefas | Conteúdo |
| --- | --- | --- |
| 1 | T1 a T6 | Estrutura compartilhada (tipos, cartão, subcartão, lista, fundo, Hero) |
| 2 | T7 a T11 | Termos de Uso (dados, Hero, conteúdo, página, verificação) |
| 3 | T12 a T17 | Política de Privacidade (dados, elipse, Hero, conteúdo, página, verificação) |
| 4 | T18 a T22 | Links, varredura, STATE e geração estática |
| 5 | T23 | SEO, bloqueada por Q5 |

Execução estritamente sequencial, na ordem numérica dentro de cada fase. Total: 23 tarefas, 22 executáveis e 1 bloqueada (T23). Proposta de lotes para o Execute (a confirmar com o usuário antes de despachar): lote 1 = Phase 1 (6 tarefas), lote 2 = Phase 2 (5), lote 3 = Phase 3 (6) e lote 4 = Phase 4 (5).

---

## Task Granularity Check

| Task | Scope | Status |
| ---- | ----- | ------ |
| T1 | 1 arquivo de tipos | ✅ Granular |
| T2, T3, T4, T6 | 1 componente `layout/` cada | ✅ Granular |
| T5, T13 | 1 asset SVG cada | ✅ Granular |
| T7, T12 | 1 arquivo de dados cada (grande, mas um só conceito e um só arquivo) | ✅ Granular |
| T8, T9, T14, T15 | 1 section cada | ✅ Granular |
| T10, T16 | 1 página cada | ✅ Granular |
| T11, T17, T20, T22 | 1 relatório (um arquivo) | ✅ Granular |
| T18, T19 | 1 arquivo modificado cada | ✅ Granular |
| T21 | 1 entrada no `STATE.md` | ✅ Granular |
| T23 | 2 páginas com o mesmo bloco (bloqueada) | ⚠️ Cohesiva (mesma mudança em dois arquivos); dividir em duas quando desbloqueada, se a Q5 der textos diferentes |

## Diagram-Definition Cross-Check

| Task | Depends On (task body) | Diagram Shows | Status |
| ---- | ---------------------- | ------------- | ------ |
| T4 | T1, T2, T3 | T1→T4, T2→T4, T3→T4 | ✅ Match |
| T6 | T5 | T5→T6 | ✅ Match |
| T7 | T1 (Phase 1) | nenhum (dependência de fase anterior) | ✅ Match |
| T8 | T6 (Phase 1) | nenhum (dependência de fase anterior) | ✅ Match |
| T9 | T4 (Phase 1), T7 | T7→T9 | ✅ Match |
| T10 | T8, T9 | T8→T10, T9→T10 | ✅ Match |
| T11 | T10 | T10→T11 | ✅ Match |
| T12 | T1 (Phase 1) | nenhum (dependência de fase anterior) | ✅ Match |
| T13 | None | nenhum | ✅ Match |
| T14 | T6 (Phase 1), T13 | T13→T14 | ✅ Match |
| T15 | T4 (Phase 1), T12 | T12→T15 | ✅ Match |
| T16 | T14, T15 | T14→T16, T15→T16 | ✅ Match |
| T17 | T16 | T16→T17 | ✅ Match |
| T18 | T10, T16 (Phases 2 e 3) | nenhum (dependência de fase anterior) | ✅ Match |
| T19 | T10, T16 (Phases 2 e 3) | T19→T20, T19→T21 (saídas) | ✅ Match |
| T20 | T18, T19 | T18→T20, T19→T20 | ✅ Match |
| T21 | T19 | T19→T21 | ✅ Match |
| T22 | T20 | T20→T22 | ✅ Match |
| T23 | T22 (Phase 4) | nenhum (dependência de fase anterior) | ✅ Match |

Nenhuma tarefa depende de uma tarefa de fase posterior.

## Test Co-location Validation

| Task | Code Layer Created/Modified | Matrix Requires | Task Says | Status |
| ---- | --------------------------- | --------------- | --------- | ------ |
| T1 | tipos (`app/data`) | none | none | ✅ OK |
| T2, T3, T4, T6 | `layout/` | none (checagem no navegador) | none, gate full | ✅ OK |
| T5, T13 | assets | none | none, gate quick | ✅ OK |
| T7, T12 | dados de conteúdo | none (diff de texto) | none, gate quick | ✅ OK |
| T8, T9, T14, T15 | `sections/` | none (checagem no navegador) | none, gate full | ✅ OK |
| T10, T16 | páginas | none (checagem no navegador) | none, gate full | ✅ OK |
| T11, T17, T20, T22 | relatório de QA | none | none, gate full ou build | ✅ OK |
| T18, T19 | `layout/` (links) | none | none, gate full | ✅ OK |
| T21 | `STATE.md` | none | none, gate build | ✅ OK |
| T23 | páginas | none | none, gate build | ✅ OK |

Todas as camadas são "none" segundo a matriz porque o repositório não tem test runner ([[AD-002]]). O critério de verificação de cada tarefa está no `Done when` (build, diff de texto e checagem no navegador contra o Figma), e o Verifier roda automaticamente depois da última tarefa executável.

---

## Requirement Coverage

| Requirement | Tasks |
| ----------- | ----- |
| LGPD-01 | T8, T10 |
| LGPD-02 | T13, T14, T16 |
| LGPD-03 | T5, T6 |
| LGPD-04 | T1, T2, T3, T4 |
| LGPD-05 | T7, T9, T11 |
| LGPD-06 | T12, T15, T17 |
| LGPD-07 | T18, T19, T21, T22 |
| LGPD-08 | T20 |
| LGPD-09 | T23 (bloqueada por Q5) |

9 requisitos, 9 mapeados, 0 sem tarefa. Um bloqueado (LGPD-09).
