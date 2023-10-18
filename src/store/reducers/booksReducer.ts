import { BooksAction, BooksActionTypes, BooksState } from "../../types/types";

const initialState: BooksState = {
  books: [],
  loading: false,
  error: null,
};

export const bookReducer = (state = initialState, action: BooksAction): BooksState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_BOOKS:
      return { loading: true, error: null, books: [] };
    case BooksActionTypes.FETCH_BOOKS_SUCCESS:
      return { loading: false, error: null, books: action.payload };
    case BooksActionTypes.FETCH_BOOKS_ERROR:
      return { loading: false, error: action.payload, books: [] };
    default:
      return state;
  }
};
