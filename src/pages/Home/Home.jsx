import styles from "./Home.module.scss";
import CategorySection from "../../components/CategorySection/CategorySection";
import Sidebar from "../../components/Sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
export default function Home() {
  // if (loading) return <div>Loading articles...</div>;

  return (
    <div className={styles.container}>
      {/* Left side */}
      <div className={styles.left}>
        <Hero />
        {/* <FeaturePost /> */}
        <CategorySection title="world" viewAllLink="category/world" categoryArticles="world" />
        <CategorySection title="business" viewAllLink="category/busness" categoryArticles="business" />
        <CategorySection title="technology" viewAllLink="category/technology" categoryArticles="technology" />
        <CategorySection title="science" viewAllLink="category/science" categoryArticles="science" />
        <CategorySection title="entertainment" viewAllLink="category/entertainment" categoryArticles="entertainment" />
        <CategorySection title="sports" viewAllLink="category/sports" categoryArticles="sports" />
        <CategorySection title="health" viewAllLink="category/health" categoryArticles="health" />
      </div>
      {/* Right side */}
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
    </div>
  );
}
