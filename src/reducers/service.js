import axios from 'axios';
import groupBy from 'lodash/groupBy';

const API_KEY_WEATHER_MAP = '33930ed4738f70b9516d95c04f980d22';

function transfromWeather(weather) {
  return {
    date: new Date(weather.dt * 1000),
    ...weather.main,
    icon: weather.weather[0].icon,
    description: weather.weather[0].main,
  };
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function transformWeathers(list) {
  const weathers = list.map(transfromWeather);
  const groupedWeathers = groupBy(weathers, (weather) => startOfDay(weather.date));
  return Object.keys(groupedWeathers)
    .sort((a, b) => a - b)
    .map((date) => ({ date: new Date(date), detailsPerDay: groupedWeathers[date] }));
}

export function getCurrentLocation() {
  return axios.get('http://ip-api.com/json/')
    .then(({ data }) => ({
      lat: data.lat,
      lon: data.lon,
      country: data.country,
      city: data.city,
    }));
}

export function getWeather(city) {
  const { lat, lon } = city;
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER_MAP}&units=metric`)
    .then(({ data }) => transformWeathers(data.list));
}
