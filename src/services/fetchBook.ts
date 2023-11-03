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
//   maxResults: number;
// }

// export const fetchBook = ({ searchQuery, selectedCategory, maxResults }: IFetchBookProps) => {
export const fetchBook = ( searchQuery: string, selectedCategory: string, startingIndex: number, maxResults: number,) => {
  const { FETCH_ERROR_MESSAGE, REQUEST_ADRESS, API_KEY } = constants;
  const intitleQuery = `+intitle:${searchQuery}`;
  const categoryQuery = selectedCategory === 'all' ? '' : `+subject:${selectedCategory}`;
  const paginationQuery = `&startIndex=${startingIndex}&maxResults=${maxResults}`;
  const adress = `${REQUEST_ADRESS}?q=${intitleQuery}${categoryQuery}${paginationQuery}&key=${API_KEY}`;

  return async (dispatch: AppDispatch) => {
    try {
      dispatch(bookSlice.actions.booksFetching());
      console.log('Отправка GET-запроса по адресу:', adress);
      const response = await axios.get<IFetchBooksRequest>(adress);
      console.log('Ответ от сервера получен. Данные:', response.data);
      dispatch(bookSlice.actions.booksFetchingSuccess(response.data.items));
      dispatch(bookSlice.actions.booksFetchingTotalItems(response.data.totalItems))
    } catch (error) {
      dispatch(bookSlice.actions.booksFetchingError(FETCH_ERROR_MESSAGE));
    }
  };
};
