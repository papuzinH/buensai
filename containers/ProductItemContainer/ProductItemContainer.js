import React from 'react';
import styles from './productitemcontainer.module.css';
import SliderProduct from '../../components/SliderProduct/SliderProduct';
import ProductDescriptionContainer from '../ProductDescriptionContainer/ProductDescriptionContainer';
import grid from '../../styles/grid.module.css';

const ProductItemContainer = (props) => {
  return (
    <div className="inner">
      <div className={`${grid.grid} ${styles.prod_item_container}`}>
        <div className={`${grid.col_6} ${grid.col_in_12} ${styles.slider_container}`}>
          <SliderProduct images={props.product.slider} />
        </div>
        <div className={`${grid.col_6} ${grid.col_in_12}`}>
          <ProductDescriptionContainer addToCart={props.addToCart} product={props.product} />
        </div>
      </div>
    </div>
  );
};

export default ProductItemContainer;
