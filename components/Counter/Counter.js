import React, { useState } from 'react';
import styles from './counter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Counter = (props) => {
  const [count, setCount] = useState(1);

  const minus = (count) => {
    count = count - 1;
    console.log(count);
  };

  const plus = (count) => {
    count = count + 1;
    console.log(count);
  };
  return (
    <>
      <button onClick={() => props.addToCart(props.product, count)}>Añadir al carrito</button>
      <div className={`${styles['counter']}`}>
        <FontAwesomeIcon
          icon={faMinus}
          className={`${styles['plusminus']}`}
          onClick={() => {
            if (count < 99 && count > 0) {
              setCount(count - 1);
            }
          }}
        />
        <p>{count}</p>
        <FontAwesomeIcon
          icon={faPlus}
          className={`${styles['plusminus']}`}
          onClick={() => {
            if (count >= 0 && count < 99) {
              setCount(count + 1);
            }
          }}
        />
      </div>
    </>
  );
};

export default Counter;
