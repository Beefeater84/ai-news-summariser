import { useParams } from "react-router";
import styles from "./article.module.css";
import { use, useEffect, useState } from "react";
import { getPostById } from "@/entities/article/api/get-post-by-id";

export function Article() {
  const { articleId } = useParams();
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    getPostById(articleId).then((data) => {
      setContent(data.content);
    });
  }, [articleId]);

  return (
    <article className={styles.article}>
      <h1>Article {articleId}</h1>
      {content?.map((block, index) => (
        <p key={index}>{block.content}</p>
      ))}
    </article>
  );
}
