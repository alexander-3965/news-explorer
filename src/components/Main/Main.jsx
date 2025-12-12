import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/searchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({ handleShowMoreClick, newsCount }) {
  return (
    <main className="main">
      <SearchForm />
      <NewsCardList
        handleShowMoreClick={handleShowMoreClick}
        newsCount={newsCount}
      />
      <About />
    </main>
  );
}

export default Main;
