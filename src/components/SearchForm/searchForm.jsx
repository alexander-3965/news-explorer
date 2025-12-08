import "./searchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__content">
        <h1 className="search-form__title">What's going on in the world?</h1>
        <p className="search-form__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <form className="search-form__form" noValidate>
        <input
          type="text"
          className="search-form__input"
          placeholder="Enter Topic"
          required
        />
        <button type="submit" className="search-form__button">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
