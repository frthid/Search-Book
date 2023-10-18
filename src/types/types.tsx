// интерфейс ответа сервера на запрос книжек
export interface IFetchBooksRequest {
  items: IBook[];
  kind: string;
  totalItems: number;
}

// интерфейс книжки с сервера
export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    language: string;
    imageLinks: {
      thumbnail: string;
    };
  };
  searchInfo: {
    textSnippet: string;
  };
}

// интерфейсы стора для книжек
export interface BooksState {
  books: IBook[];
  loading: boolean;
  error: null | string;
}

//перечисление с типами action
export enum BooksActionTypes {
  FETCH_BOOKS = 'FETCH_BOOKS',
  FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR', 
}

//интерфейсы action
interface FetchBooksAction {
  type: BooksActionTypes.FETCH_BOOKS;
}

interface FetchBooksSuccessAction {
  type: BooksActionTypes.FETCH_BOOKS_SUCCESS;
  payload: IBook[];
}

interface FetchBooksErrorAction {
  type: BooksActionTypes.FETCH_BOOKS_ERROR; 
  payload: string;
}

export type BooksAction = FetchBooksAction | FetchBooksSuccessAction | FetchBooksErrorAction
