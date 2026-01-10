import { useState } from "react";

import * as Api from "../utils/mainApi";

const useSavedNews = () => {
  const [savedNewsArticles, setSavedNewsArticles] = useState([]);

  const getSavedArticles = () => {
    setSavedNewsArticles(Api.getItems());
  };

  const handleSaveArticle = (newsArticle) => {
    Api.saveItem(newsArticle);
    setSavedNewsArticles(Api.getItems());
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
