import React from 'react';
import styles from './heroProducts.module.css';
import Image from 'next/image';
import hero from '../../public/assets/HeroProducts.png';

const HeroProducts = () => {
  return (
    <div className={`${styles['heroimg']}`}>
      <Image src={hero} alt="Hero Bonsais" layout="fill"></Image>
      <h1 className={`${styles['title']}`}>Productos</h1>
      <h2 className={`${styles['subtitle']}`}>Descubre las ofertas que tenemos para vos</h2>
    </div>
  );
};

export default HeroProducts;
