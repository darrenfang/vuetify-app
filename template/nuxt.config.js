import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

const API_BASE = process.env.API_BASE || '{{apiBase}}'
const CLIENT_ID = process.env.CLIENT_ID || '{{clientId}}'
const REDIRECT_URL = process.env.REDIRECT_URL || '{{redirectUrl}}'
const SITE_NAME = process.env.SITE_NAME || '{{siteName}}'
const COMPANY_NAME = process.env.COMPANY_NAME || '{{companyName}}'

export default {
  mode: 'universal',

  env: {
    API_BASE: API_BASE,
    CLIENT_ID: CLIENT_ID,
    REDIRECT_URL: REDIRECT_URL,
    SITE_NAME: SITE_NAME,
    COMPANY_NAME: COMPANY_NAME
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '欢迎使用',
    titleTemplate: '%s - ' + SITE_NAME,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar
  */
  loading: '@/components/Loading.vue',

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/vue-meta',
    '@/plugins/vuetify-components',
    '@/plugins/router-changed',
    '@/plugins/axios',
    '@/plugins/vee-validate'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
