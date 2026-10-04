export type FormFieldKey =
  | 'empresa'
  | 'contato'
  | 'site'
  | 'phone'
  | 'email'
  | 'cidade'
  | 'estado'
  | 'message'

export type ContactPreference = 'ligacao' | 'email' | 'whatsapp'

export type AreaOfActivity = 'urbana' | 'rural'

export type FormErrorKey = FormFieldKey | 'contactPreference' | 'area' | 'accepted'

export type FormSubmitState = 'idle' | 'submitting' | 'success' | 'failure'

export interface FormBenefit {
  icon: string
  title: string
  description: string
  iconSize?: number
}

export interface FormTrustItem {
  icon: string
  title: string
  description: string
}

export interface FormChoiceOption {
  value: string
  label: string
  icon: string
}

export interface FormStateOption {
  sigla: string
  nome: string
}

export interface FormMessageConfig {
  placeholder: string
  required?: boolean
}

export interface FormPageConfig {
  tipoMail?: string
  formSite?: string
  produto?: string
  thankYouPath?: string
  recaptchaAction?: string
  ctaLabel: string
  ctaClass?: string
  message?: FormMessageConfig
}

export interface LeadPayload {
  token?: string
  tipo_mail?: string
  formSite?: string
  empresa: string
  contato: string
  site: string
  phone: string
  email: string
  produto?: string
  cidade: string
  estado: string
  message?: string
  respostaWhatsapp: boolean
  respostaLigacao: boolean
  respostaEmail: boolean
  aceito: boolean
  traffic_source: string
}
