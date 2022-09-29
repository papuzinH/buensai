import React from 'react';
import styles from './cartitem.module.css';
import Counter from '../Counter/Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';

const CartItem = ({ image, name, price, indice }) => {
  return (
    <div key={indice} className={`${styles['cont_cart']} inner`}>
      <Image src={image} alt={name} width="176px" height="176px"></Image>
      <p className={`${styles['name']}`}>{name}</p>
      <Counter />
      <p className={`${styles['price']}`}>${price}</p>
      <FontAwesomeIcon icon={faCircleXmark} className={`${styles['close']}`} />
    </div>
  );
};

export default CartItem;
