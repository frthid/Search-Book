import React, { useEffect } from 'react';
import { useTypesSelector } from '../../hooks/useTypesSelector';
import { useAction } from '../../hooks/useAction';

const BookList: React.FC = () => {
  const { books, error, loading } = useTypesSelector((state) => state.books);
  const {fetchBook} = useAction()

  useEffect(() => {
    fetchBook()
    console.log(books)
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if  (error) {
    return <h1>{error}</h1>
  }

  return <div>
    {books.map(book => 
      <div key={book.id}>{book.volumeInfo.title}</div>
        )}
  </div>;
};

export default BookList;
