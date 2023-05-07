import { useEffect, useState } from 'react';

import MoviesList from '../components/MoviesList/MoviesList.jsx';
import moviesApi from '../services/moviesApi';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    moviesApi
      .fetchTrendsMovies()
      .then(data => {
        if (data.results.length === 0) {
          return Promise.reject(new Error(`Sorry, we have no movies.`));
        }
        return setMovies([...data.results]);
      })
      .catch(error => setError(error.message));
  }, []);

  return (
    <>
      <h1>Trending this week</h1>
      {movies && <MoviesList movies={movies} />}
      {error && <div>{error}</div>}
    </>
  );
};

export default Home;
