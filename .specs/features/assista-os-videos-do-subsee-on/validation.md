## Validation: assista-os-videos-do-subsee-on - PASS ✅

**Escopo**: T1 a T15; feature NÃO completa: AVS-13, pergunta 6 do FAQ e destinos reais dos links seguem bloqueados por Q1 a Q5

**Data**: 2026-09-29
**Spec**: `.specs/features/assista-os-videos-do-subsee-on/spec.md`
**Intervalo verificado**: `29fe303..HEAD`, HEAD = `e3d7a7073e37e2c9e126a13dfeef5315ede2e428` (23 commits)
**Iteração**: re-verificação 1 de 3. A rodada anterior (HEAD `0e60b38`) reprovou por AVS-12.
**Verificador**: sub-agente independente (autor ≠ verificador). Não editou código nem fez commits.

Motivo do veredito: AVS-01 a AVS-12 atendem o resultado do SPEC no build atual. A falha de AVS-12 foi corrigida em `1d74a31`. O que falta é só o que está bloqueado por decisão pendente (Q1 a Q5).

---

## 1. Conclusão das tarefas

| Task | Commit | Status no `tasks.md` | Observação do verificador |
| --- | --- | --- | --- |
| T1 | `35fa3fa` feat(hero): expose heading and description classes as props | [x] | Confere |
| T2 | `187b2e6` feat(videos): add hero assets exported from figma | [x] | Confere |
| T3 | `820b351` feat(videos): add play, profile and banner assets exported from figma | [x] | Confere (10 SVGs; desvio de 12 registrado no próprio tasks) |
| T4 | `99d3119` feat(ui): add PlayButton primitive | [x] | Confere |
| T5 | `545746b` feat(layout): add SectionHeading shell | [x] | Confere; 3 chamadores reais |
| T6 | `2545aaf` feat(videos): add provisional fallback link constant | [x] | Confere |
| T7 | `edaa941` feat(videos): add VideosHero section | [x] | Confere |
| T8 | `0094ad2` feat(videos): add VideosFeatured section | [x] | Confere. A corrupção do `spec.md:1` que este commit causou foi reparada em `e3d7a70` |
| T9 | `b22be1a` + fixes `304209e`, `1d74a31` | [x] | Confere: coluna única abaixo de `tablet-lg` (medido) |
| T10 | `a9330c1` + fix `1d74a31` | [x] | Confere: coluna única abaixo de `tablet-lg` (medido) |
| T11 | `6e6e22a` | [x] | Confere |
| T12 | `4b3c39f` | [x] | Confere |
| T13 | `d20c718` | [x] | Confere |
| T14 | `b12af97` + fixes `9397e44`, `1d74a31` | [x] | Confere; `qa-report.md:26` agora diz coluna única inclusive entre 768 e 991px |
| T15 | `0e60b38` + fixes `4cc9993`, `f3fc6f1`, `821ee24` | [x] | Confere |
| T16, T17, T18 | - | [ ] | ⏸ Bloqueadas (Q5, Q4, Q1 a Q3). Fora do escopo |

Todas as mensagens de commit batem com o campo **Commit** de cada tarefa. `tasks.md:27` agora diz "In Progress — T1 to T15 done; T16 to T18 blocked by Q1 to Q5".

### Integridade dos documentos (desde `0e60b38`)

- `spec.md:1` foi restaurada para `# Assista os vídeos do SUBSEE on (página ...) Specification`, igual a `cf745ee`.
- A tabela de rastreabilidade (`spec.md:157` a `:169`) tem AVS-01 a AVS-12 como "Implementing" e AVS-13 como "In Tasks". A diff de `e3d7a70` no `spec.md` muda só essas 13 linhas.
- A diff de `qa-report.md` muda 2 linhas: a frase do empilhamento e a linha da sombra do header.

---

## 2. Critérios de aceite (ancorados no SPEC)

Medidas feitas no build de produção atual (`pnpm build` do HEAD `e3d7a70`, servido em `PORT=3100`), Chrome headless via DevTools, viewport exato com `Emulation.setDeviceMetricsOverride`.

