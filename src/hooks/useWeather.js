import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../api";

const useWeather = (lat, long) => {
  return useQuery({
    queryKey: ["weather-1", lat, long],
    queryFn: fetchWeather,
    // refetchInterval: 1000 * 60 * 1,
    // refetchIntervalInBackground: false,
    //  refetchOnWindowFocus: true,
    // staleTime: 0
  });
};

export default useWeather;
