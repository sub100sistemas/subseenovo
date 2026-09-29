<script setup lang="ts">
type HeadingAlign = 'left' | 'center'

interface Props {
  align?: HeadingAlign
  wrapperClass?: string
  eyebrowClass?: string
  titleClass?: string
  descriptionClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
  wrapperClass: 'gap-3',
  eyebrowClass: 'text-[14px] leading-normal font-semibold tracking-[0.84px] text-brand uppercase',
  titleClass: 'text-[28px] leading-[1.2] font-bold text-ink tablet-lg:text-[32px] desktop-full:text-[38px]',
  descriptionClass: 'text-[16px] leading-normal text-[#596273] tablet-lg:text-[18px]'
})

const alignClass = computed(() => (props.align === 'center' ? 'items-center text-center' : 'items-start text-left'))
</script>

<template>
  <div class="flex flex-col" :class="[alignClass, wrapperClass]">
    <p v-if="$slots.eyebrow" :class="eyebrowClass">
      <slot name="eyebrow" />
    </p>
    <h2 :class="titleClass">
      <slot name="title" />
    </h2>
    <p v-if="$slots.description" :class="descriptionClass">
      <slot name="description" />
    </p>
  </div>
</template>
