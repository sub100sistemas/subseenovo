<script setup lang="ts">
import type { FormTrustItem } from '~/types/forms'

interface Props {
  items?: FormTrustItem[]
  sectionClass?: string
  containerClass?: string
  listClass?: string
  itemClass?: string
  circleClass?: string
  textClass?: string
  titleClass?: string
  descriptionClass?: string
}

withDefaults(defineProps<Props>(), {
  items: () => [],
  sectionClass: 'rounded-2xl border border-[#eceff4]',
  containerClass: 'container-page py-8 tablet-lg:py-[39px]',
  listClass:
    'flex flex-col gap-6 tablet-lg:flex-row tablet-lg:flex-wrap tablet-lg:items-center tablet-lg:justify-center tablet-lg:gap-x-[17px] tablet-lg:px-5',
  itemClass: 'flex items-center gap-4 tablet-lg:min-h-[68px]',
  circleClass: 'flex size-12 shrink-0 items-center justify-center rounded-3xl bg-[#f0f1fb]',
  textClass: 'flex flex-col gap-1 desktop-full:whitespace-nowrap',
  titleClass: 'text-base leading-[1.2] font-bold text-ink',
  descriptionClass: 'text-sm leading-[1.3] text-[#666]'
})
</script>

<template>
  <section :class="sectionClass">
    <div :class="containerClass">
      <ul :class="listClass">
        <li v-for="item in items" :key="item.title" :class="itemClass">
          <span :class="circleClass">
            <img :src="item.icon" alt="" width="30" height="30" class="block shrink-0" />
          </span>
          <span :class="textClass">
            <span :class="titleClass">{{ item.title }}</span>
            <span :class="descriptionClass">{{ item.description }}</span>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>
