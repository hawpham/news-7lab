import styles from "./Home.module.scss";
// import FeaturePost from '../../components/FeaturedPost/FeaturedPost';
import CategorySection from "../../components/CategorySection/CategorySection";
import Sidebar from "../../components/Sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
// import { useEffect, useState } from "react";
// import newsApi from "../../api/NewsApi.js";

export default function Home() {
  // const [topHeadlinesArticles, setTopHeadlinesArticles] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchNews() {
  //     try {
  //       const res = await newsApi.get("/top-headlines", {
  //         params: {
  //           country: "us",
  //           pageSize: 8,
  //         },
  //       });

  //       setTopHeadlinesArticles(res.data.articles);
  //     } catch (err) {
  //       console.error("error get articles: ", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchNews();
  // }, []);

  // if (loading) return <div>Loading articles...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Hero />
        {/* <FeaturePost /> */}

        <CategorySection title="Computer Tricks" viewAllLink="/computer-tricks" categoryArticles="bitcoin" />
        <CategorySection title="News" viewAllLink="/news" categoryArticles="apple" />
        <CategorySection title="Mobile" viewAllLink="/mobile" categoryArticles="mobile" />
        <CategorySection title="Windows" viewAllLink="/windows" categoryArticles="windows" />
        <CategorySection title="Software" viewAllLink="/software" categoryArticles="software" />
      </div>

      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
    </div>
  );
}
