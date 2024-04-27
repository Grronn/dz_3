import React from 'react'

export const Button = ({ click, text, isActive  }) => {
  const buttonClassName = isActive ? 'button-active' : 'button';
  return (
    <>
      <button className={buttonClassName} onClick={() => click()}>{text}</button>
    </>
  )
}
