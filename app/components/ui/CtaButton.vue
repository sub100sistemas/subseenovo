<script setup lang="ts">
type Variant = 'primary' | 'outline' | 'outline-teal' | 'small' | 'success'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    to?: string
    href?: string
    icon?: boolean
  }>(),
  {
    variant: 'primary',
    icon: undefined
  }
)

const showIcon = computed(() => props.icon ?? (props.variant === 'primary' || props.variant === 'success'))

const NuxtLink = resolveComponent('NuxtLink')

const linkAttrs = computed(() =>
  props.href ? { href: props.href, target: '_blank', rel: 'noopener' } : { to: props.to }
)

const classesByVariant: Record<Variant, string> = {
  primary:
    'min-h-14 rounded-xl bg-brand px-6 py-3 text-white text-base font-normal hover:bg-brand/90',
  outline:
    'min-h-14 rounded-xl border border-[#D1D5DB] px-6 py-3 text-[#374151] text-base font-normal hover:bg-black/[.02]',
  'outline-teal':
    'min-h-14 rounded-xl border border-teal px-6 py-3 text-teal text-base font-medium hover:bg-teal/5',
  small:
    'min-h-11 tablet:min-h-13 rounded-[5px] border border-brand px-5 py-2 text-brand text-sm tablet:text-base font-bold hover:bg-brand/5',
  success:
    'h-[52px] w-full max-w-[406px] gap-[10px]! rounded-xl bg-teal-link px-4 text-base leading-[22px] font-normal text-white drop-shadow-[0px_6px_10px_rgba(93,95,239,0.25)] hover:opacity-95 tablet-lg:text-[20px]'
}
</script>

<template>
  <component
    :is="href ? 'a' : to ? NuxtLink : 'button'"
    v-bind="linkAttrs"
    :title="titleForLink(to ?? href)" :aria-label="titleForLink(to ?? href)"
    class="inline-flex self-center items-center justify-center gap-2 text-center transition-colors tablet-lg:self-auto"
    :class="classesByVariant[variant]"
  >
    <slot />
    <img v-if="showIcon && variant === 'success'" src="/icons/form-arrow-right.svg" alt="Seta para a direita" title="Seta para a direita" width="18" height="18" class="block shrink-0" />
    <IconArrowRight v-else-if="showIcon" class="size-5 shrink-0" />
  </component>
</template>
