# FIGMA_CONTENT_MANIFEST_BASE_CONHECIMENTO

Fonte: Figma `vX7qKnnXSOW8zv4kAuS2eN`, node raiz `3164:37761` ("Page"), 1920px, 8 seções + Header/Footer globais.
Conteúdo extraído via `get_design_context`/`get_metadata` node a node em 2026-09-28. Nenhum texto foi inventado — tudo abaixo é transcrição literal do Figma.

---

## 1. Section / Hero / Top — node `3164:37762`

- **H1**: "Central de Ajuda, Tutoriais e Documentação do SUBSEE `on`" (o "on" em vermelho `#e72f4d`, igual ao padrão de marca já usado em outras Heroes).
- **Descrição**: "Centralize vídeos, treinamentos e conteúdos do SUBSEE em uma Base de Conhecimento organizada, facilitando o acesso às informações e a rotina da equipe."
- **Sem CTA** nesta seção (confirmado — não há instância de botão no node).
- **Fileira de 5 ícones de módulo** ("Btn → Icones Imóveis", node `3164:37805`): mesma estrutura/posição/nomes (`Acesse imóveis lançamentos`, `venda`, `rurais`, `locação`, `temporada`) já usada em `CrmHero.vue`/`ApisHero.vue` — reaproveitar os SVGs existentes (`/icons/crm-hero-icone-*.svg`).
- **Composição visual** (coluna direita): foto (pessoa com tablet) + 2 cards flutuantes com curvas + badge de canto:
  - Card 1: "Acesso Online" / "Acesse tutoriais e manuais de qualquer lugar." (ícone globo, chip roxo `#5d5fef`)
  - Card 2: "Equipe treinada" / "Distribua conteúdos e treinamentos para o time." (ícone pessoas)
  - Badge de canto: ícone "conhecimento.svg" (livro/conhecimento) em chip `#e8e8fd`/borda `#5d5fef`
- **Assets já existentes e confirmados por inspeção visual direta**:
  - `public/images/modulos-base-de-conhecimento/hero-visual.png` = a foto (pessoa com tablet), fundo transparente
  - `public/images/modulos-base-de-conhecimento/card_arrow.png` = composição pré-renderizada dos 2 cards + curvas decorativas (mesmo padrão do `AD-012`)
- **Asset pendente**: ícone do badge de canto ("conhecimento.svg", node `3164:37797`/`3164:37798`) — precisa ser baixado do Figma.

---

## 2. Section / Hero / Technology — node `3168:40055`

- **H2**: "Aprenda a usar o sistema com tutoriais e **treinamentos**" (palavra "treinamentos" em `#5d5fef`)
- **Descrição**: `O manual através de vídeos com o passo a passo de cadastramentos de novos empreendimentos, gestão de leads, simulador de vendas, publicação de imóveis, acompanhamento de propostas, CRM imobiliário e todas as outras funcionalidades do Sistema SUBSEE imobiliário, encontra-se dentro da "Base de conhecimento".` ("Base de conhecimento" em negrito)
- **CTA**: "Testar grátis por 30 dias" (instância nomeada "Link → Agendar Demonstração", mas o texto renderizado real é este — mesmo padrão já confirmado em `AD-015`)
- **Mockup estático**: screenshot do painel "Base de conhecimento" dentro do CRM (sidebar com Bairros/Temporada/.../"Base de conhecimento" destacado + lista de 51 registros/vídeos). Node `3168:40062`/`3168:40552` (`base 1`), 818×3048, altamente decorativo/detalhado — não reconstruível em HTML/CSS de forma viável.
  - **Asset já existente e confirmado por inspeção visual**: `public/images/modulos-base-de-conhecimento/technology-mockup.png` — bate exatamente com este mockup (menu lateral do CRM com "Base de conhecimento" selecionado, cards "Seja bem-vindo ao Sistema SUBSEE ON", "Cadastro de Pessoas", "Cadastro de Edifícios e Condomínios").

---

## 3. Section / Hero / Training — node `3168:40734`

