# FIGMA_CONTENT_MANIFEST_FORMULARIOS

Fonte: Figma `vX7qKnnXSOW8zv4kAuS2eN`, três seções de página, cada uma com frame raiz "Page" de 1920px. Nenhuma URL de node foi fornecida pelo usuário; os nodes foram localizados buscando, no mesmo arquivo Figma das features anteriores, as seções cujo nome é literalmente "Testar grátis", "Agendar Demonstração" e "Inscreva-se".
Conteúdo extraído via `get_metadata`/`get_design_context` em 2026-09-29. Todo o texto abaixo é transcrição literal do Figma; nada foi inventado. Os assets **não foram baixados** nesta etapa (Etapa 1 é só planejamento).

| Página | Section | Page frame | Hero/Top | Hero/Form | Hero/Credibility |
| --- | --- | --- | --- | --- | --- |
| Testar grátis | `1033:1766` | `3220:7055` (1920×1840) | `3220:7062` | `3220:7065` | `3220:7176` |
| Agendar Demonstração | `1491:1119` | `3220:8095` (1920×1988) | `3220:8102` | `3220:8105` | `3220:8226` |
| Inscreva-se | `3015:6082` | `3220:8461` (1920×1988) | `3220:8468` | `3220:8471` | `3220:8592` |

Estrutura de cada página (idêntica nas três), de cima para baixo:

1. **Background** (1923×597): `BG`, `Rectangle 4` e `Horizantal Divider` (vetores "Azul" e "branca"). Puramente decorativo.
2. **Section / Hero / Top** (1920×337): H1 + descrição, centralizados, coluna de 820px, `pt-[140px] pb-[40px]`, `gap-[25px]`.
3. **Section / Hero / Form** (1920×880 em Testar grátis; 1920×1028 nas demais): coluna de texto de 530px à esquerda + card do formulário de 640px à direita, `px-[305px]`, `justify-between`, `items-center`.
4. **Section / Hero / Credibility** (1920×148): 3 trust items lado a lado, borda `#eceff4`, `rounded-[16px]`.
5. **Footer** e **Header**: instâncias dos componentes globais (`TheFooter`/`TheHeader` já existem no site).

---

## 1. Testar grátis

### Hero / Top — node `3220:7062`
- **H1** (`3220:7063`, Poppins Medium 40px, `#313846`): "Teste o SUBSEE grátis por **30 dias**" ("30 dias" em Poppins Bold `#5d5fef`).
- **Descrição** (`3220:7064`, Poppins Regular 26px, leading 1.4): "Conheça na prática as funcionalidades do SUBSEE e descubra como simplificar a gestão da sua imobiliária."

### Hero / Form — coluna de texto, node `3220:7066`
- **Título** (`3220:7067`, Poppins Bold 36px, leading 1.1, `#313846`): "Experimente o **SUBSEE** no seu dia a dia" ("SUBSEE" em `#5d5fef`; quebra de linha após "SUBSEE"). **Nota**: a camada não tem nome "Heading" (o nome da camada é o próprio texto), mas renderiza o título da coluna.
- **Descrição** (`3220:7068`, Poppins Regular 20px, `#666`, leading 1.6): "Preencha o formulário e comece a explorar os recursos que vão tornar sua operação mais organizada, integrada e eficiente"
- **Lista** (`3220:7069`, 3 itens, gap 40px; cada item = chip 60×60 branco `rounded-[16px]` com sombra `0 8 12 rgba(49,56,70,.12)` + ícone 30px + título Poppins SemiBold 20px `#313846` + descrição Poppins Regular 16px `#666`):
  1. ícone `calendar` — "Acesso completo por 30 dias" / "Explore todos os recursos do SUBSEE sem limitações."
  2. ícone `settings` — "Configuração simples e rápida" / "Comece em poucos minutos e veja resultados."
  3. ícone `headphones` — "Suporte da equipe SUBSEE" / "Conte com especialistas sempre que precisar."
- **Badge** (`3220:7091`, dentro da lista, depois do item 3): shield 16px + "Seus dados estão seguros" (Poppins Medium 13px `#5d5fef`, fundo `#f4f4fb`, `rounded-[100px]`, `px-[16px] py-[10px]`).

