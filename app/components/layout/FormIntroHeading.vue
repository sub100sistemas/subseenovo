<script setup lang="ts">
interface Props {
  wrapperClass?: string
  headingClass?: string
  leadClass?: string
}

withDefaults(defineProps<Props>(), {
  wrapperClass: 'flex flex-col gap-[3px]',
  headingClass:
    'text-[32px] leading-[1.12] font-bold tracking-[-0.025em] text-[#142940] tablet-lg:text-[44px] desktop:text-[40px] desktop-full:text-[56px]',
  leadClass:
    'text-[16px] leading-[1.34] text-[#142940] tablet-lg:text-[18px] desktop:text-[17px] desktop-full:text-[21px]'
})
</script>

<template>
  <div :class="wrapperClass">
    <h1 :class="headingClass">
      <slot name="heading" />
    </h1>
    <div :class="leadClass">
      <slot name="lead" />
    </div>
  </div>
</template>
