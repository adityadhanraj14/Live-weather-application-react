import React from 'react';
import { useWeatherContext } from '../contexts/WeatherContext';
import useWeather from '../../query/useWeather';
import { getWeatherIcon } from '../helper/weatherIcons';

// hourly: { time: string[], temperature_2m: number[] }
const HourlyTemperatures = ({ title = "Today (24h)" }) => {
  const { lat, lon } = useWeatherContext();
  const { data, isLoading, error } = useWeather(lat, lon);

  const hourly = data?.hourly;

  if (isLoading) return <div className="bg-surface-700 rounded-2xl text-white p-4">Loading...</div>;

  if (!hourly || !hourly.time || !hourly.temperature_2m) {
    return (
      <div className="bg-surface-700 rounded-2xl text-white p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <div className="text-sm text-muted-400">No hourly data available</div>
      </div>
    );
  }

  // Determine today's date in YYYY-MM-DD (local)
  const now = new Date();
  const pad = (n) => (n < 10 ? `0${n}` : `${n}`);
  const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

  // Collect indices for entries that belong to today's date
  const indices = hourly.time
    .map((t, idx) => ({ t, idx }))
    .filter(({ t }) => t.startsWith(today))
    .slice(0, 24)
    .map((o) => o.idx);

  const hourlyForToday = indices.map((i) => ({
    time: hourly.time[i],
    temp: hourly.temperature_2m[i],
  }));

  // Responsive grid: show many on large screens, wrap on small screens
  return (
    <div className="bg-surface-700 rounded-2xl text-white p-4">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2">
        {hourlyForToday.map((h, idx) => {
          const hour = new Date(h.time).getHours();
          const label = `${hour}:00`;
          const code = hourly.weathercode && hourly.weathercode[indices[idx]];
          const icon = getWeatherIcon(code);
          return (
            <div
              key={idx}
              className="bg-surface-600 rounded-lg p-2 text-center flex flex-col items-center"
              title={h.time}
            >
              <div className="text-xs text-muted-300 mb-1">{label}</div>
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-lg font-bold">{Math.round(h.temp)}°</div>
            </div>
          );
        })}
      </div>
      {hourlyForToday.length === 0 && (
        <div className="text-sm text-muted-400 mt-3">No data for today</div>
      )}
    </div>
  );
};



export default HourlyTemperatures;
