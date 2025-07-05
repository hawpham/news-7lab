import ArticleSkeleton from "../Skeleton/SkeletonArticle/SkeletonArticle";
import styles from "./PostCard.module.scss";
import { Link } from "react-router-dom";

export default function PostCard({ article }) {
  return !article?.length > 0 ? (
    <>
      <div className={styles.card}>
        <img src={article?.urlToImage} alt="post" className={styles.image} />
        <Link to="/post/1" className={styles.title}>
          {article?.title}
        </Link>
        <p className={styles.date}>{article?.publishedAt}</p>
      </div>
    </>
  ) : (
    <>
      <ArticleSkeleton />
    </>
  );
}
