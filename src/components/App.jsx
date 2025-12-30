import "../blocks/app.css";

// LIBRARY IMPORTS
import { useState, useEffect } from "react";

// COMPONENTS
import Main from "./Main";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";

// CUSTOM HOOKS
import useModal from "../hooks/useModal";
import useSearch from "../hooks/useSearch";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  // To keep App clean and consolidate all mmodal logic, I created a custom hook.
  const { activeModal, openModal, closeModal } = useModal();
  // I like using custom hooks to keep the component clean and readable.
  const {
    newsArticles,
    setNewsArticles,
    searchStatus,
    setSearchStatus,
    handleSearch,
  } = useSearch(setIsLoading);

  // Reset search form on page load.
  useEffect(() => {
    setSearchStatus("");
    setNewsArticles([]);
  }, []);

  return (
    <div className="app">
      <Main
        openModal={openModal}
        activeModal={activeModal}
        handleSearch={handleSearch}
        isLoading={isLoading}
        newsArticles={newsArticles}
        searchStatus={searchStatus}
        setSearchStatus={setSearchStatus}
      />
      <LoginModal
        activeModal={activeModal === "Sign in"}
        onOpen={openModal}
        onClose={closeModal}
      />
      <RegistrationModal
        activeModal={activeModal === "Sign up"}
        onOpen={openModal}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
