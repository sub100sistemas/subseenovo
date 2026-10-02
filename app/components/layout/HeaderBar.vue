<script setup lang="ts">
const props = defineProps<{ isPastHero: boolean }>()

const modulosNavItem = { label: 'Módulos', to: '/modulos' }

const navItems = [
  modulosNavItem,
  { label: 'Eventos', to: '/eventos/' },
  { label: 'Preços', to: '/planos-e-precos/' },
  { label: 'Portal de Imóveis', href: 'https://sub100.com.br/' },
  { label: 'Blog', href: 'https://blog.sub100sistemas.com.br/' },
  { label: 'Sobre a SUB100', href: 'https://sub100sistemas.com.br/' }
]

const restNavItems = navItems.filter((item) => item !== modulosNavItem)

const modulosColumns = [
  {
    title: 'CRM PARA IMOBILIÁRIAS',
    items: [
      {
        icon: '/icons/menu-icone-crm-generico.svg',
        label: 'CRM Imobiliário',
        description: 'Inteligência artificial, automações e integrações, conheça todos os recursos inovadores da plataforma',
        to: '/modulos/crm/'
      },
      {
        icon: '/icons/menu-icone-crm-urbano.svg',
        label: 'CRM Imobiliário Urbano',
        description: 'Gerencie imóveis urbanos, clientes e negociações em plataforma prática e integrada para sua equipe.',
        to: '/modulos/crm-imobiliario-urbano/'
      },
      {
        icon: '/icons/menu-icone-crm-rural.svg',
        label: 'CRM Imobiliário Rural',
        description: 'Gerencie imóveis rurais, clientes e negociações em uma plataforma prática e integrada para sua equipe.',
        to: '/modulos/crm-imobiliario-rural/'
      },
      {
        icon: '/icons/menu-icone-crm-temporada.svg',
        label: 'CRM para Temporada',
        description: 'Gerencie reservas, check-in/check-out e locações por temporada em uma plataforma completa',
        to: '/modulos/crm-imobiliario-temporada/'
      }
    ]
  },
  {
    title: 'SITES & HOTSITES',
    items: [
      {
        icon: '/icons/menu-icone-site-urbanas.svg',
        label: 'Site para Imobiliárias Urbanas',
        description: 'Crie sites modernos para imobiliárias urbanas, apresente imóveis e gere oportunidades de negócio.',
        to: '/modulos/site-para-imobiliarias-urbanas/'
      },
      {
        icon: '/icons/menu-icone-site-portais.svg',
        label: 'Site para Imobiliárias Rurais',
        description: 'Crie sites modernos para imobiliárias rurais, apresente imóveis e gere novas oportunidades de negócio.',
        to: '/modulos/site-para-imobiliarias-rurais/'
      },
      {
        icon: '/icons/menu-icone-site-loteadoras.svg',
        label: 'Site para Loteadoras',
        description: 'Crie sites modernos para empreendimentos e gere novas oportunidades de negócio.',
        to: '/modulos/site-para-loteadoras/',
        badge: { text: 'breve', bg: '#ea4335', color: '#ffffff' }
      }
    ]
  },
  {
    title: 'INTEGRAÇÕES E HABILIDADES',
    banner: true,
    items: [
      {
        icon: '/icons/menu-icone-apis-hub.svg',
        label: 'APIs & HUB integrador',
        description: 'Integre seu sistema de loteamento com outras ferramentas através de APIs.',
        to: '/modulos/apis-hub-integrador/'
      },
      {
        icon: '/icons/menu-icone-base-conhecimento.svg',
        label: 'Base de conhecimento',
        description: 'Implantação e suporte humanizado, eventos on-line, tutoriais com vídeos, **pergunte ao SUBSEE - IA**',
        to: '/modulos/base-de-conhecimento/',
        badge: { text: 'novo', bg: '#ffc107', color: '#313846' }
      }
    ]
  }
]

const isModulosOpen = ref(false)
const isMenuOpen = ref(false)
const isMobileModulosOpen = ref(false)
const mobileNavId = `mobile-nav-${useId()}`

const modulosMobileItems = modulosColumns.flatMap((col) => col.items.map((item) => ({ label: item.label, to: item.to })))

const socialLinks = [
  { label: 'Facebook da SUB100', href: 'https://www.facebook.com/sub100brasil', icon: '/icons/social-facebook.svg' },
  { label: 'Instagram da SUB100', href: 'https://www.instagram.com/sub100brasil/', icon: '/icons/social-instagram.svg' },
  { label: 'LinkedIn da SUB100', href: 'https://www.linkedin.com/company/sub100/', icon: '/icons/social-linkedin.svg' },
  { label: 'Blog da SUB100', href: 'https://blog.sub100sistemas.com.br/', icon: '/icons/social-blog.svg' }
]

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (!open) isMobileModulosOpen.value = false
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})

const modulosTriggerEl = ref<HTMLElement | null>(null)
const modulosDropdownEl = ref<HTMLElement | null>(null)

function toEl(value: unknown): HTMLElement | null {
  if (!value) return null
  return (value as { $el?: HTMLElement }).$el ?? (value as HTMLElement)
}

