import {React, useContext} from 'react';
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import InfoCheckout from '../components/InfoCheckout/InfoCheckout';
import InfoChekoutItem from '../components/InfoChekoutItem/InfoChekoutItem';
import { CartContext } from '../contexts/CartContext';


const checkout = () => {

  const cart = useContext(CartContext);

  const dataPage = { page: 'products' };
  return (
    <>
      <NavBar page={dataPage} />
      <div className={`inner`} style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}>
        <InfoCheckout />
        <InfoChekoutItem />
      </div>
      
      <Footer />
    </>
  );
};

export default checkout;
