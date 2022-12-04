// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title:
        'Spencer Sharp - Software designer, founder, and amateur astronaut',
      meta: [
        {
          name: 'description',
          content:
            "I'm Spencer, a software designer and entrepreneur based in New York City. I'm the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
        },
      ],
      script: [],
      link: [
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          href: `${process.env.NUXT_PUBLIC_SITE_URL}/rss/feed.xml`,
        },
        {
          rel: 'alternate',
          type: 'application/feed+json',
          href: `${process.env.NUXT_PUBLIC_SITE_URL}/rss/feed.json`,
        },
      ],
      style: [],
      htmlAttrs: {
        class: 'h-full antialiased',
      },
      bodyAttrs: {
        class: 'flex h-full flex-col bg-zinc-50 dark:bg-black',
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
