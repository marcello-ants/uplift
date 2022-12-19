import React from 'react'
import Link from 'next/link'
import { PostOrPage } from '@tryghost/content-api'
import dayjs from 'dayjs'
import Typography from '../../components/Typography'
import { truncateExcerpt } from '../../utils/posts'

const FeaturedPost = ({ post }: { post: PostOrPage }): React.ReactElement => (
    <section className='lg:px-0 bg-gray-100'>
        <div className='pt-32 pb-10 space-y-2 px-8 max-w-screen-xl mx-auto lg:pt-40 lg:pb-20'>
            <Typography variant='h5' as='h1'>
                Blog
            </Typography>
            <Link href={`/post/${post.slug}`}>
                <a className='hover:bg-gray-200 p-3 -m-3 block transition-all rounded-lg'>
                    <div className='flex flex-col sm:flex-row '>
                        <div
                            className='flex-1 w-full h-full bg-right bg-cover bg-no-repeat min-h-[400px] rounded-lg'
                            style={{ backgroundImage: `url(${post.feature_image || '/images/browser.png'})` }}
                        />
                        <div className='flex-1 sm:px-6 py-8 sm:py-2 flex flex-col space-y-4'>
                            <Typography variant='sm' className='uppercase'>
                                Featured
                            </Typography>
                            <Typography variant='h5'>{post.title}</Typography>
                            <Typography variant='base'>{truncateExcerpt(post.excerpt!, 400)}</Typography>
                            <Typography variant='sm'>{dayjs(post.published_at).format('MMM DD, YYYY')}</Typography>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    </section>
)

export default FeaturedPost
