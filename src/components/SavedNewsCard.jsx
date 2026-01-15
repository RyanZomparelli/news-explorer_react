import "../blocks/NewsCard.css";

// LIBRARY IMPORTS
import { useState } from "react";

// ASSETS
import trashIcon from "../assets/trashcan.svg";
import trashIconDark from "../assets/trashcan-dark.svg";
import fallBackImg from "../assets/article_img_fallback.svg";

// UTILITY
import * as Helpers from "../utils/helpers";

// Logic basically duplicated from NewsCard. Could be improved by creating a
// generic NewsCard component and then more specific children of NewsCard.
const SavedNewsCard = ({ newsArticle, openModal }) => {
  const [showMessage, setShowMessage] = useState(false);
  // Same logic from SignoutBtn component.
  const [isHovered, setIsHovered] = useState(false);

  const { convertDate } = Helpers.getFormattedDate();
  return (
    <li className="news-articles__list-item">
      <article className="news-card">
        <span className="news-card__keyword">{`${newsArticle.keyword}`}</span>
        {/* Maybe make this a component that handles save for "/" and delete functionality for "/saved-news". */}
        <button
          className="news-card__save-btn"
          type="button"
          onClick={() => {
            openModal("Feedback", {
              message: "Are you sure you want to delete this article?",
              type: "delete-article",
              articleToDelete: newsArticle,
            });
          }}
          onMouseEnter={() => {
            setShowMessage(true);
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setShowMessage(false);
            setIsHovered(false);
          }}
        >
          {/* Make this span a seperate component. Remove conditional render to enabele better styling */}
          {showMessage && (
            <span className="news-card__save-msg">Remove from saved</span>
          )}

          <img
            src={isHovered ? trashIconDark : trashIcon}
            alt="Delete button."
            className="news-card__save-icon"
          />
        </button>
        <a href={newsArticle.url} className="news-card__link" target="_blank">
          <img
            src={newsArticle.image || fallBackImg}
            alt="Article image."
            className="news-card__img"
          />
          <div className="news-card__text">
            <p className="news-card__published-at">
              {convertDate(newsArticle.date)}
            </p>
            <h4 className="news-card__title">{newsArticle.title}</h4>
            <p className="news-card__paragraph">{newsArticle.text}</p>
            <p className="news-card__source">{newsArticle.source?.name}</p>
          </div>
        </a>
      </article>
    </li>
  );
};

export default SavedNewsCard;
