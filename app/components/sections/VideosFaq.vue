<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
  answerClass?: string
}

const faqs: FaqItem[] = [
  {
    question: 'Que tipos de vídeos encontro na SUBSEE?',
    answer: 'Você encontra vídeos sobre novidades e atualizações do sistema, tutoriais de funcionalidades, demonstrações de recursos e gravações de lives. São conteúdos que ajudam sua equipe a aproveitar o CRM SUBSEE e potencializar as vendas da sua imobiliária.'
  },
  {
    question: 'Como os vídeos são organizados?',
    answer: 'Os vídeos são organizados por categorias e etapas de aprendizado, facilitando a busca pelo conteúdo ideal para cada dúvida ou funcionalidade. Eles também ficam disponíveis nas telas correspondentes do sistema, para que você possa consultar as orientações durante o uso.'
  },
  {
    question: 'Preciso ser cliente para assistir aos vídeos?',
    answer: 'Os vídeos são disponibilizados para clientes e usuários em período de teste gratuito. Se você ainda não utiliza o sistema, pode solicitar à nossa equipe comercial um vídeo de demonstração com as principais funcionalidades do CRM SUBSEE.',
  },
  {
    question: 'Posso assistir aos vídeos quantas vezes quiser?',
    answer: 'Sim. Você pode acessar os vídeos a qualquer momento e assistir quantas vezes precisar, no seu próprio ritmo. A SUB100 Sistemas também atualiza a base de conhecimento sempre que novas funcionalidades são lançadas ou quando o sistema recebe melhorias significativas.'
  },
  {
    question: 'Há vídeos sobre serviços e pacotes adicionais?',
    answer: 'Sim. Há vídeos que explicam os serviços e pacotes adicionais disponíveis para contratação, como anúncios destacados no portal SUB100, créditos para inteligência artificial e outras opções para ampliar os recursos utilizados pela sua imobiliária.'
  }
]
</script>

<template>
  <Faq
    section-id="videos-duvidas-frequentes"
    section-class="relative overflow-hidden pt-10 pb-20"
    panel-class="py-[14px]"
    header-class="mx-auto max-w-[1400px] text-center"
    title-class="font-semibold leading-normal desktop-full:text-[52px]"
    description-class="mt-4 text-lg text-black tablet-lg:text-[20px] desktop-full:mt-[25px]"
    accordion-class="faq-accordion mx-auto mt-10 max-w-[970px] desktop-full:-mt-[3px]"
    summary-class="flex cursor-pointer list-none items-center gap-[13px] pt-[28px] pb-[24px] [details[open]_&]:pb-[13px]!"
    answer-wrapper-class="pb-[23px]"
    answer-class="max-w-[870px] text-base leading-[26px] text-ink"
    plus-icon-src="/icons/faq-plus-circle.svg"
    minus-icon-src="/icons/faq-minus-circle.svg"
    :faqs="faqs"
  >
    <template #title>Perguntas Frequentes</template>
    <template #description>
      Encontre respostas sobre os vídeos, tutoriais e conteúdos disponíveis no SUBSEE.
    </template>
  </Faq>
</template>
