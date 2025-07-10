import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaSistrix, FaSearch } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const today = new Date().toLocaleDateString("vi-VN");

  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  //   forcus search
  useEffect(() => {
    if (showSearch) inputRef.current?.focus();
  }, [showSearch]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hide search when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <header className={styles.header}>
    <header className={`${styles.header} ${!showHeader ? styles.hidden : ""}`}>
      {/* Top nav */}
      {/* <div className={styles.topBar}>
        <div className={styles.date}>{today}</div>
        <div className={styles.links}> 
          <a href="http://7slab.com" target="_blank" rel="noopener noreferrer">
            Go to 7SLab
          </a>
          <Link to="/hot-news">Hot News</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div> */}

      {/* Main Nav */}
      <div className={styles.logoNav}>
        <div className={styles.logo}>
          <Link to="/">
            7S<span>News</span>
          </Link>
        </div>
        {/* Toggle btn */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <NavLink to="/">news</NavLink>
          <NavLink to="/category/world">world</NavLink>
          <NavLink to="/category/business">business</NavLink>
          <NavLink to="/category/technology">tech</NavLink>
          <NavLink to="/category/science">Science</NavLink>
          <NavLink to="/category/sports">sports</NavLink>
          <NavLink to="/category/entertainment">entertainment</NavLink>
          <NavLink to="/category/health">health</NavLink>
        </nav>

        <div className={styles.searchSection} ref={wrapperRef}>
          <button onClick={() => setShowSearch(true)}>
            <FaSearch />
          </button>

          {showSearch && (
            <div className={styles.searchOverlay}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                onKeyDown={(e) => {
                  if (e.key === "Escape") setShowSearch(false);
                }}
              />
              <button onClick={() => setShowSearch(false)}>
                <FaSistrix />
              </button>
            </div>
          )}
        </div>
        {/* <div className={styles.searchSection} ref={wrapperRef}>
          {showSearch ? (
            <div className={styles.searchBox}>
              <input ref={inputRef} type="text" placeholder="Search..." />
              <button onClick={() => setShowSearch(false)}>
                <FaSistrix />
              </button>
            </div>
          ) : (
            <button onClick={() => setShowSearch(true)}>
              <FaSearch />
            </button>
          )}
        </div>  */}
      </div>
    </header>
  );
}
