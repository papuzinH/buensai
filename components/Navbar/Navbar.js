import React from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';

const Navbar = ({ page }) => {
  const router = useRouter();
  return (
    <header className={page.page === 'products' ? styles.navProducts : styles.nav}>
      <nav className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <button
              onClick={() => {
                router.push('/');
              }}
              className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                router.push('/aboutus');
              }}
              className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}
            >
              Nosotros
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                router.push('/prodcuts');
              }}
              className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}
            >
              Productos
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                router.push('/contact');
              }}
              className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}
            >
              Contacto
            </button>
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
          <button
            onClick={() => {
              router.push('/cart');
            }}
            a
            className={page.page === 'products' ? styles.itemsNavDark : styles.itemsNav}
          >
            <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 15, color: 'white' }} />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
