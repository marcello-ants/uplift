import React, { useState } from 'react'
import Typography from '../components/Typography'

/**
 * Expandable accordion used for FAQs
 */
const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className='border-b border-b-gray-500 py-22 relative'>
            <div
                role='button'
                onClick={() => setExpanded(!expanded)}
                className='flex flex-row items-center space-x-4 py-8'>
                <img
                    className='flex-shrink-0 w-4 h-4 bg-contain bg-center bg-no-repeat'
                    src={`/images/icons/${expanded ? 'minus' : 'plus'}.svg`}
                />

                <Typography variant='h5'>{title}</Typography>
            </div>
            <div
                className={`overflow-hidden transition-all ${
                    expanded ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-[0px]'
                }`}>
                <Typography variant='base' className='mb-8 ml-9'>
                    {children}
                </Typography>
            </div>
        </div>
    )
}

export default Accordion
