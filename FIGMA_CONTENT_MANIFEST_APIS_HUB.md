# FIGMA_CONTENT_MANIFEST_APIS_HUB — `/modulos/apis-hub-integrador`

Figma: arquivo `vX7qKnnXSOW8zv4kAuS2eN`, node raiz `3164:35379` (1920px, 8 seções). Extraído via `get_design_context`/`get_metadata` node a node. Conteúdo verbatim — nenhum texto foi inventado ou parafraseado.

---

## 1. Section / Hero / Top — node `3164:35380`

- **H1** (`3164:35434`): "Conecte o SUBSEE **on** aos seus sistemas por APIs e Hub" — a palavra "on" vem estilizada em vermelho (`#e72f4d`) no Figma. **Tratamento intencional confirmado**: o mesmo padrão de destaque em vermelho de uma palavra aparece de novo na descrição da seção 3 ("Conecte o SUBSEE **on** aos seus sistemas favoritos...") — não é erro de digitação isolado, é uma marca/termo estilizado ("SUBSEE On") repetido nas duas seções. Manter literal.
- **Descrição** (`3164:35433`): "Centralize dados de leads, imóveis e atendimentos entre todos os seus sistemas com integrações via API, incluindo portais imobiliários, WhatsApp, redes sociais e Meta Ads."
- **Card flutuante 1** ("Troca de Dados", `3164:35400`): título "Troca de Dados", descrição "Envie leads e imóveis entre sistemas integrados.", ícone `arrow-left-right` (data-exchange).
- **Card flutuante 2** ("Conexão via API", `3164:35393`): título "Conexão via API", descrição "Integre sistemas de qualquer lugar pela web.", ícone `</>`.
- Fileira de 5 ícones de tipo de imóvel (temporada/rurais/locação/venda/lançamentos) — mesmos assets/ordem do hero do CRM, não re-extraídos individualmente.
- Badge de canto: ícone `apis.svg`.
- **Sem CTA nesta seção** (confirmado — nenhum node de botão presente).
- Imagens já exportadas: `hero-foto-mulher-tablet.png` (foto), `card_arrow.png` (overlay dos 2 cards).

---

## 2. Section / Hero / Technology — node `3164:38941`

- **H2** (`3164:38943`): "Integrações que ampliam o alcance do seu negócio **imobiliário**"
- **Descrição** (`3164:38944`): "Integre Facebook Ads, Instagram Ads e outros canais para captar leads qualificados em todos os segmentos."
- **CTA** (`3164:38945`): texto renderizado **"Testar grátis por 30 dias"** — **nota de fidelidade**: o nome da instância no Figma é "Link → Agendar Demonstração", mas o texto real renderizado é "Testar grátis por 30 dias". Não confiar no nome da camada/instância para copy de CTA; usar sempre o texto renderizado.
- Mockup já exportado: `technology-mockup-telas.png`.

---

## 3. Section / Hero / API Hub "Bloco" — node `3165:39276`

- **H2** (`3164:35916`): "APIs e HUB Integrador: toda a sua operação **conectada**"
- **Descrição** (`3164:35915`): "Conecte o SUBSEE on aos seus sistemas favoritos e mantenha leads, imóveis e atendimentos sempre sincronizados, sem esforço manual." (mesmo termo estilizado "on", ver nota da seção 1)
- Sem SectionTag/eyebrow nesta seção (confirmado — diferente da seção 5, que tem "INTEGRAÇÕES").
- **Coluna 02** — intro (`3164:35914`): "Integre suas ferramentas com agilidade, centralize os dados da operação e elimine tarefas manuais repetitivas em poucos cliques."
- **4 itens de feature**:
  1. "Integração com APIs" — "Conecte CRMs, portais e outras ferramentas externas diretamente aos sistemas do SUBSEE, sem esforço manual." (ícone integração)
  2. "Sincronização automática" — "Leads e imóveis são atualizados em tempo real entre todos os sistemas conectados." (ícone sincronização)
  3. "Dados centralizados" — "Tenha o controle total das informações da operação em um único lugar, com mais segurança." (ícone dados centralizados)
  4. "Mais eficiência operacional" — "Reduza tarefas manuais repetitivas e ganhe tempo para focar no que realmente importa." (ícone eficiência)
- **CTA**: texto renderizado **"Testar grátis por 30 dias"** (mesma nota de fidelidade da seção 2 — instância também nomeada "Link → Agendar Demonstração" no Figma).
- Coluna imagem já exportada: `portfolio-telas-apis-hub.png`.

---

## 4. Section / Hero / Benefits — node `3164:35970`

