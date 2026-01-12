import "../blocks/newsCard.css";

// LIBRARY IMPORTS
import { useState } from "react";

// ASSETS
import fallBackImg from "../assets/article_img_fallback.svg";
import saveIconNormal from "../assets/save-normal.svg";
import saveIconHover from "../assets/save-hover.svg";
import saveIconMarked from "../assets/save-marked.svg";

// UTILITY
import * as Helpers from "../utils/helpers";

const NewsCard = ({
  newsArticle,
  isLoggedIn,
  openModal,
  newsArticles,
  savedNewsArticles,
  handleSaveArticle,
}) => {
  const [showMessage, setShowMessage] = useState(false);
  // Same logic from SignoutBtn component.
  const [isHovered, setIsHovered] = useState(false);

  // Determine if this newsArticle is already saved.
  const isAlreadyLiked = savedNewsArticles.some(
    (article) => newsArticle.url === article.url
  );

  const { convertDate } = Helpers.getFormattedDate();
  return (
    <li className="news-articles__list-item">
      <article className="news-card">
        {/* Maybe make this a component that handles save for "/" and delete functionality for "/saved-news". */}
        <button
          className="news-card__save-btn"
          type="button"
          onClick={() => {
            if (!isLoggedIn) {
              openModal("Sign in");
              return;
            }
            if (isAlreadyLiked) {
              openModal(
                "Feedback",
                "Are you sure you want to remove this from your saved news?",
                "delete-article",
                newsArticle
              );
            } else {
              handleSaveArticle(newsArticle);
            }
          }}
          onMouseEnter={() => {
            !isLoggedIn && setShowMessage(true);
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setShowMessage(false);
            setIsHovered(false);
          }}
        >
          {/* Make this span a seperate component. Remove conditional render to enabele better styling */}
          {showMessage && !isLoggedIn && (
            <span className="news-card__save-msg">
              Sign in to save articles
            </span>
          )}

          <img
            src={
              isLoggedIn && isAlreadyLiked
                ? saveIconMarked
                : isLoggedIn && isHovered
                ? saveIconHover
                : saveIconNormal
            }
            alt="Save button."
            className="news-card__save-icon"
          />
        </button>
        <a href={newsArticle.url} className="news-card__link" target="_blank">
          <img
            src={newsArticle.urlToImage || fallBackImg}
            alt="Article image."
            className="news-card__img"
          />
          <div className="news-card__text">
            <p className="news-card__published-at">
              {convertDate(newsArticle.publishedAt)}
            </p>
            <h4 className="news-card__title">{newsArticle.title}</h4>
            <p className="news-card__paragraph">{newsArticle.content}</p>
            <p className="news-card__source">{newsArticle.source?.name}</p>
          </div>
        </a>
      </article>
    </li>
  );
};

export default NewsCard;
