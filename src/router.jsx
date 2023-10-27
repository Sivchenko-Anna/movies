import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MoviesPage from "./components/movies_page";
import MovieDetails from "./components/movie_details";
import UserPage from "./components/user_page";
import { loader as movieLoader } from "./components/movie_details/loader"

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
      {
        path: "/profile",
        element: <UserPage />,
      },
    ],
  },
]);