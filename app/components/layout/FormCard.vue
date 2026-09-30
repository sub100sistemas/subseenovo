<script setup lang="ts">
interface Props {
  cardClass?: string
  headerClass?: string
  textClass?: string
  titleClass?: string
  subtitleClass?: string
  rowClass?: string
}

withDefaults(defineProps<Props>(), {
  cardClass:
    'w-full rounded-2xl bg-white p-5 drop-shadow-[0px_10px_15px_rgba(93,95,239,0.2)] mobile-lg:p-10 desktop:min-h-[700px]',
  headerClass: 'mb-7 mobile-lg:mb-0 mobile-lg:h-[84px]',
  rowClass: 'flex items-center gap-[10px]',
  textClass: 'flex min-w-0 flex-col',
  titleClass: 'text-[20px] leading-[1.5] font-bold text-[#0f172a] mobile-lg:text-[22px]',
  subtitleClass: '-mt-[5px] text-[14px] leading-[1.5] text-[#64748b]'
})
</script>

<template>
  <div :class="cardClass">
    <div :class="headerClass">
      <div :class="rowClass">
        <slot name="icon" />
        <div :class="textClass">
          <h3 :class="titleClass">
            <slot name="title" />
          </h3>
          <p :class="subtitleClass">
            <slot name="subtitle" />
          </p>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>