### Hero / Form — card, node `3220:7095` (camada "form-teste-gratis", 640px, `p-[40px]`, `rounded-[16px]`, sombra `0 10 15 rgba(93,95,239,.2)`, `min-h-[700px]`)
- **Header do card** (`3220:7096`): ícone `rocket-icon-bg` 56×56 (asset único já com o fundo) + título "Comece seu teste grátis" (Poppins Bold 22px `#0f172a`) + subtítulo "Preencha seus dados para ativar seu acesso por 30 dias" (Poppins Regular 14px `#64748b`).
- **Campos** (`3220:7104`, coluna `gap-[20px]`; label Poppins SemiBold 13px `#0f172a`; caixa 46px de altura, borda `#e2e8f0`, `rounded-[8px]`, `px-[14px]`, placeholder Poppins Regular 14px `#94a3b8`):

| Linha | Campo | Label | Placeholder | Obrigatório (`*`) |
| --- | --- | --- | --- | --- |
| row-1 | Empresa | "Empresa *" | "Nome da imobiliária" | sim |
| row-1 | Nome completo | "Nome completo *" | "Digite seu nome completo" | sim |
| row-2 | Site | "Site" | "www.suaimobiliaria.com.br" | não |
| row-2 | Telefone | "Telefone *" | "(44) 90000-0000" | sim |
| — | E-mail | "E-mail *" | "contato@suaimobiliaria.com.br" | sim |
| row-4 | Cidade | "Cidade *" | "Maringá" | sim |
| row-4 | Estado (dropdown) | "Estado *" | "Selecione" (texto `#475569`) + `chevron-down` 16px | sim |

- **Preferência de contato** (`3220:7138`): label "Preferência de contato *"; 3 opções (chips 40px, gap 12px, `rounded-[8px]`): "Ligação" (ícone `phone`), "E-mail" (`mail`), "WhatsApp" (`message-circle`). **Selecionado no design**: "Ligação" (fundo `#eef2ff`, borda e texto `#5d5fef`); as outras: fundo branco, borda `#e2e8f0`, texto `#475569`.
- **Área de atuação** (`3220:7153`): label "Área de atuação *"; 3 opções: "Urbana" (`building`), "Rural" (`leaf`), "Temporada" (`sun`). **Selecionado no design**: "Urbana".
- **Checkbox** (`3220:7168`): caixa 18px (borda `#cbd5e1`, `rounded-[4px]`) + "Li e aceito os <u>Termos de Uso</u> e a <u>Política de Privacidade</u>." (Poppins Regular 13px `#475569`; os dois links em Poppins Medium sublinhados). **Sem URL de destino no Figma; decidido fora do Figma (spec D7): `/lgpd/termos-de-uso/` e `/lgpd/politica-de-privacidade/`.** Contatos: "Preferência de contato" são 3 checkboxes independentes (múltipla escolha, ≥1 obrigatório, spec D8).
- **CTA** (`3220:7172`): "Começar teste grátis" (Poppins SemiBold 15px, branco) + `arrow-right` 18px; altura 52px, `rounded-[12px]`, gradiente `linear-gradient(106.15deg, #5d5fef 1.6%, #4042cc 110.35%)`, sombra `0 6 10 rgba(93,95,239,.25)`.
- **Não há campo "Mensagem"** nesta página.

---

## 2. Agendar Demonstração

### Hero / Top — node `3220:8102`
- **H1** (`3220:8103`, Poppins Medium 40px): " Agende uma demonstração do **SUBSEE**" ("SUBSEE" em Poppins Bold `#5d5fef`; há um espaço inicial literal no texto do Figma).
- **Descrição** (`3220:8104`, Poppins Regular 26px, 2 parágrafos): "Veja como o SUBSEE organiza o atendimento e " / "as vendas da sua imobiliária, do lead à assinatura" (quebra de linha explícita entre os dois parágrafos; o segundo não tem ponto final).

