import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { getFirestore } from '../../utils/firebase';
import Image from 'next/image';
import Head from 'next/head';
import Counter from '../../components/Counter/Counter';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { CartContext } from '../../contexts/CartContext';
import ProductItemContainer from '../../containers/ProductItemContainer/ProductItemContainer';

const SingleProduct = () => {
  const dataPage = { page: 'products' };
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const cart = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    const getProduct = async () => {
      const db = getFirestore();
      const itemsCollection = db.collection(`productos`);
      const itemSnapshot = await itemsCollection.doc(id).get();

      if (!itemSnapshot.exists) {
        console.log('No matching documents.');
        return;
      }

      setProduct({ id: itemSnapshot.id, ...itemSnapshot.data() });
      setLoading(false);
    };
    getProduct();
  }, [id]);


  return (
    <>
      <Navbar page={dataPage} />
      {!loading && (
        <ProductItemContainer
          image={product.urlImage}
          addToCart={cart.addToCart}
          product={product}
        />
        /*<div>
          <Image src={product.urlImage} width={200} height={200} alt={'eu'} />
          <Counter />
          <button
            onClick={() => {
              addProduct(product);
            }}
          >
            Agregar al carrito
          </button>
        </div>*/
      )}
      <Footer />
    </>
  );
};

export default SingleProduct;
