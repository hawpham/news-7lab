import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import PostDetail from "../pages/PostDetail/PostDetail.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import App from "../App.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy.jsx";
import HotNews from "../pages/HotNews/HotNews.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import DetailPage from "../pages/DetailPage/DetailPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "post/:category/:index", element: <DetailPage /> },
      { path: "contact", element: <Contact /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "hot-news", element: <HotNews /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
