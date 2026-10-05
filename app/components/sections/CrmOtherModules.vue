<script setup lang="ts">
interface OtherModuleCard {
  icon: string
  title: string
  description: string
  href: string
}

const modules: OtherModuleCard[] = [
  {
    icon: '/icons/menu-icone-crm-urbano.svg',
    title: 'CRM Imobiliário Urbano',
    description: 'Centralize imóveis, clientes e negociações em um só lugar.',
    href: '/modulos/crm-imobiliario-urbano/'
  },
  {
    icon: '/icons/menu-icone-crm-rural.svg',
    title: 'CRM Imobiliário Rural',
    description: 'Gestão completa de propriedades rurais e negociações do campo.',
    href: '/modulos/crm-imobiliario-rural/'
  },
  {
    icon: '/icons/menu-icone-crm-temporada.svg',
    title: 'CRM para Temporada',
    description: 'Gestão completa de aluguéis por temporada e reservas de imóveis.',
    href: '/modulos/crm-imobiliario-temporada/'
  }
]
</script>

<template>
  <section id="crm-outros-modulos" class="section-py">
    <div class="container-page">
      <div class="mx-auto max-w-[1120px] text-center">
        <h2>Conheça os outros módulos do CRM Imobiliário</h2>
        <p class="mx-auto mt-4 text-base leading-[1.4] text-ink-soft tablet-lg:text-xl">
          Soluções desenvolvidas para diferentes segmentos do mercado imobiliário.
        </p>
      </div>

      <div class="mx-auto mt-10 flex max-w-[1120px] flex-col gap-[30px]">
        <NuxtLink
          v-for="mod in modules"
          :key="mod.title"
          :to="mod.href" :title="titleForLink(mod.href)" :aria-label="titleForLink(mod.href)"
          class="flex flex-col items-center gap-4 rounded-[20px] bg-white p-6 text-center shadow-[0px_2px_35px_rgba(31,56,115,0.08)] tablet:flex-row tablet:items-center tablet:gap-6 tablet:text-left"
        >
          <span class="flex size-[78px] shrink-0 items-center justify-center rounded-2xl bg-[#F7F7FF]">
            <img :src="mod.icon" width="46" height="46" :alt="imageLabel(mod.icon)" :title="imageLabel(mod.icon)" aria-hidden="true" class="size-11" />
          </span>
          <div class="min-w-0 flex-1">
            <p class="text-xl font-semibold text-brand">{{ mod.title }}</p>
            <p class="mt-1 text-base text-ink-soft">{{ mod.description }}</p>
          </div>
          <span
            class="inline-flex h-[52px] w-full shrink-0 items-center justify-center rounded-xl bg-brand px-5 text-base font-semibold text-white shadow-[0px_7px_18px_-7px_rgba(20,64,217,0.22)] tablet:w-[215px]"
          >
            Clique aqui →
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
