import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
        {poster_path ? (
          <img
            src={`${moviesApi.IMAGE_BASE_URL}${poster_path}`}
            alt={original_title}
          />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg"
            alt="default"
          />
        )}
        {original_title && <h2 className={css.title}>{original_title}</h2>}
        {overview && <p>{overview}</p>}
        {popularity && (
          <p>
            <span className={css.subtitle}>Popularity:</span> {popularity}
          </p>
        )}
        {genres && <p className={css.subtitle}>Genres: </p>}{' '}
        <ul>
          {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
        {production_countries && (
          <p className={css.subtitle}>Production Countries:</p>
        )}
        <ul>
          {production_countries &&
            production_countries.map(country => (
              <li key={country.name}>{country.name}</li>
            ))}
        </ul>
        {production_companies && (
          <p className={css.subtitle}>Production Companies:</p>
        )}
        <ul>
          {production_companies &&
            production_companies.map(company => (
              <li key={company.id}>{company.name}</li>
            ))}
        </ul>
        {budget > 0 && (
          <p>
            <span className={css.subtitle}>Budget: </span>
            {budget}
          </p>
        )}
        {release_date && (
          <p>
            <span className={css.subtitle}>Release: </span>
            {release_date}
          </p>
        )}
        {runtime && (
          <p>
            <span className={css.subtitle}>Runtime: </span> {runtime}
          </p>
        )}
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

MovieDetails.propTypes = {
  original_title: PropTypes.string,
  genres: PropTypes.array,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  budget: PropTypes.number,
  release_date: PropTypes.string,
  runtime: PropTypes.number,
  production_countries: PropTypes.array,
  production_companies: PropTypes.array,
};

export default MovieDetails;
