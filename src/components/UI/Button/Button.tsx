import React from 'react'

interface IButtonProps {
  onClick: () => void
}

const Button: React.FC<IButtonProps> = ({onClick}) => {
  return (
    <button onClick={onClick}>Искать</button>
  )
}

export default Button