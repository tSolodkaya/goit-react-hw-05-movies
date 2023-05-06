import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesApi from '../../services/moviesApi';
import Notification from 'components/Notification/Notification';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    moviesApi
      .fetchMovieCast(movieId)
      .then(data => {
        if (data.cast.length === 0) {
          return Promise.reject(
            new Error(`Sorry, we have no casts for this movie.`)
          );
        }
        return setCast(data.cast);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast &&
          cast.map(actor => {
            const { id, profile_path, name, character, popularity } = actor;
            return (
              <li key={id}>
                <img
                  src={`${moviesApi.IMAGE_BASE_URL}${profile_path}`}
                  alt={`${name}`}
                />
                <p>{name}</p>
                <p>{character}</p>
                <p>{popularity}</p>
              </li>
            );
          })}
      </ul>
      {error && <div>{error}</div>}
    </div>
  );
};
export default Cast;
