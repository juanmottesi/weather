import React from 'react';
import Proptypes from 'prop-types';

const iconURL = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

function WeatherDay(props) {
  const {
    title, icon, altDescription, description, onClick,
  } = props;
  return (
    <button type="button" className="btn" onClick={onClick}>
      <div className="row">
        <div className="col-4">
          <img className="img-fluid img-min" src={iconURL(icon)} alt={altDescription} />
        </div>
        <div className="col-8">
          <div className="row">
            <h5>{title}</h5>
          </div>
          <div className="row">
            <span className="description">{description}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

WeatherDay.propTypes = {
  title: Proptypes.string,
  description: Proptypes.string,
  icon: Proptypes.string.isRequired,
  altDescription: Proptypes.string,
  onClick: Proptypes.func,
};

WeatherDay.defaultProps = {
  title: '',
  description: '',
  altDescription: '',
  onClick: () => {},
};

export default WeatherDay;
