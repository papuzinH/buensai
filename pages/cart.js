import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import CartContainer from '../containers/CartContainer/CartContainer';
import Footer from '../components/Footer/Footer';

const Cart = () => {
  const dataPage = { page: 'products' };
  return (
    <>
      <Navbar page={dataPage} />
      <CartContainer />
      <Footer />
    </>
  );
};

export default Cart;
