import React from 'react';
import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={`${styles['loader']}`}>
      <div className={`${styles['ball']}`}></div>
      <div className={`${styles['ball']}`}></div>
      <div className={`${styles['ball']}`}></div>
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
