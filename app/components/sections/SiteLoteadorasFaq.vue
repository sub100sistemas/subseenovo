<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'Minha loteadora não usa o CRM SUBSEE nem o SGL. Posso contratar o serviço de site para loteadoras?',
    answer:
      'Sim. É possível contratar um site institucional mesmo sem utilizar o CRM SUBSEE ou o SGL. No entanto, o grande diferencial dos sites desenvolvidos pela SUB100 Sistemas está justamente na integração com essas plataformas, permitindo que informações, empreendimentos e processos comerciais sejam conectados diretamente ao site.'
  },
  {
    question: 'Minha loteadora possui imóveis para locação e revenda, além dos empreendimentos. Posso ter um site com a SUB100 Sistemas?',
    answer:
      'Sim. Nesse caso, além do desenvolvimento do site da loteadora, recomendamos a utilização do CRM SUBSEE para centralizar o cadastro e a gestão dos imóveis. Isso proporciona mais produtividade e permite publicar imóveis no Portal SUB100 e em outros portais imobiliários, conforme as integrações e o plano contratado.'
  },
  {
    question: 'Quero vender lotes diretamente pelo site da loteadora. A SUB100 Sistemas consegue desenvolver essa solução?',
    answer:
      'Sim. Para esse modelo, recomendamos a integração do site com o sistema de loteamentos SGL. A solução permite criar uma jornada digital para que o consumidor consulte os lotes e avance pelo processo comercial diretamente pelo site, enquanto o SGL realiza a gestão das etapas de reserva, proposta e venda.'
  },
  {
    question: 'Preciso pagar mensalidade pelo site da minha loteadora?',
    answer:
      'Não. O desenvolvimento do site é contratado como um serviço único e não possui mensalidade recorrente específica pelo site. Caso sejam necessárias futuras manutenções, alterações ou evoluções, esses serviços poderão ser contratados separadamente. Para utilizar todos os recursos de integração e automação disponíveis nos sites da SUB100 Sistemas, é necessária a contratação do CRM SUBSEE ou do SGL.'
  },
  {
    question: 'Como é aprovado o layout do site que desejo contratar?',
    answer:
      'Como os sites podem ser integrados ao CRM SUBSEE ou ao SGL, a SUB100 Sistemas trabalha com determinados padrões de estrutura e layout para garantir uma comunicação adequada entre o site e os sistemas. Entretanto, a identidade visual, os conteúdos e a apresentação do projeto são submetidos ao cliente para aprovação, permitindo sugestões e ajustes antes da publicação.'
  },
  {
    question: 'Quanto custa desenvolver um site para minha loteadora?',
    answer:
      'O valor depende do escopo do projeto, das funcionalidades desejadas, do nível de personalização e do sistema que será utilizado para alimentar e integrar o site. Por isso, não é possível definir um preço único. Nossa equipe comercial está à disposição para entender o projeto da loteadora, esclarecer dúvidas e apresentar uma proposta compatível com suas necessidades.'
  }
]
</script>

<template>
  <CrmFaq section-id="site-loteadoras-faq" :faqs="faqs">
    <template #title>Perguntas Frequentes</template>
    <template #description>Tire suas dúvidas sobre o Site para Loteadoras da SUBSEE on.</template>
  </CrmFaq>
</template>
