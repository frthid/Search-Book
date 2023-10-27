import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookName: '',
  selected: 'all',
}

export const BookFormSlice = createSlice({
  name: 'bookForm',
  initialState,
  reducers: {
    setBookName: (state, action) => {
      state.bookName = action.payload
    },
    setSelected: (state, action) => {
      state.selected = action.payload
    }
  }

})

export const { setBookName, setSelected } = BookFormSlice.actions;
export default BookFormSlice.reducer;