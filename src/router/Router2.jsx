import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import CapitalYPatagonia from "../pages/CapitalYPatagonia";
import NorteYEste from "../pages/NorteYEste";
import Ruta from "../pages/Ruta";
import Lugar from "../pages/Lugar";

const Router2 = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="capitalYPatagonia" element={<CapitalYPatagonia />}></Route>
        <Route path="norteYEste" element={<NorteYEste />}></Route>
        <Route path="ruta" element={<Ruta />}></Route>
        <Route path="lugar/:name" element={<Lugar />}></Route>
        <Route path="/" element={<Navigate to="capitalYPatagonia" />}></Route>
      </Routes>
    </>
  );
};

export default Router2;
