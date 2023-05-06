import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={name}
        onChange={updateQueryString}
      />
      <button type="submit">Serach</button>
    </form>
  );
};

export default SearchForm;
