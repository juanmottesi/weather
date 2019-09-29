import React from 'react';
import Proptypes from 'prop-types';
import { Line } from 'react-chartjs-2';

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
        }],
      }}
      options={{
        legend: { display: false },
        scales: {
          xAxes: [{
            gridLines: { display: false },
            ticks: { display: false },
          }],
          yAxes: [{
            gridLines: { display: false },
            ticks: { display: false },
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
