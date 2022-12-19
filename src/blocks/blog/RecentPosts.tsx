import React, { useState } from 'react'
import Link from 'next/link'
import { PostOrPage } from '@tryghost/content-api'
import dayjs from 'dayjs'
import Typography from '../../components/Typography'
import { CTACardSmall } from '../../blocks/shared/CTACard'
import { SHARED_DATA } from '../../data/common'
import { truncateExcerpt } from '../../utils/posts'
import { SearchIcon } from '@primer/octicons-react'
import SearchModal from '../../blocks/shared/SearchModal'

const RecentPosts = ({ posts }: { posts: PostOrPage[] }): React.ReactElement => {
    const [searchModalOpen, setSearchModalOpen] = useState(false)

    return (
        <section className='pt-16 pb-20 px-8 lg:px-0'>
            <div className='max-w-screen-lg mx-auto'>
                <div className='gap-y-12 grid grid-cols-1 lg:gap-16 lg:grid-cols-3'>
                    <div className='col-span-2 space-y-2'>
                        <div className='flex items-center justify-between h-[50px]'>
                            <Typography variant='xl' className='font-bold'>
                                Recent Posts
                            </Typography>
                            <button
                                onClick={() => setSearchModalOpen(true)}
                                className='block rounded  hover:bg-gray-100 p-2 transition-all ml-2'>
                                <SearchIcon size={24} />
                            </button>
                        </div>
                        <hr />
                        {posts.map((post) => (
                            <Link key={post.title} href={`/post/${post.slug}`}>
                                <a className='hover:bg-gray-100 p-3 -m-3 transition-all flex flex-row space-x-0 sm:space-x-6 overflow-hidden justify-start rounded-lg'>
                                    <div
                                        className='hidden sm:flex w-[158px] h-[121px] bg-cover bg-no-repeat rounded-lg'
                                        style={{ backgroundImage: `url(${post.feature_image || '/images/logo.png'})` }}
                                    />
                                    <div className='flex-1 pb-1 space-y-1'>
                                        <Typography variant='lg' className='font-semibold'>
                                            {post.title}
                                        </Typography>
                                        <Typography color='text-gray-500'>
                                            {truncateExcerpt(post.excerpt!, 70)}
                                        </Typography>
                                        <Typography variant='sm' color='text-gray-500'>
                                            {dayjs(post.published_at).format('MMM DD, YYYY')}
                                        </Typography>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>

                    <div className='col-span-1 space-y-2'>
                        <div className='h-[50px]' />
                        <hr />
                        <div className='py-5'>
                            <CTACardSmall
                                cardVariant='orangePurple'
                                header='Ready to get started?'
                                subheader='Try free for 14 days'
                                detail='Get started with a free trial.'
                                buttonText='Start free trial'
                                buttonLink={SHARED_DATA.DEFAULT_TRIAL_LINK}
                                buttonVariant='primary'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <SearchModal
                searchablePosts={posts}
                placeholder={'Search posts'}
                isOpen={searchModalOpen}
                setOpen={setSearchModalOpen}
                path='/post'
            />
        </section>
    )
}

export default RecentPosts
