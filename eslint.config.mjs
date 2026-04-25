import antfu from '@antfu/eslint-config'

export default antfu({
    type: 'app',

    gitignore: true,

    stylistic: {
        indent: 4,
        quotes: 'single',
    },
    formatters: {
        css: true,
        astro: true,
    },

    pnpm: false,
    vue: true,
    typescript: true,
    astro: true,
    unocss: true,
    toml: true,
    jsonc: true,
    yaml: {
        overrides: {
            'yaml/indent': ['error', 2],
        },
    },
})
