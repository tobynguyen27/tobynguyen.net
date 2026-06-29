import { unified } from '@astrojs/markdown-remark'
import MDX from '@astrojs/mdx'
import PartyTown from '@astrojs/partytown'
import SiteMap from '@astrojs/sitemap'
import OxidizedImage from 'astro-oxidized-image'
import { defineConfig, fontProviders, svgoOptimizer } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { remarkReadingTime } from './plugins/remark-reading-time'

export default defineConfig({
    integrations: [UnoCSS(), MDX(), SiteMap(), PartyTown(), OxidizedImage()],

    site: 'https://tobynguyen.net',
    output: 'static',

    fonts: [{
        provider: fontProviders.fontshare(),
        name: 'Erode',
        cssVariable: '--font-erode',
        fallbacks: ['sans-serif'],
    }, {
        provider: fontProviders.fontsource(),
        name: 'Geist',
        cssVariable: '--font-geist',
        fallbacks: ['system-ui'],
    }, {
        provider: fontProviders.fontsource(),
        name: 'Geist Mono',
        cssVariable: '--font-geist-mono',
        fallbacks: ['monospace'],
    }],
    markdown: {
        shikiConfig: {
            themes: {
                light: 'catppuccin-latte',
                dark: 'catppuccin-mocha',
            },
        },
        processor: unified({
            remarkPlugins: [remarkReadingTime],
        }),
    },
    image: {
        domains: ['codeberg.org'],
    },
    experimental: {
        svgOptimizer: svgoOptimizer({
            multipass: true,
            plugins: [
                {
                    name: 'preset-default',
                },
            ],
        }),
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
