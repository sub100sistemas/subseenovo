# Formulários (Testar grátis, Agendar Demonstração, Inscreva-se) Specification

## Problem Statement

O site tem ~35 CTAs "Testar grátis por 30 dias" apontando para `/testar-gratis` (`HeaderBar.vue:283` e Hero*/Crm*/Apis*/PlanoEPreco*) e CTAs "Agendar Demonstração" em `SiteUrbanoListings.vue:47` e `SiteRuralListings.vue:50`, que eram os pontos de entrada da demonstração antes da implementação; a nova rota definida para a feature é `/agendar-demonstracao`, e nenhuma dessas páginas existia naquele momento (404). O CTA "Inscreva-se!!!" de `/eventos` é um `href="#"` sem destino (`EventosSignup.vue`, `EventosHero.vue`). O design das três páginas de formulário existe no Figma (arquivo `vX7qKnnXSOW8zv4kAuS2eN`; sections `1033:1766`, `1491:1119`, `3015:6082`) e precisa ser portado 1:1 para Nuxt 4 + Vue 3, com a funcionalidade do formulário legado "Solicite uma demonstração" (Vue Options API + JS + `axios` + `vue-the-mask` + reCAPTCHA, POST em `https://forms.sub100.com.br/sub100sistemas/formularios.php`) reescrita em TypeScript/Composition API, sem copiar o legado automaticamente.

Conteúdo extraído do Figma: `FIGMA_CONTENT_MANIFEST_FORMULARIOS.md`. Arquitetura: `.specs/features/formularios/design.md`.

**Esta é a Etapa 1 (Planejamento/SPEC), fechada após as decisões do usuário (2026-09-29).** Não há tasks, código, dependências novas, branch ou commit ainda. Itens que dependem do backend permanecem como Open Questions e **não foram inventados**.

## Goals

- [ ] Três páginas de formulário renderizando o design do Figma (Hero/Top + Form + Credibility, com Header/Footer globais), nas rotas `/testar-gratis`, `/agendar-demonstracao` e `/inscreva-se`.
- [ ] Uma única implementação compartilhada (layout + campos + lógica), configurada por dados; diferenças reais entre as páginas preservadas.
- [ ] Envio ao backend de formulários com validação de campos, estados de loading/sucesso/falha de envio tratados separadamente, reCAPTCHA v3 e `traffic_source`, sem `axios`/`vue-the-mask`. O sucesso só é exibido quando o POST é bem-sucedido.
- [ ] Exatamente um `<h1>` por página, meta tags por página, responsivo nos 7 breakpoints do design system, sem overflow horizontal.

## Out of Scope

| Feature | Reason |
| --- | --- |
| Alterar o backend/endpoint PHP `formularios.php` | Sistema legado fora deste repositório; o contrato é tratado como dado a confirmar |
| Migrar/remover o formulário legado "Solicite uma demonstração" | O legado continua existindo até decisão explícita; esta feature é aditiva |
| Página/fluxo de "obrigado" com conteúdo próprio e visual final de sucesso | Figma não fornece estado de sucesso; base = sucesso inline sem visual inventado (Q15) |
| Seleção de evento / integração com Zoom em Inscreva-se | O Figma não mostra qual evento; feature separada |
| Test runner (Vitest/Playwright) | Decisão de infraestrutura cross-cutting ([[AD-002]]) |
| CMS / conteúdo dinâmico | Conteúdo hardcoded em componentes/`app/data` ([[AD-001]]) |
| Instalar dependências | Proibido na Etapa 1. `maska` foi escolhida para a máscara (D11) e será adicionada na Etapa 2 (task própria); a forma de carregar o reCAPTCHA v3 é decisão de design da Etapa 2 |

---

## Comparação das três páginas (resumo; detalhe no manifesto)

