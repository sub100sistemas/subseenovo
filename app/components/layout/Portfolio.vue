<script setup lang="ts">
interface PortfolioFeature {
  icon: string
  iconWidth?: number
  iconHeight?: number
  title: string
  description: string
}

interface PortfolioProps {
  sectionId?: string
  sectionClass?: string
  containerClass?: string
  panelClass?: string
  headerWrapperClass?: string
  headingClass?: string
  leadClass?: string
  contentWrapperClass?: string
  imageWrapperClass?: string
  textWrapperClass?: string
  summaryClass?: string
  featuresWrapperTag?: 'div' | 'ul'
  featuresWrapperClass?: string
  featureItemTag?: 'div' | 'li'
  featureItemClass?: string
  featureIconWrapperClass?: string
  featureIconClass?: string
  featureIconWidth?: number
  featureIconHeight?: number
  featureTextWrapperClass?: string
  featureTitleClass?: string
  featureDescriptionClass?: string
  ctaWrapperClass?: string
  ctaClass?: string
  ctaTo?: string
  ctaText?: string
  features?: PortfolioFeature[]
}

const props = withDefaults(defineProps<PortfolioProps>(), {
  sectionClass: 'section-py',
  containerClass: 'container-page',
  panelClass:
    'overflow-hidden rounded-[30px] px-6 py-10 tablet:px-10 tablet:py-14 tablet-lg:rounded-[50px] desktop-full:px-[65px] desktop-full:py-[85px]',
  headerWrapperClass: 'mx-auto max-w-[1150px] text-center',
  headingClass: 'mx-auto leading-[1.2] desktop-full:max-w-[1053px]',
  leadClass:
    'mx-auto mt-[26px] max-w-[1150px] text-[20px] leading-[1.4] text-ink tablet-lg:text-[24px]',
  contentWrapperClass:
    'mt-[26px] flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-center tablet-lg:gap-[3.15%]',
  imageWrapperClass: 'w-full tablet-lg:w-[52.26%]',
  textWrapperClass: 'flex w-full flex-col gap-5 tablet-lg:w-[43.39%]',
  summaryClass:
    'text-base leading-[1.4] text-ink tablet-lg:text-[18px] desktop-full:text-[20px]',
  featuresWrapperTag: 'div',
  featuresWrapperClass: 'flex flex-col gap-8',
  featureItemTag: 'div',
  featureItemClass: 'flex items-center gap-4',
  featureIconWrapperClass: 'flex w-11 shrink-0 items-center justify-start',
  featureIconClass: '',
  featureIconWidth: undefined,
  featureIconHeight: undefined,
  featureTextWrapperClass: 'flex flex-col',
  featureTitleClass: 'text-[16px] leading-[1.4] font-bold text-ink',
  featureDescriptionClass: 'text-[16px] leading-[1.4] text-ink',
  ctaWrapperClass: 'flex justify-center pt-5',
  ctaClass: 'whitespace-nowrap',
  ctaTo: undefined,
  ctaText: undefined,
  features: () => []
})
</script>

<template>
  <section :id="sectionId" :class="sectionClass">
    <div :class="containerClass">
      <div :class="panelClass">
        <div :class="headerWrapperClass">
          <h2 :class="headingClass">
            <slot name="heading" />
          </h2>
          <p :class="leadClass">
            <slot name="lead" />
          </p>
        </div>

        <div :class="contentWrapperClass">
          <div :class="imageWrapperClass">
            <slot name="image" />
          </div>
          <div :class="textWrapperClass">
            <p :class="summaryClass">
              <slot name="summary" />
            </p>

            <component :is="featuresWrapperTag" :class="featuresWrapperClass">
              <component
                :is="featureItemTag"
                v-for="feature in features"
                :key="feature.title"
                :class="featureItemClass"
              >
                <span :class="featureIconWrapperClass">
                  <img
                    :src="feature.icon"
                    :alt="imageLabel(feature.icon)" :title="imageLabel(feature.icon)"
                    aria-hidden="true"
                    :class="featureIconClass"
                    :width="featureIconWidth"
                    :height="featureIconHeight"
                    :style="
                      feature.iconWidth && feature.iconHeight
                        ? { width: `${feature.iconWidth}px`, height: `${feature.iconHeight}px` }
                        : undefined
                    "
                  />
                </span>
                <div :class="featureTextWrapperClass">
                  <h3 :class="featureTitleClass">{{ feature.title }}</h3>
                  <p :class="featureDescriptionClass">{{ feature.description }}</p>
                </div>
              </component>
            </component>

            <div v-if="$slots.cta || ctaText" :class="ctaWrapperClass || undefined">
              <slot name="cta">
                <CtaButton v-if="ctaTo && ctaText" variant="primary" :to="ctaTo" :class="ctaClass">
                  {{ ctaText }}
                </CtaButton>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>