import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';

import moviesApi from '../services/moviesApi';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    moviesApi.fetchMoviesDetails(movieId).then(data => {
      console.log(data);
      if (Object.keys(data).length === 0) {
        return Promise.reject(new Error(`Sorry, we have no movies.`));
      }
      return setDetails(data);
    });
  }, [movieId]);
  const {
    original_title,
    overview,
    popularity,
    poster_path,
    budget,
    release_date,
    runtime,
  } = details;
  return (
    <>
      <Link to={backLinkLocationRef.current}> Go back</Link>
      <img
        src={`${moviesApi.IMAGE_BASE_URL}${poster_path}`}
        alt={original_title}
      />
      <h2>{original_title}</h2>
      <p>{overview}</p>
      <p>Popularity:{popularity}</p>

      <p>Genres: </p>
      <ul>
        {details &&
          details.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>
      <p>Production Countries:</p>
      <ul>
        {details &&
          details.production_countries.map(country => (
            <li key={country.name}>{country.name}</li>
          ))}
      </ul>
      <p>Production Companies:</p>
      <ul>
        {details &&
          details.production_companies.map(company => (
            <li key={company.id}>{company.name}</li>
          ))}
      </ul>
      <p>Budget: {budget}</p>
      <p>Release: {release_date}</p>
      <p>Runtime: {runtime}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      {error && <div>{error}</div>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
