import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  startingIndex: 0,
  currentIndex: 20,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setStartingIndex: (state, action: PayloadAction<number>) => {
      state.startingIndex = action.payload;
    },
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
  },
});

export const {setStartingIndex, setCurrentIndex} =paginationSlice.actions;
export default paginationSlice.reducer;
