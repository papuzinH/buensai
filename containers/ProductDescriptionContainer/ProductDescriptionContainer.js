import React from 'react';
import Image from 'next/image';
import styles from './productdescriptioncontainer.module.css';
import grid from '../../styles/grid.module.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CategorySingleProduct from '../../components/CategorySingleProduct/CategorySingleProduct';
import Counter from '../../components/Counter/Counter';

const ProductDescriptionContainer = (props) => {
  return (
    <div className={`${grid.col_6} ${styles.prod_desc_container}`}>
      <Breadcrumb product={props.product} />
      <div className={styles.header_prod}>
        <h1>{props.product.nombre}</h1>
        <p>${props.product.precio}</p>
      </div>
      <p>
        {props.product.descripcion}
      </p>
      <div className={styles.categories_container}>
        <CategorySingleProduct categorias={props.product.categorias} />
      </div>
      <div className={styles.btn_counter_container}>
        <Counter addToCart={props.addToCart} product={props.product} />
      </div>
    </div>
  );
};

export default ProductDescriptionContainer;
