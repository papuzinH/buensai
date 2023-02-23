import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = ({ page }) => {
  const router = useRouter();
  const navBarSolid = page.page === 'products' || page.page === 'aboutus';
  const [responsive, setResponsive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setResponsive(true);
      } else {
        setResponsive(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={navBarSolid ? styles.navProducts : styles.nav}>
      <nav className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <button
              onClick={() => {
                router.push('/');
              }}
              className={styles.itemsNav}
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                router.push('/aboutus');
              }}
              className={styles.itemsNav}
            >
              Nosotros
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                router.push('/products');
              }}
              className={styles.itemsNav}
            >
              Productos
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                router.push('/contact');
              }}
              className={styles.itemsNav}
            >
              Contacto
            </button>
          </li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <a
          onClick={() => {
            router.push('/');
          }}
        >
          BUENSAI
        </a>
      </div>
      <ul className={styles.social}>
        <li>
          <a className={styles.itemsNav}>
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: 15, color: 'white' }} />
          </a>
        </li>
        <li>
          <a className={styles.itemsNav}>
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 15, color: 'white' }} />
          </a>
        </li>
        <li>
          <a className={styles.itemsNav}>
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 15, color: 'white' }} />
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              router.push('/cart');
            }}
            className={styles.itemsNav}
          >
            <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 15, color: 'white' }} />
          </button>
        </li>
      </ul>
      {responsive && (
        <button className={`${styles.itemsNav} ${styles.burguerMenu}`} onClick={handleOpenMenu}>
          <FontAwesomeIcon icon={faBars} style={{ fontSize: 25, color: 'black' }} />
        </button>
      )}
      <MenuMobile openMenu={openMenu} handleOpenMenu={handleOpenMenu} router={router}/>
    </header>
  );
};

const MenuMobile = ({ openMenu, handleOpenMenu, router }) => {
  return (
    <div className={`${styles.menuMobile} ${openMenu ? styles.showMenu : ''}`}>
      <button className={`${styles.itemsNav} ${styles.closeMenu}`}
        onClick={handleOpenMenu}
      >
        <FontAwesomeIcon icon={faClose} style={{ fontSize: 25, color: 'black' }} />
      </button>
      <ul className={styles.menuItems}>
        <li>
          <button
            onClick={() => {
              router.push('/');
            }}
            className={styles.itemsNav}
          >
            Inicio
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              router.push('/aboutus');
            }}
            className={styles.itemsNav}
          >
            Nosotros
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              router.push('/products');
            }}
            className={styles.itemsNav}
          >
            Productos
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              router.push('/contact');
            }}
            className={styles.itemsNav}
          >
            Contacto
          </button>
        </li>
      </ul>

      <ul className={styles.social}>
        <li>
          <a className={styles.itemsNav}>
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: 15, color: 'white' }} />
          </a>
        </li>
        <li>
          <a className={styles.itemsNav}>
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 15, color: 'white' }} />
          </a>
        </li>
        <li>
          <a className={styles.itemsNav}>
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 15, color: 'white' }} />
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              router.push('/cart');
            }}
            className={styles.itemsNav}
          >
            <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 15, color: 'white' }} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
