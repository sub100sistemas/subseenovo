# CRM Imobiliário Temporada Tasks

## Execution Protocol (MANDATORY — do not skip)

**Commit deviation (recorded, not silent):** este diretório não é um repositório git. O passo "one atomic commit per task" não é executável. Substituto: cada task é marcada `[x]` neste arquivo **antes** de passar para a próxima task, e o checklist "Done when" é a trilha de auditoria no lugar do commit.

**No-comments deviation:** per `CLAUDE.md`, os arquivos `.vue`/`.ts`/`.css` deste repo não levam comentários. Qualquer justificativa vai neste arquivo ou em `.specs/STATE.md`.

---

**Design**: skipped — sem nova arquitetura; reutiliza o padrão `app/pages/<route>.vue` + `app/components/sections/<Prefix><Section>.vue` já estabelecido por `/modulos/crm` e `/modulos/crm-imobiliario-urbano`, com o novo prefixo `CrmTemporada` per as Assumptions da spec.

**Status**: In Progress

---

## Test Coverage Matrix

| Code Layer | Required Test Type | Coverage Expectation | Run Command |
| --- | --- | --- | --- |
| Content/asset manifest | none | Cada string e asset verificados 1:1 contra o node Figma antes do uso | manual review only |
| New section component (`CrmTemporada*.vue`) | none | Compila; renderiza o conteúdo do manifest; corresponde ao AC mapeado em verificação manual desktop/tablet/mobile; sem comentários | `pnpm build` |
| Page component (`crm-imobiliario-temporada.vue`) | none | Rota resolve 200; 12 seções na ordem Figma; exatamente um `<h1>`; SEO meta configurado | `pnpm build` + `pnpm dev` manual |
| Wiring edits (`HeaderBar.vue`, `CrmOtherModules.vue`) | none | Apenas os campos `to`/`href` alterados; todos os outros itens renderizam onde estavam | `pnpm build` + check manual |

## Gate Check Commands

| Gate Level | When to Use | Command |
| --- | --- | --- |
| Manual | Após T1 (extração de conteúdo — sem código tocado) | Cross-check do manifest contra os nodes Figma |
| Quick | Após cada componente de seção (T2–T13) | `pnpm build` |
| Full | Após page assembly e navigation wiring (T14–T15) | `pnpm build` && `pnpm dev` → exercitar os ACs mapeados na rota |
| Build | Conclusão da feature (T16) | `pnpm build` pass && QA manual completo |

---

## Execution Plan

### Phase 1: Content Extraction
```
T1
```

### Phase 2: P1 Hero + Technology (MVP)
```
T1 → T2 → T3
```

### Phase 3: P2 Sections
```
T3 → T4 → T5 → T6 → T7 → T8 → T9 → T10
```

### Phase 4: P3 Sections
```
T10 → T11 → T12 → T13
```

### Phase 5: Page Assembly
```
T13 → T14
```

### Phase 6: Navigation Wiring
```
T14 → T15
```

### Phase 7: QA
```
T15 → T16
```

---

## Tasks

### T1 — Content & Asset Extraction

**Goal**: Criar `FIGMA_CONTENT_MANIFEST_CRM_TEMPORADA.md` com todo o texto extraído do Figma e os caminhos de assets planejados para os 12 nodes.

**Done when**:
- [ ] `FIGMA_CONTENT_MANIFEST_CRM_TEMPORADA.md` existe na raiz do projeto
- [ ] Todo o texto de todos os 12 nodes está registrado no manifest
- [ ] Todos os assets de imagem planejados estão listados com path `public/images/modulos-crm-temporada/`
- [ ] Assets SVG reutilizados de `/public/icons/` estão identificados

---

### T2 — `CrmTemporadaHero.vue`

**Spec AC**: P1-AC2

