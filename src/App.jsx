import { useState } from 'react';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import SevenDaysForecast from './Components/SevenDaysForecast';
import Today from './Components/Today';
import ChanceOfRain from './Components/ChanceOfRain';
import OtherCities from './Components/OtherCities';
import HourlyTemperatures from './Components/HourlyTemperatures';
import WeatherImageCard from './Components/WeatherImageCard';
import { useTheme } from './contexts/ThemeContext';

const App = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <Header />
            <NavigationBar />
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 md:gap-6 px-4 md:px-6  w-full"
            >
                <div className="col-span-1 md:col-span-1 lg:col-span-3">
                    <Today />
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-4">
                    <SevenDaysForecast />
                </div>
                <div className="col-span-1 md:col-span-1 lg:col-span-3">
                    <ChanceOfRain />
                </div>
            </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4 w-full"
            >
                <div className="col-span-2">
                    <HourlyTemperatures />
                </div>
                <div className="col-span-1">
                    <OtherCities />
                </div>
                <div className="col-span-1">
                    <WeatherImageCard description="weather" title="Weather" />
                </div>
            </div>
        </div>
    );
};

export default App;