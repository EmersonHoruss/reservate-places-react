import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/Context";

function PrivateRoutes({ children }) {
  const { state: isLogged } = useContext(Context);
  return isLogged ? children : <Navigate to="/login" />;
}

export default PrivateRoutes;
