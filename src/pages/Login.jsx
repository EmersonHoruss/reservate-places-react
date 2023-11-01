import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

const Login = () => {
  const { login: loginFromContext } = useContext(Context);
  const navegacion = useNavigate();
  const login = () => {
    navegacion("/", { replace: true });
    loginFromContext();
  };
  return (
    <>
      <button onClick={login}>Login</button>
    </>
  );
};

export default Login;
