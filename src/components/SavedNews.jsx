import "../blocks/savedNews.css";

// COMPONENTS
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import SavedNewsHeader from "./SavedNewsHeader";
import SavedNewsCard from "./SavedNewsCard";
import NotFound from "./NotFound";
import Footer from "./Footer";

const SavedNews = ({
  openModal,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
  savedNewsArticles,
  handleDeleteArticle,
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
      <SavedNewsHeader savedNewsArticles={savedNewsArticles} />
      <div className="saved-news__content">
        {savedNewsArticles.length === 0 ? (
          <NotFound>
            <p>No saved artcles yet!</p>
          </NotFound>
        ) : (
          <ul className="saved-news__list">
            {savedNewsArticles.map((article) => {
              return (
                <SavedNewsCard
                  key={article.link}
                  newsArticle={article}
                  handleDeleteArticle={handleDeleteArticle}
                  openModal={openModal}
                />
              );
            })}
          </ul>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default SavedNews;
