import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <h1>404</h1>
      <p>Page Not Found.</p>
      <Link to="/" className={styles.homeBtn}>
        Back to home
      </Link>
    </div>
  );
}
