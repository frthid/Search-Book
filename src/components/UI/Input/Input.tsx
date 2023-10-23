import React, { ChangeEvent } from 'react';

interface IInputProps {
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<IInputProps> = ({value, onChange}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <>
      <input type='text' value={value} onChange={handleInputChange}/>
    </>
  );
};

export default Input;
