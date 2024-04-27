import React from 'react'

export const FormInput = ({ value, change, text, type }) => {
    return (
        <>
            <span className='textField'>{text}</span>
            <input className='inputField' type={type} value={value} onChange={change} />
        </>
    )
}
