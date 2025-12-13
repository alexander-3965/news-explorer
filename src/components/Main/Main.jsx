import "./Main.css";
import SearchForm from "../SearchForm/searchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function Main({
  isLoggedIn,
  handleShowMoreClick,
  newsCount,
  onSearch,
  newsArr,
  isSearching,
  isLoading,
  notFound,
  handleLogInClick,
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
          isLoggedIn={isLoggedIn}
          handleLogInClick={handleLogInClick}
        />
      )}

      <About />
    </main>
  );
}

export default Main;
