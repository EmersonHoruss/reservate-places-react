import React, { useContext } from "react";
import { Context } from "../context/Context";

const Row = ({ lugar }) => {
  const { unhire: unhireFromContext } = useContext(Context);
  const unhire = () => {
    unhireFromContext(lugar.nombre);
  };
  return (
    <div className="flex">
      <button className="border-2" onClick={unhire}>
        Anular
      </button>{" "}
      {lugar.nombre} ({lugar.precio}$)
    </div>
  );
};

export default Row;
