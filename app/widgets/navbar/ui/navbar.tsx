import styles from "./navbar.module.css";

const pages = [
  "News",
  "Sport",
  "Business",
  "Politics",
  "Opinion",
  "Culture",
  "Lifestyle",
  "Tech",
  "Travel",
  "Search",
];

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          Home
          <span className={styles.separator}></span>
        </div>
        <nav className={styles.mainMenu}>
          {pages.map((page) => (
            <a key={page} href={`/${page.toLowerCase()}`}>
              {page}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
