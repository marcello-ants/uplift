import React from 'react'
import classnames from 'classnames'
import { TypographyTagStrings, TypographyVariantStrings, getTagFromVariant } from '../utils/typography'

const styles: { base: string; variants: { [type: string]: string } } = {
    base: 'font-inter break-words',
    variants: {
        h1: 'text-6xl md:text-8xl lg:text-9xl font-nuform font-bold',
        h2: 'text-5xl md:text-6xl lg:text-8xl font-nuform font-bold',
        h3: 'text-4xl md:text-5xl lg:text-7xl font-nuform font-bold',
        h4: 'text-4xl md:text-5xl lg:text-7xl font-nuform font-semibold',
        h5: 'text-2xl lg:text-3xl font-nuform font-semibold',
        h6: 'text-xl lg:text-2xl font-nuform font-semibold',
        xl: 'text-2xl',
        lg: 'text-lg',
        base: 'text-base',
        sm: 'text-sm',
        xs: 'text-xs'
    }
}

/**
 * Typography components
 */
const Typography = ({
    children,
    className,
    variant = 'base',
    color,
    as,
    ...props
}: {
    children: React.ReactNode
    className?: string
    variant?: TypographyVariantStrings
    as?: TypographyTagStrings
    color?: string
    [prop: string]: any
}): React.ReactElement => {
    const classes = classnames(
        styles.base,
        styles.variants[variant],
        { 'text-black': !color && variant === 'base' },
        color,
        className
    )

    const Tag = as ? as : getTagFromVariant(variant)

    return (
        <Tag className={classes} {...props}>
            {children}
        </Tag>
    )
}
export default Typography
