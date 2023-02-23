import React from 'react';
import styles from './infoCheckout.module.css';
function date() {}
const InfoCheckout = () => {
  return (
    <div className={`${styles['container']}`}>
      <form>
        <div>
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Apellido" required />
        </div>
        <input type="tel" placeholder="Telefono" required />
        <input type="text" placeholder="Localidad" required />
        <input type="text" placeholder="Direccion" required />
        <input type="number" placeholder="Codigo postal" required />
      </form>
    </div>
  );
};

export default InfoCheckout;
