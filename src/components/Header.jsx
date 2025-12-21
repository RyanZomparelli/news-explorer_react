// LIBRARY IMPORTS
import { useState } from "react";

// COMPONENTS
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";
import MobileMenu from "./MobileMenu";

import "../blocks/header.css";

const Header = () => {
  // Using for development until I implement the react context API.
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => {
    // When you call setIsMobileMenuOpen(false) and the current value is already false,
    // React recognizes that nothing has changed and skips the re-render. This is relevant
    // when I pass this function to the click handlers of links, like the NavLogo.
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__nav">
        <Navigation
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
          onCloseMobileMenu={closeMobileMenu}
          isLoggedIn={isLoggedIn}
        />
      </div>

      {/* Initially, I conditionally rendered MobileMenu like, isMobileMenuOpen && <MobileMenu/>, but 
      the unmount and mount of the component interfered with the css for my drop down opening 
      behavior. This way it's always rendered, just hidden initally, also achieved with the css. */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        isLoggedIn={isLoggedIn}
        onCloseMobileMenu={closeMobileMenu}
      />
      <div className="header__content">
        <div className="header__text-container">
          <h1 className="header__title">What's going on in the world?</h1>
          <p className="header__paragraph">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
        </div>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