| Aspecto | Testar grátis | Agendar Demonstração | Inscreva-se |
| --- | --- | --- | --- |
| Compartilhado | Background/divisor, Credibility, badge "Seus dados estão seguros", card 640px, campos Empresa*/Nome completo*/Site/Telefone*/E-mail*/Cidade*/Estado*, chips Preferência de contato*/Área de atuação*, checkbox de termos, CTA gradiente | igual | igual |
| Só texto | H1, descrição, título/lista da esquerda, título/subtítulo do card, CTA | idem | idem |
| Por campo | **sem** "Mensagem" | "Mensagem" (placeholder: melhor dia e horário) | "Mensagem" (placeholder: dúvida/comentário, "(opcional)") |
| Visual | ícone do card: rocket (asset único); lista com calendar/settings/headphones | ícone do card: message-circle + círculo CSS; lista com monitor/settings/user | idem Agendar; badge fora do `List` (gap 10px) |
| CTA tipografia | Poppins SemiBold 15px | Poppins Regular 20px | Poppins Regular 20px |
| Funcional (inferido, não confirmado pelo backend) | trial de 30 dias | agendamento com consultor | inscrição em evento online (Zoom) |

---

## Formulário legado — o que preservar, adaptar, confirmar

O código do legado **não foi anexado**; a análise usa somente a descrição no pedido.

| Item legado | Ação | Observação |
| --- | --- | --- |
| Campos empresa, contato, site, phone, email, cidade, estado, message | Preservar | `contato` ↔ "Nome completo"; Figma marca **Empresa** como obrigatória (legado não validava) |
| `produto` | Adaptar / **confirmar com backend** | Sem campo `produto` no Figma. O campo visual "Área de atuação" (Urbana/Rural/Temporada) precisa ser mapeado para o payload; o valor esperado é Q7 (D12) |
| `respostaWhatsapp` / `respostaLigacao` / `respostaEmail` | Preservar | Múltipla escolha: 3 checkboxes independentes (Ligação, E-mail, WhatsApp), ≥1 obrigatório (D8). "Ligação" pré-selecionada só no design estático — não presumir default (Q14) |
| `aceito` | Preservar | Checkbox obrigatório |
| Validações: contato, telefone, email, cidade, estado, message, ≥1 forma de resposta, aceito | Preservar como base | `message` só onde há textarea; mensagens de erro não definidas no Figma |
| Payload: token, tipo_mail, formSite, campos acima, traffic_source | Preservar contrato | `tipo_mail`/`formSite` **não inventados**: Q4/Q5 (backend) |
| POST `.../formularios.php` | Manter, sujeito a confirmação | Endpoint legado mantido (D15), em `runtimeConfig.public`. CORS para o novo domínio e mesmo endpoint nas 3 páginas: Q6 |
| reCAPTCHA (token) | Manter **v3** | Versão decidida (D15); site key, action e verificação no backend não inventadas: Q13 |
| `vue-the-mask` | **Substituir por `maska`** | Decidido (D11); instalada na Etapa 2, não agora |
| `axios` | **Substituir** | `$fetch` nativo do Nuxt |
| Options API / JS | **Substituir** | `<script setup lang="ts">` + composable |
| Cookie `__trf.src` → `traffic_source` | Preservar | Leitura via `useCookie` (D15); quem grava o cookie no site novo: Q17 |
| Evento `obrigado` | Confirmar | Alvo (dataLayer/GTM?) e momento do disparo |
| loading / success / obrigado | Adaptar | loading e sucesso inline mantidos; **corrigir o defeito do legado que marca sucesso mesmo com POST falho** (D14); visual de sucesso indefinido no Figma (Q15) |

---

## Decisões fechadas (Etapa 1)

