import React from 'react';
import styles from './NavLink.module.css';

const NavLink = ({ name, active, onClick }) => {
  return (
    <li>
      <a
        className={[active ? styles.active : '', styles.link].join(' ')}
        href={'#' + name}
        onClick={onClick}
      >
        {name}
      </a>
    </li>
  );
};

export default NavLink;
