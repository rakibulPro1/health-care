import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Searvice = (props) => {
  const { id, img, name, description } = props.searvice;

  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" width="100%" src={img} />
          <Card.Body>
            <Card.Title className="searvice-name fw-bold fs-4">
              {name}
            </Card.Title>
            <Card.Text>{description.slice(0, 220)}</Card.Text>

            <Link to={`/details/${id}`}>
              <Button
                className="btn btn-sm"
                style={{ backgroundColor: "#00e5cc", color: "white" }}
              >
                Know More
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Searvice;
