import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => setLat(coords.latitude),
      ({ message }) => setErrorMessage(message)
    );
  }, []);

  return (
    <div>
      {lat && <SeasonDisplay lat={lat}/>}
      {errorMessage && <p>Error: {errorMessage}</p>}
      {!lat && !errorMessage && <Spinner message="Please accept location request"/>}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