**Done when**:
- [ ] Arquivo existe em `app/components/sections/CrmTemporadaHero.vue`
- [ ] Gradient `linear-gradient(119.58deg, #dcfdf4 1.99%, #eff0fb 62.6%, #b2c8f1 103.35%)` aplicado na section
- [ ] H1 "Simplifique a gestão de imóveis para temporada" — palavra "temporada" em `#5d5fef` — é o único H1 da section
- [ ] Descrição presente e fiel ao manifest
- [ ] Ícone de imóvel (badge brand purple) presente
- [ ] Foto do homem com laptop presente (NuxtImg) com alt descritivo
- [ ] Card flutuante "Casa na Praia" (backdrop-blur, border, informações do imóvel) presente
- [ ] Card flutuante "Nova reserva — Recebe agenda na SUBSEE" (badge calendar brand) presente
- [ ] Divisor ondulado no final da seção presente
- [ ] Layout responsivo: mobile stack, tablet-lg+ side-by-side
- [ ] Sem uso de `translate-x/y` Tailwind (AD-007)
- [ ] Sem comentários no arquivo
- [ ] `pnpm build` passa

---

### T3 — `CrmTemporadaTechnology.vue`

**Spec AC**: P1-AC3

**Done when**:
- [ ] Arquivo existe em `app/components/sections/CrmTemporadaTechnology.vue`
- [ ] H2 "Da captação à reserva, tudo integrado em um só painel" — "só painel" em `#5d5fef`
- [ ] Descrição presente e fiel
- [ ] CTA "Testar grátis por 30 dias →" com estilo `bg-[#5d5fef] h-[56px] rounded-[12px] w-[297px]`
- [ ] Curva decorativa posicionada à direita do texto (visível em desktop-full)
- [ ] Screenshot do software presente via `NuxtPicture` com src `public/images/modulos-crm-temporada/technology-mockup-software.png`
- [ ] Layout centralizado com gap correto entre texto e imagem
- [ ] Responsivo: imagem abaixo do texto em mobile, lado a lado em desktop
- [ ] Sem `translate-x/y`, sem comentários
- [ ] `pnpm build` passa

---

### T4 — `CrmTemporadaPortfolio.vue`

**Spec AC**: P2-AC1

**Done when**:
- [ ] Arquivo existe
- [ ] H2 "Gerencie imóveis de temporada com agilidade e controle total" — "agilidade" e "controle total" em `#5d5fef`
- [ ] Descrição e texto da coluna direita fiéis ao manifest
- [ ] Background azul-claro arredondado conforme Figma
- [ ] App screenshot + phone screenshot presentes (imagem estática)
- [ ] 4 feature items com ícones e H3s: "Calendário de reservas", "Fotos e tour virtual", "Gestão de proprietários e contratos", "Integração com portais de temporada"
- [ ] CTA presente
- [ ] Responsivo
- [ ] `pnpm build` passa

---

### T5 — `CrmTemporadaCalendar.vue`

**Spec AC**: P2-AC2

**Done when**:
- [ ] Arquivo existe
- [ ] H2 "Um calendário só para todas as suas locações" — "suas locações" em `#5d5fef`
- [ ] Descrição fiel
- [ ] Feature item 1: ícone clock, "Status em tempo real", descrição
- [ ] Feature item 2: ícone gear/settings, "Gestão simplificada", descrição
- [ ] CTA presente
- [ ] Card-calendário (markup real): header "Ocupação – Janeiro" + "5 imóveis · Florianópolis e região", grade com dias da semana (D S T Q Q S S), células coloridas (branco/roxo claro/roxo/roxo escuro), legenda (Livre/Baixa/Média/Alta), 2 métricas (94% Ocupação atual em roxo, R$ 128k Receita mensal em verde)
- [ ] Layout 2 colunas em desktop-lg, stack em mobile
- [ ] `pnpm build` passa

---

### T6 — `CrmTemporadaKeyBoard.vue`

**Spec AC**: P2-AC3

