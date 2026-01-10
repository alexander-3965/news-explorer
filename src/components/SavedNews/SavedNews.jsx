import "./savedNews.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";
import trashIcon from "../../assets/trash.svg";

function SavedNews({ isLoggedIn, bookmarkedNews, onDeleteItem }) {
  const currentUser = useContext(CurrentUserContext);
  const keywords = [];
  bookmarkedNews.slice(0, 2).map((news) => {
    keywords.push(news.keyword);
  });
  return (
    <div className="saved">
      <div className="saved__text">
        <p className="saved__eyebrow">Saved Articles</p>
        <h2 className="saved__title">
          {currentUser.name}, you have {bookmarkedNews.length} saved articles
        </h2>
        <p className="saved__subtitle">
          By keywords:{" "}
          <span className="saved__ subtitle saved__subtitle_keywords">
            {keywords[0]}, {keywords[1]}, and {bookmarkedNews.length - 2} other{" "}
          </span>
        </p>
      </div>
      <div className="saved__cards">
        <ul className="cards__list">
          {bookmarkedNews.map((news) => {
            return (
              <NewsCard
                isLoggedIn={isLoggedIn}
                news={news}
                key={news.url}
                activeIcon={trashIcon}
                popupText={"Remove from saved"}
                onDeleteItem={onDeleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SavedNews;
