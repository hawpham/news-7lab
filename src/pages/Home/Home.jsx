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

        <CategorySection title="World" viewAllLink="category/world" categoryArticles="world" />
        <CategorySection title="Business" viewAllLink="category/busness" categoryArticles="business" />
        <CategorySection title="Nation" viewAllLink="category/technology" categoryArticles="technology" />
        <CategorySection title="Science" viewAllLink="category/science" categoryArticles="science" />
        <CategorySection title="entertainment" viewAllLink="category/entertainment" categoryArticles="entertainment" />
        <CategorySection title="Sports" viewAllLink="category/sports" categoryArticles="sports" />
        <CategorySection title="Health" viewAllLink="category/health" categoryArticles="health" />
      </div>

      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
    </div>
  );
}
