import styles from "./PostCard.module.scss";
import { Link } from "react-router-dom";

export default function PostCard() {
  return (
    <div className={styles.card}>
      <img src="https://placeholder.pics/svg/300/DEDEDE/555555/image" alt="post" className={styles.image} />
      <Link to="/post/1" className={styles.title}>
        Guide to Writing Beautiful Posts
      </Link>
      <p className={styles.date}>02/07/2025</p>
    </div>
  );
}
