import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import { IBook } from '../../types/types';
import classes from './BookList.module.scss';
import { useAppSelector } from '../../hooks/redux';
import Button from '../../components/UI/Button/Button';

const BookList: React.FC = () => {
  const { books, loading, error, totalItems } = useAppSelector((state) => state.bookReducer);
  
  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  const loadMoreBooks = () => {

  }

  return (
    <div className={classes.wrapper}>
      Всего найденно: {totalItems}
      <div className={classes.list}>
        {books.map((book: IBook) => {
          return <BookCard book={book} key={book.id} />;
        })}
      </div>
      <Button type='button' text='Загрузить еще' onClick={loadMoreBooks} />
    </div>
  );
};

export default BookList;
