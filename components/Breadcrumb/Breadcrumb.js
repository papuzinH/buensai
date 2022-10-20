import React from 'react';
import styles from './breadcrumb.module.css';

const Breadcrumb = (props) => {
  return <div>Productos > {props.product.nombre} </div>;
};

export default Breadcrumb;
