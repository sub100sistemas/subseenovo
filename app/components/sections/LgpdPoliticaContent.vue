<script setup lang="ts">
import { lgpdPoliticaSections } from '~/data/lgpd-politica'
</script>

<template>
  <section class="relative z-10 pt-6 pb-10 tablet-lg:-mt-[49px] tablet-lg:pt-0 tablet-lg:pb-[62px]">
    <LegalSections :sections="lgpdPoliticaSections" sub-card-radius-class="rounded-[12px]" />
  </section>
</template>