function handleModulosLeave(event: MouseEvent) {
  const related = event.relatedTarget as Node | null
  const trigger = toEl(modulosTriggerEl.value)
  const dropdown = toEl(modulosDropdownEl.value)
  if (related && (trigger?.contains(related) || dropdown?.contains(related))) {
    return
  }
  isModulosOpen.value = false
}

const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    isModulosOpen.value = false
    isMenuOpen.value = false
  }
)

watch(
  () => props.isPastHero,
  () => {
    isModulosOpen.value = false
  }
)

function splitDescription(description: string) {
  const parts = description.split('**')
  return parts.map((part, i) => ({ text: part, bold: i % 2 === 1 }))
}
</script>

<template>
  <div class="relative">
    <div data-header-row class="container-page flex h-[64px] items-center justify-between gap-3 mobile-lg:h-[85px]">
      <NuxtLink to="/" class="shrink-0">
        <NuxtImg
          src="/icons/logo-sub100-imobiliarias.svg"
          width="158"
          height="44"
          alt="SUB100 Imobiliárias"
          class="h-auto w-[120px] tablet:w-[140px] desktop-compact:w-[158px]"
        />
      </NuxtLink>

      <nav data-modulos-nav class="hidden h-full items-center desktop-compact:flex" aria-label="Menu principal">
        <button
          ref="modulosTriggerEl"
          type="button"
          class="cursor-pointer flex h-full cursor-pointer items-center border-0 bg-transparent px-4 text-[16px] text-brand transition-colors hover:font-medium hover:text-[#1CD9A4]"
          :aria-expanded="isModulosOpen"
          aria-haspopup="true"
          @mouseenter="isModulosOpen = true"
          @mouseleave="handleModulosLeave"
        >
          {{ modulosNavItem.label }}
        </button>

        <template v-for="item in restNavItems" :key="item.label">
          <a
            v-if="item.href"
            :href="item.href"
            target="_blank"
            rel="noopener"
            class="flex h-full items-center px-4 text-[16px] text-brand transition-colors hover:font-medium hover:text-[#1CD9A4]"
          >
            {{ item.label }}
          </a>
          <NuxtLink
            v-else
            :to="item.to"
            class="flex h-full items-center px-4 text-[16px] text-brand transition-colors hover:font-medium hover:text-[#1CD9A4]"
          >
            {{ item.label }}
          </NuxtLink>
        </template>
      </nav>

      <div class="flex items-center gap-4">
        <div class="hidden desktop-compact:block">
          <CtaButton
            variant="small"
            href="https://app.subsee.com.br"
            :icon="false"
            class="min-h-[42px] box-border px-[25px] py-[8px] text-[16px] font-semibold"
          >
            <IconUser class="size-[15px]" />
            Entrar
          </CtaButton>
        </div>

        <button
          type="button"
          class="relative z-40 inline-flex size-10 items-center justify-center rounded-lg desktop-compact:hidden"
          :aria-expanded="isMenuOpen"
          :aria-controls="mobileNavId"
          :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg v-if="!isMenuOpen" viewBox="0 0 24 24" fill="none" class="size-6" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" class="size-6" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div
        v-show="isModulosOpen"
        ref="modulosDropdownEl"
        data-modulos-dropdown
        class="absolute top-full left-1/2 w-[1045px] max-w-[calc(100vw-2.5rem)] -translate-x-1/2 rounded-b-[10px] border-b-4 border-teal-link bg-white px-5 pt-[30px] pb-[34px] shadow-[0px_10px_10px_rgba(0,0,0,0.05),0px_30px_40px_-10px_rgba(0,0,0,0.18)]"
        @mouseenter="isModulosOpen = true"
        @mouseleave="handleModulosLeave"
      >
        <div class="grid grid-cols-3 gap-x-[25px]">
          <div v-for="col in modulosColumns" :key="col.title" class="flex flex-col">
            <p class="pl-[24px] text-[14px] text-[rgba(33,37,41,0.75)]">{{ col.title }}</p>
            <div class="mt-1 flex flex-col gap-y-1.5">
              <NuxtLink
                v-for="modItem in col.items"
                :key="modItem.label"
                :to="modItem.to"
                class="flex h-[95px] items-start gap-2 overflow-hidden rounded-[10px] border border-transparent p-[13px] hover:border-teal hover:bg-[#f5f5fd]"
              >
                <img :src="modItem.icon" alt="" width="22" height="22" class="mt-[2px] size-[22px] shrink-0" />
                <span class="flex flex-col">
                  <span class="inline-flex items-center gap-2 text-[14px] font-bold text-brand">
                    {{ modItem.label }}
                    <span
                      v-if="modItem.badge"
                      class="rounded-full px-[7px] py-[2px] text-[10.5px] font-medium"
                      :style="{ backgroundColor: modItem.badge.bg, color: modItem.badge.color }"
                    >
                      {{ modItem.badge.text }}
                    </span>
                  </span>
                  <span class="mt-1 text-[12px] leading-[16px] text-[rgba(33,37,41,0.5)]">
                    <template v-for="(part, i) in splitDescription(modItem.description)" :key="i">
                      <strong v-if="part.bold" class="font-bold">{{ part.text }}</strong>
                      <template v-else>{{ part.text }}</template>
                    </template>
                  </span>
                </span>
              </NuxtLink>
            </div>

            <NuxtLink
              v-if="col.banner"
              to="/testar-gratis/"
              class="mt-4 flex h-[183px] w-full max-w-[233px] flex-col items-center justify-center mx-auto rounded-[20px] bg-[linear-gradient(229deg,_rgb(56,177,192)_3%,_rgb(71,126,205)_27%,_rgb(93,95,239)_50%,_rgb(48,156,171)_129%)] px-4 text-center text-white"
            >
              <p class="text-[20px] leading-[1.1] font-light">
                <strong class="font-bold">Teste</strong> na<br />
                <strong class="font-bold">prática</strong> todas as funcionalidades do
                <strong class="font-bold">SUBSEE on</strong>
              </p>
              <span class="mt-4 rounded-[10px] border-2 border-white/50 px-6 py-2 text-[16px]">Testar grátis</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </div>

  <Transition
    enter-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-150"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isMenuOpen"
      class="fixed inset-x-0 top-[64px] z-40 h-[calc(100dvh-64px)] bg-black/40 mobile-lg:top-[85px] mobile-lg:h-[calc(100dvh-85px)] desktop-compact:hidden"
      aria-hidden="true"
      @click="isMenuOpen = false"
    />
  </Transition>

  <Transition
    enter-active-class="transition-transform duration-200 ease-out"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-150 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <nav
      v-if="isMenuOpen"
      :id="mobileNavId"
      class="pt-4 fixed top-[64px] left-0 z-40 flex h-[calc(100dvh-64px)] w-[85%] max-w-[320px] flex-col overflow-y-auto bg-white mobile-lg:top-[85px] mobile-lg:h-[calc(100dvh-85px)] desktop-compact:hidden"
      aria-label="Menu principal (mobile)"
    >
      <div class="flex flex-col">
        <div class="flex items-center justify-between border-b border-[#EDEDED] px-6 py-4">
          <button
            type="button"
            class="border-0 bg-transparent text-base font-medium text-ink"
            :aria-expanded="isMobileModulosOpen"
            aria-controls="mobile-modulos-list"
            @click="isMobileModulosOpen = !isMobileModulosOpen"
          >
            {{ modulosNavItem.label }}
          </button>
          <button
            type="button"
            class="inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-[#D1D5DB] text-base leading-none text-ink"
            :aria-expanded="isMobileModulosOpen"
            aria-controls="mobile-modulos-list"
            :aria-label="isMobileModulosOpen ? 'Recolher Módulos' : 'Expandir Módulos'"
            @click="isMobileModulosOpen = !isMobileModulosOpen"
          >
            {{ isMobileModulosOpen ? '−' : '+' }}
          </button>
        </div>

        <div v-if="isMobileModulosOpen" id="mobile-modulos-list" class="flex flex-col border-b border-[#EDEDED] bg-[#FAFAFA] py-2">
          <NuxtLink
            v-for="modItem in modulosMobileItems"
            :key="modItem.label"
            :to="modItem.to"
            class="px-10 py-2.5 text-sm text-ink-soft"
          >
            {{ modItem.label }}
          </NuxtLink>
        </div>

        <template v-for="item in restNavItems" :key="item.label">
          <a
            v-if="item.href"
            :href="item.href"
            target="_blank"
            rel="noopener"
            class="border-b border-[#EDEDED] px-6 py-4 text-base font-medium text-ink"
          >
            {{ item.label }}
          </a>
          <NuxtLink v-else :to="item.to" class="border-b border-[#EDEDED] px-6 py-4 text-base font-medium text-ink">
            {{ item.label }}
          </NuxtLink>
        </template>
      </div>

      <div class="px-6 py-6">
        <CtaButton variant="small" href="https://app.subsee.com.br" :icon="false" class="w-full">
          <IconUser class="size-[15px]" />
          Entrar
        </CtaButton>

        <p class="mt-8 text-sm font-semibold text-ink">Siga nas redes sociais</p>
        <div class="mt-3 flex gap-3">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener"
            class="inline-flex size-9 items-center justify-center rounded-full hover:opacity-80"
          >
            <img :src="social.icon" width="28" height="28" alt="" aria-hidden="true" />
            <span class="sr-only">{{ social.label }}</span>
          </a>
        </div>

        <div class="mt-6 flex flex-col gap-2">
          <NuxtLink to="/lgpd/termos-de-uso/" class="text-sm text-ink-soft hover:text-brand">Termos de uso</NuxtLink>
          <NuxtLink to="/lgpd/politica-de-privacidade/" class="text-sm text-ink-soft hover:text-brand">
            Política de privacidade
          </NuxtLink>
        </div>

      </div>
    </nav>
  </Transition>
</template>

<style scoped>
[data-header-row]:has(nav[data-modulos-nav] > button:first-child:hover) ~ [data-modulos-dropdown] {
  display: block !important;
}
</style>
