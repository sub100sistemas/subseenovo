import { formProvisionalMessages } from '~/data/forms'
import type {
  FormErrorKey,
  FormFieldKey,
  FormPageConfig,
  FormSubmitState,
  LeadPayload
} from '~/types/forms'

type FieldErrors = Partial<Record<FormErrorKey, string>>

const requiredFields: FormFieldKey[] = ['empresa', 'contato', 'phone', 'email', 'cidade', 'estado']

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function useLeadForm(config: FormPageConfig) {
  const runtimeConfig = useRuntimeConfig()
  const recaptcha = useRecaptchaV3()
  const trafficSource = useCookie<string | null>('__trf.src', { readonly: true })

  const fields = reactive<Record<FormFieldKey, string>>({
    empresa: '',
    contato: '',
    site: '',
    phone: '',
    email: '',
    cidade: '',
    estado: '',
    message: ''
  })
  const contactPreference = ref<string[]>([])
  const area = ref('')
  const accepted = ref(false)

  const errors = ref<FieldErrors>({})
  const status = ref<FormSubmitState>('idle')
  const submitError = ref('')
  const attempted = ref(false)

  function collectErrors(): FieldErrors {
    const found: FieldErrors = {}
    for (const key of requiredFields) {
      const value = key === 'phone' ? fields.phone.replace(/\D/g, '') : fields[key].trim()
      if (!value) {
        found[key] = formProvisionalMessages.required
      }
    }
    if (!found.email && !emailPattern.test(fields.email.trim())) {
      found.email = formProvisionalMessages.invalidEmail
    }
    if (config.message?.required && !fields.message.trim()) {
      found.message = formProvisionalMessages.required
    }
    if (!area.value) {
      found.area = formProvisionalMessages.required
    }
    if (contactPreference.value.length === 0) {
      found.contactPreference = formProvisionalMessages.contactPreference
    }
    if (!accepted.value) {
      found.accepted = formProvisionalMessages.accepted
    }
    return found
  }

  function validate(): boolean {
    attempted.value = true
    errors.value = collectErrors()
    return Object.keys(errors.value).length === 0
  }

  watch(
    [fields, contactPreference, area, accepted],
    () => {
      if (attempted.value) {
        errors.value = collectErrors()
      }
    },
    { deep: true }
  )

  function buildPayload(token?: string): LeadPayload {
    const payload: LeadPayload = {
      empresa: fields.empresa.trim(),
      contato: fields.contato.trim(),
      site: fields.site.trim(),
      phone: fields.phone.trim(),
      email: fields.email.trim(),
      cidade: fields.cidade.trim(),
      estado: fields.estado,
      respostaLigacao: contactPreference.value.includes('ligacao'),
      respostaEmail: contactPreference.value.includes('email'),
      respostaWhatsapp: contactPreference.value.includes('whatsapp'),
      aceito: accepted.value,
      traffic_source: trafficSource.value ?? ''
    }
    if (token) {
      payload.token = token
    }
    if (config.tipoMail) {
      payload.tipo_mail = config.tipoMail
    }
    if (config.formSite) {
      payload.formSite = config.formSite
    }
    if (config.message) {
      payload.message = fields.message.trim()
    }
    return payload
  }

  async function submit() {
    if (status.value === 'submitting') {
      return
    }
    if (!validate()) {
      return
    }
    status.value = 'submitting'
    submitError.value = ''
    try {
      const token = await recaptcha.getToken(config.recaptchaAction)
      const response = await $fetch(String(runtimeConfig.public.formsEndpoint), {
        method: 'POST',
        body: buildPayload(token)
      })
      if (!isSuccessResponse(response)) {
        throw new Error('submit-rejected')
      }
      status.value = 'success'
    } catch {
      submitError.value = formProvisionalMessages.failure
      status.value = 'failure'
    }
  }

  return {
    fields,
    contactPreference,
    area,
    accepted,
    errors,
    status,
    submitError,
    submit,
    preloadRecaptcha: recaptcha.preload
  }
}
