import styles from './CategorySection.module.scss';
import { Link } from 'react-router-dom';
import PostCard from '../PostCard/PostCard';

export default function CategorySection({ title, viewAllLink }) {
  return (
    <section className={styles.category}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <Link to={viewAllLink}>View All</Link>
      </div>
      <div className={styles.grid}>
        {/* Giả lập bài viết */}
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
}
