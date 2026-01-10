// LIBRARY IMPORTS
import { useState } from "react";

//UTILITY
import * as News from "../utils/newsApi";

const useSearch = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");
  const [loadingSearch, setIsLoadingSearch] = useState(false);

  const handleSearch = async (query) => {
    setIsLoadingSearch(true);
    // Reset for a new search.
    setSearchStatus("");
    setNewsArticles([]);

    try {
      // Remove whitespace from the start and end of the query.
      const trimmedQuery = query.trim();
      if (!trimmedQuery) {
        setSearchStatus("no-keyword");
        setTimeout(() => {
          setIsLoadingSearch(false);
        }, 1000);
        return;
      }

      const data = await News.getNewsArticles(query);
      const articles = data.articles;

      if (articles.length === 0) {
        setSearchStatus("no-results");
        setTimeout(() => {
          setIsLoadingSearch(false);
        }, 1000);
        return;
      }

      setSearchStatus("success");

      // Grab the keyword
      const keyword = query;
      // Add a keyword property to each article object in the articles array.
      articles.forEach((article) => (article.keyword = keyword));

      setNewsArticles(articles);
      setTimeout(() => {
        setIsLoadingSearch(false);
      }, 1000);
    } catch (err) {
      console.error(err);
      setSearchStatus("error");
      setTimeout(() => {
        setIsLoadingSearch(false);
      }, 1000);
    }
  };

  return {
    newsArticles,
    setNewsArticles,
    searchStatus,
    setSearchStatus,
    handleSearch,
    loadingSearch,
  };
};

export default useSearch;
