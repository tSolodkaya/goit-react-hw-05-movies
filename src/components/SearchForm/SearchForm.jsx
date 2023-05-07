import Notiflix from 'notiflix';
import css from './SearchForm.module.css';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return Notiflix.Notify.warning(
        'Please, type what images do you want to find =)'
      );
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.inputSearch}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button className={css.searchBtn} type="submit">
        Serach
      </button>
    </form>
  );
};

export default SearchForm;
