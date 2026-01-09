import { Link } from "react-router-dom";
import "./NavigationModal.css";
import closebtn from "../../../assets/close.svg";
import signOutBtn from "../../../assets/logout-white.svg";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import { useContext } from "react";

function NavigationModal({
  isLoggedIn,
  isOpen,
  handleLogInClick,
  onCloseModal,
  handleLogoutClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div
      className={`navigation-modal ${isOpen ? "navigation-modal_opened" : ""}`}
    >
      <div className="navigation-modal__content">
        <div className="navigation-modal__header">
          <h2 className="navigation-modal__logo">NewsExplorer</h2>
          <button className="navigation-modal__close" onClick={onCloseModal}>
            <img
              className="navigation-modal__close-btn"
              src={closebtn}
              alt="close button"
            />
          </button>
        </div>
        <Link to="/" className="navigation-modal__link" onClick={onCloseModal}>
          Home
        </Link>
        {!isLoggedIn && (
          <button
            className="navigation-modal__sign-in"
            onClick={handleLogInClick}
          >
            Sign in
          </button>
        )}
        {isLoggedIn && (
          <Link
            to="/saved-news"
            className="navigation-modal__link"
            onClick={onCloseModal}
          >
            Saved Articles
          </Link>
        )}
        {isLoggedIn && (
          <button
            className="navigation-modal__sign-out-container"
            type="button"
            onClick={handleLogoutClick}
          >
            <p className="navigation-modal__username">{currentUser.name}</p>
            <img
              src={signOutBtn}
              alt={`${currentUser.name} sign out button`}
              className="navigation-modal__sign-out-img"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default NavigationModal;
