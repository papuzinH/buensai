import React from 'react';
import styles from './cartitem.module.css';
import Counter from '../Counter/Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

const CartItem = ({ image, name, price, indice, quantity }) => {
  const cart = useContext(CartContext);

  return (
    <div key={indice} className={`${styles['cont_cart']}`}>
      <Image src={image} alt={name} width={176} height={176} style={{ objectFit: 'cover' }} />
      <p className={`${styles['name']}`}>{name}</p>
      {/* <Counter id={indice} fromCart={true} quantity={quantity} /> */}
      <p>{quantity}</p>
      <p className={`${styles['price']}`}>${price}</p>
      <FontAwesomeIcon
        onClick={() => {
          cart.removeOfCart(indice);
        }}
        icon={faCircleXmark}
        className={`${styles['close']}`}
      />
    </div>
  );
};

export default CartItem;
