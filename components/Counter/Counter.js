import React, { useEffect, useState } from 'react';
import styles from './counter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(  props.quantity ? props.quantity : 1  );
  const cart = useContext(CartContext);

  const minus = (count) => {
    count = count - 1;
  };

  const plus = (count) => {
    count = count + 1;
  };

  useEffect(() => {
    if (props.fromCart) {
      cart.changeQuantity(props.id, count);
    }
  }, [count]);
  
  return (
    <>
      {!props.fromCart &&  <button onClick={() => props.addToCart(props.product, count)}>Añadir al carrito</button>}
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
