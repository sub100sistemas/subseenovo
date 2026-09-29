<script setup lang="ts">
import type { FormChoiceOption } from '~/types/forms'

type ChoiceMode = 'single' | 'multiple'

interface Props {
  legend: string
  options?: FormChoiceOption[]
  mode?: ChoiceMode
  name: string
  required?: boolean
  error?: string
  fieldsetClass?: string
  legendClass?: string
  rowClass?: string
  optionClass?: string
  iconClass?: string
  errorClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  mode: 'single',
  required: false,
  error: undefined,
  fieldsetClass: 'flex min-w-0 flex-col gap-2 border-0 p-0',
  legendClass: 'mb-2 p-0 text-[13px] leading-5 font-semibold text-[#0f172a]',
  rowClass: 'flex flex-col gap-3 mobile-lg:flex-row',
  optionClass:
    'flex h-10 min-w-0 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-4 py-[10px] text-[13px] leading-normal font-medium whitespace-nowrap text-[#475569] transition-colors has-[:checked]:border-brand has-[:checked]:bg-[#eef2ff] has-[:checked]:text-brand has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand',
  iconClass: 'block size-4 shrink-0 bg-current',
  errorClass: 'text-[12px] leading-4 text-[#dc2626]'
})

const model = defineModel<string | string[]>({ default: () => [] })

const errorId = computed(() => `${props.name}-error`)
const inputType = computed(() => (props.mode === 'multiple' ? 'checkbox' : 'radio'))

function isChecked(value: string) {
  return Array.isArray(model.value) ? model.value.includes(value) : model.value === value
}

function toggle(value: string) {
  if (props.mode === 'single') {
    model.value = value
    return
  }
  const current = Array.isArray(model.value) ? model.value : []
  model.value = current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
}

function iconStyle(src: string) {
  const mask = `url(${src}) center / contain no-repeat`
  return { mask, WebkitMask: mask }
}
</script>

<template>
  <fieldset :class="fieldsetClass" :aria-describedby="error ? errorId : undefined">
    <legend :class="legendClass">{{ required ? `${legend} *` : legend }}</legend>
    <div :class="rowClass">
      <label v-for="option in options" :key="option.value" :class="[optionClass, error ? 'border-[#dc2626]!' : '']">
        <input
          :type="inputType"
          :name="name"
          :value="option.value"
          :checked="isChecked(option.value)"
          class="sr-only"
          @change="toggle(option.value)"
        />
        <span :class="iconClass" :style="iconStyle(option.icon)" aria-hidden="true" />
        <span>{{ option.label }}</span>
      </label>
    </div>
    <p v-if="error" :id="errorId" role="alert" :class="errorClass">{{ error }}</p>
  </fieldset>
</template>
