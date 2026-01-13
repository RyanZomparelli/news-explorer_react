// COMPONENTS
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";
import MobileMenu from "./MobileMenu";

import "../blocks/header.css";

const Header = ({
  openModal,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
  activeModal,
  handleSearch,
  setSearchStatus,
}) => {
  return (
    <header className="header">
      <div className="header__nav">
        <Navigation
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
          onCloseMobileMenu={closeMobileMenu}
          openModal={openModal}
          activeModal={activeModal}
        />
      </div>

      {/* Initially, I conditionally rendered MobileMenu like, isMobileMenuOpen && <MobileMenu/>, but 
      the unmount and mount of the component interfered with the css for my drop down opening 
      behavior. This way it's always rendered, just hidden initally, also achieved with the css. */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        onCloseMobileMenu={closeMobileMenu}
        openModal={openModal}
      />
      <div className="header__content">
        <div className="header__text-container">
          <h1 className="header__title">What's going on in the world?</h1>
          <p className="header__paragraph">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
        </div>
        <SearchForm
          handleSearch={handleSearch}
          setSearchStatus={setSearchStatus}
        />
      </div>
    </header>
  );
};

export default Header;
