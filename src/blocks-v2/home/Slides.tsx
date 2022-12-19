import React from 'react'
import Slider from '../../components-v2/Slider'
import Typography from '../../components/Typography'
import Button from '../../components-v2/Button'
import { slides } from '../../data-v2/slides'

const Slides = (): React.ReactElement => {
    return (
        <section>
            <div className='flex flex-col lg:flex-row justify-between items-start w-full pb-20 space-y-5 max-w-screen-xl px-8 xl:mx-auto lg:justify-center lg:overflow-hidden relative'>
                <div className='lg:w-2/3'>
                    <Typography variant='h3' className='text-left mb-5'>
                        Loved by thousands of creators
                    </Typography>
                    <Typography className='font-normal text-left'>
                        Teach students the fun way. Help students push through difficult challenges by making your
                        course highly motivating.
                    </Typography>
                </div>
                <div className='flex justify-center lg:w-1/3'>
                    <Button variant='primary' size='lg' link='/'>
                        Get in touch
                    </Button>
                </div>
            </div>

            <Slider>
                {slides.map((item) => (
                    <div key={item.title}>
                        <div className='h-full border border-black rounded mb-5 overflow-hidden'>
                            <img src={item.image} className='w-full h-full object-cover' />
                        </div>
                        <Typography variant='h6' className='mb-1'>
                            {item.title}
                        </Typography>
                        <Typography className='font-normal'>{item.description}</Typography>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default Slides
