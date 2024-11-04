import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
      <img
        src={getImageUrl("hero/logo.png")}
        alt="Hero image of me"
        className={styles.logoImg}
      />
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <button className={styles.btn}>
          <li>
            <a href="#about">About</a>
          </li>
          </button>
          {/* <button className="btn">
          <li>
            <a href="#experience">Experience</a>
          </li>
            
          </button> */}
          <button className={styles.btn}>
          <li>
            <a href="#projects">Projects</a>
          </li>
          </button>
          <button className={styles.btn}>
          <li>
            <a href="#contact">Contact</a>
          </li>
          </button>
        </ul>
      </div>
    </nav>
  );
};
