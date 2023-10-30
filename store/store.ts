import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './reducers/BookSlice';
import bookFormReducer from './reducers/BookFormSlice';
import PaginationReducer from './reducers/PaginationSlice';
// import booksFetchSlice from './reducers/BookFetchSlice';

const rootReducer = combineReducers({
  bookReducer,
  bookFormReducer,
  PaginationReducer,
  // booksFetchSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']