| # | Decisão | Detalhe |
| --- | --- | --- |
| D1 | Nome da feature | `formularios` (`.specs/features/formularios/`, `FIGMA_CONTENT_MANIFEST_FORMULARIOS.md`) |
| D2 | Prefixo de componentes | `Form*` em layout, ui e sections (revalidar colisão com `grep` antes de criar) |
| D3 | Arquitetura | Shell compartilhado + config por dados + composable `useLeadForm` (ver `design.md`) |
| D4 | Rota Testar grátis | `/testar-gratis` (já usada por ~35 CTAs) |
| D5 | Rota Agendar Demonstração | `/agendar-demonstracao` (os CTAs de `SiteUrbanoListings.vue` e `SiteRuralListings.vue` foram atualizados para apontar para ela) |
| D6 | Rota Inscreva-se | `/inscreva-se` (CTAs `href="#"` de `/eventos` passam a apontar para ela) |
| D7 | Links legais do checkbox | Termos de Uso → `/lgpd/termos-de-uso/`; Política de Privacidade → `/lgpd/politica-de-privacidade/` |
| D8 | Preferência de contato | Múltipla escolha; 3 checkboxes independentes (Ligação → `respostaLigacao`, E-mail → `respostaEmail`, WhatsApp → `respostaWhatsapp`); pelo menos 1 obrigatório |
| D9 | Empresa | Obrigatória (`*` do Figma; o legado não validava) |
| D10 | Mensagem | Testar grátis: campo não existe. Inscreva-se: opcional (Figma diz "(opcional)"). Agendar Demonstração: **não decidido** (Q10) |
| D11 | Máscara | `maska` (v3.2.2 no registro npm, sem `peerDependencies`; diretiva Vue 3 agnóstica de framework — verificado em 2026-09-29 apenas via `npm view`). Compatibilidade com o SSR do Nuxt 4 é validada na task de instalação. **Não instalar agora** |
| D12 | `produto` / Área de atuação | Não assumir. O campo visual "Área de atuação" precisa ser mapeado para o payload e o backend deve confirmar o valor esperado (Q7) |
| D13 | Sucesso | Estado de sucesso **inline** como comportamento-base; visual final não inventado; o Figma não fornece estado de sucesso (Q15) |
| D14 | Erro | Validação dos campos obrigatórios separada da falha de envio; **não** copiar o defeito do legado (sucesso mesmo com POST falho): sucesso só após resposta OK do POST |
| D15 | Mantidos do legado | reCAPTCHA v3; `traffic_source`; leitura de `__trf.src`; endpoint legado `https://forms.sub100.com.br/sub100sistemas/formularios.php` (em `runtimeConfig.public`), sujeito à confirmação de CORS/backend (Q6) |
| D16 | Não inventar | `tipo_mail`, `formSite`, configuração do reCAPTCHA, regra do backend para Testar grátis, identificação do Inscreva-se → permanecem como Open Questions de backend |

Alteração externa **não relacionada** a esta feature (não tocar): troca PNG → SVG em `PlanoEPrecoPricing.vue` e `.specs/features/plano-e-preco/tasks.md`.

---

## Open Questions (restantes)

### Backend / integração (bloqueiam o wiring do envio real, não a UI)

| # | Pergunta | Estado atual |
| --- | --- | --- |
| Q4 | `tipo_mail` de cada página | Não determinável por Figma/código; **não inventar** |
| Q5 | `formSite` de cada página | Idem |
| Q6 | O endpoint legado aceita as 3 páginas e o novo domínio (CORS/origem)? | Endpoint mantido (D15); sem confirmação |
| Q7 | Valor esperado em `produto` e mapeamento de "Área de atuação" (Urbana/Rural/Temporada) → payload (rótulo? slug? campo único ou múltiplo? o Figma mostra seleção única) | Sem default silencioso |
| Q13 | reCAPTCHA v3: site key, `action`, score mínimo, verificação server-side, tratamento de token ausente/expirado | Versão decidida (v3); demais itens **não inventados** |
| Q16 | Evento `obrigado`: alvo (dataLayer/GTM?), payload e momento | Legado descrito sem detalhes |
| Q17 | Quem grava o cookie `__trf.src` no site novo? | Leitura mantida; origem do cookie desconhecida |
| Q18 | Destino dos dados (CRM/e-mail/lista) por página | Backend fora do repositório |
| Q19 | Inscreva-se: qual evento (nome/data/Zoom)? Há campo oculto/identificador do evento? | O formulário não referencia o evento |
| Q23 | Código-fonte do legado (validar contrato, resposta HTTP e o defeito do sucesso) | Só a descrição foi fornecida; solicitar |
| Q25 | Regra do backend para Testar grátis: aceita `message` vazio/ausente? (o legado exigia `message`; o Figma não tem o campo) | Não inventar |
| Q26 | Como o backend identifica um envio de Inscreva-se e o diferencia dos demais? | Ligado a Q4/Q5; não inventar |
| Q27 | As rotas `/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/` existem neste site (ou são proxy/domínio legado)? Hoje não há páginas para elas em `app/pages` | Links decididos (D7); existência a confirmar |

