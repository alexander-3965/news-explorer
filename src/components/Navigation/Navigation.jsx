import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

function Navigation({ isLoggedIn }) {
  const linkClass = ({ isActive }) =>
    isActive ? "navigation__link navigation__link--active" : "navigation__link";

  return (
    <nav className="navigation">
      <NavLink end to="/" className={linkClass}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/saved-news" className={linkClass}>
          Saved Articles
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
