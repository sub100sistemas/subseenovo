<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'O que compõe o Site para Imobiliárias Urbanas do SUBSEE?',
    answer:
      'O Site para Imobiliárias Urbanas do SUBSEE é desenvolvido pela SUB100 Sistemas e integrado ao CRM SUBSEE, permitindo publicar e organizar imóveis de lançamento, venda, locação, rural e temporada em uma única estrutura. O site é projetado para oferecer navegação simples, anúncios detalhados, design moderno e uma ótima experiência em dispositivos móveis. Além disso, sua estrutura é preparada com boas práticas de SEO e GEO, ajudando a imobiliária a tornar seus imóveis, serviços e conteúdos mais acessíveis para mecanismos de busca e plataformas de inteligência artificial.'
  },
  {
    question: 'Como posso conhecer o site antes de contratar?',
    answer:
      'A apresentação do site é realizada por um consultor, que demonstra o modelo padrão ou as possibilidades de personalização para a imobiliária. Mesmo quando utiliza uma estrutura já desenvolvida pela SUB100, cada projeto recebe configurações específicas de identidade visual, conteúdo, integrações e organização das informações, permitindo adequar o site ao posicionamento e à operação de cada cliente.'
  },
  {
    question: 'É possível criar banners para lançamentos e campanhas?',
    answer:
      'Sim. Pelo painel de administração, a imobiliária pode criar e gerenciar banners para lançamentos, campanhas, imóveis em destaque e condições comerciais especiais. Isso permite atualizar a comunicação do site de forma rápida e destacar oportunidades de venda, locação ou novos empreendimentos sem depender de alterações técnicas na página.'
  },
  {
    question: 'O site pode ser traduzido para outros idiomas?',
    answer:
      'Sim. Pelo painel Meu Site, a imobiliária pode habilitar recursos de tradução do conteúdo para outros idiomas, como inglês e espanhol, facilitando o acesso de clientes estrangeiros aos anúncios e às informações do site. Essa funcionalidade amplia o alcance do conteúdo e pode ser especialmente útil para imobiliárias que atendem compradores, investidores ou locatários internacionais.'
  },
  {
    question: 'Como funciona a configuração de SEO e GEO do site?',
    answer:
      'Os sites desenvolvidos pela SUB100 Sistemas são entregues com uma estrutura técnica preparada para boas práticas de SEO e GEO, considerando organização do conteúdo, desempenho, navegação, dispositivos móveis e elementos que facilitam a compreensão das páginas por mecanismos de busca e sistemas de inteligência artificial. A estrutura também permite trabalhar títulos, descrições, conteúdos e informações dos imóveis de forma mais organizada, contribuindo para melhorar a presença digital da imobiliária.'
  },
  {
    question: 'Posso realizar a manutenção do site depois da contratação?',
    answer:
      'Sim. O site possui uma área administrativa que permite à imobiliária atualizar conteúdos, banners, informações institucionais e outras funcionalidades disponíveis no painel. Já as alterações técnicas de estrutura, código, segurança e funcionamento da plataforma são realizadas pela SUB100 Sistemas, ajudando a preservar a padronização, a estabilidade, o desempenho e a segurança do site.'
  }
]
</script>

<template>
  <CrmFaq section-id="site-urbano-faq" :faqs="faqs">
    <template #title>Perguntas Frequentes</template>
    <template #description>Tire suas dúvidas sobre o Site para Imobiliárias Urbanas da SUBSEE on.</template>
  </CrmFaq>
</template>
