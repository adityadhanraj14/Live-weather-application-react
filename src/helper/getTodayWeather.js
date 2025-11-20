export const getTodayWeather = (data) => {
  const date = new Date(data.current_weather.time);

  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  const hourString = date.toISOString().slice(0, 13) + ":00";
  const index = data.hourly.time.indexOf(hourString);

  return {
    day: dayName,
    time,
    temp: `${data.current_weather.temperature} ${data.current_weather_units.temperature}`,
    feelsLike: `${data.hourly.apparent_temperature[index]} ${data.current_weather_units.temperature}`,
    windSpeed: `${data.current_weather.windspeed} ${data.current_weather_units.windspeed}`,
    pressure: `${data.hourly.surface_pressure[index]} ${data.hourly_units.surface_pressure}`,
    humidity: `${data.hourly.relative_humidity_2m[index]} ${data.hourly_units.relative_humidity_2m}`,
  };
};
