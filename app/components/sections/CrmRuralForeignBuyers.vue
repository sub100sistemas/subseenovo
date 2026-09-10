<script setup lang="ts">
interface CountryChip {
  name: string
  color: string
}

const countries: CountryChip[] = [
  { name: 'Brasil', color: 'bg-[#00c78f]' },
  { name: 'Paraguai', color: 'bg-[#1cadeb]' },
  { name: 'Uruguai', color: 'bg-[#5d5fef]' },
  { name: 'Argentina', color: 'bg-[#f44336]' },
  { name: 'Bolívia', color: 'bg-[#fa9e2e]' }
]
</script>

<template>
  <section id="crm-rural-foreign-buyers" class="section-py relative overflow-hidden">
    <div class="container-page">
      <div class="flex flex-col items-center gap-10 tablet-lg:flex-row-reverse tablet-lg:items-center tablet-lg:gap-12 desktop-full:gap-[70px]">
        <div class="flex w-full flex-col items-start gap-5 tablet-lg:flex-1">
          <h2>
            Anuncie propriedades rurais além do <span class="text-brand">Brasil</span>
          </h2>
          <p class="text-base leading-[1.4] text-ink tablet-lg:text-xl">
            Divulgue fazendas, sítios e outras propriedades rurais no Brasil, Paraguai, Uruguai,
            Argentina e Bolívia e alcance compradores interessados em investir na América do Sul.
          </p>

          <CtaButton variant="primary" to="/testar-gratis" class="whitespace-nowrap">
            Testar grátis por 30 dias
          </CtaButton>
        </div>

        <NuxtImg
          src="/images/modulos-crm-rural/foreign-buyers-vitrine-cards.png"
          :width="889"
          :height="521"
          sizes="mobile-lg:90vw tablet-lg:520px desktop-full:640px"
          alt="Cards sobrepostos de propriedades rurais no Uruguai, Paraguai, Bolívia, Argentina e Brasil"
          class="h-auto w-full max-w-[640px] shrink-0 tablet-lg:w-[46%]"
          loading="lazy"
        />
      </div>

      <div class="mt-10 flex flex-col items-center gap-5 tablet-lg:mt-[60px] tablet-lg:flex-row tablet-lg:justify-between">
        <p class="text-base font-medium text-ink">
          Seus imóveis conectados a compradores de outros países
        </p>

        <ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <li v-for="country in countries" :key="country.name" class="flex items-center gap-2">
            <span class="size-2.5 shrink-0 rounded-full" :class="country.color" aria-hidden="true" />
            <span class="text-sm font-medium text-ink">{{ country.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
