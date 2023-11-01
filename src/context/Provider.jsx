import React, { useReducer } from "react";
import { Context } from "./Context";
import { MyReducer } from "./MyReducer";
import { types } from "./types";

const init = () => {
  const valor = localStorage.getItem("state");
  return {
    state: !!valor,
  };
};

const Provider = ({ children }) => {
  const [logeado, dispatch] = useReducer(MyReducer, {}, init);
  const login = (currencyRef) => {
    const action = { type: types.login, currencyRef };
    localStorage.setItem("state", true);
    dispatch(action);
  };
  const logout = () => {
    const action = { type: types.logout };
    localStorage.removeItem("state");
    dispatch(action);
  };
  return (
    <Context.Provider value={{ ...logeado, login, logout }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
