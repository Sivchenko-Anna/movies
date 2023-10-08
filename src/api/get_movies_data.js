import { API } from "./variables.js";

export async function getMoviesData(url) {
  try {
    const response = await fetch(url, {
      method: API.METHODS.GET,
      headers: {
        accept: API.HEADERS.ACCEPT,
        Authorization: API.HEADERS.AUTHORIZATION,
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (data.status_message) {
        throw new Error(`${data.status_message}`);
      }
      return data;
    }
    throw new Error(`${response.status_message}`);
  } catch (error) {
    throw new Error("Error fetching data or parsing JSON:", error);
  }
}
