const createUrl = (page, years, option, genres) => {
  const [firstYear, secondYear] = years;
  const fromYear = `${firstYear}-01-01`;
  const toYear = `${secondYear}-12-31`;
  const genresList = genres.map((item) => item.id).join(",");

  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ru&page=${page}&primary_release_date.gte=${fromYear}&primary_release_date.lte=${toYear}&sort_by=${option}.desc&with_genres=${genresList}&vote_count.gte=300`;

  return url;
}

export { createUrl };