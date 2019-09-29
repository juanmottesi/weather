import { CHANGE_CITY, SET_CURRENT_CITY_FULFILLED, UPDATE_WEATHER_FULFILLED } from './actions';

const initialState = { weathers: undefined, selectedCity: undefined, currentCity: undefined };

export default (state = { ...initialState }, { type, payload }) => {
  let newState;
  switch (type) {
    case SET_CURRENT_CITY_FULFILLED: {
      newState = { ...state, selectedCity: payload, currentCity: payload };
      break;
    }
    case CHANGE_CITY:
      newState = { ...state, selectedCity: payload };
      break;
    case UPDATE_WEATHER_FULFILLED:
      newState = { ...state, weathers: payload };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
};
