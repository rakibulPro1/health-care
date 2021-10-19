import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Appoinment.css";

const Appoinment = () => {
  return (
    <div>
      <Row xs={1} md={3} className="g-4 px-4">
        <Col>
          <div>
            <h2>Open for Appoinments</h2>
            <p>Please booking this appoinment you need of urgent</p>
          </div>
        </Col>
        <Col>
          <div className="d-flex">
            <div className="me-3">
              <button className="appoinment-btn">Make Appoinment</button>
            </div>
            <div>
              <button className="all-service-btn">All Service</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Appoinment;