- **H2** (`3164:35971`): 'Conheça as vantagens do "**APIs e HUB Integrador**"' (aspas literais no texto, palavra destacada em roxo)
- **Descrição** (`3164:35972`): "Um Hub de integração eficiente conecta o SUBSEE aos seus sistemas via APIs, centralizando dados e otimizando toda a operação. Confira os principais benefícios:"
- **3 cards** (nomes de frame no Figma — "Card - Portfólio"/"Sincronização"/"Leads" — **não correspondem** ao texto renderizado; usar apenas o texto abaixo):
  1. "Sincronização automática de dados" — "Leads, imóveis e atendimentos são sincronizados automaticamente entre os sistemas integrados, sem cadastros manuais, reduzindo erros e garantindo informações sempre atualizadas." (sync icon)
  2. "Integração com múltiplos sistemas" — "Conecte CRMs, portais imobiliários, WhatsApp, redes sociais e outras ferramentas diretamente às APIs do SUBSEE, sem precisar alternar entre diferentes plataformas ao longo da rotina de trabalho." (integration icon, rotacionado 90°)
  3. "Mais segurança e controle centralizado" — "Com todos os dados centralizados em um só lugar, sua operação ganha mais controle, segurança e menos tarefas manuais, fortalecendo a eficiência da equipe no dia a dia." (shield icon)
- Sem CTA nesta seção (confirmado).

---

## 5. Section / Content / Integrações "Bloco" — node `3164:36002`

- **Tag** (`3164:36041`): "INTEGRAÇÕES"
- **H2** (`3164:36042`): "Conecte **seu CRM** às ferramentas que você já utiliza"
- **Descrição** (`3164:36043`): "Conecte o WhatsApp, redes sociais e o RD Station diretamente ao seu funil de atendimento, sem precisar alternar entre sistemas"
- **CTA**: "Testar grátis por 30 dias" (instância "Link → Testar grátis por 30 dias" — nome da instância bate com o texto desta vez).
- **Achado importante**: este texto (tag + H2 + descrição) é **idêntico, palavra por palavra**, ao conteúdo hardcoded já existente em `app/components/sections/CrmIntegrations.vue` (heading "Conecte **seu CRM** às ferramentas que você já utiliza" + parágrafo sobre WhatsApp/redes sociais/RD Station). Confirmado intencional — é a mesma mensagem reaproveitada em mais de uma página de módulo, não um erro de extração. **O que difere é a coluna de imagem**: `CrmIntegrations.vue` usa uma grade de 6 ícones "bolha" (WhatsApp/Meta/RD Station/SUBSEE/"Meu Site"/"Imóveis"); esta página usa a composição `conecte.png` já exportada (painel CRM funil + card "próximas ações" + card de métrica + 5 bolhas orbitando: WhatsApp/Meta/RD Station/SUBSEE/Portal).
- Imagem já exportada: `conecte.png`.

---

## 6. Section / Hero / Testimonials — node `3168:39878`

- **H2** (`3168:39896`): "O que **nossos clientes** falam dos nossos produtos e serviços" (idêntico ao heading já usado em `HeroTestimonials.vue`/outras páginas — reaproveitar o texto, não reextrair).
- **2 cards de depoimento**, ambos instâncias do mesmo componente compartilhado de depoimentos:
  - **Achado de inconsistência no Figma (não corrigir automaticamente — confirmar antes de implementar)**: as duas instâncias ("Item → Legado Urbano" e "Item → Bellakaza") renderizam **o mesmo texto, nome, cargo e empresa** ("Há quase 20 anos nossa imobiliária trabalha com o CRM SUBSEE..." / João Calçada / "Diretor" / "Imobiliária Soma"), diferindo apenas na logomarca visível (uma mostra o logo "Legado", a outra mostra o logo "Bellakaza") — um mismatch claro entre logo e legenda dentro do próprio arquivo Figma (aparenta ser um componente duplicado sem atualizar os overrides de texto).
  - **Recomendação**: não reproduzir esse mismatch. Usar 2 entradas corretas e já existentes em `app/data/testimonials.json`, pareando logo+nome+empresa corretamente:
    - `crm-temporada-joao-calcada` (texto "Há quase 20 anos...", João Calçada, **role no JSON: "Gerente de Locação"** — Figma mostra "Diretor"; **discrepância de cargo a confirmar com o time de design/produto antes de implementar** — usar o valor do JSON até confirmação, por ser a fonte já publicada no site), logo Imobiliária Soma.
    - `crm-geral-cleveson-costa` (Cleveson Costa, Diretor, Bellaka Negócios Imobiliários, logo `logo-bellakaza-negocios-imobiliarios.svg` — bate com o logo "Bellakaza" visível na segunda instância).

---

## 7. Section / Hero / Other Modules — node `3164:36110`

- **H2** (`3164:36112`): "Conheça os outros módulos do Integrações e Habilidades"
- **Descrição** (`3164:36113`): "Explore os recursos de integração e automação que complementam e potencializam sua operação."
- **Banner único** (instância "Banner - Integrações", variante "Base de conhecimento" — confirmado via `get_design_context`, não é um grid de 3 cards como no CRM):
  - Ícone: livro/base de conhecimento (`Layer_1`, asset SVG a exportar).
  - Título (H3): "Base de conhecimento"
  - Descrição: "Tutoriais, guias e documentação completa para usar a plataforma."
  - Link: "Clique aqui →"
  - **Aberto**: destino real do link (`href`) não identificado no Figma nem no site atual — nenhuma página de "Base de conhecimento" encontrada nas rotas existentes. Usar placeholder documentado (`href="#"`) até o usuário confirmar a URL real (ex.: um subdomínio de docs, uma central de ajuda externa, etc.) — não adivinhar.

