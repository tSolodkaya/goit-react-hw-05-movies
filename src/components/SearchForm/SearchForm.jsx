import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '') {
      setSearchParams({});
      return Notiflix.Notify.warning(
        'Please, type what images do you want to find =)'
      );
    }
    onSubmit(searchParams);
  };

  const updateQueryString = event => {
    if (event.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ name: event.target.value });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.inputSearch}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={name}
        onChange={updateQueryString}
      />
      <button className={css.searchBtn} type="submit">
        Serach
      </button>
    </form>
  );
};

export default SearchForm;
