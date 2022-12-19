import React from 'react'
import Typography from '../components/Typography'

/**
 * User testimonial
 */
const Testimonial = ({
    children,
    image,
    name,
    tagline
}: {
    children: React.ReactNode
    image: string
    name: string
    tagline: React.ReactNode
}): React.ReactElement => (
    <div className='flex-1 flex flex-col space-y-4 border bg-white rounded-lg shadow-lg p-6'>
        <div className='flex-col flex items-center space-y-2 '>
            <img src={image} className='rounded-full w-12 h-12' alt='Testimonial avatar' />
            <Typography variant='base' color='text-black' className='font-bold'>
                {name}
            </Typography>
            {tagline}
        </div>

        <Typography variant='lg' className='font-normal'>
            {children}
        </Typography>
    </div>
)

export default Testimonial
