/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const CartWishListContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 
  const [wishlist, setWishlist] = useState([]); 



  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

 
  const addToWishlist = (product) => {
 
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    }
  };


  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((product) => product.id !== productId)
    );
  };


  const moveToCartFromWishlist = (product) => {
    removeFromWishlist(product.id); 
    addToCart(product); 
  };

  return (
    <CartWishListContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromWishlist,
        moveToCartFromWishlist,
      }}
    >
      {children}
    </CartWishListContext.Provider>
  );
};


export const useCart = () => useContext(CartWishListContext);
