# Validation — `crm-imobiliario-temporada`

**Verificação:** feita em sessão posterior à implementação, com evidência colhida de novo em 2026-10-02. As marcações do `tasks.md` (0 de 131 itens) e do Handoff do STATE ("T1–T16 done") foram tratadas como não confirmadas até serem reproduzidas contra o código e o Figma.

- **Diagnóstico estático:** leitura de `spec.md`, `tasks.md`, STATE, dos 12 componentes `CrmTemporada*.vue` e da página; `pnpm build`; contagem de headings e seções no HTML renderizado.
- **Evidência dinâmica:** Playwright (Chromium) contra o build de produção da `master`, com servidor local iniciado e encerrado pelo próprio script. Cobriu largura de 375 a 1920px, FAQ, navegação, console e respostas HTTP.
- **Figma:** duas rodadas de conferência visual do frame `3118:20686`, seção a seção a 1920px, com medidas do `get_metadata`, cores amostradas das capturas e comparação lado a lado.

A feature não tem `design.md` (decisão registrada no `tasks.md`: "Design: skipped").

## Veredito: **PASS with ressalvas**

A feature está funcional, responsiva, sem overflow horizontal após `baae9f8`, com build aprovado e com os ícones objetivos alinhados ao Figma. Os 16 critérios de aceite da SPEC estão atendidos.

**Não é PASS limpo:** há diferenças visuais reais em relação ao Figma (Key Board, Pricing Rules, paleta do Calendar), uma diferença de baixa severidade no tamanho dos ícones do Financial Transfer e um corte de abas no mobile. Nenhuma é falha funcional e nenhuma foi corrigida nesta validação.

---

## Resumo da evidência

| Verificação | Resultado |
| --- | --- |
| `pnpm build` | Sucesso (exit 0, "Build complete"), com o código atual incluindo `baae9f8` e `87b21ed` |
| Rota `/modulos/crm-imobiliario-temporada/` | HTTP 200 em 1920, 1440, 1280, 1024, 768, 576 e 375px |
| Seções | 12, na ordem do Figma: `crm-temporada-hero`, `-technology`, `-portfolio`, `-calendar`, `-keyboard`, `-pricing`, `-messaging`, `-financial`, `-inteligente`, `-depoimentos`, `-outros-modulos`, `-faq` |
| Headings | 1 `<h1>` em toda a árvore e 11 `<h2>` no `<main>` |
| Console / HTTP | Zero erros e avisos de console, zero respostas ≥400, zero requisições falhas, zero imagens quebradas |
| Overflow horizontal | Nenhum em todas as larguras testadas após `baae9f8` (o bug foi detectado nesta validação e corrigido) |
| FAQ | 6 itens `<details>`; abrir e fechar funcionam, com troca "+" ↔ "−" |
| Navegação | Mega-menu, card da Home, 3 links de "Outros módulos" e links de entrada nos módulos irmãos funcionam |
| Assets | Todos os ícones e imagens referenciados existem em `public/` |
| Higiene do código | Sem `translate-x/y` (AD-007) e sem comentários nos arquivos da feature |

---

## Evidência por critério de aceite

A SPEC não tem IDs; usei os rótulos `P<história>-AC<n>`.

