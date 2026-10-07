import tailwindcss from '@tailwindcss/vite'

const runtimeEnv = (globalThis as typeof globalThis & {
  process?: {
    env?: Record<string, string | undefined>
  }
}).process?.env ?? {}

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
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'fb:app_id', content: '2744542915835221' },
        //{ name: 'google-site-verification', content: 'slYoIrJvSODBYq-MPopRnn_7HCu0tWY6PZeCR4eAmTs' },
       // { name: 'msvalidate.01', content: '58E04542907016EDD240F079F71CDAFE' },
        { name: 'author', content: 'SUB100 Sistemas Ltda' },
        { name: 'publisher', content: 'SUB100 Sistemas Ltda' }
      ],

      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '512x512' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/poppins-400-latin.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/poppins-500-latin.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/poppins-600-latin.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/poppins-700-latin.woff2', crossorigin: 'anonymous' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl:
        runtimeEnv.NUXT_PUBLIC_SITE_URL ||
        (runtimeEnv.CF_PAGES === '1' && runtimeEnv.CF_PAGES_BRANCH === 'master'
          ? 'https://subseenovo.pages.dev'
          : 'http://localhost:3000'),
      formsEndpoint: 'https://forms.sub100.com.br/sub100sistemas/formularios.php',
      recaptchaSiteKey: runtimeEnv.NUXT_PUBLIC_RECAPTCHA_SITE_KEY
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