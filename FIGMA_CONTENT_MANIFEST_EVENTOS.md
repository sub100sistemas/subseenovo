# FIGMA_CONTENT_MANIFEST_EVENTOS

Fonte: Figma `vX7qKnnXSOW8zv4kAuS2eN`, seção de página `1033:1578` ("Eventos"), frame raiz `3171:41842` ("Page"), 1920px, 6 blocos de conteúdo + Header/Footer globais (nenhuma URL de node foi fornecida pelo usuário para esta feature — o node foi localizado buscando, dentro do mesmo arquivo Figma já usado nas features anteriores, a seção de página cujo nome é literalmente "Eventos").
Conteúdo extraído via `get_design_context`/`get_metadata` node a node em 2026-09-28. Nenhum texto foi inventado — tudo abaixo é transcrição literal do Figma. Onde o nome da camada no Figma diverge do conteúdo real renderizado, isso é sinalizado explicitamente (mesma lição já registrada em `AD-015`).

---

## 1. Image / Gallery — node `3171:42079`

Fileira decorativa de 5 fotos reais (retratos de pessoas), sem texto, no topo da página (antes do Hero). Moldura azul (`#5d5fef`) de 8px acima/abaixo. Sem heading, sem CTA.

- **Assets pendentes**: 5 fotos (`Photo 1`–`Photo 5`, nodes `3171:41845`–`3171:41849`) — precisam ser baixadas do Figma.

---

## 2. Section / Hero / Online Events — node `3171:41850`

- **H1**: "Eventos Online e Replays do SUBSEE `on`" (o "on" em vermelho `#e33b48` — **nota**: esta página usa um tom de vermelho ligeiramente diferente do `#e72f4d` já usado em outras páginas do site para o mesmo elemento de marca "on"; confirmado node a node, não é aproximação).
- **Descrição** (abaixo do H1): "Participe de lives, webinars e treinamentos ao vivo sobre o sistema, e acesse os replays a qualquer momento para não perder nenhum conteúdo."
- **Divisor decorativo** ("Divider / Horizontal") + 2 formas decorativas ("icone-shape") atrás da composição — puramente visuais.
- **Bloco "Próximo evento"** (dentro da mesma seção, lado a lado):
  - **Coluna 02** (imagem): composição "Imagem → Live Gratuita" (775×487.76) — uma foto de fundo com **7 camadas de texto sobrepostas** (SUBSEE on / "Nova versão 1.0.19 do CRM SUBSEE" / "Convide sua equipe e não fique no passado!" / badge "AO VIVO" / badge "29 OUT 2026 • 09H" / label "1.0.19"). **Confirmado por inspeção visual e por medida de dimensão**: o asset já existente `public/images/eventos/banner-eventos.png` (1550×976 = exatamente 2× de 775×487.76) é a exportação já achatada desta composição inteira — bate literalmente com todo o texto acima, pixel a pixel. Nenhuma reconstrução em HTML é necessária; usar a imagem como está, mesmo padrão de `technology-mockup.png`/`card_arrow.png` (composições complexas exportadas como imagem única).
  - **Coluna 01** (texto, ao lado da imagem):
    - **Divergência de nomenclatura de camada (confirmada, não é bug de extração)**: a camada nomeada "Heading / H2" (node `3171:41857`) na verdade renderiza o texto pequeno em caixa alta "PRÓXIMO EVENTO" (kicker/eyebrow, 15px, `tracking-[2px]`, cor `#595959`) — **não** é um heading de verdade. A camada nomeada "Text / Description" (node `3171:41856`) é quem renderiza o parágrafo grande e em destaque: "A nova versão do CRM SUBSEE fecha um importante ciclo de evolução, com Automações de Marketing, Kanban personalizável para Lançamentos, Venda, Rural e Locação, além de novos recursos como Radar de Oportunidades, Comparação de Imóveis e Comitê de Avaliação, ampliando a gestão comercial e a inteligência do atendimento." (24px, bold, cor `#5d5fef`).
    - **Decisão de hierarquia de heading** (ver `spec.md` § SEO): nenhum dos dois vira um `<h2>` semântico — o "PRÓXIMO EVENTO" é um kicker (`<span>`/`<p>` uppercase) e o parágrafo grande é texto enfatizado (`<p>` bold), não um heading novo, para manter exatamente 1 `<h1>` por página sem introduzir uma hierarquia de heading artificial dentro do próprio Hero.
    - **CTA**: "Inscreva-se!!!" (botão outline, borda `#5d5fef`) — **destino não confirmado no Figma** (o `<a>` não expõe uma URL real na extração). Ver Assumptions do spec.

---

## 3. Section / Hero / Replay — node `3171:41881`

