// 3rd PARTY NEWS API
export const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;

// For development.
export const newsApiUrl = "https://newsapi.org/v2/everything";

// For production. The proxy url is necessary because the newsApi is only free in development.
export const proxyApiUrl = import.meta.env.VITE_PROXY_API_URL;

// NODE_ENV is an env varaiable automatically set by Vite. When you run the build
// script it's set to production. Otherwise it's value is development.
// import.meta.env is Vite's native env access over the older, process.env.
export const newsApiBaseUrl =
  process.env.NODE_ENV === "production" ? proxyApiUrl : newsApiUrl;

// NEWS EXPLORER REST API

export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.newsexplorer.host2go.net"
    : "http://localhost:3005";
