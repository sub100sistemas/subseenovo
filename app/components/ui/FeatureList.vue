<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <ul class="flex flex-col gap-2.5">
    <li v-for="item in items" :key="item" class="flex items-start gap-3">
      <span
        class="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal text-white"
        aria-hidden="true"
      >
        <IconCheck class="size-2.5" />
      </span>
      <span class="text-sm text-[#4F4F4F] tablet:text-base">{{ item }}</span>
    </li>
  </ul>
</template>
