import React from 'react';
import Proptypes from 'prop-types';
import { Line } from 'react-chartjs-2';

function getLowerTemp(detailsPerDay) {
  const minTemp = Math.min(...detailsPerDay.map((weather) => weather.temp));
  return minTemp < 0 ? minTemp - 1 : 0;
}

function WeatherGraph(props) {
  const { detailsPerDay } = props;
  return (
    <Line
      height={70}
      data={{
        labels: detailsPerDay.map((weather) => `${weather.date.getHours()}:00`),
        datasets: [{
          borderDash: [],
          data: detailsPerDay.map((weather) => Math.floor(weather.temp)),
          pointRadius: 5,
          backgroundColor: 'rgb(239, 164, 51, 0.6)',
          borderColor: 'rgb(239, 164, 51, 1)',
        }],
      }}
      options={{
        legend: { display: false },
        layout: { padding: { right: 5 } },
        scales: {
          xAxes: [{
            gridLines: { display: false, drawBorder: false },
            ticks: { display: false },
          }],
          yAxes: [{
            gridLines: { display: false, drawBorder: false },
            ticks: { display: false, max: 50, min: getLowerTemp(detailsPerDay) },
          }],
        },
      }}
    />
  );
}

WeatherGraph.defaultProps = {
  detailsPerDay: [],
};

WeatherGraph.propTypes = {
  detailsPerDay: Proptypes.arrayOf(Proptypes.shape({
    date: Proptypes.object,
    temp: Proptypes.number,
  })),
};

export default WeatherGraph;
