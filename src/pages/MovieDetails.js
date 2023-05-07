import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';

import moviesApi from '../services/moviesApi';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import routes from '../routes';
import GoBackButton from 'components/GoBackButton/GoBackButton';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');

  const location = useLocation();
  const backLinkLocationRef = useRef(location?.state?.from ?? routes.MOVIES);

  useEffect(() => {
    moviesApi
      .fetchMoviesDetails(movieId)
      .then(data => {
        if (Object.keys(data).length === 0) {
          return Promise.reject(new Error(`Sorry, we have no movies.`));
        }
        return setDetails(data);
      })
      .catch(error => setError(error.message));
  }, [movieId]);
  return (
    <>
      <GoBackButton>
        <Link to={backLinkLocationRef.current}> Go back</Link>
      </GoBackButton>

      <MovieInfo {...details} />
      {error && <div>{error}</div>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
