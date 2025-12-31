import "../blocks/newsCardList.css";

// LIBRARY IMPORTS
import { useState } from "react";

// COMPONENTS
import NewsCard from "./NewsCard";

const NewsCardList = ({ newsArticles }) => {
  // Articles to display.
  let [count, setCount] = useState(3);

  // This is a good example of the component lifecycle. When the show more btn is
  // clicked, this component -instance- is rerendered and the count state persists.
  // But when a new search is initiated, the instance of of NewsCardList is -unmounted-
  // and a new one will be mounted during a successful search resetting the count
  // state to 3.
  //   console.log("NewsCardList rendered, count:", count);

  const articles = newsArticles.slice(0, count);

  return (
    <section className="news-articles">
      <div className="news-articles__content">
        <h3 className="news-articles__header">Search results</h3>
        <ul className="news-articles__list">
          {articles.map((article) => {
            return <NewsCard newsArticle={article} />;
          })}
        </ul>
        {count < newsArticles.length && (
          <button
            className="news-articles__show-more-btn"
            type="button"
            onClick={() => {
              setCount(count + 3);
            }}
          >
            Show more
          </button>
        )}
        {newsArticles.length > 0 && (
          <span className="news-articles__showing">
            {count < newsArticles.length
              ? `Showing ${count} 0f ${newsArticles.length} results`
              : `Showing All results`}
          </span>
        )}
      </div>
    </section>
  );
};

export default NewsCardList;
