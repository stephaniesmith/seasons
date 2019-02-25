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
  const month = new Date().getMonth();
  const season = getSeason(lat, month);

  console.log(season);

  return (
    <div>
      {season === 'winter'
        ? 'Burr, it is chilly'
        : 'Lets hit the beach'}
    </div>
  );
};

SeasonDisplay.propTypes = {

};

export default SeasonDisplay;
