<script setup lang="ts">
import type { FormSubmitState } from '~/types/forms'

interface Props {
  status: FormSubmitState
  successMessage: string
  failureMessage: string
  successClass?: string
  failureClass?: string
}

withDefaults(defineProps<Props>(), {
  successClass: 'rounded-lg border border-[#e2e8f0] bg-[#f4f4fb] px-4 py-3 text-[14px] leading-normal text-ink',
  failureClass: 'rounded-lg border border-[#dc2626] px-4 py-3 text-[14px] leading-normal text-[#dc2626]'
})
</script>

<template>
  <p v-if="status === 'success'" role="status" :class="successClass">{{ successMessage }}</p>
  <p v-else-if="status === 'failure'" role="alert" :class="failureClass">{{ failureMessage }}</p>
</template>
