import "../blocks/searchForm.css";

// HOOKS
import useFormWithValidation from "../hooks/useFormWithValidation";

//ASSETS
import closeIconDark from "../assets/close_btn_dark.svg";

const SearchForm = ({ handleSearch, setSearchStatus }) => {
  const { values, handleChange, resetForm } = useFormWithValidation({
    search: "",
  });

  const handleSubmit = (e) => {
    console.log("From SearchForm: Search submitted");
    e.preventDefault();
    handleSearch(values.search);
  };

  return (
    // When dealing with search forms that don't have visible titles or labels use
    // 'aria-label' and 'role' attributes on inputs and form elements for accessibility.
    <form
      className="search-form"
      name="search-form"
      role="search"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className="search-form__input"
        type="search"
        name="search"
        value={values.search}
        aria-label="Search news articles"
        placeholder="Enter topic"
        required
        onChange={handleChange}
      ></input>
      <button
        className="search-form__clear-btn"
        type="button"
        onClick={() => {
          resetForm({ search: "" });
          setSearchStatus("");
        }}
      >
        <img
          src={closeIconDark}
          alt="Clear button."
          className="search-form__clear-btn-icon"
        />
      </button>
      <button
        className="search-form__submit-btn"
        aria-label="Submit search form"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
