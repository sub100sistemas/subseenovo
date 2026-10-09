<script setup lang="ts">
const containerClass =
  'container-page relative z-10 flex flex-col items-center pt-10 pb-10 text-center tablet-lg:pt-[62px] tablet-lg:pb-[62px]'
</script>

<template>
  <LegalHero :container-class="containerClass">
    <template #heading>Termos de Uso</template>
    <template #subtitle>Transparência e compromisso com você</template>
    <template #description>
      Conheça as diretrizes que garantem a <strong class="font-semibold text-brand">segurança</strong>, a
      <strong class="font-semibold text-brand">privacidade</strong> e a
      <strong class="font-semibold text-brand">confiança</strong> na utilização dos nossos serviços e plataformas.
    </template>
  </LegalHero>
</template>
