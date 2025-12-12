import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/searchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({
  handleShowMoreClick,
  newsCount,
  onSearch,
  newsArr,
  isSearching,
}) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />
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
