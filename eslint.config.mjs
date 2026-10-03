import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    type: 'app',

    gitignore: true,

    stylistic: {
      indent: 2,
      quotes: 'single',
    },
    formatters: {
      css: true,
      markdown: true,
      html: true,
    },

    vue: true,
    typescript: true,
    yaml: true,
    toml: true,
    jsonc: true,
    unocss: true,
  }),
)
