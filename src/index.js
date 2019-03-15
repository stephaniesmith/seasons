import React from 'react';
import ReactDOM from 'react-dom'; 
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {

  const [lat, errorMessage] = useLocation();

  return (
    <div>
      {lat && <SeasonDisplay lat={lat}/>}
      {errorMessage && <p>Error: {errorMessage}</p>}
      {!lat && !errorMessage && <Spinner message="Please accept location request"/>}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
