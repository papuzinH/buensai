import React from 'react';
import Image from 'next/image';
import styles from './productCard.module.css';

const ProductCard = ({ imagen, nombre, precio, goToProduct }) => {
  return (
    <div className={styles['productCard']}>
      <Image src={imagen} alt={nombre} width={'228px'} height={'228px'}></Image>
      <p>{nombre}</p>
      <p className={styles['precio']}>{`$ ${precio}`}</p>
      <button onClick={goToProduct}>ver mas</button>
    </div>
  );
};

export default ProductCard;
