import React from 'react';
import styles from './infoCheckout.module.css';

const InfoCheckout = () => {
  return (
    <div className={`${styles['container']} inner`}>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="text" placeholder="Apellido" required />
        <input type="tel" placeholder="Telefono" required />
        <input type="text" placeholder="Localidad" required />
        <input type="text" placeholder="Direccion" required />
        <input type="number" placeholder="Codigo postal" required />
        <select placeholder="Formas de pago">
          <option>Tarjeta de credito</option>
          <option>Tarjeta de debito</option>
          <option>Mercado pago</option>
        </select>
        <input type="number" placeholder="Numero de tarjeta" required />
        <input type="date" placeholder="Fecha de expiracion" required />
        <input type="number" placeholder="Codigo de seguridad" required />
        <input type="number" placeholder="Dni del titular" required />
      </form>
    </div>
  );
};

export default InfoCheckout;
