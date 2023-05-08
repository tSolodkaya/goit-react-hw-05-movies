import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import moviesApi from '../../services/moviesApi';
import css from './Cast.module.css';
import NoInfo from 'components/NoInfo/NoInfo';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    moviesApi
      .fetchMovieCast(movieId)
      .then(data => {
        if (!data) {
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
                {profile_path ? (
                  <img
                    className={css.castImg}
                    src={`${moviesApi.IMAGE_BASE_URL}${profile_path}`}
                    alt={`${name}`}
                  />
                ) : (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0d/UserAvatar.svg"
                    alt="default"
                    width="60"
                  />
                )}
                <p>
                  <span className={css.castSubtitle}>Actor name: </span>
                  {name ? name : <NoInfo message="No name" />}
                </p>
                <p>
                  <span className={css.castSubtitle}>Character: </span>
                  {character ? character : <NoInfo message="No character" />}
                </p>
                <p>
                  <span className={css.castSubtitle}>Popularity: </span>
                  {popularity ? popularity : <NoInfo message="No popularity" />}
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
