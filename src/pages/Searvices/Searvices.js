import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Searvice from "../Searvice/Searvice";

const Searvices = () => {
  const [searvices, setServices] = useState([]);

  useEffect(() => {
    fetch("./searvices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="searvice-header text-center mx-auto mt-5 mb-4 w-50">
        <h2 className="fs-2 fw-bold">Our Healthcare Service</h2>
        <p>
          We are a one-stop-shop for your health, offering caring doctors,
          world-class diagnostics, and much more.
        </p>
      </div>
      <Row xs={1} md={3} className="g-4 px-4">
        {searvices.map((searvice) => (
          <Searvice key={searvice.id} searvice={searvice}></Searvice>
        ))}
      </Row>
    </div>
  );
};

export default Searvices;
