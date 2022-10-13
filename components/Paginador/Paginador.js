import React from 'react';
import styles from './paginador.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Paginador = ({ handleLoadMore, cantToShow, dataProducts, loading }) => {
  return (
    <div className={`inner ${styles['contenedor']}`}>
      {!loading ? (
        cantToShow < dataProducts.length ? (
          <button onClick={handleLoadMore} className={`${styles['btn']}`}>
            Ver mas
          </button>
        ) : (
          <h2 className={`${styles['noMore']}`}>No hay mas productos</h2>
        )
      ) : (
        <h2 className={`${styles['noMore']}`}>Cargando...</h2>
      )}
    </div>
  );
};

export default Paginador;
