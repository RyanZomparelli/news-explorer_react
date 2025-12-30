export const newsApiKey = "b0bff49aa9f54201aa752a3ec410e898";

// For development.
export const newsApiBaseUrl = "https://newsapi.org/v2/everything";

// For production. The proxy url is necessary because the newsApi is only free in development.
export const proxyApiBaseUrl = "https://nomoreparties.co/news/v2/everything";

// NODE_ENV is an env varaiable automatically set by Vite. When you run the build
// script it's set to production. Otherwise it's value is development.
// import.meta.env is Vite's native env access over the older, process.env.
export const baseUrl =
  import.meta.env.NODE_ENV === "production" ? proxyApiBaseUrl : newsApiBaseUrl;
