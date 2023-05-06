import { Link } from 'react-router-dom';

const MovieItem = ({ movie, location }) => {
  return (
    <li>
      <Link to={`${movie.id}`} state={{ from: location }}>
        <p>
          {movie.original_title}
          <span>{movie.vote_average}</span>
        </p>
      </Link>
    </li>
  );
};

export default MovieItem;
