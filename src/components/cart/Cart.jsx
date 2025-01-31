import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useCart } from "../../contextS/CartWishListContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);




  const sortCartByPrice = () => {
    setCart((prevCart) => [...prevCart].sort((a, b) => b.price - a.price));
  };

  const deleteProduct = (productId) => {
    const removedProduct = cart.find((product) => product.product_id === productId);
  
    setCart((prevCart) =>
      prevCart.filter((product) => product.product_id !== productId)
    );

    if (removedProduct) {
      toast.success(`${removedProduct.product_title} removed from cart Successfully!`, { position: "top-right" });
    }
    
  };

  const handlePurchase = () => {
    if (cart.length === 0) return;
    setCart([]);

    Swal.fire({
      icon: "success",
      title: "Payment Successfully! ",
      text: `Thanks for purchasing. Total Price: ${totalPrice}`,
      confirmButtonText: "Close",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <h4>Cart</h4>
          <div className="d-flex gap-3 flex-column flex-sm-row align-items-center">
            <h5>Total cost: ${totalPrice.toFixed(2)}</h5>
            <Button
              variant="outline-primary"
              onClick={sortCartByPrice}
              style={{ borderColor: "#9538E2", color: "#9538E2" }}
              className="btn "
            >
              Sort by Price <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sort-down" viewBox="0 0 16 16">
                <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
              </svg>
            </Button>
            <Button
              variant=""
              onClick={handlePurchase}
              disabled={cart.length === 0}
              className="btn text-light"
              style={{ backgroundColor: "#9538E2" }}
            >
              Purchase
            </Button>
          </div>
        </div>

        {cart.length === 0 ? (
          <p className="text-center my-5 py-5 shadow rounded">
            Your cart is empty.
          </p>
        ) : (
          <div className="mt-4">
            {cart.map((item) => (
              <Card
                key={item.product_id}
                className="mb-3 p-3 shadow-sm rounded"
              >
                <Row className="align-items-center">
                  <Col xs={4} sm={3} md={2} lg={1} className="text-center">
                    <Image
                      src={item.product_image}
                      rounded
                      fluid
                      className="w-75 w-sm-100"
                    />
                  </Col>
                  <Col xs={6} sm={7} md={8} lg={9}>
                    <h5 className="text-truncate">{item.product_title}</h5>
                    <p className="d-none d-sm-block">{item.description}</p>
                    <p>
                      <strong>Price: ${item.price.toFixed(2)}</strong>
                    </p>
                  </Col>
                  <Col xs={2} className="text-end">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="fw-bold rounded-circle"
                      onClick={() => deleteProduct(item.product_id)}
                    >
                      &times;
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
