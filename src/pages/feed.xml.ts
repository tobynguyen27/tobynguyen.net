import type { RSSFeedItem } from '@astrojs/rss'
import type { APIContext } from 'astro'
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import XMLBuilder from 'fast-xml-builder'
import { resolveURL } from 'ufo'

const builder = new XMLBuilder()

export async function GET(context: APIContext) {
    const blog = await getCollection('blog')
    const siteURL = context.site!.toString()

    const channelMeta = builder.build({
        language: 'en-us',
        copyright: 'CC BY-NC 4.0 © Toby Nguyen',
        managingEditor: 'Toby Nguyen (hi@tobynguyen.net)',
        webMaster: 'Toby Nguyen (hi@tobynguyen.net)',
        image: {
            url: resolveURL(siteURL, 'avatar.png'),
            link: siteURL,
            title: 'Toby Nguyen',
        },
    })

    return rss({
        title: `Toby Nguyen`,
        description: `Toby Nguyen's Blog`,
        site: context.site!,
        items: blog
            .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
            .map(post => ({
                title: post.data.title,
                pubDate: post.data.pubDate,
                description: post.data.description,
                link: resolveURL('/blog', post.id),
                author: 'Toby Nguyen',
            } satisfies RSSFeedItem)),
        customData: channelMeta,
    })
}
