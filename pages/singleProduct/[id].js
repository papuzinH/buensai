import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { getFirestore } from '../../utils/firebase';
import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import { CartContext } from '../../contexts/CartContext';
import ProductItemContainer from '../../containers/ProductItemContainer/ProductItemContainer';

const SingleProduct = () => {
  const dataPage = { page: 'products' };
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const cart = useContext(CartContext);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    const getProduct = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = db.collection('productos');
        const itemSnapshot = await itemsCollection.doc(id).get();

        if (!itemSnapshot.exists) {
          setError('Producto no encontrado');
          setLoading(false);
          return;
        }

        const productData = { id: itemSnapshot.id, ...itemSnapshot.data() };

        // Verificar que el producto tenga las propiedades necesarias
        if (!productData.slider || !Array.isArray(productData.slider)) {
          productData.slider = [productData.urlImage || '/assets/placeholder.jpg'];
        }

        setProduct(productData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Error al cargar el producto');
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) {
    return (
      <>
        <Head>
          <title>Cargando producto... | Buensai</title>
        </Head>
        <Navbar page={dataPage} />
        <div
          style={{
            minHeight: 'calc(100vh - 200px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Loader />
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>Error | Buensai</title>
        </Head>
        <Navbar page={dataPage} />
        <div
          style={{
            minHeight: 'calc(100vh - 200px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px',
            padding: '40px',
          }}
        >
          <h2 style={{ color: 'var(--charcoal-gray)', fontFamily: 'var(--font-heading)' }}>
            {error}
          </h2>
          <button
            onClick={() => router.push('/products')}
            style={{
              background: 'var(--nature-gradient-primary)',
              color: 'var(--mist-white)',
              border: 'none',
              borderRadius: '50px',
              padding: '15px 30px',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
            }}
          >
            Volver a productos
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{product.nombre || 'Producto'} | Buensai</title>
        <meta
          name="description"
          content={product.descripcion || 'Descubre nuestros bonsáis únicos'}
        />
      </Head>
      <Navbar page={dataPage} />
      <ProductItemContainer image={product.urlImage} addToCart={cart.addToCart} product={product} />
      <Footer />
    </>
  );
};

export default SingleProduct;
