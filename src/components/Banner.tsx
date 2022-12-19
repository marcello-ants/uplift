import React, { useState } from 'react'
import Typography from '../components/Typography'
import { XIcon } from '@primer/octicons-react'
import { SHARED_DATA } from '../data/common'

const Banner = (): React.ReactElement => {
    const [open, setOpen] = useState(true)

    return (
        <>
            {open ? (
                <div className='alert-footer w-full fixed bottom-0 bg-contrast z-10'>
                    <div className='flex items-center justify-between w-full px-8 py-4 '>
                        <Typography variant='base' color='text-white'>
                            Join{' '}
                            <strong>
                                <a
                                    target='_blank'
                                    href={SHARED_DATA.FRAMEWORK_HUB_LINK}
                                    rel='noopener noreferrer'
                                    className='font-bold text-amber-900 hover:underline'>
                                    Framework Hub
                                </a>
                            </strong>{' '}
                            to experience what Framework looks like, learn best practices, and meet others like you!
                        </Typography>

                        <button onClick={() => setOpen(false)}>
                            <XIcon size={24} fill='white' />
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Banner
