import "../blocks/app.css";

// LIBRARY IMPORTS
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// COMPONENTS
import Main from "./Main";
import SavedNews from "./SavedNews";
import Preloader from "./Preloader";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";
import FeedbackModal from "./FeedbackModal";
import ProtectedRoute from "./ProtectedRoute";

// CUSTOM HOOKS
import useModal from "../hooks/useModal";
import useMobile from "../hooks/useMobile";
import useSearch from "../hooks/useSearch";
import useAuth from "../hooks/useAuth";

// CONTEXT
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  // Global loading state. Search has it's own loading state.
  const [isLoading, setIsLoading] = useState(false);

  // CUSTOM HOOKS

  const { activeModal, openModal, closeModal, message, type } = useModal();

  // I like using custom hooks to keep the component clean and readable.
  const {
    newsArticles,
    setNewsArticles,
    searchStatus,
    setSearchStatus,
    handleSearch,
    loadingSearch,
  } = useSearch();

  // Events bubble up through the components and data flows back down.
  const {
    currentUser,
    isLoggedIn,
    setCurrentUser,
    setIsLoggedIn,
    handleRegistration,
    handleLogin,
    handleSignOut,
  } = useAuth(setIsLoading, openModal, closeModal);

  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobile();

  // Reset search form on page load.
  useEffect(() => {
    setSearchStatus("");
    setNewsArticles([]);
  }, []);

  // For stage 3..
  // useEffect(() => {
  //   const token = Token.getToken();
  //   if (token) {
  //     Auth.getCurrentUser(token)
  //       .then((user) => {
  //         setCurrentUser(user);
  //         setIsLoggedIn(true);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         Token.deleteToken();
  //         setIsLoggedIn(false);
  //       });
  //   }
  // }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, isLoggedIn, handleSignOut }}
    >
      <div className="app">
        {isLoading && <Preloader />}
        <Routes>
          <Route
            path="/"
            element={
              <Main
                openModal={openModal}
                activeModal={activeModal}
                handleSearch={handleSearch}
                loadingSearch={loadingSearch}
                newsArticles={newsArticles}
                searchStatus={searchStatus}
                setSearchStatus={setSearchStatus}
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
                closeMobileMenu={closeMobileMenu}
              />
            }
          ></Route>

          <Route
            path="/saved-news"
            element={
              <ProtectedRoute>
                <SavedNews
                  openModal={openModal}
                  isMobileMenuOpen={isMobileMenuOpen}
                  toggleMobileMenu={toggleMobileMenu}
                  closeMobileMenu={closeMobileMenu}
                />
              </ProtectedRoute>
            }
          ></Route>

          {/* Catch all route for non existing endpoints:
            The path="*" means: Match any URL that doesn't match the routes above.
            The <Navigate to="/" replace /> means: "Automatically redirect to the home page" 
            The replace prop:
            - With replace: User can't use back button to return to the invalid URL.
            - Without replace: Invalid URL stays in browser history. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <LoginModal
          activeModal={activeModal === "Sign in"}
          onOpen={openModal}
          onClose={closeModal}
          handleLogin={handleLogin}
        />
        <RegistrationModal
          activeModal={activeModal === "Sign up"}
          onOpen={openModal}
          onClose={closeModal}
          handleRegistration={handleRegistration}
        />
        <FeedbackModal
          activeModal={activeModal === "Feedback"}
          onOpen={openModal}
          onClose={closeModal}
          message={message}
          type={type}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
