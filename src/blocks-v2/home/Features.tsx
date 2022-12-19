import React from 'react'
import Typography from '../../components/Typography'
import { features } from '../../data-v2/features'

type FeatureCardTypes = {
    title: string
    description: string
    icon: string
}

const FeatureCard = ({ title, description, icon }: FeatureCardTypes) => {
    return (
        <div className='flex flex-col justify-between w-full  bg-white border border-black rounded-lg p-8 space-y-8'>
            <div className='relative'>
                <img src={icon} className='w-[100px]' />
            </div>
            <div>
                <Typography variant='h5' className='mb-3'>
                    {title}
                </Typography>
                <Typography className='font-normal'>{description}</Typography>
            </div>
        </div>
    )
}

const Features = (): React.ReactElement => {
    return (
        <section>
            <div className='my-20 lg:my-0 flex flex-col max-w-screen-xl px-8 xl:mx-auto lg:justify-center space-y-16 items-center lg:overflow-hidden relative'>
                <div className='flex flex-col-reverse lg:flex-row'>
                    <div className='flex flex-col lg:w-1/2'>
                        <Typography variant='h3' className='text-left mb-5'>
                            Attract new students easier. Recoup ad costs faster.
                        </Typography>
                        <Typography className='font-normal text-left'>
                            Mi sed adipiscing dolor vestibulum enim vestibulum vestibulum urna sit adipiscing egestas
                            dui vestibulum at iaculis magnis imperdiet turient venenatis vestibulum penatibus nam.
                        </Typography>
                    </div>
                    <div className='flex justify-center mb-12 lg:justify-end lg:w-1/2'>
                        <img src='/images/shape-1.png' className='max-w-[400px]' />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 pb-20'>
                    {features.map((feature, index) => (
                        <div className='col-span-4' key={index + 1}>
                            <FeatureCard title={feature.title} description={feature.description} icon={feature.icon} />
                        </div>
                    ))}
                </div>
                <div className='flex flex-col lg:flex-row lg:space-x-10'>
                    <div className='flex mb-12 lg:w-1/2'>
                        <div className='bg-red-200 w-full h-[400px]' />
                    </div>
                    <div className='flex lg:w-1/2'>
                        <div className='text-right transform lg:translate-y-10 flex flex-col mb-20'>
                            <Typography variant='h3' className='text-left mb-5'>
                                Earn an income teaching what you love
                            </Typography>
                            <Typography className='font-normal text-left'>
                                Mi sed adipiscing dolor vestibulum enim vestibulum vestibulum urna sit adipiscing
                                egestas dui vestibulum at iaculis magnis imperdiet turient venenatis vestibulum
                                penatibus nam.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
