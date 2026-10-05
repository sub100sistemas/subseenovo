<script setup lang="ts">
interface Props {
  loading?: boolean
  loadingLabel?: string
  disabled?: boolean
  buttonClass?: string
  labelClass?: string
}

withDefaults(defineProps<Props>(), {
  loading: false,
  loadingLabel: 'Enviando...',
  disabled: false,
  buttonClass:
    'flex h-[52px] w-full items-center justify-center gap-[10px] rounded-xl bg-[linear-gradient(106.15deg,#5d5fef_1.6%,#4042cc_110.35%)] px-4 text-white drop-shadow-[0px_6px_10px_rgba(93,95,239,0.25)] transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-70',
  labelClass: 'text-[15px] leading-normal font-semibold'
})
</script>

<template>
  <button type="submit" :class="buttonClass" :disabled="disabled || loading" :aria-busy="loading ? 'true' : undefined">
    <span :class="labelClass">
      <template v-if="loading">{{ loadingLabel }}</template>
      <slot v-else />
    </span>
    <IconSpinner v-if="loading" class="size-[18px]" />
    <img v-else src="/icons/form-arrow-right.svg" alt="Seta para a direita" title="Seta para a direita" width="18" height="18" class="block shrink-0" />
  </button>
</template>
