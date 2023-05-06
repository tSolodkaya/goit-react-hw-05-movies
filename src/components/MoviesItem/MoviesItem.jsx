import { Link } from 'react-router-dom';
import css from './MoviesItem.module.css';

const MovieItem = ({ movie, location }) => {
  return (
    <li className={css.movieListItem}>
      <Link
        to={
          location.path_name === '/movies'
            ? `${movie.id}`
            : `/movies/${movie.id}`
        }
        state={{ from: location }}
      >
        <p className={css.movieInfo}>
          {movie.original_title}
          <span>Raiting: {movie.vote_average}</span>
        </p>
      </Link>
    </li>
  );
};

export default MovieItem;
