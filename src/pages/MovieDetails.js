import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';

import moviesApi from '../services/moviesApi';
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    moviesApi
      .fetchMoviesDetails(movieId)
      .then(data => {
        console.log(data);
        if (Object.keys(data).length === 0) {
          return Promise.reject(new Error(`Sorry, we have no movies.`));
        }
        return setDetails(data);
      })
      .catch(error => setError(error.message));
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
      <div className={css.goBackLink}>
        <Link to={backLinkLocationRef.current}> Go back</Link>
      </div>
      <div className={css.movieCard}>
        <img
          src={`${moviesApi.IMAGE_BASE_URL}${poster_path}`}
          alt={original_title}
        />
        <h2 className={css.title}>{original_title}</h2>
        <p>{overview}</p>
        <p>
          <span className={css.subtitle}>Popularity:</span> {popularity}
        </p>

        <p className={css.subtitle}>Genres: </p>
        <ul>
          {details &&
            details.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
        <p className={css.subtitle}>Production Countries:</p>
        <ul>
          {details &&
            details.production_countries.map(country => (
              <li key={country.name}>{country.name}</li>
            ))}
        </ul>
        <p className={css.subtitle}>Production Companies:</p>
        <ul>
          {details &&
            details.production_companies.map(company => (
              <li key={company.id}>{company.name}</li>
            ))}
        </ul>
        <p>
          <span className={css.subtitle}>Budget: </span>
          {budget}
        </p>
        <p>
          <span className={css.subtitle}>Release: </span>
          {release_date}
        </p>
        <p>
          <span className={css.subtitle}>Runtime: </span> {runtime}
        </p>
        <ul className={css.moreInfoBtnList}>
          <li className={css.moreInfoBtn}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.moreInfoBtn}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      {error && <div>{error}</div>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
