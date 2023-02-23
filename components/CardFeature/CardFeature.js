import React from 'react';
import Link from 'next/link';
import styles from './cardFeature.module.css';

const CardFeature = (props) => {
  return (
    <div className={styles['card']}>
      <div className={styles['textAndButton']}>
        <p>{props.text}</p>
        <Link href="/products">
          <a>Ver mas &gt;</a>
        </Link>
      </div>
    </div>
  );
};

export default CardFeature;
