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
                      <span className="text-dark p-3 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-check-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z" />
                          <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
                        </svg>
                      </span>
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

                        className=" text-dark p-3 rounded"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>


                      </span>
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
                      variant=""
                      className="fw-bold px-4 text-light w-100"
                      style={{ backgroundColor: '#9538E2' }}
                    >
                      Send Message <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                      </svg>
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
