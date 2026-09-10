<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string
    bordered?: boolean
  }>(),
  { bordered: false }
)
</script>

<template>
  <component
    :is="to ? 'NuxtLink' : 'button'"
    :to="to"
    class="inline-flex items-center gap-1.5 text-teal-link font-medium transition-colors hover:opacity-80"
    :class="
      bordered
        ? 'min-h-14 w-full max-w-[220px] justify-center rounded-xl border border-teal-link px-4 py-3 text-center text-sm tablet:text-base'
        : 'text-base'
    "
  >
    <slot>Saiba mais</slot>
    <span aria-hidden="true" class="font-bold">→</span>
  </component>
</template>
