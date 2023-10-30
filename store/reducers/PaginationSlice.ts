import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 30,
  itemsPerPage: 30,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const {setItemsPerPage, setPage} =paginationSlice.actions;
export default paginationSlice.reducer;
