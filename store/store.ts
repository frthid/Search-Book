import { BookFormSlice } from './reducers/BookFormSlice';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './reducers/BookSlice'

const rootReducer = combineReducers({
  bookReducer,
  bookForm: BookFormSlice.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']