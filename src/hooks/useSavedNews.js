import { useState } from "react";

import * as Api from "../utils/mainApi";
import * as Token from "../utils/token";

const useSavedNews = (openModal, closeModal) => {
  const [savedNewsArticles, setSavedNewsArticles] = useState([]);

  const getSavedArticles = async () => {
    const token = Token.getToken();
    if (!token) {
      // setSavedNewsArticles([]);
      return;
    }
    try {
      const savedArticles = await Api.getSavedItems(token);
      setSavedNewsArticles(savedArticles);
    } catch (err) {
      console.error("Failed to load saved articles:", err);
    }
  };

  const handleSaveArticle = async (newsArticle) => {
    const token = Token.getToken();

    // Form the data object because the server expects different properties.
    const data = {
      keyword: newsArticle.keyword,
      title: newsArticle.title,
      text: newsArticle.description,
      date: newsArticle.publishedAt,
      source: newsArticle.source.name,
      link: newsArticle.url,
      image: newsArticle.urlToImage,
    };

    try {
      const savedArticle = await Api.saveItem(data, token);

      setSavedNewsArticles([...savedNewsArticles, savedArticle]);
    } catch (err) {
      console.error(err);
      openModal("Feedback", {
        message: "Somthing went wrong ❌",
        type: "error",
      });
    }
  };

  const handleDeleteArticle = async (savedArticle) => {
    const token = Token.getToken();
    const id = savedArticle._id;

    try {
      const response = await Api.deleteItem(id, token);

      if (response.message === "Article deleted successfully") {
        setSavedNewsArticles((savedArticles) => {
          return savedArticles.filter((article) => {
            return article._id !== id;
          });
        });
        openModal("Feedback", {
          message: "Removed from saved ✅",
          type: "success",
        });
        setTimeout(() => {
          closeModal();
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      openModal("Feedback", {
        message: "Somthing went wrong ❌",
        type: "error",
      });
    }
  };

  return {
    savedNewsArticles,
    getSavedArticles,
    handleSaveArticle,
    handleDeleteArticle,
  };
};

export default useSavedNews;
