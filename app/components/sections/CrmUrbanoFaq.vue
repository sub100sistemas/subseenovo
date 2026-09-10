<script setup lang="ts">
const faqs = [
  {
    question: 'O que é o CRM Imobiliário Urbano do SUBSEE?',
    answer:
      'O CRM Imobiliário Urbano do SUBSEE foi desenvolvido para organizar a rotina comercial de imobiliárias que trabalham com venda, locação e lançamentos. O sistema centraliza imóveis, clientes, leads, atendimentos, funil de vendas, propostas, negociações e publicação em portais, permitindo acompanhar toda a jornada comercial, do primeiro contato até o fechamento do negócio.'
  },
  {
    question: 'Como funciona a distribuição de leads para os corretores?',
    answer:
      'O SUBSEE distribui leads automaticamente por meio de uma roleta de atendimento configurável, que pode considerar corretores, equipes, tipo de negócio, horários, plantões e períodos específicos de atendimento, como noites e finais de semana. Essa flexibilidade permite adaptar a distribuição à operação de cada imobiliária, reduzir o tempo de resposta e diminuir o risco de perda de oportunidades.'
  },
  {
    question: 'O SUBSEE publica imóveis automaticamente nos portais imobiliários?',
    answer:
      'Sim. O imóvel é cadastrado no CRM SUBSEE e pode ser distribuído automaticamente para os portais imobiliários integrados à plataforma. Dessa forma, a imobiliária mantém seus anúncios atualizados a partir de um único cadastro, reduzindo trabalho manual, duplicidade de informações e retrabalho da equipe.'
  },
  {
    question: 'É possível acompanhar metas, conversão e desempenho da equipe?',
    answer:
      'Sim. O CRM SUBSEE permite acompanhar metas e indicadores comerciais por tipo de negócio, incluindo conversão de leads, tempo de atendimento e resultados alcançados pela equipe. A plataforma também oferece informações de retroalimentação para o marketing, ajudando gestores a entender não apenas quantos leads foram gerados, mas a qualidade desses leads e o resultado das campanhas.'
  },
  {
    question: 'O CRM SUBSEE atende venda, locação e outros tipos de negócio imobiliário?',
    answer:
      'Sim. O SUBSEE permite acompanhar separadamente operações de Venda, Locação, Lançamentos, Imóveis Rurais e Temporada. Cada tipo de negócio possui sua própria jornada comercial e seus indicadores, permitindo que a imobiliária analise a performance de cada operação sem misturar processos e resultados diferentes.'
  },
  {
    question: 'Posso testar o CRM Imobiliário Urbano antes de contratar?',
    answer:
      'Sim. Durante o período de teste do CRM Imobiliário SUBSEE, sua equipe pode conhecer as funcionalidades da plataforma e também utilizar a base de conhecimento, participar de lives e treinamentos e esclarecer dúvidas com a Mel, assistente de suporte com inteligência artificial. A equipe também pode abrir chamados de suporte e contar com o acompanhamento de um gestor de conta durante o onboarding, facilitando a adoção e a evolução no uso do sistema.'
  }
]
</script>

<template>
  <CrmFaq
    section-id="crm-urbano-duvidas-frequentes"
    panel-class="rounded-[28px] bg-[#F5F5F5] px-6 py-10 tablet-lg:rounded-[40px] tablet-lg:px-16 tablet-lg:py-16 desktop-full:rounded-[50px] desktop-full:px-[195px] desktop-full:py-[120px]"
    accordion-class="faq-accordion mt-10 desktop-full:mt-[29px]"
    :faqs="faqs"
  />
</template>
