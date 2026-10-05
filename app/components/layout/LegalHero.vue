<script setup lang="ts">
interface Props {
  sectionClass?: string
  backgroundWrapperClass?: string
  backgroundClass?: string
  backgroundSrc?: string
  containerClass?: string
  headingClass?: string
  subtitleClass?: string
  descriptionClass?: string
}

withDefaults(defineProps<Props>(), {
  sectionClass: 'relative overflow-x-clip',
  backgroundWrapperClass: 'pointer-events-none absolute inset-x-0 -top-16 z-0 h-[603px] mobile-lg:-top-[85px]',
  backgroundClass: 'absolute inset-[-24.88%_-7.81%_0_-7.81%]',
  backgroundSrc: '/icons/legal-page-background.svg',
  containerClass: 'container-page relative z-10 flex flex-col items-center pt-10 pb-10 text-center',
  headingClass: 'w-full text-[28px] leading-normal font-bold text-ink tablet-lg:text-[40px]',
  subtitleClass: 'mt-[18px] w-full text-[20px] leading-[1.4] font-medium text-ink tablet-lg:text-[26px]',
  descriptionClass: 'mt-[18px] w-full max-w-[661px] text-[16px] leading-[1.6] text-[#6b7280] tablet-lg:text-[20px]'
})
</script>

<template>
  <section :class="sectionClass">
    <div :class="backgroundWrapperClass" aria-hidden="true">
      <div :class="backgroundClass">
        <img :src="backgroundSrc" :alt="imageLabel(backgroundSrc)" :title="imageLabel(backgroundSrc)" class="block size-full max-w-none" />
      </div>
    </div>
    <slot name="decoration" />
    <div :class="containerClass">
      <h1 :class="headingClass">
        <slot name="heading" />
      </h1>
      <p :class="subtitleClass">
        <slot name="subtitle" />
      </p>
      <p :class="descriptionClass">
        <slot name="description" />
      </p>
    </div>
  </section>
</template>
