<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'O que a assinatura do SUBSEE oferece?',
    answer:
      'Com o SUBSEE, você gerencia imóveis, clientes, leads, propostas e atendimentos em um só lugar. Também pode integrar gratuitamente seus anúncios ao portal SUB100 e publicar nos principais portais imobiliários, conforme os planos e condições contratados diretamente com cada portal de sua preferência.'
  },
  {
    question: 'Posso conhecer o SUBSEE antes de contratar?',
    answer:
      'Sim. Você pode agendar uma demonstração gratuita para conhecer os principais recursos do SUBSEE e entender qual plano atende melhor às necessidades da sua imobiliária. Durante a apresentação, também é possível conhecer os modelos de sites disponíveis, tanto na versão padrão quanto em opções personalizadas.'
  },
  {
    question: 'Como funciona o cancelamento da assinatura?',
    answer:
      'O SUBSEE é comercializado na modalidade SaaS, com renovação da licença de uso a cada 30 dias. Caso não queira continuar utilizando o sistema, o cancelamento pode ser solicitado pelo painel, mantendo o acesso pelo período já contratado. Se houver um site ainda em pagamento, as parcelas restantes continuam devidas, pois a contratação do site é realizada separadamente em até 10 parcelas.'
  },
  {
    question: 'Existe limite de imóveis cadastrados?',
    answer:
      'Sim. A quantidade de imóveis cadastrados e de usuários disponíveis pode variar conforme o plano contratado. Você pode consultar as opções disponíveis e, quando necessário, aumentar ou reduzir seu plano diretamente pelo painel do CRM.'
  },
  {
    question: 'Existe desconto nos planos anuais?',
    answer:
      'Sim. Na contratação anual do SUBSEE, é concedido desconto de 12% sobre o valor total da assinatura. O mesmo desconto pode ser aplicado ao pagamento à vista do site, com opções de pagamento por cartão de crédito, boleto ou Pix.'
  },
  {
    question: 'Existe algo a mais que preciso pagar?',
    answer:
      'Depende dos serviços adicionais utilizados. Recursos de mensageria, como WhatsApp Oficial, integrações com provedores de WhatsApp não oficial e serviços de SMS, podem gerar cobranças realizadas diretamente pela Meta ou pelos respectivos fornecedores. Esses serviços complementares são contratados de terceiros e não fazem parte da mensalidade do SUBSEE.'
  }
]
</script>

<template>
  <Faq section-id="plano-e-preco-duvidas-frequentes" :faqs="faqs" plus-icon-src="/icons/faq-plus-circle.svg" minus-icon-src="/icons/faq-minus-circle.svg">
    <template #title>Perguntas Frequentes</template>
    <template #description>Encontre respostas sobre os pacotes, valores e funcionalidades do SUBSEE on.</template>
  </Faq>
</template>
