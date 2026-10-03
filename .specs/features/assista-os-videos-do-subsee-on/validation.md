## Validation: assista-os-videos-do-subsee-on - PASS com ressalvas

**Escopo**: T1 a T15 implementadas; a feature NÃO está completa: pergunta 6 do FAQ, vídeos reais dos demos 2 e 3, destinos reais dos links e a confirmação do texto de SEO seguem pendentes por decisão do usuário (Q1 a Q5)

**Data**: auditoria em 2026-10-02 e correções com revalidação em 2026-10-03. **Substitui a validação de 2026-09-29** (HEAD `e3d7a70`), que estava desatualizada (ver seção 8)
**Spec**: `.specs/features/assista-os-videos-do-subsee-on/spec.md`
**Verificação**: Playwright (Chromium) contra o servidor de desenvolvimento (`pnpm dev` do desenvolvedor, porta 3000), que serve o código-fonte atual. `pnpm build` **não foi repetido** (ver seção 3). Figma: fileKey `vX7qKnnXSOW8zv4kAuS2eN`, frame `Page` `3188:3397`.

Motivo do veredito: AVS-01 a AVS-06, AVS-08, AVS-09, AVS-11 e AVS-12 atendem o SPEC no código atual. **AVS-07, AVS-10 e AVS-13 continuam parciais** por decisão pendente, e não por defeito. A auditoria encontrou **dois defeitos técnicos no `VideoModal`** (um aviso de console e a contenção de foco), **corrigidos e revalidados**, com uma limitação de navegador registrada (seção 2.1).

---

## 1. Resumo da evidência (depois das correções)

Nas 12 larguras principais (1920, 1440, 1280, 1024, 992, 768, 576, 414, 390, 375, 360 e 320px):

| Verificação | Resultado |
| --- | --- |
| Rota `/assista-os-videos-do-subsee-on/` | HTTP 200 nas 12 larguras |
| Overflow horizontal | **Nenhum** (`scrollWidth === clientWidth`) |
| Console / HTTP | console 0, respostas ≥400: 0, falhas de requisição: 0 |
| Imagens | quebradas: 0; candidatos `0w` no `srcset`: 0 |
| Seções | 6: `videos-hero`, `videos-institucional`, `videos-demonstrativos`, `videos-por-perfil`, `videos-app`, `videos-duvidas-frequentes` |
| Headings | **1 `<h1>`, 5 `<h2>` e 6 `<h3>`** em `main`; ao abrir, o modal acrescenta um `<h2>` ao `body` |
| Alturas a 1920px | 483 / 565 / 874 / 478 / 336 / 694, iguais às medidas antes das correções |

A **faixa 980–1250px** (980, 1000, 1050, 1100, 1150, 1198, 1199, 1200 e 1250) foi testada na auditoria, **antes das correções**: sem overflow, console 0 e `0w` 0. Não foi repetida depois, porque a correção só afeta o `VideoModal`, que não participa do layout da página.

---

## 2. Correções feitas durante a validação (`app/components/ui/VideoModal.vue`)

### 2.1 Foco do modal e `allowfullscreen`

**Problema 1 — aviso de console:** o `<iframe>` tinha `allowfullscreen` e `allow="…; fullscreen"` ao mesmo tempo. Ao abrir o modal, o navegador emitia `Allow attribute will take precedence over 'allowfullscreen'.` (medido a 1440 e a 375px).
**Correção:** o atributo `allowfullscreen` foi removido; `fullscreen` continua em `allow`.

**Problema 2 — o foco escapava do modal:** o modal tem `role="dialog"` e `aria-modal="true"`, mas o iframe é focável e o `Tab` dentro dele não passa pelo `keydown` do documento. Na auditoria, a partir do botão "Fechar vídeo", 2 `Tab` levavam o foco para um `<a>` fora do modal.
**Correção:** um listener `focusin` no documento, ativo só enquanto o modal está aberto (adicionado e removido junto com o `keydown`, e removido também em `onBeforeUnmount`): se o foco chega a um elemento fora do diálogo, volta para o botão "Fechar vídeo". O iframe continua focável, e o vídeo, o layout e a aparência não mudaram.

**Testes (modal aberto a partir do card institucional, a 1440 e a 375px):**

| Teste | Resultado |
| --- | --- |
| Foco inicial | No botão "Fechar vídeo", dentro do diálogo; `body` com `overflow: hidden` |
| `Tab` x12 | O foco nunca saiu do modal (0 ocorrências fora, em 24 teclas) |
| `Shift+Tab` x12 | O foco nunca saiu do modal (0 ocorrências fora, em 24 teclas) |
| `Esc` logo após abrir | Fecha; o foco volta ao botão que abriu ("Assistir ao vídeo: Uma visão completa da plataforma"); `overflow` do `body` volta a vazio |
| `Tab` + `Shift+Tab`, depois `Esc` | Fecha; foco restaurado; `overflow` restaurado |
| Clique no fundo (overlay) | Fecha; foco restaurado; `overflow` restaurado |
| Console | 2 avisos, ambos vindos de **dentro do iframe do YouTube** (ver abaixo); nenhum aviso da página |