### Hero / Form — coluna de texto, node `3220:8106` (`gap-[35px]`)
- **Título** (`3220:8107`, layer "Heading / H2", Poppins Bold 36px): "Uma apresentação pensada para o **seu negócio**" ("seu negócio" em `#5d5fef`).
- **Descrição** (`3220:8108`, 20px `#666`): "Mostraremos as funcionalidades mais relevantes para o seu negócio e responderemos às suas perguntas."
- **Lista** (`3220:8109`):
  1. ícone `presentation` (contém `monitor` 24px) — "Demonstração direcionada" / "Explore todos os recursos do SUBSEE sem limitações." **(descrição idêntica à de "Acesso completo por 30 dias" da página Testar grátis — provável cópia; confirmar com o time de conteúdo)**
  2. ícone `settings` — "Configuração simples e rápida" / "Comece em poucos minutos e veja resultados."
  3. ícone `mentor` (contém `user` 30px, chip interno 40px) — "Orientação com especialistas" / "Conte com especialistas sempre que precisar."
- **Badge** (`3220:8133`, dentro da lista): "Seus dados estão seguros".

### Hero / Form — card, node `3220:8137` (mesma camada "form-teste-gratis")
- **Header do card** (`3220:8138`): ícone `message-circle` 24.375px sobre círculo `#eef2ff` 56px (**aqui o fundo é uma camada `bg-[#eef2ff] rounded-[800px]` + ícone separado; na página Testar grátis o "rocket-icon-bg" é um único asset SVG** — o nome da camada `rocket-icon-bg` foi reaproveitado apesar do ícone ser outro) + título "Vamos conversar?" (Poppins Bold 22px `#313846`) + subtítulo "Preencha seus dados e indique o melhor dia e horário para receber nosso contato." (14px `#6b7280`, leading 1.2, 2 linhas).
- **Campos**: idênticos à tabela de Testar grátis (Empresa*, Nome completo*, Site, Telefone*, E-mail*, Cidade*, Estado*), **mais**:
  - **Mensagem** (`3220:8181`): label "Mensagem" (Poppins SemiBold 13px `#313846`, **sem asterisco**) + textarea (borda `#e5e7eb`, `rounded-[10px]`, altura mínima 96px, placeholder Poppins Regular 15px `#757575`): "Informe o melhor dia e horário para entrarmos em contato."
- **Preferência de contato**, **Área de atuação** e **Checkbox**: idênticos à página Testar grátis (mesmos textos e estados selecionados: Ligação, Urbana).
- **CTA** (`3220:8222`): "Quero agendar uma demonstração" (Poppins **Regular 20px**, leading 22px, branco — tipografia diferente do CTA de Testar grátis) + `arrow-right`.

---

## 3. Inscreva-se

### Hero / Top — node `3220:8468`
- **H1** (`3220:8469`, Poppins Medium 40px): " Inscreva-se no evento do **SUBSEE**" ("SUBSEE" em Poppins Bold `#5d5fef`; espaço inicial literal no Figma).
- **Descrição** (`3220:8470`, 26px): "Participe ao vivo, tire suas dúvidas em tempo real e garanta sua vaga no próximo evento online do SUBSEE."

### Hero / Form — coluna de texto, node `3220:8472` (`gap-[10px]`, lista com largura 521px)
- **Título** (`3220:8473`, layer "Heading / H2", Poppins Bold 36px): "Um evento pensado para o **seu negócio**". **Divergência de cor**: aqui o texto do título inteiro é `#5d5fef` com o trecho "Um evento pensado para o " sobrescrito em `#313846`; visualmente igual às outras páginas (mesmo padrão preto + roxo).
- **Descrição** (`3220:8474`, 20px `#666`, altura 128px, 4 linhas): "Traremos as principais novidades do SUBSEE, tiraremos suas dúvidas ao vivo e você vai trocar experiências com outros profissionais do mercado imobiliário."
- **Lista** (`3220:8475`):
  1. ícone `presentation`/`monitor` — "Conteúdo ao vivo e direcionado" / "Acompanhe novidades, dicas e boas práticas do SUBSEE." (descrição em 2 linhas)
  2. ícone `settings` — "Inscrição simples e rápida" / "Garanta sua vaga em poucos minutos e receba o link de acesso." (2 linhas)
  3. ícone `mentor`/`user` — "Interação com especialistas" / "Tire suas dúvidas ao vivo com o time SUBSEE."
- **Badge** (`3220:8499`): "Seus dados estão seguros". **Diferença estrutural**: nesta página o badge é filho direto de "Container" (gap 10px), fora do componente "List"; nas outras duas está dentro do "List".

