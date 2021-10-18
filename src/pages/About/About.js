import React from "react";
import { Col, Row } from "react-bootstrap";
import aboutImg from "../../images/about/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="searvice-header text-center mx-auto mt-5 w-50">
        <h2 className="fs-2 fw-bold ">About Us</h2>
      </div>
      <Row xs={1} md={2} className="g-4 px-4 my-5">
        <Col>
          <h3 style={{ color: "#00e5cc", fontWeight: "bold" }}>How We Work</h3>
          <h1 className="mb-3 fw-bold">
            A Comprehensive Directory For Your Health Care
          </h1>
          <p className="mb-5" style={{ fontSize: "17px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="d-flex justify-content-arround mb-3">
            <div className="me-3">
              <i className="far fa-calendar-check icon"></i>
            </div>
            <div>
              <h3>Book an Appointment</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis ea, voluptate nemo quam culpa eos voluptatem
                aspernatur!
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-arround mb-3">
            <div className="me-3">
              <i class="fas fa-person-booth icon"></i>
            </div>
            <div>
              <h3>Conduct Checkup</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis ea, voluptate nemo quam culpa eos voluptatem
                aspernatur!
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-arround mb-3">
            <div className="me-3">
              <i class="fas fa-stethoscope icon"></i>
            </div>
            <div>
              <h3>Perform Treatment</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis ea, voluptate nemo quam culpa eos voluptatem
                aspernatur!
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-arround mb-3">
            <div className="me-3">
              <i class="far fa-handshake icon"></i>
            </div>
            <div>
              <h3>Prescribe & Payment</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis ea, voluptate nemo quam culpa eos voluptatem
                aspernatur!
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <img width="100%" src={aboutImg} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default About;
