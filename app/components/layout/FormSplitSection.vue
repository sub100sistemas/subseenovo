<script setup lang="ts">
interface Props {
  sectionClass?: string
  containerClass?: string
  introClass?: string
  cardWrapperClass?: string
}

withDefaults(defineProps<Props>(), {
  sectionClass: 'relative z-10',
  containerClass:
    'container-page flex flex-col items-center gap-10 pt-10 pb-10 tablet-lg:pt-[55px] desktop:flex-row desktop:items-start desktop:justify-center desktop:gap-x-10 desktop:pt-[89px] desktop:pb-[93px] desktop-full:gap-x-[122px]',
  introClass: 'flex w-full max-w-[530px] min-w-0 flex-col gap-5 desktop:flex-1',
  cardWrapperClass: 'w-full max-w-[640px] shrink-0'
})
</script>

<template>
  <section :class="sectionClass">
    <div :class="containerClass">
      <div :class="introClass">
        <slot name="intro" />
      </div>
      <div :class="cardWrapperClass">
        <slot name="card" />
      </div>
    </div>
  </section>
</template>
