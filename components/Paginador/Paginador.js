import React from 'react';
import styles from './paginador.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Paginador = () => {
  return (
    <section className={`${styles['paginador']}`}>
      <ul>
        <li>
          <a>1</a>
        </li>
        <li>
          <a>2</a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 15, color: '#95AB63' }}/>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Paginador;