### Formato de dados

| # | Pergunta | Estado atual |
| --- | --- | --- |
| Q11 | Lista de UFs e valor enviado (sigla ou nome) | Figma só mostra "Selecione"; 27 UFs |
| Q12 | Padrão da máscara de telefone (fixo vs. celular) e regras de validação de telefone/e-mail/site | Só o placeholder `(44) 90000-0000`; implementação via `maska` (D11) |

### Design / conteúdo

| # | Pergunta | Estado atual |
| --- | --- | --- |
| Q10 | Agendar Demonstração: "Mensagem" é obrigatória? | Figma: label sem `*`, placeholder sem "(opcional)"; legado exigia. **Não implementar regra até resposta** |
| Q14 | Textos e visual das mensagens de erro (campo e falha de envio); estado inicial dos checkboxes de contato ("Ligação" está marcada no design estático) | Comportamento definido (D14); texto/visual não |
| Q15 | Visual final do sucesso | Base inline (D13); Figma não fornece estado de sucesso |
| Q20 | Responsivo tablet/mobile | Frames só em 1920px; derivado do design system |
| Q21 | "Demonstração direcionada" repete a descrição de "Acesso completo por 30 dias" | Reproduzir como no Figma; confirmar com conteúdo |
| Q22 | CTA: 15px semibold (Testar grátis) vs. 20px regular (demais) | Reproduzir como no Figma |

### Fechadas nesta rodada (histórico)

Q1 → D5 · Q2 → D6 · Q3 → D7 · Q8 → D8 · Q9 → D9 · Q10 (parcial: Testar grátis/Inscreva-se) → D10 · Q13 (só a versão) → D15 · Q24 → D11 · A4 → D4 · A5 → D15.

---

## User Stories

### P1: Visitante testa o SUBSEE grátis por 30 dias ⭐ MVP

**User Story**: Como visitante interessado, quero preencher um formulário curto para ativar meu teste grátis de 30 dias.

**Why P1**: É o destino de ~35 CTAs; hoje todos levam a um 404.

**Acceptance Criteria**:

1. WHEN o visitante navega para `/testar-gratis` THEN o sistema SHALL responder 200 e exibir Hero/Top (H1 "Teste o SUBSEE grátis por 30 dias"), a coluna de texto com a lista de 3 benefícios, o card do formulário e a barra de credibilidade, com Header/Footer globais.
2. WHEN a página é renderizada THEN o sistema SHALL exibir exatamente um `<h1>` e **não** exibir o campo "Mensagem".
3. WHEN o visitante submete com algum campo obrigatório vazio (Empresa, Nome completo, Telefone, E-mail, Cidade, Estado, Área de atuação), sem nenhuma Preferência de contato marcada (múltipla escolha, ≥1) ou sem aceitar os termos THEN o sistema SHALL impedir o envio e indicar o campo inválido.
4. WHEN o visitante digita o telefone THEN o sistema SHALL aplicar a máscara via `maska` (D11; padrão exato em Q12).
5. WHEN o formulário é válido e enviado THEN o sistema SHALL desabilitar o botão, exibir o estado de loading, enviar o payload legado adaptado (Q4–Q7, sem valores inventados) e, **somente se o POST retornar sucesso**, exibir o estado de sucesso inline (D13).
6. IF o POST falhar (rede, CORS, status de erro, timeout) THEN o sistema SHALL manter os dados preenchidos, **não** exibir sucesso e exibir um erro de envio distinto dos erros de validação de campo (D14).
7. WHEN o formulário é enviado THEN o sistema SHALL obter um token reCAPTCHA v3 e incluí-lo no payload; IF o token não puder ser obtido THEN o sistema SHALL tratar como falha de envio (comportamento fino: Q13).
8. WHEN o cookie `__trf.src` existir THEN o sistema SHALL enviar seu valor em `traffic_source`.

