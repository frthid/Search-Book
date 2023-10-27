import React, {useEffect} from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Form.module.scss';
import FormSection from '../FormSection/FormSection';
import Dropdown from '../UI/Dropdown/Dropdown';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchBook } from '../../services/fetchBook';
import { setBookName, setSelected } from '../../../store/reducers/BookFormSlice';

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  // const [bookName, setBookName] = useState<string>('');
  // const [selected, setSelected] = useState<string>('all');
  const bookName = useAppSelector((state) => state.bookForm.bookName)
  const selected = useAppSelector((state) => state.bookForm.selected)
  
  const handleInputChange = (value: string) => {
    dispatch(setBookName(value))
  };

  const handleSelectChange = (value: string) => {
    dispatch(setSelected(value)); 
  };

  useEffect(() => {
    dispatch(fetchBook(bookName, selected))
  }, [selected])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchBook(bookName, selected));
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
