import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.error(err)
    );
    return <div>Latitude: </div>
}

ReactDOM.render(<App />, document.getElementById('root'));
