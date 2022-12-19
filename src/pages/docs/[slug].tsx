import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { PostOrPage } from '@tryghost/content-api'
import Navbar from '../../components/Navbar'
import Typography from '../../components/Typography'
import DocsSidebar from '../../components/DocsSidebar'
import StyledPostBox from '../../components/StyledPostBox'
import { getPost } from '../../utils/posts'
import { docsLinks } from '../../data/docs'
import Head from 'next/head'

export const getStaticProps = async ({ params }: { params: any }) => {
    const post = await getPost(params.slug)

    if (!post) {
        return {
            notFound: true
        }
    }

    return {
        props: { post },
        revalidate: 10
    }
}

export const getStaticPaths = () => {
    const paths = docsLinks.reduce(
        (
            paths: { params: { slug: string } }[],
            section: { title: string; links: { section: string; name: string; slug: string }[] }
        ) => [...paths, ...section.links.map((link: any) => ({ params: { slug: link.slug } }))],
        []
    )

    return {
        paths,
        fallback: true
    }
}

const Doc: NextPage<{ post: PostOrPage }> = (props) => {
    const router = useRouter()
    const [mobileOpen, setMobileOpen] = useState(false)

    const pageTitle = props.post?.title
    const pageURL = `https://framework.so/docs/${props.post?.slug}`
    const pageDescription = props.post?.excerpt
    const pageImage = 'https://www.framework.so/images/slides/slide-2.png'

    const closeMobileNav = () => setMobileOpen(false)

    useEffect(() => {
        router.events.on('routeChangeStart', () => closeMobileNav)

        return () => {
            router.events.off('routeChangeStart', () => closeMobileNav)
        }
    }, [router])

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
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
            <Navbar wide={true} onAuxillaryExpandClick={() => setMobileOpen(!mobileOpen)} />
            <DocsSidebar mobileOpen={mobileOpen} />
            <div className='px-8 py-14 lg:ml-[284px] mt-[85px]'>
                <main className='max-w-screen-md mx-auto'>
                    <Typography variant='h4' className='mb-8'>
                        {props.post?.title}
                    </Typography>
                    <StyledPostBox html={props.post?.html || ''} />
                </main>
            </div>
        </>
    )
}

export default Doc
