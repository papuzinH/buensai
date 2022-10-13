import React from 'react';
import styles from './productitemcontainer.module.css';
import SliderProduct from '../SliderProduct/SliderProduct';
import ProductDescriptionContainer from '../ProductDescriptionContainer/ProductDescriptionContainer';
import grid from '../../styles/grid.module.css';

const ProductItemContainer = () => {
  return (
    <div className='inner'>
      <div className={`${grid.grid} ${styles.prod_item_container}`}>
        <div className={`${grid.col_6} ${styles.slider_container}`}>
          <SliderProduct />
        </div>
        <ProductDescriptionContainer />
      </div>
    </div>
  );
};

export default ProductItemContainer;
