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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Outfit:wght@300;600&family=Nunito+Sans:wght@800&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Outfit:wght@300;600&family=Nunito+Sans:wght@800&display=swap',
          media: 'print',
          onload: "this.media='all'"
        }
      ],
      noscript: [
        {
          innerHTML:
            '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Outfit:wght@300;600&family=Nunito+Sans:wght@800&display=swap">'
        }
      ]
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

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
})