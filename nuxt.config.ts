// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt 3 starter template with TailwindCSS',
      meta: [
        {
          name: 'description',
          content:
            'A starter template built using Nuxt 3, TailwindCSS, VueUse, Nuxt-image, HeadlessUI, Eslint, Prettier, etc.',
        },
      ],
      script: [],
      link: [],
      style: [],
      htmlAttrs: {
        class: 'h-full antialiased',
      },
      bodyAttrs: {
        class: 'h-full',
      },
    },
  },

  modules: [
    // https://tailwindcss.nuxtjs.org/
    '@nuxtjs/tailwindcss',

    // https://github.com/P4sca1/nuxt-headlessui/
    'nuxt-headlessui',

    // https://vueuse.org/
    '@vueuse/nuxt',

    // https://v1.image.nuxtjs.org/
    '@nuxt/image-edge',
  ],

  // https://github.com/P4sca1/nuxt-headlessui
  headlessui: {
    // All the Headless components are auto imported and prefixed by 'Headless'
    // Ex: HeadlessPopover
    prefix: 'Headless',
  },

  imports: {
    dirs: ['stores', 'features/**/stores'],
  },
})
