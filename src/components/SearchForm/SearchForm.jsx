import "./searchForm.css";
import backgroundImage from "../../assets/NE-top-section-bg.jpg";
import { useForm } from "../Hooks/useForm";

function SearchForm({ onSearch }) {
  const defaultValues = { keyword: "" };

  const { values, handleChange } = useForm(defaultValues);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearch(values);
  };

  return (
    <section className="search-form">
      <img
        src={backgroundImage}
        alt="backgroundImage"
        className="search-form__background"
      />
      <div className="search-form__content">
        <h1 className="search-form__title">
          What&apos;s going on in the world?
        </h1>
        <p className="search-form__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <form className="search-form__form" noValidate>
        <label htmlFor="SearchTopic" className="search-form__label"></label>
        <input
          type="text"
          className="search-form__input"
          id="SearchTopic"
          name="keyword"
          placeholder="Enter Topic"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="search-form__button"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
