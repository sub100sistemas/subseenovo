<script setup lang="ts">
const faqs = [
  {
    question: 'O que é o CRM Imobiliário Rural do SUBSEE?',
    answer:
      'O CRM Imobiliário Rural do SUBSEE foi desenvolvido para corretores e imobiliárias que trabalham com fazendas, sítios, chácaras e outras propriedades rurais. O sistema permite cadastrar informações específicas desse mercado, como tipo de solo, bioma, áreas produtivas, pluviometria, CAR, arquivos KML e dados georreferenciados, oferecendo uma estrutura de anúncio muito mais completa do que a utilizada em imóveis urbanos.'
  },
  {
    question: 'Posso testar o CRM Imobiliário Rural antes de contratar?',
    answer:
      'Sim. O CRM Imobiliário Rural do SUBSEE pode ser testado gratuitamente por 30 dias, permitindo conhecer as funcionalidades do módulo antes da contratação. Durante o período de teste, o corretor pode avaliar na prática uma plataforma desenvolvida com linguagem, cadastros e recursos mais próximos da rotina do mercado imobiliário rural.'
  },
  {
    question: 'O SUBSEE também atende imóveis urbanos e locações por temporada?',
    answer:
      'Sim. O SUBSEE possui módulos específicos para imóveis urbanos, imóveis rurais e locações por temporada, respeitando as particularidades de cada operação. Dessa forma, uma imobiliária que atua em diferentes segmentos pode trabalhar dentro da mesma plataforma, mantendo processos, cadastros e indicadores adequados para cada tipo de negócio.'
  },
  {
    question: 'Que informações posso registrar sobre uma propriedade rural?',
    answer:
      'O CRM Rural do SUBSEE permite cadastrar informações técnicas e comerciais detalhadas da propriedade, como área total e aproveitável, tipo de solo, bioma, pluviometria, disponibilidade hídrica, logística de acesso e estruturas de armazenamento. Também é possível disponibilizar links públicos com laudos, histórico de chuvas e informações do CAR, além de integrar arquivos KML com dados georreferenciados, interação de informações e controle de camadas. Esses recursos ajudam compradores e corretores a avaliar com mais precisão o potencial produtivo, a infraestrutura e as características da propriedade.'
  },
  {
    question: 'Como publicar imóveis rurais nos portais imobiliários?',
    answer:
      'O SUBSEE permite publicar e atualizar propriedades rurais automaticamente nos portais imobiliários integrados, evitando cadastros repetidos e retrabalho. Como o imóvel é cadastrado no CRM com informações específicas do mercado rural, o anúncio pode ser distribuído com uma descrição mais completa e qualificada. Em portais que valorizam atributos rurais, como o Portal SUB100, essas informações podem ganhar ainda mais destaque.'
  },
  {
    question: 'O CRM Rural ajuda a acompanhar metas e o desempenho da equipe?',
    answer:
      'Sim. O CRM SUBSEE permite acompanhar metas e indicadores específicos para operações com imóveis rurais, incluindo desempenho da equipe, evolução dos atendimentos e resultados comerciais. Assim, gestores e corretores conseguem visualizar o planejado e o realizado, identificar oportunidades e acompanhar a performance da operação rural de forma mais estruturada.'
  }
]
</script>

<template>
  <CrmFaq section-id="crm-rural-duvidas-frequentes" :faqs="faqs" />
</template>
