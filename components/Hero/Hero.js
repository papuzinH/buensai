import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div className={styles['hero']}>
      <div className={styles['overlay']}></div>
      <div className={styles['cta']}>
        <h2>Trae paz y armonía a tu hogar</h2>
        <p>Conectáte con la naturaleza</p>
        <a href="#features" className={styles['btn']}>
          Descúbrelo
        </a>
      </div>
    </div>
  );
};
export default Hero;
