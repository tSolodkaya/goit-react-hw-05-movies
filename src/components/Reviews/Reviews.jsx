import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import moviesApi from '../../services/moviesApi';
import Notification from 'components/Notification/Notification';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    moviesApi
      .fetchMoviesReviews(movieId)
      .then(data => {
        if (data.results.length === 0) {
          return Promise.reject(
            new Error(`Sorry, we have no freviews for this movie.`)
          );
        }
        return setReviews(data.results);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map(review => {
          const { id, author, author_details, content, created_at } = review;
          return (
            <li key={id}>
              <h3>{author}</h3>
              <img
                src={`${moviesApi.IMAGE_BASE_URL}${author_details.avatar_path}`}
                alt={author}
              />
              <p>{content}</p>
              <p>Created at: {created_at}</p>
            </li>
          );
        })}
      </ul>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Reviews;
