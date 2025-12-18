// LIBRARY IMPORTS
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

// ASSETS
// Vite/bundlers need to process assets at build time. Vite processes the imports
// and gives you the correct URLs. Assets get optimized and included in your build.
// Paths work correctly in both development and production.
// CSS files: Vite automatically scans CSS files and processes url() references,
// converting them to the correct paths during build. So a background-image property
// with a url in a css file will work fine.
import logoutIconDark from "../assets/logout.svg";
import logoutIconLight from "../assets/logout_white.svg";
import logoutIconBlue from "../assets/logout_blue.svg";
import burgerIconDark from "../assets/mobile_menu_dark.svg";
import burgerIconLight from "../assets/mobile_menu_light.svg";

import "../blocks/navigation.css";

const Navigation = () => {
  // Using for development until I implement the react context API.
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // useLocation of react-router-dom gives us an object with a pathname property
  // corresponding to the current route. I use this for the elements that don't have
  // access to isActive.
  const location = useLocation();
  const isSavedView = location.pathname === "/saved-news";

  // Just for the logoutIcon to turn blue on hover. Note that the rest of the button
  // gets it's hover effect from css. This is because I wanted a smooth transition
  // but wanted to avoid inline styles in the component and wanted to keep the signout
  // icon as an img tag instead of a background image in the css. This combination of
  // programmatic styling and css meets that critera.
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="nav">
      {/* Don't forget to wrap App with <BrowserRouter> in main.jsx to use react-router. */}
      <Link
        to="/"
        className={isSavedView ? "nav__logo nav__logo_saved-view" : "nav__logo"}
      >
        NewsExplorer
      </Link>
      <div className="nav__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav__home-link nav__home-link_active" : "nav__home-link"
          }
        >
          Home
        </NavLink>
        {!isLoggedIn ? (
          <button className="nav__signin-btn">Sign in</button>
        ) : (
          <>
            <NavLink
              to="/saved-news"
              className={({ isActive }) =>
                isActive
                  ? "nav__saved-link nav__saved-link_active"
                  : "nav__saved-link"
              }
            >
              Saved articles
            </NavLink>
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={
                isSavedView
                  ? "nav__signout-btn nav__signout-btn_saved"
                  : "nav__signout-btn"
              }
            >
              {/* Layout div needed to arrange icon and text together inside the button. */}
              <div className="nav__signout-content">
                Ryan
                <img
                  className="nav__signout-img"
                  //   Multi step ternary. isHovered gets priority. Then the condition is based on route.
                  src={
                    isHovered
                      ? logoutIconBlue
                      : isSavedView
                      ? logoutIconDark
                      : logoutIconLight
                  }
                  alt="Sign out"
                />
              </div>
            </button>
          </>
        )}
      </div>
      <button className="nav__mobile-btn">
        <img
          className="nav__burger-img"
          src={isSavedView ? burgerIconDark : burgerIconLight}
          alt="Mobile"
        />
      </button>
    </nav>
  );
};

export default Navigation;
