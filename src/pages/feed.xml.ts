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
        'language': 'en-us',
        'copyright': 'CC BY-NC 4.0 © Toby Nguyen',
        'managingEditor': 'hi@tobynguyen.net (Toby Nguyen)',
        'webMaster': 'hi@tobynguyen.net (Toby Nguyen)',
        'image': {
            url: resolveURL(siteURL, 'avatar.png'),
            link: siteURL,
            title: 'Toby Nguyen',
        },
        'atom:link': {
            '@_href': resolveURL(siteURL, 'feed.xml'),
            '@_rel': 'self',
            '@_type': 'application/rss+xml',
        },
    })

    return rss({
        xmlns: {
            atom: 'http://www.w3.org/2005/Atom',
        },

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
                author: 'hi@tobynguyen.net (Toby Nguyen)',
            } satisfies RSSFeedItem)),
        customData: channelMeta,
    })
}
