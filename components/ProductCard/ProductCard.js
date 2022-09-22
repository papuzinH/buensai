import React from 'react';
import Image from 'next/image';
import styles from './productCard.module.css';

const ProductCard = ({ imagen, nombre, precio }) => {
  return (
    <div className={styles['productCard']}>
      <Image src={imagen} alt={nombre}></Image>
      <p>{nombre}</p>
      <p className={styles['precio']}>{precio}</p>
    </div>
  );
};

export default ProductCard;
