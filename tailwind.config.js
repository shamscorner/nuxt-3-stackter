/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',

  // By default "@nuxtjs/tailwindcss" module comes with default content configurations
  // These contents will be merged to the default content of the above module
  // https://tailwindcss.nuxtjs.org/tailwind/config#merging-strategy
  content: ['./stores/**/*.{js,ts}', './nuxt.config.{js,ts}'],

  theme: {},

  plugins: [],
}
