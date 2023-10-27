import { AppDispatch } from './../../store/store';
import { constants } from '../constants/constants';
import axios from 'axios';
import { bookSlice } from '../../store/reducers/BookSlice';
import { IFetchBooksRequest } from '../types/types';
//  const adress = `${REQUEST_ADRESS}?q=${intitleQuery}${categoryQuery}${paginationQuery}&key=${API_KEY}`;
//https://www.googleapis.com/books/v1/volumes?q=js&AIzaSyAIgZDe3cXVegIR9bXiQQLl2O7WambG7yg
// const adress = `${REQUEST_ADRESS}?q=ts&key=${API_KEY}` 

// interface IFetchBookProps {
//   searchQuery: string;
//   selectedCategory: string;
// }

export const fetchBook = (searchQuery: string, selectedCategory: string) => {

  const { FETCH_ERROR_MESSAGE, REQUEST_ADRESS, API_KEY } = constants;

  const intitleQuery = `+intitle:${searchQuery}`;
  const categoryQuery = selectedCategory === 'all' ? '' : `+subject:${selectedCategory}`;
  // const categoryQuery = '';
  const adress = `${REQUEST_ADRESS}?q=${intitleQuery}${categoryQuery}&key=${API_KEY}`;

  console.log('Запрос начат. Запрашиваемые данные:', intitleQuery);

  return async (dispatch: AppDispatch) => {
    try {
      dispatch(bookSlice.actions.booksFetching())
      console.log('Отправка GET-запроса по адресу:', adress);
      const response = await axios.get<IFetchBooksRequest>(adress)
      console.log('Ответ от сервера получен. Данные:', response.data);
      dispatch(bookSlice.actions.booksFetchingSuccess(response.data.items))
    } catch (error) {
      dispatch(bookSlice.actions.booksFetchingError(FETCH_ERROR_MESSAGE))
    }
  };
};
