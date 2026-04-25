import type { APIRoute } from 'astro'
import OG from '@components/og/BlogOg'
import { getCollection } from 'astro:content'
import { ImageResponse } from 'takumi-js/response'

export async function getStaticPaths() {
    const posts = await getCollection('blog')
    return posts.map(post => ({ params: { id: post.id }, props: { post } }))
}

export const GET = (async ({ props }) => {
    const { post } = props

    return new ImageResponse(OG({ title: post.data.title, description: post.data.description }), {
        width: 1200,
        height: 630,
        format: 'png',
    })
}) satisfies APIRoute
