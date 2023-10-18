import React, { useEffect } from 'react';
import { useTypesSelector } from '../../hooks/useTypesSelector';
import { useDispatch } from 'react-redux';
import { fetchBook } from '../../services/fetchBook';

const BookList: React.FC = () => {
  const { books, error, loading } = useTypesSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
    console.log(books)
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if  (error) {
    return <h1>{error}</h1>
  }

  return <div>
    {/* {books.map(book => 
      <div>{book.items}</div>
        )} */}
  </div>;
};

export default BookList;