**Independent Test**: abrir `/testar-gratis`, comparar com o frame `3220:7055` do Figma e enviar o formulário em ambiente de teste.

### P2: Visitante agenda uma demonstração

**User Story**: Como visitante, quero agendar uma demonstração indicando o melhor dia e horário.

**Acceptance Criteria**:

1. WHEN o visitante navega para `/agendar-demonstracao` (D5) THEN o sistema SHALL renderizar o design do frame `3220:8095` com H1 "Agende uma demonstração do SUBSEE".
2. WHEN a página é renderizada THEN o sistema SHALL exibir o campo "Mensagem" com o placeholder "Informe o melhor dia e horário para entrarmos em contato."; a obrigatoriedade do campo permanece em aberto (Q10) e não deve ser implementada até a resposta.
3. WHEN o formulário é enviado THEN o sistema SHALL aplicar as mesmas regras de validação/envio de P1, com o CTA "Quero agendar uma demonstração".
4. WHEN a página `/agendar-demonstracao` existir THEN os CTAs "Agendar Demonstração" de `SiteUrbanoListings.vue` e `SiteRuralListings.vue` (atualizados para apontar para `/agendar-demonstracao`) SHALL resolver 200; basta auditar as ocorrências.

### P3: Visitante se inscreve em um evento

**User Story**: Como visitante, quero me inscrever no próximo evento online do SUBSEE.

**Acceptance Criteria**:

1. WHEN o visitante navega para `/inscreva-se` (D6) THEN o sistema SHALL renderizar o design do frame `3220:8461` com H1 "Inscreva-se no evento do SUBSEE".
2. WHEN a página é renderizada THEN o sistema SHALL exibir o campo "Mensagem" **opcional** (D10) com o placeholder "Deixe aqui sua dúvida ou comentário (opcional)."
3. WHEN o formulário é enviado THEN o sistema SHALL aplicar as regras de P1 com o CTA "Quero me inscrever no evento"; a identificação do envio como Inscreva-se (`tipo_mail`/`formSite`/evento) permanece pendente de backend (Q4, Q5, Q19, Q26) e não deve ser inventada.
4. WHEN a rota `/inscreva-se` existir THEN os CTAs "Inscreva-se!!!" de `/eventos` SHALL apontar para ela.

### P4 (transversal): Qualidade

**Acceptance Criteria**:

1. WHEN qualquer página é carregada THEN o sistema SHALL definir `title`, `description` e Open Graph via `useSeoMeta` próprios da página.
2. WHEN a largura da viewport varia entre 320 e 1920px THEN o sistema SHALL evitar overflow horizontal e manter o formulário utilizável (Q20).
3. WHEN o usuário navega por teclado THEN o sistema SHALL permitir foco visível e operação de todos os campos e chips; labels SHALL estar associadas aos campos e erros SHALL ser anunciáveis (`aria-describedby`/`role="alert"`).
4. WHEN `pnpm build` executa THEN o sistema SHALL concluir sem erros.

---

## Requirements Traceability

| Requirement | Story | Status |
| --- | --- | --- |
| FORM-01 a FORM-08 | P1 AC1–AC8 | Pending |
| FORM-09 a FORM-12 | P2 AC1–AC4 | Pending |
| FORM-13 a FORM-16 | P3 AC1–AC4 | Pending |
| FORM-17 a FORM-20 | P4 AC1–AC4 | Pending |

## Success Criteria

- As três páginas batem visualmente com o Figma em 1920px e são responsivas nos demais breakpoints.
- Um envio de teste chega ao backend com o payload esperado (validação em ambiente de homologação a confirmar).
- Nenhuma dependência nova sem aprovação; nenhum componente duplicado entre as três páginas além de configuração.
- A UI (páginas, campos, validação, estados) pode ser implementada antes do backend; o envio real só é ligado após as Open Questions de backend (Q4–Q7, Q13, Q25, Q26) serem respondidas.
- Nenhum comportamento de sucesso quando o POST falha.
