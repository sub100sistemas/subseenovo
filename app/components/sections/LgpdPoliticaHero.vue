<script setup lang="ts">
const containerClass =
  'container-page relative z-10 flex flex-col items-center pt-10 pb-10 text-center tablet-lg:pt-[71px] tablet-lg:pb-[91px]'
const subtitleClass =
  'mt-[10px] w-full text-[20px] leading-[1.4] font-medium text-ink tablet-lg:text-[26px]'
const descriptionClass =
  'mt-[18px] w-full max-w-[650px] text-[16px] leading-[1.6] text-[#6b7280] tablet-lg:mt-[25.6px] tablet-lg:text-[20px]'
</script>

<template>
  <LegalHero
    :container-class="containerClass"
    :subtitle-class="subtitleClass"
    :description-class="descriptionClass"
  >
    <template #decoration>
      <div
        class="pointer-events-none absolute top-[241px] left-[4.6875%] z-[1] hidden h-[372px] w-[91.667%] tablet-lg:block"
        aria-hidden="true"
      >
        <div class="absolute inset-[-53.76%_-11.36%]">
          <img src="/icons/legal-hero-ellipse.svg" alt="" class="block size-full max-w-none" />
        </div>
      </div>
    </template>

    <template #heading>Política de Privacidade</template>
    <template #subtitle>Seu direito à proteção de dados é nossa prioridade</template>
    <template #description>
      Saiba como a <strong class="font-bold text-brand">SUB100</strong> coleta, utiliza e protege suas informações
      pessoais em conformidade com a <strong class="font-bold text-brand">LGPD</strong>.
    </template>
  </LegalHero>
</template>
