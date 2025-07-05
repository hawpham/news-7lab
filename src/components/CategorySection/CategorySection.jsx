import styles from "./CategorySection.module.scss";
import { Link } from "react-router-dom";
import PostCard from "../PostCard/PostCard";
import { useEffect, useState } from "react";
import newsApi from "../../api/NewsApi";
import ArticleSkeleton from "../Skeleton/SkeletonArticle/SkeletonArticle";

export default function CategorySection({ title, viewAllLink, categoryArticles }) {
  console.log("🚀 ~ CategorySection ~ categoryArticles:", categoryArticles);
  const [listArticles, setListArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNewsListArticles() {
      setLoading(true);
      try {
        const res = await newsApi.get("/everything", {
          params: {
            q: categoryArticles ?? "bitcoin",
            pageSize: 4,
          },
        });

        setListArticles(res?.data?.articles);
      } catch (err) {
        console.error("error get list articles: ", err);
      } finally {
        setLoading(false);
      }
    }

    fetchNewsListArticles();
  }, []);
  return (
    <section className={styles.category}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <Link to={viewAllLink}>View All</Link>
      </div>
      <div className={styles.grid}>
        {/* Posts */}
        {!loading && listArticles?.length ? listArticles?.map((article, index) => <PostCard key={index} article={article} />) : <ArticleSkeleton />}
      </div>
    </section>
  );
}
