import MovieItem from 'components/MoviesItem/MoviesItem';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} location={location} />
      ))}
    </ul>
  );
};

export default MoviesList;
