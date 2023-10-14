import { API } from "./variables.js";

export async function getSearchMovie(query) {
  const fetchUrl = `${API.URL}${API.LINKS.SEARCH}${query}&${API.LINKS.LANGUAGE}`;
  try {
    const response = await fetch(fetchUrl, {
      method: API.METHODS.GET,
      headers: {
        accept: API.HEADERS.ACCEPT,
        Authorization: API.HEADERS.AUTHORIZATION,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (response.status === 404) {
      throw new Error("Movie not found");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movie by query", error);
  }
}
