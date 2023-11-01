import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Page1 from "../pages/CapitalYPatagonia";
import Page2 from "../pages/NorteYEste";
import Page3 from "../pages/Ruta";

const Router2 = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="page1" element={<Page1 />}></Route>
        <Route path="page2" element={<Page2 />}></Route>
        <Route path="page3" element={<Page3 />}></Route>
        <Route path="/" element={<Navigate to="page1" />}></Route>
      </Routes>
    </>
  );
};

export default Router2;
