import { useParams } from "react-router";
import styles from "./article.module.css";
import { useEffect, useMemo, useState } from "react";
import { getPostById } from "@/entities/post/api/get-post-by-id";

export function Article() {
  const { articleSlug } = useParams();
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    getPostById(articleSlug).then((data) => {
      setContent(data);
    });
  }, [articleSlug]);

  const data = useMemo(() => {
    if (typeof content?.content === "string") {
      return JSON.parse(content?.content);
    }

    if (Array.isArray(content?.content)) {
      return content?.content;
    }
    return null;
  }, [content]);

  return (
    <article className={styles.article}>
      <h1>{content?.title}</h1>
      {data?.map((block, index) => (
        <p key={index}>{block.content}</p>
      ))}
    </article>
  );
}