- **H2** (nível "Bloco", `3164:38448`): "Como treinar sua equipe para usar o SUBSEE `on`" ("on" em vermelho)
- **Descrição** (nível "Bloco", `3164:38447`): "Conheça os pilares da jornada de aprendizado do SUBSEE: um ecossistema completo para capacitar sua equipe do início ao fim."
- **Imagem** (`3164:38171`, "Tela da Ficha do Imóvel" + celular): composição "ficha de imóvel" + tela de celular com funil/termômetro — mesmo padrão visual do `portfolio-telas-apis-hub.png` de `apis-hub-integrador`.
  - **Asset já existente e confirmado por inspeção visual**: `public/images/modulos-base-de-conhecimento/portfolio-telas-base-conhecimento.png` — bate exatamente ("Proposta de compra e venda de imóvel" + celular SUBSEE on com Termômetro/Funil).
- **Coluna 02** (`3168:40732`):
  - Descrição secundária: "Da implantação ao suporte contínuo, oferecemos tudo o que sua equipe precisa para dominar o sistema com rapidez e confiança."
  - **4 itens de feature** (ícone + H3 + descrição):
    1. "Suporte e implantação humanizada" — "Nossa equipe acompanha você em todas as etapas de implantação do SUBSEE, com apoio de IA."
    2. "Treinamentos em vídeo" — "Aprenda cada funcionalidade do sistema com vídeos práticos e objetivos, no seu próprio ritmo."
    3. "Manuais e materiais de apoio" — "Consulte guias completos sempre que precisar tirar dúvidas sobre qualquer parte do sistema."
    4. "Eventos online" — "Participe de encontros ao vivo com as novidades do sistema e dicas para aproveitar ainda mais a plataforma."
  - **CTA**: "Testar grátis por 30 dias" (mesmo CTA reaproveitado)
- **Assets pendentes**: 4 ícones da lista de features (nodes `3164:38429`, `3164:38434`, `3164:38437`, `3164:38441`) — precisam ser baixados do Figma.

---

## 4. Section / Hero / Publishing — node `3164:38449`

- **H2**: `Vantagens que a "Base de Conhecimento" oferece` ("Base de Conhecimento" em `#5d5fef`)
- **Descrição**: "Uma base de conhecimento sólida e bem estruturada traz inúmeros benefícios ao seu negócio. Abaixo elencamos os principais:"
- **3 cards** (ícone circular sobreposto + H3 + descrição, mesmo padrão de `ApisBenefits.vue`/`CrmAllInOne.vue`):
  1. "Maior engajamento das equipes" — "Possuir uma base de conhecimento sólida e eficiente é extremamente necessário para manter sua equipe engajada. A resolução rápida de problemas fortalece a sinergia entre os colaboradores." (ícone "team icon")
  2. "Melhorar o treinamento de novos colaboradores" — "O treinamento para colaboradores e parceiros se torna fácil e prático, com acesso a tudo que precisam saber sobre o sistema de forma rápida, organizada e muito eficiente para todos." (ícone "training icon")
  3. "Aumenta a satisfação dos clientes" — "Com uma equipe bem treinada e sempre atualizada pela Base de Conhecimento, o atendimento se torna mais ágil e preciso, elevando a confiança e a satisfação dos seus clientes." (ícone "satisfaction icon")
- **Assets pendentes**: 3 ícones (nodes `3164:38476` team, `3164:38467` training, `3164:38457` satisfaction) — precisam ser baixados do Figma.

---

## 5. Section / Content / Other — node `3164:38481`

