import styles from './Home.module.scss';
import FeaturePost from '../../components/FeaturedPost/FeaturedPost';
import CategorySection from '../../components/CategorySection/CategorySection';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <FeaturePost />

        <CategorySection title="Computer Tricks" viewAllLink="/computer-tricks" />
        <CategorySection title="News" viewAllLink="/news" />
        <CategorySection title="Mobile" viewAllLink="/mobile" />
        <CategorySection title="Windows" viewAllLink="/windows" />
        <CategorySection title="Software" viewAllLink="/software" />
      </div>

      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
    </div>
  );
}
