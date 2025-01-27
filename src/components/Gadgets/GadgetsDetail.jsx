import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../contextS/CartWishListContext";

const GadgetsDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const { addToCart, addToWishlist } = useCart();
    

    useEffect(() => {
        fetch("/gadgets.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedProduct = data.find((item) => item.id === parseInt(id));
                setProduct(selectedProduct);
            });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Card style={{ width: "24rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://via.placeholder.com/300"
                        alt={product.name}
                    />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>Price: {product.price}</Card.Text>
                        <Card.Text>Category: {product.category}</Card.Text>
                        <Link to="/">
                            <Button variant="outline-primary">Back to Products</Button>
                        </Link>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                        <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default GadgetsDetail;