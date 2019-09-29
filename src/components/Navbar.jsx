import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../reducers/actions';
import staticCities from '../static/cities';
import CityNavbar from './CityNavbar';

function Navbar(props) {
  const { changeCity, selectedCity, currentCity } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button type="button" className="navbar-brand btn btn-link" onClick={() => changeCity(currentCity)}>WeatherApp</button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {
            staticCities.map((city, index) => (
              <CityNavbar key={`city_navbar_${index}`} city={city} onClick={changeCity} isActive={selectedCity === city} />
            ))
          }
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  changeCity: Proptypes.func.isRequired,
  selectedCity: Proptypes.shape({
    city: Proptypes.string,
    lat: Proptypes.number,
    lon: Proptypes.number,
    country: Proptypes.string,
  }),
  currentCity: Proptypes.shape({
    city: Proptypes.string,
    lat: Proptypes.number,
    lon: Proptypes.number,
    country: Proptypes.string,
  }),
};

Navbar.defaultProps = {
  selectedCity: undefined,
  currentCity: undefined,
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
  currentCity: state.currentCity,
});
const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch(actions.changeCity(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