- **H2**: "Reveja nossos **eventos** e **novidades**" (as duas palavras em `#5d5fef`)
- **Descrição** (acima do H2, mesmo bloco): "Assista aos **replays de lives**, treinamentos e lançamentos do CRM SUBSEE quando quiser." ("replays de lives" em negrito)
- **Painel**: fundo em gradiente `linear-gradient(117.49deg, rgb(235,244,254) 2.78%, rgb(239,240,251) 65.12%, rgba(178,200,241,0.45) 104.45%)`, cantos `rounded-[50px]`.
- **3 cards de vídeo/replay** (thumbnail + tag colorida + título + ícone de play central; card 1 tem legenda extra sobre a miniatura):
  1. Tag "LIVE" (cor `#3359d9`) — Título: "Domine as estratégias de captação de recursos para loteamentos" — legenda sobreposta na miniatura: "SVN Investimentos SUB100 Sistemas"
  2. Tag "VERSÃO ATUAL" (cor `#3359d9`) — Título: "Nova versão 1.0.18 do CRM SUBSEE — A maturidade nos processos." — miniatura tem um selo "1.0.18" sobreposto
  3. Tag "NOVOS TREINAMENTOS" (cor `#3359d9`) — Título: "Acesse a base de conhecimento e aprimore-se com as novas funcionalidades do CRM SUBSEE." — sem legenda/selo extra
- **CTA**: "Ver mais vídeos no App SUBSEE →" — **link externo confirmado e real**: `https://app.subsee.com.br/treinamentos/eventos-online?page=1&order=default`, abre em nova aba (`target="_blank"`).
- **Assets pendentes**: 3 thumbnails (nodes `3171:41890`/`41898`/`41907`), ícone de play (2 variantes: `imgPlay` usado nos cards 1 e 2, `imgPlay1` no card 3) + triângulo separado sobreposto (`imgTriangle`, reutilizado nos 3 cards) — todos precisam ser baixados do Figma.

---

## 4. Section / Hero / Overview — node `3171:41921`

- **H2**: "Tudo que sua imobiliária precisa, em um só sistema com o **SUBSEE on**" ("SUBSEE on" em negrito)
- **Descrição**: "O CRM SUBSEE centraliza a gestão de imóveis urbanos, rurais e de temporada com ferramentas de captação, vendas, integração com portais e acompanhamento de resultados em tempo real."
- **Coluna direita**: foto (pessoa apresentando para uma sala com tela de dashboard ao fundo) com cantos arredondados, 2 blocos decorativos sólidos atrás (verde `#1cd9a4` e roxo `#5d5fef`, ambos `rounded-[20px]`) e um ícone de "play" centralizado sobre a foto — **puramente decorativo**: não há link/vídeo real associado a este play button na extração do Figma (nenhum `href`/prototype target capturado). Não inventar um link ou embed de vídeo.
- **Sem CTA** nesta seção (confirmado — não há botão).
- **Assets pendentes**: foto principal (node `3171:41928`, nome de camada "confident-teacher-explaining-lesson-pupils 1" — nome genérico de banco de imagens, não descreve o conteúdo real que é uma sala de reunião corporativa, mesmo tipo de divergência já visto antes: nome de camada não é fonte confiável de conteúdo), ícone de play (`imgPlayButton`) e os 2 círculos decorativos pequenos (`imgEllipse12`, `imgEllipse13`) — todos precisam ser baixados do Figma.

---

## 5. Section / Hero / Signup — node `3171:42068`

O bloco inteiro é um único elemento clicável (`<a>`).

- **Badge**: "EVENTO ONLINE" (chip `rgba(140,110,254,0.12)`, texto `#5d5fef` uppercase)
- **H2**: "Participe dos Nossos Eventos ao Vivo"
- **Descrição**: "Inscreva-se e acompanhe treinamentos, novidades e lançamentos do SUBSEE on pelo Zoom."
- **CTA (estilizado como botão outline branco)**: "Inscreva-se!!! →" — **destino não confirmado no Figma** (mesmo caso da seção 2 — o card inteiro é um `<a>`/`<NuxtLink>` mas nenhuma URL real foi capturada na extração).
- **Nota auxiliar**: "Vagas limitadas por evento"
- **Imagem** (lado direito, sangrando para fora do card): composição de videochamada (3 pessoas em chamada) com fundo transparente à esquerda. **Confirmado por inspeção visual e medida de dimensão**: `public/images/eventos/eventos_vivo.png` (2056×700 = exatamente 2× de 1028×350) já é este asset exato, com canal alpha real (região esquerda 100% transparente, confirmado pixel a pixel) — usar como está.

---

## 6. Section / Hero / FAQ — node `3171:41947` (conteúdo em `3183:3037`)

