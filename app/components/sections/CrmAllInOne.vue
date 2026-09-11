<script setup lang="ts">
interface FeatureCard {
  icon: string
  title: string
  description: string
}

const cards: FeatureCard[] = [
  {
    icon: '/icons/icone-crm-allinone-funil.svg',
    title: 'Funil Imobiliário',
    description: 'Gerencie todas as etapas da venda, do primeiro contato ao fechamento de cada oportunidade.'
  },
  {
    icon: '/icons/icone-crm-allinone-kanban.svg',
    title: 'Kanban de Atendimentos',
    description: 'Organize os atendimentos em quadros, distribua tarefas e acompanhe cada atividade em tempo real.'
  },
  {
    icon: '/icons/icone-crm-allinone-gestao-leads.svg',
    title: 'Gestão de Leads',
    description: 'Centralize todos os leads em um só lugar e distribua automaticamente para sua equipe comercial.'
  },
  {
    icon: '/icons/icone-crm-allinone-automacao-marketing.svg',
    title: 'Automação de Marketing',
    description: 'Automatize campanhas, nutra seus contatos e mantenha clientes sempre engajados durante a jornada.'
  },
  {
    icon: '/icons/icone-crm-allinone-agenda.svg',
    title: 'Agenda',
    description: 'Organize visitas, reuniões e compromissos com lembretes para nunca perder uma oportunidade.'
  },
  {
    icon: '/icons/icone-crm-allinone-relatorios.svg',
    title: 'Relatórios e Metas',
    description: 'Acompanhe indicadores, metas e resultados da equipe para tomar decisões com mais segurança.'
  }
]
</script>

<template>
  <section id="crm-all-in-one" class="section-py">
    <div class="container-page">
      <div
        class="rounded-[20px] bg-[linear-gradient(135deg,_rgb(93,95,239)_0%,_rgb(71,126,205)_55%,_rgb(56,177,192)_100%)] px-6 py-14 text-center text-white tablet-lg:px-16 tablet-lg:py-20"
      >
        <h2 class="text-white">Tudo o que sua imobiliária precisa para vender mais</h2>
        <p class="mx-auto mt-4 max-w-[900px] text-base leading-[1.4] text-white/80 tablet-lg:text-xl">
          Ferramentas pensadas para cada etapa do processo comercial imobiliário: da captação do
          lead ao fechamento do contrato
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 tablet:grid-cols-2 tablet-lg:grid-cols-3">
          <div v-for="card in cards" :key="card.title" class="flex flex-col items-center gap-4">
            <img :src="card.icon" width="48" height="53" alt="" aria-hidden="true" class="h-12 w-auto" />
            <h3 class="text-lg font-bold text-white">{{ card.title }}</h3>
            <p class="text-sm leading-[1.5] text-white/70">{{ card.description }}</p>
          </div>
        </div>

        <div class="mt-10">
          <CtaButton variant="primary" to="/testar-gratis" class="whitespace-nowrap !bg-white !text-brand hover:!bg-white/90">
            Testar grátis por 30 dias
          </CtaButton>
        </div>
      </div>
    </div>
  </section>
</template>
