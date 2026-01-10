import "../blocks/savedNewsHeader.css";

// LIBRARY IMPORTS
import { useContext } from "react";

// CONTEXT
import CurrentUserContext from "../contexts/CurrentUserContext";

const SavedNewsHeader = ({ savedNewsArticles }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__paragraph">Saved articles</p>
      <h1 className="saved-news-header__title">
        {`${currentUser.name}, you have ${savedNewsArticles.length} saved articles.`}
      </h1>
      <p className="saved-news-header__keywords">
        By keywords:
        <span className="saved-news-header__keywords_bold"></span>
      </p>
    </section>
  );
};

export default SavedNewsHeader;
