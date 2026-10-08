<script setup lang="ts">
interface Props {
  sectionClass?: string
  backgroundWrapperClass?: string
  backgroundClass?: string
  backgroundSrc?: string
}

withDefaults(defineProps<Props>(), {
  sectionClass: 'relative overflow-x-clip',
  backgroundWrapperClass: 'pointer-events-none absolute inset-x-0 -top-16 z-0 h-[597px] mobile-lg:-top-[85px]',
  backgroundClass: 'absolute inset-[-25.13%_-7.7%_-0.17%_-7.8%]',
  backgroundSrc: '/icons/form-page-background.svg'
})
</script>

<template>
  <section :class="sectionClass">
    <div :class="backgroundWrapperClass" aria-hidden="true">
      <div :class="backgroundClass">
        <img :src="backgroundSrc" :alt="imageLabel(backgroundSrc)" :title="imageLabel(backgroundSrc)" class="block size-full max-w-none" />
      </div>
    </div>
    <slot />
  </section>
</template>
