import React from 'react';
import styles from './Breadcrumb.module.css';

const Breadcrumb = (props) => {
  return <div>Productos > {props.product.nombre} </div>;
};

export default Breadcrumb;
