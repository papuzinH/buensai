import React from 'react';
import styles from './ProductItemContainer.module.css';
import SliderProduct from '../SliderProduct/SliderProduct';
import ProductDescriptionContainer from '../ProductDescriptionContainer/ProductDescriptionContainer';
import grid from '../../styles/grid.module.css';

const ProductItemContainer = () => {
  return <div className={grid.grid}>
    <SliderProduct/>
    <ProductDescriptionContainer />
  </div>;
};

export default ProductItemContainer;
