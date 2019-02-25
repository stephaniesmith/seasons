import React from 'react';
import PropTypes from 'prop-types';

const Spinner = () => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
          Loading...
      </div>
    </div>
  );
};

Spinner.propTypes = {

};

export default Spinner;
