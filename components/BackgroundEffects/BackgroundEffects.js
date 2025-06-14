import React from 'react';
import styles from './backgroundEffects.module.css';

const BackgroundEffects = ({ variant = 'default', className = '' }) => {
  return (
    <div className={`${styles.effectsContainer} ${styles[variant]} ${className}`}>
      <div className={styles.gradientOrb1}></div>
      <div className={styles.gradientOrb2}></div>
      <div className={styles.gradientOrb3}></div>
      <div className={styles.meshGradient}></div>
    </div>
  );
};

export default BackgroundEffects;
