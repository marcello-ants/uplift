import GhostContentAPI, { Params, PostsOrPages, PostOrPage } from '@tryghost/content-api'

const api = new GhostContentAPI({
    url: 'https://framework.ghost.io',
    key: 'b61283890de072ef3cdd027143',
    version: 'v3'
})

/**
 * Truncate post excerpt
 */
export const truncateExcerpt = (text: string, count: number) =>
    text.slice(0, count) + (text.length > count ? '...' : '')

/**
 * Get posts from Ghost
 */
export const getPosts = async (options?: Params): Promise<void | PostsOrPages> => {
    try {
        const posts = await api.posts.browse(options)
        return posts
    } catch (err) {
        console.error(err)
    }
}

/**
 * Get single post from Ghost
 */
export const getPost = async (slug: string): Promise<void | PostOrPage> => {
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

/**
 * Gets all posts tagged FAQ
 */
export const getFAQ = async (): Promise<void | PostOrPage[]> => {
    try {
        const posts = await api.posts.browse({
            filter: 'tag:faqs'
        })
        return posts
    } catch (err) {
        console.error(err)
    }
}
