import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Form.module.scss';

const Form: React.FC = () => {
  const [bookName, setBookName] = useState<string>('');

  const handleInputChange = (value: string) => {
    setBookName(value);
  };

  const handleSubmit = () => {
    console.log('Submitted book name:', bookName);
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <Input value={bookName} onChange={handleInputChange} />
        <Button onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
