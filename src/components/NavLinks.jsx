// LIBRARY IMPORTS
import { NavLink } from "react-router-dom";

//COMPONENTS
import SignoutBtn from "./SignoutBtn";

import "../blocks/navLinks.css";
// Both NavLinks and NavLogo recieve isMobileMenuOpen to conditonally render styles.
const NavLinks = ({
  isLoggedIn,
  isSavedView,
  isMobileMenuOpen,
  onCloseMobileMenu,
  onOpenModal,
}) => {
  // Potential problem. Because NavLinks handles styling for the MobileMenu, and
  // Navigation components, the components are tightly coupled. I can solve most
  // styling conflicts between instances of NavLink and MobileMenu with
  // CSS specificity rules, but NavLinks could be improved by being more independent.
  // Maybe by making a NavLinksMobile component.

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
          <SignoutBtn isSavedView={isSavedView} />
        </>
      )}
    </>
  );
};

export default NavLinks;
