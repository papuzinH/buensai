import React from 'react';
//import grid from '../../styles/grid.module.css';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div className={styles['hero']}>
      <div className={styles['cta']}>
        <h2>Trae paz y armonía a tu hogar</h2>
        <span>Conectáte con la naturaleza</span>
        <button>Descúbrelo</button>
      </div>
    </div>
  );
};
export default Hero;
