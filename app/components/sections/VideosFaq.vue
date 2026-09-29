<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'Que tipo de vídeos encontro na SUBSEE on?',
    answer:
      'Você encontra tutoriais, demonstrações de recursos e conteúdos que ajudam a entender como o sistema pode potencializar as vendas da sua imobiliária.'
  },
  {
    question: 'Os vídeos são organizados por categoria?',
    answer:
      'Sim. Os vídeos são organizados por categoria e duração, facilitando encontrar o conteúdo certo para cada dúvida ou funcionalidade do sistema.'
  },
  {
    question: 'Preciso ser cliente para assistir aos vídeos?',
    answer:
      'Não. Os vídeos estão disponíveis para qualquer pessoa que queira conhecer o SUBSEE, seja cliente ou esteja avaliando qual sistema contratar.'
  },
  {
    question: 'Posso assistir aos vídeos quantas vezes quiser?',
    answer:
      'Sim, os vídeos ficam disponíveis a qualquer momento, e você pode assistir quantas vezes precisar, no seu próprio ritmo.'
  },
  {
    question: 'Existem vídeos sobre planos e contratação?',
    answer: 'Sim, também há vídeos explicando pacotes, valores e como escolher o plano ideal para sua imobiliária.'
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
    answer-wrapper-class="pb-[24px]"
    answer-class="max-w-[870px] text-base leading-[26px] text-ink"
    plus-icon-src="/icons/faq-plus-circle.svg"
    minus-icon-src="/icons/faq-minus-circle.svg"
    :faqs="faqs"
  >
    <template #title>Perguntas Frequentes</template>
    <template #description>
      Encontre respostas sobre os vídeos, tutoriais e conteúdos disponíveis no SUBSEE on.
    </template>
  </Faq>
</template>
