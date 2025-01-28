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
 
    if (!wishlist.some((item) => item.product_id === product.product_id)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    }
  };


  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((product) => product.product_id !== productId)
    );
  };


  const moveToCartFromWishlist = (product) => {
    removeFromWishlist(product.product_id); 
    addToCart(product); 
  };

  return (
    <CartWishListContext.Provider
      value={{
        cart,
        wishlist,
        setCart,
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
