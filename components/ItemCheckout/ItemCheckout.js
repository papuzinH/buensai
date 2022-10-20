import React from 'react';
import styles from './itemCheckout.module.css';
import Image from 'next/image';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

const ItemCheckout = ({ image, name, price, indice, quantity }) => {
  const cart = useContext(CartContext);
  console.log('hola', cart);
  return (
    <div className={`${styles['title']}`}>
      <Image src={image} alt={name} width="100px" height="100px"></Image>
      <div>
        <h2>{name}</h2>
        <p>Cantidad: {quantity}</p>
      </div>
      <h2>{price}</h2>
    </div>
  );
};

export default ItemCheckout;
