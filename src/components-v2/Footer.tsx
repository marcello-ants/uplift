import React from 'react'
import Link from 'next/link'
import Typography from '../components/Typography'
import { footerProduct, footerCompany, footerResources } from '../data/footer'

const Footer = (): React.ReactElement => (
    <div>
        <div className='max-w-screen-xl mx-auto pl-10 py-20'>
            <div className='flex flex-col lg:flex-row mb-10 space-y-10 lg:space-y-0'>
                <div className='flex-1'>
                    <Link href='/'>
                        <a>
                            <img
                                src='/images/logomark2.svg'
                                className='cursor-pointer w-[96px] opacity-70'
                                alt='Logo'
                            />
                        </a>
                    </Link>
                </div>
                <div className='flex-1 grid grid-cols-2 gap-y-10 lg:grid-cols-3'>
                    <div className='col-span-1'>
                        <nav>
                            <ul>
                                <li className='uppercase text-gray-500 text-sm font-bold transition-all'>Product</li>
                                {footerProduct.map((link) => (
                                    <li key={link.label} className='text-gray-500 hover:text-black transition-all mt-3'>
                                        <Link href={link.link}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className='col-span-1'>
                        <nav>
                            <ul>
                                <li className='uppercase text-gray-500 text-sm font-bold transition-all'>Company</li>
                                {footerCompany.map((link) => (
                                    <li key={link.label} className='text-gray-500 hover:text-black transition-all mt-3'>
                                        <Link href={link.link}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className='col-span-1'>
                        <nav>
                            <ul>
                                <li className='uppercase text-gray-500 text-sm font-bold transition-all'>Resources</li>
                                {footerResources.map((link) => (
                                    <li key={link.label} className='text-gray-500 hover:text-black transition-all mt-3'>
                                        <Link href={link.link}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    {/* <div className='col-span-1 lg:col-span-2'>
                        <ul>
                            {footerSocials.map((link) => (
                                <li
                                    key={link.label}
                                    className='font-satoshi text-gray-500 hover:text-black transition-all'>
                                    <Link href={link.link}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                </div>
            </div>
            <Typography variant='base' color='text-alpha-black'>
                &copy; {new Date().getFullYear()} Framework. All rights reserved.
            </Typography>
        </div>
    </div>
)

export default Footer
