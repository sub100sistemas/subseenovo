<script setup lang="ts">
import { MaskInput } from 'maska'

type FieldKind = 'text' | 'select' | 'textarea'

interface FieldOption {
  value: string
  label: string
}

interface Props {
  label: string
  kind?: FieldKind
  type?: string
  name?: string
  placeholder?: string
  required?: boolean
  error?: string
  options?: FieldOption[]
  autocomplete?: string
  inputmode?: 'text' | 'tel' | 'email' | 'url' | 'numeric'
  mask?: string | string[]
  disabled?: boolean
  wrapperClass?: string
  labelClass?: string
  controlClass?: string
  errorClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  kind: 'text',
  type: 'text',
  name: undefined,
  placeholder: undefined,
  required: false,
  error: undefined,
  options: () => [],
  autocomplete: undefined,
  inputmode: undefined,
  mask: undefined,
  disabled: false,
  wrapperClass: 'flex min-w-0 flex-col gap-[6px]',
  labelClass: 'text-[13px] font-semibold text-[#0f172a]',
  controlClass:
    'w-full rounded-lg border bg-white text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60',
  errorClass: 'text-[12px] leading-4 text-[#dc2626]'
})

const model = defineModel<string>({ default: '' })

const id = useId()
const errorId = computed(() => `${id}-error`)

const control = useTemplateRef<HTMLInputElement>('control')
let maskInput: MaskInput | undefined

onMounted(() => {
  if (props.mask && control.value) {
    maskInput = new MaskInput(control.value, { mask: props.mask })
  }
})

onBeforeUnmount(() => maskInput?.destroy())

const borderClass = computed(() => (props.error ? 'border-[#dc2626]' : 'border-[#e2e8f0]'))
const wrapperKindClass = computed(() => (props.kind === 'textarea' ? 'pt-2' : ''))
const labelLeadingClass = computed(() => (props.kind === 'textarea' ? 'leading-[18px]' : 'leading-5'))
const kindClass = computed(() => {
  if (props.kind === 'textarea') {
    return 'min-h-24 resize-none rounded-[10px] px-[17px] py-[15px] text-[15px] leading-[22px] placeholder:text-[#757575]'
  }
  if (props.kind === 'select') {
    return 'h-[46px] cursor-pointer appearance-none py-3 pr-10 pl-[14px] text-[#475569]'
  }
  return 'h-[46px] px-[14px] py-3'
})
</script>

<template>
  <div :class="[wrapperClass, wrapperKindClass]">
    <label :for="id" :class="[labelClass, labelLeadingClass]">{{ required ? `${label} *` : label }}</label>

    <div v-if="kind === 'select'" class="relative">
      <select
        :id="id"
        v-model="model"
        :name="name"
        :required="required"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :aria-invalid="error ? 'true' : undefined"
        :aria-describedby="error ? errorId : undefined"
        :class="[controlClass, borderClass, kindClass]"
      >
        <option value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <img
        src="/icons/form-chevron-down.svg"
        alt="Seta para baixo" title="Seta para baixo"
        width="16"
        height="16"
        class="pointer-events-none absolute top-1/2 right-[14px] mt-[-8px] block"
      />
    </div>

    <textarea
      v-else-if="kind === 'textarea'"
      :id="id"
      v-model="model"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="error ? errorId : undefined"
      :class="[controlClass, borderClass, kindClass]"
    />

    <input
      v-else
      :id="id"
      ref="control"
      v-model="model"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :inputmode="inputmode"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="error ? errorId : undefined"
      :class="[controlClass, borderClass, kindClass]"
    />

    <p v-if="error" :id="errorId" role="alert" :class="errorClass">{{ error }}</p>
  </div>
</template>
