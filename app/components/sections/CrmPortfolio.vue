<script setup lang="ts">
interface PortfolioFeature {
  icon: string
  iconWidth?: number
  iconHeight?: number
  title: string
  description: string
}

interface Props {
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

const props = withDefaults(defineProps<Props>(), {
  sectionId: 'crm-urbano-portfolio',
  panelClass:
    'overflow-hidden rounded-[30px] bg-[linear-gradient(76.19deg,_#e6faf1_5.56%,_#ecf8f9_30.92%,_#eff2fa_76.37%,_#c5dcf0_98.37%)] px-6 py-10 tablet:px-10 tablet:py-14 tablet-lg:rounded-[50px] desktop-full:px-[65px] desktop-full:py-[85px]',
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
  ctaTo: '/testar-gratis',
  ctaText: 'Testar grátis por 30 dias',
  features: () => []
})
</script>

<template>
  <Portfolio
    :section-id="sectionId"
    :section-class="sectionClass"
    :container-class="containerClass"
    :panel-class="panelClass"
    :header-wrapper-class="headerWrapperClass"
    :heading-class="headingClass"
    :lead-class="leadClass"
    :content-wrapper-class="contentWrapperClass"
    :image-wrapper-class="imageWrapperClass"
    :text-wrapper-class="textWrapperClass"
    :summary-class="summaryClass"
    :features-wrapper-tag="featuresWrapperTag"
    :features-wrapper-class="featuresWrapperClass"
    :feature-item-tag="featureItemTag"
    :feature-item-class="featureItemClass"
    :feature-icon-wrapper-class="featureIconWrapperClass"
    :feature-icon-class="featureIconClass"
    :feature-icon-width="featureIconWidth"
    :feature-icon-height="featureIconHeight"
    :feature-text-wrapper-class="featureTextWrapperClass"
    :feature-title-class="featureTitleClass"
    :feature-description-class="featureDescriptionClass"
    :cta-wrapper-class="ctaWrapperClass"
    :cta-class="ctaClass"
    :cta-to="ctaTo"
    :cta-text="ctaText"
    :features="features"
  >
    <template #heading>
      <slot name="heading" />
    </template>

    <template #lead>
      <slot name="lead" />
    </template>

    <template #image>
      <slot name="image" />
    </template>

    <template #summary>
      <slot name="summary" />
    </template>

    <template #cta>
      <slot name="cta" />
    </template>
  </Portfolio>
</template>