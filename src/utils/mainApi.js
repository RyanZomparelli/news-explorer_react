import { baseURL } from "./constants";
import * as Helpers from "../utils/helpers";

export const getSavedItems = (token) => {
  return fetch(`${baseURL}/articles`, {
    headers: Helpers.getRequestHeaders(token),
  }).then((res) => Helpers.handleResponse(res));
};

export const saveItem = (
  { keyword, title, text, date, source, link, image },
  token
) => {
  return fetch(`${baseURL}/articles`, {
    method: "POST",
    headers: Helpers.getRequestHeaders(token),
    body: JSON.stringify({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    }),
  }).then((res) => Helpers.handleResponse(res));
};

export const deleteItem = (id, token) => {
  return fetch(`${baseURL}/articles/${id}`, {
    method: "DELETE",
    headers: Helpers.getRequestHeaders(token),
  }).then((res) => Helpers.handleResponse(res));
};
