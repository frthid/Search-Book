//  const adress = `${REQUEST_ADRESS}?q=${intitleQuery}${categoryQuery}${paginationQuery}&key=${API_KEY}`;
//https://www.googleapis.com/books/v1/volumes?q=js&AIzaSyAIgZDe3cXVegIR9bXiQQLl2O7WambG7yg

import { Dispatch } from 'redux';
import { BooksAction, BooksActionTypes } from '../types/types';
import constants from '../constants/constants';
import axios from 'axios';

export const fetchBook = () => {
  const { FETCH_ERROR_MESSAGE, REQUEST_ADRESS, API_KEY } = constants;
  const adress = `${REQUEST_ADRESS}?q=js&key=${API_KEY}`

  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      dispatch({ type: BooksActionTypes.FETCH_BOOKS });
      const response = await axios.get(adress);
      dispatch({type: BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: response.data.items})
    } catch (error) {
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS_ERROR,
        payload: FETCH_ERROR_MESSAGE,
      });
    }
  };
};
