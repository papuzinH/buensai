import React from 'react';
import styles from './cartitem.module.css';
import Counter from '../Counter/Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const CartItem = ({ /*imagen,*/ name, price }) => {
  return (
    <div className={`${styles['cont_cart']}`}>
      <p className={`${styles['name']}`}>{name}</p>
      <Counter />
      <p className={`${styles['price']}`}>{price}</p>
      <FontAwesomeIcon icon={faCircleXmark} className={`${styles['close']}`} />
    </div>
  );
};

export default CartItem;
