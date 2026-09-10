<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

interface Props {
  sectionId?: string
  sectionClass?: string
  containerClass?: string
  panelClass?: string
  headerClass?: string
  titleClass?: string
  descriptionClass?: string
  accordionClass?: string
  itemClass?: string
  summaryClass?: string
  questionClass?: string
  iconWrapperClass?: string
  iconClass?: string
  answerWrapperClass?: string
  answerClass?: string
  plusIconSrc?: string
  minusIconSrc?: string
  faqs?: FaqItem[]
}

const props = withDefaults(defineProps<Props>(), {
  sectionId: 'crm-duvidas-frequentes',
  sectionClass: undefined,
  containerClass: undefined,
  panelClass:
    'rounded-[28px] bg-[#F5F5F5] px-6 py-10 tablet-lg:rounded-[40px] tablet-lg:px-16 tablet-lg:py-16 desktop-full:rounded-[50px] desktop-full:px-[198px] desktop-full:py-[120px]',
  headerClass: undefined,
  titleClass: undefined,
  descriptionClass: undefined,
  accordionClass: 'faq-accordion mt-10 desktop-full:mt-[25px]',
  itemClass: undefined,
  summaryClass: undefined,
  questionClass: undefined,
  iconWrapperClass: undefined,
  iconClass: undefined,
  answerWrapperClass: undefined,
  answerClass: undefined,
  plusIconSrc: '/icons/faq-plus-circle.svg',
  minusIconSrc: '/icons/faq-minus-circle.svg',
  faqs: () => [
  {
    question: 'Como funciona o CRM Imobiliário SUBSEE?',
    answer:
      'O CRM Imobiliário SUBSEE centraliza clientes, leads, atendimentos, agendamentos, propostas e negociações em um único sistema. A imobiliária pode acompanhar toda a jornada comercial, desde a entrada do lead e o primeiro atendimento até a negociação e o fechamento do contrato, proporcionando mais organização, controle e produtividade para corretores e gestores.'
  },
  {
    question: 'Posso testar o CRM Imobiliário SUBSEE antes de contratar?',
    answer:
      'Sim. O CRM Imobiliário SUBSEE pode ser testado gratuitamente por 30 dias, permitindo que sua imobiliária conheça a plataforma, utilize suas funcionalidades e avalie como o sistema se adapta à rotina da equipe antes da contratação, sem compromisso.'
  },
  {
    question: 'O CRM SUBSEE atende imóveis urbanos, rurais e de temporada?',
    answer:
      'Sim. O SUBSEE possui soluções para imóveis urbanos, imóveis rurais e locações por temporada, considerando as características de cada tipo de negócio imobiliário. Isso permite organizar cadastros, atendimentos e negociações de acordo com a operação da imobiliária, sem tratar diferentes segmentos da mesma maneira.'
  },
  {
    question: 'Como integrar o CRM SUBSEE ao WhatsApp e às redes sociais?',
    answer:
      'O CRM SUBSEE pode ser integrado ao WhatsApp por meio das soluções oficiais da Meta ou de parceiros de integração, facilitando a comunicação com clientes e leads. O sistema também permite receber leads gerados por campanhas digitais e compartilhar anúncios de imóveis nas redes sociais, centralizando informações importantes para o atendimento e reduzindo processos manuais.'
  },
  {
    question: 'Como funciona a publicação de imóveis nos portais imobiliários?',
    answer:
      'O CRM SUBSEE permite integrar o cadastro de imóveis aos portais imobiliários parceiros, automatizando a publicação e a atualização dos anúncios. Assim, alterações realizadas no CRM podem ser distribuídas para os canais integrados, reduzindo cadastros repetidos, inconsistências de informações e retrabalho da equipe.'
  },
  {
    question: 'O CRM SUBSEE ajuda a acompanhar metas e o desempenho da equipe?',
    answer:
      'Sim. O CRM SUBSEE permite definir e acompanhar metas por tipo de negócio, comparando em tempo real o planejado com o realizado. O sistema também utiliza indicadores visuais e um score de desempenho, ajudando gestores a identificar a evolução das metas, acompanhar resultados da equipe e agir mais rapidamente quando houver desvios.'
  }
]
})
</script>

<template>
  <Faq
    :section-id="props.sectionId"
    :section-class="props.sectionClass"
    :container-class="props.containerClass"
    :panel-class="props.panelClass"
    :header-class="props.headerClass"
    :title-class="props.titleClass"
    :description-class="props.descriptionClass"
    :accordion-class="props.accordionClass"
    :item-class="props.itemClass"
    :summary-class="props.summaryClass"
    :question-class="props.questionClass"
    :icon-wrapper-class="props.iconWrapperClass"
    :icon-class="props.iconClass"
    :answer-wrapper-class="props.answerWrapperClass"
    :answer-class="props.answerClass"
    :plus-icon-src="props.plusIconSrc"
    :minus-icon-src="props.minusIconSrc"
    :faqs="props.faqs"
  >
    <template #title>
      <slot name="title">Perguntas Frequentes</slot>
    </template>

    <template #description>
      <slot name="description">Tire suas dúvidas sobre o CRM Imobiliário da SUBSEE on.</slot>
    </template>
  </Faq>
</template>
