// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Nuxt3 x GitHub Pages',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Dario Tecchia\' personal website!' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favicon.svg' }
      ]
    },
    baseURL: '/nuxt3-ghpages/'
  },
  modules: [
  ],
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-vue-3/dist/bootstrap-vue-3.css",
    '@/assets/style/main.scss',
  ]
})