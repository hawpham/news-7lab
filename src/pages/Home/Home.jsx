import styles from "./Home.module.scss";
import CategorySection from "../../components/CategorySection/CategorySection";
import Sidebar from "../../components/Sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
export default function Home() {
  // if (loading) return <div>Loading articles...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Hero />
        {/* <FeaturePost /> */}

        <CategorySection title="Computer Tricks" viewAllLink="/computer-tricks" categoryArticles="bitcoin" />
        <CategorySection title="News" viewAllLink="/news" categoryArticles="apple" />
        <CategorySection title="Mobile" viewAllLink="/mobile" categoryArticles="mobile" />
        <CategorySection title="Windows" viewAllLink="/windows" categoryArticles="windows" />
        <CategorySection title="Software" viewAllLink="/software" categoryArticles="technology" />
      </div>

      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
    </div>
  );
}
