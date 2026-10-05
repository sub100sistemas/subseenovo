<script setup lang="ts">
interface Props {
  label: string
  badgeClass?: string
  labelClass?: string
}

withDefaults(defineProps<Props>(), {
  badgeClass: 'inline-flex w-fit items-center gap-2 rounded-full bg-[#f4f4fb] px-4 py-[10px]',
  labelClass: 'text-[13px] leading-normal font-medium whitespace-nowrap text-brand'
})
</script>

<template>
  <p :class="badgeClass">
    <img src="/icons/form-shield.svg" alt="Ícone de proteção de dados" title="Ícone de proteção de dados" width="16" height="16" class="block shrink-0" />
    <span :class="labelClass">{{ label }}</span>
  </p>
</template>
