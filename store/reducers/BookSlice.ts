import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { BooksState, IBook } from './../../src/types/types';

const initialState: BooksState = {
  books: [],
  loading: false,
  error: '',
  kind: '',
  totalItems: 0,
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    booksFetching(state) {
      state.loading = true;
    },
    booksFetchingSuccess(state, action: PayloadAction<IBook[]>) {
      state.loading = false;
      state.error = '';
      state.books = action.payload;
    },
    booksFetchingError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    booksFetchingTotalItems(state, action: PayloadAction<number>) {
      state.totalItems = action.payload
    }
  }
})

export default bookSlice.reducer;