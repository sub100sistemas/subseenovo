<script setup lang="ts">
const cards = [
  {
    icon: '/icons/icone-crm-leads-chave.svg',
    title: 'Gestão de Leads e Oportunidades',
    items: [
      'Controle de empréstimo de chaves com rotas para visitas no Google Maps;',
      'Registro do feedback das visitas a imóveis direto no CRM pelo celular;',
      'Radar de oportunidades entre clientes e imóveis;',
      'Automação e distribuição de leads por roleta;'
    ]
  },
  {
    icon: '/icons/icone-crm-relacionamento.svg',
    title: 'Relacionamento e Agendamento',
    items: [
      'Cadastro de pessoas e imóveis internacionais;',
      'Agenda integrada ao Google Calendar;',
      'Integração nativa com o WhatsApp;',
      'Central de mensagens;'
    ]
  },
  {
    icon: '/icons/icone-crm-perfil-performance.svg',
    title: 'Perfil e Performance',
    items: [
      'Perfil profissional e currículo comercial dos corretores integrado ao site;',
      'Comitê de avaliação;',
      'Análise de desempenho dos imóveis;'
    ]
  },
  {
    icon: '/icons/icone-crm-integracoes.svg',
    title: 'Integrações e Inteligência',
    items: [
      'Plugin do WhatsApp integrado ao Kanban de atendimento;',
      'Esteira digital de vendas e locações;',
      'Múltiplas integrações com inteligência artificial;'
    ]
  }
]
</script>

<template>
  <section id="crm-imobiliario" class="section-py relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute rounded-full"
        style="left: 1000px; top: -360px; width: 620px; height: 620px; background: radial-gradient(circle, rgba(204,194,255,0.5) 0%, rgba(204,194,255,0) 70%)"
      />
      <div
        class="absolute rounded-full"
        style="left: 1500px; top: 400px; width: 520px; height: 520px; background: radial-gradient(circle, rgba(173,240,219,0.45) 0%, rgba(173,240,219,0) 70%)"
      />
      <img src="/icons/hero-crm-decoracao-pontos.svg" width="230" height="150" alt="" class="absolute" style="left: 10px; top: 10px" />
      <img src="/icons/hero-crm-decoracao-pontos-teal.svg" width="230" height="150" alt="" class="absolute" style="left: 1690px; top: 680px" />
      <img
        src="/icons/hero-website-onda-decorativa-branca.svg"
        alt=""
        class="absolute"
        style="left: -1px; top: 256px; width: 1920px; height: 173.455px; transform: rotate(180deg) scaleY(-1); max-width: none"
      />
      <img
        src="/icons/hero-website-onda-decorativa-azul.svg"
        alt=""
        class="absolute"
        style="left: -0.95px; top: 252px; width: 1919.95px; height: 190.853px; transform: rotate(180deg) scaleY(-1); max-width: none"
      />
    </div>

    <div class="container-page relative">
      <div class="mx-auto max-w-[1180px] text-center">
        <div class="inline-flex items-center gap-2 text-[12px] font-bold tracking-[1.44px] text-brand uppercase">
          <span class="size-2 shrink-0 rounded-full bg-teal-link shadow-[0_0_0_4px_rgba(28,217,164,0.36)]" aria-hidden="true" />
          Especialidade · CRM IMOBILIÁRIO
        </div>

        <h2 class="mt-4">
          Funcionalidades inovadoras para o <span class="text-brand">mercado imobiliário</span>
        </h2>

        <p class="mx-auto mt-4 max-w-[1120px] text-[20px] leading-[1.5] text-[#363b4a]">
          Um <strong class="font-semibold">CRM</strong> com uma trajetória marcada pela inovação e
          pela evolução constante, agora integrado às novas possibilidades da
          <strong class="font-semibold">inteligência artificial</strong> para tornar sua operação
          mais simples, <strong class="font-semibold">ágil e eficiente</strong>.
        </p>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-x-5 gap-y-[18px] tablet-lg:grid-cols-[730fr_649fr]">
        <div
          v-for="card in cards"
          :key="card.title"
          class="flex flex-col items-center gap-4 rounded-[14px] border border-[#D9DEE8] bg-white px-6 py-[22px] text-center shadow-[0px_8px_11px_rgba(38,46,71,0.05)] tablet:flex-row tablet:items-center tablet:gap-[22px] tablet:text-left"
        >
          <div class="flex size-[104px] shrink-0 items-center justify-center rounded-2xl bg-[#F7F7FF]">
            <img :src="card.icon" width="66" height="66" alt="" aria-hidden="true" />
          </div>
          <div class="min-w-0 flex-1">
            <h3 class="text-[16px] leading-[24px] font-semibold text-ink">{{ card.title }}</h3>
            <FeatureList class="mt-[10px] text-left" :items="card.items" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-page relative">
      <div class="mt-10 flex flex-col gap-3 tablet:flex-row">
        <CtaButton variant="primary" to="/testar-gratis" class="whitespace-nowrap">
          Testar grátis por 30 dias
        </CtaButton>
        <CtaButton variant="outline" :icon="false" to="/modulos/crm" class="whitespace-nowrap">
          Conheça o módulo CRM Imobiliário
        </CtaButton>
      </div>
    </div>
  </section>
  <SectionDivider />
</template>
