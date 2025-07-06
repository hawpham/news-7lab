import axios from "axios";

const API_KEY = import.meta.env.NEWS_API_KEY;

const gnewsApi = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: {
    apikey: API_KEY,
    lang: "vi",
    country: "vn",
  },
});

export default gnewsApi;
