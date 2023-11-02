import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

const NavBar = () => {
  const { logout: logoutFromContext } = useContext(Context);
  const navegacion = useNavigate();
  const logout = () => {
    navegacion("/login", { replace: true });
    logoutFromContext();
  };
  return (
    <>
      <nav className="flex gap-4 p-4 shadow-md">
        <NavLink to="capitalYPatagonia">Capital y Patagonia</NavLink>
        <NavLink to="norteYEste">Norte y Este</NavLink>
        <NavLink to="ruta">Ruta</NavLink>
        <button onClick={logout}>logout</button>
      </nav>
    </>
  );
};

export default NavBar;
