import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import SeasonDisplay from './SeasonDisplay';

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
      {!lat && !errorMessage && <p>Loading...</p>}
    </div>
  );
}
}

ReactDOM.render(<App />, document.getElementById('root'));
