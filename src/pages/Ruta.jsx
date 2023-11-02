import React, { useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Row from "../components/Row";

const Ruta = () => {
  const { data: places, currencyRef } = useContext(Context);
  const navegacion = useNavigate();
  const navigateToCapitalYPatagonia = () => {
    navegacion("/capitalYPatagonia");
  };
  const navigateToNorteYEste = () => {
    navegacion("/norteYEste");
  };
  const hiredPlaces = () => {
    if (hasHiredPlaces()) {
      return (
        <div className="flex flex-col">
          {places
            .filter((place) => !!place.isHired)
            .map((place) => (
              <Row key={place.nombre} lugar={place} />
            ))}
        </div>
      );
    }
    return (
      <div className="flex flex-col">
        <p>(Todavía no has contratado ninguna actividad.)</p>
        <p>
          Haz clic en{" "}
          <button className="border-2" onClick={navigateToCapitalYPatagonia}>
            Capital y Patagonía
          </button>{" "}
          o{" "}
          <button className="border-2" onClick={navigateToNorteYEste}>
            Norte y Este
          </button>{" "}
          para ver nuestras ofertas
        </p>
      </div>
    );
  };
  const hasHiredPlaces = () => {
    return places.find((place) => !!place.isHired);
  };
  const getTotal = () => {
    if (hasHiredPlaces()) {
      return places
        .filter((place) => !!place.isHired)
        .map((place) => place.precio)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
    }
    return 0;
  };
  return (
    <div>
      {hiredPlaces()}
      <p>Total a pagar: {getTotal()}$</p>
      <p>Referencia: {currencyRef}</p>
    </div>
  );
};

export default Ruta;
