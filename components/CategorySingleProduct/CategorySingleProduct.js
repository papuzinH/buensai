import React from 'react';
import styles from './categorysingleproduct.module.css';

const CategorySingleProduct = ({categorias}) => {

  return ( 
    <div className={styles.container_category}>
      {categorias.map((categoria, index) => {
        return (
          <p key={index}>
            {categoria}
          </p>
        );
      })}
    </div>
  );
};

export default CategorySingleProduct;
