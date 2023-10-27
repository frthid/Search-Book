//  const adress = `${REQUEST_ADRESS}?q=${intitleQuery}${categoryQuery}${paginationQuery}&key=${API_KEY}`;
//https://www.googleapis.com/books/v1/volumes?q=js&AIzaSyAIgZDe3cXVegIR9bXiQQLl2O7WambG7yg

import { Dispatch } from 'redux';
import { BooksAction, BooksActionTypes } from '../types/types';
import { constants } from '../constants/constants';
import axios from 'axios';

export const fetchBook = (searchQuery: string) => {
  const { FETCH_ERROR_MESSAGE, REQUEST_ADRESS, API_KEY } = constants;
  // const adress = `${REQUEST_ADRESS}?q=ts&key=${API_KEY}`
  const intitleQuery = `+intitle:${searchQuery}`;
  const categoryQuery = ``;
  // const categoryQuery = selectedCategory.value === 'all' ? '' : `+subject:${selectedCategory.value}`;

  const adress = `${REQUEST_ADRESS}?q=${intitleQuery}${categoryQuery}&key=${API_KEY}`;
  console.log('Запрос начат. Запрашиваемые данные:', intitleQuery);

  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      dispatch({ type: BooksActionTypes.FETCH_BOOKS });
      console.log('Отправка GET-запроса по адресу:', adress);
      const response = await axios.get(adress);
      console.log('Ответ от сервера получен. Данные:', response.data);
      dispatch({ type: BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: response.data.items });
    } catch (error) {
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS_ERROR,
        payload: FETCH_ERROR_MESSAGE,
      });
    }
  };
};
