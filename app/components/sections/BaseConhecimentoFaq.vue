<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'O que é a Base de Conhecimento do SUBSEE?',
    answer:
      'É a central de ajuda do SUBSEE, onde o usuário encontra vídeos, tutoriais e documentações organizados por tema. Além disso, cada tela do sistema possui um ícone de play com treinamentos relacionados àquela funcionalidade, facilitando o aprendizado quando o recurso está sendo utilizado.'
  },
  {
    question: 'A Base de Conhecimento cobre todos os módulos do sistema?',
    answer:
      'Sim. A Base de Conhecimento reúne conteúdos relacionados aos principais módulos e segmentos do SUBSEE, como CRM, Lançamentos, Venda, Locação, Rural e Temporada, além de outros recursos disponíveis no sistema.'
  },
  {
    question: 'Posso acessar os tutoriais pelo celular ou somente pelo computador?',
    answer:
      'Sim. Os vídeos, tutoriais e documentações podem ser acessados por diferentes dispositivos, como computador, tablet ou celular, permitindo que o usuário consulte os conteúdos sempre que precisar.'
  },
  {
    question: 'Existem outras formas de aprender ou aprimorar meus conhecimentos sobre o SUBSEE?',
    answer:
      'Sim. Além da Base de Conhecimento, o usuário pode consultar o Histórico de Versões, participar das lives e eventos online, contar com a Mel, nossa assistente de IA disponível 24 horas para auxiliar com dúvidas e orientações, além do suporte humanizado da nossa equipe.'
  },
  {
    question: 'Quando acontecem as lives sobre as novas funcionalidades do SUBSEE?',
    answer:
      'As lives acontecem, em média, a cada 45 dias, normalmente acompanhando o fechamento das principais atualizações do sistema. Nelas apresentamos novas funcionalidades e melhorias, e a gravação fica disponível posteriormente para quem não puder acompanhar ao vivo.'
  },
  {
    question: 'Os treinamentos são atualizados sempre que o sistema muda?',
    answer:
      'Sim. Além das lives que apresentam as principais novidades de cada versão, novas funcionalidades recebem treinamentos específicos e os conteúdos existentes são revisados quando alterações importantes exigem uma nova explicação, mantendo os usuários atualizados sobre a evolução do SUBSEE.'
  }
]
</script>

<template>
  <CrmFaq section-id="base-conhecimento-duvidas-frequentes" :faqs="faqs">
    <template #title>Perguntas Frequentes</template>
    <template #description>Tire suas dúvidas sobre a Base de Conhecimento do SUBSEE on.</template>
  </CrmFaq>
</template>
