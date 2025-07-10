import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h4>ABOUT</h4>
          <p>7SNews is the news and media division of 7SLab. 7SNews provides business, financial, national, and international news to professionals via desktop terminals, the world's media organizations, industry events, and directly to consumers.</p>
        </div>

        <div className={styles.footerMenu}>
          {/* <h4>Menu</h4> */}

          {/* <p>The articles are compiled by the technical team, so copying without citing the source is strictly prohibited. Please respect the author of the article.</p> */}
          <div className={styles.menuList}>
            <Link to="/contact">Contact Us</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
          <a href="http://7slab.com" target="_blank" rel="noopener noreferrer">
            Go to 7SLab
          </a>
        </div>

        <div className={`${styles.section} ${styles.social}`}>
          <h4>Follow Us</h4>
          <div className={styles.iconList}>
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
            <Link to="/">
              <FaYoutube />
            </Link>
            <Link to="/">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 7SNews — All rights reserved</p>
      </div>
    </footer>
  );
}
