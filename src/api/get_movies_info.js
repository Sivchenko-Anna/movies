import { API } from "./variables.js";

export async function getMoviesInfo(endpoint, id) {
  const fetchUrl = `${API.URL}${API.LINKS.MOVIE}${id}${endpoint}`;
  try {
    const response = await fetch(fetchUrl, {
      method: API.METHODS.GET,
      headers: {
        accept: API.HEADERS.ACCEPT,
        Authorization: API.HEADERS.AUTHORIZATION,
      }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.status_message) {
        throw new Error(`${data.status_message}`);
      }
      return data;
    } else if (response.status === 404) {
      throw new Error("Movie not found");
    } else {
      throw new Error("Failed to fetch movie info");
    }
  } catch (error) {
    throw new Error("Failed to fetch movie info", error);
  }
}