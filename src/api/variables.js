const token = import.meta.env.VITE_API_TOKEN;

const API = {
  URL: "https://api.themoviedb.org/3",
  LINKS: {
    ACCOUNT_ID: "/account/account_id",
    MOVIE: "/movie/",
    GENRE: "/genre/movie/list",
    SEARCH: "/search/movie?query=",
    DISCOVER: "/discover/movie",
    INFO: "?language=ru-RU",
    CREDITS: "/credits?language=ru-RU",
    LANGUAGE: "language=ru-RU",
    PAGE: "&page=",
    GET_FAVOTIRE: (accountId) => `/account/${accountId}/favorite/movies`,
    SET_FAVORITE: (accountId) => `/account/${accountId}/favorite`,
    BASE_IMG: "https://image.tmdb.org/t/p/w400/",
  },
  METHODS: {
    GET: "GET",
    POST: "POST",
  },
  HEADERS: {
    ACCEPT: "application/json",
    AUTHORIZATION: `Bearer ${token}`,
    CONTENT_TYPE: "application/json",
  },
};

export { API };
