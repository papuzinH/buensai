import React from 'react';
import styles from './cartcontainer.module.css';
import CartItem from '../CartItem/CartItem';

const CartContainer = () => {
  const dataCart = [
    {
      //imagen: OlmoChino,
      nombre: 'Olmo Chino',
      precio: '$4500',
      id: '1',
    },
    {
      //imagen: Shito,
      nombre: 'Shito',
      precio: '$5000',
      id: '2',
    },
    {
      //imagen: Shohin,
      nombre: 'Shohin',
      precio: '$3800',
      id: '3',
    },
  ];
  let total = 0;
  return (
    <div>
      <h2>Carrito</h2>
      {dataCart.map((item) => {
        return (
          <>
            {(total = total + item.precio)}
            <CartItem /*image{item.imagen}*/ name={item.nombre} price={item.precio} key={item.id} />
          </>
        );
      })}
      <h2>
        Total con envío <span>${total}</span>
      </h2>
    </div>
  );
};

export default CartContainer;