| AC | Critério | Resultado esperado do SPEC | Evidência (código + medida) | Resultado |
| --- | --- | --- | --- | --- |
| AVS-01 | Rota responde 200 com Header e Footer | HTTP 200; Header, conteúdo, Footer | `app/pages/assista-os-videos-do-subsee-on.vue:2` (`<main>` com as 6 sections). `curl` 200; Document 200 no DevTools em 9 larguras; `header` e `footer` fora de `<main>` | ✅ |
| AVS-02 | Hero com H1, descrição, 5 ícones, foto, 2 cards | Textos exatos; "on" em `#e72f4d` | `app/components/sections/VideosHero.vue:39` (H1), `:40` (`text-[#e72f4d]`), `:44` (descrição), `:4` (5 ícones), `:60` (foto), `:95`, `:100`, `:115`, `:120` (cards). DOM: texto do H1 igual ao manifesto; `on` = `rgb(231, 47, 77)`; 5 `img[src*=crm-hero-icone]`; foto presente; os 2 cards presentes | ✅ |
| AVS-03 | Exatamente um `<h1>` | 1, dentro do Hero | `app/components/layout/Hero.vue:74`; `app/components/layout/SectionHeading.vue:28` usa `<h2>`. DOM: `h1` = 1 em todas as 9 larguras, dentro de `#videos-hero` | ✅ |
| AVS-04 | Hero a 1920px | H1 Poppins Bold 36px `#313846`; descrição Poppins Regular 20px `#313846`; altura total 568px | `VideosHero.vue:17` (`desktop-full:text-[36px]`), `:19` (`desktop-full:text-[20px]`, `max-w-[630px]`). Medido: H1 36px/700/`rgb(49,56,70)`/Poppins, x=260; descrição 20px/400/`rgb(49,56,70)`/Poppins, largura 630. Hero y=85 h=483, borda inferior em 568 | ✅ (ver lacuna 2 sobre a redação "altura 568") |
| AVS-05 | Seção Vídeo institucional | Eyebrow, H2, descrição, 2 tags, card 760×460, badge "SUBSEE ON • 03:24", play 92px, legenda | `app/components/sections/VideosFeatured.vue:20`, `:21`, `:23`, `:4` + `:30` (tags em array, `v-for`), `:43` (card), `:48` (badge), `:51` (`PlayButton size="lg"`), `:56` (legenda). Medido: card 760,05×460, raio 28px, gradiente 112.44deg `#5d5fef`→`#2e386b`, sombra `0 24px 50px rgba(46,56,107,.18)`, play 92×92, x do card = 876 (260+520+96) | ✅ |
| AVS-06 | Seção Vídeos demonstrativos | Fundo `#f8f9ff`; eyebrow, H2, descrição; 3 cards 430×520 com miniatura, duração, play, "DEMONSTRAÇÃO", título, descrição, link | `app/components/sections/VideosDemo.vue:47` (`bg-[#f8f9ff]`), `:55` a `:58`, `:14` (array), `:64` (`v-for`), `:66` (card). Medido: fundo `rgb(248,249,255)`; 3 cards 430×520 em x 260/745/1230; play 64×64; todos os textos do manifesto presentes | ✅ |
| AVS-06 (AC3) | Um array tipado, um `v-for`, um template | 1 array, 1 `v-for` | `VideosDemo.vue:14` (`const videos: DemoVideo[]`), `:64` (único `v-for`). DOM: 3 `li` com a mesma `className` | ✅ |
| AVS-07 (AC4) | Clique no card ou link abre destino | Enquanto Q1 pendente: canal do YouTube em nova aba | `app/data/videos.ts:1`; `VideosDemo.vue:89` a `:91`; `VideosFeatured.vue:40` a `:42`. DOM: 8 links em `<main>`, todos `https://www.youtube.com/@subsee`, `target="_blank"`, `rel="noopener"` | ✅ (destino real ⏸ Q1) |
| AVS-07 (AC5) | Teclado: focável, nome acessível com o título | Elemento focável; nome contém o título | `VideosDemo.vue:92` (`aria-labelledby` link + título), `:93` (link esticado sobre o card). DOM: cada link recebe foco; nomes "assistir ao vídeo → organize imóveis e publique com agilidade" etc. Card institucional é um `<a>` focável com nome "subsee on • 03:24 uma visão completa da plataforma". 0 elementos interativos não focáveis em `<main>` | ✅ |
| AVS-08 | Seção Conteúdo por perfil | Eyebrow, H2, descrição; 3 cards 430×260 numerados 01, 02, 03 | `app/components/sections/VideosProfiles.vue:58` a `:61`, `:15` (array), `:67` (`v-for`), `:75` (número). Medido: 3 cards 430×260 em x 260/745/1230; números 01/02/03 | ✅ |
| AVS-08 (AC2) | Um array; cores por perfil | `#eef0ff`/`#5d5fef`, `#eaf9f7`/`#159c96`, `#f4eefc`/`#7652b5` | `VideosProfiles.vue:21`, `:22`, `:31`, `:32`, `:42`, `:43`. Medido: fundos `rgb(238,240,255)`, `rgb(234,249,247)`, `rgb(244,238,252)`; número e link em `rgb(93,95,239)`, `rgb(21,156,150)`, `rgb(118,82,181)` | ✅ |
| AVS-09 | Banner App SUBSEE | 1400×220, gradiente `#5d5fef`→`#2e386b`, raio 28px, botão branco | `app/components/sections/VideosAppCta.vue:9`, `:21`, `:24`, `:33`. Medido: 1400×220, raio 28px, `linear-gradient(90deg, rgb(93,95,239), rgb(46,56,107))`; botão 300×58 em x=1294 (260+1034), fundo branco, texto `#5d5fef` 15px/600 | ✅ |
| AVS-09 (AC4) | "Ver vídeos →" e botão do banner | Fallback provisório, nova aba | `VideosProfiles.vue:85` a `:87`; `VideosAppCta.vue:28` a `:30`. DOM: coberto pela checagem dos 8 links | ✅ (destino real ⏸ Q2, Q3) |
| AVS-10 (AC1) | FAQ | Título SemiBold 52px; subtítulo; 6 perguntas; fundo branco, sem painel cinza | `app/components/sections/VideosFaq.vue:41` (`desktop-full:text-[52px]`), `:39` (`panel-class` sem `bg`), `:53`, `:7` (array). Medido: título 52px/600; painel e seção com fundo transparente sobre `body` branco; itens 970px; 5 perguntas | ✅ para 5 itens; pergunta 6 ⏸ Q4 |
| AVS-10 (AC2) | Abrir pergunta troca "+" por "−" | Resposta expande, ícone muda | `app/components/layout/Faq.vue:64` (`<details>`), `:103` a `:117` (troca de ícone). DOM: antes `open=false`, "+" visível; depois do clique `open=true`, "−" visível, resposta com altura > 0. Passou em 9 larguras | ✅ |
| AVS-10 (AC3) | Um array tipado, reusa `layout/Faq.vue` | 1 array + `<Faq>` | `VideosFaq.vue:7` (`const faqs: FaqItem[]`), `:36` (`<Faq`) | ✅ |
| AVS-10 (AC4) | Sem resposta inventada no item 6 | Nenhum texto inventado | `VideosFaq.vue:7` a `:32` (5 itens). DOM: "posso sugerir temas" ausente; 0 textos fora do manifesto | ✅ (item 6 ⏸ Q4) |
| AVS-11 | Sem overflow de 375 a 1920px | `scrollWidth <= innerWidth` | Medido em 1920, 1440, 1280, 1024, 992, 991, 768, 576, 375: `scrollWidth == innerWidth` em todas | ✅ |
| AVS-12 | Abaixo de 992px, coluna única | Institucional e as grades de 3 cards em coluna única | `VideosDemo.vue:62` e `VideosProfiles.vue:65`: agora `grid gap-6 tablet-lg:grid-cols-3` (sem `tablet:grid-cols-2`); `VideosFeatured.vue:10` (`flex-col`, `tablet-lg:flex-row`). Colunas medidas (x distintos dos cards) na tabela abaixo | ✅ |
| AVS-13 | SEO via `useSeoMeta` | Valores de Q5 | Página sem `useSeoMeta` por decisão | ⏸ bloqueado (Q5) |

