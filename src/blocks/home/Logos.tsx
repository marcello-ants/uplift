import React from 'react'
import Typography from '../../components/Typography'
import Marquee from 'react-fast-marquee'

const Logos = ({ label }: { label?: React.ReactNode }): React.ReactElement => {
    return (
        <div className='flex flex-col items-center space-y-10 overflow-hidden'>
            <Typography variant='lg' as='p' className='text-center font-normal max-w-xxl mx-10 xl:mx-auto'>
                {label}
            </Typography>
            <div className='max-w-screen-xl'>
                <Marquee speed={40}>
                    <img src='/images/customers/dr-paul.png' className='h-10 mr-20' />
                    <img src='/images/customers/flow.png' className='h-10 mr-20' />
                    <img src='/images/customers/this-naked-mind.png' className='h-10 mr-20' />
                    <img src='/images/customers/columbia.png' className='h-10 mr-20' />
                    <img src='/images/customers/haroun.png' className='h-10 mr-20' />
                    <img src='/images/customers/well-being.png' className='h-10 mr-20' />
                </Marquee>
            </div>
        </div>
    )
}

export default Logos
