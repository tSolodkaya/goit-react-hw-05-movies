import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './Reviews.module.css';

import moviesApi from '../../services/moviesApi';

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
            new Error(`Sorry, we have no reviews for this movie.`)
          );
        }
        return setReviews(data.results);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <div className={css.reviews}>
      <ul className={css.reviewsList}>
        {reviews.map(review => {
          const { id, author, author_details, content, created_at } = review;
          return (
            <li className={css.reviewItem} key={id}>
              <h3>{author}</h3>
              <img
                className={css.reviewImg}
                src={`${moviesApi.IMAGE_BASE_URL}${author_details.avatar_path}`}
                alt={author}
              />
              <p>{content}</p>
              <p>
                <span className={css.reviewSubtitle}>Created at: </span>
                {created_at}
              </p>
            </li>
          );
        })}
      </ul>
      {error && <div className={css.error}>{error}</div>}
    </div>
  );
};

export default Reviews;
