import React, { useEffect } from 'react';
import { useTypesSelector } from '../../hooks/useTypesSelector';
import { useAction } from '../../hooks/useAction';
import BookCard from '../../components/BookCard/BookCard';
import { IBook } from '../../types/types';
import classes from './BookList.module.scss';

const BookList: React.FC = () => {
  const { books, error, loading } = useTypesSelector((state) => state.books);
  const { fetchBook } = useAction();

  useEffect(() => {
    fetchBook();
    console.log(books);
  }, []);

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