**Avisos de WebGPU:** `The powerPreference option is currently ignored when calling requestAdapter() on Windows` e `No available adapters` aparecem com origem em `youtube-nocookie.com/embed/…`, ou seja, dentro do player. São ruído do Chromium sem GPU, **não são erros da página**.

**Limitação conhecida (medida):** quando o foco está **dentro do iframe do YouTube** (outro domínio), o player consome as teclas e o `Esc` não chega à página; nesse estado o modal **não fecha** (medido: após 12 `Shift+Tab`, com o foco no iframe, `Esc` deixou o modal aberto). O `Tab` e o `Shift+Tab` continuam contidos, e o `Esc` fecha sempre que o foco está fora do iframe. Contornar isso exigiria `tabindex="-1"` no iframe, que tiraria os controles do player do alcance do teclado; **não foi feito**, e a decisão fica com o usuário. O comportamento antes da correção não foi reproduzido por reversão do código; a evidência da melhoria é a ausência de qualquer tecla com foco fora do modal nas 48 teclas acima.

---

## 3. Conclusão das tarefas e gate

Tarefas (estado do `tasks.md`): T1 a T15 `[x]`; T16, T17 e T18 `[ ]` (bloqueadas por Q1 a Q5). O código atual **já tem `useSeoMeta`** (T16), um modal de vídeo e links reais para o app, que o `tasks.md` não reflete (ver "Divergências documentais"). A tabela de commits por tarefa da validação anterior não foi reverificada.

- **`pnpm build` não foi repetido**: o `pnpm dev` ativo compartilha `.nuxt` e `.output` com o build. A validação anterior registrava `pnpm build` com exit 0 (HEAD `e3d7a70`, 2026-09-29); o gate de build desta página não foi reverificado agora.
- Sem suíte de testes ([[AD-002]]). Contagem de testes: n/a.

---

## 4. Critérios de aceite (ancorados no SPEC)

| AC | Resultado esperado do SPEC | Evidência atual | Resultado |
| --- | --- | --- | --- |
| AVS-01 | Rota 200 com Header e Footer | HTTP 200 nas 12 larguras (e nas 21 da auditoria); `header` e `footer` fora de `<main>` | ✅ |
| AVS-02 | Hero com H1, descrição, 5 ícones, foto, 2 cards | H1 "Assista aos vídeos do SUBSEE on" medido; 5 ícones de módulo; foto; cards "Vídeos Práticos" e "Time Capacitado" (`VideosHero.vue:39-121`) | ✅ |
| AVS-03 | Exatamente um `<h1>` | 1 `<h1>` nas 12 larguras | ✅ |
| AVS-04 | Hero a 1920px | A borda inferior do Hero fica em y=568 (igual ao Figma); a seção mede 483px, porque o Header (85px) não sobrepõe o Hero como no Figma. O texto do AC ("altura total 568px") continua impreciso | ✅ (lacuna de redação do SPEC) |
| AVS-05 | Vídeo institucional | y=568, h=565 (= Figma); badge, play de 92px e legenda presentes | ✅ |
| AVS-06 | Vídeos demonstrativos, 3 cards 430×520, um array e um `v-for` | y=1133, h=874 (= Figma); 3 cards 430×520 a 1920px; `VideosDemo.vue:16` (array) e `:79` (`v-for`) | ✅ |
| **AVS-07** | Clique no card ou link abre o destino; teclado; Q1 pendente | **Mudou.** O SPEC prevê o canal do YouTube em nova aba. Hoje o card institucional e o "Assistir ao vídeo →" do demo 1 abrem um **modal** com embed `youtube-nocookie` (o **mesmo** id, `kmwo-MkJ34M`, nos dois: `VideosFeatured.vue:5` e `VideosDemo.vue:25`); os demos 2 e 3 abrem `https://www.youtube.com/@subsee` em nova aba. Botões focáveis, com `aria-label`/`aria-labelledby` com o título e `aria-haspopup="dialog"` no card institucional | **Parcial** (vídeos reais dos demos 2 e 3, títulos e durações reais pendentes: Q1) |
| AVS-08 | Conteúdo por perfil, 3 cards numerados, cores por perfil | 3 cards 01/02/03 com um array e um `v-for` (`VideosProfiles.vue:15-46`) | ✅ |
| AVS-09 | Banner App SUBSEE; botão e "Ver vídeos →" com fallback | Banner 1400×220 a 1920px (seção 336 = Figma). **Mudou:** o botão e "Ver vídeos →" agora apontam para `https://app.subsee.com.br` (`target="_blank"`, `rel="noopener noreferrer"`), um destino definido, e não o fallback | ✅ (destino definido; confirmar se é a decisão final: Q2, Q3) |
| **AVS-10** | FAQ com 6 perguntas, painel branco, "+"/"−" | 5 perguntas, todas **fechadas ao carregar** (decisão do usuário, difere do Figma); a troca "+"/"−" ocorre por clique e por Enter. FAQ fechado 694px, aberto 982px, contra 1063px no Figma (a diferença é o item 6 mais 83px). **Pergunta 6 ausente** | **Parcial** (pergunta 6 pendente: Q4) |
| AVS-11 | Sem overflow | `scrollWidth === clientWidth` nas 12 larguras | ✅ |
| AVS-12 | Abaixo de 992px, coluna única | Institucional, demonstrativos e perfis em coluna única abaixo de 992px; 3 colunas a partir de 992px, e coluna única em 980px | ✅ |
| **AVS-13** | SEO via `useSeoMeta` com os valores de Q5 | **Mudou.** [assista-os-videos-do-subsee-on.vue](../../../app/pages/assista-os-videos-do-subsee-on.vue) tem `useSeoMeta` (`title` "SUBSEE | Vídeos e Tutoriais do SUBSEE on", `description`, `ogTitle`, `ogDescription`), adicionado em `c8c24ac`. Mas a SPEC ainda o marca como bloqueado (Q5), e não consta aprovação explícita do texto pelo usuário | **Parcial** (implementado no código; texto de Q5 por confirmar) |

