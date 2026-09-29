<script setup lang="ts">
interface Props {
  subCardClass?: string
  radiusClass?: string
  labelClass?: string
  bodyClass?: string
}

withDefaults(defineProps<Props>(), {
  subCardClass: 'flex w-full flex-col items-start gap-2 bg-[#f9fafb] px-4 py-4 tablet-lg:px-6 tablet-lg:py-5',
  radiusClass: 'rounded-[18px]',
  labelClass: 'w-full text-[15px] leading-normal font-semibold text-ink [overflow-wrap:anywhere]',
  bodyClass: 'w-full text-[16px] leading-[1.7] text-[#4b5563] [overflow-wrap:anywhere] tablet-lg:text-[18px]'
})
</script>

<template>
  <div :class="[subCardClass, radiusClass]">
    <h3 :class="labelClass">
      <slot name="label" />
    </h3>
    <div :class="bodyClass">
      <slot />
    </div>
  </div>
</template>
