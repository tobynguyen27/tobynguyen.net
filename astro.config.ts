import MDX from '@astrojs/mdx'
import Sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

export default defineConfig({
    integrations: [UnoCSS(), MDX(), Sitemap()],

    site: 'https://tobynguyen.net',
    output: 'static',

    markdown: {
        shikiConfig: {
            themes: {
                light: 'catppuccin-latte',
                dark: 'catppuccin-mocha',
            },
        },
    },
    image: {
        domains: ['codeberg.org'],
    },
    experimental: {
        rustCompiler: true,
    },
    vite: {
        optimizeDeps: {
            exclude: ['@takumi-rs/core'],
        },
        ssr: {
            external: ['@takumi-rs/core'],
        },
    },
})
