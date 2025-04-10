import styles from "./navbar.module.css";
import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navbar}>
          <NavLink to={"/"}>
            <div className={styles.logo}>Home</div>
          </NavLink>
          <div className={styles.separator} />
          <span>Website with YouTube transcripted videos</span>
        </div>
      </div>
    </header>
  );
};
