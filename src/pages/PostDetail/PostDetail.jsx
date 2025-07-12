import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SkeletonArticle from "../../components/Skeleton/SkeletonArticle/SkeletonArticle";
// import newsApi from "../../api/newsApi.js";
import gnewsApi from "../../api/gnewsApi.js";
import styles from "./PostDetail.module.scss";
import dayjs from "dayjs";

export default function PostDetail() {
  const { category, index } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryArticles() {
      try {
        setLoading(true);
        const res = await gnewsApi.get("/top-headlines", {
          params: { topic: category, lang: "en" },
        });
        setArticle(res?.data?.articles[index]);
        // const res = await newsApi.get("/everything", {
        //   params: {
        //     q: category,
        //     // country: "us",
        //     pageSize: 5,
        //   },
        // });

        // setArticle(res.data.articles[index]);
      } catch (err) {
        console.error("ERROR fetch articles: ", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoryArticles();
  }, [category, index]);
  // category, index

  if (!article)
    return (
      <>
        <SkeletonArticle />
      </>
    );

  return (
    <main className={styles.postDetail}>
      <p>
        {/* <i>{new Date(article.publishedAt).toLocaleString("vi-VN")}</i> */}
        <i className={styles.timePublished}>{dayjs(article?.publishedAt).format("DD/MM/YYYY")}</i>
      </p>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <h1 className={styles.title}>{article.title}</h1>
        <img src={article.image} alt={article.title} style={{ width: "100%", marginBottom: "20px" }} />
        <p>{article.content || article.description}</p>
        <div className={styles.sectionAds}>
          <img src="https://placeholder.pics/svg/200/DEDEDE/555555/ads" alt="7s news" />
        </div>
        <p>
          <i className={styles.linkSource}>
            Source:{" "}
            <a href={article?.url} target="_blank" rel="noopener noreferrer">
              {article?.source?.name}
            </a>
          </i>
        </p>
      </div>
    </main>
  );
}

// import styles from "./PostDetail.module.scss";
// import { useParams, Link } from "react-router-dom";

// const fakePosts = {
//   1: {
//     title: "What is System Restore? Step-by-Step Windows Guide for 2025 Users",
//     image: "https://softbuzz.net/wp-content/uploads/2025/06/what-is-system-restore.webp",
//     content: `What is System Restore? It’s a built-in Windows recovery feature that lets you revert your system settings, drivers, and registry to a previous stable state—without deleting your personal files. It’s a quick fix for when your PC starts misbehaving after a Windows update or driver install.`,
//     time: "03/07/2025",
//   },
//   2: {
//     title: "What Is iOS Screen Time? A 2025 Guide for Digital Balance at Home and Work",
//     image: "https://softbuzz.net/wp-content/uploads/2025/07/what-is-ios-screen-time.jpg",
//     content: `What is iOS Screen Time if not a reality check for how digital our lives have become?
// As a working parent, I once told myself a 5-minute Instagram scroll was harmless—until it quietly became an hour every night.
// Turning on Screen Time felt invasive at first, but it opened my eyes: how much time I was losing, how distracted I’d become.`,
//     time: "02/07/2025",
//   },
// };

// export default function PostDetail() {
//   const { id } = useParams();
//   const post = fakePosts[id];

//   if (!post)
//     return (
//       <div className={styles.postNotExist}>
//         <div className={styles.notFound}>The post does not exist.</div>
//         <Link to="/" className={styles.homeBtn}>
//           Back to home
//         </Link>
//       </div>
//     );

//   return (
//     <main className={styles.postDetail}>
//       <h1>{post.title}</h1>
//       <span className={styles.time}>{post.time}</span>
//       <img src={post.image} alt={post.title} />
//       <p>{post.content}</p>
//     </main>
//   );
// }
