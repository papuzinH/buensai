import React from 'react';
import styles from './counter.module.css';

const Counter = () => {
  return (
    <div className={`${styles['counter']}`}>
      <a className={`${styles['plusminus']}`}>
        <p>-</p>
      </a>
      <p>1</p>
      <a className={`${styles['plusminus']}`}>
        <p>+</p>
      </a>
    </div>
  );
};

export default Counter;
