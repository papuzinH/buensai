import React from 'react';
import styles from './infoChekout.module.css';
import Image from 'next/image';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import ItemCheckout from '../ItemCheckout/ItemCheckout';

const InfoChekoutItem = () => {
  const cart = useContext(CartContext);
  const total = 0;
  return (
    <div className={styles['container']}>
      <h2>Productos</h2>
      {cart.cart.map((item) => {
        total = total + item.product.precio * item.quantity;
        return (
          <ItemCheckout
            key={item.product.id}
            indice={item.product.id}
            image={item.product.urlImage}
            name={item.product.nombre}
            price={item.product.precio}
            quantity={item.quantity}
          />
        );
      })}
      <div>
        <p>Total con envío</p>
        <p>{total}</p>
      </div>
      <button className={styles['btn']}>Comprar</button>
    </div>
  );
};

export default InfoChekoutItem;