---

## 8. Section / Hero / FAQ — node `3168:40054`

- **H2** (`3164:36166`): "Perguntas Frequentes"
- **Descrição** (`3164:36165`): "Tire suas dúvidas sobre as APIs e o Hub integrador da SUBSEE."
- **6 perguntas/respostas** (numeradas 01–06 no Figma, ordem de exibição = 01 no topo):

1. **"O que é o Hub de Integrações do SUBSEE?"**
   "O Hub de Integrações do SUBSEE é a camada que conecta o CRM a outros sistemas, plataformas e serviços por meio de APIs, webhooks e outros padrões de integração. Ele permite centralizar e trocar informações como leads, imóveis, atendimentos, agendas e comunicações, reduzindo processos manuais e facilitando a conexão do SUBSEE com o ecossistema tecnológico da imobiliária."

2. **"Posso testar as APIs e integrações antes de contratar?"**
   "Durante o período gratuito de 30 dias, os recursos de API e Hub de Integrações podem ser visualizados, mas não ficam habilitados para uso. Como algumas integrações exigem configuração técnica, credenciais, validações e suporte especializado, sua ativação ocorre após a contratação. Antes disso, o cliente pode solicitar uma demonstração com um consultor para conhecer as possibilidades de integração e entender como elas podem ser aplicadas à sua operação."

3. **"Quais integrações estão disponíveis no CRM Imobiliário SUBSEE?"**
   "O SUBSEE oferece diferentes integrações para comunicação, marketing, produtividade e distribuição de imóveis. Entre elas estão envio de mensagens por Push e SMS, WhatsApp Oficial da Meta ou por parceiros, integração com portais imobiliários, Google Calendar, Gmail, soluções de atendimento por inteligência artificial como a Lais.ai, além da captação de leads provenientes de campanhas no Facebook Ads e Instagram Ads da Meta. A disponibilidade pode variar conforme o serviço e o tipo de integração utilizado."

4. **"É possível integrar o SUBSEE ao WhatsApp Oficial da Meta?"**
   "Sim. O SUBSEE pode ser integrado ao WhatsApp Oficial da Meta, além de soluções de parceiros de mensageria. Essa integração permite aproximar as conversas do ambiente do CRM, relacionando comunicações a leads, clientes e atendimentos e reduzindo a necessidade de trabalhar com informações dispersas em diferentes sistemas."

5. **"Como funciona a integração do SUBSEE com portais imobiliários?"**
   "O SUBSEE pode distribuir e atualizar informações de imóveis nos portais imobiliários integrados, utilizando os padrões de comunicação suportados por cada portal, como feeds em XML, APIs ou outros formatos de integração. Dessa forma, a imobiliária mantém o cadastro principal no CRM e reduz a necessidade de atualizar manualmente os mesmos anúncios em diferentes plataformas."

6. **"O SUBSEE terá integração por MCP?"**
   "A integração por MCP — Model Context Protocol — está em desenvolvimento, com previsão para o final de 2026. A proposta é permitir que modelos de inteligência artificial e agentes compatíveis com o protocolo possam se conectar de forma estruturada aos recursos disponibilizados pelo SUBSEE, ampliando as possibilidades de uso com plataformas como ChatGPT, Claude e outras soluções baseadas em LLMs, conforme as permissões e recursos disponibilizados pela integração."

Ícones plus/minus reaproveitáveis: `/icons/faq-plus-circle.svg` / `/icons/faq-minus-circle.svg` (já existem, usados por `CrmFaq.vue`).

---

## Assets a exportar (ainda faltando)

- Hero: ícone `arrow-left-right` (troca de dados), ícone `</>` (conexão via API), badge de canto `apis.svg`.
- API Hub Bloco: 4 ícones de feature (integração, sincronização, dados centralizados, eficiência).
- Benefits: 3 ícones (sync, integration, shield) — já usados dentro de círculos brancos com borda `#5d5fef`.
- Other Modules: 1 ícone (livro/base de conhecimento).
- FAQ: já cobertos por `/icons/faq-plus-circle.svg`/`faq-minus-circle.svg`.

## Assets já exportados (`public/images/modulos-apis-hub-integrador/`)

`hero-foto-mulher-tablet.png`, `card_arrow.png`, `technology-mockup-telas.png`, `portfolio-telas-apis-hub.png`, `conecte.png`.

## Pendências que bloqueiam decisões de conteúdo (não de estrutura)

1. Destino do link "Base de conhecimento" (seção 7) — confirmar com o usuário.
2. Discrepância de cargo de João Calçada (Figma: "Diretor" / JSON: "Gerente de Locação") — confirmar qual está correto.
3. Confirmar se o CTA "Testar grátis por 30 dias" deve apontar para `/testar-gratis` (mesma rota usada por `CrmIntegrations.vue`) em todas as 3 seções que o usam (Technology, API Hub Bloco, Content/Integrações), ou se cada uma tem um destino diferente — o Figma não expõe URLs de link.
