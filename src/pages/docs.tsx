import React, { useState, useEffect } from 'react'
import { PostOrPage } from '@tryghost/content-api'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Typography from '../components/Typography'
import DocsSidebar from '../components/DocsSidebar'
import Card from '../components/Card'
import Head from 'next/head'
import SearchModal from '../blocks/shared/SearchModal'
import { SearchIcon } from '@primer/octicons-react'

export const getStaticProps = async () => {
    const { getPosts } = require('../utils/posts')

    const posts = await getPosts({
        limit: 'all',
        filter: `tag:Documentation`,
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

const Docs = ({ posts }: { posts: PostOrPage[] }): React.ReactElement => {
    const router = useRouter()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [searchModalOpen, setSearchModalOpen] = useState(false)
    const closeMobileNav = () => setMobileOpen(false)

    const pageTitle = 'Resources'
    const pageURL = 'https://framework.so/docs'
    const pageDescription = 'Explore our guides and walkthroughs on setting up your challenge community on Framework.'
    const pageImage = 'https://www.framework.so/images/slides/slide-2.png'

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
                <meta name='title' content={pageTitle}></meta>
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
            <SearchModal
                searchablePosts={posts}
                placeholder={'Search resources'}
                isOpen={searchModalOpen}
                setOpen={setSearchModalOpen}
                path='/docs'
            />
            <div className='px-8 py-14 lg:ml-[250px] mt-[85px]'>
                <main className='max-w-screen-md mx-auto flex flex-col space-y-8 px-0 lg:px-8'>
                    <div className='space-y-2'>
                        <Typography variant='h4'>Resources</Typography>
                        <Typography variant='lg' color='text-gray-600'>
                            Explore guides and tips on how to get the most out of Framework.
                        </Typography>
                    </div>
                    <button onClick={() => setSearchModalOpen(true)} className='transition-all'>
                        <div className='flex border rounded p-3 bg-gray-100 hover:bg-gray-200 shadow-sm space-x-2'>
                            <SearchIcon size={24} fill='gray' />
                            <Typography>Search resources</Typography>
                        </div>
                    </button>
                    <Card variant='yellowBottom' link='/docs/launching-your-community-2'>
                        <div className='flex flex-col space-y-4 relative'>
                            <Typography variant='h6'>Launching Your Challenge</Typography>
                            <Typography variant='base'>
                                A checklist of tasks to complete before launching your challenge
                            </Typography>
                            <Typography variant='base' className='text-primary-900'>
                                Go to Pre-Launch Checklist
                            </Typography>
                        </div>
                    </Card>
                    <Card variant='green' link='/faq'>
                        <div className='flex flex-col space-y-4 relative'>
                            <Typography variant='h6'>FAQs</Typography>
                            <Typography variant='base'>
                                A list of our most frequently asked questions from customers
                            </Typography>
                            <Typography variant='base' className='text-primary-900'>
                                Go to FAQs
                            </Typography>
                        </div>
                    </Card>
                    {/* <Card variant='orange' link='/docs/introduction-why-challenges'>
                        <div className='flex flex-col space-y-4 relative'>
                            <Typography variant='h6'>Challenge Academy</Typography>
                            <Typography variant='base'>
                                Check out a series of video-based walkthroughs on setting up your challenge
                            </Typography>
                            <Typography variant='base' className='text-primary-900'>
                                Go to Introduction
                            </Typography>
                        </div>
                    </Card> */}
                </main>
            </div>
        </>
    )
}

export default Docs
