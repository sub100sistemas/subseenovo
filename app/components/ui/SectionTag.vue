<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center gap-2 text-sm tablet:text-base font-semibold text-brand"
  >
    <span
      class="size-2.5 rounded-full bg-teal shadow-[0_0_0_4px_rgba(28,217,164,0.36)]"
      aria-hidden="true"
    />
    {{ label }}
  </span>
</template>
