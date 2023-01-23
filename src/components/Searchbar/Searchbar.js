import PropTypes from 'prop-types';
import { Search } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmitForm = event => {
    event.preventDefault();
    onSubmit(event.currentTarget.query.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmitForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <Search />
        <input
          className="SearchForm-input"
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
