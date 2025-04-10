import { ArticleCard } from "@/widgets/article-card";
import type { IArticleCard } from "@/entities/post";
import { useEffect, useState } from "react";
import { listPosts } from "@/entities/post";
import styles from "./post-list.module.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Skeleton } from "./skeleton";

export const PostList = () => {
  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({ queryKey: ["post-list"], queryFn: listPosts });

  return (
    <section className="container">
      <h1>List with transcripted video</h1>
      <section className={styles.list}>
        {isLoading && <Skeleton />}
        {!isLoading &&
          posts.map((article) => <ArticleCard key={article.id} {...article} />)}
      </section>
    </section>
  );
};
