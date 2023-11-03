import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import { IBook } from '../../types/types';
import classes from './BookList.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Button from '../../components/UI/Button/Button';
import { fetchBook } from '../../services/fetchBook';
import { setStartingIndex } from '../../../store/reducers/PaginationSlice';

const BookList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { books, loading, error, totalItems } = useAppSelector((state) => state.bookReducer);
  const { bookName, selected } = useAppSelector((state) => state.bookFormReducer);
  const { currentIndex, startingIndex } = useAppSelector((state) => state.PaginationReducer);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  const loadMoreBooks = () => {
    let newStartingIndex = startingIndex + currentIndex;
    let indexRemainder = currentIndex;

    if (newStartingIndex >= totalItems) {
      newStartingIndex = newStartingIndex - currentIndex;
      indexRemainder = totalItems - newStartingIndex;
    }
    dispatch(setStartingIndex(newStartingIndex));
    dispatch(fetchBook(bookName, selected, newStartingIndex, indexRemainder));
  };
  console.log('Значения:', books);

  return (
    <div className={classes.wrapper}>
      {totalItems !== 0 && <h2>Всего найденно: {totalItems}</h2>}
      {totalItems !== 0 ? (
        <div className={classes.list}>
          {books.map((book: IBook) => {
            return <BookCard book={book} key={book.id} />;
          })}
        </div>
      ) : (
        <div> Пока книг нет</div>
      )}
      {totalItems !== 0  && books.length < totalItems ? (
        <Button type='button' text='Показать еще' onClick={loadMoreBooks} />
      ) : null}
    </div>
  );
};

export default BookList;
