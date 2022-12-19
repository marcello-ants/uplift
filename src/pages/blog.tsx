import { NextPage } from 'next'
import { PostOrPage } from '@tryghost/content-api'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturedPost from '../blocks/blog/FeaturedPost'
import RecentPosts from '../blocks/blog/RecentPosts'
import Head from 'next/head'

export const getStaticProps = async () => {
    const { getPosts } = require('../utils/posts')

    const posts = await getPosts({
        limit: 'all',
        filter: `tag:Blog`,
        include: ['tags', 'authors'],
        order: 'published_at DESC'
    })

    if (!posts) {
        return {
            notFound: true
        }
    }

    return {
        revalidate: 10,
        props: { posts }
    }
}

const Blog: NextPage<{ posts: PostOrPage[] }> = (props) => {
    const { posts } = props
    const featuredPost = posts[0]
    const pageTitle = 'Framework Blog'
    const pageURL = 'https://framework.so/blog'
    const pageDescription = 'Learn more about Framework and how challenges can help your business.'
    const pageImage = 'https://www.framework.so/images/slides/slide-2.png'

    return (
        <>
            <Head>
                <title>Framework Blog</title>
                <link rel='canonical' href={pageURL} />
                <meta name='title' content={pageTitle} />
                <meta name='description' content={pageDescription} />

                {/* Open Graph */}
                <meta property='og:type' content='website' />
                <meta property='og:title' content={pageTitle} key='ogtitle' />
                <meta property='og:description' content={pageDescription} key='ogdesc' />
                <meta property='og:image' content={pageImage} key='ogimage' />

                {/* Twitter */}
                <meta property='twitter:card' content='summary_large_image' key='twcard' />
                <meta property='twitter:title' content={pageTitle} />
                <meta property='twitter:description' content={pageDescription} />
                <meta property='twitter:image' content={pageImage} />
            </Head>
            <Navbar />
            <main>
                <FeaturedPost post={featuredPost} />
                <RecentPosts posts={posts} />
            </main>

            <Footer />
        </>
    )
}

export default Blog
