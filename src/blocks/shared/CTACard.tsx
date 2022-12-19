import React from 'react'
import Typography from '../../components/Typography'
import Button from '../../components/Button'

export default function CTACard({
    header,
    detail,
    buttonText,
    buttonLink,
    buttonVariant
}: {
    header: string
    subheader: string
    detail: string
    buttonText: string
    buttonLink: string
    buttonVariant: string
}) {
    return (
        //@ts-ignore
        <div className='flex flex-col py-20 px-6 flex-1 space-y-4 justify-center items-center relative grow bg-primary-contrast'>
            <Typography variant='h4' className='text-center' color='text-white'>
                {header}
            </Typography>
            <Typography variant='lg' className='text-center' color='text-white'>
                {detail}
            </Typography>
            <Button variant={buttonVariant} link={buttonLink} size='xl'>
                {buttonText}
            </Button>
        </div>
    )
}

export function CTACardSmall({
    header,
    subheader,
    buttonText,
    buttonLink,
    buttonVariant
}: {
    cardVariant: string
    header: string
    subheader: string
    detail: string
    buttonText: string
    buttonLink: string
    buttonVariant: string
}) {
    return (
        //@ts-ignore
        <div className='flex flex-col flex-1 space-y-4 relative grow'>
            <Typography variant='xl'>{header}</Typography>
            <Typography variant='h6' className='font-normal' color='text-black'>
                {subheader}
            </Typography>
            <Button variant={buttonVariant} link={buttonLink} size='lg' className='w-fit'>
                {buttonText}
            </Button>
        </div>
    )
}
