import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MoviesPage from "./components/movies_page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MoviesPage />,
      },
    ],
  },
]);