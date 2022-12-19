import React from 'react'
import Button from '../../components-v2/Button'
import Typography from '../../components/Typography'
import Logos from './Logos'
import { SHARED_DATA } from '../../data/common'

const Hero = ({ headerText, subheaderText }: { headerText: string; subheaderText: string }): React.ReactElement => {
    return (
        <section className='bg-off-white-200 flex flex-col space-y-20'>
            <div className='flex flex-col bg-turquoise border-b border-b-black'>
                <div className='max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 pt-32 pb-10 lg:gap-14 lg:py-48 justify-center'>
                    <div className='col-span-6 px-8'>
                        <div className='transform lg:translate-y-10 flex flex-col space-y-6'>
                            <Typography variant='h1' className='text-left'>
                                {headerText}
                            </Typography>
                            <Typography as='h2' className='font-normal text-left'>
                                {subheaderText}
                            </Typography>
                            <div className='flex flex-col space-y-3 items-center justify-left sm:flex-row sm:space-x-3 sm:space-y-0 lg:justify-start'>
                                <Button link={SHARED_DATA.DEFAULT_TRIAL_LINK} size='lg' className='w-full sm:w-auto'>
                                    Try it now
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-6 relative -mx-2 px-10 py-4 lg:px-0 lg:mx-0'>
                        <div className='lg:absolute lg:top-20 lg:left-0 lg:w-[600px] lg:h-[430px] -mt-14 lg:bg-red-200 lg:bg-top' />
                        <div className='hidden lg:flex'>
                            <img
                                src='/images/button_direction.svg'
                                className='absolute z-10 top-[400px] -left-28 max-w-[400px]'
                            />
                            <img
                                src='/images/button_bar.svg'
                                className='absolute z-10 top-52 -right-32 max-w-[400px]'
                            />
                            <img
                                src='/images/button_red.svg'
                                className='absolute z-10 top-[480px] -right-10 max-w-[400px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Logos />
        </section>
    )
}

export default Hero
