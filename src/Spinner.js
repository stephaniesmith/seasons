import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ message = 'loading' }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {message}
      </div>
    </div>
  );
};

Spinner.propTypes = {
  message: PropTypes.string,
};

export default Spinner;
