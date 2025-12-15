import "./NewsCard.css";
import { useLocation } from "react-router-dom";
// import bookmarkIcon from "../../assets/bookmark.svg";

function NewsCard({ news, isLoggedIn, icon, popupText }) {
  const location = useLocation();

  const handleBookmarkClick = () => {
    console.log("Bookmark clicked!");
  };

  return (
    <div className="news-card">
      <img
        src={news.urlToImage}
        alt={news.title}
        className="news-card__image"
      />
      <div className="news-card__btn-container">
        {(!isLoggedIn || location.pathname === "/saved-news") && (
          <button className="popup-btn" type="button">
            {popupText}
          </button>
        )}
        <button
          className="news-card__btn"
          type="button"
          onClick={handleBookmarkClick}
        >
          <img
            src={icon}
            alt={icon.substring(icon.lastIndexOf("/"), icon.lastIndexOf("."))}
            className="news-card__icon"
          />
        </button>
      </div>
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
