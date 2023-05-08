import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './MoviesItem.module.css';
import routes from 'routes';
import NoInfo from 'components/NoInfo/NoInfo';

const MovieItem = ({ original_title, vote_average, id }) => {
  const location = useLocation();
  const currentPage =
    location.pathname === routes.HOME ? routes.MOVIES : location.pathname;

  return (
    <li className={css.movieListItem}>
      <Link to={`${currentPage}/${id}`} state={{ from: location }}>
        <p className={css.movieInfo}>
          {original_title ? (
            <span>{original_title}</span>
          ) : (
            <NoInfo message="No title" />
          )}
          {vote_average ? (
            <span>Raiting: {vote_average}</span>
          ) : (
            <NoInfo message="no raiting" />
          )}
        </p>
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  original_title: PropTypes.string,
  vote_average: PropTypes.number,
  id: PropTypes.number.isRequired,
};

export default MovieItem;
