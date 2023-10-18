import { createBrowserRouter } from "react-router-dom";
import Layout from "../Containers/Layout/Layout";
import BookList from "../pages/BookList/BookList";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BookList />,
      },
    ],

  }
])