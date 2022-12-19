import GhostContentAPI, { Params, PostsOrPages, PostOrPage } from '@tryghost/content-api'

/**
 * @todo Replace these with .env vars
 */
const api = new GhostContentAPI({
    url: 'https://framework.ghost.io',
    key: 'b61283890de072ef3cdd027143',
    version: 'v3'
})

export async function getPosts(options?: Params): Promise<void | PostsOrPages> {
    try {
        const posts = await api.posts.browse(options)
        return posts
    } catch (err) {
        console.error(err)
    }
}

export async function getPost(slug: string): Promise<void | PostOrPage> {
    try {
        const posts = await api.posts.read(
            {
                slug: slug
            },
            {
                include: ['tags', 'authors']
            }
        )
        return posts
    } catch (err) {
        console.error(err)
    }
}
