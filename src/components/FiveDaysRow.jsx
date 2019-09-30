import React from 'react';
import Proptypes from 'prop-types';
import WeatherDay from './WeatherDay';

function getDayOfWeek(number) {
  return ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'][number];
}

function getTempOfDay(weather) {
  return `${Math.floor(weather.detailsPerDay[0].temp_min)}º / ${Math.floor(weather.detailsPerDay[0].temp_max)}º`;
}

function FiveDaysRow(props) {
  const { weathers, onSelectDate } = props;
  return (
    <div className="row">
      {
        weathers.map((weather, index) => (
          <div key={`${index}_day`} className="col-2">
            <WeatherDay
              title={getDayOfWeek(weather.detailsPerDay[0].date.getDay())}
              description={getTempOfDay(weather)}
              altDescription={weather.detailsPerDay[0].description}
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
