<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
  open?: boolean
  answerClass?: string
}

interface Props {
  sectionId?: string
  sectionClass?: string
  containerClass?: string
  panelClass?: string
  headerClass?: string
  titleClass?: string
  descriptionClass?: string
  accordionClass?: string
  itemClass?: string
  summaryClass?: string
  questionClass?: string
  iconWrapperClass?: string
  iconClass?: string
  answerWrapperClass?: string
  answerClass?: string
  plusIconSrc?: string
  minusIconSrc?: string
  faqs?: FaqItem[]
}

const props = withDefaults(defineProps<Props>(), {
  sectionClass: 'section-py relative overflow-hidden',
  containerClass: 'mx-auto w-full max-w-[1400px] px-4 mobile-lg:px-6 tablet:px-8 desktop-full:px-0',
  panelClass:
    'rounded-[28px] bg-[#F5F5F5] px-6 py-10 tablet-lg:rounded-[40px] tablet-lg:px-16 tablet-lg:py-16 desktop-full:rounded-[50px] desktop-full:px-[198px] desktop-full:py-[120px]',
  headerClass: 'mx-auto max-w-[800px] text-center',
  titleClass: 'font-semibold desktop-full:text-[52px]',
  descriptionClass: 'mt-4 text-lg text-black tablet-lg:text-[20px] desktop-full:mt-[25px]',
  accordionClass: 'faq-accordion mt-10 desktop-full:mt-[25px]',
  itemClass: 'faq-item border-b border-[#404040]/20',
  summaryClass: 'flex cursor-pointer list-none items-center gap-[13px] pt-[30px] pb-[30px]',
  questionClass: 'flex-1 text-[18px] leading-[20px] font-semibold text-ink tablet-lg:text-[20px]',
  iconWrapperClass: 'icon-toggle relative size-[22px] shrink-0 tablet-lg:size-[30px]',
  iconClass: 'absolute inset-0 size-full',
  answerWrapperClass: 'pb-[30px]',
  answerClass: 'text-base leading-[26px] text-ink',
  plusIconSrc: undefined,
  minusIconSrc: undefined,
  faqs: () => []
})
</script>

<template>
  <section :id="sectionId" :class="sectionClass">
    <div :class="containerClass">
      <div :class="panelClass">
        <div :class="headerClass">
          <h2 :class="titleClass">
            <slot name="title" />
          </h2>
          <p :class="descriptionClass">
            <slot name="description" />
          </p>
        </div>

        <div :class="accordionClass">
          <details v-for="faq in faqs" :key="faq.question" :open="faq.open" :class="itemClass">
            <summary :class="summaryClass">
              <span :class="questionClass">
                {{ faq.question }}
              </span>
              <span :class="iconWrapperClass">
                <img
                  v-if="plusIconSrc"
                  :src="plusIconSrc"
                  alt=""
                  aria-hidden="true"
                  class="icon-plus"
                  :class="iconClass"
                />
                <img
                  v-if="minusIconSrc"
                  :src="minusIconSrc"
                  alt=""
                  aria-hidden="true"
                  class="icon-minus"
                  :class="iconClass"
                />
              </span>
            </summary>
            <div :class="answerWrapperClass">
              <p :class="[answerClass, faq.answerClass]">{{ faq.answer }}</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-accordion :deep(summary::-webkit-details-marker) {
  display: none;
}

.faq-accordion :deep(.icon-minus) {
  display: none;
}

.faq-accordion :deep(details[open] summary) {
  padding-bottom: 18px;
}

.faq-accordion :deep(details[open] .icon-plus) {
  display: none;
}

.faq-accordion :deep(details[open] .icon-minus) {
  display: block;
}
</style>