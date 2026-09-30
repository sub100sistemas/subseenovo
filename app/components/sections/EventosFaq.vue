<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'Como participar das lives e eventos online?',
    answer:
      'Basta se inscrever pelo site ou pelo link divulgado nas redes sociais do SUBSEE. As lives são realizadas ao vivo pelo Zoom e você acompanha tudo diretamente da sua tela.'
  },
  {
    question: 'Os eventos ficam gravados para assistir depois?',
    answer:
      'Sim! Todos os eventos, lives e treinamentos ficam disponíveis como replay na nossa página de conteúdos. Você pode assistir quantas vezes quiser, no horário que preferir.'
  },
  {
    question: 'Como funciona a base de conhecimento do SUBSEE?',
    answer:
      'A base de conhecimento reúne vídeos tutoriais, passo a passo e documentações sobre cada módulo do sistema. É organizada por tema para facilitar a consulta e o aprendizado da sua equipe.'
  },
  {
    question: 'Preciso pagar para acessar os treinamentos?',
    answer:
      'Não. As lives, treinamentos e replays são gratuitos para todos os clientes SUBSEE. Alguns conteúdos especiais também ficam abertos ao público para quem deseja conhecer o sistema.'
  },
  {
    question: 'Com que frequência acontecem os eventos?',
    answer:
      'Realizamos eventos mensais sobre novidades do sistema, dicas de vendas e treinamentos práticos. A cada nova versão do CRM também fazemos uma live especial de lançamento.'
  },
  {
    question: 'Posso sugerir temas para os próximos eventos?',
    answer:
      'Realizamos eventos mensais sobre novidades do sistema, dicas de vendas e treinamentos práticos. A cada nova versão do CRM também fazemos uma live especial de lançamento.'
  }
]
</script>

<template>
  <Faq
    section-id="eventos-duvidas-frequentes"
    panel-class="rounded-[28px] bg-[#F5F5F5] px-6 py-10 tablet-lg:rounded-[40px] tablet-lg:px-16 tablet-lg:py-16 desktop-full:rounded-[50px] desktop-full:px-[198px] desktop-full:py-[120px]"
    header-class="mx-auto max-w-[800px] text-center"
    title-class="font-semibold desktop-full:text-[52px]"
    description-class="mt-4 text-lg text-black tablet-lg:text-[20px] desktop-full:mt-[25px]"
    plus-icon-src="/icons/faq-plus-circle.svg"
    minus-icon-src="/icons/faq-minus-circle.svg"
    :faqs="faqs"
  >
    <template #title>Perguntas Frequentes</template>
    <template #description>Tire suas dúvidas sobre lives, treinamentos e replays do SUBSEE on.</template>
  </Faq>
</template>
