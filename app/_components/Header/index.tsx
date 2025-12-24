"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isOpen ? styles.open : ""} ${
      isActive ? styles.isActive : ""
    }`}>
      <h1 className={styles.logo}>
        <Link href="/" onClick={handleClose}>
          <Image src="/logo.svg" alt="logo" width={120} height={17} />
        </Link>
      </h1>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/news" className={styles.navLink} onClick={handleClose}>
              news
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/service"
              className={styles.navLink}
              onClick={handleClose}
            >
              service
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/works" className={styles.navLink} onClick={handleClose}>
              works
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/company"
              className={styles.navLink}
              onClick={handleClose}
            >
              company
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/recruit"
              className={styles.navLink}
              onClick={handleClose}
            >
              recruit
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/contact"
              className={styles.navLink}
              onClick={handleClose}
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className={styles.hamburger}
        onClick={handleToggle}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
