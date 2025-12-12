import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ handleShowMoreClick, newsCount, newsArr }) {
  const hasMoreNews = newsCount < newsArr.length;

  return (
    <section className="cards">
      <h2 className="cards__title">Search results</h2>
      <ul className="cards__list">
        {newsArr.slice(0, newsCount).map((news) => {
          return <NewsCard news={news} key={news.source.id} />;
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
