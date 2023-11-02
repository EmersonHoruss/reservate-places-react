import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

const Login = () => {
  const currencyRef = useRef("");
  const { login: loginFromContext } = useContext(Context);
  const navegacion = useNavigate();
  const login = () => {
    navegacion("/", { replace: true });
    loginFromContext(currencyRef.current.value);
  };
  return (
    <div>
      <p>Vive el país</p>
      <div>
        <label htmlFor="currencyRef">Referencia: </label>
        <input className="border-2" type="text" id="currencyRef" ref={currencyRef} />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login;
