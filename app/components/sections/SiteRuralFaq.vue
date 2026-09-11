<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'O que compõe o Site para Imobiliárias e Corretores Rurais do SUBSEE?',
    answer:
      'O Site para Imobiliárias e Corretores Rurais do SUBSEE é desenvolvido pela SUB100 Sistemas e integrado ao CRM SUBSEE, permitindo divulgar fazendas, sítios, chácaras e outras propriedades rurais com uma estrutura adequada às particularidades do mercado agroimobiliário. O site oferece navegação simples, anúncios detalhados, design moderno e boa experiência em dispositivos móveis. Além disso, sua estrutura é preparada com boas práticas de SEO e GEO, facilitando a compreensão dos conteúdos por mecanismos de busca e plataformas de inteligência artificial.'
  },
  {
    question: 'Como posso conhecer o site para corretores rurais antes de contratar?',
    answer:
      'A apresentação do site é realizada por um consultor, que demonstra o modelo padrão e as possibilidades de personalização para corretores e imobiliárias rurais. Cada projeto pode receber configurações específicas de identidade visual, conteúdo, integrações e organização das informações, permitindo adaptar o site ao posicionamento, à região de atuação e ao perfil de propriedades comercializadas por cada cliente.'
  },
  {
    question: 'É possível divulgar imóveis rurais em outros países?',
    answer:
      'Sim. O SUBSEE permite cadastrar e divulgar propriedades rurais em diferentes países, incluindo Brasil, Argentina, Paraguai, Uruguai, Bolívia e Estados Unidos. Essa estrutura atende corretores e imobiliárias que trabalham com imóveis rurais internacionais, permitindo organizar informações de propriedades destinadas a investidores e compradores de diferentes mercados.'
  },
  {
    question: 'O site rural pode ser traduzido e adaptado para outros países?',
    answer:
      'Sim. Pelo painel Meu Site, é possível habilitar a tradução do conteúdo para outros idiomas, como inglês e espanhol. O sistema também permite trabalhar informações específicas de diferentes mercados rurais, como áreas em acres para propriedades nos Estados Unidos e dados como o Índice CONEAT no Uruguai. Isso facilita a apresentação dos imóveis para compradores e investidores internacionais, respeitando referências utilizadas em cada mercado.'
  },
  {
    question: 'Como funciona o SEO e o GEO em um site especializado em imóveis rurais?',
    answer:
      'Os sites desenvolvidos pela SUB100 Sistemas são preparados com boas práticas de SEO e GEO, considerando estrutura técnica, desempenho, dispositivos móveis, organização das páginas e qualidade das informações. No mercado rural, esse trabalho ganha ainda mais relevância porque o anúncio pode reunir dados como área em diferentes unidades, tipo de solo, bioma, pluviometria, aptidão agrícola, logística, disponibilidade hídrica e informações georreferenciadas, além de documentos de apoio, laudos técnicos e dados relacionados ao CAR. Esse nível de detalhamento ajuda mecanismos de busca e sistemas de inteligência artificial a compreender melhor a propriedade e aumenta a qualidade das informações apresentadas ao comprador.'
  },
  {
    question: 'Posso realizar a manutenção do site rural depois da contratação?',
    answer:
      'Sim. O site possui uma área administrativa que permite ao corretor ou à imobiliária rural atualizar conteúdos, banners, informações institucionais e outras funcionalidades disponíveis no painel. Já as alterações técnicas relacionadas à estrutura, código, segurança e funcionamento da plataforma são realizadas pela SUB100 Sistemas, ajudando a preservar a estabilidade, o desempenho, a padronização e a segurança do site.'
  }
]
</script>

<template>
  <CrmFaq section-id="site-rural-faq" :faqs="faqs">
    <template #title>Perguntas Frequentes</template>
    <template #description>Tire suas dúvidas sobre o Site para Imobiliárias Rurais da SUBSEE on.</template>
  </CrmFaq>
</template>