- **Tag**: "base de conhecimento" (uppercase, chip `#e0e1ff`/texto `#5d5fef`)
- **H2**: "Toda a informação que sua equipe precisa, em um só lugar."
- **Descrição** (2 linhas): "Acesse treinamentos, manuais e documentação de forma rápida e centralizada, direto na plataforma. Gerencie permissões e controle de acesso com facilidade e segurança."
- **Trust-indicator**: ícone "shield-check" + "Sem compromisso. Teste gratuito por 30 dias para toda a equipe."
- **CTA**: "Testar grátis por 30 dias"
- **Visual esquerdo** ("devices-composition", node `3164:38487`): laptop mockup (janela com busca "Buscar manuais, processos, regras...", sidebar "Biblioteca" com Treinamentos/Manuais/Certificados, dashboard "Trilha de Integração" com card de artigo + painel de stats) + celular mockup (progresso "Integração de Sistemas", mensagem de instrutor, card de vídeo). Estrutura limpa (nav/cards/textos), não é um screenshot real — **nenhum dos 4 assets já existentes cobre esta composição**.
  - **Pendência de arquitetura**: decidir na fase de Design se esta composição é (a) exportada como imagem única do Figma (mesmo padrão do `ApisConecte.vue`/`conecte.png`) ou (b) reconstruída em HTML/CSS (a estrutura é relativamente simples — janela + sidebar + 2 cards + mobile mockup — mais próxima do padrão "Content / Other" de outras páginas do que dos mockups-screenshot complexos). Recomendação: exportar como imagem (consistente com `AD-011`/`ApisConecte`), documentado como asset pendente.

---

## 6. Section / Hero / Other Modules — node `3164:38607`

- **H2**: "Conheça os outros módulos do Integrações e Habilidades"
- **Descrição**: "Explore os recursos de integração e automação que complementam e potencializam sua operação."
- **Banner único** ("Banner - Integrações", instância): aponta para o módulo **APIs e HUB Integradores** — "Integre sistemas e automatize fluxos de trabalho via API." + CTA "Clique aqui →" → `/modulos/apis-hub-integrador`.
  - Mesmo padrão (header + banner único, não grid) de `ApisOtherModules.vue`, mas na direção oposta (aqui aponta para APIs; lá apontava para Base de Conhecimento).
  - Ícone do banner: rascunho vetorial de rede/compartilhamento — **candidato a reaproveitar** `/icons/menu-icone-apis-hub.svg` (já usado no mega-menu para o mesmo módulo); confirmar visualmente na implementação antes de decidir se precisa de um export dedicado.

---

## 7. Section / Hero / Testimonials — node `3164:38612`

- **H2**: "O que **nossos clientes** falam dos nossos produtos e serviços" (mesmo H2 padrão já usado em `apis-hub-integrador`/`crm-imobiliario`, via `layout/Testimonials.vue`)
- **2 depoimentos** (confirmados via `get_design_context` nas próprias instâncias, não apenas nos nomes das camadas — sem mismatch logo↔texto desta vez):
  1. "Item → Ideal Imóveis" (`3171:41076`) → **Mauro Alencar, Diretor, Ideal Imóveis** — já existe em `app/data/testimonials.json` com o id `crm-geral-mauro-alencar`, texto e logo (`logo-ideal-imoveis.svg`) idênticos.
  2. "Item → Vettore" (`3171:41077`) → **Julio Silveira, Corretor, Vettore Uruguay** — já existe com o id `crm-rural-julio-silveira`, texto e logo (`logo-vettore.svg`) idênticos.
- **Nenhum asset novo necessário** — reaproveita 100% de `testimonials.json` + `layout/Testimonials.vue` (mesmo padrão de `ApisTestimonials.vue`).

---

## 8. Section / Hero / FAQ — node `3168:40951`

