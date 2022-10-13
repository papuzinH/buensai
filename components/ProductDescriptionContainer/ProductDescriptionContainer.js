import React from 'react';
import Image from 'next/image';
import styles from './productdescriptioncontainer.module.css';
import grid from '../../styles/grid.module.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import CategorySingleProduct from '../CategorySingleProduct/CategorySingleProduct';

const ProductDescriptionContainer = () => {
  return (
    <div className={`${grid.col_6} ${styles.prod_desc_container}`}>
      <Breadcrumb />
      <div className={styles.header_prod}>
        <h1>Olmo chino</h1>
        <p>$4500</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et quam et sapien
        rutrum mattis at sit amet purus. Fusce sed odio magna. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Donec ut arcu neque.
      </p>
      <div className={styles.categories_container}>
        <CategorySingleProduct />
        <CategorySingleProduct />
        <CategorySingleProduct />
      </div>
      <div>
        <button>Añadir al carrito</button>
      {/* Acá va el counter */}
      </div>
    </div>
  );
};

export default ProductDescriptionContainer;
