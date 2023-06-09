import viteSVGLoader from 'vite-svg-loader'
import viteWindiCSS from 'vite-plugin-windicss'
import viteStylelint from 'vite-plugin-stylelint'

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  experimental: {
    renderJsonPayloads: true,
  },
  runtimeConfig: {
    githubToken: '',
    public: {
      branch: 'master',
      siteUrl: 'https://ryzhenkov.space',
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://ryzhenkov.space' },
      ],
    },
  },
  vite: {
    logLevel: 'info',
    plugins: [
      viteStylelint({
        fix: true,
      }),
      viteSVGLoader(),
      viteWindiCSS({
        transformCSS: 'pre',
        scan: {
          dirs: ['.'],
          fileExtensions: ['vue', 'js', 'ts', 'scss'],
        },
      }),
    ],
  },
  css: [
    'virtual:windi.css',
    '@fontsource/inter/variable.css',
    '@fontsource/raleway/variable.css',
    '~/assets/global.scss',
  ],
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
      },
    },
  },
  modules: [
    '@nuxtjs/eslint-module',
    'nuxt-security',
    '@nuxtjs/critters',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    'nuxt-schema-org',
    // '@vueuse/nuxt',
    ['@nuxtjs/robots', {
      rules: {
        Sitemap: 'https://ryzhenkov.space/sitemap.xml',
        Host: 'https://ryzhenkov.space/',
        UserAgent: '*',
        Disallow: '',
      },
    }],
    'nuxt-icon',
    'nuxt-simple-sitemap',
    '@nuxtjs/fontaine',
    '@nuxtjs/html-validator',
    'nuxt-delay-hydration',
  ],
  build: {
    transpile: [
      'date-fns',
    ],
  },
  // Module settings
  sitemap: {
    siteUrl: 'https://ryzhenkov.space',
  },
  delayHydration: {
    mode: 'mount',
  },
  security: {
    headers: {
      xXSSProtection: '1',
    },
  },
  critters: {
    config: {
      preload: 'swap',
    },
  },
  image: {
    presets: {
      optimized: {
        modifiers: {
          format: 'webp',
          quality: 90,
          lazy: true,
        },
      },
    },
  },
  i18n: {
    baseUrl: 'https://ryzhenkov.space',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.json',
      },
    ],
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: 'root',
    },
    defaultLocale: 'ru',
    vueI18n: {
      legacy: false,
      fallbackLocale: 'ru',
    },
    lazy: true,
    langDir: 'lang/',
    skipSettingLocaleOnNavigate: true,
  },
  schemaOrg: {
    host: 'https://ryzhenkov.space',
  },
})
