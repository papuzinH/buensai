import React from 'react';
import styles from './cartcontainer.module.css';
import CartItem from '../CartItem/CartItem';
import OlmoChino from '../../public/assets/olmoChino.png';
import Shito from '../../public/assets/shito.png';
import Shohin from '../../public/assets/shohin.png';

const CartContainer = () => {
  const dataCart = [
    {
      imagen: OlmoChino,
      nombre: 'Olmo Chino',
      precio: 4500,
      id: '1',
    },
    {
      imagen: Shito,
      nombre: 'Shito',
      precio: 5000,
      id: '2',
    },
    {
      imagen: Shohin,
      nombre: 'Shohin',
      precio: 3800,
      id: '3',
    },
  ];
  let total = 0;
  return (
    <div className={`inner`}>
      <h2 className={`${styles['title']}`}>Carrito</h2>
      {dataCart.map((item) => {
        total = total + item.precio;
        return (
          <CartItem
            key={item.id}
            indice={item.id}
            image={item.imagen}
            name={item.nombre}
            price={item.precio}
          />
        );
      })}
      <h2 className={`${styles['total']}`}>
        Total con envío <span>${total}</span>
      </h2>
      <div className={`${styles['cont_btn']}`}>
        <a className={`${styles['btn']}`}>Continuar compra</a>
      </div>
    </div>
  );
};

export default CartContainer;
