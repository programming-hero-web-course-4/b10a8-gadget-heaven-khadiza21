import { Card, Col, Container, Row } from "react-bootstrap";
import aboutServiceImg1 from "../../assets/about1.png";
import aboutServiceImg2 from "../../assets/about2.png";
import aboutServiceImg3 from "../../assets/about3.png";
import aboutServiceImg4 from "../../assets/about4.png";


const Service = () => {

    const data = [
        {
            id: 1,
            image: aboutServiceImg1,
            description: "Quick, No-cost Delivery & Setup Included",
        },
        {
            id: 2,
            image: aboutServiceImg2,
            description: "30-Day, No-Risk Money-Back Assurance",
        },
        {
            id: 3,
            image: aboutServiceImg3,
            description: "24/7 Expert Help, Always Just a Click Away",
        },
        {
            id: 4,
            image: aboutServiceImg4,
            description: "Flexible Payments with Various Credit Card",
        },
    ];
    return (
        <>
            <section className="my-5">
                    <Container>
                        <h2 className="text-center fw-bold mb-4">We Provide...</h2>
                        <p className="text-center text-secondary mb-4"> From smart devices to the coolest accessories, we have it all!.
                        </p>
                        <Row className="g-4">
                            {data.map((item) => (
                                <Col key={item.id} xs={12} sm={6} lg={3}>
                                    <Card className=" shadow-sm border-0 hover-shadow transition"
                                    style={{height:'300px'}}
                                    >
                                        <Card.Img
                                            variant="top"
                                            src={item.image}
                                            alt={`Item ${item.id}`}
                                            className=" object-cover rounded-top w-50 h-50 my-2 mx-auto"
                                        />
                                        <Card.Body>
                                            <Card.Text className="text-muted my-5">{item.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section> 
        </>
    );
};

export default Service;