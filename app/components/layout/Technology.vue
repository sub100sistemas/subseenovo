<script setup lang="ts">
type StyleValue = string | Record<string, string | number>

type PictureImgAttrs = {
  alt: string
  class: string
  loading?: 'lazy' | 'eager'
  [key: string]: string | number | boolean | undefined
}

interface Props {
  sectionId?: string
  sectionClass?: string
  containerClass?: string
  stackClass?: string
  headerBlockClass?: string
  titleClass?: string
  descriptionClass?: string
  ctaWrapperClass?: string
  curveArrowSrc?: string
  curveArrowClass?: string
  curveArrowStyle?: StyleValue
  mockupWrapperClass?: string
  showStar?: boolean
  starSrc?: string
  starClass?: string
  starStyle?: StyleValue
  mockupSrc?: string
  mockupWidth?: number
  mockupHeight?: number
  mockupDensities?: string
  mockupSizes?: string
  mockupImgAttrs?: PictureImgAttrs
}

withDefaults(defineProps<Props>(), {
  sectionClass: 'section-py relative overflow-hidden',
  containerClass:
    'mx-auto w-full max-w-[1400px] px-4 mobile-lg:px-6 tablet:px-8 desktop-full:px-0',
  stackClass: '',
  headerBlockClass: 'relative mx-auto max-w-[1048px] text-center',
  titleClass: 'mx-auto desktop-full:max-w-[1000px]',
  descriptionClass:
    'mx-auto mt-4 max-w-[1048px] text-[20px] leading-[1.4] text-ink tablet-lg:text-[24px] desktop-full:mt-[30px]',
  ctaWrapperClass: 'mt-8 flex justify-center desktop-full:mt-[30px]',
  curveArrowClass: 'pointer-events-none absolute hidden desktop-full:block',
  curveArrowStyle: () => ({
    right: '18.03px',
    top: '48px',
    width: '184.972px',
    height: '210.812px',
  }),
  mockupWrapperClass: 'relative mt-10 desktop-full:mt-[75px]',
  showStar: false,
  starClass: 'pointer-events-none absolute top-1/2 left-0 hidden size-[80px] -translate-y-1/2 desktop-full:block',
  starStyle: undefined,
  mockupDensities: 'x1 x2',
})
</script>

<template>
  <section :id="sectionId" :class="sectionClass">
    <div :class="containerClass">
      <div :class="stackClass || undefined">
        <div :class="headerBlockClass">
          <h2 :class="titleClass">
            <slot name="title" />
          </h2>

          <p :class="descriptionClass">
            <slot name="description" />
          </p>

          <div :class="ctaWrapperClass || undefined">
            <slot name="cta" />
          </div>
        </div>

        <img
          v-if="curveArrowSrc"
          :src="curveArrowSrc"
          alt=""
          aria-hidden="true"
          :class="curveArrowClass"
          :style="curveArrowStyle"
        />

        <div :class="mockupWrapperClass">
          <img
            v-if="showStar && starSrc"
            :src="starSrc"
            alt=""
            aria-hidden="true"
            :class="starClass"
            :style="starStyle"
          />

          <NuxtPicture
            v-if="mockupSrc"
            :src="mockupSrc"
            :width="mockupWidth"
            :height="mockupHeight"
            :densities="mockupDensities"
            :sizes="mockupSizes"
            :img-attrs="mockupImgAttrs"
          />
        </div>
      </div>
    </div>
  </section>
</template>