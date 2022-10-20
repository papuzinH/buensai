import styles from './cartcontainer.module.css';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

const CartContainer = () => {
  const cart = useContext(CartContext);

  return (
    <div className={`inner`}>
      <h2 className={`${styles['title']}`}>Carrito</h2>
      {cart.cart.map((item) => {
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
        Total con envío <span>${cart.cartTotalPrice()}</span>
      </h2>
      <div className={`${styles['cont_btn']}`}>
        <a className={`${styles['btn']}`}>Continuar compra</a>
      </div>
    </div>
  );
};

export default CartContainer;
