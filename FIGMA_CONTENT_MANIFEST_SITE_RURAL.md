# FIGMA Content Manifest — Site para Imobiliárias Rurais

Figma file: `vX7qKnnXSOW8zv4kAuS2eN` | Section: `815:317` | Page node: `3164:26825` (1920×9997)

Rota: `/modulos/site-para-imobiliarias-rurais` · Prefixo dos componentes: `SiteRural*`

---

## Section 1 — Hero (`3164:26826`)

**H1:** (Poppins ExtraBold 42px)
```
Site para
Imobiliárias Rurais
```
_("Imobiliárias Rurais" em `text-brand` `#5d5fef`)_

**Description:**
Indicado para anunciantes com foco em propriedades rurais como fazendas, sítios e chácaras. O diferencial desse site está na peculiaridade do anúncio rural.

**Card flutuante:** Publicação integrado / No site e nos principais portais

**Card badge:** Meu Site (H3, Bold 18px) / Crie sites modernos para imobiliárias rurais

**Assets:**
- Foto do hero (`288×444`) — homem de camisa social com braços cruzados
- Curvas decorativas, badge de canto e ícone de módulo (vetores)

---

## Section 2 — Technology (`3164:26868`)

**H2:** (Bold 36px)
```
Sites desenvolvidos para atender às
necessidades da sua imobiliária rural
```
_("sua imobiliária rural" em `text-brand`)_

**Description:**
Reduza o retrabalho no dia a dia da imobiliária, acompanhe o desempenho dos corretores e centralize atendimentos, propostas e negociações em um único sistema

**CTA:** Testar grátis por 30 dias →

**Assets:**
- Mockup do site/CRM (`1167×633`) — export PNG achatado; a composição tem 743 nós e não deve ser reconstruída em HTML

---

## Section 3 — Listings (`3164:27608`)

**H2:** (Bold 36px)
```
O anúncio de imóveis rurais no Brasil subiu
de patamar com o SUBSEE on
```
_("on" em `#f44336` — vermelho da marca SUBSEE on, **não** o roxo `text-brand`)_

**Lead:**
O módulo de imóveis rurais permite ao corretor apresentar informações completas, organizadas e padronizadas para potenciais compradores e investidores.

**Summary (coluna direita):**
Do georreferenciamento à disponibilidade hídrica: cultivo predominante, bioma, características do solo e logística de acesso, registrados com precisão para atrair compradores e investidores qualificados.

**Features (4):** _(H3 SemiBold 20px)_
1. Descritivo técnico completo — Descritivo técnico completo, com campos específicos para as características de imóveis rurais
2. Disponibilidade hídrica e logística — Registro de disponibilidade hídrica, logística de acesso à propriedade e capacidade de armazenamento
3. Documentos de apoio — Disponibilização de links públicos com documentos de apoio no anúncio, como laudos técnicos, histórico de pluviometria e informações do CAR;
4. Mapas interativos — Integração com atributos georreferenciados em KML, com visualização interativa de informações e controle de camadas

**CTA:** Agendar Demonstração

**Assets:**
- Composição de mockups com 6 fotos (mapa, fazenda, campo natural) → export PNG achatado
- 4 ícones de feature

---

## Section 4 — Property Details (`3164:28095`)

Layout: `Row` 1400×641 — coluna esquerda `Imagem` 378×641 (celular), coluna direita `Coluna 02` 877×548 em x=503.

**H2:** (Bold 36px)
```
Imóveis rurais com informações completas e bem detalhadas
```
_("detalhadas" em `text-brand`)_

**Description:**
Cadastre os atributos técnicos da propriedade, do georreferenciamento à disponibilidade hídrica, e dê ao comprador e ao investidor os dados que precisam para decidir com confiança

**Sub-label:** Legenda dos detalhes do imóvel rural

**Attribute grid (11 items, `List` `3164:30608`, 3 colunas, cards 276×49, gap-x 14 / gap-y 23):**
Área propriedade | Área aberta | Cultivo Predominante
Período das chuvas | Aptidão do Solo | Bioma
Utilização do Solo | Altitude média | Teor de argila
Juquirada | Pluviometria

Card: `rounded-[10px]`, borda `#dddddd` 1px, sem fill. Ícone vetor ~25×24 em `#6769f0` a 20px da esquerda; label Poppins Regular 16px `#313846` a 58px.

**Assets:**
- Celular `378×641` — o node `main` é só a carcaça com tela preta. Exportar escondendo o shape decorativo via plugin API e capturando o container (mesmo procedimento da página urbana)
- 11 ícones de atributo (nodes `3164:28362`, `28358`, `28356`, `28347`, `28342`, `28338`, `28333`, `28328`, `28323`, `28318`, `28313`)

---

## Section 5 — International (`3164:30610`)

