import React from 'react';
import styles from './itemCheckout.module.css';
import Image from 'next/image';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

const ItemCheckout = ({ image, name, price, indice, quantity }) => {
  const cart = useContext(CartContext);
  return (
    <div className={`${styles['container']}`}>
      <Image src={image} alt={name} width={100} height={100} style={{ objectFit: 'cover' }} />
      <div className={`${styles['containerText']}`}>
        <h2>{name}</h2>
        <p>Cantidad: {quantity}</p>
      </div>
      <h2 className={`${styles['price']}`}>${price}</h2>
    </div>
  );
};

export default ItemCheckout;
