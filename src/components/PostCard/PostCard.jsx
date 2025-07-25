import SkeletonArticle from "../Skeleton/SkeletonArticle/SkeletonArticle";
import styles from "./PostCard.module.scss";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export default function PostCard({ article }) {
  return !article?.length > 0 ? (
    <>
      <div className={styles.card}>
        <img src={article?.urlToImage || "https://placeholder.pics/svg/300/DEDEDE/555555/image"} alt="post" className={styles.image} />
        <Link to="/post/1" className={styles.title}>
          {article?.title}
        </Link>
        <p className={styles.date}>{dayjs(article?.publishedAt).format("DD/MM/YYYY")}</p>
      </div>
    </>
  ) : (
    <>
      <SkeletonArticle />
    </>
  );
}
