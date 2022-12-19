/**
 * Conditionally wraps an element
 */
export const ConditionalWrapper = ({
    condition,
    wrapper,
    children
}: {
    condition: any
    wrapper: any
    children: React.ReactNode
}) => (condition ? wrapper(children) : children)
