import React from "react";
import { Col, Row } from "react-bootstrap";
import contactImg from "../../images/contact/contact.png";

const Contact = () => {
  return (
    <div>
      <div className="searvice-header text-center mx-auto mt-5 mb-4 w-50">
        <h2 className="fs-2 fw-bold ">Contact Us</h2>
      </div>
      <Row xs={1} md={2} className="g-4 px-4 my-5">
        <Col>
          <img width="100%" src={contactImg} alt="" />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Contact;
