import React from 'react';
import Image from 'next/image';
import styles from './productCard.module.css';

const ProductCard = ({ imagen, nombre, precio, goToProduct }) => {
  return (
    <div className={styles['productCard']}>
      <div className={styles['productCardImg']}>
        <Image src={imagen} alt={nombre} width={'228px'} height={'228px'}></Image>
      </div>
      <div className={styles['productCardInfo']}>
        <p>{nombre}</p>
        <p className={styles['precio']}>{`$ ${precio}`}</p>
        <button onClick={goToProduct} className={styles['btn']}>
          Ver producto
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
