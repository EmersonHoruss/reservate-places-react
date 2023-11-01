import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Navigate } from "react-router-dom";

function PublicRoutes({ children }) {
  const { state: isLogged } = useContext(Context);
  return isLogged ? <Navigate to="/" /> : children;
}

export default PublicRoutes;
