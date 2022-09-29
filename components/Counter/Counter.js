import React from 'react';
import styles from './counter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {
  return (
    <div className={`${styles['counter']}`}>
      <FontAwesomeIcon icon={faMinus} className={`${styles['plusminus']}`} />
      <p>1</p>
      <FontAwesomeIcon icon={faPlus} className={`${styles['plusminus']}`} />
    </div>
  );
};

export default Counter;
