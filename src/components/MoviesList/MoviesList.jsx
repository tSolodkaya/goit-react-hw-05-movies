import MovieItem from 'components/MoviesItem/MoviesItem';
import css from './MoviesList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} location={location} />
      ))}
    </ul>
  );
};

export default MoviesList;
