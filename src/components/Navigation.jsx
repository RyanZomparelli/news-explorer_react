// LIBRARY IMPORTS
import { useLocation } from "react-router-dom";

// COMPONENTS
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";

// ASSETS
// Vite/bundlers need to process assets (fonts, images etc..) at build time. So the paths change. Vite processes the imports,
// assets get optimized, and Vite gives you the correct URLs in your build.
// When you import assets as variables, Paths work correctly in both development and production.
// CSS files: Vite automatically scans CSS files and processes url() references,
// converting them to the correct paths during build. So a background-image property
// with a url in a css file will work fine.
import burgerIconDark from "../assets/mobile_menu_dark.svg";
import burgerIconLight from "../assets/mobile_menu_light.svg";
import closeIconLight from "../assets/close_btn_light.svg";

import "../blocks/navigation.css";

const Navigation = ({
  isMobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
  openModal,
  activeModal,
  type,
}) => {
  // useLocation of react-router-dom gives us an object with a pathname property
  // corresponding to the current route. I use this for the elements that don't have
  // access to isActive.
  const location = useLocation();
  const isSavedView = location.pathname === "/saved-news";
  return (
    // The MobileMenu dropdown has the same NavLogo that the desktop has, so instead of
    // covering it with the MobileMenu, the menu drops right below the 'nav bar'
    // at the top of the screen and the back-ground color changes to match the menu.
    <nav
      className={
        isMobileMenuOpen ? "nav nav_type_mobile" : `nav nav_type_${type}`
      }
    >
      <NavLogo
        isSavedView={isSavedView}
        isMobileMenuOpen={isMobileMenuOpen}
        onCloseMobileMenu={onCloseMobileMenu}
      />
      <div className="nav__links">
        <NavLinks
          isSavedView={isSavedView}
          isMobileMenuOpen={isMobileMenuOpen}
          onCloseMobileMenu={onCloseMobileMenu}
          onOpenModal={openModal}
        />
      </div>
      <button className="nav__mobile-btn" onClick={onToggleMobileMenu}>
        {!activeModal && (
          <img
            className="nav__burger-img"
            src={
              isMobileMenuOpen
                ? closeIconLight
                : isSavedView
                ? burgerIconDark
                : burgerIconLight
            }
            alt="Mobile"
          />
        )}
      </button>
    </nav>
  );
};

export default Navigation;
