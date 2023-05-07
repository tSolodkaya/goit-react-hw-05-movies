import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './MoviesItem.module.css';
import routes from 'routes';

const MovieItem = ({ original_title, vote_average, id }) => {
  const location = useLocation();
  const currentPage =
    location.pathname === routes.HOME ? routes.MOVIES : location.pathname;

  return (
    <li className={css.movieListItem}>
      <Link to={`${currentPage}/${id}`} state={{ from: location }}>
        <p className={css.movieInfo}>
          {original_title}
          <span>Raiting: {vote_average}</span>
        </p>
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  original_title: PropTypes.string,
  vote_average: PropTypes.number,
  id: PropTypes.number,
};

export default MovieItem;