**Idêntica à seção da página urbana** — mesma cópia, mesmos 6 idiomas, mesmo fluxo de 4 nós. Consome `layout/LanguageSwitcher.vue`.

**H2:** (Bold 45px)
```
Fale o idioma dos seus
clientes internacionais
```
_("internacionais" em `text-brand`)_

**Description:**
Habilite a tradução automática pelo **painel SUB100 Meu Site** e ofereça uma experiência fluida para compradores e locatários estrangeiros interessados em imóveis residenciais e comerciais.

> ⚠️ **Revisão de conteúdo:** a frase termina em "imóveis residenciais e comerciais" — texto da página urbana reaproveitado no Figma da página rural. Implementado literal conforme o Figma, por decisão do cliente. Candidato a ajuste de copy para contexto rural.

**Card:** Navegue em seu idioma — Português PT · Inglês EN · Espanhol ES · Alemão DE · Italiano IT · Chinês ZH

**Assets:** reutiliza integralmente `site-urbano-idioma-*.svg`, `site-urbano-internacional-*.svg` e `internacional-google-icone.png`

---

## Section 6 — Customization (`3164:31638`)

**H2:** (Bold 36px)
```
Gerencie seu site rural com total autonomia
```
_("seu site rural" em `text-brand`)_

**Description:**
Tenha autonomia para manter conteúdos, banners, artigos e configurações do site sempre atualizados, tudo centralizado em um só painel, sem depender de suporte técnico

**Features (4):** _(H3 Bold 20px)_
1. SEO e Redes Sociais — Configure o SEO do seu site e escolha a imagem exibida ao compartilhar suas propriedades rurais nas redes sociais.
2. Organização e Conteúdo — Organize as seções da página inicial e publique novidades do agronegócio direto pelo painel.
3. Banners Personalizados — Crie banners para divulgar fazendas, safras e eventos do agronegócio da sua imobiliária.
4. Conteúdo Institucional — Atualize a apresentação da empresa: imagens, links, redes sociais, endereço e WhatsApp para contato com produtores rurais.

**Assets:**
- Composição laptop + celular com 7 screenshots → export PNG achatado
- 4 ícones de feature

---

## Section 7 — Tools (`3164:31847`)

**Idêntica à seção da página urbana** — mesma cópia, mesmos 3 passos, mesmo diagrama orbital 502×550. Consome `layout/ToolsIntegration.vue`.

**H2:** (Bold 45px) Adicione as principais ferramentas ao **seu site** _("seu site" em `text-brand`)_

**Description:** Insira scripts de marketing, análise, segurança e atendimento diretamente pelo painel **SUB100 Meu Site**, com suporte a mais de 30 ferramentas compatíveis.

**Sub-label:** SIMPLES DE CONFIGURAR

**3-step flow:**
1. `01` Copie o código — Use o ID ou script da ferramenta.
2. `02` Adicione no painel — Cole no campo da integração.
3. `03` Ative no site — Salve e comece a acompanhar. · badge "Integração ativa"

**Assets:** reutiliza `tools-diagrama-integracoes.png` e os 6 `site-urbano-tools-*.svg`

---

## Section 8 — South America (`3164:31952`)

**H2:** (Bold 36px)
```
Amplie suas oportunidades no
mercado rural da América do Sul
```
_("América do Sul" em `text-brand`)_

**Description (centralizada):**
Cadastre e divulgue imóveis rurais no Brasil, Argentina, Paraguai, Uruguai e Bolívia, conectando suas ofertas a compradores e investidores nacionais e estrangeiros.

**5 cards de imagem** — alturas escalonadas, alinhados pela base, card central mais alto; cada um com um badge circular de bandeira sobreposto na base. Ordem da esquerda para a direita:

| # | País | Altura | Imagem |
|---|---|---|---|
| 1 | Bolívia | 240 | trator em milharal ao pôr do sol |
| 2 | Uruguai | 431 | gado em pastagem |
| 3 | Brasil | 581 | plantação de soja em linhas |
| 4 | Argentina | 431 | colheitadeira em trigal |
| 5 | Paraguai | 240 | estrada de terra entre milharal |

Largura dos cards: 220. Curva decorativa azul atravessando a base do conjunto.

**Assets:** 5 fotos + 5 bandeiras circulares + 1 curva decorativa SVG

---

## Section 9 — Testimonials (`3164:32221`)

**H2:** (Bold 36px)
```
O que nossos clientes
falam dos nossos
produtos e serviços
```
_("nossos clientes" em `text-brand`)_

**Testimonials (2):** _(textos conferidos — batem exatamente com `app/data/testimonials.json`)_
- `crm-urbano-marcio-carmona` — Marcio Carmona, Diretor, Carmona Imóveis
- `crm-rural-henrique-benedini` — Henrique Benedini, Diretor, Benedini Fazendas

