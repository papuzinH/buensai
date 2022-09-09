import React from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <header className={styles.nav}>
      <nav className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a className={styles.itemsNav}>Inicio</a>
          </li>
          <li>
            <a className={styles.itemsNav}>Nosotros</a>
          </li>
          <li>
            <a className={styles.itemsNav}>Productos</a>
          </li>
          <li>
            <a className={styles.itemsNav}>Contacto</a>
          </li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <a>BUENSAI</a>
      </div>
      <ul className={styles.social}>
        <li>
          <a className={styles.itemsNav}>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontSize: 15, color: 'white' }}
            />
          </a>
        </li>
        <li>
          <a className={styles.itemsNav}>
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: 15, color: 'white' }}
            />
          </a>
        </li>
        <li>
          <a className={styles.itemsNav}>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: 15, color: 'white' }}
            />
          </a>
        </li>
        <li>
          <a className={styles.itemsNav}>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ fontSize: 15, color: 'white' }}
            />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
