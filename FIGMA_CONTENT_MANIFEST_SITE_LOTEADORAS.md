# FIGMA Content Manifest — Site para Loteadoras

Figma file: `vX7qKnnXSOW8zv4kAuS2eN` | Section: `1411:21045` | Page node: `3164:32801` (1920×5204)

Rota: `/modulos/site-para-loteadoras` · Prefixo dos componentes: `SiteLoteadoras*`

---

## Section 1 — Hero (`3164:32802`)

**H1:** (Poppins ExtraBold 42px)
```
Site para
Loteadoras
```
_("Loteadoras" em `text-brand` `#5d5fef`)_

**Badge junto ao H1:** "breve" — pill `#ea4335`, texto branco, Poppins Medium 16px, `cornerRadius: 800` (totalmente arredondado)

**Description:**
Ideal para loteadoras que desejam apresentar lotes e lançamentos de forma completa, com galerias, mapas e informações detalhadas de cada empreendimento.

**Cards flutuantes (2):**
1. Meu Site (H3) / Crie sites completos para loteadoras e lançamentos — ícone globo
2. Sistema SGL (H3) / Sincroniza seus imóveis no site — ícone (grupo vetor, a identificar visualmente)

**Chips de módulo (2):** mesmos glifos já usados no Hero das outras páginas — `venda.svg` (16×19) e um ícone de "lançamentos" (14×16)

**Ícone decorativo de canto:** grupo vetorial 50×50 (fundo + glifo composto de 3 vetores)

**Assets:**
- Foto do hero — mulher sorridente, blazer, com tablet (`brunette-woman-hugging-laptop 1`, recorte 331×437)
- Curvas decorativas, cards flutuantes e ícone de módulo (vetores) — mesma composição estrutural do Hero das páginas urbana/rural (fundo + máscara + divisor horizontal)

---

## Section 2 — Technology (`3164:33077`)

**H2:** (Bold 36px)
```
Plataforma digital criada para acelerar vendas e
fortalecer a presença online da sua loteadora
```
_("sua loteadora" em `text-brand`)_

**Description:**
Gerencie lotes e loteamentos com ferramentas de captação, vendas e acompanhamento de resultados em um só lugar.

**CTA:** Testar grátis por 30 dias → `/testar-gratis`

_Nenhuma ação extra necessária: `sections/CrmTechnology.vue` já renderiza este CTA por padrão sempre que o slot `#cta` não é sobrescrito — é exatamente o que `SiteUrbanoTechnology.vue`/`SiteRuralTechnology.vue` fazem hoje (confirmado em `app/components/sections/CrmTechnology.vue:96-102`). `SiteLoteadorasTechnology.vue` deve seguir o mesmo padrão — apenas título/descrição/mockup, sem tocar no `#cta`._

**Assets:**
- Mockup de site (`1076×622` na composição, export achatado como PNG) — screenshot de um loteamento fictício ("CABO VERDE — CONDOMÍNIO NÁUTICO — Sua casa do lago") com nav, hero de imagem aérea, cards de unidades e badge "breve" (`96×18`) já embutido na própria imagem, sobre o canto superior esquerdo do mockup
- Curva decorativa (mesma família de asset das outras páginas)

---

## Section 3 — "Em breve" banner (`3164:32865`)

_Node Figma nomeado "Section / Hero / Rural Listings" — resíduo de outro template; o conteúdo real não tem relação com listagens rurais._

**H2:** (Bold 36px)
```
Em breve, uma nova experiência digital
```
_("Em breve" em `text-brand`, resto em `#313846`)_

**Description (centralizada):**
Estamos construindo uma plataforma inteligente com tecnologia de ponta para revolucionar a gestão de loteamentos. Automação de vendas, captação de leads qualificados, acompanhamento em tempo real e uma experiência digital que vai colocar sua loteadora à frente do mercado.

**Estilo do painel:** `rounded-[50px]`, gradiente linear `#e6faf1 (0%) → #ecf8f9 (35%) → #eff2fa (79%) → #c5dcf0 (100%)`. Sem imagem, sem CTA.

**Assets:** nenhum — seção é só texto sobre gradiente

---

## Section 4 — Other Modules (`3164:32874`)

**H2:** (Bold 34px) Conheça os outros módulos de Sites & Hotsites _(sem destaque)_

**Description:** Explore nossas soluções de sites para diferentes segmentos do mercado imobiliário.

**Module 1:**
- Título: Site para Imobiliárias Urbanas
- Descrição: Destaque seus imóveis urbanos com um site profissional na web.
- CTA: Clique aqui → _(ativo)_
- Route: `/modulos/site-para-imobiliarias-urbanas`

**Module 2:**
- Título: Site para Imobiliárias Rurais
- Descrição: Destaque fazendas, sítios e chácaras com um site profissional.
- CTA: Clique aqui → _(ativo)_
- Route: `/modulos/site-para-imobiliarias-rurais`

> Diferente das páginas irmãs: nenhum dos dois cards tem `disabled`/badge "breve" — ambos os destinos já existem e estão publicados.

**Assets:** reutiliza os ícones já existentes de menu (`menu-icone-site-urbanas.svg`, equivalente rural) — sem asset novo

---

## Section 5 — FAQ (`3164:34312`)

**H2:** (SemiBold 52px) Perguntas Frequentes

**Description:** Tire suas dúvidas sobre o Site para Loteadoras da SUBSEE on.

**6 FAQ items:**

