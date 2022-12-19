import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classnames from 'classnames'
import { ThreeBarsIcon } from '@primer/octicons-react'
import Button from './Button'
import Typography from './Typography'
import { navbarLinks, mobileExtraLinks } from '../data/navbar'
import { SHARED_DATA } from '../data/common'

/**
 * Top floating navbar used throughout the UI
 */
const Navbar = ({
    wide = false,
    onAuxillaryExpandClick
}: {
    wide?: boolean
    onAuxillaryExpandClick?: () => void
}): React.ReactElement => {
    const router = useRouter()
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    const classNames = classnames('relative flex flex-row items-center space-x-4 py-3 transition-all', {
        'max-w-screen-xl px-8 mx-auto': !wide,
        'max-w-screen pl-2 pr-8 border-b border-b-gray-200': wide
    })

    const closeNav = () => setMobileNavOpen(false)

    useEffect(() => {
        router.events.on('hashChangeStart', closeNav)

        return () => {
            router.events.off('hashChangeStart', closeNav)
        }
    }, [router, setMobileNavOpen])

    const [clientWindowHeight, setClientWindowHeight] = useState(0)
    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY)
    }

    useEffect(() => {
        let backgroundTransparacyVar = clientWindowHeight / 100

        if (backgroundTransparacyVar < 1) {
            setBackgroundTransparacy(backgroundTransparacyVar)
        }
    }, [clientWindowHeight])

    return (
        <div className='fixed top-0 left-0 right-0 z-20'>
            <div
                className='absolute left-0 right-0 bottom-0 top-0'
                style={{
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    background: `rgba(255, 255, 255, ${backgroundTransparacy})`
                }}
            />
            <div className={classNames}>
                <div className='flex-1 flex flex-row items-center space-x-4'>
                    {onAuxillaryExpandClick && (
                        <button
                            onClick={onAuxillaryExpandClick}
                            className='block lg:hidden rounded-lg hover:bg-gray-100 p-2 transition-all ml-2'>
                            <ThreeBarsIcon size={24} />
                        </button>
                    )}
                    <Link href='/'>
                        <a>
                            <img src='/images/logo.svg' className='cursor-pointer w-[144px]' alt='Logo' />
                        </a>
                    </Link>
                </div>
                <div className='flex-1 flex justify-end'>
                    <nav className='hidden lg:block'>
                        <ul className='flex flex-row space-x-6 items-center mb-0'>
                            {navbarLinks.map((navLink) => (
                                <li
                                    key={navLink.label}
                                    className='font-satoshi text-gray-500 hover:text-black transition-all whitespace-nowrap'>
                                    <Link href={navLink.link}>{navLink.label}</Link>
                                </li>
                            ))}
                            <li>
                                <Button link={SHARED_DATA.DEFAULT_TRIAL_LINK}>Start free trial</Button>
                            </li>
                        </ul>
                    </nav>
                    <button
                        className='text-right block lg:hidden font-satoshi text-base text-black font-bold'
                        onClick={() => setMobileNavOpen(true)}>
                        <ThreeBarsIcon size={24} />
                    </button>
                    <div
                        className={`block lg:hidden fixed bg-black bg-opacity-20 z-40 top-0 left-0 bottom-0 right-0 transition-all ${
                            mobileNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                        onClick={() => setMobileNavOpen(false)}
                    />

                    <nav
                        className={`block lg:hidden fixed bottom-0 left-0 right-0 rounded-t-xl bg-white p-6 pb-10 z-50 transform drop-shadow-lg transition-all ${
                            mobileNavOpen ? 'translate-y-0 opacity-100' : 'opacity-0 translate-y-full'
                        }`}>
                        <Button
                            link={SHARED_DATA.DEFAULT_TRIAL_LINK}
                            variant='primary'
                            size='xl'
                            className='w-full text-center'>
                            Start Free Trial
                        </Button>
                        <ul className='flex flex-col space-y-6 mb-0 mt-10'>
                            {navbarLinks.map((navLink) => (
                                <Typography key={navLink.label} as='li' variant='h6'>
                                    <Link href={navLink.link}>{navLink.label}</Link>
                                </Typography>
                            ))}
                        </ul>
                        <div className='flex flex-row space-x-4 mt-20'>
                            <ul className='flex-1 flex flex-col space-y-1 mb-0 justify-end'>
                                {mobileExtraLinks.map((navLink) => (
                                    <Typography key={navLink.label} as='li' variant='base' color='text-gray-500'>
                                        <Link href={navLink.link}>{navLink.label}</Link>
                                    </Typography>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
