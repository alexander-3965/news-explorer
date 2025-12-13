import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import logoutIcon from "../../assets/logout.svg";
import logoutIconWhite from "../../assets/logout-white.svg";

function Header({ isLoggedIn, handleLogoutClick, handleLogInClick }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();

  return (
    <header
      className={`header ${
        location.pathname === "/" ? "" : "header header--dark"
      }`}
    >
      <Link to="/" className=" header__logo header__logo_link">
        <p
          className={`header__logo ${
            location.pathname === "/" ? "" : "header__logo--dark"
          }`}
        >
          NewsExplorer
        </p>
      </Link>

      <div className="header__user-container">
        <Navigation isLoggedIn={isLoggedIn} />
        {!isLoggedIn && (
          <div>
            <button
              onClick={handleLogInClick}
              className="header__sign-in-button"
              type="button"
            >
              Sign In
            </button>
          </div>
        )}
        {isLoggedIn && (
          <button
            onClick={handleLogoutClick}
            type="button"
            className={`header__logout-button ${
              location.pathname === "/" ? "" : "header__logout-button--dark"
            }`}
          >
            <p
              className={`header__username ${
                location.pathname === "/" ? "" : "header__username--dark"
              }`}
            >
              {currentUser.name}
            </p>
            <img
              src={location.pathname === "/" ? logoutIconWhite : logoutIcon}
              alt="Logout Icon"
              className="header__logout-icon"
            />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
