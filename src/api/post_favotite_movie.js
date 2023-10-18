import { API } from "./variables.js";

export async function postFavoriteMovie(accountId, movieId, isFavorite) {
  const url = `${API.URL}${API.LINKS.SET_FAVORITE(accountId)}`;
  try {
    const response = await fetch(url, {
      method: API.METHODS.POST,
      headers: {
        accept: API.HEADERS.ACCEPT,
        "content-type": API.HEADERS.CONTENT_TYPE,
        Authorization: API.HEADERS.AUTHORIZATION,
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: movieId,
        favorite: isFavorite,
      }),
    });
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error POST data:", error);
  }
}
