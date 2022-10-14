import React from 'react';
import styles from './paginador.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Loader from '../../components/Loader/Loader';

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
        <Loader />
      )}
    </div>
  );
};

export default Paginador;
