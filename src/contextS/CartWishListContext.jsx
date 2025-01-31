/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CartWishListContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 
  const [wishlist, setWishlist] = useState([]); 



  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success(`${product.product_title} added to cart!`, { position: "top-right" });
  };

 
  const addToWishlist = (product) => {
 
    if (!wishlist.some((item) => item.product_id === product.product_id)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      toast.success(`${product.product_title} added to wishlist!`, { position: "top-right" });
    }
  };


  const removeFromWishlist = (productId) => {
    const removedProduct = wishlist.find((product) => product.product_id === productId);
    setWishlist((prevWishlist) =>
      prevWishlist.filter((product) => product.product_id !== productId)
    );
    if (removedProduct) {
      toast.success(`${removedProduct.product_title} moved To Cart from wishlist!`, { position: "top-right" });
    }
  };


  const moveToCartFromWishlist = (product) => {
    removeFromWishlist(product.product_id); 
    addToCart(product); 
    toast.success(`${product.product_title} moved to cart!`, { position: "top-right" });
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
