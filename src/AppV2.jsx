import { CardLoader, FullWidthLoader, PageLoader, ParragraphLoader, SmallTableLoader, SpinLoader } from './CommonComponents/Loader';
import Header from './Components/Header/header';
import NavigationBar from './Components/NavigationBar';
import SevenDaysForecast from './Components/SevenDaysForecast';
import Today from './Components/Today';
import ChanceOfRain from './Components/ChanceOfRain';
import OtherCities from './Components/OtherCities';
import HourlyTemperatures from './Components/HourlyTemperatures/HourlyTemperatures';
import WeatherDashboard from './Components/WeatherDashboard/WeatherDashboard';
import WeatherImageCard from './Components/WeatherImageCard/WeatherImageCard';
import useGeolocation from './hooks/useGeolocation';
import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { hourly } from '../constant';

const AppV2 = () => {
    const isLoading = false;
    const { latitude, longitude, error, loading } = useGeolocation();
    const [isDarkMode, setIsDarkMode] = useState(true);
    console.log("latitude: ", latitude, "longitude", longitude);
    return (
        <ThemeProvider value={{ isDarkMode, setIsDarkMode }}>
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-gray-900 p-2 gap-4 w-full"
                >
                    <div className="col-span-2">
                        <HourlyTemperatures hourly={hourly} />
                    </div>
                    <div className="col-span-1">
                        <OtherCities />
                    </div>
                    <div className="col-span-1">
                        <WeatherImageCard description="sunny weather" title="Sunny" />
                    </div>
                </div>
                {/* <NavigationBar />
            <div className='grid grid-cols-4 gap-6'>
                <div className='flex flex-row row-span-2 p-4 gap-6'>
                    <Today />
                    <SevenDaysForecast />
                </div>
                <div className='rightBar ml-auto'>

                </div>
            </div>
            {isLoading && <PageLoader />}
            <FullWidthLoader />
            <ParragraphLoader />
            <div className='relative bg-gray-800/50 flex justify-center item-center animate-pulse'><CardLoader /><SmallTableLoader /></div>
            {/* <SpinLoader isLoading/> */}
                {/* <WeatherDashboard /> */}
            </div>
        </ThemeProvider>
    );
};

export default AppV2;