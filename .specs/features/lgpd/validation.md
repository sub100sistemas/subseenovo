# Validation — `lgpd`

**Verificação:** feita em sessão posterior à implementação, com evidência colhida de novo em 2026-10-02. As marcações do `tasks.md` (90 caixas `[x]`) e o `qa-report.md` da própria feature foram tratados como pontos de partida e reproduzidos onde foi possível.

- **Diagnóstico estático:** leitura de `spec.md`, `design.md`, `tasks.md`, `qa-report.md`, STATE, das duas páginas, dos 4 componentes `Legal*`, das 4 sections `Lgpd*` e dos arquivos de dados.
- **Evidência dinâmica:** `pnpm build`, `pnpm generate` e Playwright (Chromium) contra o build de produção da `master`, com servidor local iniciado e encerrado pelo próprio script.
- **Figma:** captura dos frames inteiros `1057:3435` (Termos) e `1211:1826` (Política) lado a lado com o site a 1920px, mais o `get_design_context` do rótulo de subcartão (`1207:984`).

## Veredito: **PASS with ressalvas leves**

A implementação está funcional, responsiva e integrada à `master`. Não foram encontrados bugs funcionais nem problemas de overflow. As ressalvas são um desvio deliberado de 1px no rótulo do subcartão, decisões de conteúdo sobre a altura dos cartões e pendências **documentais** (SEO, status `Draft`, Q5). Nenhuma foi corrigida nesta validação.

---

## Resumo da evidência

| Verificação | Resultado |
| --- | --- |
| `pnpm build` | Exit 0, "Build complete", com o código atual (nenhum arquivo da feature mudou desde o merge) |
| `pnpm generate` | **Exit 0**; `Prerendered 772 routes in 402.319 seconds`; `Generated public .output/public` |
| Rotas legais no generate | Prerenderizadas `/lgpd/termos-de-uso`, `/lgpd/termos-de-uso/`, `/lgpd/politica-de-privacidade` e `/lgpd/politica-de-privacidade/`, com os `_payload.json` |
| Arquivos gerados | `.output/public/lgpd/termos-de-uso/index.html` (42 460 bytes) e `.output/public/lgpd/politica-de-privacidade/index.html` (39 029 bytes) |
| HTML gerado | Termos: `<h1>` "Termos de Uso", 9 `<h2>`, 7 `<h3>`. Política: `<h1>` "Política de Privacidade", 11 `<h2>`, 4 `<h3>`. Cada arquivo tem 2 links para as rotas novas (com barra final) e **0 para as rotas antigas** |
| Pastas antigas | `.output/public/termos-de-uso` e `.output/public/politica-de-privacidade` **não existem** |
| 404 no generate | **Nenhuma linha `[404]`** no log |
| Playwright, 1920, 1440, 1280, 1024, 768, 576 e 375px (as duas páginas) | HTTP 200; sem overflow horizontal; console 0; respostas ≥400: 0; falhas de requisição: 0; imagens quebradas: 0; 0 parágrafos vazios |
| Headings | 1 `<h1>` por página; Termos com 9 `<h2>` e 7 `<h3>`; Política com 11 `<h2>` e 4 `<h3>` |
| Textos e dados | 45 trechos de `lgpd-termos.ts` e 36 de `lgpd-politica.ts` presentes no texto renderizado (Termos: 1 falso positivo, uma classe CSS embutida no dado) |
| Navegação | Rodapé a 1440 e 375px e menu mobile a 375px levam às duas páginas, com o H1 esperado |
| SEO | As duas páginas têm `title` e `description` próprios no HTML |
| `validate_spec.py` | 0 erros e 1 warning (ver "Validação documental") |

---

## Critérios de aceite da SPEC

A SPEC tem **23 critérios de aceite** (5 + 5 + 5 + 5 + 3). Uma contagem anterior citava 25; o número correto é 23. Resultado: **21 atendidos, 1 desvio deliberado e 1 obsoleto.**

