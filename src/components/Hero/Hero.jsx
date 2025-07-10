import { useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";
// import newsApi from "../../api/newsApi.js";
import SkeletonArticle from "../Skeleton/SkeletonArticle/SkeletonArticle";
import dayjs from "dayjs";
import gnewsApi from "../../api/gnewsApi";

export default function Hero() {
  const [topHeadlinesArticles, setTopHeadlinesArticles] = useState([]);
  // const [category, index] = useParams()
  const [loading, setLoading] = useState(true);

  const [firstArticle, ...subArticlesRest] = topHeadlinesArticles;

  useEffect(() => {
    async function fetchNewsTopHeadlines() {
      try {
        const res = await gnewsApi.get("/top-headlines", {
          params: { topic: "world", max: 5, lang: "en" },
        });
        // const res = await newsApi.get("/everything", {
        //   params: {
        //     // country: "us",
        //     q: "headlines",
        //     pageSize: 5,
        //   },
        // });
        setTopHeadlinesArticles(res?.data?.articles);
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
      {!loading && topHeadlinesArticles?.length ? (
        <>
          {/* Main article - Left */}

          <div className={styles.mainArticle}>
            <img src={firstArticle?.image || "https://placeholder.pics/svg/300/DEDEDE/555555/image"} alt="Top highline" />
            <div className={styles.text}>
              <Link to={`/post/world/0`}>
                <h3>{firstArticle?.title}</h3>
              </Link>
              {/* <p>{firstArticle?.description}</p> */}
              {/* <span className={styles.time}>{dayjs(firstArticle?.publishedAt).format("DD/MM/YYYY")}</span> */}
            </div>
          </div>
          {/* Sub-acticle - right */}

          <div className={styles.subArticles}>
            {subArticlesRest?.map((post, index) => (
              <Link to={`/post/world/${index + 1}`} key={index} className={styles.item}>
                <img src={post?.image || "https://placeholder.pics/svg/300/DEDEDE/555555/image"} alt={post?.title} />
                <h4>{post?.title}</h4>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Show Skeleton */}
          <div className={styles.mainArticle}>
            <SkeletonArticle />
          </div>
          <div className={styles.subArticles}>
            <SkeletonArticle />
            <SkeletonArticle />
            <SkeletonArticle />
            <SkeletonArticle />
          </div>
        </>
      )}
    </section>
  );
}
