export const fetchWeather = async ({ queryKey }) => {
  const [_, lat, lon] = queryKey;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Asia/Kolkata&hourly=temperature_2m,weathercode,apparent_temperature,surface_pressure,precipitation_probability,relative_humidity_2m&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min,uv_index_max`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather API failed");

  return res.json();
};

