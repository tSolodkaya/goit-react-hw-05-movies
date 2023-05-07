import { Link } from 'react-router-dom';
import moviesApi from '../../services/moviesApi';
import css from './MovieInfo.module.css';
import routes from 'routes';

const MovieDetails = ({
  original_title,
  genres,
  overview,
  popularity,
  poster_path,
  budget,
  release_date,
  runtime,
  production_countries,
  production_companies,
}) => {
  return (
    <>
      <div className={css.goBackLink}></div>
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
          {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
        <p className={css.subtitle}>Production Countries:</p>
        <ul>
          {production_countries &&
            production_countries.map(country => (
              <li key={country.name}>{country.name}</li>
            ))}
        </ul>
        <p className={css.subtitle}>Production Companies:</p>
        <ul>
          {production_companies &&
            production_companies.map(company => (
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
            <Link to={routes.CAST}>Cast</Link>
          </li>
          <li className={css.moreInfoBtn}>
            <Link to={routes.REVIEWS}>Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetails;
