<script setup lang="ts">
type StyleValue = string | Record<string, string | number>

interface Props {
  sectionId?: string
  sectionClass?: string
  sectionStyle?: StyleValue
  containerClass?: string
  frameClass?: string
  rowClass?: string
  aspectClass?: string
  gapClass?: string
  topClass?: string
  heightClass?: string
  dividerSrc?: string
  dividerClass?: string
  dividerStyle?: StyleValue
  mobileDividerSrc?: string
  mobileDividerClass?: string
}

withDefaults(defineProps<Props>(), {
  sectionClass: 'relative overflow-hidden',
  sectionStyle: undefined,
  containerClass: 'container-page relative z-10',
  frameClass: 'relative w-full pt-10 pb-0 tablet-lg:pt-0',
  rowClass:
    'flex flex-col items-start tablet-lg:absolute tablet-lg:inset-x-0 tablet-lg:flex-row tablet-lg:items-center tablet-lg:gap-[5px]',
  aspectClass: '',
  gapClass: 'gap-10',
  topClass: 'tablet-lg:top-[1.33%]',
  heightClass: 'tablet-lg:h-[86.36%]',
  dividerClass: 'pointer-events-none absolute hidden max-w-none tablet-lg:block',
  dividerStyle: () => ({
    top: '61.93%',
    height: '38.07%',
    left: 'calc(50% - 50vw)',
    width: '100vw',
  }),
  mobileDividerClass: 'pointer-events-none mt-8 block w-full max-w-none tablet-lg:hidden',
})
</script>

<template>
  <section :id="sectionId" :class="sectionClass" :style="sectionStyle">
    <div :class="containerClass">
      <div :class="[frameClass, aspectClass]">
        <div :class="[rowClass, gapClass, topClass, heightClass]">
          <slot name="content" />
          <slot name="visual" />
        </div>

        <img
          v-if="dividerSrc"
          :src="dividerSrc"
          alt=""
          aria-hidden="true"
          :class="dividerClass"
          :style="dividerStyle"
        />
      </div>
    </div>

    <img
      v-if="mobileDividerSrc"
      :src="mobileDividerSrc"
      alt=""
      aria-hidden="true"
      :class="mobileDividerClass"
    />
  </section>
</template>