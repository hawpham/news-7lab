import styles from './FeaturedPost.module.scss';
import { Link } from 'react-router-dom';

export default function FeaturedPost() {
  return (
    <section className={styles.featured}>
      <img src="https://placeholder.pics/svg/200/DEDEDE/555555/image" alt="Featured" className={styles.image} />
      <div className={styles.content}>
        <Link to="/news/123" className={styles.title}>
          What is Android Developer Options? The Comprehensive 2025 Guide
        </Link>
        <p className={styles.meta}>01/07/2025 - by admin</p>
      </div>
    </section>
  );
}
