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
      <nav>
        <NavLink to="page1">Page 1</NavLink>
        <NavLink to="page2">Page 2</NavLink>
        <NavLink to="page3">Page 3</NavLink>
        <button onClick={logout}>logout</button>
      </nav>
    </>
  );
};

export default NavBar;
