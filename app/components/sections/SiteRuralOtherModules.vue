<script setup lang="ts">
interface OtherModuleCard {
  icon: string
  title: string
  badge?: string
  description: string
  href: string
}

const modules: OtherModuleCard[] = [
  {
    icon: '/icons/menu-icone-site-urbanas.svg',
    title: 'Site para Imobiliárias Urbanas',
    description: 'Destaque seus imóveis urbanos com um site profissional na web.',
    href: '/modulos/site-para-imobiliarias-urbanas/'
  },
  {
    icon: '/icons/menu-icone-site-loteadoras.svg',
    title: 'Site para Loteadoras',
    badge: 'breve',
    description: 'Venda mais lotes com uma presença digital completa e moderna.',
    href: '/modulos/site-para-loteadoras/'
  }
]
</script>

<template>
  <section id="site-rural-outros-modulos" class="section-py">
    <div class="container-page">
      <div class="mx-auto max-w-[1120px] text-center">
        <h2>Conheça os outros módulos de Sites &amp; Hotsites</h2>
        <p class="mx-auto mt-4 text-base leading-[1.4] text-ink-soft tablet-lg:text-xl">
          Explore nossas soluções de sites para diferentes segmentos do mercado imobiliário.
        </p>
      </div>

      <div class="mx-auto mt-10 flex max-w-[1120px] flex-col gap-[30px]">
        <NuxtLink
          v-for="mod in modules"
          :key="mod.title"
          :to="mod.href"
          class="flex flex-col items-center gap-4 rounded-[20px] bg-white p-6 text-center shadow-[0px_2px_35px_rgba(31,56,115,0.08)] tablet:flex-row tablet:items-center tablet:gap-6 tablet:text-left"
        >
          <span class="flex size-[78px] shrink-0 items-center justify-center rounded-2xl bg-[#F7F7FF]">
            <img :src="mod.icon" width="46" height="46" alt="" aria-hidden="true" class="size-11" />
          </span>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-center gap-2 tablet:justify-start">
              <p class="text-xl font-semibold text-brand">{{ mod.title }}</p>
              <span
                v-if="mod.badge"
                class="rounded-full bg-[#F0F0FF] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand"
              >
                {{ mod.badge }}
              </span>
            </div>
            <p class="mt-1 text-base text-ink-soft">{{ mod.description }}</p>
          </div>
          <span class="inline-flex h-[52px] w-full shrink-0 items-center justify-center rounded-xl bg-brand px-5 text-base font-semibold text-white shadow-[0px_7px_18px_-7px_rgba(20,64,217,0.22)] tablet:w-[215px]">
            Clique aqui →
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
