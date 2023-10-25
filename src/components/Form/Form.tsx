import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Form.module.scss';
import { useAction } from '../../hooks/useAction';
import FormSection from '../FormSection/FormSection';
import Dropdown from '../UI/Dropdown/Dropdown';

const Form: React.FC = () => {
  const [bookName, setBookName] = useState<string>('');
  const [selected, setSelected] = useState<string>('all');
  const { fetchBook } = useAction();
  
  const handleInputChange = (value: string) => {
    setBookName(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchBook(bookName);
    console.log('Submitted book name:', bookName);
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <FormSection title='Найти книгу' labelFor='searchInput'>
          <Input id='searchInput' type='text' value={bookName} onChange={handleInputChange} />
        </FormSection>
        <FormSection title='Выбрать категорию' labelFor='select'>
          <Dropdown selected={selected} setSelected={setSelected} />
        </FormSection>
        <Button type='submit' text='Найти' onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
