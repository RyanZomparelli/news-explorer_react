import "../blocks/searchForm.css";

const SearchForm = () => {
  return (
    // When dealing with search forms that don't have visible titles or labels use
    // 'aria-label' and 'role' attributes on inputs and form elements for accessibility.
    <form className="search-form" name="search-form" role="search">
      <input
        className="search-form__input"
        type="search"
        aria-label="Search news articles"
        placeholder="Enter topic"
        required
      ></input>
      <button
        className="search-form__submit-btn"
        aria-label="Submit search form"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
