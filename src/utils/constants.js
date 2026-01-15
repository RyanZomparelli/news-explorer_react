// 3rd PARTY NEWS API
export const newsApiKey = "b0bff49aa9f54201aa752a3ec410e898";

// For development.
export const newsApiUrl = "https://newsapi.org/v2/everything";

// For production. The proxy url is necessary because the newsApi is only free in development.
export const proxyApiUrl = "https://nomoreparties.co/news/v2/everything";

// NODE_ENV is an env varaiable automatically set by Vite. When you run the build
// script it's set to production. Otherwise it's value is development.
// import.meta.env is Vite's native env access over the older, process.env.
export const newsApiBaseUrl =
  process.env.NODE_ENV === "production" ? proxyApiUrl : newsApiUrl;

// NEWS EXPLORER REST API

export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.newsexplorer.host2go.net"
    : "http://localhost:3000";
