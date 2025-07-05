import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const today = new Date().toLocaleDateString('vi-VN');

  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.date}>{today}</div>
        <div className={styles.links}>
            <Link to="/hot-news">Hot News</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.logoNav}>
        <div className={styles.logo}>
          <Link to="/">7S<span>News</span></Link>
        </div>

        {/* Hamburger toggle */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation menu */}
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/graphics">Graphics</NavLink>
          <NavLink to="/office">Office</NavLink>
          <NavLink to="/windows">Windows</NavLink>
          <NavLink to="/software">Software</NavLink>
          <NavLink to="/mobile">Mobile</NavLink>
          <NavLink to="/games">Games</NavLink>
          <NavLink to="/computer-tricks">Computer Tricks</NavLink>
        </nav>
      </div>
    </header>
  );
}
