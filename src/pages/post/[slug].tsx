import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import dayjs from 'dayjs'
import IconButton from '../../components/IconButton'
import { PostOrPage } from '@tryghost/content-api'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Typography from '../../components/Typography'
import StyledPostBox from '../../components/StyledPostBox'
import { getPost } from '../../utils/posts'
import Head from 'next/head'
import { IoLogoTwitter, IoLogoLinkedin, IoLogoFacebook, IoMail, IoArrowBack } from 'react-icons/io5'

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

export function SocialIconButtons({ title, link }: { title: string; link: string }) {
    const twitterUsername = 'framework_so'
    const twitterURL = `https://twitter.com/intent/tweet?url=${link}&via=${twitterUsername}&text=${title}`
    const linkedInURL = `https://www.linkedin.com/shareArticle?mini=true&source=Framework&title=${title}&url=${link}`
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${link}&t=${title}`
    const mailURL = `mailto:?body=${title}%0A${link}&subject=${title}`
    return (
        <div className='flex'>
            <IconButton link={twitterURL} target='_blank' rel='noopener' aria-label='Twitter'>
                <IoLogoTwitter size={24} />
            </IconButton>
            <IconButton link={linkedInURL} target='_blank' rel='noopener' aria-label='LinkedIn'>
                <IoLogoLinkedin size={24} />
            </IconButton>
            <IconButton link={facebookURL} target='_blank' rel='noopener' aria-label='Facebook'>
                <IoLogoFacebook size={24} />
            </IconButton>
            <IconButton link={mailURL} target='_blank' rel='noopener' aria-label='Email'>
                <IoMail size={24} />
            </IconButton>
        </div>
    )
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}

const Post: NextPage<{ post: PostOrPage }> = (props) => {
    const pageTitle = props.post?.title
    const pageURL = `https://framework.so/post/${props.post?.slug}`
    const pageDescription = props.post?.excerpt
    const pageImage = props.post?.feature_image || ''

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <link rel='canonical' href={pageURL} />
                <meta name='title' content={pageTitle} key='title' />
                <meta name='description' content={pageDescription} key='description' />

                {/* Open Graph */}
                <meta property='og:url' content={pageURL} key='ogurl' />
                <meta property='og:title' content={pageTitle} key='ogtitle' />
                <meta property='og:description' content={pageDescription} key='ogdesc' />
                <meta property='og:image' content={pageImage} key='ogimage' />

                {/* Twitter */}
                <meta property='twitter:card' content='summary_large_image' key='twcard' />
                <meta property='twitter:url' content={pageURL} key='twurl' />
                <meta property='twitter:title' content={pageTitle} key='twtitle' />
                <meta property='twitter:description' content={pageDescription} key='twdesc' />
                <meta property='twitter:image' content={pageImage} key='twimage' />
            </Head>
            <Navbar />
            <div className='p-8 mt-[85px] mb-20'>
                <main className='max-w-screen-md mx-auto space-y-8'>
                    <Link href='/blog' passHref>
                        <div className='flex text-gray-500 hover:text-black cursor-pointer items-center space-x-1'>
                            <IoArrowBack />
                            <span>Back to Blog</span>
                        </div>
                    </Link>
                    <Typography variant='h3'>{props.post?.title}</Typography>
                    <div className='flex justify-between items-center'>
                        <Typography color='text-gray-500'>
                            {dayjs(props.post?.published_at).format('MMM DD, YYYY')} &bull; {props.post?.reading_time}{' '}
                            minute read
                        </Typography>
                        <SocialIconButtons
                            title={props.post?.title || 'Check out this post from Framework'}
                            link={pageURL}
                        />
                    </div>
                    {props.post?.published_at && (
                        <div
                            className='flex-1 w-full h-full bg-center bg-cover bg-no-repeat min-h-[400px] '
                            style={{ backgroundImage: `url(${props.post.feature_image})` }}
                        />
                    )}

                    <StyledPostBox html={props.post?.html || ''} />

                    {props.post?.html && (
                        <div className='flex space-x-4 items-center justify-center pt-10'>
                            <Typography color='text-gray-500'>Share post</Typography>
                            <SocialIconButtons
                                title={props.post?.title || 'Check out this post from Framework'}
                                link={pageURL}
                            />
                        </div>
                    )}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Post
