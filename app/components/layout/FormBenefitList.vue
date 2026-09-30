<script setup lang="ts">
import type { FormBenefit } from '~/types/forms'

interface Props {
  items?: FormBenefit[]
  wrapperClass?: string
  listClass?: string
  itemClass?: string
  chipClass?: string
  textClass?: string
  titleClass?: string
  descriptionClass?: string
}

withDefaults(defineProps<Props>(), {
  items: () => [],
  wrapperClass: 'flex flex-col gap-10 pt-5',
  listClass: 'flex flex-col gap-10',
  itemClass: 'flex items-center gap-4',
  chipClass:
    'flex size-[60px] shrink-0 items-center justify-center rounded-2xl bg-white drop-shadow-[0px_8px_12px_rgba(49,56,70,0.12)]',
  textClass: 'flex min-w-0 flex-1 flex-col gap-1',
  titleClass: 'text-[18px] leading-[22px] font-semibold text-ink tablet-lg:text-[20px]',
  descriptionClass: 'text-[15px] leading-5 text-[#666] tablet-lg:text-[16px]'
})
</script>

<template>
  <div :class="wrapperClass">
    <ul :class="listClass">
      <li v-for="item in items" :key="item.title" :class="itemClass">
        <span :class="chipClass">
          <img
            :src="item.icon"
            alt=""
            :width="item.iconSize ?? 30"
            :height="item.iconSize ?? 30"
            class="block shrink-0"
          />
        </span>
        <span :class="textClass">
          <span :class="titleClass">{{ item.title }}</span>
          <span :class="descriptionClass">{{ item.description }}</span>
        </span>
      </li>
    </ul>
    <slot name="footer" />
  </div>
</template>
