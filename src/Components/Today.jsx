import { CardLoader } from "../CommonComponents/Loader";
import { getTodayWeather } from "../helper/getTodayWeather";
import useWeather from "../hooks/useWeather";

const Today = () => {

  const { data, isLoading, error } = useWeather(12.9163655, 77.6101167);
  if (isLoading) return <CardLoader/>;
  if (error) return <div>Something went wrong</div>;
  const weatherData = getTodayWeather(data);
  return (


    <div className="col-span-1 text-white bg-gradient-to-br from-blue-00 to-blue-900 rounded-3xl p-6">
      <div className="flex mb-4">
        <p className="text-lg font-semibold text-white">{weatherData.day}</p>
        <p className="text-md font-semibold ml-auto">{weatherData.time}</p>
      </div>

      <div className="flex mb-6">
        <div className="text-6xl font-bold">{weatherData.temp}</div>
        <div className="flex items-center gap-2 mt-2 ml-auto">
          <div className="text-5xl">⛅</div>
        </div>
      </div>

      <div className="space-y-2 text-sm px-auto">
        <div className="flex justify-between">
          <span>Real feel</span>
          <span className="font-semibold">{weatherData.feelsLike}</span>
        </div>
        <div className="flex justify-between ">
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
        {/* <div className="flex justify-between">
                <span>Sunrise</span>
                <span className="font-semibold">{weatherData.sunrise}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunset</span>
                <span className="font-semibold">{weatherData.sunset}</span>
              </div> */}
      </div>
    </div>
  )
}
export default Today;