**Assets:** nenhum novo — `layout/Testimonials.vue` já traz o painel e as logos

---

## Section 10 — Other Modules (`3164:29825`)

**H2:** (Bold 34px) Conheça os outros módulos de Sites & Hotsites _(sem destaque)_

**Description:** Explore nossas soluções de sites para diferentes segmentos do mercado imobiliário.

**Module 1:**
- Título: Site para Imobiliárias Urbanas
- Descrição: Destaque seus imóveis urbanos com um site profissional na web.
- CTA: Clique aqui →
- Route: `/modulos/site-para-imobiliarias-urbanas`

**Module 2:**
- Título: Site para Loteadoras _(em `text-brand`)_
- Badge: breve
- Descrição: Venda mais lotes com uma presença digital completa e moderna.
- CTA: Clique aqui → _(desabilitado)_

---

## Section 11 — FAQ (`3164:32428`)

**H2:** (SemiBold 52px) Perguntas Frequentes

**Description:** Tire suas dúvidas sobre o Site para Imobiliárias Rurais da SUBSEE on.

**6 FAQ items:**

1. **O que compõe o Site para Imobiliárias e Corretores Rurais do SUBSEE?**
   O Site para Imobiliárias e Corretores Rurais do SUBSEE é desenvolvido pela SUB100 Sistemas e integrado ao CRM SUBSEE, permitindo divulgar fazendas, sítios, chácaras e outras propriedades rurais com uma estrutura adequada às particularidades do mercado agroimobiliário. O site oferece navegação simples, anúncios detalhados, design moderno e boa experiência em dispositivos móveis. Além disso, sua estrutura é preparada com boas práticas de SEO e GEO, facilitando a compreensão dos conteúdos por mecanismos de busca e plataformas de inteligência artificial.

2. **Como posso conhecer o site para corretores rurais antes de contratar?**
   A apresentação do site é realizada por um consultor, que demonstra o modelo padrão e as possibilidades de personalização para corretores e imobiliárias rurais. Cada projeto pode receber configurações específicas de identidade visual, conteúdo, integrações e organização das informações, permitindo adaptar o site ao posicionamento, à região de atuação e ao perfil de propriedades comercializadas por cada cliente.

3. **É possível divulgar imóveis rurais em outros países?**
   Sim. O SUBSEE permite cadastrar e divulgar propriedades rurais em diferentes países, incluindo Brasil, Argentina, Paraguai, Uruguai, Bolívia e Estados Unidos. Essa estrutura atende corretores e imobiliárias que trabalham com imóveis rurais internacionais, permitindo organizar informações de propriedades destinadas a investidores e compradores de diferentes mercados.

4. **O site rural pode ser traduzido e adaptado para outros países?**
   Sim. Pelo painel Meu Site, é possível habilitar a tradução do conteúdo para outros idiomas, como inglês e espanhol. O sistema também permite trabalhar informações específicas de diferentes mercados rurais, como áreas em acres para propriedades nos Estados Unidos e dados como o Índice CONEAT no Uruguai. Isso facilita a apresentação dos imóveis para compradores e investidores internacionais, respeitando referências utilizadas em cada mercado.

5. **Como funciona o SEO e o GEO em um site especializado em imóveis rurais?**
   Os sites desenvolvidos pela SUB100 Sistemas são preparados com boas práticas de SEO e GEO, considerando estrutura técnica, desempenho, dispositivos móveis, organização das páginas e qualidade das informações. No mercado rural, esse trabalho ganha ainda mais relevância porque o anúncio pode reunir dados como área em diferentes unidades, tipo de solo, bioma, pluviometria, aptidão agrícola, logística, disponibilidade hídrica e informações georreferenciadas, além de documentos de apoio, laudos técnicos e dados relacionados ao CAR. Esse nível de detalhamento ajuda mecanismos de busca e sistemas de inteligência artificial a compreender melhor a propriedade e aumenta a qualidade das informações apresentadas ao comprador.

6. **Posso realizar a manutenção do site rural depois da contratação?**
   Sim. O site possui uma área administrativa que permite ao corretor ou à imobiliária rural atualizar conteúdos, banners, informações institucionais e outras funcionalidades disponíveis no painel. Já as alterações técnicas relacionadas à estrutura, código, segurança e funcionamento da plataforma são realizadas pela SUB100 Sistemas, ajudando a preservar a estabilidade, o desempenho, a padronização e a segurança do site.

---

## Ordem de render

`SiteRuralHero → SiteRuralTechnology → SiteRuralListings → SiteRuralPropertyDetails → SiteRuralInternational → SiteRuralCustomization → SiteRuralTools → SiteRuralSouthAmerica → SiteRuralTestimonials → SiteRuralOtherModules → SiteRuralFaq`

Note que Testimonials vem **antes** de Other Modules — invertido em relação à página urbana.
