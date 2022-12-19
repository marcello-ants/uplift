import React from 'react'
import Typography from '../../components/Typography'
import ImageCluster from '../../components/ImageCluster'

const Collage = (): React.ReactElement => {
    return (
        <section>
            <div className='flex flex-col space-y-8 items-center justify-center relative'>
                <div className='relative max-w-full w-full'>
                    <div className='image-clusters flex absolute w-[104vw] -left-[2vw] -right-[2vw] top-2/4 transform -translate-y-2/4 flex-row justify-evenly'>
                        <div className='flex-1 flex flex-row items-center justify-start space-x-6'>
                            <ImageCluster
                                images={[
                                    '/images/activities/activity-1-1.jpg',
                                    '/images/activities/activity-1-2.jpg',
                                    '/images/activities/activity-1-3.jpg',
                                    '/images/activities/activity-1-4.jpg'
                                ]}
                            />
                        </div>
                        <div className='flex-1 flex flex-row items-center justify-end space-x-6'>
                            <ImageCluster
                                images={[
                                    '/images/activities/activity-2-1.jpg',
                                    '/images/activities/activity-2-2.jpg',
                                    '/images/activities/activity-2-3.jpg',
                                    '/images/activities/activity-2-4.jpg'
                                ]}
                            />
                        </div>
                    </div>
                    <div className='max-w-lg mx-10 sm:mx-auto flex flex-col space-y-8 items-center justify-center'>
                        <Typography
                            variant='h4'
                            color='text-alpha-black'
                            className='text-start max-w-lg mx-auto lg:text-center'>
                            <span className='text-primary-900'>Framework</span> is where coaches, community builders,
                            and entrepreneurs — <span className='text-black'>people like you</span> — use challenges to
                            create massive impact for their audiences.
                        </Typography>
                        <Typography
                            variant='h4'
                            color='text-alpha-black'
                            className='text-start max-w-lg mx-auto lg:text-center'>
                            With their help, <span className='text-black'>thousands of people</span> are getting sober,
                            quitting sugar, adhering to treatment plans, and building other lasting habits.
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collage