### Hero / Form — card, node `3220:8503`
- **Header do card** (`3220:8504`): ícone `message-circle` (mesmo tratamento de Agendar) + título "Garanta sua vaga!" + subtítulo "Preencha seus dados e participe do próximo evento SUBSEE ao vivo pelo Zoom." (2 linhas).
- **Campos**: idênticos a Agendar Demonstração (com "Mensagem"), exceto o placeholder do textarea: "Deixe aqui sua dúvida ou comentário (opcional)." — **único caso em que o Figma sinaliza "(opcional)"; para Agendar Demonstração o label também não tem asterisco, mas o placeholder não diz que é opcional.**
- **Preferência de contato**, **Área de atuação**, **Checkbox**: idênticos.
- **CTA** (`3220:8588`): "Quero me inscrever no evento" (Poppins Regular 20px, branco) + `arrow-right`.
- **Nenhum campo referencia qual evento** (data, nome, link Zoom) — o evento não é escolhido nem exibido no formulário.

---

## 4. Section / Hero / Credibility (idêntica nas 3 páginas) — nodes `3220:7176` / `3220:8226` / `3220:8592`

Barra de 3 itens (`gap-[17px]`); cada item = círculo 48px `#f0f1fb` (`rounded-[24px]`) com ícone 30px + texto (título Poppins Bold 16px `#313846`, descrição Poppins Regular 14px `#666`, `whitespace-nowrap`):

1. `shield-check` — "Mais de 26 anos de experiência" / "Tecnologia desenvolvida para o mercado imobiliário."
2. `building` — "Milhares de imobiliárias confiam na SUB100" / "Soluções que geram resultados reais todos os dias."
3. `lock` — "Segurança e privacidade" / "Seus dados protegidos com os mais altos padrões."

---

## 5. Assets pendentes (ícones SVG; nenhum baixado nesta etapa)

Todos exportados do Figma como SVG nas três páginas (os URLs temporários expiram em 7 dias; baixar via `get_design_context` na Etapa de implementação, um único arquivo por ícone em `public/icons/`, sem cópias por página):

- Comuns às 3: `settings` (30px), `shield` (16px), `chevron-down` (16px), `phone`, `mail`, `message-circle` (16px, chips), `building`, `leaf`, `sun` (16px), `arrow-right` (18px), `shield-check`, `building`, `lock` (30px, credibilidade).
- Só Testar grátis: `calendar`, `headphones`, `rocket-icon-bg` (56px).
- Agendar e Inscreva-se: `monitor` (24px), `user` (30px), `message-circle` (24.375px, header do card; o círculo de fundo é CSS).
- Background/divisor: `BG`, `Rectangle 4`, `Azul`, `branca` (vetores decorativos; verificar se já existe equivalente em `public/images/divider/`).

## 6. Tokens de design observados

Cores: `#5d5fef` (marca), `#4042cc` (fim do gradiente CTA), `#313846` (texto principal), `#0f172a` (labels), `#666` (texto secundário), `#64748b`/`#6b7280` (subtítulos do card), `#475569` (texto de chips/checkbox), `#94a3b8` (placeholder), `#757575` (placeholder textarea), `#e2e8f0`/`#e5e7eb` (bordas), `#cbd5e1` (borda checkbox), `#eef2ff` (chip selecionado), `#f4f4fb` (badge), `#f0f1fb` (círculo credibilidade), `#eceff4` (borda credibilidade). Tipografia: Poppins (Regular/Medium/SemiBold/Bold), já carregada em `nuxt.config.ts`.

## 7. Estados NÃO definidos no Figma

Erro de campo, mensagem de erro (de campo e de envio), foco/hover, loading do botão, **sucesso/obrigado (o Figma não fornece estado de sucesso; a spec adota sucesso inline como base sem visual final, D13)**, estados desabilitados, lista de estados (UF), máscara (só o placeholder `(44) 90000-0000`), versões tablet/mobile (os três frames existem só em 1920px), campo/mapeamento de `produto` para "Área de atuação" (spec Q7), obrigatoriedade de "Mensagem" em Agendar Demonstração (spec Q10). Ver Open Questions em `.specs/features/formularios/spec.md`.
