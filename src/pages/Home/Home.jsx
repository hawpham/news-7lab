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

        <CategorySection title="Nation" viewAllLink="/nation" categoryArticles="nation" />
        <CategorySection title="World" viewAllLink="/world" categoryArticles="world" />
        <CategorySection title="Sports" viewAllLink="/sports" categoryArticles="sports" />
        <CategorySection title="Business" viewAllLink="/busness" categoryArticles="business" />
        <CategorySection title="Health" viewAllLink="/health" categoryArticles="health" />
      </div>

      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
    </div>
  );
}
