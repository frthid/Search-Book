import React from 'react';
import classes from './Button.module.scss';

interface IButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  onClick: (e: React.FormEvent) => void;
}

const Button: React.FC<IButtonProps> = ({ onClick, text, type }) => {
  return (
    <button type={type} onClick={onClick} className={classes.btn}>
      {text}
    </button>
  );
};

export default Button;
