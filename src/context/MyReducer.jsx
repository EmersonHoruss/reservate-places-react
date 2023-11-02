import { types } from "./types";

export const MyReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        state: true,
        currencyRef: action.currencyRef,
        data: action.data,
      };
    case types.logout:
      return {
        state: false,
        currencyRef: null,
        data: null,
      };
    case types.hire:
      const data = state.data.map((place) => {
        if (place.nombre === action.placeName) {
          return { ...place, isHired: true };
        }
        return {...place};
      });
      localStorage.setItem("data", JSON.stringify(data));
      return {
        ...state,
        data,
      };
    case types.unhire:
      const data2 = state.data.map((place) => {
        if (place.nombre === action.placeName) {
          return { ...place, isHired: false };
        }
        return {...place};
      });
      localStorage.setItem("data", JSON.stringify(data2));
      return {
        ...state,
        data:data2,
      };
    default:
      return state;
  }
};
