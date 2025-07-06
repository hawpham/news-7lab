import axios from "axios";

const API_KEY = import.meta.env.VITE_API_TOKEN;

const gnewsApi = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: {
    apikey: API_KEY,
    lang: "vi",
    country: "vn",
  },
});

export default gnewsApi;
