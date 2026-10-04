<script setup lang="ts">
interface Props {
  sectionClass?: string
  containerClass?: string
  imageWrapperClass?: string
  contentClass?: string
  headingClass?: string
  subtitleClass?: string
}

withDefaults(defineProps<Props>(), {
  sectionClass: 'bg-brand',
  containerClass:
    'container-page flex flex-col items-center gap-8 py-12 text-center tablet-lg:min-h-[460px] tablet-lg:flex-row tablet-lg:gap-12 tablet-lg:text-left desktop:justify-center desktop:gap-[93px]',
  imageWrapperClass: 'flex shrink-0 justify-center',
  contentClass: 'flex w-full min-w-0 flex-col items-center gap-9 tablet-lg:items-start desktop:max-w-[644px]',
  headingClass: 'text-[28px] leading-normal font-bold text-white tablet-lg:text-[40px]',
  subtitleClass: 'text-[20px] leading-normal font-normal text-white tablet-lg:text-[32px]'
})
</script>

<template>
  <section :class="sectionClass">
    <div :class="containerClass">
      <div :class="imageWrapperClass">
        <slot name="image" />
      </div>
      <div :class="contentClass">
        <div>
          <h1 :class="headingClass">
            <slot name="heading" />
          </h1>
          <p :class="subtitleClass">
            <slot name="subtitle" />
          </p>
        </div>
        <slot name="cta" />
      </div>
    </div>
  </section>
</template>
