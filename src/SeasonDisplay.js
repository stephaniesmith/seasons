import './SeasonDisplay.css';
import React from 'react';
import PropTypes from 'prop-types';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'summer' : 'winter';
  }
};

const SeasonDisplay = ({ lat }) => {
  const month = new Date().getMonth();
  const season = getSeason(lat, month);
  const { text, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

SeasonDisplay.propTypes = {
  lat: PropTypes.number
};

export default SeasonDisplay;
