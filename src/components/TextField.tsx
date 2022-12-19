import React from 'react'
import classnames from 'classnames'

/**
 * Textfield for user input
 */
const TextField = ({
    placeholder,
    className,
    onChange,
    value,
    id,
    disabled
}: {
    placeholder?: string
    className?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    id: string
    disabled?: boolean
}) => (
    <input
        placeholder={placeholder}
        className={classnames(
            'font-satoshi border text-sm lg:text-md inline-block transition-all bg-gray-100 rounded-lg px-4 py-3 text-gray-500 outline-0 focus:ring-2 focus:ring-offset-2',
            className
        )}
        type='text'
        onChange={onChange}
        value={value}
        disabled={disabled}
        id={id}
    />
)

export default TextField
