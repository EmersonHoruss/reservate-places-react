import React, { useContext } from "react";
import { Context } from "../context/Context";
import Card from "../components/Card";

const NorteYEste = () => {
  const { data: lugares } = useContext(Context);
  return (
    <div className="grid grid-cols-3 gap-4 m-4">
      {lugares
        .filter((lugar) => lugar.zona !== "cp")
        .map((lugar) => (
          <Card key={lugar.nombre} lugar={lugar} />
        ))}
    </div>
  );
};

export default NorteYEste;
