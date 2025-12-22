import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import bookmarkIcon from "../../assets/bookmark.svg";
import blueBookmarkIcon from "../../assets/activeBookmark(blue).svg";

function NewsCardList({
  handleShowMoreClick,
  newsCount,
  newsArr,
  isLoggedIn,
  onSaveItem,
}) {
  const hasMoreNews = newsCount < newsArr.length;

  return (
    <section className="cards">
      <h2 className="cards__title">Search results</h2>
      <ul className="cards__list">
        {newsArr.slice(0, newsCount).map((news) => {
          return (
            <NewsCard
              onSaveItem={onSaveItem}
              icon={bookmarkIcon}
              activeIcon={blueBookmarkIcon}
              isLoggedIn={isLoggedIn}
              news={news}
              key={news.url}
              popupText={"Sign in to save article"}
            />
          );
        })}
      </ul>
      <div className="cards__more-container">
        {hasMoreNews && (
          <button className="cards__more-btn" onClick={handleShowMoreClick}>
            Show more
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
