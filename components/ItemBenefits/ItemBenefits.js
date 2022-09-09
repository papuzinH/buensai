import React from 'react';
//import grid from '../../styles/grid.module.css';
import styles from './itembenefits.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemBenefits = ({ icon, title, text }) => {
  return (
    <div className={`${styles.itemBenefit}`}>
      <div className={`${styles.itemBenefit_icon}`}>
        <FontAwesomeIcon icon={icon} style={{ fontSize: 40, color: '#F6FFE0' }} />
      </div>
      <div className={`${styles.itemBenefit_text}`}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ItemBenefits;
