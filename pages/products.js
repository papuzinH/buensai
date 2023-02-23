import { useEffect, useState } from 'react';
import { getFirestore } from '../utils/firebase';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import HeroProducts from '../components/HeroProducts/HeroProducts';
import ProductCard from '../components/ProductCard/ProductCard';
import Footer from '../components/Footer/Footer';
import Paginador from '../components/Paginador/Paginador';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';

const Products = () => {
  const dataPage = { page: 'products' };
  //const { cart, setCart } = useContext(CartContext);
  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [cantToShow, setCantToShow] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const goToProduct = (id) => {
    router.push(`/singleProduct/${id}`);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = db.collection(`productos`);
        const itemSnapshot = await itemsCollection.get();

        const items = itemSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setDataProducts(items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  function handleCategoryChange(category) {
    setSelectedCategory(category.target.value);
  }


  const categories = dataProducts
  .map((product) => product.categorias)
  .reduce((accumulator, currentArray) => accumulator.concat(currentArray), [])
  .filter((category, index, array) => array.indexOf(category) === index);

  
  return (
    <>
      <Navbar page={dataPage} />
      <HeroProducts />
      <div style={{ background: '#F9F4EF' }}>
        <div className="inner">
        <CategoryFilter categories={categories} handleFilterChange={handleCategoryChange} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              margin: '50px auto',
            }}
          >
            {!loading &&
              dataProducts
                .filter(
                  (product) => selectedCategory === 'all' || product.categorias.includes(selectedCategory),
                )
                .slice(0, cantToShow)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    imagen={product.urlImage}
                    nombre={product.nombre}
                    precio={product.precio}
                    goToProduct={() => goToProduct(product.id)}
                  />
                ))}
          </div>
          {
            dataProducts.length >= cantToShow &&
          <Paginador
            handleLoadMore={() => setCantToShow(cantToShow + 3)}
            cantToShow={cantToShow}
            dataProducts={dataProducts}
            loading={loading}
          />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
