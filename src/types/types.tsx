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
    authors: string[];
    categories: string[];
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


