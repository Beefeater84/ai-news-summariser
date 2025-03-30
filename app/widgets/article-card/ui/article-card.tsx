import type { IArticleCard } from "@/entities/article";
import styles from "./article-card.module.css";
import { NavLink } from "react-router";

export const ArticleCard = (props: IArticleCard) => {
  console.log("ArticleCard", props);

  return (
    <article className={styles.article}>
      {/* <picture className={styles.image}>
                <source srcSet={props.image.src} type="image/webp"/>
                <img src={props.image.src} alt={props.image.alt}/>
            </picture> */}
      <div className={styles.content}>
        {/* <div>{props.tags?.[0]}</div> */}
        <NavLink to={"article/" + props.id} className={styles.link}>
          <h2 className={styles.title}>{props.title}</h2>
        </NavLink>

        {/* <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div> */}
        <p>{props.date}</p>
      </div>
    </article>
  );
};
