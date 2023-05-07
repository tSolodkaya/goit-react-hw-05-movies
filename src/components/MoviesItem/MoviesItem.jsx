import { Link, useLocation } from 'react-router-dom';
import css from './MoviesItem.module.css';
import routes from 'routes';

const MovieItem = ({ movie }) => {
  const location = useLocation();
  const currentPage =
    location.pathname === routes.HOME ? routes.MOVIES : location.pathname;
  return (
    <li className={css.movieListItem}>
      <Link to={`${currentPage}/${movie.id}`} state={{ from: location }}>
        <p className={css.movieInfo}>
          {movie.original_title}
          <span>Raiting: {movie.vote_average}</span>
        </p>
      </Link>
    </li>
  );
};

export default MovieItem;
