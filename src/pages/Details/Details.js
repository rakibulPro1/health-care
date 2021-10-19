import { useParams } from "react-router";
import useSearvices from "../../hooks/useSearvices";

const Details = () => {
  const [searvices] = useSearvices([]);
  const { searviceId } = useParams();
  const selectedSearvice = searvices.find(
    (searvice) => searvice.id === parseInt(searviceId)
  );

  return (
    <div>
      <h3>{selectedSearvice?.name}</h3>
    </div>
  );
};

export default Details;
