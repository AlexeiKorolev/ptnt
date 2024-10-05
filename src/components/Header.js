import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.siteHeader}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/"><img src="/logo.png" alt="Company Logo" /></Link>
        </div>
        <nav className={`${styles.mainNav} ${isMenuOpen ? styles.active : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className={`${styles.ctaButton} ${isMenuOpen ? styles.active : ''}`}>
          <Link to="/get-started" className={styles.button}>Get Started</Link>
        </div>
        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;