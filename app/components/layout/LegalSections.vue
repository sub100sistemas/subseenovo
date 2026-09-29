<script setup lang="ts">
import type { LegalSection } from '~/data/lgpd-types'

interface Props {
  sections: LegalSection[]
  wrapperClass?: string
  listClass?: string
  paragraphsClass?: string
  subsectionsClass?: string
  subCardRadiusClass?: string
}

withDefaults(defineProps<Props>(), {
  wrapperClass: 'w-full px-4 mobile-lg:px-6 tablet:px-8',
  listClass: 'mx-auto flex w-full max-w-[992px] flex-col gap-6 tablet-lg:gap-12',
  paragraphsClass: 'flex flex-col gap-[1lh]',
  subsectionsClass: 'flex flex-col gap-6',
  subCardRadiusClass: 'rounded-[18px]'
})
</script>

<template>
  <div :class="wrapperClass">
    <div :class="listClass">
      <LegalCard
        v-for="section in sections"
        :key="section.id"
        v-bind="section.bodyClass ? { bodyClass: section.bodyClass } : {}"
      >
        <template #title>{{ section.title }}</template>

        <div v-if="section.paragraphs?.length" :class="paragraphsClass">
          <p v-for="(paragraph, paragraphIndex) in section.paragraphs" :key="paragraphIndex">
            <template v-for="(line, lineIndex) in paragraph.lines" :key="lineIndex"
              ><br v-if="lineIndex > 0" />{{ line }}</template
            >
          </p>
        </div>

        <div v-if="section.subsections?.length" :class="subsectionsClass">
          <LegalSubCard
            v-for="subsection in section.subsections"
            :key="subsection.label"
            :radius-class="subCardRadiusClass"
          >
            <template #label>{{ subsection.label }}</template>
            <div :class="paragraphsClass">
              <p v-for="(paragraph, paragraphIndex) in subsection.paragraphs" :key="paragraphIndex">
                <template v-for="(line, lineIndex) in paragraph.lines" :key="lineIndex"
                  ><br v-if="lineIndex > 0" />{{ line }}</template
                >
              </p>
            </div>
          </LegalSubCard>
        </div>
      </LegalCard>
    </div>
  </div>
</template>
