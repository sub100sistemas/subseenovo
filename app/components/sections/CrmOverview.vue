<script setup lang="ts">
interface FeatureCard {
  icon: string
  title: string
  description: string
}

const cards: FeatureCard[] = [
  {
    icon: '/icons/icone-crm-overview-portfolio.svg',
    title: 'Portfólio Sempre Atualizado',
    description:
      'Integre seu CRM e disponibilize automaticamente novos imóveis em nossa plataforma. Sua imobiliária ganha mais visibilidade sem precisar realizar cadastros manuais.'
  },
  {
    icon: '/icons/icone-crm-overview-sincronizacao.svg',
    title: 'Sincronização Inteligente',
    description:
      'Alterações de preço, disponibilidade, fotos e demais informações são sincronizadas automaticamente, garantindo dados sempre atualizados e reduzindo retrabalho.'
  },
  {
    icon: '/icons/icone-crm-overview-leads.svg',
    title: 'Mais Leads Qualificados',
    description:
      'Com informações organizadas e imóveis atualizados, seus anúncios geram mais confiança e atraem clientes realmente interessados, aumentando suas chances de conversão.'
  }
]
</script>

<template>
  <section id="crm-publicacao-integrada" class="section-py">
    <div class="container-page">
      <div class="mx-auto max-w-[1001px] text-center">
        <h2>
          Publicação Integrada de <span class="text-brand">Imóveis</span>
        </h2>
        <p class="mx-auto mt-4 text-base leading-[1.4] text-ink-soft tablet-lg:text-xl">
          Publique e mantenha seus imóveis atualizados automaticamente nos portais integrados, sem
          retrabalho.
        </p>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-8 tablet-lg:grid-cols-3">
        <div v-for="card in cards"  class="relative h-full">
          <div
           :key="card.title"
            class="mt-13 flex h-[calc(100%-3.25rem)] flex-col items-center gap-6 rounded-[20px] border border-brand bg-white px-8 py-10 text-center shadow-[0px_10px_20px_rgba(38,45,118,0.08)]">
            <span class="flex size-[100px] shrink-0 items-center justify-center rounded-full border border-brand absolute top-0 bg-white">
              <img :src="card.icon" width="40" height="40" alt="" aria-hidden="true" class="size-10" />
            </span>
            <h3 class="text-xl font-medium text-brand tablet-lg:text-2xl mt-10">{{ card.title }}</h3>
            <p class="text-base leading-[1.8] text-ink-soft">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
