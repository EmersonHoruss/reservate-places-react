import { types } from "./types";

export const MyReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        state: true,
        currencyRef: action.currencyRef,
      };
    case types.logout:
      return {
        state: false,
        currencyRef: "",
      };
    default:
      return state;
  }
};
