export const get7DayForecast = (data) => {

  return data.daily.time.map((date, i) => ({
    day: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
    max: data.daily.temperature_2m_max[i],
    min: data.daily.temperature_2m_min[i],
  }));
};
export const getSunTimes = (data) => {
  const sunrise = new Date(data.daily.sunrise[0]);
  const sunset = new Date(data.daily.sunset[0]);
  return {
    sunrise: sunrise.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  }),
    sunset: sunset.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  }),
  };
}