import { getMoviesInfo } from "../../api/get_movies_info";
import { API } from "../../api/variables";

export const loader = async ({ params }) => {
  const info = await getMoviesInfo(API.LINKS.INFO, params.movieId);
  const credits = await getMoviesInfo(API.LINKS.CREDITS, params.movieId);

  return { info, credits };
};
