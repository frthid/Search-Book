import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Form.module.scss';
import FormSection from '../FormSection/FormSection';
import Dropdown from '../UI/Dropdown/Dropdown';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchBook } from '../../services/fetchBook';
import { setBookName, setSelected } from '../../../store/reducers/BookFormSlice';
import { setStartingIndex } from '../../../store/reducers/PaginationSlice';

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const {bookName, selected}= useAppSelector((state) => state.bookFormReducer)
  const {startingIndex, currentIndex} = useAppSelector((state) => state.PaginationReducer)

  const handleInputChange = (value: string) => {
    dispatch(setStartingIndex(0));
    dispatch(setBookName(value))
  };

  const handleSelectChange = (value: string) => {
    dispatch(setStartingIndex(0));
    dispatch(setSelected(value)); 
  };

  // useEffect(() => {
  //   dispatch(fetchBook(bookName, selected, startingIndex, currentIndex))
  // }, [selected])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchBook(bookName, selected, startingIndex, currentIndex));
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <FormSection title='Найти книгу' labelFor='searchInput'>
          <Input id='searchInput' type='text' value={bookName} onChange={handleInputChange} />
        </FormSection>
        <FormSection title='Выбрать категорию' labelFor='select'>
          <Dropdown selected={selected} onChange={handleSelectChange} />
        </FormSection>
        <Button type='submit' text='Найти' onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
