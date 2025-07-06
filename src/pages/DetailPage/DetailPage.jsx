import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import newsApi from "../../api/NewsApi";
import ArticleSkeleton from "../../components/Skeleton/SkeletonArticle/SkeletonArticle";

export default function DetailPage() {
  const { category, index } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryArticles() {
      try {
        setLoading(true);
        const res = await newsApi.get("/everything", {
          params: {
            q: category,
            pageSize: 5,
          },
        });

        setArticle(res.data.articles[index]);
      } catch (err) {
        console.error("ERROR fetch articles: ", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoryArticles();
  }, []);
  // category, index
  if (!article)
    return (
      <>
        <ArticleSkeleton />
      </>
    );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} style={{ width: "100%", marginBottom: "20px" }} />
      <p>{article.content || article.description}</p>
      <p>
        <i>{new Date(article.publishedAt).toLocaleString("vi-VN")}</i>
      </p>
    </div>
  );
}
