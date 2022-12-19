import React from 'react'
import Marquee from 'react-fast-marquee'

const Logos = (): React.ReactElement => {
    return (
        <div className='flex flex-col items-center space-y-10 overflow-hidden'>
            <div className='max-w-screen-xl'>
                <Marquee
                    // off-white-2 gradient
                    gradientColor={[255, 242, 234]}
                    speed={40}>
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
