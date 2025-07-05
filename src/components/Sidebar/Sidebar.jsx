import { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import newsApi from "../../api/NewsApi";
import dayjs from "dayjs";
import ArticleSkeleton from "../Skeleton/SkeletonArticle/SkeletonArticle";

const latestPosts = [
  {
    id: 1,
    title: "How to Unblock Roblox on a School Computer Without VPN (2025 Guide)",
    image: "https://placeholder.pics/svg/300/DEDEDE/555555/image",
    time: "25/06/2025",
  },
  {
    id: 2,
    title: "What is Cloud Backup? A Complete Guide for Businesses",
    image: "https://placeholder.pics/svg/300/DEDEDE/555555/image",
    time: "08/06/2025",
  },
  {
    id: 1,
    title: "What Is Two-Factor Authentication? A Complete Guide to 2FA Security",
    image: "https://placeholder.pics/svg/300/DEDEDE/555555/image",
    time: "07/06/2025",
  },
  {
    id: 2,
    title: "What Is Disk Fragmentation? Understanding, Impact, and Solutions",
    image: "https://placeholder.pics/svg/300/DEDEDE/555555/image",
    time: "04/06/2025",
  },
];

export default function Sidebar() {
  const [listArticles, setListArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fatchNewsLatest() {
      setLoading(true);
      try {
        const res = await newsApi.get("/top-headlines", {
          params: {
            country: "us",
            pageSize: 5,
          },
        });
        setListArticles(res?.data?.articles);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fatchNewsLatest();
  }, []);
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.heading}>Latest Posts</h3>
      <ul className={styles.list}>
        {!loading && listArticles?.length ? (
          listArticles?.map((post, index) => (
            <li key={index} className={styles.postItem}>
              <Link to={`/post/${post.id}`}>
                <img src={post?.urlToImage} alt={post?.title} />
                <div className={styles.info}>
                  <h4>{post?.title}</h4>
                  <span>{dayjs(post?.publishedAt).format("DD/MM/YYYY")}</span>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <>
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
          </>
        )}
      </ul>
    </aside>
  );
}
