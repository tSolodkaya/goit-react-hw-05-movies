import PropTypes from 'prop-types';

import MovieItem from 'components/MoviesItem/MoviesItem';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
