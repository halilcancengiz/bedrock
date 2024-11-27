import React from 'react'

const Button = ({ children, className }) => {
    return (
        <button className={`bg-primary text-white px-6 py-3 so-semibold text-sm leading-[20px] h-12 flex items-center justify-center ${className}`}>
            {children}
        </button>
    )
}

export default Button