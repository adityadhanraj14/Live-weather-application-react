import React from 'react';
import useWeather from '../../query/useWeather';
import { getWeatherIcon } from '../helper/weatherIcons';
import { getTodayWeather } from '../helper/getTodayWeather';

const CityWeatherRow = ({ city }) => {
    const { data, isLoading, error } = useWeather(city.lat, city.lon);

    if (isLoading) {
        return (
            <div className="flex items-center justify-between animate-pulse">
                <div className="flex flex-col w-26">
                    <div className="h-4 bg-gray-600 rounded w-20 mb-1"></div>
                    <div className="h-3 bg-gray-600 rounded w-12"></div>
                </div>
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <div className="h-6 w-8 bg-gray-600 rounded"></div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="flex items-center justify-between text-red-400 text-xs">
                <span>Failed to load {city.name}</span>
            </div>
        );
    }

    const weatherData = getTodayWeather(data);
    // Use current_weather code or fallback to daily/hourly
    const weatherCode = data?.current_weather?.weathercode ?? data?.daily?.weathercode?.[0];
    const icon = getWeatherIcon(weatherCode);

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col w-26">
                <p className="font-semibold text-sm">{city.name}</p>
                <p className="text-xs text-muted-400">{weatherData.time}</p>
            </div>
            <div className="text-2xl">{icon}</div>
            <div className="text-xl font-semibold">{weatherData.temp}</div>
        </div>
    );
};

export default CityWeatherRow;