**Resumo:** 10 de 13 ACs atendidos (AVS-01 a AVS-06, AVS-08, AVS-09, AVS-11 e AVS-12); **3 parciais** (AVS-07, AVS-10 e AVS-13), todos por decisão pendente.

### Casos de borda do SPEC

- **Links externos em nova aba:** 6 de 6 links `<a>` em `main` com `target="_blank"` e `rel` contendo `noopener` (mais 2 botões que abrem o modal).
- **Foto do Hero quebrada e texto longo de card:** não retestados nesta validação; constavam como testados em 2026-09-29, e o código mantém os `min-h` dos cards (`VideosDemo.vue:81,95,99` e `VideosProfiles.vue:69,82`).
- **Hero abaixo de 992px:** segue o `layout/Hero.vue`; sem overflow de 320 a 991px.
- **Sem JavaScript:** os botões do modal são `<button>` sem `href`, então não têm fallback; só os demos 2 e 3 são `<a>`.

---

## 5. Conformidade com o Figma

Comparado a 1920px. Header 0 / 85, Hero 0 / 568 (a seção do site mede 483 e termina em 568, com o Header sobreposto no Figma), Institucional 568 / 565, Demonstrativos 1133 / 874, Perfis 2007 / 478, Banner 2485 / 336, FAQ 2821 / 1063 (fechado 694 e aberto 982 no site), Footer h=462 no site contra 475 (componente global, fora da feature).

- **Conformes:** as seções 2 a 5 batem em posição e altura; a composição do Hero coincide (textos, foto, cards e ícones) sem diferença visível.
- **Diferenças** (nenhuma é bug; **nenhuma foi corrigida**): FAQ aberto no Figma e sob demanda no site, sem o item 6; o card institucional agora usa uma miniatura (AVIF) em vez do gradiente da SPEC; o diff de pixels da validação anterior (1,2 a 4,8) é de 2026-09-29 e não foi refeito.

---

## 6. SEO e acessibilidade

- `title`, `description`, `og:title` e `og:description` presentes; `lang` `pt-BR`. `canonical` `http://localhost:3000/assista-os-videos-do-subsee/` e `robots` `noindex, nofollow` localmente: o esperado fora de produção (plugin global de SEO). Faltam `og:image`, `og:url`, `twitter:*` e JSON-LD (lacuna do site todo).
- **Headings:** `<h1>`, 5 `<h2>` e 6 `<h3>` em ordem, sem saltos.
- **Modal:** `role="dialog"`, `aria-modal`, `aria-labelledby` com o título, foco inicial no botão Fechar, `Esc` e clique no fundo fecham, o foco volta ao botão que abriu e o `overflow` do `body` é restaurado.
- **Imagens:** nenhuma sem `alt`; 15 com `alt=""` dentro do `PlayButton` (`aria-hidden`); 34 imagens em `main` sem `width`/`height` (ícones SVG decorativos, glow do Hero e do FAQ). As imagens de conteúdo têm dimensões.
- As perguntas do FAQ usam `<summary>`, não `<h3>` (`layout/Faq.vue`).
- Nenhum item do header, do mega-menu, do menu mobile ou do footer leva à rota; só o botão da Home (`HeroMain.vue:84`), mesma aba. Isso importa para o prerender.

