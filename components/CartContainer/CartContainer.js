import React from 'react';
import styles from './cartcontainer.module.css';
import CartItem from '../CartItem/CartItem';
import OlmoChino from '../../public/assets/olmoChino.png';
import Shito from '../../public/assets/shito.png';
import Shohin from '../../public/assets/shohin.png';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';

const CartContainer = () => {
  const cart = useContext(CartContext);
  const router = useRouter();
  let total = 0;
  return (
    <div className={`inner`}>
      <h2 className={`${styles['title']}`}>Carrito</h2>
      {cart.cart.map((item) => {
        total = total + item.product.precio * item.quantity;
        return (
          <CartItem
            key={item.product.id}
            indice={item.product.id}
            image={item.product.urlImage}
            name={item.product.nombre}
            price={item.product.precio}
            quantity={item.quantity}
          />
        );
      })}
      <h2 className={`${styles['total']}`}>
        Total con envío <span>${total}</span>
      </h2>
      <div className={`${styles['cont_btn']}`}>
        <a
          className={`${styles['btn']}`}
          onClick={() => {
            router.push('/checkout');
          }}
          total={total}
        >
          Continuar compra
        </a>
      </div>
    </div>
  );
};

export default CartContainer;
