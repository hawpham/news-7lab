import styles from './Hero.module.scss';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Main article - Left */}
      <div className={styles.mainArticle}>
        <img src="https://placeholder.pics/svg/300/DEDEDE/555555/image" alt="Tin nổi bật" />
        <div className={styles.text}>
          <Link to="/post/1">
            <h2>What is System Restore? Step-by-Step Windows Guide for 2025 Users</h2>
          </Link>
          <p>What is System Restore? It’s a built-in Windows recovery feature that lets you revert your system settings, drivers, and registry to a previous stable state—without deleting your personal files.</p>
          <span className={styles.time}>01/07/2025</span>
        </div>
      </div>

      {/* Sub-acticle - right */}
      <div className={styles.subArticles}>
        {[
          { id: 2, title: "Guide to Writing Beautiful Fonts on Facebook", img: "https://placeholder.pics/svg/300/DEDEDE/555555/image" },
          { id: 3, title: "Full List of ALT Special Characters for Game, Facebook, and Word 2019", img: "https://placeholder.pics/svg/300/DEDEDE/555555/image" },
          { id: 4, title: "Guide to Installing and Configuring IFTTT Without Plugins", img: "https://placeholder.pics/svg/300/DEDEDE/555555/image" },
          { id: 5, title: "Top 50+ Nature Desktop Wallpapers (2025) – Stunning, Free, Large-Sized", img: "https://placeholder.pics/svg/300/DEDEDE/555555/image" }
        ].map(post => (
          <Link to={`/post/${post.id}`} key={post.id} className={styles.item}>
            <img src={post.img} alt={post.title} />
            <h4>{post.title}</h4>
          </Link>
        ))}
      </div>
    </section>
  );
}
