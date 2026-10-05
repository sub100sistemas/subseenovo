<script setup lang="ts">
import {
  formAreaOptions,
  formContactOptions,
  formPhoneMasks,
  formProvisionalMessages,
  formStateOptions,
  formTermsLinks
} from '~/data/forms'
import type { FormFieldKey, FormPageConfig } from '~/types/forms'

interface FieldDefinition {
  key: FormFieldKey
  label: string
  placeholder: string
  required: boolean
  kind?: 'text' | 'select' | 'textarea'
  type?: string
  inputmode?: 'text' | 'tel' | 'email' | 'url'
  autocomplete?: string
  mask?: string[]
  fullWidth?: boolean
}

const props = defineProps<{
  config: FormPageConfig
}>()

const { fields, contactPreference, area, accepted, errors, status, submitError, submit, preloadRecaptcha } =
  useLeadForm(props.config)

const stateOptions = formStateOptions.map((state) => ({ value: state.sigla, label: state.nome }))

const fieldDefinitions = computed<FieldDefinition[]>(() => {
  const definitions: FieldDefinition[] = [
    {
      key: 'empresa',
      label: 'Empresa',
      placeholder: 'Nome da imobiliária',
      required: true,
      autocomplete: 'organization'
    },
    {
      key: 'contato',
      label: 'Nome completo',
      placeholder: 'Digite seu nome completo',
      required: true,
      autocomplete: 'name'
    },
    {
      key: 'site',
      label: 'Site',
      placeholder: 'www.suaimobiliaria.com.br',
      required: false,
      inputmode: 'url',
      autocomplete: 'url'
    },
    {
      key: 'phone',
      label: 'Telefone',
      placeholder: '(44) 90000-0000',
      required: true,
      type: 'tel',
      inputmode: 'tel',
      autocomplete: 'tel',
      mask: formPhoneMasks
    },
    {
      key: 'email',
      label: 'E-mail',
      placeholder: 'contato@suaimobiliaria.com.br',
      required: true,
      type: 'email',
      inputmode: 'email',
      autocomplete: 'email',
      fullWidth: true
    },
    {
      key: 'cidade',
      label: 'Cidade',
      placeholder: 'Maringá',
      required: true,
      autocomplete: 'address-level2'
    },
    { key: 'estado', label: 'Estado', placeholder: 'Selecione', required: true, kind: 'select' }
  ]
  if (props.config.message) {
    definitions.push({
      key: 'message',
      label: 'Mensagem',
      placeholder: props.config.message.placeholder,
      required: props.config.message.required ?? false,
      kind: 'textarea',
      fullWidth: true
    })
  }
  return definitions
})
</script>

<template>
  <div>
    <FormSubmitStatus
      :status="status"
      :success-message="formProvisionalMessages.success"
      :failure-message="submitError"
    />
    <form
      v-if="status !== 'success'"
      novalidate
      :class="['grid gap-x-4 gap-y-5 mobile-lg:grid-cols-2', status === 'failure' ? 'mt-5' : '']"
      @submit.prevent="submit"
      @focusin.once="preloadRecaptcha"
    >
      <FormField
        v-for="field in fieldDefinitions"
        :key="field.key"
        v-model="fields[field.key]"
        :label="field.label"
        :name="field.key"
        :kind="field.kind"
        :type="field.type"
        :placeholder="field.placeholder"
        :required="field.required"
        :inputmode="field.inputmode"
        :autocomplete="field.autocomplete"
        :mask="field.mask"
        :options="field.kind === 'select' ? stateOptions : undefined"
        :error="errors[field.key]"
        :disabled="status === 'submitting'"
        :class="field.fullWidth ? 'mobile-lg:col-span-2' : ''"
      />

      <FormChoiceGroup
        v-model="contactPreference"
        legend="Preferência de contato"
        name="contactPreference"
        mode="multiple"
        required
        :options="formContactOptions"
        :error="errors.contactPreference"
        class="mobile-lg:col-span-2"
      />

      <FormChoiceGroup
        v-model="area"
        legend="Área de atuação"
        name="area"
        mode="single"
        required
        :options="formAreaOptions"
        :error="errors.area"
        class="mobile-lg:col-span-2"
      />

      <FormCheckbox v-model="accepted" name="accepted" required :error="errors.accepted" class="mobile-lg:col-span-2">
        Li e aceito os
        <a :href="formTermsLinks.terms" :title="titleForLink(formTermsLinks.terms)" :aria-label="titleForLink(formTermsLinks.terms)" target="_blank" rel="noopener" class="font-medium underline">Termos de Uso</a>
        e a
        <a :href="formTermsLinks.privacy" :title="titleForLink(formTermsLinks.privacy)" :aria-label="titleForLink(formTermsLinks.privacy)" target="_blank" rel="noopener" class="font-medium underline">
          Política de Privacidade</a
        >.
      </FormCheckbox>

      <FormSubmitButton
        :loading="status === 'submitting'"
        :label-class="config.ctaClass"
        class="mobile-lg:col-span-2"
      >
        {{ config.ctaLabel }}
      </FormSubmitButton>
    </form>
  </div>
</template>
