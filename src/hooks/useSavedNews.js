import { useState } from "react";

import * as Api from "../utils/mainApi";

const useSavedNews = () => {
  const [savedNewsArticles, setSavedNewsArticles] = useState([]);

  const getSavedArticles = () => {
    setSavedNewsArticles(Api.getItems());
  };

  const handleSaveArticle = (newsArticle) => {
    try {
      const savedArticles = Api.getItems();
      const alreadyLiked = savedArticles.some((article) => {
        newsArticle.url === article.url;
      });

      if (!alreadyLiked) {
        Api.saveItem(newsArticle);
        setSavedNewsArticles(Api.getItems());
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteArticle = (newsArticle) => {
    Api.deleteItem(newsArticle);
    setSavedNewsArticles(Api.getItems());
  };

  return {
    savedNewsArticles,
    getSavedArticles,
    handleSaveArticle,
    handleDeleteArticle,
  };
};

export default useSavedNews;
