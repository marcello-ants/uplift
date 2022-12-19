enum TypographyTag {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    div,
    li,
    a
}
export type TypographyTagStrings = keyof typeof TypographyTag

enum TypographyVariant {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    xl,
    lg,
    base,
    sm,
    xs
}
export type TypographyVariantStrings = keyof typeof TypographyVariant

/**
 * Converts a variant type to a valid HMTL tagname
 */
export const getTagFromVariant = (variant: TypographyVariantStrings): TypographyTagStrings => {
    if (Object.values(TypographyTag).includes(variant)) return <TypographyTagStrings>variant
    return 'p'
}
