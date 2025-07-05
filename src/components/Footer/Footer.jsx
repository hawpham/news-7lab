import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp
} from 'react-icons/fa6';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}> 
        <div className={styles.section}>
          <h4>ABOUT</h4>
          <p> 7S News is a technology blog about software and computer tips.</p>
        </div>

         <div className={styles.section}>
          <h4>DMCA</h4>
          <p>The articles are compiled by the technical team, so copying without citing the source is strictly prohibited. Please respect the author of the article.</p>
        </div>

         <div className={`${styles.section} ${styles.social}`}>
          <h4>Follow Us</h4>
          <div className={styles.iconList}>
            <Link to="/"><FaFacebookF /></Link>
            <Link to="/"><FaInstagram /></Link>
            <Link to="/"><FaYoutube /></Link>
            <Link to="/"><FaLinkedinIn /></Link> 
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 7S News — Free software & smart tech tips for every user.</p>
      </div>
    </footer>
  );
}
