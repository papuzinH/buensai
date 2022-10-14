import { useState, createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    let productInCart = cart.find(
      (one_product) => one_product.product.id === product.id
    );
    if(productInCart === undefined) {
    setCart([...cart, {product: product, quantity: quantity}]);
    } else {
      productInCart.quantity += quantity;
    }
  };

  const removeOfCart = (id) => {
    let cartFiltered = cart.filter((one_product) => one_product.product.id !== id);
    setCart(cartFiltered);
  };

  return <CartContext.Provider value={{ cart, setCart, addToCart, removeOfCart }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
