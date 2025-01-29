import { Col, Container, Row } from "react-bootstrap";


const Footer = () => {
    return (
        <>
            <footer className="bg-light py-4">
                <Container>
                    <Row className="text-center">
                        <Col xs={12}>
                            <h5 className="fw-bold">Gadget Heaven</h5>
                            <p className="text-muted">
                                Leading the way in cutting-edge technology and innovation.
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="text-center">
                        <Col md={4}>
                            <h6 className="fw-bold">Services</h6>
                            <ul className="list-unstyled">
                                <li>Product Support</li>
                                <li>Order Tracking</li>
                                <li>Shipping & Delivery</li>
                                <li>Returns</li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h6 className="fw-bold">Company</h6>
                            <ul className="list-unstyled">
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h6 className="fw-bold">Legal</h6>
                            <ul className="list-unstyled">
                                <li>Terms of Service</li>
                                <li>Privacy Policy</li>
                                <li>Cookie Policy</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;