import { useEffect, useState } from "react";

const useSearvices = () => {
  const [searvices, setSearvices] = useState([]);
  useEffect(() => {
    fetch("/searvices.json")
      .then((res) => res.json())
      .then((data) => setSearvices(data));
  }, []);
  return [searvices];
};

export default useSearvices;
