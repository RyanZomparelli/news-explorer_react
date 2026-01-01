import "../blocks/savedNews.css";

// COMPONENTS
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import SavedNewsHeader from "./SavedNewsHeader";
import NotFound from "./NotFound";
import Footer from "./Footer";

const SavedNews = ({
  openModal,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
}) => {
  return (
    <section className="saved-news">
      <div className="saved-news__nav">
        <Navigation
          type="saved-news"
          openModal={openModal}
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
          onCloseMobileMenu={closeMobileMenu}
        />
        <MobileMenu
          openModal={openModal}
          isMobileMenuOpen={isMobileMenuOpen}
          onCloseMobileMenu={closeMobileMenu}
        />
      </div>
      <SavedNewsHeader />
      <div className="saved-news__content">
        <NotFound>
          <p>No saved artcles yet!</p>
        </NotFound>
      </div>
      <Footer />
    </section>
  );
};

export default SavedNews;
