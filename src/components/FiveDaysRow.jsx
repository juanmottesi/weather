import React from 'react';
import Proptypes from 'prop-types';
import WeatherDay from './WeatherDay';

function FiveDaysRow(props) {
  const { weathers, onSelectDate } = props;
  const tempOfDay = (weather) => `${Math.floor(weather.detailsPerDay[0].temp_min)}º / ${Math.floor(weather.detailsPerDay[0].temp_max)}º`;
  return (
    <div className="row">
      {
        weathers.map((weather, index) => (
          <div key={`${index}_day`} className="col-2">
            <WeatherDay
              title="DOM."
              description={tempOfDay(weather)}
              altDescription=""
              icon={weather.detailsPerDay[0].icon}
              onClick={() => onSelectDate(weather)}
            />
          </div>
        ))
      }
    </div>
  );
}

FiveDaysRow.propTypes = {
  weathers: Proptypes.arrayOf(Proptypes.shape({
    detailsPerDay: Proptypes.arrayOf(Proptypes.shape({
      date: Proptypes.date,
      icon: Proptypes.string,
      temp_min: Proptypes.number,
      temp_max: Proptypes.number,
    })),
  })),
  onSelectDate: Proptypes.func.isRequired,
};

FiveDaysRow.defaultProps = {
  weathers: [],
};

export default FiveDaysRow;
