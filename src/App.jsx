import { useState, useEffect } from 'react';
import Header from './Components/Header/header';
import SearchBar from './Components/SearchBar/search_bar';
import BigCard from './Components/BigCard/bigcard';

function App() {
  const [location, setLocation] = useState({ lat: null, lon: null, adress: 'Current Location' });

  useEffect(() => {
    const fetchWeatherData = async (latitude, longitude, city) => {
      setLocation({ lat: latitude, lon: longitude, adress: city });
    };

    const fetchLocationDetails = async (ip) => {
      try {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        const data = await response.json();
        console.log(data);
        const adress = data.city+" / "+data.country;
        fetchWeatherData(data.lat, data.lon, adress);
      } catch (error) {
        console.error('Error fetching location details:', error);
      }
    };

    const fetchIPAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        fetchLocationDetails(data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    if (!location.lat && !location.lon) {
      fetchIPAddress();
    }
  }, [location.lat, location.lon]);

  const handlePlaceSelected = (lat, lon, adress) => {
    setLocation({ lat, lon, adress });
  };

  return (
    <>
      <Header />
      <SearchBar onPlaceSelected={handlePlaceSelected} />
      {location.lat && location.lon && (
        <BigCard lat={location.lat} lon={location.lon} adress={location.adress} />
      )}
    </>
  );
}

export default App;