**Done when**:
- [ ] Arquivo existe
- [ ] H2 "Do check-out à próxima reserva, sem atraso" — "sem atraso" em `#5d5fef`
- [ ] Descrição fiel
- [ ] Background cinza (#F5F5F5 ou similar) com border-radius conforme Figma
- [ ] Coluna "Disponível" (count 3, bg verde/teal): Casa Praia 01, Chalé Serra 03, Apto Centro 12
- [ ] Coluna "Em Limpeza" (count 2, bg laranja): Casa Praia 04, Loft Marina 02
- [ ] Coluna "Ocupado" (count 4, bg roxo/brand): Casa Praia 02, Chalé Serra 01, Apto Centro 05, Loft Marina 07
- [ ] 3 checkmarks inferiores: "Menos tempo de imóvel parado", "Equipe operacional mais organizada", "Melhor experiência do hóspede"
- [ ] Layout centralizado em desktop, scroll/stack em mobile
- [ ] `pnpm build` passa

---

### T7 — `CrmTemporadaPricingRules.vue`

**Spec AC**: P2-AC4

**Done when**:
- [ ] Arquivo existe
- [ ] H2 "Entenda sua alta e baixa temporada" — "alta" em roxo, "baixa" em cor diferente (conforme Figma)
- [ ] Descrição fiel
- [ ] 4 check bullets com ícone verde: "Decisões de preço baseadas em dados reais de mercado e concorrência", "Identificação de períodos ociosos com antecedência para planejar promoções", "Aumento de receita por imóvel com estratégias de precificação inteligente", "Comparação de performance entre imóveis do portfólio de forma simplificada"
- [ ] CTA presente
- [ ] Grid mensal (markup real): 12 meses (Jan-Dez) com percentuais de ocupação, cada célula com cor variando conforme ocupação, barra de legenda "Baixa...Alta" inferior
- [ ] Layout 2 colunas em desktop
- [ ] `pnpm build` passa

---

### T8 — `CrmTemporadaAutomatedMessaging.vue`

**Spec AC**: P2-AC5

**Done when**:
- [ ] Arquivo existe
- [ ] Layout: card de mensagens à esquerda (imagem estática), texto+check à direita
- [ ] H2 "Fale com o hóspede no momento certo, sem esforço" — "sem esforço" em `#5d5fef`
- [ ] Descrição fiel
- [ ] 3 check items presentes e fiéis
- [ ] CTA presente
- [ ] Imagem estática do card de mensagens automáticas em `NuxtImg`
- [ ] Background cinza arredondado conforme Figma
- [ ] Responsivo
- [ ] `pnpm build` passa

---

### T9 — `CrmTemporadaFinancialTransfer.vue`

**Spec AC**: P2-AC6

**Done when**:
- [ ] Arquivo existe
- [ ] H2 "Cada reserva, um repasse simples de calcular" — "Cada reserva" em `#5d5fef`
- [ ] Descrição fiel
- [ ] 3 feature items com ícones e descrições fiéis ao manifest
- [ ] CTA presente
- [ ] Imagem estática do card de pagamento em `NuxtImg`
- [ ] Layout 2 colunas
- [ ] `pnpm build` passa

---

### T10 — `CrmTemporadaInteligente.vue`

**Spec AC**: P2-AC7

**Done when**:
- [ ] Arquivo existe
- [ ] H2 "Da rotina manual para uma operação inteligente" — "operação inteligente" em `#5d5fef`
- [ ] Descrição fiel
- [ ] 4 cards markup real: Informações (01), Processos (02), Equipe (03), Crescimento (04)
- [ ] Cada card tem: número, título, seção ANTES (ícone + texto), seção COM SUBSEE (ícone + texto)
- [ ] Estilo de card conforme Figma (bordas, backgrounds, layout vertical)
- [ ] Layout 4 colunas em desktop, 2 em tablet, 1 em mobile
- [ ] `pnpm build` passa

---

### T11 — `CrmTemporadaTestimonials.vue`

**Spec AC**: P3-AC1

**Done when**:
- [ ] Arquivo existe
- [ ] H2 "O que nossos clientes falam dos nossos produtos e serviços" — "nossos clientes" em brand
- [ ] Logo SUBSEE on presente em card branco
- [ ] Testimonial 1: João Calçada / Gerente de Locação / Imobiliária Soma — texto e logo fiéis
- [ ] Testimonial 2: Marcio Carmona / Diretor / Carmona Imóveis — texto e logo fiéis
- [ ] Ícone de 5 estrelas em cada card
- [ ] Fundo lavanda (#ebf4fe) conforme padrão `CrmTestimonials.vue`
- [ ] `pnpm build` passa

---

### T12 — `CrmTemporadaOtherModules.vue`

**Spec AC**: P3-AC2

**Done when**:
- [ ] Arquivo existe
- [ ] H2 "Conheça os outros módulos do CRM Imobiliário"
- [ ] Subtítulo "Soluções desenvolvidas para diferentes segmentos do mercado imobiliário."
- [ ] 3 módulos: CRM Imobiliário (`/modulos/crm`), CRM Imobiliário Urbano (`/modulos/crm-imobiliario-urbano`), CRM Imobiliário Rural (`/modulos/rural`)
- [ ] CRM Temporada (a própria página) ausente da lista
- [ ] Ícones e descrições fiéis ao manifest
- [ ] CTA "Clique aqui →" em cada linha
- [ ] `pnpm build` passa

---

### T13 — `CrmTemporadaFaq.vue`

**Spec AC**: P3-AC3

**Done when**:
- [ ] Arquivo existe
- [ ] H2 "Perguntas Frequentes"
- [ ] Tagline "Tire suas dúvidas sobre o CRM para Temporada da SUBSEE on."
- [ ] 6 FAQs com perguntas e respostas fiéis ao manifest
- [ ] Accordion com ícones +/− reais (`/icons/faq-plus-circle.svg`, `/icons/faq-minus-circle.svg`) — padrão `AD-008`
- [ ] Background `#F5F5F5` com border-radius conforme `CrmFaq.vue`
- [ ] `pnpm build` passa

---

### T14 — Page Assembly

**Spec AC**: P1-AC1, P3-AC4, P3-AC5

**Done when**:
- [ ] `app/pages/modulos/crm-imobiliario-temporada.vue` existe
- [ ] `useSeoMeta()` configurado com title e description relevantes
- [ ] 12 seções presentes na ordem exata do Figma: Hero, Technology, Portfolio, Calendar, KeyBoard, PricingRules, AutomatedMessaging, FinancialTransfer, Inteligente, Testimonials, OtherModules, Faq
- [ ] Exatamente 1 `<h1>` em toda a página (provido pela seção Hero)
- [ ] `pnpm dev` → `/modulos/crm-imobiliario-temporada` → HTTP 200, sem erros no console Vue
- [ ] `pnpm build` passa

---

### T15 — Navigation Wiring

**Spec AC**: P1-AC4

**Done when**:
- [ ] `HeaderBar.vue`: entry "CRM para Temporada" tem `to: '/modulos/crm-imobiliario-temporada'` (era `/modulos/temporada`)
- [ ] `CrmOtherModules.vue`: módulo "CRM para Temporada" tem `href: '/modulos/crm-imobiliario-temporada'` (era `/modulos/temporada`)
- [ ] Verificar se `CrmUrbanoOtherModules.vue` existe e, se sim, corrigir o link para Temporada
- [ ] Todos os outros itens de navegação permanecem inalterados
- [ ] `pnpm build` passa

---

### T16 — QA Cross-Cutting

**Done when**:
- [ ] Desktop (≥1300px): todas as 12 seções renderizam corretamente, sem overflow, sem sobreposição
- [ ] Tablet (768px): layout adapta corretamente, textos não cortados, imagens proporcionais
- [ ] Mobile (375px): stack vertical funcional, cards proporcionais, sem elementos colados
- [ ] Exatamente 1 `<h1>` confirmado via DevTools
- [ ] Nenhum conteúdo duplicado entre breakpoints (responsividade via CSS only)
- [ ] Links "CRM para Temporada" no mega-menu e em `CrmOtherModules` navegam para `/modulos/crm-imobiliario-temporada`
- [ ] `pnpm build` produz a rota `/modulos/crm-imobiliario-temporada` no output
- [ ] Nenhum uso de `translate-x/y` Tailwind confirmado (AD-007)
