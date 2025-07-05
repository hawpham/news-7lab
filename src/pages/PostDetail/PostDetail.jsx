import styles from "./PostDetail.module.scss";
import { useParams, Link } from "react-router-dom";

const fakePosts = {
  1: {
    title: "What is System Restore? Step-by-Step Windows Guide for 2025 Users",
    image: "https://softbuzz.net/wp-content/uploads/2025/06/what-is-system-restore.webp",
    content: `What is System Restore? It’s a built-in Windows recovery feature that lets you revert your system settings, drivers, and registry to a previous stable state—without deleting your personal files. It’s a quick fix for when your PC starts misbehaving after a Windows update or driver install.`,
    time: "03/07/2025",
  },
  2: {
    title: "What Is iOS Screen Time? A 2025 Guide for Digital Balance at Home and Work",
    image: "https://softbuzz.net/wp-content/uploads/2025/07/what-is-ios-screen-time.jpg",
    content: `What is iOS Screen Time if not a reality check for how digital our lives have become?
As a working parent, I once told myself a 5-minute Instagram scroll was harmless—until it quietly became an hour every night.
Turning on Screen Time felt invasive at first, but it opened my eyes: how much time I was losing, how distracted I’d become.`,
    time: "02/07/2025",
  },
};

export default function PostDetail() {
  const { id } = useParams();
  const post = fakePosts[id];

  if (!post)
    return (
      <div className={styles.postNotExist}>
        <div className={styles.notFound}>The post does not exist.</div>
        <Link to="/" className={styles.homeBtn}>
          Back to home
        </Link>
      </div>
    );

  return (
    <main className={styles.postDetail}>
      <h1>{post.title}</h1>
      <span className={styles.time}>{post.time}</span>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </main>
  );
}
