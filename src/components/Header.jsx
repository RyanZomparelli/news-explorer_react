// Components
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

import "../blocks/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <Navigation />
      </div>
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
