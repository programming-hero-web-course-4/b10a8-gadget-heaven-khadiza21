import { Button, ListGroup } from "react-bootstrap";
import { useCart } from "../../contextS/CartWishListContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = () => {

  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const sortCartByPrice = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };
  
  const deleteProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.product_id !== productId));
  };

  const handlePurchase = () => {
    if (cart.length === 0) return;
    setCart([]);

    Swal.fire({
      title: "Congratulations!",
      text: "Your purchase was successful!",
      icon: "success",
      confirmButtonText: "Close",
    }).then(() => {
      navigate("/");
    });
  };


  return (
    <div className="container mt-4">
    <h1>Cart</h1>
    <h3 className="mt-3">Total Price: ${totalPrice.toFixed(2)}</h3>
    <div className="d-flex gap-3 mt-3">
      <Button variant="primary" onClick={sortCartByPrice}>
        Sort by Price (Desc)
      </Button>
      <Button
        variant="success"
        onClick={handlePurchase}
        disabled={cart.length === 0}
      >
        Purchase
      </Button>
    </div>

    {cart.length === 0 ? (
      <p className="mt-4">Your cart is empty.</p>
    ) : (
      <ListGroup className="mt-4">
        {cart.map((product, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{product.product_title}</h5>
              <p>Price: ${product.price}</p>
            </div>
            <Button variant="danger" onClick={() => deleteProduct(product.product_id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    )}
  </div>
  );
};

export default Cart;