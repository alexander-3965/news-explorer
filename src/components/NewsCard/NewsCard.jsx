import "./NewsCard.css";
import bookmarkIcon from "../../assets/bookmark.svg";

const handleBookmarkClick = () => {
  console.log("Bookmark clicked!");
};

function NewsCard({ news }) {
  return (
    <div className="news-card">
      <img
        src={news.urlToImage}
        alt={news.title}
        className="news-card__image"
      />
      <button
        className="news-card__bookmark"
        type="button"
        onClick={handleBookmarkClick}
      >
        <img src={bookmarkIcon} alt="bookmark icon" />
      </button>
      <div className="news-card__content">
        <p className="news-card__date">{news.publishedAt}</p>
        <h3 className="news-card__title">{news.title}</h3>
        <p className="news-card__description">{news.description}</p>
        <p className="news-card__source">{news.source.name}</p>
      </div>
    </div>
  );
}

export default NewsCard;
