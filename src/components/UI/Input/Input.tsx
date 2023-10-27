import React, { ChangeEvent } from 'react';
import classes from './Input.module.scss';

interface IInputProps {
  id: string;
  value: string;
  type: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const Input: React.FC<IInputProps> = ({ value, onChange, placeholder = 'Введите значение', type }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <input className={classes.input} type={type} value={value} placeholder={placeholder} onChange={handleInputChange} />
    </>
  );
};

export default Input;
