import React from 'react';
import Proptypes from 'prop-types';

function CityNavbar(props) {
  const { city, onClick, isActive } = props;
  return (
    <li className={`nav-item ${isActive && 'active'}`}>
      <button className="nav-link btn btn-link" type="button" onClick={() => onClick(city)}>{city.city}</button>
    </li>
  );
}

CityNavbar.propTypes = {
  city: Proptypes.shape({
    city: Proptypes.string,
    lat: Proptypes.number,
    lon: Proptypes.number,
    country: Proptypes.string,
  }).isRequired,
  onClick: Proptypes.func.isRequired,
  isActive: Proptypes.bool.isRequired,
};

export default CityNavbar;
