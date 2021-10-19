import { Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useSearvices from "../../hooks/useSearvices";

const Details = () => {
  const [searvices] = useSearvices();
  const { searviceId } = useParams();
  const selectedSearvice = searvices.find(
    (searvice) => searvice.id === parseInt(searviceId)
  );

  return (
    <div>
      <Row xs={1} md={2} className="px-4">
        <Col>
          <div className="my-5">
            <h2>{selectedSearvice?.name}</h2>
            <p>{selectedSearvice.description}</p>
            <Link to="/home">
              <button className="btn btn-sm btn-info text-light px-4 py-2 mt-4">
                Book an Appoinment
              </button>
            </Link>
          </div>
        </Col>
        <Col>
          <div className="my-5">
            <Image src={selectedSearvice.img} fluid />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Details;
