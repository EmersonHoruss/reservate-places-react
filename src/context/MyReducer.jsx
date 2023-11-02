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
      let data = state.data.map((place) => {
        if (place.name === action.placeName) {
          return { ...place, isHired: true };
        }
        return place;
      });
      localStorage.setItem("data", JSON.stringify(data));
      return {
        ...state,
        data,
      };
    case types.unhire:
      data = state.data.map((place) => {
        if (place.name === action.placeName) {
          return { ...place, isHired: false };
        }
        return place;
      });
      localStorage.setItem("data", JSON.stringify(data));
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
};
