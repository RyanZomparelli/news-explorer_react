import { baseURL } from "./constants";
import * as Helpers from "./helpers";

export const register = ({ email, password, username }) => {
  return fetch(`${baseURL}/signup`, {
    method: "POST",
    headers: Helpers.getRequestHeaders(),
    body: JSON.stringify({
      email,
      password,
      username,
    }),
    // If the server never gets the request, like the network is down, the fetch
    // api will throw and .then() will never run. The error will go straight to the
    // catch block of the handler. If the server returns an error, .then() runs,
    // res.ok is false, we send the server error messaging to the catch block of
    // the controller in a rejected promise.
  }).then((res) => Helpers.handleResponse(res));
};

export const login = ({ email, password }) => {
  return fetch(`${baseURL}/signin`, {
    method: "POST",
    headers: Helpers.getRequestHeaders(),
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => Helpers.handleResponse(res));
};

export const getCurrentUser = (token) => {
  return fetch(`${baseURL}/users/me`, {
    // Since we are sending a GET request here, GET is the default of fetch() so
    // we don't have to specify the method like in the other requests. But, we do
    // need to send an authorization header this time.
    headers: Helpers.getRequestHeaders(token),
  }).then((res) => Helpers.handleResponse(res));
};
