import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  modules: [
    '@nuxt/image'
  ],

  components: [
    { path: '~/components', pathPrefix: false }
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      link: [
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/poppins-400-latin.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/poppins-500-latin.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/poppins-600-latin.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/poppins-700-latin.woff2', crossorigin: 'anonymous' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.CF_PAGES === '1' && process.env.CF_PAGES_BRANCH === 'master' ? 'https://subseenovo.pages.dev' : 'http://localhost:3000',
      formsEndpoint: 'https://forms.sub100.com.br/sub100sistemas/formularios.php',
      recaptchaSiteKey: ''
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  image: {
    format: ['avif', 'webp'],
    quality: 85,
    screens: {
      'mobile-lg': 576,
      tablet: 768,
      'tablet-lg': 992,
      'desktop-compact': 1200,
      desktop: 1300,
      'desktop-lg': 1600
    }
  },

  hooks: {
    'build:manifest': (manifest) => {
      for (const chunk of Object.values(manifest)) {
        chunk.prefetch = false
      }
    }
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  nitro: {
    prerender: {
      failOnError: false
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
})