### Colunas medidas (AVS-12)

| Largura | Demonstrativos | Perfis | Institucional | x dos cards demo (largura) |
| --- | --- | --- | --- | --- |
| 1920 | 3 | 3 | 2 colunas | 260 / 745 / 1230 (430) |
| 1440 | 3 | 3 | 2 colunas | 20 / 505 / 990 (430) |
| 1280 | 3 | 3 | 2 colunas | 32 / 445 / 859 (389) |
| 1024 | 3 | 3 | 2 colunas | 32 / 360 / 688 (304) |
| 992 | 3 | 3 | 2 colunas | 32 / 349 / 667 (293) |
| 991 | 1 | 1 | empilhado | 32 / 32 / 32 (927) |
| 768 | 1 | 1 | empilhado | 32 / 32 / 32 (704) |
| 576 | 1 | 1 | empilhado | 24 / 24 / 24 (528) |
| 375 | 1 | 1 | empilhado | 16 / 16 / 16 (343) |

Os perfis têm os mesmos x e larguras dos cards demo em cada largura. A troca acontece exatamente entre 991 e 992px (breakpoint `tablet-lg`).

**Resumo**: 12 de 12 ACs (AVS-01 a AVS-12) atendem o resultado do SPEC. 1 lacuna de precisão menor (AVS-04, redação da altura).

