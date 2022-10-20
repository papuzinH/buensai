import React, { useEffect, useRef, useState } from 'react';
import styles from './counter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Counter = (props) => {
  const [count, setCount] = useState(props.quantity ? props.quantity : 1);
  const cart = useContext(CartContext);
  const added = useRef(false);
  const router = useRouter();


  const notify = () =>
    toast('Se agregó al carrito', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    if (props.fromCart) {
      cart.changeQuantity(props.id, count);
    }
  }, [count]);
console.log(added);
  return (
    <>
      <ToastContainer />
      {added.current == false ? (
        <>
          {!props.fromCart && (
            <button
              className={`${styles['counter_btn']}`}
              onClick={() => {
                props.addToCart(props.product, count);
                notify();
                added.current = true;
              }}
            >
              Añadir al carrito
            </button>
          )}
          <div className={`${styles['counter']}`}>
            <FontAwesomeIcon
              icon={faMinus}
              className={`${styles['plusminus']}`}
              onClick={() => {
                if (count < 99 && count > 0) {
                  setCount(count - 1);
                }
              }}
            />
            <p>{count}</p>
            <FontAwesomeIcon
              icon={faPlus}
              className={`${styles['plusminus']}`}
              onClick={() => {
                if (count >= 0 && count < 99) {
                  setCount(count + 1);
                }
              }}
            />
          </div>
        </>
      ) : (
        <button
          className={`${styles['counter_btn']}`}
          onClick={() => {
            added.current = false;
            router.push('/cart');
          }}
        >
          Ir al carrito
        </button>
      )}
    </>
  );
};

export default Counter;
