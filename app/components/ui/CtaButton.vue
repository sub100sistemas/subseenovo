<script setup lang="ts">
type Variant = 'primary' | 'outline' | 'outline-teal' | 'small'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    to?: string
    icon?: boolean
  }>(),
  {
    variant: 'primary',
    icon: undefined
  }
)

const showIcon = computed(() => props.icon ?? props.variant === 'primary')

const NuxtLink = resolveComponent('NuxtLink')

const classesByVariant: Record<Variant, string> = {
  primary:
    'min-h-14 rounded-xl bg-brand px-6 py-3 text-white text-base font-normal hover:bg-brand/90',
  outline:
    'min-h-14 rounded-xl border border-[#D1D5DB] px-6 py-3 text-[#374151] text-base font-normal hover:bg-black/[.02]',
  'outline-teal':
    'min-h-14 rounded-xl border border-teal px-6 py-3 text-teal text-base font-medium hover:bg-teal/5',
  small:
    'min-h-11 tablet:min-h-13 rounded-[5px] border border-brand px-5 py-2 text-brand text-sm tablet:text-base font-bold hover:bg-brand/5'
}
</script>

<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    class="inline-flex self-center items-center justify-center gap-2 text-center transition-colors tablet-lg:self-auto"
    :class="classesByVariant[variant]"
  >
    <slot />
    <IconArrowRight v-if="showIcon" class="size-5 shrink-0" />
  </component>
</template>
