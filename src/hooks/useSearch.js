// LIBRARY IMPORTS
import { useState } from "react";

//UTILITY
import * as News from "../utils/newsApi";

const useSearch = (setIsLoading) => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");

  const handleSearch = async (query) => {
    setIsLoading(true);
    // Reset for a new search.
    setSearchStatus("");
    setNewsArticles([]);

    try {
      // Remove whitespace from the start and end of the query.
      const trimmedQuery = query.trim();
      if (!trimmedQuery) {
        setSearchStatus("no-keyword");
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return;
      }

      const data = await News.getNewsArticles(query);
      const articles = data.articles;

      if (articles.length === 0) {
        setSearchStatus("no-results");
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return;
      }

      setSearchStatus("success");
      setNewsArticles(articles);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      console.error(err);
      setSearchStatus("error");
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return {
    newsArticles,
    setNewsArticles,
    searchStatus,
    setSearchStatus,
    handleSearch,
  };
};

export default useSearch;
