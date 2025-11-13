import React, { useState, useEffect } from 'react';

const WeatherFetcher = ({ lat, lon, adress }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [locationName, setLocationName] = useState(adress);
  const [currentDate, setCurrentDate] = useState('');
  const [toDateForecast, setToDateForecast] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // ✅ Helper: Get formatted date/time
  const getFormattedDate = (offsetDays = 0) => {
    const now = new Date();
    now.setDate(now.getDate() + offsetDays);
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getFormattedTime = () => {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' };
    return now.toLocaleString('en-US', options);
  };

  // ✅ Fetch weather data
  const fetchWeatherData = async (latitude, longitude) => {
    const startDate = getFormattedDate();
    const endDate = getFormattedDate(1);

    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m&timezone=auto&start_date=${startDate}&end_date=${endDate}&current=temperature_2m,relative_humidity_2m,precipitation,rain,apparent_temperature`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // ✅ Fetch location details
  const fetchLocationDetails = async (ip) => {
    try {
    console.log("ip",ip);
      const response = await fetch(`https://ip-api.com/json/${ip}`);
      const data = await response.json();
      setLocationName(data.city);
      fetchWeatherData(data.lat, data.lon);
    } catch (error) {
      console.error('Error fetching location details:', error);
    }
  };

  // ✅ Fetch public IP
  const fetchIPAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      fetchLocationDetails(data.ip);
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };

  useEffect(() => {
    // Set date/time before any fetch
    setCurrentDate(getFormattedDate());
    setToDateForecast(getFormattedDate(1));
    setCurrentTime(getFormattedTime());

    if (lat && lon) {
      fetchWeatherData(lat, lon);
    } else {
      fetchIPAddress();
    }

    // Optional: live update clock
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 60000);

    return () => clearInterval(interval);
  }, [lat, lon]);

  return (
    <div className="flex justify-center relative bg-gray-900">
      <div className="mt-10 bg-gradient-to-b from-purple-500 to-black text-white p-6 rounded-lg w-80 font-sans shadow-lg">
        {weatherData ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Weather Data:</h2>
            <div className="flex flex-col space-y-2">
              <p><span className="mr-2">📍</span> Location: {locationName}</p>
              <p><span className="mr-2">📅</span> Date: {currentDate}</p>
              <p><span className="mr-2">⏰</span> Time: {currentTime}</p>
              <p><span className="mr-2">🌡️</span> Temperature: {weatherData.current?.temperature_2m}°C</p>
              <p><span className="mr-2">💧</span> Humidity: {weatherData.current?.relative_humidity_2m}%</p>
            </div>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherFetcher;