- **H2**: "Perguntas Frequentes"
- **Descrição**: "Tire suas dúvidas sobre a Base de Conhecimento do SUBSEE on."
- **6 perguntas/respostas** (accordion, ícones "+"/"−" já existentes — `AD-008`):
  1. **"O que é a Base de Conhecimento do SUBSEE?"** — "É a central de ajuda do SUBSEE, onde o usuário encontra vídeos, tutoriais e documentações organizados por tema. Além disso, cada tela do sistema possui um ícone de play com treinamentos relacionados àquela funcionalidade, facilitando o aprendizado quando o recurso está sendo utilizado."
  2. **"A Base de Conhecimento cobre todos os módulos do sistema?"** — "Sim. A Base de Conhecimento reúne conteúdos relacionados aos principais módulos e segmentos do SUBSEE, como CRM, Lançamentos, Venda, Locação, Rural e Temporada, além de outros recursos disponíveis no sistema."
  3. **"Posso acessar os tutoriais pelo celular ou somente pelo computador?"** — "Sim. Os vídeos, tutoriais e documentações podem ser acessados por diferentes dispositivos, como computador, tablet ou celular, permitindo que o usuário consulte os conteúdos sempre que precisar."
  4. **"Existem outras formas de aprender ou aprimorar meus conhecimentos sobre o SUBSEE?"** — "Sim. Além da Base de Conhecimento, o usuário pode consultar o Histórico de Versões, participar das lives e eventos online, contar com a Mel, nossa assistente de IA disponível 24 horas para auxiliar com dúvidas e orientações, além do suporte humanizado da nossa equipe."
  5. **"Quando acontecem as lives sobre as novas funcionalidades do SUBSEE?"** — "As lives acontecem, em média, a cada 45 dias, normalmente acompanhando o fechamento das principais atualizações do sistema. Nelas apresentamos novas funcionalidades e melhorias, e a gravação fica disponível posteriormente para quem não puder acompanhar ao vivo."
  6. **"Os treinamentos são atualizados sempre que o sistema muda?"** — "Sim. Além das lives que apresentam as principais novidades de cada versão, novas funcionalidades recebem treinamentos específicos e os conteúdos existentes são revisados quando alterações importantes exigem uma nova explicação, mantendo os usuários atualizados sobre a evolução do SUBSEE."
- **Nenhum asset novo necessário** — reaproveita `layout/Faq.vue` + ícones existentes, mesmo padrão de `CrmFaq.vue`/`ApisFaq.vue`.

---

## Global Header/Footer

- `instance id="3164:38685" name="Header"` e `instance id="3164:38684" name="Footer"` — já são os componentes globais existentes (`layout/HeaderBar.vue`, `layout/TheFooter.vue`), nenhuma mudança necessária.
- O item "Base de conhecimento" no mega-menu "INTEGRAÇÕES E HABILIDADES" (`HeaderBar.vue:82-87`) **já aponta para `/modulos/base-de-conhecimento`** com badge "novo" — confirmado, nenhuma alteração de navegação necessária nesta feature.

---

## Assets — resumo

| Asset | Status | Node(s) |
| --- | --- | --- |
| `hero-visual.png` | ✅ já existe, confirmado visualmente | — |
| `card_arrow.png` | ✅ já existe, confirmado visualmente | `3164:37774`, `3164:37769`, `3164:37770` |
| `technology-mockup.png` | ✅ já existe, confirmado visualmente | `3168:40552` |
| `portfolio-telas-base-conhecimento.png` | ✅ já existe, confirmado visualmente | `3164:38171` |
| Ícone badge de canto "conhecimento.svg" | ⏳ pendente de download | `3164:37797` |
| Ícones módulo (5x, fileira do Hero) | ✅ reaproveitar `/icons/crm-hero-icone-*.svg` existentes | `3164:37805` |
| Ícones dos 4 itens "Training/Coluna02" | ⏳ pendente de download | `3164:38429/34/37/41` |
| Ícones dos 3 cards "Publishing" (team/training/satisfaction) | ⏳ pendente de download | `3164:38476/67/57` |
| Imagem "devices-composition" (Content/Other) | ⏳ pendente — exportar do Figma ou construir em HTML/CSS (decisão de Design) | `3164:38487` |
| Ícone do banner "Other Modules" | ⏳ confirmar se `/icons/menu-icone-apis-hub.svg` bate visualmente, senão exportar | `3164:38611` |
| Logos/depoimentos (Testimonials) | ✅ já existem em `testimonials.json` | — |
| Ícones FAQ "+"/"−" | ✅ já existem (`AD-008`) | — |
