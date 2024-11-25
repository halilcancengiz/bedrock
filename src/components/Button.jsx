import React from 'react'

const Button = ({ children, className }) => {
    return (
        <div className={`bg-primary text-white px-6 py-3 so-semibold text-sm leading-[20px] h-12 flex items-center justify-center ${className}`}>
            {children}
        </div>
    )
}

export default Button