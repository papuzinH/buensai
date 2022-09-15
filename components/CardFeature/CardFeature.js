import React from 'react';
import styles from './cardFeature.module.css';

const CardFeature = (props) => {
  return (
    <div className={styles['card']}>
      <p>{props.text}</p>
      <button>Ver mas &gt;</button>
    </div>
  );
};

export default CardFeature;
