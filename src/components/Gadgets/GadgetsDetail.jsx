import { useEffect, useState } from "react";
import {
    Badge,
    Button,
    Card,
    Col,
    Container,
    Row,
    Spinner,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useCart } from "../../contextS/CartWishListContext";
import { Cart, Heart, Star, StarFill } from "react-bootstrap-icons";


const GadgetsDetail = () => {
    const { product_id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const {wishlist,  addToCart, addToWishlist } = useCart();


    useEffect(() => {
        fetch("/gadgets.json")
            .then((response) => response.json())

            .then((data) => {
                const selectedProduct = data.find(
                    (item) => item.product_id === product_id
                );
                setProduct(selectedProduct);
                setLoading(false);

            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
                setLoading(false);
            });
    }, [product_id]);

    if (loading) {
        return (
            <div className="text-center py-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="text-center text-danger fw-bold py-5">
                Product not found!
            </div>
        );
    }


    const isInWishList = wishlist.some((item) => item.product_id === product.product_id);

    return (
        <div className="mb-5 pb-5">

            <div className="text-center py-5 " style={{ backgroundColor: '#9538E2' }}>
                <Container className="pb-5 mb-5">
                    <h2 className="fw-bold text-white bg-purple py-3 rounded">
                        Product Details
                    </h2>
                    <p className="text-white py-3">
                        Explore the latest gadgets that will take your experience to the
                        next level. From smart devices to the coolest accessories, we have
                        it all!
                    </p>
                </Container>
            </div>

            <Container style={{ marginTop: '-100px' }} className="mb-5 ">
                <Card className="p-4 shadow border-0 rounded">
                    <Row className="align-items-center">
                        <Col md={5} className="text-center">
                            <img
                                src={product.product_image}
                                alt={product.product_title}
                                className="img-fluid rounded"
                                style={{ maxHeight: "300px", objectFit: "contain" }}
                            />

                        </Col>
                        <Col md={7} className="mt-5">
                            <h3 className="fw-bold">{product.product_title}</h3>
                            <p className="fs-5">
                                <strong>Price:</strong>{" "}
                                <span className="text-success fw-bold">${product.price}</span>
                            </p>

                            {product.availability ? (
                                <Badge bg="success" className="mb-3">
                                    In Stock
                                </Badge>
                            ) : (
                                <Badge bg="danger" className="mb-3">
                                    Out of Stock
                                </Badge>
                            )}

                            <p className="text-muted">{product.description}</p>

                            <h5 className="fw-bold">Specification:</h5>
                            <ul className="list-unstyled">
                                {product.specification.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                            </ul>

                            <h5 className="fw-bold">Rating</h5>
                            <div className="d-flex align-items-center">
                                {Array.from({ length: 5 }, (_, i) =>
                                    i < Math.floor(product.rating) ? (
                                        <StarFill key={i} className="text-warning" />
                                    ) : (
                                        <Star key={i} className="text-warning" />
                                    )
                                )}
                                <span className="ms-2 fw-bold">{product.rating}</span>
                            </div>

                            <div className="mt-3">
                                <Button
                                    variant="primary"
                                    className="me-2"
                                    onClick={() => addToCart(product)}
                                    disabled={!product.availability}
                                >
                                    <Cart className="me-2" /> Add To Cart
                                </Button>
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => addToWishlist(product)}
                                    disabled={isInWishList}
                                >
                                    <Heart /> {isInWishList ? "In Cart" : ""}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Container>


        </div>
    );
};

export default GadgetsDetail;
