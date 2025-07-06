import axios from "axios";

// const NEWS_API_KEY = import.meta.env.VITE_API_TOKEN;
const NEWS_API_KEY = "3efac76ad7074bfcbcd1dcd424b1d74d";
const newsApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "X-Api-Key": NEWS_API_KEY,
  },
});

export default newsApi;
