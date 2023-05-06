import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import Notification from 'components/Notification/Notification';
import moviesApi from '../services/moviesApi';

const Movies = () => {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const location = useLocation();

  const handleFormSubmit = searchParams => {
    setName(searchParams.get('name'));
  };

  useEffect(() => {
    moviesApi
      .fetchMoviesByQuery(name)
      .then(data => {
        if (data.results === 0) {
          return Promise.reject(new Error(`Sorry, we have no movies.`));
        }
        return setMovies([...data.results]);
      })
      .catch(error => setError(error.message));
  }, [name]);

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      <MoviesList movies={movies} location={location} />
      {error && <Notification message={error} type="failure" />}
    </>
  );
};

export default Movies;