| AC | Evidência | Situação |
| --- | --- | --- |
| Termos AC1 (200; Hero e lista de cartões) | HTTP 200; [termos-de-uso.vue:14-17](../../../app/pages/lgpd/termos-de-uso.vue#L14-L17) compõe `LgpdTermosHero` e `LgpdTermosContent` | Atendido |
| Termos AC2 (Hero: H1, subtítulo, descrição com 3 palavras em destaque) | Captura lado a lado: H1 "Termos de Uso", subtítulo e as palavras "segurança", "privacidade" e "confiança" em negrito roxo | Atendido |
| Termos AC3 (9 cartões, 7 subcartões, na ordem) | DOM: 9 `<h2>` (BOAS-VINDAS, DEFINIÇÕES, RESPONSABILIDADES, CADASTRO, USO DO SITE, ARMAZENAMENTO E SEGURANÇA, CONSENTIMENTO, CANAL DE DÚVIDAS, FORO) e 7 `<h3>` | Atendido |
| Termos AC4 (0 diferenças de texto) | 45 trechos de `lgpd-termos.ts` presentes no render. Contra o Figma, o `qa-report.md` documenta a conferência por nós de texto e `get_design_context`; não refiz palavra por palavra | Atendido (dados→render reproduzido; dados→Figma conforme QA) |
| Termos AC5 (um `<h1>`) | 1 `<h1>` nas 7 larguras e no HTML gerado | Atendido |
| Política AC1 (200; Hero, elipse e lista) | HTTP 200; [politica-de-privacidade.vue:14-17](../../../app/pages/lgpd/politica-de-privacidade.vue#L14-L17) compõe `LgpdPoliticaHero` e `LgpdPoliticaContent`; a elipse aparece em 1920px | Atendido |
| Política AC2 (Hero com "SUB100" e "LGPD" em destaque) | Captura lado a lado: H1, subtítulo e as duas palavras em negrito roxo | Atendido |
| Política AC3 (11 cartões, 4 subcartões) | DOM: 11 `<h2>` (CONSIDERANDO QUE e 1 a 10) e 4 `<h3>` (3.1 a 3.4) | Atendido |
| Política AC4 (0 diferenças de texto) | 36 trechos de `lgpd-politica.ts` presentes no render, sem faltas | Atendido (mesma nota do Termos AC4) |
| Política AC5 (um `<h1>`) | 1 `<h1>` | Atendido |
| Estrutura AC1 (tokens do Hero) | Computado a 1920px: H1 40px/700 `#313846`; subtítulo 26px/500, line-height 36,4px (1,4) `#313846`; descrição 20px, line-height 32px (1,6), `#6b7280`; tudo centralizado | Atendido |
| Estrutura AC2 (cartão) | Computado: fundo branco, borda 1px `#e5e7eb`, raio 16px, largura 992px, padding 39/35px mais a borda de 1px (40/36 no total), título 26px/600 `#5d5fef` centralizado, texto 18px com line-height 31px `#4b5563`. Definido em [LegalCard.vue:11-18](../../../app/components/layout/LegalCard.vue#L11-L18) | Atendido |
| Estrutura AC3 (subcartão) | Computado: fundo `#f9fafb`, padding 24/20px, raio 18px (Termos) e 12px (Política), texto 18px. **O rótulo mede 16px; a SPEC e o Figma pedem 15px** ([LegalSubCard.vue:12](../../../app/components/layout/LegalSubCard.vue#L12)) | **Desvio deliberado** (ver Ressalva 1) |
| Estrutura AC4 (componentes únicos + arrays) | `LegalHero`, `LegalCard`, `LegalSubCard` e `LegalSections` definidos uma vez; dados em `lgpd-termos.ts`, `lgpd-politica.ts` e `lgpd-types.ts` | Atendido |
| Estrutura AC5 (altura pelo conteúdo) | Termos mede 6666px contra 6409px do Figma, porque os cartões de altura fixa do Figma aqui mostram o texto inteiro | Atendido |
| Links AC1 (rodapé) | [TheFooter.vue:74-75](../../../app/components/layout/TheFooter.vue#L74-L75). Playwright a 1440px e 375px: os dois links levam a `/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/` | Atendido |
| Links AC2 (menu mobile, com barra final) | [HeaderBar.vue:400-401](../../../app/components/layout/HeaderBar.vue#L400-L401). Playwright a 375px: os dois links chegam às páginas certas | Atendido |
| Links AC3 (checkbox dos formulários) | [forms.ts:36-37](../../../app/data/forms.ts#L36-L37) aponta para as rotas novas com barra final | Atendido |
| Links AC4 (nenhuma rota antiga em `app/`) | `grep` em `app/` retorna 0 ocorrências de `/termos-de-uso` e `/politica-de-privacidade` fora de `/lgpd/`; o HTML gerado também tem 0 | Atendido |
| Links AC5 (`pnpm generate`) | **Reproduzido nesta validação:** exit 0; os dois `index.html` gerados; nenhuma linha `[404]` no log; sem as pastas antigas | Atendido |
| Responsividade AC1 (7 larguras, sem overflow e sem erros de console) | Playwright nas duas páginas, em 1920, 1440, 1280, 1024, 768, 576 e 375px: sem overflow, console 0 | Atendido |
| Responsividade AC2 (<992px: cartão no container, texto legível, sem quebrar para fora) | Varredura: nenhum texto cortado nem cartão fora da borda em 768, 576 e 375px. O `qa-report.md` (T20) mede cartão de 704, 528 e 343px e parágrafo de 16px | Atendido |
| Responsividade AC3 (sem `useSeoMeta` até a decisão da Q5) | O código hoje **tem** `useSeoMeta` nas duas páginas ([termos-de-uso.vue:2-11](../../../app/pages/lgpd/termos-de-uso.vue#L2-L11) e [politica-de-privacidade.vue:2-11](../../../app/pages/lgpd/politica-de-privacidade.vue#L2-L11)), implementado no commit `8d740ff` | **Obsoleto** (ver Ressalva 2) |

---

## Conformidade com o Figma

Conferida por captura lado a lado dos dois frames e pelas medidas do `qa-report.md`.

- **Política:** estrutura, textos, posições e alturas coincidem com o Figma. Todas as 11 seções e os 4 subcartões batem em ordem e composição.
- **Termos:** estrutura e textos coincidem até o cartão CADASTRO. Daí em diante as posições descem, pelo motivo da Ressalva 6.
- **Hero:** o fundo cinza curvo, o título, o subtítulo e a descrição batem com o Figma nas duas páginas.
- **Rodapé global:** 462px no site contra 475px no Figma (componente global, fora desta feature).

---

## Ressalvas

Nenhuma é falha funcional, e **nenhuma foi corrigida nesta validação.**

1. **Rótulo do subcartão (desvio deliberado).** O Figma e a SPEC (Estrutura AC3) indicam 15px; o código usa **16px** em [LegalSubCard.vue:12](../../../app/components/layout/LegalSubCard.vue#L12), por decisão de padrão do projeto (commit `282a58b`: "Project standard is 16px; the Figma 15px is overridden by decision"). A decisão não consta na SPEC, no `tasks.md` nem no `qa-report.md`, que ainda diz que o rótulo ficou em 15px.
2. **Documentação de SEO.** O código implementa `useSeoMeta` nas duas páginas (commit `8d740ff`, T23 concluída). A SPEC ainda trata a Q5 como aberta, o LGPD-09 como `Blocked` e o AC de Responsividade 3 como se não houvesse `useSeoMeta`. O `tasks.md` mantém a regra "nada de `useSeoMeta` próprio".
3. **Status `Draft`.** O `tasks.md` ("Draft (aguardando aprovação; nenhum código implementado)") e o `design.md` ("Draft (Etapa 1…)") ainda têm esse status, embora a implementação esteja concluída e integrada. O `tasks.md` também cita a branch `feature/lgpd`, já integrada.
4. **Q5 sem resolução formal.** A Open Question Q5 (título e descrição SEO) continua descrita como pendente no `spec.md`.
5. **Elipse da Política.** O código a mostra apenas a partir de 992px; o Figma de referência só desenha a composição a 1920px. A decisão está no `qa-report.md`, mas não na SPEC.
6. **Altura dos cartões jurídicos (decisão de conteúdo).** O Figma desenha USO DO SITE, ARMAZENAMENTO E SEGURANÇA e FORO (Termos) com altura fixa de 436, 355 e 194px e corte do texto, escondendo o parágrafo "Os sites da SUB100 poderão armazenar cookies…". O código mostra o texto completo (563, 470 e 222px). É uma decisão do usuário registrada na SPEC. Consequência: a página de Termos mede 6666px contra 6409px, e a Política 5653px contra 5666px.

---

## Validação documental

`validate_spec.py` no `spec.md` desta feature:

```
WARN  open questions do not read as resolved ('Open questions: none')
validate_spec: 0 error(s), 1 warning(s)
```

**Pendência documental, não corrigida.** O warning vem da **Q5 não resolvida formalmente**: a SPEC lista a questão como aberta, embora o SEO já esteja implementado. Para zerá-lo, seria preciso atualizar a seção Assumptions & Open Questions do `spec.md` (marcar a Q5 como resolvida) e, em consequência, o LGPD-09. Isso fica para uma etapa separada.

---

## Não reproduzido nesta validação

- Comparação **palavra por palavra** dos textos jurídicos diretamente contra o Figma (feita pelo `qa-report.md`; aqui foi conferido dados→render e a captura visual).
- Canonical e sitemap de produção: o ambiente local usa `siteUrl` de desenvolvimento (`noindex`, sem `sitemap.xml`). Esses itens são do SEO global, não desta feature.

---

## Itens em aberto (fora desta validação)

- Atualizar `spec.md`, `tasks.md`, `design.md` e `qa-report.md` para refletir SEO implementado, o rótulo de 16px e os status finais.
- Decidir se o rótulo do subcartão volta a 15px (Figma) ou se a SPEC passa a registrar 16px.
