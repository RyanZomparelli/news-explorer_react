import "../blocks/main.css";

//COMPONENTS
import Header from "./Header";
import NewsCardList from "./NewsCardList";
import About from "./About";
import Footer from "./Footer";
import Preloader from "./Preloader";
import NotFound from "./NotFound";

const Main = ({
  openModal,
  activeModal,
  handleSearch,
  loadingSearch,
  newsArticles,
  searchStatus,
  setSearchStatus,
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
}) => {
  return (
    <main className="main">
      <Header
        openModal={openModal}
        activeModal={activeModal}
        handleSearch={handleSearch}
        setSearchStatus={setSearchStatus}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />
      {/* Could I improve this component by putting this logic into a helper function? */}
      {loadingSearch ? (
        <Preloader type="search">
          <p className="circle-preloader__text">Searching for news...</p>
        </Preloader>
      ) : searchStatus === "no-keyword" ? (
        <NotFound>
          <h3 className="not-found__title">Please enter a keyword.</h3>
        </NotFound>
      ) : searchStatus === "no-results" ? (
        <NotFound>
          <h3 className="not-found__title">Nothing Found</h3>
          <p className="not-found__paragraph">Sorry, but nothing matched</p>
          <p className="not-found__paragraph">your search terms.</p>
        </NotFound>
      ) : searchStatus === "error" ? (
        <NotFound>
          <h3 className="not-found__title">An error occurred</h3>
          <p className="not-found__paragraph">Please try again.</p>
        </NotFound>
      ) : searchStatus === "success" ? (
        <NewsCardList newsArticles={newsArticles} openModal={openModal} />
      ) : (
        ""
      )}
      <About />
      <Footer />
    </main>
  );
};

export default Main;
