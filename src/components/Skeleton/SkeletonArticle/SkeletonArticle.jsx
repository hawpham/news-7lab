import styles from "./SkeletonArticle.module.scss";

export default function SkeletonArticle() {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.title}></div>
      <div className={styles.desc}></div>
    </div>
  );
}
