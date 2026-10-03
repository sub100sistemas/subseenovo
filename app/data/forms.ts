import type { FormChoiceOption, FormStateOption, FormTrustItem } from '~/types/forms'

export const formBadgeLabel = 'Seus dados estão seguros'

export const formPhoneMasks = ['(##) ####-####', '(##) #####-####']

export const formTrustItems: FormTrustItem[] = [
  {
    icon: '/icons/form-shield-check.svg',
    title: 'Mais de 26 anos de experiência',
    description: 'Tecnologia desenvolvida para o mercado imobiliário.'
  },
  {
    icon: '/icons/form-building-trust.svg',
    title: 'Milhares de imobiliárias confiam na SUB100',
    description: 'Soluções que geram resultados reais todos os dias.'
  },
  {
    icon: '/icons/form-lock.svg',
    title: 'Segurança e privacidade',
    description: 'Seus dados protegidos com os mais altos padrões.'
  }
]

export const formContactOptions: FormChoiceOption[] = [
  { value: 'ligacao', label: 'Ligação', icon: '/icons/form-phone.svg' },
  { value: 'email', label: 'E-mail', icon: '/icons/form-mail.svg' },
  { value: 'whatsapp', label: 'WhatsApp', icon: '/icons/form-message-circle.svg' }
]

export const formAreaOptions: FormChoiceOption[] = [
  { value: 'urbana', label: 'Urbana', icon: '/icons/form-building.svg' },
  { value: 'rural', label: 'Rural', icon: '/icons/form-leaf.svg' },
  { value: 'temporada', label: 'Temporada', icon: '/icons/form-sun.svg' }
]

export const formTermsLinks = {
  terms: '/lgpd/termos-de-uso/',
  privacy: '/lgpd/politica-de-privacidade/'
}

export const formStateOptions: FormStateOption[] = [
  { sigla: 'AC', nome: 'Acre' },
  { sigla: 'AL', nome: 'Alagoas' },
  { sigla: 'AP', nome: 'Amapá' },
  { sigla: 'AM', nome: 'Amazonas' },
  { sigla: 'BA', nome: 'Bahia' },
  { sigla: 'CE', nome: 'Ceará' },
  { sigla: 'DF', nome: 'Distrito Federal' },
  { sigla: 'ES', nome: 'Espírito Santo' },
  { sigla: 'GO', nome: 'Goiás' },
  { sigla: 'MA', nome: 'Maranhão' },
  { sigla: 'MT', nome: 'Mato Grosso' },
  { sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { sigla: 'MG', nome: 'Minas Gerais' },
  { sigla: 'PA', nome: 'Pará' },
  { sigla: 'PB', nome: 'Paraíba' },
  { sigla: 'PR', nome: 'Paraná' },
  { sigla: 'PE', nome: 'Pernambuco' },
  { sigla: 'PI', nome: 'Piauí' },
  { sigla: 'RJ', nome: 'Rio de Janeiro' },
  { sigla: 'RN', nome: 'Rio Grande do Norte' },
  { sigla: 'RS', nome: 'Rio Grande do Sul' },
  { sigla: 'RO', nome: 'Rondônia' },
  { sigla: 'RR', nome: 'Roraima' },
  { sigla: 'SC', nome: 'Santa Catarina' },
  { sigla: 'SP', nome: 'São Paulo' },
  { sigla: 'SE', nome: 'Sergipe' },
  { sigla: 'TO', nome: 'Tocantins' }
]

export const formProvisionalMessages = {
  required: 'Campo obrigatório.',
  invalidEmail: 'Informe um e-mail válido.',
  contactPreference: 'Selecione ao menos uma preferência de contato.',
  accepted: 'É necessário aceitar os termos para continuar.',
  success: 'Formulário enviado.',
  failure: 'Não foi possível enviar o formulário. Tente novamente.'
}
