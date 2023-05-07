import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import moviesApi from '../../services/moviesApi';
import css from './Cast.module.css';

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
    <div className={css.cast}>
      <ul className={css.castList}>
        {cast &&
          cast.map(actor => {
            const { id, profile_path, name, character, popularity } = actor;
            return (
              <li className={css.castItem} key={id}>
                <img
                  className={css.castImg}
                  src={`${moviesApi.IMAGE_BASE_URL}${profile_path}`}
                  alt={`${name}`}
                />
                <p>
                  <span className={css.castSubtitle}>Actor name: </span>
                  {name}
                </p>
                <p>
                  <span className={css.castSubtitle}>Character: </span>
                  {character}
                </p>
                <p>
                  <span className={css.castSubtitle}>Popularity: </span>
                  {popularity}
                </p>
              </li>
            );
          })}
      </ul>
      {error && <div className={css.error}>{error}</div>}
    </div>
  );
};
export default Cast;
