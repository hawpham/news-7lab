import styles from "./CategoryPage.module.scss";
import { Link, useParams } from "react-router-dom";
// import PostCard from "../PostCard/PostCard";
import { useEffect, useState } from "react";
// import newsApi from "../../api/newsApi.js";
import gnewsApi from "../../api/gnewsApi.js";
import SkeletonArticle from "../../components/Skeleton/SkeletonArticle/SkeletonArticle.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

export default function CategoryPage({ title, viewAllLink }) {
  const [listArticles, setListArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    async function fetchNewsListArticles() {
      setLoading(true);
      try {
        const res = await gnewsApi.get("/top-headlines", {
          params: { topic: category, max: 12, lang: "en" },
        });

        // const res = await newsApi.get("/everything", {
        //   params: {
        //     q: categoryArticles ?? "",
        //     // country: "us",
        //     pageSize: 4,
        //   },
        // });

        setListArticles(res?.data?.articles);
      } catch (err) {
        console.error("error get list articles: ", err);
      } finally {
        setLoading(false);
      }
    }

    fetchNewsListArticles();
  }, [category]);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <section className={styles.category}>
          <div className={styles.header}>
            <h2>{category}</h2>
            {/* <Link to={viewAllLink}>View All</Link> */}
          </div>
          <div className={styles.grid}>
            {/* Posts */}
            {!loading && listArticles?.length ? (
              // listArticles?.map((article, index) => <PostCard key={index} article={article} />)
              listArticles?.map((item, index) => (
                <div className={styles.categoryPage} key={index}>
                  <img src={item.image} className={styles.categoryImage} />

                  <div className={styles.categoryContent}>
                    <Link to={`/post/${category}/${index}`}>
                      <h4 className={styles.title}>{item?.title}</h4>
                    </Link>
                    <p className={styles.description}>{item?.description?.slice(0, 70)}...</p>
                  </div>
                </div>
              ))
            ) : (
              <>
                <SkeletonArticle />
                <SkeletonArticle />
                <SkeletonArticle />
                <SkeletonArticle />
              </>
            )}
          </div>
        </section>
      </div>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
    </div>
  );
}
