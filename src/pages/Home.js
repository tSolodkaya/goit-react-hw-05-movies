import { useEffect, useState } from 'react';
import Notification from 'components/Notification/Notification';

import MoviesList from '../components/MoviesList/MoviesList.jsx';
import moviesApi from '../services/moviesApi';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();

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
      <MoviesList movies={movies} location={location} />
      {error && <div>{error}</div>}
    </>
  );
};

export default Home;
