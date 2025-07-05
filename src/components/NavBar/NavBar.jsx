import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
  const links = ["Home", "News", "About", "Contact"];

  return (
    <nav className={styles.navbar}>
      {links.map((link, index) => (
        <Link key={index} to="/">
          {link}
        </Link>
      ))}
    </nav>
  );
}
