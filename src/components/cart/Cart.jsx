import { useCart } from "../../contextS/CartWishListContext";


const Cart = () => {
    const { cart } = useCart();



  return (
    <div>
      <h1>Cart </h1>
      <h3>total price of all product of cart</h3>
      <div>
        sort by price descending order button , purschase button 
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product, index) => (
          <div key={index}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;