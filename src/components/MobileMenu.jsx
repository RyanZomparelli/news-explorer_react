// COMPONENETS
import NavLinks from "./NavLinks";

import "../blocks/mobileMenu.css";

const MobileMenu = ({ isMobileMenuOpen, onCloseMobileMenu, openModal }) => {
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
          onCloseMobileMenu={onCloseMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
          onOpenModal={openModal}
        />
      </div>
      <div
        className={
          isMobileMenuOpen
            ? "mobile-nav__overlay mobile-nav__overlay_active"
            : "mobile-nav__overlay"
        }
      ></div>
    </nav>
  );
};

export default MobileMenu;
