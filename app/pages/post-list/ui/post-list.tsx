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

  return <h1>Hello</h1>;

  // return (
  //   <section className="container">
  //     <div className={styles.list}>
  //       {isLoading && <Skeleton />}
  //       {!isLoading &&
  //         posts.map((article: any) => (
  //           <ArticleCard key={article.id} {...article} />
  //         ))}
  //     </div>
  //   </section>
  // );
};
