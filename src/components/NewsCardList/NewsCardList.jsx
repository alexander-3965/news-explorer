import "./NewsCardList.css";
import NewsArticles from "../../utils/constants";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ handleShowMoreClick, newsCount }) {
  //   const handleMoreClick = () => {
  //     console.log("Show more clicked!");
  //     newsCount += 3;
  //     console.log(newsCount);
  //   };

  return (
    <section className="cards">
      <h2 className="cards__title">Search results</h2>
      <ul className="cards__list">
        {NewsArticles.slice(0, newsCount).map((news) => {
          return <NewsCard news={news} />;
        })}
      </ul>
      <div className="cards__more-container">
        <button className="cards__more-btn" onClick={handleShowMoreClick}>
          Show more
        </button>
      </div>
    </section>
  );
}

export default NewsCardList;
