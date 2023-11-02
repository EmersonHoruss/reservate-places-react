import React, { useContext } from "react";
import { Context } from "../context/Context";
import { useParams, useNavigate } from "react-router-dom";

const Lugar = () => {
  const {
    data,
    hire: hireFromContext,
    unhire: unhireFromContext,
  } = useContext(Context);
  const { name } = useParams();
  const navegacion = useNavigate();
  const lugar = data.find((lugar) => lugar.nombre === name);
  const isHired = () => !!lugar.isHired;
  const unhire = () => {
    unhireFromContext(lugar.nombre);
  };
  const hire = () => {
    hireFromContext(lugar.nombre);
  };
  const back = () => {
    navegacion(-1);
  };
  return (
    <div className="flex flex-col">
      <header>{lugar.nombre}</header>
      <p>{lugar.situacion}</p>
      <img src={`/images/${lugar.imagen}`} alt={`imagen de ${lugar.nombre}}`} />
      <div className="flex ">
        <span>{lugar.precio}$</span>
        <div className="flex">
          {isHired() ? (
            <button onClick={unhire}>Anular</button>
          ) : (
            <button onClick={hire}>Contratar</button>
          )}
          <button onClick={back}>Atrás</button>
        </div>
      </div>
    </div>
  );
};

export default Lugar;
