<script setup lang="ts">
const mockupImgAttrs = {
  alt: 'Painel do HUB de integrações',
  title: 'Painel do HUB de integrações',
  class: 'mx-auto h-auto w-full max-w-[1100px] rounded-[16px] tablet-lg:rounded-[24px]',
  loading: 'lazy'
}

const curveSrc = '/icons/apis-tecnologia-seta-curva.svg'
const starSrc = '/icons/crm-tecnologia-estrela.svg'
</script>

<template>
  <section id="apis-tecnologia" class="relative py-10">
    <div class="mx-auto w-full max-w-[1400px] px-4 mobile-lg:px-6 tablet:px-8 desktop-full:px-0">
      <div class="relative flex flex-col items-center gap-10">
        <h2 class="mx-auto text-center leading-[1.4] desktop-full:max-w-[1000px]">
          APIs e HUB Integrador:<br class="hidden tablet-lg:inline" /> toda a sua operação <span class="text-brand">conectada</span>
        </h2>

        <div class="relative w-full">
          <img
            :src="starSrc"
            :alt="imageLabel(starSrc)" :title="imageLabel(starSrc)"
            aria-hidden="true"
            class="pointer-events-none absolute inset-y-0 left-0 my-auto hidden size-[80px] desktop-full:block"
          />

          <NuxtPicture
            src="/images/modulos-apis-hub-integrador/technology-mockup-telas.png"
            :width="2200"
            :height="1293"
            densities="x1 x2"
            sizes="mobile-lg:100vw tablet-lg:920px desktop:1100px"
            :img-attrs="mockupImgAttrs"
          />
        </div>

        <div class="relative w-full max-w-[1100px]">
          <div class="rounded-[30px] border border-[#dee4fd] bg-[#f3f7ff] p-6 tablet:p-10">
            <p class="mx-auto max-w-[898px] text-center text-[20px] leading-[1.4] text-ink tablet-lg:text-[24px]">
              Integre Facebook Ads, Instagram Ads e outros canais para captar leads qualificados em todos
              os segmentos.
            </p>
          </div>

          <img
            :src="curveSrc"
            :alt="imageLabel(curveSrc)" :title="imageLabel(curveSrc)"
            aria-hidden="true"
            class="pointer-events-none absolute top-[13px] -right-[115px] hidden h-[220px] w-[185px] desktop-full:block"
          />
        </div>

        <div class="flex justify-center">
          <CtaButton variant="primary" to="/testar-gratis/" class="whitespace-nowrap">
            Testar grátis por 30 dias
          </CtaButton>
        </div>
      </div>
    </div>
  </section>
</template>
