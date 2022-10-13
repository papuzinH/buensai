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

  return <CartContext.Provider value={{ cart, setCart, addToCart }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
