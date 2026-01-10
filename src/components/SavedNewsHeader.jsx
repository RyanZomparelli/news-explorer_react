import "../blocks/savedNewsHeader.css";

// LIBRARY IMPORTS
import { useContext } from "react";

// CONTEXT
import CurrentUserContext from "../contexts/CurrentUserContext";

const SavedNewsHeader = ({ savedNewsArticles }) => {
  const { currentUser } = useContext(CurrentUserContext);

  // Check for duplicates as keywords is built.
  let keywords = [];
  savedNewsArticles.forEach((article) => {
    if (!keywords.includes(article.keyword)) {
      keywords.push(article.keyword);
    }
  });
  const keywordsFormatted = `${keywords.slice(0, 2).join(" , ")} and ${
    keywords.length <= 2 ? 0 : keywords.length < 3 ? 1 : keywords.length - 2
  } others`;

  return (
    <section className="saved-news-header">
      <p className="saved-news-header__paragraph">Saved articles</p>
      <h1 className="saved-news-header__title">
        {`${currentUser.name}, you have ${savedNewsArticles.length} saved articles.`}
      </h1>
      <p className="saved-news-header__keywords">
        By keywords:
        <span className="saved-news-header__keywords_bold">
          {keywords.length === 0 ? "" : ` ${keywordsFormatted}`}
        </span>
      </p>
    </section>
  );
};

export default SavedNewsHeader;