1. **Minha loteadora não usa o CRM SUBSEE nem o SGL. Posso contratar o serviço de site para loteadoras?**
   Sim. É possível contratar um site institucional mesmo sem utilizar o CRM SUBSEE ou o SGL. No entanto, o grande diferencial dos sites desenvolvidos pela SUB100 Sistemas está justamente na integração com essas plataformas, permitindo que informações, empreendimentos e processos comerciais sejam conectados diretamente ao site.

2. **Minha loteadora possui imóveis para locação e revenda, além dos empreendimentos. Posso ter um site com a SUB100 Sistemas?**
   Sim. Nesse caso, além do desenvolvimento do site da loteadora, recomendamos a utilização do CRM SUBSEE para centralizar o cadastro e a gestão dos imóveis. Isso proporciona mais produtividade e permite publicar imóveis no Portal SUB100 e em outros portais imobiliários, conforme as integrações e o plano contratado.

3. **Quero vender lotes diretamente pelo site da loteadora. A SUB100 Sistemas consegue desenvolver essa solução?**
   Sim. Para esse modelo, recomendamos a integração do site com o sistema de loteamentos SGL. A solução permite criar uma jornada digital para que o consumidor consulte os lotes e avance pelo processo comercial diretamente pelo site, enquanto o SGL realiza a gestão das etapas de reserva, proposta e venda.

4. **Preciso pagar mensalidade pelo site da minha loteadora?**
   Não. O desenvolvimento do site é contratado como um serviço único e não possui mensalidade recorrente específica pelo site. Caso sejam necessárias futuras manutenções, alterações ou evoluções, esses serviços poderão ser contratados separadamente. Para utilizar todos os recursos de integração e automação disponíveis nos sites da SUB100 Sistemas, é necessária a contratação do CRM SUBSEE ou do SGL.

5. **Como é aprovado o layout do site que desejo contratar?**
   Como os sites podem ser integrados ao CRM SUBSEE ou ao SGL, a SUB100 Sistemas trabalha com determinados padrões de estrutura e layout para garantir uma comunicação adequada entre o site e os sistemas. Entretanto, a identidade visual, os conteúdos e a apresentação do projeto são submetidos ao cliente para aprovação, permitindo sugestões e ajustes antes da publicação.

6. **Quanto custa desenvolver um site para minha loteadora?**
   O valor depende do escopo do projeto, das funcionalidades desejadas, do nível de personalização e do sistema que será utilizado para alimentar e integrar o site. Por isso, não é possível definir um preço único. Nossa equipe comercial está à disposição para entender o projeto da loteadora, esclarecer dúvidas e apresentar uma proposta compatível com suas necessidades.

**Assets:** nenhum novo — `layout/Faq.vue` já traz os ícones de +/-

---

## Section 6 — Offer / Sistema SGL (`3164:32931`)

_Node Figma nomeado "banner-plano-urbano" — resíduo de outro template; o conteúdo real é sobre o sistema SGL._

**Eyebrow:** SISTEMA SGL — 11px Bold, `text-brand`, pill de fundo lavanda claro

**H2:** (Bold 24px, **inteiro** em `text-brand` — diferente do padrão ink+brand usado nas demais seções)
```
Simulador de vendas, mapa interativo,
financeiro completo e portal do cliente
```

**Description:**
O ERP para **loteadoras** e **incorporadas**, o SGL é um sistema de gestão fácil que se integra aos seus processos
_(negrito em "loteadoras" e "incorporadas")_

**CTA:** Acessar o Sistema SGL →

**Estilo do painel:** `rounded-[50px]`, 2 gradientes lineares sobrepostos — `#edf0fe→#f0f1fe` (22%→100%) por baixo de um gradiente diagonal `#eaeffe (a=0, 2%) → #bddbfd (100%)`. Losangos decorativos (contorno fino) no fundo, atrás do celular.

**Assets:**
- Mockup de celular com o app SGL — header verde "Sistema SGL", card de contato "Walcir Franzoni", grid de 6 ícones de menu (Extrato financeiro, Segunda via do boleto, Demonstrativo valores pagos, Empreendimentos, Atualização cadastral, Alteração de senha), status bar "10:25"
- Composição em camadas (frame do iPhone + screenshot + retângulos de recorte) — mesma técnica de composição usada no celular de `SiteRuralPropertyDetails.vue`; exportação PNG do Figma vem com fundo branco opaco (AD-014), exigirá composição offline com `sharp` a partir do SVG vetorial + bitmap original

---

## Excluído da extração

- **Header** (`3164:32961`) e **Footer** (`3164:32960`) — instâncias no Figma mostram uma variante antiga ("SUB100 IMOBILIÁRIAS", menu "Módulos/Eventos/Preços/Portal de Imóveis/Blog/Sobre a SUB100") que não corresponde ao header/footer reais do site. A página usa o layout padrão (`TheHeader`/`TheFooter`), sem renderizar header/footer próprios — mesmo padrão de `site-para-imobiliarias-urbanas.vue` e `site-para-imobiliarias-rurais.vue`.
- **Testimonials** — esta página não tem seção de depoimentos no Figma.
- **Frames de tablet/mobile** — não existem no arquivo Figma para esta página; responsividade deriva dos breakpoints custom do projeto.

## Ordem de render

`SiteLoteadorasHero → SiteLoteadorasTechnology → SiteLoteadorasComingSoon → SiteLoteadorasOtherModules → SiteLoteadorasFaq → SiteLoteadorasSglOffer`
