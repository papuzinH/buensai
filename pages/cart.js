import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import CartContainer from '../components/CartContainer/CartContainer';
import Footer from '../components/Footer/Footer';

const Cart = () => {
  const dataPage = { page: 'products' };
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/wxl3mdd.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/jfy4rte.css"></link>
      </Head>
      <Navbar page={dataPage} />
      <CartContainer />
      <Footer />
    </>
  );
};

export default Cart;
