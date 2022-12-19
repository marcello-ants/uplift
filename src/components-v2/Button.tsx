import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'

const styles: { base: string; variants: { [type: string]: string }; sizes: { [type: string]: string } } = {
    base: 'font-satoshi border font-bold text-sm rounded-full lg:text-md inline-block hover:scale-105 transition-all whitespace-nowrap uppercase',
    variants: {
        primary: 'border-black bg-white',
        outlined: 'border-black text-black'
    },
    sizes: {
        md: 'text-center py-3 px-8',
        lg: 'text-center py-5 px-12',
        xl: 'text-center py-6 px-15 text-base min-w-[200px]',
        cta: 'text-center py-14 px-25 text-xl min-w-[200px] w-full'
    }
}

/**
 * Basic button used throughout the UI
 */
const Button = ({
    children,
    className,
    link,
    variant = 'primary',
    size = 'md',
    ...props
}: {
    children: React.ReactNode
    className?: string
    link: string
    variant?: string
    size?: string
    [prop: string]: any
}): React.ReactElement => {
    const classes = classnames(styles.base, styles.variants[variant], styles.sizes[size], className)

    return link ? (
        <Link href={link}>
            <a className={classes} {...props}>
                {children}
            </a>
        </Link>
    ) : (
        <button {...props} className={classes}>
            {children}
        </button>
    )
}

export default Button
