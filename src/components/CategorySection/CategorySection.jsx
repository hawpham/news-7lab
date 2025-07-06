import styles from "./CategorySection.module.scss";
import { Link, useParams } from "react-router-dom";
// import PostCard from "../PostCard/PostCard";
import { useEffect, useState } from "react";
import newsApi from "../../api/NewsApi";
import ArticleSkeleton from "../Skeleton/SkeletonArticle/SkeletonArticle";

export default function CategorySection({ title, viewAllLink, categoryArticles }) {
  const [listArticles, setListArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { category } = useParams();

  useEffect(() => {
    async function fetchNewsListArticles() {
      setLoading(true);
      try {
        const res = await newsApi.get("/everything", {
          params: {
            q: categoryArticles ?? "",
            // country: "us",
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
        {listArticles?.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <img src={item.urlToImage} alt="" style={{ width: "100%", maxWidth: "400px" }} />
            <Link to={`/post/${categoryArticles}/${index}`}>
              <h4 className={styles.title}>{item?.title}</h4>
            </Link>
            <p className={styles.description}>{item?.description?.slice(0, 70)}...</p>
          </div>
        ))}
        {/* {!loading && listArticles?.length ? (
          listArticles?.map((article, index) => <PostCard key={index} article={article} />)
        ) : (
          <>
            <ArticleSkeleton />
            <ArticleSkeleton />
          </>
        )} */}
      </div>
    </section>
  );
}
