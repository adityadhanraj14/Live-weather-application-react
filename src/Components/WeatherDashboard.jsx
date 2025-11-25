import React from 'react';
import { Cloud, CloudRain, Sun, Wind, Eye, Droplets, AlertCircle } from 'lucide-react';

const WeatherDashboard = () => {
  // Hardcoded weather data - replace with API calls later
  const weatherData = {
    location: 'Dhaka, Bangladesh',
    currentDay: 'Friday',
    time: '11:45 AM',
    temp: 16,
    condition: 'Cloudy',
    feelsLike: 18,
    windSpeed: '6 kmph',
    sunrise: '5:30AM',
    sunset: '6:45',
    pressure: '100MB',
    humidity: '91%',
    visibility: '04 km',
    uvIndex: 5.50,
    dewPoint: '27°C',
    chanceOfRain: true,
  };

  // 7-day forecast data
  const forecast = [
    { day: 'SAT', temp: 10, condition: 'cloud', icon: '☁️' },
    { day: 'SUN', temp: 15, condition: 'rainy', icon: '🌧️' },
    { day: 'MON', temp: 11, condition: 'rainy', icon: '🌧️' },
    { day: 'TUE', temp: 10, condition: 'cloudy', icon: '☁️' },
    { day: 'WED', temp: 12, condition: 'rainy', icon: '🌧️' },
    { day: 'THU', temp: 10, condition: 'cloudy', icon: '☁️' },
    { day: 'FRI', temp: 10, condition: 'Rainy', icon: '☁️' },
  ];

  // Other cities data
  const otherCities = [
    { name: 'China - Beijing', condition: 'Cloudy', icon: '☁️' },
    { name: 'US - California', condition: 'Windy', icon: '💨' },
    { name: 'Dubai - Arab Emirates', condition: 'Mostly Sunny', icon: '☀️' },
    { name: 'Canada - Charlottetown', condition: 'Light Snow Shower', icon: '❄️' },
  ];

  // Rain chance hourly data
  const rainChance = [
    { time: '10AM', chance: 40 },
    { time: '11AM', chance: 60 },
    { time: '12AM', chance: 80 },
    { time: '01PM', chance: 50 },
    { time: '02PM', chance: 70 },
    { time: '03PM', chance: 45 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Top Header with Location */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 text-accent">📍</div>
          <h1 className="text-2xl font-semibold">{weatherData.location}</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-surface-700 rounded-full flex items-center justify-center cursor-pointer">🔍</div>
          <div className="w-10 h-10 bg-surface-700 rounded-full flex items-center justify-center cursor-pointer">🌙</div>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer text-black">👤</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-6 mb-8 border-b border-surface-600 pb-3">
        <button className="text-muted-400 hover:text-white">Today</button>
        <button className="text-muted-400 hover:text-white">Tomorrow</button>
        <button className="text-accent font-semibold">Next 7days</button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Main Weather Card */}
        <div className="col-span-1">
          <div className="text-white bg-gradient-to-br from-blue-00 to-blue-900 rounded-3xl p-6 text-gray-900">
            <div className="mb-4">
              <p className="text-sm font-semibold">{weatherData.currentDay}</p>
              <p className="text-xs text-gray-700">{weatherData.time}</p>
            </div>

            <div className="mb-6">
              <div className="text-6xl font-bold">{weatherData.temp}°</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="text-4xl">⛅</div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Real feel</span>
                <span className="font-semibold">{weatherData.feelsLike}°</span>
              </div>
              <div className="flex justify-between">
                <span>Wind N-E</span>
                <span className="font-semibold">{weatherData.windSpeed}</span>
              </div>
              <div className="flex justify-between">
                <span>Pressure</span>
                <span className="font-semibold">{weatherData.pressure}</span>
              </div>
              <div className="flex justify-between">
                <span>Humidity</span>
                <span className="font-semibold">{weatherData.humidity}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunrise</span>
                <span className="font-semibold">{weatherData.sunrise}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunset</span>
                <span className="font-semibold">{weatherData.sunset}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - 7 Day Forecast + Rain Chart */}
        <div className="col-span-2 space-y-6">
          {/* 7 Day Forecast */}
          <div className="bg-surface-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">7-Day Forecast</h2>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {forecast.map((day, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 bg-surface-600 rounded-xl p-4 w-24 text-center"
                >
                  <p className="text-sm font-semibold mb-2">{day.day}</p>
                  <div className="text-3xl mb-2">{day.icon}</div>
                  <p className="text-lg font-bold">{day.temp}°</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chance of Rain Chart */}
          <div className='col-span-3'>hello</div>
          <div className="bg-surface-700 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Chance Of Rain</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-accent-500 rounded-full text-sm text-black font-semibold">
                  Forecast
                </button>
                <button className="px-3 py-1 bg-surface-600 rounded-full text-sm">
                  Air Quality
                </button>
              </div>
            </div>

            {/* Chart placeholder */}
            <div className="h-40 bg-surface-600 rounded-lg flex items-center justify-center relative">
              <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
                <polyline
                  points="0,100 50,80 100,60 150,90 200,40 250,70 300,50"
                  fill="none"
                  stroke="#ff8a3d"
                  strokeWidth="2"
                />
              </svg>
              <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
                {rainChance.map((item, idx) => (
                  <div key={idx} className="text-xs text-center">
                    <div className="text-muted-400">{item.time}</div>
                    <div className="text-xs mt-1">{item.chance}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Other Cities & Details */}
        <div className="col-span-1 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-700 rounded-xl p-4">
              <p className="text-sm text-muted-400 mb-2">Wind Status</p>
              <p className="text-2xl font-bold">{weatherData.windSpeed}</p>
              <p className="text-xs text-muted-400 mt-2">Wind Speed</p>
            </div>

            <div className="bg-surface-700 rounded-xl p-4">
              <p className="text-sm text-muted-400 mb-2">UV Index</p>
              <p className="text-2xl font-bold">{weatherData.uvIndex}</p>
              <p className="text-xs text-muted-400 mt-2">High</p>
            </div>

            <div className="bg-surface-700 rounded-xl p-4">
              <p className="text-sm text-muted-400 mb-2">Humidity</p>
              <p className="text-2xl font-bold">{weatherData.humidity}</p>
              <p className="text-xs text-muted-400 mt-2">High</p>
            </div>

            <div className="bg-surface-700 rounded-xl p-4">
              <p className="text-sm text-muted-400 mb-2">Visibility</p>
              <p className="text-2xl font-bold">{weatherData.visibility}</p>
              <p className="text-xs text-muted-400 mt-2">Moderate</p>
            </div>
          </div>

          {/* Other Cities */}
          <div className="bg-surface-700 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Other Cities</h2>
              <button className="text-accent text-sm">See All</button>
            </div>
            <div className="space-y-3">
              {otherCities.map((city, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">{city.name.split(' - ')[1]}</p>
                    <p className="text-xs text-muted-400">{city.condition}</p>
                  </div>
                  <div className="text-2xl">{city.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
