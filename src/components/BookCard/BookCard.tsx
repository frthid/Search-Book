import React from 'react';
import { IBook } from '../../types/types';
import classes from './BookCard.module.scss';

interface IBookCard {
  book: IBook;
}

const BookCard: React.FC<IBookCard> = ({ book }) => {
  // const {} = book
  const { title, authors, publishedDate, categories, imageLinks } = book.volumeInfo;

  return (
    <div className={classes.card}>
      <div className={classes.card__img}>
        <img src={imageLinks.thumbnail} />
      </div>
      <div className={classes.card__content}>
        <div className={classes.card__content__categories}>
          <u>{categories ? categories.join(', ') : 'Нет категории'}</u>
        </div>
        <div className={classes.card__content__title}>
          <h3>{title}</h3>
        </div>
        <div className={classes.card__content__autors}>
          <i>{authors ? authors.join(', ') : 'Неизвестно'}</i>
        </div>
        <div className={classes.card__content__year}>{publishedDate}</div>
      </div>
    </div>
  );
};

export default BookCard;
