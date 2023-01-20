export const Searchbar = () => {
  return (
    <header>
      <form>
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
