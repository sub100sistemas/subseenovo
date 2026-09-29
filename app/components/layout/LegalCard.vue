<script setup lang="ts">
interface Props {
  cardClass?: string
  titleClass?: string
  dividerClass?: string
  bodyClass?: string
}

withDefaults(defineProps<Props>(), {
  cardClass:
    'flex w-full flex-col items-start gap-6 rounded-[16px] border border-[#e5e7eb] bg-white px-5 py-6 tablet-lg:px-[39px] tablet-lg:py-[35px]',
  titleClass: 'w-full text-center text-[20px] leading-normal font-semibold text-brand tablet-lg:text-[26px]',
  dividerClass: 'h-px w-full bg-[#e5e7eb]',
  bodyClass: 'w-full text-[16px] leading-[1.7] text-[#4b5563] [overflow-wrap:anywhere] tablet-lg:text-[18px]'
})
</script>

<template>
  <section :class="cardClass">
    <h2 :class="titleClass">
      <slot name="title" />
    </h2>
    <div :class="dividerClass" aria-hidden="true" />
    <div :class="bodyClass">
      <slot />
    </div>
  </section>
</template>
