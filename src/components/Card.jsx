import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ lugar }) {
  const navegacion = useNavigate();
  const moreInfo = () => {
    navegacion(`/lugar/${lugar.nombre}`);
  };
  return (
    <div className="flex flex-col">
      <header>{lugar.nombre}</header>
      <p>{lugar.situacion}</p>
      <img
        src={`/images/${lugar.imagen}`}
        alt={`imagen de ${lugar.nombre}`}
      />
      <span>{lugar.contratado ? "contratado" : ""}</span>
      <button onClick={moreInfo}>Más info</button>
    </div>
  );
}

export default Card;
