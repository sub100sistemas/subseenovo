<script setup lang="ts">
const faqs = [
  {
    question: 'O que é o CRM para Temporada do SUBSEE?',
    answer:
      'O CRM para Temporada da SUBSEE foi desenvolvido para imobiliárias e profissionais que administram imóveis de locação por temporada. O módulo centraliza reservas, disponibilidade, bloqueios, contratos e preços por período, permitindo definir valores diferentes para temporadas, feriados e datas especiais. O sistema também oferece calendário integrado dos imóveis, emissão de contratos de locação por temporada e integração de reservas e bloqueios com o site da imobiliária e portais especializados, reduzindo conflitos de disponibilidade e facilitando a gestão da operação.'
  },
  {
    question: 'Posso testar o CRM para Temporada antes de contratar?',
    answer:
      'Sim. O CRM para Temporada do SUBSEE pode ser testado gratuitamente por 30 dias, permitindo conhecer as funcionalidades do módulo e avaliar, na prática, como o sistema pode organizar reservas, imóveis, calendários e atendimentos antes da contratação, sem compromisso.'
  },
  {
    question: 'O SUBSEE também atende imóveis urbanos e rurais?',
    answer:
      'Sim. O SUBSEE possui módulos específicos para imóveis urbanos, propriedades rurais e locação por temporada, respeitando as características de cada tipo de negócio. Dessa forma, uma imobiliária que atua em mais de um segmento pode centralizar sua operação em uma única plataforma, mantendo processos, cadastros e indicadores adequados para cada mercado.'
  },
  {
    question: 'É possível publicar imóveis de temporada no Airbnb, Booking e outros portais?',
    answer:
      'Atualmente, o SUBSEE não possui integração direta com Airbnb e Booking, mas essa funcionalidade está prevista para 2027. O sistema já permite integração com outros portais que anunciam imóveis para temporada, como SUB100, ZAP e Chaves na Mão. Caso a imobiliária utilize outro portal que ainda não esteja disponível, poderá solicitar a integração ao time de suporte, conforme a disponibilidade técnica da plataforma.'
  },
  {
    question: 'Como funciona o calendário de reservas para imóveis de temporada?',
    answer:
      'O calendário de reservas do SUBSEE permite visualizar a disponibilidade e a ocupação de cada imóvel por período, facilitando o controle de reservas e evitando conflitos de datas. Também é possível configurar valores diferentes para períodos especiais, como Réveillon, Carnaval, Páscoa, feriados e alta temporada, ajudando a imobiliária a organizar preços e disponibilidade ao longo do ano.'
  },
  {
    question: 'O sistema ajuda a controlar contratos, comissões e repasses aos proprietários?',
    answer:
      'Sim. O SUBSEE permite acompanhar toda a jornada da locação por temporada, desde o atendimento e a reserva no CRM até a administração financeira da operação. O sistema pode controlar contratos, comissões, repasses aos proprietários, manutenções e serviços de limpeza, ajudando a imobiliária a centralizar as informações comerciais, administrativas e financeiras relacionadas a cada locação.'
  }
]
</script>

<template>
  <CrmFaq section-id="crm-temporada-faq" :faqs="faqs">
    <template #description>
      Tire suas dúvidas sobre o CRM para Temporada da SUBSEE on.
    </template>
  </CrmFaq>
</template>