### Casos de borda do SPEC

- [x] Foto do Hero quebrada: com `src` inválido, H1 e descrição continuam visíveis e no topo do empilhamento, sobre o gradiente (`VideosHero.vue:13`). Testado a 1920 e 375px.
- [x] Texto de card mais longo: com 30 repetições de texto na descrição, o link fica abaixo da descrição e dentro do card, a 1920 e 1024px (`VideosDemo.vue:66` `min-h`, `VideosProfiles.vue:69` `min-h`).
- [x] Link externo em nova aba com `rel="noopener"`: 8 de 8 links.
- [x] Hero abaixo de 992px segue o `layout/Hero.vue` das páginas irmãs (mesmo shell; H1 e descrição legíveis a 375px).

---

## 3. Gate

- `pnpm build` (HEAD `e3d7a70`): exit 0. Só avisos de tempo de plugin e um `DEP0155` de dependência (não são da feature).
- Checagens de navegador em 9 larguras (1920, 1440, 1280, 1024, 992, 991, 768, 576, 375), passada completa no build atual:
  - Document 200; 0 erros de console; 0 respostas 4xx; 0 imagens quebradas (57 imagens na página em todas as larguras).
  - 1 `<h1>`; ordem e ids: `videos-hero`, `videos-institucional`, `videos-demonstrativos`, `videos-por-perfil`, `videos-app`, `videos-duvidas-frequentes`.
  - Textos: 0 textos do manifesto ausentes e 0 nós de texto fora do manifesto em `<main>`.
  - Overflow: nenhum. Empilhamento: correto em todas as larguras.
  - Todas as 15 checagens e o toggle do FAQ passaram em todas as larguras.
- Posição e altura a 1920px contra o Figma: Header 0+85, Hero 85+483, institucional 568+540, demonstrativos 1108+874, perfil 1982+478, banner 2460+336, FAQ em 2796. Todos iguais (tolerância usada: 2px). A correção de `1d74a31` não mexe no layout a 1920px.
- Diferença de pixels contra `qa/fig-videos-page.png` (média do maior desvio por canal, 0 a 255; % de pixels com desvio > 24): Header 3,60 / 3,07%; Hero 4,81 / 3,54%; institucional 1,82 / 2,22%; demonstrativos 1,74 / 1,71%; perfil 1,69 / 2,35%; banner 1,24 / 1,25%; título do FAQ 0,97 / 1,31%. Controle (institucional contra demonstrativos, deslocado): 74,66 / 49,44%. Os valores são idênticos aos da rodada anterior.
- Sem suíte de testes ([[AD-002]]). Contagem de testes: n/a.

