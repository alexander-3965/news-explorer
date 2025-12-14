import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  handleShowMoreClick,
  newsCount,
  newsArr,
  isLoggedIn,
  handleLogInClick,
}) {
  const hasMoreNews = newsCount < newsArr.length;

  return (
    <section className="cards">
      <h2 className="cards__title">Search results</h2>
      <ul className="cards__list">
        {newsArr.slice(0, newsCount).map((news) => {
          return (
            <NewsCard
              isLoggedIn={isLoggedIn}
              news={news}
              key={news.url}
              handleLogInClick={handleLogInClick}
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
