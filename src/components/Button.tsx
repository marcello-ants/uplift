import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'

const styles: { base: string; variants: { [type: string]: string }; sizes: { [type: string]: string } } = {
    base: 'font-satoshi border font-bold text-sm lg:text-md inline-block hover:scale-105 transition-all whitespace-nowrap',
    variants: {
        primary: 'border-primary-900 text-white bg-primary-900',
        outlined: 'border-black text-black bg-white'
    },
    sizes: {
        md: 'rounded-md px-4 text-center py-2',
        lg: 'rounded-lg px-6 text-center py-3',
        xl: 'rounded-lg px-6 text-center py-3.5 text-base min-w-[200px]'
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
