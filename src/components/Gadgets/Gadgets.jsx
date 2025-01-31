import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Gadgets.css'

const Gadgets = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All Product");

    useEffect(() => {
        fetch("/gadgets.json")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
                console.log("data", data);
            });
    }, []);

    const filterProducts = (category) => {
        setActiveCategory(category);
        if (category === "All Product") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(
                (product) => product.category === category
            );
            setFilteredProducts(filtered);
        }
    };

    const categories = [
        "All Product",
        "Smartphones",
        "Laptops",
        "Smartwatches",
        "MacBook",
    ];



    return (
        <Container className="py-4 px-0 my-5" >
            <Row>
                <Col md={3} className="mb-3 ">
                    <div className=" p-4 rounded shadow">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={category === activeCategory ? "" : "outline-primary"}
                                className="w-100 mb-2 border-0"
                                onClick={() => filterProducts(category)}
                                style={{
                                    backgroundColor: category === activeCategory ? "#9538E2" : "#f2f2f3",
                                    color: category === activeCategory ? "white" : "black",
                                    borderRadius:'24px',
                                    
                                }}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </Col>
                <Col md={9}>
                    {filteredProducts.length === 0 ? (
                        <Alert variant="warning" className="text-center">
                            There are no products in this category.
                        </Alert>
                    ) : (
                        <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                            {filteredProducts.map((product) => (
                                <Col key={product.product_id}>
                                    <Card className="p-2 shadow rounded h-100">
                                        <Card.Img
                                            variant="top"
                                            src={product.product_image}
                                            alt={product.product_title}
                                            className="img-fluid rounded"
                                            style={{ maxHeight: "250px", objectFit: "contain" }}
                                        />
                                        <Card.Body>
                                            <Card.Title>{product.product_title}</Card.Title>
                                            <Card.Text>Price: ${product.price}</Card.Text>
                                            <Link to={`/gadget/${product.product_id}`}>
                                                <Button variant="" className="custom-button">View Details</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Gadgets;
