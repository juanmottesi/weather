import React from 'react';
import Proptypes from 'prop-types';

const iconURL = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

function WeatherDay(props) {
  const {
    title, icon, altDescription, description, onClick, isActive,
  } = props;
  return (
    <button type="button" className={`btn ${isActive && 'active'}`} onClick={onClick}>
      <div className="row">
        <div className="col-4">
          <img className="img-fluid" src={iconURL(icon)} alt={altDescription} />
        </div>
        <div className="col-8">
          <div className="row">
            <h5>{title}</h5>
          </div>
          <div className="row">
            <small>{description}</small>
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
  isActive: Proptypes.bool,
};

WeatherDay.defaultProps = {
  title: '',
  description: '',
  altDescription: '',
  onClick: () => {},
  isActive: false,
};

export default WeatherDay;
