<script setup lang="ts">
interface TestimonialLogo {
  src: string
  width: number
  height: number
  alt: string
}

interface TestimonialItem {
  id: string
  rating: number
  text: string
  logo: TestimonialLogo[]
  name: string
  role: string
  company: string
  order: number
}

interface Props {
  sectionId?: string
  sectionClass?: string
  containerClass?: string
  panelClass?: string
  decorativeWaveSrc?: string
  decorativeWaveClass?: string
  contentClass?: string
  introClass?: string
  titleClass?: string
  brandWrapperClass?: string
  brandLogoSrc?: string
  brandLogoWidth?: number
  brandLogoHeight?: number
  brandLogoAlt?: string
  brandLogoClass?: string
  cardsClass?: string
  cardClass?: string
  starsSrc?: string
  starsWidth?: number
  starsHeight?: number
  starsAlt?: string
  starsClass?: string
  quoteClass?: string
  openingQuoteSrc?: string
  openingQuoteClass?: string
  closingQuoteSrc?: string
  closingQuoteClass?: string
  profileClass?: string
  logosWrapperClass?: string
  logoItemClass?: string
  logoClass?: string
  nameClass?: string
  roleClass?: string
  companyClass?: string
  testimonials?: TestimonialItem[]
}

const props = withDefaults(defineProps<Props>(), {
  sectionClass: 'section-py relative overflow-hidden bg-white',
  containerClass: 'container-page',
  panelClass: 'relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[50px] bg-[#ebf4fe]',
  decorativeWaveSrc: '/icons/onda-decorativa-crm-depoimentos.svg',
  decorativeWaveClass:
    'pointer-events-none absolute left-[-260px] top-[-17px] block h-[194.642px] w-[1917.901px] max-w-none',
  contentClass:
    'relative flex flex-col items-center gap-10 px-6 py-10 tablet-lg:flex-row tablet-lg:items-stretch tablet-lg:gap-[3.571%] tablet-lg:px-0 tablet-lg:pt-[66px] tablet-lg:pb-[70px] tablet-lg:pl-[4.571%] tablet-lg:pr-[4.857%]',
  introClass:
    'flex w-full flex-col items-center justify-center gap-8 text-center tablet-lg:w-[29.143%] tablet-lg:shrink-0 tablet-lg:gap-[63.5px]',
  titleClass: 'text-center leading-[1.4]',
  brandWrapperClass: 'flex h-[85.489px] w-[275.775px] max-w-full items-center justify-center rounded-[20px] bg-white',
  brandLogoSrc: '/icons/logo-subsee-on-depoimentos.svg',
  brandLogoWidth: 183.919,
  brandLogoHeight: 45.17,
  brandLogoAlt: 'Logomarca SUBSEE on',
  brandLogoClass: 'h-[45.17px] w-[183.919px]',
  cardsClass: 'relative flex w-full flex-col items-center gap-[30px] overflow-hidden rounded-2xl bg-white p-[30px] shadow-[0px_2px_40px_-6px_rgba(103,105,240,0.1)] tablet-lg:w-[31.53%] tablet-lg:shrink-0',
  cardClass: '',
  starsSrc: '/icons/icone-estrelas-avaliacao.svg',
  starsWidth: 161,
  starsHeight: 27,
  starsAlt: 'Avaliação 5 estrelas',
  starsClass: 'shrink-0',
  quoteClass: 'flex-1 text-center text-base leading-[1.5] text-ink',
  openingQuoteSrc: '/icons/aspas-abertura.svg',
  openingQuoteClass: 'pointer-events-none absolute -left-[14px] bottom-[125px] w-[93px]',
  closingQuoteSrc: '/icons/aspas-fechamento.svg',
  closingQuoteClass: 'pointer-events-none absolute -left-[14px] bottom-[50px] w-[93px]',
  profileClass: 'flex w-full flex-col items-center',
  logosWrapperClass: 'flex w-full flex-col items-center gap-3',
  logoItemClass: 'flex h-[65px] w-full items-center justify-center',
  logoClass: 'h-auto max-h-full w-auto',
  nameClass: 'mt-[21px] text-[17.6px] leading-none font-bold text-brand',
  roleClass: 'mt-1 text-sm leading-[17.5px] text-ink',
  companyClass: 'mt-1 text-sm leading-[17.5px] text-ink',
  testimonials: () => []
})
</script>

<template>
  <section :id="sectionId" :class="sectionClass">
    <div :class="containerClass">
      <div :class="panelClass">
        <img
          v-if="decorativeWaveSrc"
          :src="decorativeWaveSrc"
          :alt="imageLabel(decorativeWaveSrc)" :title="imageLabel(decorativeWaveSrc)"
          aria-hidden="true"
          :class="decorativeWaveClass"
        />

        <div :class="contentClass">
          <div :class="introClass">
            <h2 :class="titleClass">
              <slot name="title">
                O que <span class="text-brand">nossos clientes</span><br />
                falam dos nossos<br />
                produtos e serviços
              </slot>
            </h2>

            <div :class="brandWrapperClass">
              <img
                v-if="brandLogoSrc"
                :src="brandLogoSrc"
                :width="brandLogoWidth"
                :height="brandLogoHeight"
                :alt="brandLogoAlt || imageLabel(brandLogoSrc)" :title="brandLogoAlt || imageLabel(brandLogoSrc)"
                :class="brandLogoClass"
              />
            </div>
          </div>

          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            :class="[cardsClass, cardClass || undefined]"
          >
            <img
              v-if="starsSrc"
              :src="starsSrc"
              :width="starsWidth"
              :height="starsHeight"
              :alt="starsAlt || imageLabel(starsSrc)" :title="starsAlt || imageLabel(starsSrc)"
              :class="starsClass"
            />

            <blockquote :class="quoteClass">
              {{ testimonial.text }}
            </blockquote>

            <img
              v-if="openingQuoteSrc"
              :src="openingQuoteSrc"
              :alt="imageLabel(openingQuoteSrc)" :title="imageLabel(openingQuoteSrc)"
              aria-hidden="true"
              :class="openingQuoteClass"
            />
            <img
              v-if="closingQuoteSrc"
              :src="closingQuoteSrc"
              :alt="imageLabel(closingQuoteSrc)" :title="imageLabel(closingQuoteSrc)"
              aria-hidden="true"
              :class="closingQuoteClass"
            />

            <div :class="profileClass">
              <div :class="logosWrapperClass">
                <div v-for="logo in testimonial.logo" :key="logo.src" :class="logoItemClass">
                  <img
                    :src="logo.src"
                    :width="logo.width"
                    :height="logo.height"
                    :alt="logo.alt || imageLabel(logo.src)" :title="logo.alt || imageLabel(logo.src)"
                    :class="logoClass"
                  />
                </div>
              </div>

              <p :class="nameClass">{{ testimonial.name }}</p>
              <p :class="roleClass">{{ testimonial.role }}</p>
              <p :class="companyClass">{{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
