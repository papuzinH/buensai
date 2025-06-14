import React from 'react';
import styles from './floatingParticles.module.css';

const FloatingParticles = ({ count = 6, className = '' }) => {
  const particles = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className={`${styles.particle} ${styles[`particle${i + 1}`]}`}
    />
  ));

  return (
    <div className={`${styles.particleContainer} ${className}`}>
      {particles}
    </div>
  );
};

export default FloatingParticles;
