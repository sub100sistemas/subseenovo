<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'O que é o Hub de Integrações do SUBSEE?',
    answer:
      'O Hub de Integrações do SUBSEE é a camada que conecta o CRM a outros sistemas, plataformas e serviços por meio de APIs, webhooks e outros padrões de integração. Ele permite centralizar e trocar informações como leads, imóveis, atendimentos, agendas e comunicações, reduzindo processos manuais e facilitando a conexão do SUBSEE com o ecossistema tecnológico da imobiliária.'
  },
  {
    question: 'Posso testar as APIs e integrações antes de contratar?',
    answer:
      'Durante o período gratuito de 30 dias, os recursos de API e Hub de Integrações podem ser visualizados, mas não ficam habilitados para uso. Como algumas integrações exigem configuração técnica, credenciais, validações e suporte especializado, sua ativação ocorre após a contratação. Antes disso, o cliente pode solicitar uma demonstração com um consultor para conhecer as possibilidades de integração e entender como elas podem ser aplicadas à sua operação.'
  },
  {
    question: 'Quais integrações estão disponíveis no CRM Imobiliário SUBSEE?',
    answer:
      'O SUBSEE oferece diferentes integrações para comunicação, marketing, produtividade e distribuição de imóveis. Entre elas estão envio de mensagens por Push e SMS, WhatsApp Oficial da Meta ou por parceiros, integração com portais imobiliários, Google Calendar, Gmail, soluções de atendimento por inteligência artificial como a Lais.ai, além da captação de leads provenientes de campanhas no Facebook Ads e Instagram Ads da Meta. A disponibilidade pode variar conforme o serviço e o tipo de integração utilizado.'
  },
  {
    question: 'É possível integrar o SUBSEE ao WhatsApp Oficial da Meta?',
    answer:
      'Sim. O SUBSEE pode ser integrado ao WhatsApp Oficial da Meta, além de soluções de parceiros de mensageria. Essa integração permite aproximar as conversas do ambiente do CRM, relacionando comunicações a leads, clientes e atendimentos e reduzindo a necessidade de trabalhar com informações dispersas em diferentes sistemas.'
  },
  {
    question: 'Como funciona a integração do SUBSEE com portais imobiliários?',
    answer:
      'O SUBSEE pode distribuir e atualizar informações de imóveis nos portais imobiliários integrados, utilizando os padrões de comunicação suportados por cada portal, como feeds em XML, APIs ou outros formatos de integração. Dessa forma, a imobiliária mantém o cadastro principal no CRM e reduz a necessidade de atualizar manualmente os mesmos anúncios em diferentes plataformas.'
  },
  {
    question: 'O SUBSEE terá integração por MCP?',
    answer:
      'A integração por MCP — Model Context Protocol — está em desenvolvimento, com previsão para o final de 2026. A proposta é permitir que modelos de inteligência artificial e agentes compatíveis com o protocolo possam se conectar de forma estruturada aos recursos disponibilizados pelo SUBSEE, ampliando as possibilidades de uso com plataformas como ChatGPT, Claude e outras soluções baseadas em LLMs, conforme as permissões e recursos disponibilizados pela integração.'
  }
]
</script>

<template>
  <CrmFaq section-id="apis-duvidas-frequentes" :faqs="faqs">
    <template #title>Perguntas Frequentes</template>
    <template #description>Tire suas dúvidas sobre as APIs e o Hub integrador da SUBSEE.</template>
  </CrmFaq>
</template>
