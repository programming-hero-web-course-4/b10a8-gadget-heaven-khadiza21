import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useCart } from "../../contextS/CartWishListContext";


const Wishlist = () => {
  const { wishlist, removeFromWishlist,
    moveToCartFromWishlist } = useCart();

  return (<>

    <div className="container mt-4">

      <h4>Cart</h4>


      {wishlist.length === 0 ? (
        <p className="text-center my-5 py-5 shadow rounded">
          Your cart is empty.
        </p>
      ) : (
        <div className="mt-4">
          {wishlist.map((item) => (
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
                    className="w-100"
                  />
                </Col>
                <Col xs={6} sm={7} md={8} lg={9}>
                  <h5 className="text-truncate">{item.product_title}</h5>
                  <p className="d-none d-sm-block">{item.description}</p>
                  <p>
                    <strong>Price: ${item.price.toFixed(2)}</strong>
                  </p>
                  <Button onClick={() => moveToCartFromWishlist(item)}
                     style={{borderRadius:'24px', padding:'10px 20px', width:'150px', backgroundColor:'#9538E2'}} className="border-0"
                    >  Add to Cart  </Button>
                </Col>
                <Col xs={2} className="text-end">

                  <Button variant="outline-danger" size="sm" className="fw-bold rounded-circle" onClick={() => removeFromWishlist(item.product_id)}>  &times;  </Button>
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

export default Wishlist;