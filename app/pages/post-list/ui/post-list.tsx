import { useQuery } from "@tanstack/react-query";
import { ArticleCard } from "@/widgets/article-card";
import { listPosts } from "@/entities/post";
import styles from "./post-list.module.css";
import { Skeleton } from "./skeleton";

export const PostList = () => {
  // const {
  //   data: posts = [],
  //   isLoading,
  //   isError,
  // } = useQuery({ queryKey: ["post-list"], queryFn: listPosts });

  return (
    <section className="container">
      <h1>TEST</h1>
      {/* <div className={styles.list}>
        {isLoading && <Skeleton />}
        {!isLoading &&
          posts.map((article) => <ArticleCard key={article.id} {...article} />)}
      </div> */}
    </section>
  );
};
