<script setup lang="ts">
interface Props {
  sectionClass?: string
  backgroundWrapperClass?: string
  backgroundClass?: string
  backgroundSrc?: string
  containerClass?: string
  headingClass?: string
  leadClass?: string
}

withDefaults(defineProps<Props>(), {
  sectionClass: 'relative overflow-x-clip',
  backgroundWrapperClass: 'pointer-events-none absolute inset-x-0 -top-16 z-0 h-[597px] mobile-lg:-top-[85px]',
  backgroundClass: 'absolute inset-[-25.13%_-7.7%_-0.17%_-7.8%]',
  backgroundSrc: '/icons/form-page-background.svg',
  containerClass:
    'container-page relative z-10 mx-auto flex flex-col items-center gap-[25px] pt-10 pb-10 text-center tablet-lg:pt-[55px]',
  headingClass: 'w-full max-w-[820px] text-[28px] leading-normal font-medium text-ink tablet-lg:text-[40px]',
  leadClass: 'w-full max-w-[820px] text-lg leading-[1.4] text-ink tablet-lg:text-[26px]'
})
</script>

<template>
  <section :class="sectionClass">
    <div :class="backgroundWrapperClass" aria-hidden="true">
      <div :class="backgroundClass">
        <img :src="backgroundSrc" :alt="imageLabel(backgroundSrc)" :title="imageLabel(backgroundSrc)" class="block size-full max-w-none" />
      </div>
    </div>
    <div :class="containerClass">
      <h1 :class="headingClass">
        <slot name="heading" />
      </h1>
      <div :class="leadClass">
        <slot name="lead" />
      </div>
    </div>
  </section>
</template>
