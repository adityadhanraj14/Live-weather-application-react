import React, { useState, useEffect } from 'react';

const WeatherFetcher = ({ lat, lon, adress }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [locationName, setLocationName] = useState(adress);
    const [currentDate, setCurrentDate] = useState('');
    const [ToDateForecast, setToDateForecast] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    useEffect(() => {
        const fetchWeatherData = async (latitude, longitude) => {
            try {

                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m&timezone=auto&start_date=${currentDate}&end_date=${ToDateForecast}&current=temperature_2m,relative_humidity_2m,precipitation,rain,apparent_temperature`);
                const data = await response.json();

                setWeatherData(data);
                setLocationName(adress)
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        const fetchLocationDetails = async (ip) => {
            try {
                const response = await fetch(`http://ip-api.com/json/${ip}`);
                const data = await response.json();
                setLocationName(data.city);
                fetchWeatherData(data.lat, data.lon);
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

        if (lat && lon) {
            fetchWeatherData(lat, lon);
        } else {
            fetchIPAddress();
        }


        const setDate = () => {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            setCurrentDate(formattedDate);
        };

        const setToDate = () => {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate() + 1).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            setToDateForecast(formattedDate);
        };


        const setTime = () => {
            const now = new Date();
            const options = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' };
            const formattedDateTime = now.toLocaleString('en-US', options);
            setCurrentTime(formattedDateTime);
        };

        setDate();
        setTime();
        setToDate();
    }, [lat, lon]);

    return (
        <div className="flex justify-center relative bg-gray-900">
            <div className="mt-10 bg-gradient-to-b from-purple-500 to-black text-white p-6 rounded-lg w-80 font-sans shadow-lg">
                {weatherData ? (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Weather Data:</h2>
                        <div className="flex flex-col space-y-2">
                            <p className="flex items-center"><span className="mr-2">📍</span> Location: {locationName}</p>
                            <p className="flex items-center"><span className="mr-2">📅</span> Date: {currentDate}</p>
                            <p className="flex items-center"><span className="mr-2">📅</span> Time: {currentTime}</p>
                            <p className="flex items-center"><span className="mr-2">🌡️</span> Temperature: {weatherData.current.temperature_2m}°C</p>
                            <p className="flex items-center"><span className="mr-2">💧</span> Humidity: {weatherData.current.relative_humidity_2m}%</p>
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