---

## 4. Sensor de discriminação

As mesmas mutações no DOM vivo pelo DevTools (`Runtime.evaluate`), sem tocar o disco, rodaram de novo no build atual. Para cada mutação: página recarregada, checagem rodada antes (tem que passar) e depois (tem que falhar).

| # | Mutação no DOM | Checagem alvo | Antes | Depois | Morta? |
| --- | --- | --- | --- | --- | --- |
| M1 | Remover `#videos-demonstrativos` | ordem das sections | ok | falhou | ✅ |
| M2 | Duplicar o `<h1>` | 1 `<h1>` | ok | falhou | ✅ |
| M3 | "em ação" → "em acao" no H2 | textos do manifesto | ok | falhou | ✅ |
| M4 | `div` com `width: 3000px` em `<main>` | overflow | ok | falhou | ✅ |
| M5 | `src` do círculo de perfil 1 inválido | imagens quebradas e 4xx | ok | falhou (as duas) | ✅ |
| M6 | Tirar `aria-labelledby` do link demo 2 | nome acessível com título | ok | falhou | ✅ |
| M7 | Fundo do perfil 2 = `#ffffff` | cores dos perfis | ok | falhou | ✅ |
| M8 | Link do banner para outro domínio e sem `target` | destinos dos links | ok | falhou | ✅ |
| M9 | H1 com 40px | tipografia do Hero | ok | falhou | ✅ |
| M10 | Primeiro item do FAQ aberto | FAQ fechado por padrão | ok | falhou | ✅ |
| M11 | Inserir pergunta 6 com resposta inventada | FAQ e textos do manifesto | ok | falhou (as duas) | ✅ |
| M12 | `padding-top: 60px` no institucional | posições contra o Figma | ok | falhou | ✅ |
| M13 | Grade demo com 3 colunas a 375px | empilhamento | ok | falhou | ✅ |
| M14 | CSS que impede a troca "+"/"−" | toggle do FAQ | ok | falhou | ✅ |
| M15 | Remover o `<footer>` | Header e Footer | ok | falhou | ✅ |
| M16 | `console.error` injetado | erros de console | 0 | 1 | ✅ |
| M17 | Grade de perfis com 2 colunas a 768px (reproduz o defeito anterior) | empilhamento | ok | falhou | ✅ |

**Result**: 17 de 17 mutações mortas, 0 sobreviventes.

M17 é nova nesta rodada. Ela reproduz o defeito corrigido e mostra que a checagem de empilhamento o detecta. Rodou a 768px; a variante a 991px travou no navegador headless e foi abortada. A 991px o defeito já tinha sido detectado pela checagem real na rodada anterior (x 32/508/32).

Limites conhecidos das checagens (não são mutações sobreviventes, mas reduzem a força):
- A checagem "nenhum texto fora do manifesto" compara cada nó de texto como substring do manifesto. Nós curtos ("on", "01") passam trivialmente.
- "Um único array com um `v-for`" é provado no código (`file:line`), não no DOM. O DOM só prova template único (mesma `className` nos 3 cards).

---

## 5. Regressão do `layout/Hero.vue`

