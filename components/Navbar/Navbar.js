import React from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({ page }) => {
  console.log(page.page);
  return (
    <header className={page.page === 'products' ? styles.navProducts : styles.nav}>
      <nav className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}>
              Inicio
            </a>
          </li>
          <li>
            <a className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}>
              Nosotros
            </a>
          </li>
          <li>
            <a className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}>
              Productos
            </a>
          </li>
          <li>
            <a className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <div className={page.page === 'products' ? styles.logoProducts : styles.logo}>
        <a>BUENSAI</a>
      </div>
      <ul className={styles.social}>
        <li>
          <a className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}>
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: 15, color: 'white' }} />
          </a>
        </li>
        <li>
          <a className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}>
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 15, color: 'white' }} />
          </a>
        </li>
        <li>
          <a className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}>
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 15, color: 'white' }} />
          </a>
        </li>
        <li>
          <a className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}>
            <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 15, color: 'white' }} />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
