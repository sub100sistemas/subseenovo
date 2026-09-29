<script setup lang="ts">
import { lgpdTermosSections } from '~/data/lgpd-termos'
</script>

<template>
  <section class="relative z-10 pt-6 pb-10 tablet-lg:-mt-[50px] tablet-lg:pt-10 tablet-lg:pb-[47px]">
    <LegalSections :sections="lgpdTermosSections" />
  </section>
</template>
