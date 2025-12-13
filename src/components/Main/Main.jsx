import "./Main.css";
import SearchForm from "../SearchForm/searchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function Main({
  handleShowMoreClick,
  newsCount,
  onSearch,
  newsArr,
  isSearching,
  isLoading,
  notFound,
}) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />
      {isLoading && <Preloader />}
      {notFound && <NothingFound />}
      {isSearching && (
        <NewsCardList
          handleShowMoreClick={handleShowMoreClick}
          newsCount={newsCount}
          newsArr={newsArr}
        />
      )}

      <About />
    </main>
  );
}

export default Main;
