import React from 'react'

interface IButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  onClick: (e: React.FormEvent) =>  void
}

const Button: React.FC<IButtonProps> = ({onClick, text, type}) => {
  return (
    <button type={type} onClick={onClick}>{text}</button>
  )
}

export default Button