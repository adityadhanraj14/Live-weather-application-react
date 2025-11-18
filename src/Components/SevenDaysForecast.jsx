import { useTheme } from '../contexts/ThemeContext';

const SevenDaysForecast = () => {
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
  // Sunrise and Sunset times (example)
  const sunTimes = {
    sunrise: '6:30 AM',
    sunset: '7:45 PM',
  };
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-surface-700 text-white' : 'bg-white text-gray-900'} rounded-2xl w-full`}>
      <h2 className="text-lg font-semibold mb-4">7-Day Forecast</h2>
      <div className="flex flex-wrap justify-between gap-2 pb-2 w-full">
        {forecast.map((day, idx) => (
          <div
            key={idx}
            className={`${isDarkMode ? 'bg-surface-600' : 'bg-gray-50'} rounded-xl p-4 w-full max-w-[90px] text-center flex-1`}
            style={{ minWidth: '70px' }}
          >
            <p className="text-sm font-semibold mb-2">{day.day}</p>
            <div className="text-3xl mb-2">{day.icon}</div>
            <p className="text-lg font-bold">{day.temp}°</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Sunrise Card */}
        <div className={`${isDarkMode ? 'sunrise bg-surface-600' : 'sunrise bg-gray-50'} rounded-xl p-4 flex items-center justify-center gap-3`}>
          <div className="text-4xl">🌅</div>
          <div className="text-center">
            <p className="text-sm font-semibold">Sunrise</p>
            <div className="text-lg font-bold">{sunTimes.sunrise}</div>
          </div>
        </div>

        {/* Sunset Card */}
        <div className={`${isDarkMode ? 'sunset bg-surface-600' : 'sunset bg-gray-50'} rounded-xl p-4 flex items-center justify-center gap-3`}>
          <div className="text-4xl">🌇</div>
          <div className="text-center">
            <p className="text-sm font-semibold">Sunset</p>
            <div className="text-lg font-bold">{sunTimes.sunset}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SevenDaysForecast;