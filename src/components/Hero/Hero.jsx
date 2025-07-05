import { useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";
import newsApi from "../../api/NewsApi";
import ArticleSkeleton from "../Skeleton/SkeletonArticle/SkeletonArticle";
import dayjs from "dayjs";

export default function Hero() {
  const [topHeadlinesArticles, setTopHeadlinesArticles] = useState([]);
  console.log("🚀 ~ Hero ~ topHeadlinesArticles:", topHeadlinesArticles);

  const [loading, setLoading] = useState(true);

  const [firstArticle, ...subArticlesRest] = topHeadlinesArticles;

  useEffect(() => {
    async function fetchNewsTopHeadlines() {
      try {
        const res = await newsApi.get("/top-headlines", {
          params: {
            country: "us",
            pageSize: 5,
          },
        });
        setTopHeadlinesArticles(res.data.articles);
      } catch (err) {
        console.error("error get top Headlines articles: ", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNewsTopHeadlines();
  }, []);

  // if (loading) return <div>Loading artices...</div>;

  return (
    <section className={styles.hero}>
      {!loading && firstArticle?.length > 0 ? (
        <>
          {/* Main article - Left */}

          <div className={styles.mainArticle}>
            <img src={firstArticle?.urlToImage} alt="Top highline" />
            <div className={styles.text}>
              <Link to="/post/1">
                <h2>{firstArticle?.title}</h2>
              </Link>
              <p>{firstArticle?.description}</p>
              <span className={styles.time}>{dayjs(firstArticle?.publishedAt).format("DD/MM/YYYY")}</span>
            </div>
          </div>
          {/* Sub-acticle - right */}

          <div className={styles.subArticles}>
            {subArticlesRest?.map((post, index) => (
              <Link to={`/post/${post?.id}`} key={index} className={styles.item}>
                <img src={post?.urlToImage} alt={post?.title} />
                <h4>{post?.title}</h4>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Show Skeleton */}
          <div className={styles.mainArticle}>
            <ArticleSkeleton />
          </div>
          <div className={styles.subArticles}>
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
          </div>
        </>
      )}
    </section>
  );
}
