import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
state = {
  lat: null,
  errorMessage: ''
};

componentDidMount() {
  window.navigator.geolocation.getCurrentPosition(
    ({ coords }) => this.setState({ lat: coords.latitude }),
    ({ message }) => this.setState({ errorMessage: message })
  );

}

render() {
  const { lat, errorMessage } = this.state;

  return (
    <div>
      {lat && <SeasonDisplay lat={lat}/>}
      {errorMessage && <p>Error: {errorMessage}</p>}
      {!lat && !errorMessage && <Spinner message="Please accept location request"/>}
    </div>
  );
}
}

ReactDOM.render(<App />, document.getElementById('root'));
