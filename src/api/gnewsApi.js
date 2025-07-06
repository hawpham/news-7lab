import axios from "axios";

const API_KEY = "51006e3f101ac6e78a83f30c69b67c88";

const gnewsApi = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: {
    apikey: API_KEY,
    lang: "vi",
    country: "vn",
  },
});

export default gnewsApi;
