import { useTheme } from '../contexts/ThemeContext';
import useWeather from '../../query/useWeather';
import { get7DayForecast, getSunTimes } from '../helper/get7DayForecast';
import { ParragraphLoader } from '../CommonComponents/Loader';
import { useWeatherContext } from '../contexts/WeatherContext';
import { getWeatherIcon } from '../helper/weatherIcons';

const SevenDaysForecast = () => {
  const { lat, lon } = useWeatherContext();
  const { data, isLoading, error } = useWeather(lat, lon);
  const { isDarkMode } = useTheme();

  if (isLoading) { return <ParragraphLoader />; }
  if (error) return <div>Something went wrong</div>;

  const forecast = get7DayForecast(data);
  const sunTimes = getSunTimes(data);

  return (
    <div className={`${isDarkMode ? 'bg-surface-700 text-white' : 'bg-white text-gray-900'} rounded-2xl w-full`}>
      <h2 className="text-lg font-semibold mb-4">7-Day Forecast</h2>
      <div className="flex flex-wrap justify-between gap-2 pb-2 w-full">
        {forecast.map((temp, idx) => {
          // Try to get weather code from daily data if available, otherwise fallback to generic
          const weatherCode = data?.daily?.weathercode?.[idx];
          const icon = getWeatherIcon(weatherCode);

          return (
            <div
              key={idx}
              className={`${isDarkMode ? 'bg-surface-600' : 'bg-gray-50'} rounded-xl p-4 w-full max-w-[90px] text-center flex-1`}
              style={{ minWidth: '70px' }}
            >
              <p className="text-sm font-semibold mb-2">{temp.day}</p>
              <div className="text-3xl mb-2">{icon}</div>
              <p className="text-lg font-bold">{Math.round(temp.min) + "°" + "/" + Math.round(temp.max) + "°"}</p>
            </div>
          );
        })}
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