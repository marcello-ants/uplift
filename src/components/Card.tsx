import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { ConditionalWrapper } from '../utils/misc'

enum CardVariant {
    orange,
    yellowTop,
    yellowBottom,
    green,
    orangePurple,
    solid
}

export type CardVariantStrings = keyof typeof CardVariant

/**
 * Clickable card component
 */
const Card = ({
    variant,
    children,
    className,
    link
}: {
    variant: CardVariantStrings
    children?: React.ReactNode
    className?: string
    link?: string
}): React.ReactElement => {
    const cardClasses = classnames(
        'flex-1 rounded-xl px-4 lg:px-6 py-6 relative overflow-hidden drop-shadow',
        {
            'bg-gray-100': variant !== 'orangePurple',
            'bg-primary-100': variant === 'orangePurple',
            'hover:bg-gray-200 cursor-pointer': link
        },
        className
    )

    const getBlob = (v: CardVariantStrings) => {
        const baseBlobClasses = 'absolute rounded-full blur-xl opacity-50 transform'
        const blobClasses = classnames(baseBlobClasses, {
            'w-[400px] h-[400px] bg-primary-200 right-0 bottom-0 translate-y-14 translate-x-14': v === 'orange',
            'w-[400px] h-[400px] bg-amber-100 left-0 top-0 -translate-y-14 -translate-x-14': v === 'yellowTop',
            'w-[400px] h-[400px] bg-amber-100 left-2/4 bottom-0 -translate-x-2/4 translate-y-2/4': v === 'yellowBottom',
            'w-[400px] h-[400px] bg-green-200 right-0 top-0 -translate-y-14 translate-x-14': v === 'green',
            'w-[400px] h-[400px]': v === 'solid'
        })

        switch (v) {
            case 'orangePurple':
                return (
                    <>
                        <div
                            className={classnames(
                                baseBlobClasses,
                                'bg-purple-200 w-[450px] h-[450px] left-0 top-0 -translate-x-28'
                            )}
                        />
                        <div
                            className={classnames(
                                baseBlobClasses,
                                'bg-primary-100 w-[400px] h-[400px] left-0 top-0 transform translate-y-20 -translate-x-28'
                            )}
                        />
                    </>
                )
            default:
                return <div className={blobClasses} />
        }
    }

    return (
        <ConditionalWrapper
            condition={link}
            wrapper={(children: React.ReactNode) => (
                <Link href={link!}>
                    <a>{children}</a>
                </Link>
            )}>
            <div className={cardClasses}>
                {getBlob(variant)}
                {children}
            </div>
        </ConditionalWrapper>
    )
}

export default Card
