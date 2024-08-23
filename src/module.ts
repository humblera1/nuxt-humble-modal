import { defineNuxtModule, createResolver, addComponent, addImports } from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-humble-modal',
    configKey: 'humbleModal',
  },
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Disable console.log
    const nuxtOptions = _nuxt.options

    nuxtOptions.vite.esbuild ||= {}

    nuxtOptions.vite.esbuild.pure ||= []

    nuxtOptions.vite.esbuild.pure.push('console.log')

    // Bundles compressing
    nuxtOptions.nitro.compressPublicAssets = true
    nuxtOptions.nitro.minify = true

    // Modal component
    addComponent({
      name: 'HumbleModal',
      filePath: resolver.resolve('./runtime/components/HumbleModal.vue'),
      prefetch: false,
      preload: false,
      global: false,
    })

    addImports({
      name: 'useHumbleModal',
      from: resolver.resolve('./runtime/composables/useHumbleModal'),
    })
  },
})
