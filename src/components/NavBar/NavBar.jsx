import React from 'react';
import styles from './NavBar.module.css';

const NavBar = ({ title, children }) => {
  return (
    <nav className={styles.navCategories}>
      <h2>{title}</h2>
      <ul>{children}</ul>
    </nav>
  );
};

export default NavBar;
