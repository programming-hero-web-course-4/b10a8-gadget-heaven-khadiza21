import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Gadgets = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        fetch("/gadgets.json")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    const filterProducts = (category) => {
        if (category === "All Product") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    const categories = ["All Product", "Laptops", "Phones", "Accessories", "Smart Watches", "MacBook", "Cloths"];


    return (
        <div className="d-flex">

            <div className="me-3">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant="outline-primary"
                        className="w-100 mb-2"
                        onClick={() => filterProducts(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>

          
            <div className="flex-grow-1">
                {filteredProducts.length === 0 ? (
                    <Alert variant="warning" className="text-center">
                        There are no products in this category.
                    </Alert>
                ) : (
                    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                        {filteredProducts.map((product) => (
                            <Col key={product.id}>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src="https://via.placeholder.com/150"
                                        alt={product.name}
                                    />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>Price: {product.price}</Card.Text>
                                        <Link to={`/gadget/${product.id}`}>
                                            <Button variant="outline-primary">View Details</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        </div>
    );
};

export default Gadgets;