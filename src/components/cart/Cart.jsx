import { Button, Card, Col, Image, Row } from "react-bootstrap";
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
    setCart((prevCart) =>
      prevCart.filter((product) => product.product_id !== productId)
    );
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
              className="btn"
            >
              Sort by Price (Desc)
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
