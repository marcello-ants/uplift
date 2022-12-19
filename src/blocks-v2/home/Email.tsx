import React from 'react'
import Typography from '../../components/Typography'

const Email = (): React.ReactElement => {
    return (
        <section className='relative'>
            <div className='bg-email-section lg:overflow-hidden pb-16 lg:pb-28'>
                <div className='max-w-screen-xl px-8 mx-auto'>
                    <Typography variant='h3' className='text-center mb-20'>
                        There’s a better way to teach online
                    </Typography>
                    <div className='col-span-6 relative -mx-2 px-10 py-4 lg:px-0 lg:mx-0 mb-16 lg:mb-28'>
                        <div className='bg-red-200 w-full h-[600px]' />
                    </div>
                    <div className='flex flex-col justify-center lg:px-20 w-full lg:flex-row lg:justify-between space-y-10 lg:space-y-0'>
                        <div className='space-y-4'>
                            <Typography className='text-center' variant='h2'>
                                300k
                            </Typography>
                            <Typography className='text-center' variant='lg'>
                                Learners
                            </Typography>
                        </div>
                        <div className='space-y-4'>
                            <Typography className='text-center' variant='h2'>
                                76%
                            </Typography>
                            <Typography className='text-center' variant='lg'>
                                Completion
                            </Typography>
                        </div>
                        <div className='space-y-4'>
                            <Typography className='text-center' variant='h2'>
                                $1M+
                            </Typography>
                            <Typography className='text-center' variant='lg'>
                                Learners
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Email
