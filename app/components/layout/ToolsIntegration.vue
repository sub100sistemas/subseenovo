<script setup lang="ts">
export interface ToolsStep {
  number: string
  title: string
  description: string
  icon: string
  circleClass: string
  badgeClass: string
  status?: string
}

withDefaults(
  defineProps<{
    sectionId?: string
    sectionClass?: string
    containerClass?: string
    panelClass?: string
    rowClass?: string
    contentClass?: string
    titleClass?: string
    descriptionClass?: string
    eyebrow?: string
    eyebrowClass?: string
    steps?: ToolsStep[]
    gridClass?: string
    connectorOneClass?: string
    connectorTwoClass?: string
    arrowOneSrc?: string
    arrowTwoSrc?: string
    stepTitleClass?: string
    stepDescriptionClass?: string
    statusIconSrc?: string
    statusClass?: string
    statusLabelClass?: string
    diagramWrapperClass?: string
    diagramSrc?: string
    diagramWidth?: number
    diagramHeight?: number
    diagramSizes?: string
    diagramAlt?: string
    diagramClass?: string
  }>(),
  {
    sectionId: undefined,
    sectionClass: 'section-py',
    containerClass: 'container-page',
    panelClass:
      'rounded-[24px] bg-[#f5f5f5] px-6 py-10 tablet-lg:rounded-[50px] tablet-lg:px-[5.4%] tablet-lg:py-[69px]',
    rowClass:
      'flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:justify-between tablet-lg:gap-0',
    contentClass: 'w-full tablet-lg:w-[55.4%]',
    titleClass: 'leading-[1.2] desktop-full:text-[45px]',
    descriptionClass:
      'mt-4 text-base leading-[1.4] text-ink tablet-lg:text-[18px] desktop-full:mt-10 desktop-full:text-[24px]',
    eyebrow: '',
    eyebrowClass:
      'mt-10 text-[14px] font-semibold uppercase leading-[1.2] tracking-[1.12px] text-brand',
    steps: () => [],
    gridClass: 'relative mt-[18px] grid grid-cols-1 gap-10 tablet:grid-cols-3 tablet:gap-0',
    connectorOneClass: 'bg-[rgba(92,94,240,0.42)]',
    connectorTwoClass: 'bg-[rgba(20,184,178,0.42)]',
    arrowOneSrc: '/icons/site-urbano-tools-seta-conector-1.svg',
    arrowTwoSrc: '/icons/site-urbano-tools-seta-conector-2.svg',
    stepTitleClass: 'mt-[26px] text-[16px] font-semibold leading-[1.25] text-ink',
    stepDescriptionClass: 'mt-[5px] max-w-[168px] text-[14px] leading-[1.45] text-ink',
    statusIconSrc: '/icons/site-urbano-tools-check-status.svg',
    statusClass:
      'mt-2 flex h-8 w-[168px] max-w-full items-center justify-center gap-[7px] rounded-[16px] bg-[#d9f7e5] pr-[12px] pl-[10px]',
    statusLabelClass: 'text-[13px] font-semibold whitespace-nowrap text-[#0d9e5c]',
    diagramWrapperClass: 'w-full tablet-lg:w-[40.2%]',
    diagramSrc: '',
    diagramWidth: 1084,
    diagramHeight: 1180,
    diagramSizes: 'mobile-lg:100vw tablet-lg:360px desktop:440px desktop-full:542px',
    diagramAlt: '',
    diagramClass: 'mx-auto h-auto w-full max-w-[542px]'
  }
)
</script>

<template>
  <section :id="sectionId" :class="sectionClass">
    <div :class="containerClass">
      <div :class="panelClass">
        <div :class="rowClass">
          <div :class="contentClass">
            <h2 :class="titleClass">
              <slot name="title" />
            </h2>
            <p :class="descriptionClass">
              <slot name="description" />
            </p>

            <p v-if="eyebrow" :class="eyebrowClass">
              {{ eyebrow }}
            </p>

            <div :class="gridClass">
              <div
                class="pointer-events-none absolute hidden h-[2px] tablet:block"
                :class="connectorOneClass"
                style="top: 41px; left: calc(16.6667% + 42px); right: calc(50% + 42px)"
              ></div>
              <div
                class="pointer-events-none absolute hidden h-[2px] tablet:block"
                :class="connectorTwoClass"
                style="top: 41px; left: calc(50% + 42px); right: calc(16.6667% + 42px)"
              ></div>
              <img
                :src="arrowOneSrc"
                alt=""
                aria-hidden="true"
                class="pointer-events-none absolute hidden size-[18px] tablet:block"
                style="top: 33px; left: calc(33.3333% - 9px)"
              />
              <img
                :src="arrowTwoSrc"
                alt=""
                aria-hidden="true"
                class="pointer-events-none absolute hidden size-[18px] tablet:block"
                style="top: 33px; left: calc(66.6667% - 9px)"
              />

              <div
                v-for="step in steps"
                :key="step.number"
                class="flex flex-col items-center text-center"
              >
                <div
                  class="relative flex size-[84px] items-center justify-center rounded-full"
                  :class="step.circleClass"
                >
                  <img :src="step.icon" alt="" aria-hidden="true" class="size-10" />
                  <span
                    class="absolute inset-x-0 -bottom-[18px] mx-auto flex size-8 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                    :class="step.badgeClass"
                  >
                    {{ step.number }}
                  </span>
                </div>

                <p :class="stepTitleClass">{{ step.title }}</p>
                <p :class="stepDescriptionClass">{{ step.description }}</p>

                <div v-if="step.status" :class="statusClass">
                  <img
                    :src="statusIconSrc"
                    alt=""
                    aria-hidden="true"
                    class="size-[17px] shrink-0"
                  />
                  <span :class="statusLabelClass">{{ step.status }}</span>
                </div>
              </div>
            </div>
          </div>

          <div :class="diagramWrapperClass">
            <NuxtImg
              :src="diagramSrc"
              :width="diagramWidth"
              :height="diagramHeight"
              :sizes="diagramSizes"
              :alt="diagramAlt"
              :class="diagramClass"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
