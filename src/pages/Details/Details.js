import React, { useEffect } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { searviceId } = useParams();

  useEffect(() => {
    fetch(`./searvices.json/${searviceId}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [searviceId]);

  return (
    <div>
      <h2>This is details:{searviceId} </h2>
    </div>
  );
};

export default Details;
