const KEY = '844acd5d93f95171cb079356b4956807';
const BASE_URL = 'https://api.themoviedb.org/3/';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';

const fetchTrendsMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${KEY}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};

const fetchMoviesByQuery = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};

const fetchMoviesDetails = id => {
  return fetch(`${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
    }
  );
};

const fetchMovieCast = id => {
  return fetch(
    `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
  ).then(response => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
  });
};

const fetchMoviesReviews = id => {
  return fetch(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  ).then(response => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
  });
};

const api = {
  fetchTrendsMovies,
  fetchMoviesByQuery,
  fetchMoviesDetails,
  fetchMovieCast,
  fetchMoviesReviews,
  IMAGE_BASE_URL,
};
export default api;
