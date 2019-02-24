import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lat: null,
			errorMessage: ''
		}

		window.navigator.geolocation.getCurrentPosition(
			({ coords }) => this.setState({ lat: coords.latitude }),
			({ message }) => this.setState({ errorMessage: message})
		);
	}

	render() {
		const { lat, errorMessage } = this.state;
		
		return (
			<div>
				{lat && <p>Latitude: {lat}</p>}
				{errorMessage && <p>Error: {errorMessage}</p>}
				{!lat && !errorMessage && <p>Loading...</p>}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
