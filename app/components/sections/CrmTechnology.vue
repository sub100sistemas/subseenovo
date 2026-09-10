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
  sectionId: 'crm-tecnologia',
  sectionClass: undefined,
  containerClass: undefined,
  stackClass: undefined,
  headerBlockClass: undefined,
  titleClass: 'mx-auto desktop-full:max-w-[1000px]',
  descriptionClass: undefined,
  ctaWrapperClass: undefined,
  curveArrowSrc: '/icons/crm-tecnologia-seta-curva.svg',
  curveArrowClass: undefined,
  curveArrowStyle: () => ({
    right: '18.03px',
    top: '48px',
    width: '184.972px',
    height: '210.812px',
  }),
  mockupWrapperClass: undefined,
  showStar: true,
  starSrc: '/icons/crm-tecnologia-estrela.svg',
  starClass: undefined,
  starStyle: undefined,
  mockupSrc: '/images/modulos-crm/tecnologia-mockup-dashboard.png',
  mockupWidth: 3300,
  mockupHeight: 1938,
  mockupDensities: 'x1 x2',
  mockupSizes: 'mobile-lg:100vw tablet-lg:1000px desktop:1100px',
  mockupImgAttrs: () => ({
    alt: 'Mockup do painel Kanban de atendimentos do SUBSEE, mostrando menu lateral do CRM e cartões de clientes organizados por etapa de atendimento',
    class: 'mx-auto h-auto w-full max-w-[1100px]',
    loading: 'lazy',
  }),
})
</script>

<template>
  <Technology
    :section-id="sectionId"
    :section-class="sectionClass"
    :container-class="containerClass"
    :stack-class="stackClass"
    :header-block-class="headerBlockClass"
    :title-class="titleClass"
    :description-class="descriptionClass"
    :cta-wrapper-class="ctaWrapperClass"
    :curve-arrow-src="curveArrowSrc"
    :curve-arrow-class="curveArrowClass"
    :curve-arrow-style="curveArrowStyle"
    :mockup-wrapper-class="mockupWrapperClass"
    :show-star="showStar"
    :star-src="starSrc"
    :star-class="starClass"
    :star-style="starStyle"
    :mockup-src="mockupSrc"
    :mockup-width="mockupWidth"
    :mockup-height="mockupHeight"
    :mockup-densities="mockupDensities"
    :mockup-sizes="mockupSizes"
    :mockup-img-attrs="mockupImgAttrs"
  >
    <template #title>
      <slot name="title">
        A tecnologia que impulsiona <span class="text-brand">sua imobiliária</span>
      </slot>
    </template>

    <template #description>
      <slot name="description">
        Reduza o retrabalho no dia a dia da imobiliária, acompanhe o desempenho dos corretores e
        centralize atendimentos, propostas e negociações em um único sistema
      </slot>
    </template>

    <template #cta>
      <slot name="cta">
        <CtaButton variant="primary" to="/testar-gratis" class="whitespace-nowrap">
          Testar grátis por 30 dias
        </CtaButton>
      </slot>
    </template>
  </Technology>
</template>
