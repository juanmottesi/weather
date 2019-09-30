import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../reducers/actions';
import WeatherGraph from './WeatherGraph';
import FiveDaysRow from './FiveDaysRow';
import WeatherDay from './WeatherDay';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: undefined,
      isLoading: true,
    };
  }

  componentDidMount() {
    const { setCurrentCity } = this.props;
    setCurrentCity();
  }

  componentDidUpdate(prevProps) {
    const { selectedCity, updateWeather, weathers } = this.props;
    if (selectedCity && prevProps.selectedCity !== selectedCity) {
      /* eslint-disable-next-line react/no-did-update-set-state */
      this.setState(
        { selectedDate: undefined, isLoading: true },
        () => updateWeather(selectedCity),
      );
    }
    if (weathers !== prevProps.weathers) {
      /* eslint-disable-next-line react/no-did-update-set-state */
      this.setState({ isLoading: false });
    }
  }

  selectDate(selectedDate) {
    this.setState({ selectedDate });
  }

  render() {
    const { selectedCity, weathers } = this.props;
    const { isLoading } = this.state;
    if (!selectedCity || !weathers || isLoading) {
      return (
        <div className="container container-top">
          <div className="card empty-card">
            <div className="spinner-grow center-spinner" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      );
    }
    const currentWeather = this.state.selectedDate || weathers[0];
    const firstWeather = currentWeather.detailsPerDay[0];

    const title = `${selectedCity.city}, ${selectedCity.country}`;
    const description = `${Math.floor(firstWeather.temp)}º`;
    const { icon } = firstWeather;
    const altDescription = firstWeather.description;

    return (
      <div className="container container-top">
        <div className="card">
          <div className="card-body">
            {
              <WeatherDay
                title={title}
                description={description}
                icon={icon}
                altDescription={altDescription}
              />
            }
            {<WeatherGraph detailsPerDay={currentWeather.detailsPerDay} />}
            {
              <FiveDaysRow
                weathers={weathers}
                onSelectDate={(selected) => this.selectDate(selected)}
              />
            }
          </div>
        </div>
      </div>
    );
  }
}

City.propTypes = {
  setCurrentCity: Proptypes.func.isRequired,
  updateWeather: Proptypes.func.isRequired,
  selectedCity: Proptypes.shape({
    city: Proptypes.string,
    country: Proptypes.string,
    lat: Proptypes.number,
    lon: Proptypes.number,
  }),
  weathers: Proptypes.arrayOf(Proptypes.shape({
    detailsPerDay: Proptypes.arrayOf(Proptypes.shape({
      date: Proptypes.date,
      icon: Proptypes.string,
      temp: Proptypes.number,
      temp_min: Proptypes.number,
      temp_max: Proptypes.number,
    })),
  })),
};

City.defaultProps = {
  selectedCity: undefined,
  weathers: undefined,
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
  weathers: state.weathers,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentCity: () => dispatch(actions.setCurrentCity()),
  updateWeather: (city) => dispatch(actions.updateWeather(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
