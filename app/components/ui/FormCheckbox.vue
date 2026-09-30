<script setup lang="ts">
interface Props {
  name: string
  required?: boolean
  error?: string
  wrapperClass?: string
  labelClass?: string
  boxClass?: string
  textClass?: string
  errorClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  required: false,
  error: undefined,
  wrapperClass: 'flex flex-col gap-1',
  labelClass: 'flex cursor-pointer items-center gap-[10px]',
  boxClass:
    'flex size-[18px] shrink-0 items-center justify-center rounded-[4px] border border-[#cbd5e1] bg-white text-white peer-checked:border-brand peer-checked:bg-brand peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand',
  textClass: 'text-[13px] leading-5 text-[#475569]',
  errorClass: 'text-[12px] leading-4 text-[#dc2626]'
})

const model = defineModel<boolean>({ default: false })

const errorId = computed(() => `${props.name}-error`)
</script>

<template>
  <div :class="wrapperClass">
    <label :class="labelClass">
      <input
        v-model="model"
        type="checkbox"
        :name="name"
        :required="required"
        :aria-invalid="error ? 'true' : undefined"
        :aria-describedby="error ? errorId : undefined"
        class="peer sr-only"
      />
      <span :class="[boxClass, error ? 'border-[#dc2626]!' : '']">
        <IconCheck v-if="model" class="size-3" />
      </span>
      <span :class="textClass"><slot /></span>
    </label>
    <p v-if="error" :id="errorId" role="alert" :class="errorClass">{{ error }}</p>
  </div>
</template>
