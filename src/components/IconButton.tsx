import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'

const styles: { base: string; variants: { [type: string]: string }; sizes: { [type: string]: string } } = {
    base: 'flex hover:bg-gray-200',
    variants: {
        primary: 'text-gray-500',
        outlined: 'border-black text-black bg-white'
    },
    sizes: {
        md: 'rounded-md justify-center items-center h-[36px] w-[36px]',
        lg: 'rounded-lg px-6 text-center py-3',
        xl: 'rounded-lg px-6 text-center py-3.5 text-base min-w-[200px]'
    }
}

/**
 * Basic button used throughout the UI
 */
const IconButton = ({
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

export default IconButton
