import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MoviesPage from "./components/movies_page";
import MovieDetails from "./components/movie_details";
import { loader as movieLoader } from "./components/movie_details"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MoviesPage />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieDetails />,
        loader: movieLoader,
      },
    ],
  },
]);