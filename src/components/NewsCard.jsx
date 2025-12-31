import "../blocks/newsCard.css";

// ASSETS
import fallBackImg from "../assets/article_img_fallback.svg";
import saveIconNormal from "../assets/save-normal.svg";
import saveIconHover from "../assets/save-hover.svg";
import saveIconMarked from "../assets/save-marked.svg";

// UTILITY
import * as Helpers from "../utils/helpers";

const NewsCard = ({ newsArticle }) => {
  const { convertDate } = Helpers.getFormattedDate();
  return (
    <li className="news-articles__list-item">
      <article className="news-card">
        <button
          className="news-card__save-btn"
          type="button"
          // disabled={!isLoggedIn}
        >
          <img
            src={saveIconNormal}
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
