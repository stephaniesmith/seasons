import { useState, useEffect } from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => setLat(coords.latitude),
      ({ message }) => setErrorMessage(message)
    );
  }, []);

  return [lat, errorMessage];
};