---

## 7. Regressões, ressalvas e pendências

**Regressões:** nenhuma. A correção afeta só o `VideoModal`; as 12 larguras mantêm os mesmos resultados e alturas.

**Ressalvas** (nenhuma foi corrigida nesta validação, exceto os dois pontos da seção 2):
1. Limitação do `Esc` quando o foco está dentro do iframe do YouTube (seção 2.1).
2. Avisos de WebGPU do iframe, ambientais.
3. O vídeo do card institucional e o do demo 1 são o mesmo id; as durações do badge e dos cards ("03:24", "04:18" etc.) continuam o texto do Figma, não a duração real.
4. `videosFallbackUrl` (`app/data/videos.ts`) ainda é usado pelos demos 2 e 3.
5. `ui/PlayButton.vue:24-49` embute caminhos `videos-*` (um só chamador hoje).
6. 34 imagens decorativas sem `width`/`height`.
7. `pnpm build` e a faixa 980–1250px não repetidos depois das correções.

**Pendências por decisão do usuário (não são falhas):**
- **AVS-07 / T18:** vídeos reais dos demos 2 e 3 e títulos e durações reais (Q1); hoje só um id de vídeo existe.
- **AVS-10 / T17:** pergunta 6 do FAQ, sem resposta inventada (Q4).
- **AVS-13 / T16:** confirmar o texto de SEO que já está no código (Q5).
- **AVS-09:** confirmar que `https://app.subsee.com.br` é o destino final de "Ver vídeos" e do banner (Q2, Q3).
- **Q6:** comportamento do botão da Home (hoje na mesma aba).

---

## 8. Divergências documentais e comparação com a validação anterior

**Divergências** (`spec.md`, `tasks.md` e `design.md` **não foram alterados** nesta etapa):
1. A SPEC (Q1 a Q3, `spec.md:34,48-50`), as tasks (T18) e o `design.md` descrevem tudo como fallback do YouTube; hoje há um modal e os links "Ver vídeos" e do banner apontam para `app.subsee.com.br`. O player de vídeo consta como fora de escopo (`spec.md:19`).
2. A SPEC (`spec.md:52,169,171`) e o `tasks.md` (T16) marcam Q5/T16 como bloqueados, mas o `useSeoMeta` existe.
3. A altura do frame é 4334 na SPEC e 4359 no Figma (o manifesto cita 4359).
4. O cabeçalho do `tasks.md` ("T1 to T15 done; T16 to T18 blocked") está desatualizado; o `design.md` diz "sem player" e está em `Draft`.
5. O `qa-report.md` cita "8 links, todos YouTube" e "39 imagens"; hoje há 6 links `<a>` mais 2 botões, e a validação anterior contava 57 imagens. O relatório diz também que nenhum link aponta para a rota, mas `HeroMain.vue:84` aponta.
6. O AC4 do AVS-04 diz "altura total 568px" e o card institucional "760×460 com gradiente"; hoje a seção mede 483px e o card usa miniatura.
7. A SPEC cita o branch `feature/assista-videos-subsee-on`; o trabalho está na `master`.
8. `spec.md`: os requisitos AVS-01 a AVS-12 estão marcados como "Implementing" e AVS-13 como "In Tasks", enquanto o código já está além disso.

**Comparação com a validação de 2026-09-29** (HEAD `e3d7a70`, sub-agente independente, build de produção em `PORT=3100`, 9 larguras, 17/17 mutações mortas):
- **Continua válido:** AVS-01 a AVS-06, AVS-08, AVS-11 e AVS-12; as seções nas mesmas posições; 1 `<h1>`; sem overflow; FAQ fechado com "+"; empilhamento abaixo de 992px.
- **Desatualizado:** AVS-07 (modal e destinos), AVS-09 AC4 (link do app), AVS-13 (dizia sem `useSeoMeta`), "8 de 8 links YouTube", a contagem de 57 imagens, o risco de prerender (a Home agora linka a rota), o card institucional (hoje miniatura AVIF), e nenhum item sobre o modal.
- **Não reexecutado:** o sensor de discriminação (17 mutações), a regressão do `layout/Hero.vue` e a auditoria de regras do `CLAUDE.md` por diff; nesta etapa só foi conferido que o código novo não tem comentários nem `translate-*` (o `translate` que existe em `VideoModal.vue` é CSS de animação, não utilitário Tailwind).
- **Por que estava desatualizada:** foi feita sem as mudanças posteriores: o modal, os links reais para o app, o `useSeoMeta` (`c8c24ac`) e a thumbnail do institucional. Esta validação a substitui.
