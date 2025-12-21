// LIBRARY IMPORTS
import { Link } from "react-router-dom";

import "../blocks/navLogo.css";

const NavLogo = ({ isSavedView, isMobileMenuOpen, onCloseMobileMenu }) => {
  return (
    // Don't forget to wrap App with <BrowserRouter> in main.jsx to use react-router.
    <Link
      to="/"
      className={
        isMobileMenuOpen
          ? "nav__logo"
          : isSavedView
          ? "nav__logo nav__logo_saved-view"
          : "nav__logo"
      }
      onClick={onCloseMobileMenu}
    >
      NewsExplorer
    </Link>
  );
};

export default NavLogo;
