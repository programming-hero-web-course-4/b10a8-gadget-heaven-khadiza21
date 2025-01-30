/* eslint-disable react/no-unknown-property */
import { EmailJSResponseStatus } from "@emailjs/browser";
import { useRef } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  ToastContainer,
} from "react-bootstrap";
import { toast } from "react-toastify";
import gadgets from "../../assets/gagdegts.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    EmailJSResponseStatus.sendForm(
      "service_jwjttgk",
      "template_npae9y9",
      form.current,
      "CQ5OKwfRskTWUvM5e"
    ).then(
      (result) => {
        console.log(result.text, "SUCCESS!");
        toast.success("Successfully Sent Message!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
    e.target.reset();
  };
  return (
    <>
      <Container className="my-5 py-5">
        <Card className="shadow-lg border-0">
          <Row className="g-0">
            <Col xs={12} xl={6} className="p-4">
              <h2 className="text-center text-xl-start fw-bold mb-4">
                Get in Touch for any Information!
              </h2>
              <p className="text-muted text-center text-xl-start">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!.
              </p>
              <img
                src={gadgets}
                alt="Vegetable Salad Raw Material"
                className="img-fluid d-block mx-auto mx-xl-0"
              />
              <Row className="mt-4">
                <Col md={6} className="mb-3">
                  <Card className="border-1 p-3 text-center text-md-start">
                    <div className="d-flex align-items-center gap-2">
                      <span className="bg-dark text-white p-3 rounded"></span>
                      <div>
                        <strong>Send us an email</strong>
                        <p className="text-muted mb-0">example@gmail.com</p>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md={6} className="mb-3">
                  <Card className="border-1 p-3 text-center text-md-start">
                    <div className="d-flex align-items-center gap-2">
                      <span
                        style={{ backgroundColor: "#9538E2" }}
                        className=" text-light p-3 rounded"
                      ></span>
                      <div>
                        <strong>Give us a call</strong>
                        <p className="text-muted mb-0">+000 999 777 888</p>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={6} className="p-4">
              <Card.Body>
                <h2 className="text-center text-xl-start fw-bold mb-3">
                  Contact Us!
                </h2>
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="user_name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Message"
                      required
                    />
                  </Form.Group>
                  <div className="text-center">
                    <Button
                      type="submit"
                      variant="dark"
                      className="fw-bold px-4"
                    >
                      Send Message <i className="fas fa-paper-plane ms-2"></i>
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <ToastContainer />
      </Container>
    </>
  );
};

export default Contact;
