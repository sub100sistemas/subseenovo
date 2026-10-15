<script setup lang="ts">
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
  titleClass?: string
  mockupWrapperClass?: string
  starSrc?: string
  starClass?: string
  mockupSrc: string
  mockupWidth: number
  mockupHeight: number
  mockupDensities?: string
  mockupSizes?: string
  mockupImgAttrs?: PictureImgAttrs
  boxWrapperClass?: string
  boxClass?: string
  descriptionClass?: string
  curveSrc?: string
  curveClass?: string
  ctaWrapperClass?: string
}

withDefaults(defineProps<Props>(), {
  sectionId: undefined,
  sectionClass: 'relative py-10',
  containerClass: 'mx-auto w-full max-w-[1400px] px-4 mobile-lg:px-6 tablet:px-8 desktop-full:px-0',
  stackClass: 'relative flex flex-col items-center gap-10',
  titleClass: 'mx-auto text-center leading-[1.4] desktop-full:max-w-[1000px]',
  mockupWrapperClass: 'relative w-full',
  starSrc: '/icons/crm-tecnologia-estrela.svg',
  starClass: 'pointer-events-none absolute inset-y-0 left-0 my-auto hidden size-[80px] desktop-full:block',
  mockupDensities: 'x1 x2',
  mockupSizes: 'mobile-lg:100vw tablet-lg:920px desktop:1100px',
  mockupImgAttrs: undefined,
  boxWrapperClass: 'relative w-full max-w-[1100px]',
  boxClass: 'rounded-[30px] border border-[#dee4fd] bg-[#f3f7ff] p-6 tablet:p-10',
  descriptionClass: 'mx-auto max-w-[898px] text-center text-[20px] leading-[1.4] text-ink tablet-lg:text-[24px]',
  curveSrc: '/icons/apis-tecnologia-seta-curva.svg',
  curveClass: 'pointer-events-none absolute top-[13px] -right-[115px] hidden h-[220px] w-[185px] desktop-full:block',
  ctaWrapperClass: 'flex justify-center'
})
</script>

<template>
  <section :id="sectionId" :class="sectionClass">
    <div :class="containerClass">
      <div :class="stackClass">
        <h2 :class="titleClass">
          <slot name="title" />
        </h2>

        <div :class="mockupWrapperClass">
          <img
            v-if="starSrc"
            :src="starSrc"
            :alt="imageLabel(starSrc)" :title="imageLabel(starSrc)"
            aria-hidden="true"
            :class="starClass"
          />

          <NuxtPicture
            :src="mockupSrc"
            :width="mockupWidth"
            :height="mockupHeight"
            :densities="mockupDensities"
            :sizes="mockupSizes"
            :img-attrs="mockupImgAttrs"
          />
        </div>

        <div :class="boxWrapperClass">
          <div :class="boxClass">
            <p :class="descriptionClass">
              <slot name="description" />
            </p>
          </div>

          <img
            v-if="curveSrc"
            :src="curveSrc"
            :alt="imageLabel(curveSrc)" :title="imageLabel(curveSrc)"
            aria-hidden="true"
            :class="curveClass"
          />
        </div>

        <div :class="ctaWrapperClass">
          <slot name="cta" />
        </div>
      </div>
    </div>
  </section>
</template>
