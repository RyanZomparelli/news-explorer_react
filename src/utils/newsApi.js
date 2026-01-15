// UTILITY
import { newsApiKey, newsApiBaseUrl } from "./constants";
import * as Helpers from "../utils/helpers";

// Find out if this needs to be inside getNewsArticles(). When are the dates created?
const { getToDate, getFromDate } = Helpers.getFormattedDate();

// encodeURIComponent is a function provided by the WebAPI that encodes special
// characters and spaces specifically for url query parameters.
export const getNewsArticles = (query) => {
  return fetch(
    `${newsApiBaseUrl}?q=${encodeURIComponent(
      query
    )}&from=${getFromDate()}&to=${getToDate()}&pageSize=100&apiKey=${newsApiKey}`
  ).then(Helpers.handleResponse);
};
