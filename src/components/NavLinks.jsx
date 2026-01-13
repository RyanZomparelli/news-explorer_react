// LIBRARY IMPORTS
import { NavLink } from "react-router-dom";
import { useContext } from "react";

// COMPONENTS
import SignoutBtn from "./SignoutBtn";

// CONTEXT
import CurrentUserContext from "../contexts/CurrentUserContext";

import "../blocks/navLinks.css";
// Both NavLinks and NavLogo recieve isMobileMenuOpen to conditonally render styles.
const NavLinks = ({
  isSavedView,
  isMobileMenuOpen,
  onCloseMobileMenu,
  onOpenModal,
}) => {
  const { isLoggedIn } = useContext(CurrentUserContext);

  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isMobileMenuOpen && isActive
            ? "nav__home-link nav__home-link_active"
            : isMobileMenuOpen
            ? "nav__home-link"
            : isActive
            ? "nav__home-link nav__home-link_active"
            : "nav__home-link"
        }
        onClick={onCloseMobileMenu}
      >
        Home
      </NavLink>

      {!isLoggedIn ? (
        <button
          className="nav__signin-btn"
          onClick={() => {
            onOpenModal("Sign in");
            onCloseMobileMenu();
          }}
        >
          Sign in
        </button>
      ) : (
        <>
          <NavLink
            to="/saved-news"
            className={({ isActive }) =>
              isMobileMenuOpen && isActive
                ? "nav__saved-link nav__saved-link_active"
                : isMobileMenuOpen
                ? "nav__saved-link"
                : isActive
                ? "nav__saved-link nav__saved-link_active"
                : "nav__saved-link"
            }
            onClick={onCloseMobileMenu}
          >
            Saved articles
          </NavLink>
          <SignoutBtn
            isSavedView={isSavedView}
            onCloseMobileMenu={onCloseMobileMenu}
          />
        </>
      )}
    </>
  );
};

export default NavLinks;
