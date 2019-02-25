import React from 'react';
import PropTypes from 'prop-types';

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'summer' : 'winter';
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());

  console.log(season);
  
  return (
    <div>
      Season display
    </div>
  );
};

SeasonDisplay.propTypes = {

};

export default SeasonDisplay;