- `Hero.vue` não mudou desde a rodada anterior (`git diff 0e60b38..HEAD` só toca `VideosDemo.vue`, `VideosProfiles.vue` e 3 arquivos em `.specs/`).
- Código: `git show 29fe303:app/components/layout/Hero.vue` tinha as classes literais no `<h1>` e no `<p>`. Agora `app/components/layout/Hero.vue:74` usa `:class="headingClass"` e `:77` usa `:class="descriptionClass"`; os padrões em `:48` a `:50` são as mesmas strings, caractere por caractere (conferido com `grep -F`).
- Chamadores: `git diff --name-only 29fe303..HEAD` não lista nenhum dos 9 (`ApisHero`, `BaseConhecimentoHero`, `CrmHero`, `CrmRuralHero`, `CrmTemporadaHero`, `CrmUrbanoHero`, `SiteLoteadorasHero`, `SiteRuralHero`, `SiteUrbanoHero`). Nenhum passa `heading-class` ou `description-class`.
- HTML renderizado (build de produção, rodada anterior; o código envolvido não mudou): `/modulos/base-de-conhecimento`, `/modulos/crm`, `/modulos/site-para-imobiliarias-urbanas` e `/modulos/site-para-loteadoras` respondem 200, têm 1 `<h1>` com `class="text-[32px] leading-[1.2] font-bold text-ink tablet-lg:text-[30px] desktop-full:text-[42px]"` e o `<p>` com a classe antiga exata.
- Resultado: sem regressão.

---

## 6. Regras do `CLAUDE.md` na diff

| Regra | Resultado |
| --- | --- |
| Nenhum comentário adicionado | ✅ 0 ocorrências de `<!--`, `//`, `/*` nas linhas adicionadas em `app/` |
| Sem `translate-x/y` para centralizar (AD-007) | ✅ 0 ocorrências; centralização por flexbox (`app/components/ui/PlayButton.vue:56`) |
| Sem array/objeto literal inline em atributo de template | ✅ para dados. `app/components/layout/SectionHeading.vue:24` usa `:class="[alignClass, wrapperClass]"`, padrão já usado em `Hero.vue` e outros antes da feature; o build passa |
| Dados repetidos em array tipado | ✅ tags, vídeos, perfis, FAQ, ícones de módulo |
| Prefixo `Videos*` nas sections | ✅ 6 de 6 |
| `layout/` sem copy de produto | ✅ `SectionHeading.vue` sem texto nem import de dados |
| Assets sem duplicata | ✅ 17 arquivos novos, cada hash MD5 aparece 1 vez em `public/`; cada um tem 1 referência em `app/` |

A correção `1d74a31` só remove uma classe; nenhuma regra foi afetada.

Observação menor: `app/components/ui/PlayButton.vue:24` a `:49` embute caminhos `videos-*` no primitivo `ui/`. Aceitável hoje (um só chamador de página), mas o componente não é genérico.

---

## 7. Lacunas ranqueadas

Nenhuma lacuna bloqueia AVS-01 a AVS-12. Restam observações:

1. **Risco de deploy, registrado como decisão pendente (fora dos ACs).** O `qa-report.md` registra que o `pnpm generate` não prerenderiza `/assista-os-videos-do-subsee-on`, porque nenhum link aponta para a rota. Não é AC desta feature. O verificador não rodou `pnpm generate`.
2. **Lacuna de precisão do SPEC em AVS-04.** O SPEC diz "altura total de 568px". O `<section>` mede 483px porque o Header (85px) não sobrepõe o Hero como no Figma. A borda inferior fica em 568, igual ao Figma. Sugestão: reescrever o AC como "borda inferior do Hero em y=568 a 1920px".
3. **`ui/PlayButton.vue` com caminhos de asset da página.** Menor; só importa se surgir um segundo chamador.

Resolvido desde a rodada anterior: AVS-12 (`1d74a31`), `spec.md:1` e tabela de rastreabilidade (`e3d7a70`), `tasks.md:27` (`e3d7a70`).

---

## 8. Bloqueados por decisão pendente (não são falhas)

- AVS-13 / T16: sem `useSeoMeta` (Q5).
- Pergunta 6 do FAQ / T17: ausente, sem resposta inventada (Q4).
- Destinos reais e reprodução dos vídeos / T18: links usam o fallback provisório `https://www.youtube.com/@subsee` de `app/data/videos.ts:1` (Q1 a Q3). Q6 (comportamento do botão da Home) também segue aberta.
