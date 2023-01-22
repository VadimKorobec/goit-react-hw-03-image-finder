import { Searchbar } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmitForm = event => {
    event.preventDefault();
    onSubmit(event.currentTarget.query.value);
  };
  return (
    <Searchbar>
      <form onSubmit={handleSubmitForm}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </Searchbar>
  );
};