- **H2**: "Perguntas Frequentes"
- **Descrição**: "Tire suas dúvidas sobre lives, treinamentos e replays do SUBSEE on."
- **6 perguntas/respostas** (accordion, mesmo padrão "+"/"−" já usado em `CrmFaq.vue`/`ApisFaq.vue`/`BaseConhecimentoFaq.vue`):
  1. **"Como participar das lives e eventos online?"** — "Basta se inscrever pelo site ou pelo link divulgado nas redes sociais do SUBSEE. As lives são realizadas ao vivo pelo Zoom e você acompanha tudo diretamente da sua tela."
  2. **"Os eventos ficam gravados para assistir depois?"** — "Sim! Todos os eventos, lives e treinamentos ficam disponíveis como replay na nossa página de conteúdos. Você pode assistir quantas vezes quiser, no horário que preferir."
  3. **"Como funciona a base de conhecimento do SUBSEE?"** — "A base de conhecimento reúne vídeos tutoriais, passo a passo e documentações sobre cada módulo do sistema. É organizada por tema para facilitar a consulta e o aprendizado da sua equipe."
  4. **"Preciso pagar para acessar os treinamentos?"** — "Não. As lives, treinamentos e replays são gratuitos para todos os clientes SUBSEE. Alguns conteúdos especiais também ficam abertos ao público para quem deseja conhecer o sistema."
  5. **"Com que frequência acontecem os eventos?"** — "Realizamos eventos mensais sobre novidades do sistema, dicas de vendas e treinamentos práticos. A cada nova versão do CRM também fazemos uma live especial de lançamento."
  6. **"Posso sugerir temas para os próximos eventos?"** — ⚠️ **Conteúdo duplicado no próprio Figma, não é erro de extração**: a resposta desta pergunta (node `3171:41953`) é **idêntica, palavra por palavra**, à resposta da pergunta 5 (mesmo texto sobre "eventos mensais..."). Confirmado lendo os 2 nodes de resposta individualmente (`3171:41953` vs `3171:41960`) — são o mesmo texto. Isto é quase certamente um copiar-colar não finalizado no arquivo Figma original (a pergunta 6 pergunta sobre *sugerir temas*, mas a resposta fala sobre *frequência dos eventos*). **Não inventar uma resposta nova** — isto precisa da confirmação do usuário antes da implementação (ver spec.md, Assumptions & Open Questions).
- **Nenhum asset novo necessário** — reaproveita `layout/Faq.vue` + ícones existentes (`/icons/faq-plus-circle.svg`/`faq-minus-circle.svg`).

---

## Global Header/Footer

- `instance id="3171:41999" name="Footer"` e `instance id="3171:42000" name="Header"` — componentes globais já existentes (`app/app.vue` já monta `<TheHeader />`/`<TheFooter />` ao redor de `<NuxtPage />`), nenhuma mudança necessária. A página Eventos **não** deve incluir Header/Footer no seu próprio template.
- Nenhuma referência a "Eventos" foi encontrada em `HeaderBar.vue` além do item de navegação de topo já existente: `{ label: 'Eventos', to: '/eventos' }` — já aponta para a rota correta, nenhuma mudança de navegação necessária nesta feature.

---

## Assets — resumo

| Asset | Status | Node(s) |
| --- | --- | --- |
| `banner-eventos.png` | ✅ já existe, confirmado por inspeção visual + medida de dimensão (1550×976 = 2× de 775×487.76) | `3171:41862`–`3171:41877` |
| `eventos_vivo.png` | ✅ já existe, confirmado por inspeção visual + medida de dimensão + canal alpha real (2056×700 = 2× de 1028×350) | `3171:42069`/`3171:41935` |
| 5 fotos da fileira "Image / Gallery" | ⏳ pendente de download | `3171:41845`–`3171:41849` |
| 3 thumbnails dos cards de Replay | ⏳ pendente de download | `3171:41890`, `3171:41898`, `3171:41907` |
| Ícones de play (2 variantes) + triângulo | ⏳ pendente de download | `3171:41894`/`41901` (imgPlay), `3171:41911` (imgPlay1), `3171:41895` (triângulo) |
| Foto principal do Overview | ⏳ pendente de download | `3171:41928` |
| Ícone de play do Overview + 2 círculos decorativos | ⏳ pendente de download | `3171:41929`, `3171:41922`, `3171:41933` |
| Ícones "+"/"−" do FAQ | ✅ já existem (`/icons/faq-plus-circle.svg`/`faq-minus-circle.svg`) | — |
| 2 formas decorativas do Hero ("icone-shape") | ⏳ pendente de download (ou avaliar se são substituíveis por CSS puro — são imagens PNG semitransparentes, provavelmente precisam de export) | `3171:41858`, `3171:41860` |
