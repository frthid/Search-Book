import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import { IBook } from '../../types/types';
import classes from './BookList.module.scss';
import { useAppSelector } from '../../hooks/redux';

const BookList: React.FC = () => {
  const { books, loading, error } = useAppSelector((state) => state.bookReducer);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.list}>
        {books.map((book: IBook) => {
          return <BookCard book={book} key={book.id} />;
        })}
      </div>
    </div>
  );
};

export default BookList;
