import axios from "axios";

const NEWS_API_KEY = import.meta.env.NEWS_API_TOKEN;
const newsApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "X-Api-Key": NEWS_API_KEY,
  },
});

export default newsApi;
