import React from 'react'
import Button from '../../components-v2/Button'
import Typography from '../../components/Typography'

const Challenge = ({
    headerText,
    subheaderText
}: {
    headerText: string
    subheaderText: string
}): React.ReactElement => {
    return (
        <section className='flex flex-col space-y-20'>
            <div>
                <div className='max-w-screen-xl mx-auto pt-32 pb-10  lg:py-48 justify-center'>
                    <div className='px-8'>
                        <div className='transform lg:translate-y-10 flex flex-col space-y-10'>
                            <Typography variant='h3' className='text-center font-semi'>
                                {headerText}
                            </Typography>
                            <div className='flex space-x-5 items-center justify-center'>
                                <img src='/images/twitter_logo.png' className='h-[49px] w-[60px]' />
                                <Typography variant='h1' as='h2'>
                                    {subheaderText}
                                </Typography>
                            </div>
                            <div className='flex items-center justify-center'>
                                <Button
                                    link='https://building-in-public.firebaseapp.com/'
                                    size='xl'
                                    className='w-full sm:w-auto'>
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Challenge
