import { getCurrentLocation, getWeather } from './service';

export const CHANGE_CITY = 'CHANGE_CITY';
export const CHANGE_CITY_FULFILLED = 'CHANGE_CITY_FULFILLED';
export const UPDATE_WEATHER = 'UPDATE_WEATHER';
export const UPDATE_WEATHER_FULFILLED = 'UPDATE_WEATHER_FULFILLED';
export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
export const SET_CURRENT_CITY_FULFILLED = 'SET_CURRENT_CITY_FULFILLED';


export default {
  changeCity(city) {
    return { type: CHANGE_CITY, payload: city };
  },
  updateWeather(city) {
    return { type: UPDATE_WEATHER, payload: getWeather(city) };
  },
  setCurrentCity() {
    return { type: SET_CURRENT_CITY, payload: getCurrentLocation() };
  },
};
