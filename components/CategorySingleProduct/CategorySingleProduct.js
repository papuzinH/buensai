import React from 'react';
import styles from './categorysingleproduct.module.css';
import icon from '../../public/assets/feliz.svg';

const CategorySingleProduct = () => {
  return (
    <div className={styles.container_category}>
      <img src={icon.src} alt="Second slide" />
      <p>Exterior</p>
    </div>
  );
};

export default CategorySingleProduct;