| AC | Evidência | Atendido? |
| --- | --- | --- |
| P1-AC1 rota 200 | HTTP 200 nas 7 larguras; [crm-imobiliario-temporada.vue:14-25](../../../app/pages/modulos/crm-imobiliario-temporada.vue#L14-L25) compõe as 12 seções na ordem do Figma | sim |
| P1-AC2 Hero | [CrmTemporadaHero.vue:16-18](../../../app/components/sections/CrmTemporadaHero.vue#L16-L18) (H1), `:20-22` (descrição), `:26-48` (foto e `card_arrow.png` com os cards "Casa na Praia" e "Nova reserva"), `:50-59` (ícone do canto), `divider-src` na linha 12 | sim |
| P1-AC3 Technology | [CrmTemporadaTechnology.vue:19-26](../../../app/components/sections/CrmTemporadaTechnology.vue#L19-L26); o CTA "Testar grátis por 30 dias" vem de `CrmTechnology` para `/testar-gratis/` | sim |
| P1-AC4 mega-menu | [HeaderBar.vue:43](../../../app/components/layout/HeaderBar.vue#L43). Playwright a 1440px: hover em "Módulos" e clique levam a `/modulos/crm-imobiliario-temporada/` | sim |
| P2-AC1 Portfolio | [CrmTemporadaPortfolio.vue:10-39](../../../app/components/sections/CrmTemporadaPortfolio.vue#L10-L39): 4 features com os títulos exigidos | sim |
| P2-AC2 Calendar | [CrmTemporadaCalendar.vue:21-124](../../../app/components/sections/CrmTemporadaCalendar.vue#L21-L124): H2, 2 itens, CTA, card com grade, legenda, 94% e R$ 128k | sim (paleta diverge; ver Ressalva 3) |
| P2-AC3 Key Board | [CrmTemporadaKeyBoard.vue:11-42](../../../app/components/sections/CrmTemporadaKeyBoard.vue#L11-L42): 3 colunas (3, 2 e 4 itens) e 3 checkmarks | sim (layout diverge; ver Ressalva 1) |
| P2-AC4 Pricing Rules | [CrmTemporadaPricingRules.vue:2-7](../../../app/components/sections/CrmTemporadaPricingRules.vue#L2-L7) (4 bullets), `:14-27` (12 meses; os percentuais batem com o Figma) | sim (paleta e tamanhos divergem; ver Ressalva 2) |
| P2-AC5 Automated Messaging | [CrmTemporadaAutomatedMessaging.vue:2-57](../../../app/components/sections/CrmTemporadaAutomatedMessaging.vue#L2-L57): 4 mensagens e 3 checkmarks, em markup | sim, mas diverge da SPEC (ver "Divergências documentais") |
| P2-AC6 Financial Transfer | [CrmTemporadaFinancialTransfer.vue:9-34](../../../app/components/sections/CrmTemporadaFinancialTransfer.vue#L9-L34): 3 itens e card de pagamento em markup | sim, mas diverge da SPEC |
| P2-AC7 Inteligente | [CrmTemporadaInteligente.vue:11-44](../../../app/components/sections/CrmTemporadaInteligente.vue#L11-L44): 4 cards ANTES→COM SUBSEE | sim |
| P3-AC1 Testimonials | [CrmTemporadaTestimonials.vue:22](../../../app/components/sections/CrmTemporadaTestimonials.vue#L22): ids `crm-temporada-joao-calcada` e `crm-temporada-marcio-carmona`, que existem em `testimonials.json` com nome, cargo e empresa corretos | sim |
| P3-AC2 Other Modules | [CrmTemporadaOtherModules.vue:9-28](../../../app/components/sections/CrmTemporadaOtherModules.vue#L9-L28): 3 módulos, sem o Temporada. Playwright: os 3 links levam a `/modulos/crm/`, `/modulos/crm-imobiliario-urbano/` e `/modulos/crm-imobiliario-rural/` | sim (o Rural difere da SPEC) |
| P3-AC3 FAQ | [CrmTemporadaFaq.vue:2-33](../../../app/components/sections/CrmTemporadaFaq.vue#L2-L33) e `:37-41`; título "Perguntas Frequentes" vindo do `CrmFaq` e a tagline. Playwright: item aberto muda de 91px para 239px, "+" some e "−" aparece, e fechar volta ao estado inicial | sim |
| P3-AC4 um `<h1>` | 1 `<h1>` em toda a árvore, em todas as larguras | sim |
| P3-AC5 SEO | [crm-imobiliario-temporada.vue:2-9](../../../app/pages/modulos/crm-imobiliario-temporada.vue#L2-L9); título e descrição presentes no HTML | sim |

**Total: 16 critérios de aceite da SPEC atendidos.**

---

## Conformidade com o Figma

Conferido seção a seção a 1920px; todas as 12 seções conferem em estrutura e composição.

- **Textos e dados:** títulos, descrições, perguntas e respostas do FAQ, textos das features, nomes e contagens do Key Board, os 12 percentuais do Pricing, o 94% e o R$ 128k do Calendar.
- **Hero:** H1 com "temporada" em destaque, selo, foto, cards flutuantes, ícone do canto e divisor ondulado.
- **Technology e Portfolio:** título, CTA e mockups. O Portfolio tem o painel com gradiente.
- **Messaging e Financial Transfer:** os cards em markup batem com o Figma de forma muito próxima.
- **Inteligente, Testimonials, Other Modules e FAQ:** estrutura e conteúdo.
- **Depoimentos:** João Calçada (Imobiliária Soma) e Marcio Carmona (Carmona Imóveis), igual ao Figma.
- **Ícones corrigidos** (commit `87b21ed`, exportados dos nodes do Figma):
  - Calendar: relógio em "Status em tempo real" e engrenagem em "Gestão simplificada".
  - Portfolio: calendário com check, câmera, documento e camadas.
  - Financial Transfer: olho, sol (círculo com raios) e relógio com ponteiros em 12h e 9h.

---

## Ressalvas (diferenças reais em relação ao Figma)

Não são falhas funcionais. **Nenhuma foi corrigida nesta validação.**

### 1. Key Board — [CrmTemporadaKeyBoard.vue](../../../app/components/sections/CrmTemporadaKeyBoard.vue)
| Item | Figma | Site |
| --- | --- | --- |
| Colunas | 3 × 280px, espaço de 30px (conjunto de 900px) | 3 × cerca de 413px |
| Cabeçalho | 40px; `#00d39b`, `#ff9900`, `#5d5fef` | `#1cd9a4`, `#f59e0b`, `#5d5fef` |
| Linhas de item | 256 × 44px, fundo tingido da cor da coluna (`#ebfcf7`, `#fff7eb`, `#f2f3fe`) | cerca de 389 × 37px, fundo neutro `#f9fafb` |
| Marcador | ícone de chave de 20px | ponto de 8px |
| Título | 1 linha (caixa de 1400px) | 2 linhas (caixa de 780px) |
| Altura | bloco 695px, seção 775px | bloco 639px, seção 735px |

O ícone de chave exato ainda não foi exportado do Figma.

### 2. Pricing Rules — [CrmTemporadaPricingRules.vue](../../../app/components/sections/CrmTemporadaPricingRules.vue)
| Item | Figma | Site |
| --- | --- | --- |
| Paleta | gradiente contínuo da cor da marca, de `#bfc0f8` (35%) a `#7a7bf1` (96%) | 4 níveis discretos de índigo (`#a5b4fc`, `#818cf8`, `#6366f1`, `#4f46e5`), mais escuros e de outro matiz |
| Célula | 130 × 100px, espaço de 12px | cerca de 107 × 71,5px, espaço de 8px |
| Card | 620 × 480px | cerca de 500 × 349,5px |
| Coluna de texto | 698px | 560px |
| Título ("Entenda sua alta e baixa temporada") | 1 linha | 2 linhas |
| Barra de legenda | 480 × 10px, `#e5e5fc` → `#5f61ef` | 6px, `#c7d2fe` → `#4f46e5` |
| Altura da seção | 560px | cerca de 646px |

A diferença de cor foi confirmada no Figma por amostragem de pixels, não presumida.

### 3. Calendar — [CrmTemporadaCalendar.vue](../../../app/components/sections/CrmTemporadaCalendar.vue)
- O overflow já está corrigido e validado (ver "Responsividade").
- A **paleta das células ainda difere**. O Figma usa predominantemente `#6366ee`, com células livres (`#f1f1f4`) e só duas intermediárias (`#c9caf2` e `#8f92ea`). O site mistura três tons de índigo ([CrmTemporadaCalendar.vue:4-10](../../../app/components/sections/CrmTemporadaCalendar.vue#L4-L10)).
- **Métricas:** no Figma ficam em caixas cinza; no site, separadas por um divisor.

### 4. Financial Transfer, tamanho dos ícones — [CrmTemporadaFinancialTransfer.vue](../../../app/components/sections/CrmTemporadaFinancialTransfer.vue)
- Os glifos estão corretos.
- O Figma mostra ícones de cerca de 34px **sem círculo**. O site mantém um círculo de 38px com borda e ícones de cerca de 20px (o olho com 20 × 12). O texto começa no mesmo x (54px) nos dois.
- **Severidade baixa:** diferença visual de escala e moldura.

### 5. Financial Transfer, mobile 375px — [CrmTemporadaFinancialTransfer.vue](../../../app/components/sections/CrmTemporadaFinancialTransfer.vue)
- As abas do card de pagamento ("Detalhes, Hóspedes, Pagamentos, Serviços, Contrato, Mensagens") não cabem nos 343px disponíveis.
- "Contrato" e "Mensagens" ficam escondidos e "Serviços" aparece parcialmente.
- **Não há overflow da página nem sobreposição**; o card esconde o excesso.
- Ressalva de responsividade visual.

---

## Diferenças aceitáveis (variações de layout, sem ação)

- **Alturas das seções** (Figma → site, 1920px): Hero 528 → 514, Technology 1070 → 1102, Portfolio 1044 → 1078, Calendar 590 → 612, Messaging 704 → 712, Financial 602 → 630, Inteligente 618 → 598, Testimonials 770 → 792. São variações de largura de coluna.
- **Título do Testimonials** em 4 linhas contra 3: vem do `layout/Testimonials.vue` compartilhado.
- **Other Modules** com 662px contra 566px, por padding de linha.
- **FAQ:** o Figma mostra os 6 itens abertos (estado de design); o site abre sob demanda.
- **Cor do bloco cinza** do Key Board (`#f5f5f5` contra `#f4f4f7`): imperceptível.

---

## Responsividade

| Largura | Resultado |
| --- | --- |
| 1920, 1440, 1280, 1024, 768, 576, 375px | HTTP 200, `scrollWidth` igual a `clientWidth` (sem overflow horizontal), 12 seções, 1 `<h1>` |
| 1024px | Sem overflow, sem texto cortado, zero erros de console |
| 375px | Sem rolagem horizontal da página; zero erros de console; corte das abas do Financial Transfer (Ressalva 5) |

**Correção do Calendar (`baae9f8`).**
- **Bug original:** entre 992 e cerca de 1100px o card do calendário excedia o container (em 1024px o `scrollWidth` chegou a 1083px), porque a coluna de texto tem um botão fixo de 297px e o card estava travado em 620px.
- **Correção:** no card ([CrmTemporadaCalendar.vue:74](../../../app/components/sections/CrmTemporadaCalendar.vue#L74)), entre 992px e 1299px ele pode encolher (`tablet-lg:min-w-0 tablet-lg:shrink desktop:shrink-0`).
- **Verificação:** o card ficou **dentro do container** em 375, 768, 992, 1024, 1100, 1199, 1250, 1300 e 1920px (por exemplo, 397px a 1024px e 620px a partir de 1300px).

---

## Divergências documentais

1. **`tasks.md`.** Os 131 itens estão desmarcados (`[ ]`), com `Status: In Progress` e um aviso de que "este diretório não é um repositório git". O código confirma a implementação de T1 a T16. As marcações estão desatualizadas.
2. **Cards de Messaging e Financial Transfer.** A SPEC (Assumptions e P2-AC5/6), T8, T9 e o manifesto descrevem imagem estática. O código implementa markup real, e os PNGs planejados (`automated-messaging-card.png`, `financial-transfer-card.png`) nunca foram criados. O resultado visual bate com o Figma.
3. **Link do Rural.** A SPEC e T12 dizem `/modulos/rural`. O código usa `/modulos/crm-imobiliario-rural/` (commit `7b6c4b4`), que é o destino correto.
4. **T7.** O item "baixa em cor diferente de alta, conforme o Figma" estava errado: o Figma mostra as duas em azul/roxo, como o código.
5. **SPEC.** Não tem a seção "Requirement Traceability" nem IDs de requisito; o `validate_spec.py` aponta isso como erro no `spec.md` (ver abaixo).
6. **Inconsistência de conteúdo (não é bug de código).** O Portfolio diz "Publique seus imóveis no Airbnb, Booking, TripAdvisor…", mas o FAQ diz que a integração direta com Airbnb e Booking "está prevista para 2027". Ambos vêm do Figma; vale uma decisão de conteúdo.
7. **Handoff do STATE.** Cita `localhost:3002` e um "visual QA pass" como próximo passo, que nunca foi registrado. Esta validação o cobre.

Nenhuma dessas divergências foi corrigida; este documento só as registra.

---

## Histórico e evidência de commits

- `baae9f8` — `fix(crm-temporada): prevent calendar section overflow` (correção do overflow do Calendar).
- `87b21ed` — `fix(crm-temporada): align feature icons with figma` (alinhamento dos ícones ao Figma).

Os commits servem como evidência das correções feitas durante a verificação; o conteúdo funcional da feature vem da implementação original em `2044cf6`.

---

## Itens em aberto (fora desta validação)

- Os desvios das Ressalvas 1 a 5 podem ser corrigidos em tarefa separada. A chave do Key Board exigiria exportar o ícone do Figma.
- A atualização de `spec.md`, `tasks.md` e do STATE para refletir o que foi construído fica para uma etapa separada.
