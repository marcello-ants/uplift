import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Typography from '../../components/Typography'
import Logos from './Logos'
import { SHARED_DATA } from '../../data/common'

const Hero = ({ headerText, subheaderText }: { headerText: string; subheaderText: string }): React.ReactElement => {
    const images = [
        '/images/product_watch.png',
        '/images/product_post.png',
        '/images/product_survey.png',
        '/images/product_upsell.png'
    ]
    const [image, setImage] = useState(0)
    function switchImage() {
        setImage(image + 1)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setImage((prevImage) => (prevImage + 1) % images.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className='flex flex-col space-y-20'>
            <div>
                <div
                    className='max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 pt-32 pb-10 lg:gap-14 lg:py-48 justify-center'
                    style={{
                        backgroundImage: 'url(/images/hero-bg.png)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        marginBottom: '40px'
                    }}>
                    <div className='col-span-6 px-8'>
                        <div className='transform lg:translate-y-10 flex flex-col space-y-6'>
                            <Typography variant='h1' className='text-left'>
                                {headerText}
                            </Typography>
                            <Typography variant='xl' as='h2' className='font-normal text-left'>
                                {subheaderText}
                            </Typography>
                            <div className='flex flex-col space-y-3 items-center justify-left sm:flex-row sm:space-x-3 sm:space-y-0 lg:justify-start'>
                                <Button link={SHARED_DATA.DEFAULT_TRIAL_LINK} size='xl' className='w-full sm:w-auto'>
                                    Start free trial
                                </Button>
                                <Button
                                    variant='outlined'
                                    link={SHARED_DATA.DEMO_LINK}
                                    size='xl'
                                    className='w-full sm:w-auto'>
                                    Schedule a demo
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-6 relative -mx-2 px-10 py-4 lg:px-0 lg:mx-0'>
                        <div className='lg:absolute lg:top-20 lg:left-0 lg:w-[600px] lg:h-[430px] -mt-14 lg:bg-cover lg:bg-top'>
                            <img src={images[image]} className='rounded-md drop-shadow-lg border' />
                        </div>
                    </div>
                </div>
            </div>
            <Logos
                label={
                    <span className='text-black-alpha'>
                        Personal development leaders use Framework to grow their community, business and impact.
                    </span>
                }
            />
        </section>
    )
}

export default Hero
