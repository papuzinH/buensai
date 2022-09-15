import React from 'react';
import styles from './cardFeature.module.css';

const CardFeature = (props) => {
  return (
    <div className={styles['card']}>
      <div className={styles['textAndButton']}>
        <p>{props.text}</p>
        <button>Ver mas &gt;</button>
      </div>
    </div>
  );
};

export default CardFeature;
