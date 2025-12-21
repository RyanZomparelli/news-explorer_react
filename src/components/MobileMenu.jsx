// COMPONENETS
import NavLinks from "./NavLinks";

import "../blocks/mobileMenu.css";

const MobileMenu = ({ isMobileMenuOpen, isLoggedIn, onCloseMobileMenu }) => {
  // FUTURE UPDATE: Disable scrolling or auto close the menu when scrolls are detected.

  return (
    <nav className="mobile-nav">
      {/* No need for the NavLogo here. The menu drops below it. */}
      <div
        className={
          isMobileMenuOpen
            ? "mobile-nav__dropdown mobile-nav__dropdown_open"
            : "mobile-nav__dropdown"
        }
      >
        <NavLinks
          isLoggedIn={isLoggedIn}
          onCloseMobileMenu={onCloseMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
      {isMobileMenuOpen && <div className="mobile-nav__overlay"></div>}
    </nav>
  );
};

export default MobileMenu;
