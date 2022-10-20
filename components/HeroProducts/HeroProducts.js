import React from 'react';
import styles from './heroProducts.module.css';

const HeroProducts = () => {
  return (
    <div className={`${styles['heroimg']}`}>
      <div className={styles['overlay']}></div>
      <div className={`inner ${styles['cont']}`}>
        <h1 className={`${styles['title']}`}>Productos</h1>
        <h2 className={`${styles['subtitle']}`}>Descubre las ofertas que tenemos para vos</h2>
      </div>
    </div>
  );
};

export default HeroProducts;
