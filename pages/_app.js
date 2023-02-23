import '../styles/globals.css';
import { CartProvider } from '../contexts/CartContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
        <title>Buensai</title>  
        <meta
          name="description"
          content="Buensai team Cami Dejtiar, Maxiiliano Coletti, Lautaro Hudson, German Figueroa"
        />
        </Head>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
