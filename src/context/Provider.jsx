import React, { useReducer } from "react";
import { Context } from "./Context";
import { MyReducer } from "./MyReducer";
import { types } from "./types";
import data from "./data";

const init = () => {
  const valor = localStorage.getItem("state");
  const data = JSON.parse(localStorage.getItem("data"));
  const currencyRef = localStorage.getItem("currencyRef");
  return {
    state: !!valor,
    currencyRef,
    data,
  };
};

const Provider = ({ children }) => {
  const [logeado, dispatch] = useReducer(MyReducer, {}, init);
  const login = (currencyRef) => {
    const action = { type: types.login, currencyRef, data: [...data] };
    localStorage.setItem("state", true);
    localStorage.setItem("currencyRef", currencyRef);
    localStorage.setItem("data", JSON.stringify(data));
    dispatch(action);
  };
  const logout = () => {
    const action = { type: types.logout };
    localStorage.removeItem("state");
    localStorage.removeItem("currencyRef");
    localStorage.removeItem("data");
    dispatch(action);
  };
  const hire = (name) => {
    const action = { type: types.hire, placeName: name };
    dispatch(action);
  };
  const unhire = (name) => {
    const action = { type: types.unhire, placeName: name };
    dispatch(action);
  };
  console.log(logeado)
  return (
    <Context.Provider value={{ ...logeado, login, logout, hire, unhire }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
