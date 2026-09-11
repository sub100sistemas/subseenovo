<script setup lang="ts">
import type { LanguageItem } from '~/components/layout/LanguageSwitcher.vue'

const languages: LanguageItem[] = [
  { icon: '/icons/site-urbano-idioma-pt-br.svg', name: 'Português', code: 'PT' },
  { icon: '/icons/site-urbano-idioma-en.svg', name: 'Inglês', code: 'EN' },
  { icon: '/icons/site-urbano-idioma-es.svg', name: 'Espanhol', code: 'ES' },
  { icon: '/icons/site-urbano-idioma-de.svg', name: 'Alemão', code: 'DE' },
  { icon: '/icons/site-urbano-idioma-it.svg', name: 'Italiano', code: 'IT' },
  { icon: '/icons/site-urbano-idioma-zh.svg', name: 'Chinês', code: 'ZH' }
]
</script>

<template>
  <LanguageSwitcher section-id="site-rural-internacional" :languages="languages">
    <template #title>
      Fale o idioma dos seus<br />
      clientes <span class="text-brand">internacionais</span>
    </template>

    <template #description>
      Habilite a tradução automática pelo <strong>painel SUB100 Meu Site</strong> e ofereça uma
      experiência fluida para compradores e locatários estrangeiros interessados em imóveis
      residenciais e comerciais.
    </template>
  </LanguageSwitcher>
</template>
